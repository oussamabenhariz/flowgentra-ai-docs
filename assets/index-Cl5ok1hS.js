var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),s=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},c=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},l=(n,r,a)=>(a=n==null?{}:e(i(n)),c(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var u=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function S(){}var C={H:null,A:null,T:null,S:null},te=Object.prototype.hasOwnProperty;function ne(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function w(e,t){return ne(e.type,t,e.props)}function T(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function re(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ie=/\/+/g;function ae(e,t){return typeof e==`object`&&e&&e.key!=null?re(``+e.key):t.toString(36)}function oe(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(S,S):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function se(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,se(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ae(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(ie,`$&/`)+`/`),se(o,r,i,``,function(e){return e})):o!=null&&(T(o)&&(o=w(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ie,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ae(a,u),c+=se(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ae(a,u++),c+=se(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return se(oe(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ce(e,t,n){if(e==null)return e;var r=[],i=0;return se(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function le(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var E=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},D={map:ce,forEach:function(e,t,n){ce(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ce(e,function(){t++}),t},toArray:function(e){return ce(e,function(e){return e})||[]},only:function(e){if(!T(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=D,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!te.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return ne(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)te.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return ne(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=T,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:le}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=C.T,n={};C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(S,E)}catch(e){E(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}},e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.2.4`})),d=o(((e,t)=>{t.exports=u()})),f=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,ee||(ee=!0,T());else{var t=n(l);t!==null&&ae(x,t.startTime-e)}}var ee=!1,S=-1,C=5,te=-1;function ne(){return g?!0:!(e.unstable_now()-te<C)}function w(){if(g=!1,ee){var t=e.unstable_now();te=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(S),S=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ne());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ae(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?T():ee=!1}}}var T;if(typeof y==`function`)T=function(){y(w)};else if(typeof MessageChannel<`u`){var re=new MessageChannel,ie=re.port2;re.port1.onmessage=w,T=function(){ie.postMessage(null)}}else T=function(){_(w,0)};function ae(t,n){S=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):C=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(S),S=-1):h=!0,ae(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,T()))),r},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),p=o(((e,t)=>{t.exports=f()})),m=o((e=>{var t=d();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.4`})),h=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=m()})),g=o((e=>{var t=p(),n=d(),r=h();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function u(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function f(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=f(e),t!==null)return t;e=e.sibling}return null}var m=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),S=Symbol.for(`react.context`),C=Symbol.for(`react.forward_ref`),te=Symbol.for(`react.suspense`),ne=Symbol.for(`react.suspense_list`),w=Symbol.for(`react.memo`),T=Symbol.for(`react.lazy`),re=Symbol.for(`react.activity`),ie=Symbol.for(`react.memo_cache_sentinel`),ae=Symbol.iterator;function oe(e){return typeof e!=`object`||!e?null:(e=ae&&e[ae]||e[`@@iterator`],typeof e==`function`?e:null)}var se=Symbol.for(`react.client.reference`);function ce(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===se?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case te:return`Suspense`;case ne:return`SuspenseList`;case re:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case S:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case C:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case w:return t=e.displayName||null,t===null?ce(e.type)||`Memo`:t;case T:t=e._payload,e=e._init;try{return ce(e(t))}catch{}}return null}var le=Array.isArray,E=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue={pending:!1,data:null,method:null,action:null},de=[],fe=-1;function pe(e){return{current:e}}function me(e){0>fe||(e.current=de[fe],de[fe]=null,fe--)}function O(e,t){fe++,de[fe]=e.current,e.current=t}var he=pe(null),ge=pe(null),_e=pe(null),ve=pe(null);function ye(e,t){switch(O(_e,t),O(ge,e),O(he,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}me(he),O(he,e)}function be(){me(he),me(ge),me(_e)}function xe(e){e.memoizedState!==null&&O(ve,e);var t=he.current,n=Hd(t,e.type);t!==n&&(O(ge,e),O(he,n))}function Se(e){ge.current===e&&(me(he),me(ge)),ve.current===e&&(me(ve),Qf._currentValue=ue)}var Ce,we;function Te(e){if(Ce===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Ce=t&&t[1]||``,we=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Ce+e+we}var Ee=!1;function De(e,t){if(!e||Ee)return``;Ee=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Ee=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Te(n):``}function Oe(e,t){switch(e.tag){case 26:case 27:case 5:return Te(e.type);case 16:return Te(`Lazy`);case 13:return e.child!==t&&t!==null?Te(`Suspense Fallback`):Te(`Suspense`);case 19:return Te(`SuspenseList`);case 0:case 15:return De(e.type,!1);case 11:return De(e.type.render,!1);case 1:return De(e.type,!0);case 31:return Te(`Activity`);default:return``}}function ke(e){try{var t=``,n=null;do t+=Oe(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ae=Object.prototype.hasOwnProperty,je=t.unstable_scheduleCallback,Me=t.unstable_cancelCallback,Ne=t.unstable_shouldYield,Pe=t.unstable_requestPaint,Fe=t.unstable_now,Ie=t.unstable_getCurrentPriorityLevel,Le=t.unstable_ImmediatePriority,Re=t.unstable_UserBlockingPriority,ze=t.unstable_NormalPriority,Be=t.unstable_LowPriority,Ve=t.unstable_IdlePriority,He=t.log,Ue=t.unstable_setDisableYieldValue,We=null,Ge=null;function Ke(e){if(typeof He==`function`&&Ue(e),Ge&&typeof Ge.setStrictMode==`function`)try{Ge.setStrictMode(We,e)}catch{}}var qe=Math.clz32?Math.clz32:Xe,Je=Math.log,Ye=Math.LN2;function Xe(e){return e>>>=0,e===0?32:31-(Je(e)/Ye|0)|0}var Ze=256,Qe=262144,$e=4194304;function et(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function tt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=et(n))):i=et(o):i=et(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=et(n))):i=et(o)):i=et(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function nt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function rt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function it(){var e=$e;return $e<<=1,!($e&62914560)&&($e=4194304),e}function at(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ot(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function st(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-qe(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&ct(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function ct(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-qe(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function lt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-qe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ut(e,t){var n=t&-t;return n=n&42?1:dt(n),(n&(e.suspendedLanes|t))===0?n:0}function dt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ft(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function pt(){var e=D.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function mt(e,t){var n=D.p;try{return D.p=e,t()}finally{D.p=n}}var ht=Math.random().toString(36).slice(2),gt=`__reactFiber$`+ht,_t=`__reactProps$`+ht,vt=`__reactContainer$`+ht,yt=`__reactEvents$`+ht,bt=`__reactListeners$`+ht,xt=`__reactHandles$`+ht,St=`__reactResources$`+ht,Ct=`__reactMarker$`+ht;function wt(e){delete e[gt],delete e[_t],delete e[yt],delete e[bt],delete e[xt]}function Tt(e){var t=e[gt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[vt]||n[gt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[gt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Et(e){if(e=e[gt]||e[vt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Dt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Ot(e){var t=e[St];return t||=e[St]={hoistableStyles:new Map,hoistableScripts:new Map},t}function kt(e){e[Ct]=!0}var At=new Set,jt={};function Mt(e,t){Nt(e,t),Nt(e+`Capture`,t)}function Nt(e,t){for(jt[e]=t,e=0;e<t.length;e++)At.add(t[e])}var Pt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Ft={},It={};function Lt(e){return Ae.call(It,e)?!0:Ae.call(Ft,e)?!1:Pt.test(e)?It[e]=!0:(Ft[e]=!0,!1)}function Rt(e,t,n){if(Lt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function k(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function zt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Bt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Vt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Ht(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ut(e){if(!e._valueTracker){var t=Vt(e)?`checked`:`value`;e._valueTracker=Ht(e,t,``+e[t])}}function Wt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Vt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Gt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Kt=/[\n"\\]/g;function qt(e){return e.replace(Kt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Jt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Bt(t)):e.value!==``+Bt(t)&&(e.value=``+Bt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Xt(e,o,Bt(n)):Xt(e,o,Bt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Bt(s):e.removeAttribute(`name`)}function Yt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Ut(e);return}n=n==null?``:``+Bt(n),t=t==null?n:``+Bt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Ut(e)}function Xt(e,t,n){t===`number`&&Gt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Zt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Bt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Qt(e,t,n){if(t!=null&&(t=``+Bt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Bt(n)}function $t(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(le(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Bt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Ut(e)}function en(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var tn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function nn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||tn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function rn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&nn(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&nn(e,o,t[o])}function an(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var on=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),sn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function cn(e){return sn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function ln(){}var un=null;function dn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fn=null,pn=null;function mn(e){var t=Et(e);if(t&&(e=t.stateNode)){var n=e[_t]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Jt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+qt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[_t]||null;if(!a)throw Error(i(90));Jt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Wt(r)}break a;case`textarea`:Qt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Zt(e,!!n.multiple,t,!1)}}}var hn=!1;function gn(e,t,n){if(hn)return e(t,n);hn=!0;try{return e(t)}finally{if(hn=!1,(fn!==null||pn!==null)&&(bu(),fn&&(t=fn,e=pn,pn=fn=null,mn(t),e)))for(t=0;t<e.length;t++)mn(e[t])}}function _n(e,t){var n=e.stateNode;if(n===null)return null;var r=n[_t]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var vn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),yn=!1;if(vn)try{var bn={};Object.defineProperty(bn,`passive`,{get:function(){yn=!0}}),window.addEventListener(`test`,bn,bn),window.removeEventListener(`test`,bn,bn)}catch{yn=!1}var xn=null,Sn=null,Cn=null;function wn(){if(Cn)return Cn;var e,t=Sn,n=t.length,r,i=`value`in xn?xn.value:xn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Cn=i.slice(e,1<r?1-r:void 0)}function Tn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function En(){return!0}function Dn(){return!1}function On(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?En:Dn,this.isPropagationStopped=Dn,this}return m(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=En)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=En)},persist:function(){},isPersistent:En}),t}var kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},An=On(kn),A=m({},kn,{view:0,detail:0}),jn=On(A),Mn,Nn,Pn,Fn=m({},A,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Pn&&(Pn&&e.type===`mousemove`?(Mn=e.screenX-Pn.screenX,Nn=e.screenY-Pn.screenY):Nn=Mn=0,Pn=e),Mn)},movementY:function(e){return`movementY`in e?e.movementY:Nn}}),In=On(Fn),Ln=On(m({},Fn,{dataTransfer:0})),Rn=On(m({},A,{relatedTarget:0})),zn=On(m({},kn,{animationName:0,elapsedTime:0,pseudoElement:0})),Bn=On(m({},kn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Vn=On(m({},kn,{data:0})),Hn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Un={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Wn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Gn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wn[e])?!!t[e]:!1}function Kn(){return Gn}var qn=On(m({},A,{key:function(e){if(e.key){var t=Hn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Tn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Un[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kn,charCode:function(e){return e.type===`keypress`?Tn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Tn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Jn=On(m({},Fn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),j=On(m({},A,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kn})),Yn=On(m({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Xn=On(m({},Fn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),M=On(m({},kn,{newState:0,oldState:0})),Zn=[9,13,27,32],Qn=vn&&`CompositionEvent`in window,$n=null;vn&&`documentMode`in document&&($n=document.documentMode);var er=vn&&`TextEvent`in window&&!$n,tr=vn&&(!Qn||$n&&8<$n&&11>=$n),N=` `,nr=!1;function rr(e,t){switch(e){case`keyup`:return Zn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function ir(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var ar=!1;function or(e,t){switch(e){case`compositionend`:return ir(t);case`keypress`:return t.which===32?(nr=!0,N):null;case`textInput`:return e=t.data,e===N&&nr?null:e;default:return null}}function sr(e,t){if(ar)return e===`compositionend`||!Qn&&rr(e,t)?(e=wn(),Cn=Sn=xn=null,ar=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return tr&&t.locale!==`ko`?null:t.data;default:return null}}var cr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!cr[e.type]:t===`textarea`}function P(e,t,n,r){fn?pn?pn.push(r):pn=[r]:fn=r,t=Ed(t,`onChange`),0<t.length&&(n=new An(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var ur=null,dr=null;function fr(e){yd(e,0)}function pr(e){if(Wt(Dt(e)))return e}function mr(e,t){if(e===`change`)return t}var hr=!1;if(vn){var gr;if(vn){var _r=`oninput`in document;if(!_r){var vr=document.createElement(`div`);vr.setAttribute(`oninput`,`return;`),_r=typeof vr.oninput==`function`}gr=_r}else gr=!1;hr=gr&&(!document.documentMode||9<document.documentMode)}function yr(){ur&&(ur.detachEvent(`onpropertychange`,br),dr=ur=null)}function br(e){if(e.propertyName===`value`&&pr(dr)){var t=[];P(t,dr,e,dn(e)),gn(fr,t)}}function xr(e,t,n){e===`focusin`?(yr(),ur=t,dr=n,ur.attachEvent(`onpropertychange`,br)):e===`focusout`&&yr()}function Sr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return pr(dr)}function Cr(e,t){if(e===`click`)return pr(t)}function wr(e,t){if(e===`input`||e===`change`)return pr(t)}function Tr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Er=typeof Object.is==`function`?Object.is:Tr;function Dr(e,t){if(Er(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ae.call(t,i)||!Er(e[i],t[i]))return!1}return!0}function Or(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function kr(e,t){var n=Or(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Or(n)}}function Ar(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ar(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function jr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Gt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gt(e.document)}return t}function Mr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Nr=vn&&`documentMode`in document&&11>=document.documentMode,Pr=null,Fr=null,Ir=null,Lr=!1;function Rr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Lr||Pr==null||Pr!==Gt(r)||(r=Pr,`selectionStart`in r&&Mr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ir&&Dr(Ir,r)||(Ir=r,r=Ed(Fr,`onSelect`),0<r.length&&(t=new An(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Pr)))}function zr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Br={animationend:zr(`Animation`,`AnimationEnd`),animationiteration:zr(`Animation`,`AnimationIteration`),animationstart:zr(`Animation`,`AnimationStart`),transitionrun:zr(`Transition`,`TransitionRun`),transitionstart:zr(`Transition`,`TransitionStart`),transitioncancel:zr(`Transition`,`TransitionCancel`),transitionend:zr(`Transition`,`TransitionEnd`)},Vr={},Hr={};vn&&(Hr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Br.animationend.animation,delete Br.animationiteration.animation,delete Br.animationstart.animation),`TransitionEvent`in window||delete Br.transitionend.transition);function Ur(e){if(Vr[e])return Vr[e];if(!Br[e])return e;var t=Br[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Hr)return Vr[e]=t[n];return e}var Wr=Ur(`animationend`),Gr=Ur(`animationiteration`),Kr=Ur(`animationstart`),qr=Ur(`transitionrun`),Jr=Ur(`transitionstart`),Yr=Ur(`transitioncancel`),Xr=Ur(`transitionend`),Zr=new Map,Qr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Qr.push(`scrollEnd`);function $r(e,t){Zr.set(e,t),Mt(t,[e])}var ei=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ti=[],ni=0,ri=0;function ii(){for(var e=ni,t=ri=ni=0;t<e;){var n=ti[t];ti[t++]=null;var r=ti[t];ti[t++]=null;var i=ti[t];ti[t++]=null;var a=ti[t];if(ti[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ci(n,i,a)}}function ai(e,t,n,r){ti[ni++]=e,ti[ni++]=t,ti[ni++]=n,ti[ni++]=r,ri|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function oi(e,t,n,r){return ai(e,t,n,r),li(e)}function si(e,t){return ai(e,null,null,t),li(e)}function ci(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-qe(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function li(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ui={};function di(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fi(e,t,n,r){return new di(e,t,n,r)}function pi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function mi(e,t){var n=e.alternate;return n===null?(n=fi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function hi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function gi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)pi(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,he.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case re:return e=fi(31,n,t,a),e.elementType=re,e.lanes=o,e;case y:return _i(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=fi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case te:return e=fi(13,n,t,a),e.elementType=te,e.lanes=o,e;case ne:return e=fi(19,n,t,a),e.elementType=ne,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case S:s=10;break a;case ee:s=9;break a;case C:s=11;break a;case w:s=14;break a;case T:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=fi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function _i(e,t,n,r){return e=fi(7,e,r,t),e.lanes=n,e}function vi(e,t,n){return e=fi(6,e,null,t),e.lanes=n,e}function yi(e){var t=fi(18,null,null,0);return t.stateNode=e,t}function bi(e,t,n){return t=fi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var xi=new WeakMap;function Si(e,t){if(typeof e==`object`&&e){var n=xi.get(e);return n===void 0?(t={value:e,source:t,stack:ke(t)},xi.set(e,t),t):n}return{value:e,source:t,stack:ke(t)}}var Ci=[],wi=0,Ti=null,Ei=0,Di=[],Oi=0,ki=null,Ai=1,ji=``;function Mi(e,t){Ci[wi++]=Ei,Ci[wi++]=Ti,Ti=e,Ei=t}function Ni(e,t,n){Di[Oi++]=Ai,Di[Oi++]=ji,Di[Oi++]=ki,ki=e;var r=Ai;e=ji;var i=32-qe(r)-1;r&=~(1<<i),n+=1;var a=32-qe(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ai=1<<32-qe(t)+i|n<<i|r,ji=a+e}else Ai=1<<a|n<<i|r,ji=e}function Pi(e){e.return!==null&&(Mi(e,1),Ni(e,1,0))}function Fi(e){for(;e===Ti;)Ti=Ci[--wi],Ci[wi]=null,Ei=Ci[--wi],Ci[wi]=null;for(;e===ki;)ki=Di[--Oi],Di[Oi]=null,ji=Di[--Oi],Di[Oi]=null,Ai=Di[--Oi],Di[Oi]=null}function Ii(e,t){Di[Oi++]=Ai,Di[Oi++]=ji,Di[Oi++]=ki,Ai=t.id,ji=t.overflow,ki=e}var Li=null,F=null,I=!1,Ri=null,zi=!1,Bi=Error(i(519));function Vi(e){throw Ki(Si(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Bi}function Hi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[gt]=e,t[_t]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Yt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),$t(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=ln),t=!0):t=!1,t||Vi(e,!0)}function Ui(e){for(Li=e.return;Li;)switch(Li.tag){case 5:case 31:case 13:zi=!1;return;case 27:case 3:zi=!0;return;default:Li=Li.return}}function L(e){if(e!==Li)return!1;if(!I)return Ui(e),I=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&F&&Vi(e),Ui(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));F=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));F=uf(e)}else t===27?(t=F,Zd(e.type)?(e=lf,lf=null,F=e):F=t):F=Li?cf(e.stateNode.nextSibling):null;return!0}function Wi(){F=Li=null,I=!1}function Gi(){var e=Ri;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),Ri=null),e}function Ki(e){Ri===null?Ri=[e]:Ri.push(e)}var qi=pe(null),Ji=null,Yi=null;function Xi(e,t,n){O(qi,t._currentValue),t._currentValue=n}function Zi(e){e._currentValue=qi.current,me(qi)}function Qi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function $i(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Qi(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Qi(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ea(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Er(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ve.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&$i(t,e,n,r),t.flags|=262144}function ta(e){for(e=e.firstContext;e!==null;){if(!Er(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function na(e){Ji=e,Yi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function R(e){return ia(Ji,e)}function ra(e,t){return Ji===null&&na(e),ia(e,t)}function ia(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Yi===null){if(e===null)throw Error(i(308));Yi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Yi=Yi.next=t;return n}var aa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},oa=t.unstable_scheduleCallback,sa=t.unstable_NormalPriority,z={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ca(){return{controller:new aa,data:new Map,refCount:0}}function la(e){e.refCount--,e.refCount===0&&oa(sa,function(){e.controller.abort()})}var ua=null,da=0,fa=0,pa=null;function ma(e,t){if(ua===null){var n=ua=[];da=0,fa=dd(),pa={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return da++,t.then(ha,ha),t}function ha(){if(--da===0&&ua!==null){pa!==null&&(pa.status=`fulfilled`);var e=ua;ua=null,fa=0,pa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ga(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var _a=E.S;E.S=function(e,t){eu=Fe(),typeof t==`object`&&t&&typeof t.then==`function`&&ma(e,t),_a!==null&&_a(e,t)};var va=pe(null);function ya(){var e=va.current;return e===null?K.pooledCache:e}function ba(e,t){t===null?O(va,va.current):O(va,t.pool)}function xa(){var e=ya();return e===null?null:{parent:z._currentValue,pool:e}}var Sa=Error(i(460)),Ca=Error(i(474)),wa=Error(i(542)),Ta={then:function(){}};function Ea(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Da(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ln,ln),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,ja(e),e;default:if(typeof t.status==`string`)t.then(ln,ln);else{if(e=K,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,ja(e),e}throw ka=t,Sa}}function Oa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(ka=e,Sa):e}}var ka=null;function Aa(){if(ka===null)throw Error(i(459));var e=ka;return ka=null,e}function ja(e){if(e===Sa||e===wa)throw Error(i(483))}var Ma=null,Na=0;function Pa(e){var t=Na;return Na+=1,Ma===null&&(Ma=[]),Da(Ma,e,t)}function Fa(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ia(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function La(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=mi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=vi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===T&&Oa(i)===t.type)?(t=a(t,n.props),Fa(t,n),t.return=e,t):(t=gi(n.type,n.key,n.props,null,e.mode,r),Fa(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=bi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=_i(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=vi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=gi(t.type,t.key,t.props,null,e.mode,n),Fa(n,t),n.return=e,n;case v:return t=bi(t,e.mode,n),t.return=e,t;case T:return t=Oa(t),f(e,t,n)}if(le(t)||oe(t))return t=_i(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Pa(t),n);if(t.$$typeof===S)return f(e,ra(e,t),n);Ia(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case T:return n=Oa(n),p(e,t,n,r)}if(le(n)||oe(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Pa(n),r);if(n.$$typeof===S)return p(e,t,ra(e,n),r);Ia(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case T:return r=Oa(r),m(e,t,n,r,i)}if(le(r)||oe(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Pa(r),i);if(r.$$typeof===S)return m(e,t,n,ra(t,r),i);Ia(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),I&&Mi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return I&&Mi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),I&&Mi(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),I&&Mi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return I&&Mi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),I&&Mi(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===T&&Oa(l)===r.type){n(e,r.sibling),c=a(r,o.props),Fa(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=_i(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=gi(o.type,o.key,o.props,null,e.mode,c),Fa(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=bi(o,e.mode,c),c.return=e,e=c}return s(e);case T:return o=Oa(o),b(e,r,o,c)}if(le(o))return h(e,r,o,c);if(oe(o)){if(l=oe(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Pa(o),c);if(o.$$typeof===S)return b(e,r,ra(e,o),c);Ia(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=vi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Na=0;var i=b(e,t,n,r);return Ma=null,i}catch(t){if(t===Sa||t===wa)throw t;var a=fi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ra=La(!0),za=La(!1),Ba=!1;function Va(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ha(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ua(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Wa(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=li(e),ci(e,null,n),t}return ai(e,r,t,n),li(e)}function Ga(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lt(e,n)}}function Ka(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var qa=!1;function Ja(){if(qa){var e=pa;if(e!==null)throw e}}function Ya(e,t,n,r){qa=!1;var i=e.updateQueue;Ba=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(J&f)===f:(r&f)===f){f!==0&&f===fa&&(qa=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var h=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(h=g.payload,typeof h==`function`){d=h.call(_,d,f);break a}d=h;break a;case 3:h.flags=h.flags&-65537|128;case 0:if(h=g.payload,f=typeof h==`function`?h.call(_,d,f):h,f==null)break a;d=m({},d,f);break a;case 2:Ba=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function Xa(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Za(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Xa(n[e],t)}var Qa=pe(null),$a=pe(0);function eo(e,t){e=Wl,O($a,e),O(Qa,t),Wl=e|t.baseLanes}function to(){O($a,Wl),O(Qa,Qa.current)}function no(){Wl=$a.current,me(Qa),me($a)}var ro=pe(null),io=null;function ao(e){var t=e.alternate;O(uo,uo.current&1),O(ro,e),io===null&&(t===null||Qa.current!==null||t.memoizedState!==null)&&(io=e)}function oo(e){O(uo,uo.current),O(ro,e),io===null&&(io=e)}function so(e){e.tag===22?(O(uo,uo.current),O(ro,e),io===null&&(io=e)):co(e)}function co(){O(uo,uo.current),O(ro,ro.current)}function lo(e){me(ro),io===e&&(io=null),me(uo)}var uo=pe(0);function fo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var po=0,B=null,V=null,mo=null,ho=!1,go=!1,_o=!1,vo=0,yo=0,bo=null,xo=0;function H(){throw Error(i(321))}function So(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Er(e[n],t[n]))return!1;return!0}function Co(e,t,n,r,i,a){return po=a,B=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,E.H=e===null||e.memoizedState===null?Bs:Vs,_o=!1,a=n(r,i),_o=!1,go&&(a=To(t,n,r,i)),wo(e),a}function wo(e){E.H=zs;var t=V!==null&&V.next!==null;if(po=0,mo=V=B=null,ho=!1,yo=0,bo=null,t)throw Error(i(300));e===null||ic||(e=e.dependencies,e!==null&&ta(e)&&(ic=!0))}function To(e,t,n,r){B=e;var a=0;do{if(go&&(bo=null),yo=0,go=!1,25<=a)throw Error(i(301));if(a+=1,mo=V=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}E.H=Hs,o=t(n,r)}while(go);return o}function Eo(){var e=E.H,t=e.useState()[0];return t=typeof t.then==`function`?No(t):t,e=e.useState()[0],(V===null?null:V.memoizedState)!==e&&(B.flags|=1024),t}function Do(){var e=vo!==0;return vo=0,e}function Oo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function ko(e){if(ho){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ho=!1}po=0,mo=V=B=null,go=!1,yo=vo=0,bo=null}function Ao(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mo===null?B.memoizedState=mo=e:mo=mo.next=e,mo}function jo(){if(V===null){var e=B.alternate;e=e===null?null:e.memoizedState}else e=V.next;var t=mo===null?B.memoizedState:mo.next;if(t!==null)mo=t,V=e;else{if(e===null)throw B.alternate===null?Error(i(467)):Error(i(310));V=e,e={memoizedState:V.memoizedState,baseState:V.baseState,baseQueue:V.baseQueue,queue:V.queue,next:null},mo===null?B.memoizedState=mo=e:mo=mo.next=e}return mo}function Mo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function No(e){var t=yo;return yo+=1,bo===null&&(bo=[]),e=Da(bo,e,t),t=B,(mo===null?t.memoizedState:mo.next)===null&&(t=t.alternate,E.H=t===null||t.memoizedState===null?Bs:Vs),e}function Po(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return No(e);if(e.$$typeof===S)return R(e)}throw Error(i(438,String(e)))}function Fo(e){var t=null,n=B.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=B.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Mo(),B.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ie;return t.index++,n}function Io(e,t){return typeof t==`function`?t(e):t}function Lo(e){return Ro(jo(),V,e)}function Ro(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(po&f)===f:(J&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===fa&&(d=!0);else if((po&p)===p){u=u.next,p===fa&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,B.lanes|=p,Gl|=p;f=u.action,_o&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,B.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Er(o,e.memoizedState)&&(ic=!0,d&&(n=pa,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function zo(e){var t=jo(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Er(o,t.memoizedState)||(ic=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Bo(e,t,n){var r=B,a=jo(),o=I;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Er((V||a).memoizedState,n);if(s&&(a.memoizedState=n,ic=!0),a=a.queue,ds(Uo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||mo!==null&&mo.memoizedState.tag&1){if(r.flags|=2048,os(9,{destroy:void 0},Ho.bind(null,r,a,n,t),null),K===null)throw Error(i(349));o||po&127||Vo(r,t,n)}return n}function Vo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=B.updateQueue,t===null?(t=Mo(),B.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ho(e,t,n,r){t.value=n,t.getSnapshot=r,Wo(t)&&Go(e)}function Uo(e,t,n){return n(function(){Wo(t)&&Go(e)})}function Wo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Er(e,n)}catch{return!0}}function Go(e){var t=si(e,2);t!==null&&hu(t,e,2)}function Ko(e){var t=Ao();if(typeof e==`function`){var n=e;if(e=n(),_o){Ke(!0);try{n()}finally{Ke(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:e},t}function qo(e,t,n,r){return e.baseState=n,Ro(e,V,typeof r==`function`?r:Io)}function Jo(e,t,n,r,a){if(Is(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};E.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Yo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Yo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=E.T,o={};E.T=o;try{var s=n(i,r),c=E.S;c!==null&&c(o,s),Xo(e,t,s)}catch(n){Qo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),E.T=a}}else try{a=n(i,r),Xo(e,t,a)}catch(n){Qo(e,t,n)}}function Xo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Zo(e,t,n)},function(n){return Qo(e,t,n)}):Zo(e,t,n)}function Zo(e,t,n){t.status=`fulfilled`,t.value=n,$o(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Yo(e,n)))}function Qo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,$o(t),t=t.next;while(t!==r)}e.action=null}function $o(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function es(e,t){return t}function ts(e,t){if(I){var n=K.formState;if(n!==null){a:{var r=B;if(I){if(F){b:{for(var i=F,a=zi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){F=cf(i.nextSibling),r=i.data===`F!`;break a}}Vi(r)}r=!1}r&&(t=n[0])}}return n=Ao(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:es,lastRenderedState:t},n.queue=r,n=Ns.bind(null,B,r),r.dispatch=n,r=Ko(!1),a=Fs.bind(null,B,!1,r.queue),r=Ao(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Jo.bind(null,B,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function ns(e){return rs(jo(),V,e)}function rs(e,t,n){if(t=Ro(e,t,es)[0],e=Lo(Io)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=No(t)}catch(e){throw e===Sa?wa:e}else r=t;t=jo();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(B.flags|=2048,os(9,{destroy:void 0},is.bind(null,i,n),null)),[r,a,e]}function is(e,t){e.action=t}function as(e){var t=jo(),n=V;if(n!==null)return rs(t,n,e);jo(),t=t.memoizedState,n=jo();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function os(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=B.updateQueue,t===null&&(t=Mo(),B.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ss(){return jo().memoizedState}function cs(e,t,n,r){var i=Ao();B.flags|=e,i.memoizedState=os(1|t,{destroy:void 0},n,r===void 0?null:r)}function ls(e,t,n,r){var i=jo();r=r===void 0?null:r;var a=i.memoizedState.inst;V!==null&&r!==null&&So(r,V.memoizedState.deps)?i.memoizedState=os(t,a,n,r):(B.flags|=e,i.memoizedState=os(1|t,a,n,r))}function us(e,t){cs(8390656,8,e,t)}function ds(e,t){ls(2048,8,e,t)}function fs(e){B.flags|=4;var t=B.updateQueue;if(t===null)t=Mo(),B.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ps(e){var t=jo().memoizedState;return fs({ref:t,nextImpl:e}),function(){if(G&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function ms(e,t){return ls(4,2,e,t)}function hs(e,t){return ls(4,4,e,t)}function gs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _s(e,t,n){n=n==null?null:n.concat([e]),ls(4,4,gs.bind(null,t,e),n)}function vs(){}function ys(e,t){var n=jo();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&So(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function bs(e,t){var n=jo();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&So(t,r[1]))return r[0];if(r=e(),_o){Ke(!0);try{e()}finally{Ke(!1)}}return n.memoizedState=[r,t],r}function xs(e,t,n){return n===void 0||po&1073741824&&!(J&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),B.lanes|=e,Gl|=e,n)}function Ss(e,t,n,r){return Er(n,t)?n:Qa.current===null?!(po&42)||po&1073741824&&!(J&261930)?(ic=!0,e.memoizedState=n):(e=mu(),B.lanes|=e,Gl|=e,t):(e=xs(e,n,r),Er(e,t)||(ic=!0),e)}function Cs(e,t,n,r,i){var a=D.p;D.p=a!==0&&8>a?a:8;var o=E.T,s={};E.T=s,Fs(e,!1,t,n);try{var c=i(),l=E.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ps(e,t,ga(c,r),pu(e)):Ps(e,t,r,pu(e))}catch(n){Ps(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{D.p=a,o!==null&&s.types!==null&&(o.types=s.types),E.T=o}}function ws(){}function Ts(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Es(e).queue;Cs(e,a,t,ue,n===null?ws:function(){return Ds(e),n(r)})}function Es(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ue,baseState:ue,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:ue},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ds(e){var t=Es(e);t.next===null&&(t=e.alternate.memoizedState),Ps(e,t.next.queue,{},pu())}function Os(){return R(Qf)}function ks(){return jo().memoizedState}function As(){return jo().memoizedState}function js(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ua(n);var r=Wa(t,e,n);r!==null&&(hu(r,t,n),Ga(r,t,n)),t={cache:ca()},e.payload=t;return}t=t.return}}function Ms(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Is(e)?Ls(t,n):(n=oi(e,t,n,r),n!==null&&(hu(n,e,r),Rs(n,t,r)))}function Ns(e,t,n){Ps(e,t,n,pu())}function Ps(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Is(e))Ls(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Er(s,o))return ai(e,t,i,0),K===null&&ii(),!1}catch{}if(n=oi(e,t,i,r),n!==null)return hu(n,e,r),Rs(n,t,r),!0}return!1}function Fs(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Is(e)){if(t)throw Error(i(479))}else t=oi(e,n,r,2),t!==null&&hu(t,e,2)}function Is(e){var t=e.alternate;return e===B||t!==null&&t===B}function Ls(e,t){go=ho=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Rs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lt(e,n)}}var zs={readContext:R,use:Po,useCallback:H,useContext:H,useEffect:H,useImperativeHandle:H,useLayoutEffect:H,useInsertionEffect:H,useMemo:H,useReducer:H,useRef:H,useState:H,useDebugValue:H,useDeferredValue:H,useTransition:H,useSyncExternalStore:H,useId:H,useHostTransitionStatus:H,useFormState:H,useActionState:H,useOptimistic:H,useMemoCache:H,useCacheRefresh:H};zs.useEffectEvent=H;var Bs={readContext:R,use:Po,useCallback:function(e,t){return Ao().memoizedState=[e,t===void 0?null:t],e},useContext:R,useEffect:us,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),cs(4194308,4,gs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return cs(4194308,4,e,t)},useInsertionEffect:function(e,t){cs(4,2,e,t)},useMemo:function(e,t){var n=Ao();t=t===void 0?null:t;var r=e();if(_o){Ke(!0);try{e()}finally{Ke(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Ao();if(n!==void 0){var i=n(t);if(_o){Ke(!0);try{n(t)}finally{Ke(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ms.bind(null,B,e),[r.memoizedState,e]},useRef:function(e){var t=Ao();return e={current:e},t.memoizedState=e},useState:function(e){e=Ko(e);var t=e.queue,n=Ns.bind(null,B,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:vs,useDeferredValue:function(e,t){return xs(Ao(),e,t)},useTransition:function(){var e=Ko(!1);return e=Cs.bind(null,B,e.queue,!0,!1),Ao().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=B,a=Ao();if(I){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),K===null)throw Error(i(349));J&127||Vo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,us(Uo.bind(null,r,o,e),[e]),r.flags|=2048,os(9,{destroy:void 0},Ho.bind(null,r,o,n,t),null),n},useId:function(){var e=Ao(),t=K.identifierPrefix;if(I){var n=ji,r=Ai;n=(r&~(1<<32-qe(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=vo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=xo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Os,useFormState:ts,useActionState:ts,useOptimistic:function(e){var t=Ao();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Fs.bind(null,B,!0,n),n.dispatch=t,[e,t]},useMemoCache:Fo,useCacheRefresh:function(){return Ao().memoizedState=js.bind(null,B)},useEffectEvent:function(e){var t=Ao(),n={impl:e};return t.memoizedState=n,function(){if(G&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Vs={readContext:R,use:Po,useCallback:ys,useContext:R,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:Lo,useRef:ss,useState:function(){return Lo(Io)},useDebugValue:vs,useDeferredValue:function(e,t){return Ss(jo(),V.memoizedState,e,t)},useTransition:function(){var e=Lo(Io)[0],t=jo().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:ks,useHostTransitionStatus:Os,useFormState:ns,useActionState:ns,useOptimistic:function(e,t){return qo(jo(),V,e,t)},useMemoCache:Fo,useCacheRefresh:As};Vs.useEffectEvent=ps;var Hs={readContext:R,use:Po,useCallback:ys,useContext:R,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:zo,useRef:ss,useState:function(){return zo(Io)},useDebugValue:vs,useDeferredValue:function(e,t){var n=jo();return V===null?xs(n,e,t):Ss(n,V.memoizedState,e,t)},useTransition:function(){var e=zo(Io)[0],t=jo().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:ks,useHostTransitionStatus:Os,useFormState:as,useActionState:as,useOptimistic:function(e,t){var n=jo();return V===null?(n.baseState=e,[e,n.queue.dispatch]):qo(n,V,e,t)},useMemoCache:Fo,useCacheRefresh:As};Hs.useEffectEvent=ps;function Us(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:m({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ws={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ua(r);i.payload=t,n!=null&&(i.callback=n),t=Wa(e,i,r),t!==null&&(hu(t,e,r),Ga(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ua(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Wa(e,i,r),t!==null&&(hu(t,e,r),Ga(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ua(n);r.tag=2,t!=null&&(r.callback=t),t=Wa(e,r,n),t!==null&&(hu(t,e,n),Ga(t,e,n))}};function Gs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Dr(n,r)||!Dr(i,a):!0}function Ks(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ws.enqueueReplaceState(t,t.state,null)}function qs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=m({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Js(e){ei(e)}function Ys(e){console.error(e)}function Xs(e){ei(e)}function Zs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Qs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function $s(e,t,n){return n=Ua(n),n.tag=3,n.payload={element:null},n.callback=function(){Zs(e,t)},n}function ec(e){return e=Ua(e),e.tag=3,e}function tc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Qs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Qs(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function nc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ea(t,n,a,!0),n=ro.current,n!==null){switch(n.tag){case 31:case 13:return io===null?Du():n.alternate===null&&X===0&&(X=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Ta?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===Ta?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(I)return t=ro.current,t===null?(r!==Bi&&(t=Error(i(423),{cause:r}),Ki(Si(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Si(r,n),a=$s(e.stateNode,r,a),Ka(e,a),X!==4&&(X=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Bi&&(e=Error(i(422),{cause:r}),Ki(Si(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Si(o,n),Xl===null?Xl=[o]:Xl.push(o),X!==4&&(X=2),t===null)return!0;r=Si(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=$s(n.stateNode,r,e),Ka(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=ec(a),tc(a,e,n,r),Ka(n,a),!1}n=n.return}while(n!==null);return!1}var rc=Error(i(461)),ic=!1;function ac(e,t,n,r){t.child=e===null?za(t,null,n,r):Ra(t,e.child,n,r)}function oc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return na(t),r=Co(e,t,n,o,a,i),s=Do(),e!==null&&!ic?(Oo(e,t,i),Ac(e,t,i)):(I&&s&&Pi(t),t.flags|=1,ac(e,t,r,i),t.child)}function sc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!pi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,cc(e,t,a,r,i)):(e=gi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!jc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Dr:n,n(o,r)&&e.ref===t.ref)return Ac(e,t,i)}return t.flags|=1,e=mi(a,r),e.ref=t.ref,e.return=t,t.child=e}function cc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Dr(a,r)&&e.ref===t.ref)if(ic=!1,t.pendingProps=r=a,jc(e,i))e.flags&131072&&(ic=!0);else return t.lanes=e.lanes,Ac(e,t,i)}return gc(e,t,n,r,i)}function lc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return dc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ba(t,a===null?null:a.cachePool),a===null?to():eo(t,a),so(t);else return r=t.lanes=536870912,dc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&ba(t,null),to(),co(t)):(ba(t,a.cachePool),eo(t,a),co(t),t.memoizedState=null);return ac(e,t,i,n),t.child}function uc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function dc(e,t,n,r,i){var a=ya();return a=a===null?null:{parent:z._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&ba(t,null),to(),so(t),e!==null&&ea(e,t,r,!0),t.childLanes=i,null}function fc(e,t){return t=Tc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function pc(e,t,n){return Ra(t,e.child,null,n),e=fc(t,t.pendingProps),e.flags|=2,lo(t),t.memoizedState=null,e}function mc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(I){if(r.mode===`hidden`)return e=fc(t,r),t.lanes=536870912,uc(null,e);if(oo(t),(e=F)?(e=rf(e,zi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ki===null?null:{id:Ai,overflow:ji},retryLane:536870912,hydrationErrors:null},n=yi(e),n.return=t,t.child=n,Li=t,F=null)):e=null,e===null)throw Vi(t);return t.lanes=536870912,null}return fc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(oo(t),a)if(t.flags&256)t.flags&=-257,t=pc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(ic||ea(e,t,n,!1),a=(n&e.childLanes)!==0,ic||a){if(r=K,r!==null&&(s=ut(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,si(e,s),hu(r,e,s),rc;Du(),t=pc(e,t,n)}else e=o.treeContext,F=cf(s.nextSibling),Li=t,I=!0,Ri=null,zi=!1,e!==null&&Ii(t,e),t=fc(t,r),t.flags|=4096;return t}return e=mi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function hc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function gc(e,t,n,r,i){return na(t),n=Co(e,t,n,r,void 0,i),r=Do(),e!==null&&!ic?(Oo(e,t,i),Ac(e,t,i)):(I&&r&&Pi(t),t.flags|=1,ac(e,t,n,i),t.child)}function _c(e,t,n,r,i,a){return na(t),t.updateQueue=null,n=To(t,r,n,i),wo(e),r=Do(),e!==null&&!ic?(Oo(e,t,a),Ac(e,t,a)):(I&&r&&Pi(t),t.flags|=1,ac(e,t,n,a),t.child)}function vc(e,t,n,r,i){if(na(t),t.stateNode===null){var a=ui,o=n.contextType;typeof o==`object`&&o&&(a=R(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ws,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Va(t),o=n.contextType,a.context=typeof o==`object`&&o?R(o):ui,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Us(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ws.enqueueReplaceState(a,a.state,null),Ya(t,r,a,i),Ja(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=qs(n,s);a.props=c;var l=a.context,u=n.contextType;o=ui,typeof u==`object`&&u&&(o=R(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ks(t,a,r,o),Ba=!1;var f=t.memoizedState;a.state=f,Ya(t,r,a,i),Ja(),l=t.memoizedState,s||f!==l||Ba?(typeof d==`function`&&(Us(t,n,d,r),l=t.memoizedState),(c=Ba||Gs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ha(e,t),o=t.memoizedProps,u=qs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=ui,typeof l==`object`&&l&&(c=R(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ks(t,a,r,c),Ba=!1,f=t.memoizedState,a.state=f,Ya(t,r,a,i),Ja();var p=t.memoizedState;o!==d||f!==p||Ba||e!==null&&e.dependencies!==null&&ta(e.dependencies)?(typeof s==`function`&&(Us(t,n,s,r),p=t.memoizedState),(u=Ba||Gs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ta(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,hc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ra(t,e.child,null,i),t.child=Ra(t,null,n,i)):ac(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Ac(e,t,i),e}function yc(e,t,n,r){return Wi(),t.flags|=256,ac(e,t,n,r),t.child}var bc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xc(e){return{baseLanes:e,cachePool:xa()}}function Sc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function Cc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(uo.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(I){if(a?ao(t):co(t),(e=F)?(e=rf(e,zi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ki===null?null:{id:Ai,overflow:ji},retryLane:536870912,hydrationErrors:null},n=yi(e),n.return=t,t.child=n,Li=t,F=null)):e=null,e===null)throw Vi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(co(t),a=t.mode,c=Tc({mode:`hidden`,children:c},a),r=_i(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(null,r)):(ao(t),wc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(ao(t),t.flags&=-257,t=Ec(e,t,n)):t.memoizedState===null?(co(t),c=r.fallback,a=t.mode,r=Tc({mode:`visible`,children:r.children},a),c=_i(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ra(t,e.child,null,n),r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,t=uc(null,r)):(co(t),t.child=e.child,t.flags|=128,t=null);else if(ao(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Ki({value:r,source:null,stack:null}),t=Ec(e,t,n)}else if(ic||ea(e,t,n,!1),s=(n&e.childLanes)!==0,ic||s){if(s=K,s!==null&&(r=ut(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,si(e,r),hu(s,e,r),rc;af(c)||Du(),t=Ec(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,F=cf(c.nextSibling),Li=t,I=!0,Ri=null,zi=!1,e!==null&&Ii(t,e),t=wc(t,r.children),t.flags|=4096);return t}return a?(co(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=mi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=_i(c,a,n,null),c.flags|=2):c=mi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,uc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=xc(n):(a=c.cachePool,a===null?a=xa():(l=z._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(e.child,r)):(ao(t),n=e.child,e=n.sibling,n=mi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function wc(e,t){return t=Tc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Tc(e,t){return e=fi(22,e,null,t),e.lanes=0,e}function Ec(e,t,n){return Ra(t,e.child,null,n),e=wc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Dc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Qi(e.return,t,n)}function Oc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function kc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=uo.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,O(uo,o),ac(e,t,r,n),r=I?Ei:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dc(e,n,t);else if(e.tag===19)Dc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&fo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Oc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&fo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Oc(t,!0,n,null,a,r);break;case`together`:Oc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Ac(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ea(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=mi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=mi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function jc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&ta(e))):!0}function Mc(e,t,n){switch(t.tag){case 3:ye(t,t.stateNode.containerInfo),Xi(t,z,e.memoizedState.cache),Wi();break;case 27:case 5:xe(t);break;case 4:ye(t,t.stateNode.containerInfo);break;case 10:Xi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,oo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(ao(t),e=Ac(e,t,n),e===null?null:e.sibling):Cc(e,t,n):(ao(t),t.flags|=128,null);ao(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(ea(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return kc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),O(uo,uo.current),r)break;return null;case 22:return t.lanes=0,lc(e,t,n,t.pendingProps);case 24:Xi(t,z,e.memoizedState.cache)}return Ac(e,t,n)}function Nc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ic=!0;else{if(!jc(e,n)&&!(t.flags&128))return ic=!1,Mc(e,t,n);ic=!!(e.flags&131072)}else ic=!1,I&&t.flags&1048576&&Ni(t,Ei,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Oa(t.elementType),t.type=e,typeof e==`function`)pi(e)?(r=qs(e,r),t.tag=1,t=vc(null,t,e,r,n)):(t.tag=0,t=gc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===C){t.tag=11,t=oc(null,t,e,r,n);break a}else if(a===w){t.tag=14,t=sc(null,t,e,r,n);break a}}throw t=ce(e)||e,Error(i(306,t,``))}}return t;case 0:return gc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=qs(r,t.pendingProps),vc(e,t,r,a,n);case 3:a:{if(ye(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ha(e,t),Ya(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Xi(t,z,r),r!==o.cache&&$i(t,[z],n,!0),Ja(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=yc(e,t,r,n);break a}else if(r!==a){a=Si(Error(i(424)),t),Ki(a),t=yc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(F=cf(e.firstChild),Li=t,I=!0,Ri=null,zi=!0,n=za(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Wi(),r===a){t=Ac(e,t,n);break a}ac(e,t,r,n)}t=t.child}return t;case 26:return hc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:I||(n=t.type,e=t.pendingProps,r=Bd(_e.current).createElement(n),r[gt]=t,r[_t]=e,Pd(r,n,e),kt(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return xe(t),e===null&&I&&(r=t.stateNode=ff(t.type,t.pendingProps,_e.current),Li=t,zi=!0,a=F,Zd(t.type)?(lf=a,F=cf(r.firstChild)):F=a),ac(e,t,t.pendingProps.children,n),hc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&I&&((a=r=F)&&(r=tf(r,t.type,t.pendingProps,zi),r===null?a=!1:(t.stateNode=r,Li=t,F=cf(r.firstChild),zi=!1,a=!0)),a||Vi(t)),xe(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Co(e,t,Eo,null,null,n),Qf._currentValue=a),hc(e,t),ac(e,t,r,n),t.child;case 6:return e===null&&I&&((e=n=F)&&(n=nf(n,t.pendingProps,zi),n===null?e=!1:(t.stateNode=n,Li=t,F=null,e=!0)),e||Vi(t)),null;case 13:return Cc(e,t,n);case 4:return ye(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ra(t,null,r,n):ac(e,t,r,n),t.child;case 11:return oc(e,t,t.type,t.pendingProps,n);case 7:return ac(e,t,t.pendingProps,n),t.child;case 8:return ac(e,t,t.pendingProps.children,n),t.child;case 12:return ac(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Xi(t,t.type,r.value),ac(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,na(t),a=R(a),r=r(a),t.flags|=1,ac(e,t,r,n),t.child;case 14:return sc(e,t,t.type,t.pendingProps,n);case 15:return cc(e,t,t.type,t.pendingProps,n);case 19:return kc(e,t,n);case 31:return mc(e,t,n);case 22:return lc(e,t,n,t.pendingProps);case 24:return na(t),r=R(z),e===null?(a=ya(),a===null&&(a=K,o=ca(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Va(t),Xi(t,z,a)):((e.lanes&n)!==0&&(Ha(e,t),Ya(t,null,null,n),Ja()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Xi(t,z,r),r!==a.cache&&$i(t,[z],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Xi(t,z,r))),ac(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Pc(e){e.flags|=4}function Fc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw ka=Ta,Ca}else e.flags&=-16777217}function Ic(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw ka=Ta,Ca}function Lc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:it(),e.lanes|=t,Yl|=t)}function Rc(e,t){if(!I)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function U(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function zc(e,t,n){var r=t.pendingProps;switch(Fi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return U(t),null;case 1:return U(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Zi(z),be(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(L(t)?Pc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Gi())),U(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Pc(t),o===null?(U(t),Fc(t,a,null,r,n)):(U(t),Ic(t,o))):o?o===e.memoizedState?(U(t),t.flags&=-16777217):(Pc(t),U(t),Ic(t,o)):(e=e.memoizedProps,e!==r&&Pc(t),U(t),Fc(t,a,e,r,n)),null;case 27:if(Se(t),n=_e.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),null}e=he.current,L(t)?Hi(t,e):(e=ff(a,r,n),t.stateNode=e,Pc(t))}return U(t),null;case 5:if(Se(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),null}if(o=he.current,L(t))Hi(t,o);else{var s=Bd(_e.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[gt]=t,o[_t]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Pc(t)}}return U(t),Fc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=_e.current,L(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Li,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[gt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Vi(t,!0)}else e=Bd(e).createTextNode(r),e[gt]=t,t.stateNode=e}return U(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=L(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[gt]=t}else Wi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),e=!1}else n=Gi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(lo(t),t):(lo(t),null);if(t.flags&128)throw Error(i(558))}return U(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=L(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[gt]=t}else Wi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),a=!1}else a=Gi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(lo(t),t):(lo(t),null)}return lo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Lc(t,t.updateQueue),U(t),null);case 4:return be(),e===null&&Sd(t.stateNode.containerInfo),U(t),null;case 10:return Zi(t.type),U(t),null;case 19:if(me(uo),r=t.memoizedState,r===null)return U(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Rc(r,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=fo(e),o!==null){for(t.flags|=128,Rc(r,!1),e=o.updateQueue,t.updateQueue=e,Lc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)hi(n,e),n=n.sibling;return O(uo,uo.current&1|2),I&&Mi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Fe()>tu&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304)}else{if(!a)if(e=fo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Lc(t,e),Rc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!I)return U(t),null}else 2*Fe()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(U(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Fe(),e.sibling=null,n=uo.current,O(uo,a?n&1|2:n&1),I&&Mi(t,r.treeForkCount),e);case 22:case 23:return lo(t),no(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(U(t),t.subtreeFlags&6&&(t.flags|=8192)):U(t),n=t.updateQueue,n!==null&&Lc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&me(va),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Zi(z),U(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Bc(e,t){switch(Fi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Zi(z),be(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Se(t),null;case 31:if(t.memoizedState!==null){if(lo(t),t.alternate===null)throw Error(i(340));Wi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(lo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Wi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return me(uo),null;case 4:return be(),null;case 10:return Zi(t.type),null;case 22:case 23:return lo(t),no(),e!==null&&me(va),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Zi(z),null;case 25:return null;default:return null}}function Vc(e,t){switch(Fi(t),t.tag){case 3:Zi(z),be();break;case 26:case 27:case 5:Se(t);break;case 4:be();break;case 31:t.memoizedState!==null&&lo(t);break;case 13:lo(t);break;case 19:me(uo);break;case 10:Zi(t.type);break;case 22:case 23:lo(t),no(),e!==null&&me(va);break;case 24:Zi(z)}}function Hc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Uc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Wc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Za(t,n)}catch(t){Z(e,e.return,t)}}}function Gc(e,t,n){n.props=qs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Kc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function qc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Jc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Yc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[_t]=t}catch(t){Z(e,e.return,t)}}function Xc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Zc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Xc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ln));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Qc(e,t,n),e=e.sibling;e!==null;)Qc(e,t,n),e=e.sibling}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}function el(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[gt]=e,t[_t]=n}catch(t){Z(e,e.return,t)}}var tl=!1,nl=!1,rl=!1,il=typeof WeakSet==`function`?WeakSet:Set,al=null;function ol(e,t){if(e=e.containerInfo,Rd=sp,e=jr(e),Mr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,al=t;al!==null;)if(t=al,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,al=e;else for(;al!==null;){switch(t=al,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=qs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,al=e;break}al=t.return}}function sl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:xl(e,n),r&4&&Hc(5,n);break;case 1:if(xl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=qs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Wc(n),r&512&&Kc(n,n.return);break;case 3:if(xl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Za(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&el(n);case 26:case 5:xl(e,n),t===null&&r&4&&Jc(n),r&512&&Kc(n,n.return);break;case 12:xl(e,n);break;case 31:xl(e,n),r&4&&fl(e,n);break;case 13:xl(e,n),r&4&&pl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||tl,!r){t=t!==null&&t.memoizedState!==null||nl,i=tl;var a=nl;tl=r,(nl=t)&&!a?Cl(e,n,(n.subtreeFlags&8772)!=0):xl(e,n),tl=i,nl=a}break;case 30:break;default:xl(e,n)}}function cl(e){var t=e.alternate;t!==null&&(e.alternate=null,cl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&wt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var W=null,ll=!1;function ul(e,t,n){for(n=n.child;n!==null;)dl(e,t,n),n=n.sibling}function dl(e,t,n){if(Ge&&typeof Ge.onCommitFiberUnmount==`function`)try{Ge.onCommitFiberUnmount(We,n)}catch{}switch(n.tag){case 26:nl||qc(n,t),ul(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:nl||qc(n,t);var r=W,i=ll;Zd(n.type)&&(W=n.stateNode,ll=!1),ul(e,t,n),pf(n.stateNode),W=r,ll=i;break;case 5:nl||qc(n,t);case 6:if(r=W,i=ll,W=null,ul(e,t,n),W=r,ll=i,W!==null)if(ll)try{(W.nodeType===9?W.body:W.nodeName===`HTML`?W.ownerDocument.body:W).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{W.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:W!==null&&(ll?(e=W,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(W,n.stateNode));break;case 4:r=W,i=ll,W=n.stateNode.containerInfo,ll=!0,ul(e,t,n),W=r,ll=i;break;case 0:case 11:case 14:case 15:Uc(2,n,t),nl||Uc(4,n,t),ul(e,t,n);break;case 1:nl||(qc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Gc(n,t,r)),ul(e,t,n);break;case 21:ul(e,t,n);break;case 22:nl=(r=nl)||n.memoizedState!==null,ul(e,t,n),nl=r;break;default:ul(e,t,n)}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function ml(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new il),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new il),t;default:throw Error(i(435,e.tag))}}function hl(e,t){var n=ml(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function gl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){W=c.stateNode,ll=!1;break a}break;case 5:W=c.stateNode,ll=!1;break a;case 3:case 4:W=c.stateNode.containerInfo,ll=!0;break a}c=c.return}if(W===null)throw Error(i(160));dl(o,s,a),W=null,ll=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)vl(t,e),t=t.sibling}var _l=null;function vl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gl(t,e),yl(e),r&4&&(Uc(3,e,e.return),Hc(3,e),Uc(5,e,e.return));break;case 1:gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),r&64&&tl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=_l;if(gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[Ct]||o[gt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[gt]=e,kt(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[gt]=e,kt(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Yc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),n!==null&&r&4&&Yc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),e.flags&32){a=e.stateNode;try{en(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Yc(e,a,n===null?a:n.memoizedProps)),r&1024&&(rl=!0);break;case 6:if(gl(t,e),yl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=_l,_l=gf(t.containerInfo),gl(t,e),_l=a,yl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}rl&&(rl=!1,bl(e));break;case 4:r=_l,_l=gf(e.stateNode.containerInfo),gl(t,e),yl(e),_l=r;break;case 12:gl(t,e),yl(e);break;case 31:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 13:gl(t,e),yl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=Fe()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=tl,d=nl;if(tl=u||a,nl=d||l,gl(t,e),nl=d,tl=u,yl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||tl||nl||Sl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,hl(e,n))));break;case 19:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 30:break;case 21:break;default:gl(t,e),yl(e)}}function yl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Xc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;$c(e,Zc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(en(o,``),n.flags&=-33),$c(e,Zc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Qc(e,Zc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function xl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)sl(e,t.alternate,t),t=t.sibling}function Sl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Uc(4,t,t.return),Sl(t);break;case 1:qc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Gc(t,t.return,n),Sl(t);break;case 27:pf(t.stateNode);case 26:case 5:qc(t,t.return),Sl(t);break;case 22:t.memoizedState===null&&Sl(t);break;case 30:Sl(t);break;default:Sl(t)}e=e.sibling}}function Cl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Cl(i,a,n),Hc(4,a);break;case 1:if(Cl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Xa(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Wc(a),Kc(a,a.return);break;case 27:el(a);case 26:case 5:Cl(i,a,n),n&&r===null&&o&4&&Jc(a),Kc(a,a.return);break;case 12:Cl(i,a,n);break;case 31:Cl(i,a,n),n&&o&4&&fl(i,a);break;case 13:Cl(i,a,n),n&&o&4&&pl(i,a);break;case 22:a.memoizedState===null&&Cl(i,a,n),Kc(a,a.return);break;case 30:break;default:Cl(i,a,n)}t=t.sibling}}function wl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&la(n))}function Tl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&la(e))}function El(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dl(e,t,n,r),t=t.sibling}function Dl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:El(e,t,n,r),i&2048&&Hc(9,t);break;case 1:El(e,t,n,r);break;case 3:El(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&la(e)));break;case 12:if(i&2048){El(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else El(e,t,n,r);break;case 31:El(e,t,n,r);break;case 13:El(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?El(e,t,n,r):(a._visibility|=2,Ol(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?El(e,t,n,r):kl(e,t),i&2048&&wl(o,t);break;case 24:El(e,t,n,r),i&2048&&Tl(t.alternate,t);break;default:El(e,t,n,r)}}function Ol(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Ol(a,o,s,c,i),Hc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Ol(a,o,s,c,i)):u._visibility&2?Ol(a,o,s,c,i):kl(a,o),i&&l&2048&&wl(o.alternate,o);break;case 24:Ol(a,o,s,c,i),i&&l&2048&&Tl(o.alternate,o);break;default:Ol(a,o,s,c,i)}t=t.sibling}}function kl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:kl(n,r),i&2048&&wl(r.alternate,r);break;case 24:kl(n,r),i&2048&&Tl(r.alternate,r);break;default:kl(n,r)}t=t.sibling}}var Al=8192;function jl(e,t,n){if(e.subtreeFlags&Al)for(e=e.child;e!==null;)Ml(e,t,n),e=e.sibling}function Ml(e,t,n){switch(e.tag){case 26:jl(e,t,n),e.flags&Al&&e.memoizedState!==null&&Gf(n,_l,e.memoizedState,e.memoizedProps);break;case 5:jl(e,t,n);break;case 3:case 4:var r=_l;_l=gf(e.stateNode.containerInfo),jl(e,t,n),_l=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Al,Al=16777216,jl(e,t,n),Al=r):jl(e,t,n));break;default:jl(e,t,n)}}function Nl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fl(e),e=e.sibling}function Fl(e){switch(e.tag){case 0:case 11:case 15:Pl(e),e.flags&2048&&Uc(9,e,e.return);break;case 3:Pl(e);break;case 12:Pl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Il(e)):Pl(e);break;default:Pl(e)}}function Il(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Uc(8,t,t.return),Il(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Il(t));break;default:Il(t)}e=e.sibling}}function Ll(e,t){for(;al!==null;){var n=al;switch(n.tag){case 0:case 11:case 15:Uc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:la(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,al=r;else a:for(n=e;al!==null;){r=al;var i=r.sibling,a=r.return;if(cl(r),r===n){al=null;break a}if(i!==null){i.return=a,al=i;break a}al=a}}}var Rl={getCacheForType:function(e){var t=R(z),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return R(z).controller.signal}},zl=typeof WeakMap==`function`?WeakMap:Map,G=0,K=null,q=null,J=0,Y=0,Bl=null,Vl=!1,Hl=!1,Ul=!1,Wl=0,X=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return G&2&&J!==0?J&-J:E.T===null?pt():dd()}function mu(){if(Jl===0)if(!(J&536870912)||I){var e=Qe;Qe<<=1,!(Qe&3932160)&&(Qe=262144),Jl=e}else Jl=536870912;return e=ro.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===K&&(Y===2||Y===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,J,Jl,!1)),ot(e,n),(!(G&2)||e!==K)&&(e===K&&(!(G&2)&&(Kl|=n),X===4&&yu(e,J,Jl,!1)),rd(e))}function gu(e,t,n){if(G&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||nt(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Hl&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Ul&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Vl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-Fe(),10<a)){if(yu(r,t,Jl,!Vl),tt(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ln},Ml(t,a,d);var m=(a&62914560)===a?$l-Fe():(a&4194048)===a?eu-Fe():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Er(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-qe(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&ct(e,n,t)}function bu(){return G&6?!0:(id(0,!1),!1)}function xu(){if(q!==null){if(Y===0)var e=q.return;else e=q,Yi=Ji=null,ko(e),Ma=null,Na=0,e=q;for(;e!==null;)Vc(e.alternate,e),e=e.return;q=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),K=e,q=n=mi(e.current,null),J=t,Y=0,Bl=null,Vl=!1,Hl=nt(e,t),Ul=!1,Yl=Jl=ql=Kl=Gl=X=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-qe(r),a=1<<i;t|=e[i],r&=~a}return Wl=t,ii(),n}function Cu(e,t){B=null,E.H=zs,t===Sa||t===wa?(t=Aa(),Y=3):t===Ca?(t=Aa(),Y=4):Y=t===rc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Bl=t,q===null&&(X=1,Zs(e,Si(t,e.current)))}function wu(){var e=ro.current;return e===null?!0:(J&4194048)===J?io===null:(J&62914560)===J||J&536870912?e===io:!1}function Tu(){var e=E.H;return E.H=zs,e===null?zs:e}function Eu(){var e=E.A;return E.A=Rl,e}function Du(){X=4,Vl||(J&4194048)!==J&&ro.current!==null||(Hl=!0),!(Gl&134217727)&&!(Kl&134217727)||K===null||yu(K,J,Jl,!1)}function Ou(e,t,n){var r=G;G|=2;var i=Tu(),a=Eu();(K!==e||J!==t)&&(nu=null,Su(e,t)),t=!1;var o=X;a:do try{if(Y!==0&&q!==null){var s=q,c=Bl;switch(Y){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:ro.current===null&&(t=!0);var l=Y;if(Y=0,Bl=null,Pu(e,s,c,l),n&&Hl){o=0;break a}break;default:l=Y,Y=0,Bl=null,Pu(e,s,c,l)}}ku(),o=X;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Yi=Ji=null,G=r,E.H=i,E.A=a,q===null&&(K=null,J=0,ii()),o}function ku(){for(;q!==null;)Mu(q)}function Au(e,t){var n=G;G|=2;var r=Tu(),a=Eu();K!==e||J!==t?(nu=null,tu=Fe()+500,Su(e,t)):Hl=nt(e,t);a:do try{if(Y!==0&&q!==null){t=q;var o=Bl;b:switch(Y){case 1:Y=0,Bl=null,Pu(e,t,o,1);break;case 2:case 9:if(Ea(o)){Y=0,Bl=null,Nu(t);break}t=function(){Y!==2&&Y!==9||K!==e||(Y=7),rd(e)},o.then(t,t);break a;case 3:Y=7;break a;case 4:Y=5;break a;case 7:Ea(o)?(Y=0,Bl=null,Nu(t)):(Y=0,Bl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(q.tag){case 26:s=q.memoizedState;case 5:case 27:var c=q;if(s?Wf(s):c.stateNode.complete){Y=0,Bl=null;var l=c.sibling;if(l!==null)q=l;else{var u=c.return;u===null?q=null:(q=u,Fu(u))}break b}}Y=0,Bl=null,Pu(e,t,o,5);break;case 6:Y=0,Bl=null,Pu(e,t,o,6);break;case 8:xu(),X=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Yi=Ji=null,E.H=r,E.A=a,G=n,q===null?(K=null,J=0,ii(),X):0}function ju(){for(;q!==null&&!Ne();)Mu(q)}function Mu(e){var t=Nc(e.alternate,e,Wl);e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=_c(n,t,t.pendingProps,t.type,void 0,J);break;case 11:t=_c(n,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:ko(t);default:Vc(n,t),t=q=hi(t,Wl),t=Nc(n,t,Wl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Pu(e,t,n,r){Yi=Ji=null,ko(t),Ma=null,Na=0;var i=t.return;try{if(nc(e,i,t,n,J)){X=1,Zs(e,Si(n,e.current)),q=null;return}}catch(t){if(i!==null)throw q=i,t;X=1,Zs(e,Si(n,e.current)),q=null;return}t.flags&32768?(I||r===1?e=!0:Hl||J&536870912?e=!1:(Vl=e=!0,(r===2||r===9||r===3||r===6)&&(r=ro.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Vl);return}e=t.return;var n=zc(t.alternate,t,Wl);if(n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);X===0&&(X=5)}function Iu(e,t){do{var n=Bc(e.alternate,e);if(n!==null){n.flags&=32767,q=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){q=e;return}q=e=n}while(e!==null);X=6,q=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(G&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ri,st(e,n,o,s,c,l),e===K&&(q=K=null,J=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(ze,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=E.T,E.T=null,a=D.p,D.p=2,s=G,G|=4;try{ol(e,t,n)}finally{G=s,D.p=a,E.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=G;G|=4;try{vl(t,e);var a=zd,o=jr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Ar(s.ownerDocument.documentElement,s)){if(c!==null&&Mr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=kr(s,h),v=kr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{G=i,D.p=r,E.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=G;G|=4;try{sl(e,t.alternate,t)}finally{G=i,D.p=r,E.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,Pe();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),ft(n),t=t.stateNode,Ge&&typeof Ge.onCommitFiberRoot==`function`)try{Ge.onCommitFiberRoot(We,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=E.T,i=D.p,D.p=2,E.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{E.T=t,D.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,la(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=ft(su),r=E.T,a=D.p;try{D.p=32>n?32:n,E.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,G&6)throw Error(i(331));var c=G;if(G|=4,Fl(o.current),Dl(o,o.current,s,n),G=c,id(0,!1),Ge&&typeof Ge.onPostCommitFiberRoot==`function`)try{Ge.onPostCommitFiberRoot(We,o)}catch{}return!0}finally{D.p=a,E.T=r,Vu(e,t)}}function Wu(e,t,n){t=Si(n,t),t=$s(e.stateNode,t,2),e=Wa(e,t,2),e!==null&&(ot(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=Si(n,e),n=ec(2),r=Wa(t,n,2),r!==null&&(tc(n,r,t,e),ot(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Ul=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,K===e&&(J&n)===n&&(X===4||X===3&&(J&62914560)===J&&300>Fe()-$l?!(G&2)&&Su(e,0):ql|=n,Yl===J&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=it()),e=si(e,t),e!==null&&(ot(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return je(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-qe(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=J,a=tt(r,r===K?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||nt(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Fe(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-qe(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=rt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=K,n=J,n=tt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Y===2||Y===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Me(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||nt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Me(r),ft(n)){case 2:case 8:n=Re;break;case 32:n=ze;break;case 268435456:n=Ve;break;default:n=ze}return r=cd.bind(null,e),n=je(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Me(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=J;return r=tt(e,e===K?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Fe()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){G&6?je(Le,ad):od()})}function dd(){if(nd===0){var e=fa;e===0&&(e=Ze,Ze<<=1,!(Ze&261888)&&(Ze=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:cn(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[_t]||null).action),o=r.submitter;o&&(t=(t=o[_t]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new An(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Ts(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Ts(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<Qr.length;hd++){var gd=Qr[hd];$r(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}$r(Wr,`onAnimationEnd`),$r(Gr,`onAnimationIteration`),$r(Kr,`onAnimationStart`),$r(`dblclick`,`onDoubleClick`),$r(`focusin`,`onFocus`),$r(`focusout`,`onBlur`),$r(qr,`onTransitionRun`),$r(Jr,`onTransitionStart`),$r(Yr,`onTransitionCancel`),$r(Xr,`onTransitionEnd`),Nt(`onMouseEnter`,[`mouseout`,`mouseover`]),Nt(`onMouseLeave`,[`mouseout`,`mouseover`]),Nt(`onPointerEnter`,[`pointerout`,`pointerover`]),Nt(`onPointerLeave`,[`pointerout`,`pointerover`]),Mt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Mt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Mt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Mt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Mt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Mt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ei(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ei(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[yt];n===void 0&&(n=t[yt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,At.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!yn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Tt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}gn(function(){var r=a,i=dn(n),s=[];a:{var c=Zr.get(e);if(c!==void 0){var l=An,u=e;switch(e){case`keypress`:if(Tn(n)===0)break a;case`keydown`:case`keyup`:l=qn;break;case`focusin`:u=`focus`,l=Rn;break;case`focusout`:u=`blur`,l=Rn;break;case`beforeblur`:case`afterblur`:l=Rn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=In;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Ln;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=j;break;case Wr:case Gr:case Kr:l=zn;break;case Xr:l=Yn;break;case`scroll`:case`scrollend`:l=jn;break;case`wheel`:l=Xn;break;case`copy`:case`cut`:case`paste`:l=Bn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Jn;break;case`toggle`:case`beforetoggle`:l=M}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=_n(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==un&&(u=n.relatedTarget||n.fromElement)&&(Tt(u)||u[vt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?Tt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=In,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Jn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Dt(l),h=u==null?c:Dt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,Tt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?Dt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=mr;else if(lr(c))if(hr)v=wr;else{v=Sr;var y=xr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&an(r.elementType)&&(v=mr):v=Cr;if(v&&=v(e,r)){P(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Xt(c,`number`,c.value)}switch(y=r?Dt(r):window,e){case`focusin`:(lr(y)||y.contentEditable===`true`)&&(Pr=y,Fr=r,Ir=null);break;case`focusout`:Ir=Fr=Pr=null;break;case`mousedown`:Lr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Lr=!1,Rr(s,n,i);break;case`selectionchange`:if(Nr)break;case`keydown`:case`keyup`:Rr(s,n,i)}var b;if(Qn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else ar?rr(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(tr&&n.locale!==`ko`&&(ar||x!==`onCompositionStart`?x===`onCompositionEnd`&&ar&&(b=wn()):(xn=i,Sn=`value`in xn?xn.value:xn.textContent,ar=!0)),y=Ed(r,x),0<y.length&&(x=new Vn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=ir(n),b!==null&&(x.data=b)))),(b=er?or(e,n):sr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Vn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=_n(e,n),i!=null&&r.unshift(Td(e,i,a)),i=_n(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=_n(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=_n(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||en(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&en(e,``+r);break;case`className`:k(e,`class`,r);break;case`tabIndex`:k(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:k(e,n,r);break;case`style`:rn(e,r,o);break;case`data`:if(t!==`object`){k(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=cn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=cn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=ln);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=cn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Rt(e,`popover`,r);break;case`xlinkActuate`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Rt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=on.get(n)||n,Rt(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:rn(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?en(e,r):(typeof r==`number`||typeof r==`bigint`)&&en(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=ln);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!jt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[_t]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Rt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Yt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Zt(e,!!r,n,!0):Zt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}$t(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(an(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Jt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Zt(e,!!n,n?[]:``,!1):Zt(e,!!n,t,!0)):Zt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Qt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(an(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[Ct]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),wt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[Ct])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);wt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=D.d;D.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=Et(e);t!==null&&t.tag===5&&t.type===`form`?Ds(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=qt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),kt(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+qt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+qt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+qt(n.imageSizes)+`"]`)):i+=`[href="`+qt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=m({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),kt(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+qt(r)+`"][href="`+qt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=m({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),kt(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Ot(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=m({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);kt(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Ot(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=m({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),kt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Ot(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=m({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),kt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=_e.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Ot(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=Ot(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Ot(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+qt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return m({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),kt(t),e.head.appendChild(t))}function Pf(e){return`[src="`+qt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+qt(n.href)+`"]`);if(r)return t.instance=r,kt(r),r;var a=m({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),kt(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,kt(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),kt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,kt(a),a):(r=n,(a=mf.get(o))&&(r=m({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),kt(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[Ct]||a[gt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,kt(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),kt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:S,Provider:null,Consumer:null,_currentValue:ue,_currentValue2:ue,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=at(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=at(0),this.hiddenUpdates=at(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=fi(3,null,null,t),e.current=a,a.stateNode=e,t=ca(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Va(a),e}function tp(e){return e?(e=ui,e):ui}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ua(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Wa(e,r,t),n!==null&&(hu(n,e,t),Ga(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=si(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=dt(t);var n=si(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=2,up(e,t,n,r)}finally{D.p=a,E.T=i}}function lp(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=8,up(e,t,n,r)}finally{D.p=a,E.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Et(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=et(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-qe(o);s.entanglements[1]|=c,o&=~c}rd(a),!(G&6)&&(tu=Fe()+500,id(0,!1))}}break;case 31:case 13:s=si(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=dn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=Tt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ie()){case Le:return 2;case Re:return 8;case ze:case Be:return 32;case Ve:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Et(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=Tt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,mt(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,mt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);un=r,n.target.dispatchEvent(r),un=null}else return t=Et(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Et(n);a!==null&&(e.splice(t,3),t-=3,Ts(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[_t]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[_t]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[vt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=pt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.4`)throw Error(i(527,Lp,`19.2.4`));D.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=u(t),e=e===null?null:f(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.4`,rendererPackageName:`react-dom`,currentDispatcherRef:E,reconcilerVersion:`19.2.4`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{We=zp.inject(Rp),Ge=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Js,s=Ys,c=Xs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[vt]=t.current,Sd(e),new Fp(t)}})),_=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=g()})),v=l(d(),1),y=_(),b=`modulepreload`,x=function(e){return`/flowgentra-ai-docs/`+e},ee={},S=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=x(t,n),t in ee)return;ee[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:b,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},C=`popstate`;function te(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function ne(e={}){function t(e,t){let n=t.state?.masked,{pathname:r,search:i,hash:a}=n||e.location;return ae(``,{pathname:r,search:i,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||`default`,n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)}function n(e,t){return typeof t==`string`?t:oe(t)}return ce(t,n,null,e)}function w(e,t){if(e===!1||e==null)throw Error(t)}function T(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function re(){return Math.random().toString(36).substring(2,10)}function ie(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.unstable_mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function ae(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?se(t):t,state:n,key:t&&t.key||r||re(),unstable_mask:i}}function oe({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function se(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function ce(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=te(e)?e:ae(h.location,e,t);n&&n(r,e),l=u()+1;let d=ie(r,l),f=h.createHref(r.unstable_mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=te(e)?e:ae(h.location,e,t);n&&n(r,e),l=u();let i=ie(r,l),d=h.createHref(r.unstable_mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return le(e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(C,d),c=e,()=>{i.removeEventListener(C,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function le(e,t=!1){let n=`http://localhost`;typeof window<`u`&&(n=window.location.origin===`null`?window.location.href:window.location.origin),w(n,`No window.location.(origin|href) available to create URL`);let r=typeof e==`string`?e:oe(e);return r=r.replace(/ $/,`%20`),!t&&r.startsWith(`//`)&&(r=n+r),new URL(r,n)}function E(e,t,n=`/`){return D(e,t,n,!1)}function D(e,t,n,r){let i=Ee((typeof t==`string`?se(t):t).pathname||`/`,n);if(i==null)return null;let a=de(e);pe(a);let o=null;for(let e=0;o==null&&e<a.length;++e){let t=Te(i);o=Se(a[e],t,r)}return o}function ue(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function de(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;w(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=Pe([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(w(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),de(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:be(l,e.index),routesMeta:u})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of fe(e.path))a(e,t,!0,n)}),t}function fe(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=fe(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function pe(e){e.sort((e,t)=>e.score===t.score?xe(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var me=/^:[\w-]+$/,O=3,he=2,ge=1,_e=10,ve=-2,ye=e=>e===`*`;function be(e,t){let n=e.split(`/`),r=n.length;return n.some(ye)&&(r+=ve),t&&(r+=he),n.filter(e=>!ye(e)).reduce((e,t)=>e+(me.test(t)?O:t===``?ge:_e),r)}function xe(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function Se(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u=Ce({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},l),d=s.route;if(!u&&c&&n&&!r[r.length-1].route.index&&(u=Ce({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:Pe([a,u.pathname]),pathnameBase:Fe(Pe([a,u.pathnameBase])),route:d}),u.pathnameBase!==`/`&&(a=Pe([a,u.pathnameBase]))}return o}function Ce(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=we(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return n&&!i?e[t]=void 0:e[t]=(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function we(e,t=!1,n=!0){T(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function Te(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return T(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Ee(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}var De=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Oe(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?se(e):e,a;return n?(n=n.replace(/\/\/+/g,`/`),a=n.startsWith(`/`)?ke(n.substring(1),`/`):ke(n,t)):a=t,{pathname:a,search:Ie(r),hash:Le(i)}}function ke(e,t){let n=t.replace(/\/+$/,``).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function Ae(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function je(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Me(e){let t=je(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Ne(e,t,n,r=!1){let i;typeof e==`string`?i=se(e):(i={...e},w(!i.pathname||!i.pathname.includes(`?`),Ae(`?`,`pathname`,`search`,i)),w(!i.pathname||!i.pathname.includes(`#`),Ae(`#`,`pathname`,`hash`,i)),w(!i.search||!i.search.includes(`#`),Ae(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=Oe(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var Pe=e=>e.join(`/`).replace(/\/\/+/g,`/`),Fe=e=>e.replace(/\/+$/,``).replace(/^\/*/,`/`),Ie=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,Le=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,Re=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function ze(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function Be(e){return e.map(e=>e.route.path).filter(Boolean).join(`/`).replace(/\/\/*/g,`/`)||`/`}var Ve=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function He(e,t){let n=e;if(typeof n!=`string`||!De.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(Ve)try{let e=new URL(window.location.href),r=n.startsWith(`//`)?new URL(e.protocol+n):new URL(n),a=Ee(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{T(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var Ue=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(Ue);var We=[`GET`,...Ue];new Set(We);var Ge=v.createContext(null);Ge.displayName=`DataRouter`;var Ke=v.createContext(null);Ke.displayName=`DataRouterState`;var qe=v.createContext(!1);function Je(){return v.useContext(qe)}var Ye=v.createContext({isTransitioning:!1});Ye.displayName=`ViewTransition`;var Xe=v.createContext(new Map);Xe.displayName=`Fetchers`;var Ze=v.createContext(null);Ze.displayName=`Await`;var Qe=v.createContext(null);Qe.displayName=`Navigation`;var $e=v.createContext(null);$e.displayName=`Location`;var et=v.createContext({outlet:null,matches:[],isDataRoute:!1});et.displayName=`Route`;var tt=v.createContext(null);tt.displayName=`RouteError`;var nt=`REACT_ROUTER_ERROR`,rt=`REDIRECT`,it=`ROUTE_ERROR_RESPONSE`;function at(e){if(e.startsWith(`${nt}:${rt}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function ot(e){if(e.startsWith(`${nt}:${it}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new Re(t.status,t.statusText,t.data)}catch{}}function st(e,{relative:t}={}){w(ct(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=v.useContext(Qe),{hash:i,pathname:a,search:o}=ht(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:Pe([n,a])),r.createHref({pathname:s,search:o,hash:i})}function ct(){return v.useContext($e)!=null}function lt(){return w(ct(),`useLocation() may be used only in the context of a <Router> component.`),v.useContext($e).location}var ut=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function dt(e){v.useContext(Qe).static||v.useLayoutEffect(e)}function ft(){let{isDataRoute:e}=v.useContext(et);return e?Pt():pt()}function pt(){w(ct(),`useNavigate() may be used only in the context of a <Router> component.`);let e=v.useContext(Ge),{basename:t,navigator:n}=v.useContext(Qe),{matches:r}=v.useContext(et),{pathname:i}=lt(),a=JSON.stringify(Me(r)),o=v.useRef(!1);return dt(()=>{o.current=!0}),v.useCallback((r,s={})=>{if(T(o.current,ut),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=Ne(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:Pe([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}v.createContext(null);function mt(){let{matches:e}=v.useContext(et),t=e[e.length-1];return t?t.params:{}}function ht(e,{relative:t}={}){let{matches:n}=v.useContext(et),{pathname:r}=lt(),i=JSON.stringify(Me(n));return v.useMemo(()=>Ne(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function gt(e,t){return _t(e,t)}function _t(e,t,n){w(ct(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=v.useContext(Qe),{matches:i}=v.useContext(et),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;It(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=lt(),d;if(t){let e=typeof t==`string`?se(t):t;w(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=E(e,{pathname:p});T(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),T(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=wt(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:Pe([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:Pe([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?v.createElement($e.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,unstable_mask:void 0,...d},navigationType:`POP`}},h):h}function vt(){let e=Nt(),t=ze(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=v.createElement(v.Fragment,null,v.createElement(`p`,null,`💿 Hey developer 👋`),v.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,v.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,v.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),v.createElement(v.Fragment,null,v.createElement(`h2`,null,`Unexpected Application Error!`),v.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?v.createElement(`pre`,{style:i},n):null,o)}var yt=v.createElement(vt,null),bt=class extends v.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=ot(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:v.createElement(et.Provider,{value:this.props.routeContext},v.createElement(tt.Provider,{value:e,children:this.props.component}));return this.context?v.createElement(St,{error:e},t):t}};bt.contextType=qe;var xt=new WeakMap;function St({children:e,error:t}){let{basename:n}=v.useContext(Qe);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=at(t.digest);if(e){let r=xt.get(t);if(r)throw r;let i=He(e.location,n);if(Ve&&!xt.get(t))if(i.isExternal||e.reloadDocument)window.location.href=i.absoluteURL||i.to;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw xt.set(t,n),n}return v.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${i.absoluteURL||i.to}`})}}return e}function Ct({routeContext:e,match:t,children:n}){let r=v.useContext(Ge);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),v.createElement(et.Provider,{value:e},n)}function wt(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);w(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},unstable_pattern:Be(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||yt,o&&(s<0&&c===0?(It(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?v.createElement(n.route.Component,null):n.route.element?n.route.element:e,v.createElement(Ct,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?v.createElement(bt,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function Tt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Et(e){let t=v.useContext(Ge);return w(t,Tt(e)),t}function Dt(e){let t=v.useContext(Ke);return w(t,Tt(e)),t}function Ot(e){let t=v.useContext(et);return w(t,Tt(e)),t}function kt(e){let t=Ot(e),n=t.matches[t.matches.length-1];return w(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function At(){return kt(`useRouteId`)}function jt(){return Dt(`useNavigation`).navigation}function Mt(){let{matches:e,loaderData:t}=Dt(`useMatches`);return v.useMemo(()=>e.map(e=>ue(e,t)),[e,t])}function Nt(){let e=v.useContext(tt),t=Dt(`useRouteError`),n=kt(`useRouteError`);return e===void 0?t.errors?.[n]:e}function Pt(){let{router:e}=Et(`useNavigate`),t=kt(`useNavigate`),n=v.useRef(!1);return dt(()=>{n.current=!0}),v.useCallback(async(r,i={})=>{T(n.current,ut),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var Ft={};function It(e,t,n){!t&&!Ft[e]&&(Ft[e]=!0,T(!1,n))}v.useOptimistic,v.memo(Lt);function Lt({routes:e,future:t,state:n,isStatic:r,onError:i}){return _t(e,void 0,{state:n,isStatic:r,onError:i,future:t})}function Rt({to:e,replace:t,state:n,relative:r}){w(ct(),`<Navigate> may be used only in the context of a <Router> component.`);let{static:i}=v.useContext(Qe);T(!i,`<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.`);let{matches:a}=v.useContext(et),{pathname:o}=lt(),s=ft(),c=Ne(e,Me(a),o,r===`path`),l=JSON.stringify(c);return v.useEffect(()=>{s(JSON.parse(l),{replace:t,state:n,relative:r})},[s,l,r,t,n]),null}function k(e){w(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function zt({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,unstable_useTransitions:o}){w(!ct(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=v.useMemo(()=>({basename:s,navigator:i,static:a,unstable_useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=se(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,unstable_mask:m}=n,h=v.useMemo(()=>{let e=Ee(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,unstable_mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return T(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:v.createElement(Qe.Provider,{value:c},v.createElement($e.Provider,{children:t,value:h}))}function Bt({children:e,location:t}){return gt(Vt(e),t)}v.Component;function Vt(e,t=[]){let n=[];return v.Children.forEach(e,(e,r)=>{if(!v.isValidElement(e))return;let i=[...t,r];if(e.type===v.Fragment){n.push.apply(n,Vt(e.props.children,i));return}w(e.type===k,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),w(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=Vt(e.props.children,i)),n.push(a)}),n}var Ht=`get`,Ut=`application/x-www-form-urlencoded`;function Wt(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function Gt(e){return Wt(e)&&e.tagName.toLowerCase()===`button`}function Kt(e){return Wt(e)&&e.tagName.toLowerCase()===`form`}function qt(e){return Wt(e)&&e.tagName.toLowerCase()===`input`}function Jt(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Yt(e,t){return e.button===0&&(!t||t===`_self`)&&!Jt(e)}var Xt=null;function Zt(){if(Xt===null)try{new FormData(document.createElement(`form`),0),Xt=!1}catch{Xt=!0}return Xt}var Qt=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function $t(e){return e!=null&&!Qt.has(e)?(T(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ut}"`),null):e}function en(e,t){let n,r,i,a,o;if(Kt(e)){let o=e.getAttribute(`action`);r=o?Ee(o,t):null,n=e.getAttribute(`method`)||Ht,i=$t(e.getAttribute(`enctype`))||Ut,a=new FormData(e)}else if(Gt(e)||qt(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?Ee(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||Ht,i=$t(e.getAttribute(`formenctype`))||$t(o.getAttribute(`enctype`))||Ut,a=new FormData(o,e),!Zt()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(Wt(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=Ht,r=null,i=Ut,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var tn={"&":`\\u0026`,">":`\\u003e`,"<":`\\u003c`,"\u2028":`\\u2028`,"\u2029":`\\u2029`},nn=/[&><\u2028\u2029]/g;function rn(e){return e.replace(nn,e=>tn[e])}function an(e,t){if(e===!1||e==null)throw Error(t)}function on(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return n?i.pathname.endsWith(`/`)?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:i.pathname===`/`?i.pathname=`_root.${r}`:t&&Ee(i.pathname,t)===`/`?i.pathname=`${t.replace(/\/$/,``)}/_root.${r}`:i.pathname=`${i.pathname.replace(/\/$/,``)}.${r}`,i}async function sn(e,t){if(e.id in t)return t[e.id];try{let n=await S(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function cn(e){return e!=null&&typeof e.page==`string`}function ln(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function un(e,t,n){return hn((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await sn(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(ln).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function dn(e,t,n,r,i,a){let o=(e,t)=>n[t]?e.route.id!==n[t].route.id:!0,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function fn(e,t,{includeHydrateFallback:n}={}){return pn(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function pn(e){return[...new Set(e)]}function mn(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function hn(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!cn(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(mn(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function gn(){let e=v.useContext(Ge);return an(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function _n(){let e=v.useContext(Ke);return an(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var vn=v.createContext(void 0);vn.displayName=`FrameworkContext`;function yn(){let e=v.useContext(vn);return an(e,`You must render this element inside a <HydratedRouter> element`),e}function bn(e,t){let n=v.useContext(vn),[r,i]=v.useState(!1),[a,o]=v.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=v.useRef(null);v.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),v.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:xn(s,p),onBlur:xn(c,m),onMouseEnter:xn(l,p),onMouseLeave:xn(u,m),onTouchStart:xn(d,p)}]:[a,f,{}]:[!1,f,{}]}function xn(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Sn({page:e,...t}){let n=Je(),{router:r}=gn(),i=v.useMemo(()=>E(r.routes,e,r.basename),[r.routes,e,r.basename]);return i?n?v.createElement(wn,{page:e,matches:i,...t}):v.createElement(Tn,{page:e,matches:i,...t}):null}function Cn(e){let{manifest:t,routeModules:n}=yn(),[r,i]=v.useState([]);return v.useEffect(()=>{let r=!1;return un(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function wn({page:e,matches:t,...n}){let r=lt(),{future:i}=yn(),{basename:a}=gn(),o=v.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=on(e,a,i.unstable_trailingSlashAwareDataRequests,`rsc`),o=!1,s=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set(`_routes`,s.join(`,`)),[n.pathname+n.search]},[a,i.unstable_trailingSlashAwareDataRequests,e,r,t]);return v.createElement(v.Fragment,null,o.map(e=>v.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function Tn({page:e,matches:t,...n}){let r=lt(),{future:i,manifest:a,routeModules:o}=yn(),{basename:s}=gn(),{loaderData:c,matches:l}=_n(),u=v.useMemo(()=>dn(e,t,l,a,r,`data`),[e,t,l,a,r]),d=v.useMemo(()=>dn(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=v.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=on(e,s,i.unstable_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.unstable_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=v.useMemo(()=>fn(d,a),[d,a]),m=Cn(d);return v.createElement(v.Fragment,null,f.map(e=>v.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>v.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>v.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function En(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}v.Component;var Dn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{Dn&&(window.__reactRouterVersion=`7.14.0`)}catch{}function On({basename:e,children:t,unstable_useTransitions:n,window:r}){let i=v.useRef();i.current??=ne({window:r,v5Compat:!0});let a=i.current,[o,s]=v.useState({action:a.action,location:a.location}),c=v.useCallback(e=>{n===!1?s(e):v.startTransition(()=>s(e))},[n]);return v.useLayoutEffect(()=>a.listen(c),[a,c]),v.createElement(zt,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,unstable_useTransitions:n})}function kn({basename:e,children:t,history:n,unstable_useTransitions:r}){let[i,a]=v.useState({action:n.action,location:n.location}),o=v.useCallback(e=>{r===!1?a(e):v.startTransition(()=>a(e))},[r]);return v.useLayoutEffect(()=>n.listen(o),[n,o]),v.createElement(zt,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:n,unstable_useTransitions:r})}kn.displayName=`unstable_HistoryRouter`;var An=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,A=v.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,unstable_mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,unstable_useTransitions:_}=v.useContext(Qe),y=typeof l==`string`&&An.test(l),b=He(l,h);l=b.to;let x=st(l,{relative:r}),ee=lt(),S=null;if(o){let e=Ne(o,[],ee.unstable_mask?ee.unstable_mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:Pe([h,e.pathname])),S=g.createHref(e)}let[C,te,ne]=bn(n,p),w=Ln(l,{replace:a,unstable_mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,unstable_defaultShouldRevalidate:f,unstable_useTransitions:_});function T(t){e&&e(t),t.defaultPrevented||w(t)}let re=!(b.isExternal||i),ie=v.createElement(`a`,{...p,...ne,href:(re?S:void 0)||b.absoluteURL||x,onClick:re?T:e,ref:En(m,te),target:c,"data-discover":!y&&t===`render`?`true`:void 0});return C&&!y?v.createElement(v.Fragment,null,ie,v.createElement(Sn,{page:x})):ie});A.displayName=`Link`;var jn=v.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=ht(a,{relative:c.relative}),d=lt(),f=v.useContext(Ke),{navigator:p,basename:m}=v.useContext(Qe),h=f!=null&&qn(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,_=d.pathname,y=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(_=_.toLowerCase(),y=y?y.toLowerCase():null,g=g.toLowerCase()),y&&m&&(y=Ee(y,m)||y);let b=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,x=_===g||!r&&_.startsWith(g)&&_.charAt(b)===`/`,ee=y!=null&&(y===g||!r&&y.startsWith(g)&&y.charAt(g.length)===`/`),S={isActive:x,isPending:ee,isTransitioning:h},C=x?e:void 0,te;te=typeof n==`function`?n(S):[n,x?`active`:null,ee?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let ne=typeof i==`function`?i(S):i;return v.createElement(A,{...c,"aria-current":C,className:te,ref:l,style:ne,to:a,viewTransition:o},typeof s==`function`?s(S):s)});jn.displayName=`NavLink`;var Mn=v.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=Ht,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f,...p},m)=>{let{unstable_useTransitions:h}=v.useContext(Qe),g=Bn(),_=Vn(s,{relative:l}),y=o.toLowerCase()===`get`?`get`:`post`,b=typeof s==`string`&&An.test(s);return v.createElement(`form`,{ref:m,method:y,action:_,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f});h&&n!==!1?v.startTransition(()=>p()):p()},...p,"data-discover":!b&&e===`render`?`true`:void 0})});Mn.displayName=`Form`;function Nn({getKey:e,storageKey:t,...n}){let r=v.useContext(vn),{basename:i}=v.useContext(Qe),a=lt(),o=Mt();Gn({getKey:e,storageKey:t});let s=v.useMemo(()=>{if(!r||!e)return null;let t=Wn(a,o,i,e);return t===a.key?null:t},[]);if(!r||r.isSpaMode)return null;let c=((e,t)=>{if(!window.history.state||!window.history.state.key){let e=Math.random().toString(32).slice(2);window.history.replaceState({key:e},``)}try{let n=JSON.parse(sessionStorage.getItem(e)||`{}`)[t||window.history.state.key];typeof n==`number`&&window.scrollTo(0,n)}catch(t){console.error(t),sessionStorage.removeItem(e)}}).toString();return v.createElement(`script`,{...n,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${c})(${rn(JSON.stringify(t||Hn))}, ${rn(JSON.stringify(s))})`}})}Nn.displayName=`ScrollRestoration`;function Pn(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Fn(e){let t=v.useContext(Ge);return w(t,Pn(e)),t}function In(e){let t=v.useContext(Ke);return w(t,Pn(e)),t}function Ln(e,{target:t,replace:n,unstable_mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,unstable_defaultShouldRevalidate:c,unstable_useTransitions:l}={}){let u=ft(),d=lt(),f=ht(e,{relative:o});return v.useCallback(p=>{if(Yt(p,t)){p.preventDefault();let t=n===void 0?oe(d)===oe(f):n,m=()=>u(e,{replace:t,unstable_mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,unstable_defaultShouldRevalidate:c});l?v.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}var Rn=0,zn=()=>`__${String(++Rn)}__`;function Bn(){let{router:e}=Fn(`useSubmit`),{basename:t}=v.useContext(Qe),n=At(),r=e.fetch,i=e.navigate;return v.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=en(e,t);a.navigate===!1?await r(a.fetcherKey||zn(),n,a.action||o,{unstable_defaultShouldRevalidate:a.unstable_defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync}):await i(a.action||o,{unstable_defaultShouldRevalidate:a.unstable_defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function Vn(e,{relative:t}={}){let{basename:n}=v.useContext(Qe),r=v.useContext(et);w(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...ht(e||`.`,{relative:t})},o=lt();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:Pe([n,a.pathname])),oe(a)}var Hn=`react-router-scroll-positions`,Un={};function Wn(e,t,n,r){let i=null;return r&&(i=r(n===`/`?e:{...e,pathname:Ee(e.pathname,n)||e.pathname},t)),i??=e.key,i}function Gn({getKey:e,storageKey:t}={}){let{router:n}=Fn(`useScrollRestoration`),{restoreScrollPosition:r,preventScrollReset:i}=In(`useScrollRestoration`),{basename:a}=v.useContext(Qe),o=lt(),s=Mt(),c=jt();v.useEffect(()=>(window.history.scrollRestoration=`manual`,()=>{window.history.scrollRestoration=`auto`}),[]),Kn(v.useCallback(()=>{if(c.state===`idle`){let t=Wn(o,s,a,e);Un[t]=window.scrollY}try{sessionStorage.setItem(t||Hn,JSON.stringify(Un))}catch(e){T(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`)}window.history.scrollRestoration=`auto`},[c.state,e,a,o,s,t])),typeof document<`u`&&(v.useLayoutEffect(()=>{try{let e=sessionStorage.getItem(t||Hn);e&&(Un=JSON.parse(e))}catch{}},[t]),v.useLayoutEffect(()=>{let t=n?.enableScrollRestoration(Un,()=>window.scrollY,e?(t,n)=>Wn(t,n,a,e):void 0);return()=>t&&t()},[n,a,e]),v.useLayoutEffect(()=>{if(r!==!1){if(typeof r==`number`){window.scrollTo(0,r);return}try{if(o.hash){let e=document.getElementById(decodeURIComponent(o.hash.slice(1)));if(e){e.scrollIntoView();return}}}catch{T(!1,`"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}i!==!0&&window.scrollTo(0,0)}},[o,r,i]))}function Kn(e,t){let{capture:n}=t||{};v.useEffect(()=>{let t=n==null?void 0:{capture:n};return window.addEventListener(`pagehide`,e,t),()=>{window.removeEventListener(`pagehide`,e,t)}},[e,n])}function qn(e,{relative:t}={}){let n=v.useContext(Ye);w(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Fn(`useViewTransitionState`),i=ht(e,{relative:t});if(!n.isTransitioning)return!1;let a=Ee(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Ee(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Ce(i.pathname,o)!=null||Ce(i.pathname,a)!=null}var Jn=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),j=o(((e,t)=>{t.exports=Jn()}))(),Yn=(0,v.createContext)(null);function Xn({children:e}){let[t,n]=(0,v.useState)(()=>localStorage.getItem(`fg-lang`)||`rust`);return(0,v.useEffect)(()=>{let e=document.documentElement;t===`python`?e.classList.add(`lang-python`):e.classList.remove(`lang-python`)},[t]),(0,j.jsx)(Yn.Provider,{value:{language:t,setLanguage:e=>{n(e),localStorage.setItem(`fg-lang`,e)}},children:e})}function M(){return(0,v.useContext)(Yn)}function Zn({compact:e=!1}){let{language:t,setLanguage:n}=M(),r={backgroundColor:`var(--accent)`,color:`#fff`,borderColor:`var(--accent)`},i={backgroundColor:`transparent`,color:`#8b949e`,borderColor:`#30363d`},a={cursor:`pointer`,fontFamily:`IBM Plex Sans, sans-serif`,fontWeight:500,fontSize:e?`0.8125rem`:`0.875rem`,padding:e?`4px 12px`:`5px 16px`,border:`1px solid`,transition:`background-color 0.2s, color 0.2s, border-color 0.2s`,display:`flex`,alignItems:`center`,gap:`6px`,whiteSpace:`nowrap`};return(0,j.jsxs)(`div`,{style:{display:`flex`,borderRadius:`6px`,overflow:`hidden`,border:`1px solid #30363d`},children:[(0,j.jsxs)(`button`,{onClick:()=>n(`rust`),style:{...a,borderRadius:0,border:`none`,...t===`rust`?r:i},"aria-pressed":t===`rust`,children:[(0,j.jsx)(`span`,{"aria-hidden":!0,children:`🦀`}),` Rust`]}),(0,j.jsx)(`div`,{style:{width:`1px`,background:`#30363d`}}),(0,j.jsxs)(`button`,{onClick:()=>n(`python`),style:{...a,borderRadius:0,border:`none`,...t===`python`?r:i},"aria-pressed":t===`python`,children:[(0,j.jsx)(`span`,{"aria-hidden":!0,children:`🐍`}),` Python`]})]})}var Qn=[{to:`/docs/guides/agents`,label:`Building Agents`},{to:`/docs/guides/llm-client`,label:`LLM Integration`},{to:`/docs/guides/tools`,label:`Tool Use`},{to:`/docs/guides/memory`,label:`Memory & Conversations`},{to:`/docs/guides/rag`,label:`RAG`},{to:`/docs/guides/supervisor`,label:`Multi-Agent Systems`},{to:`/docs/guides/human-in-loop`,label:`Human-in-the-Loop`},{to:`/docs/guides/error-handling`,label:`Error Handling`},{to:`/docs/guides/evaluation`,label:`Evaluation`},{to:`/docs/guides/observability`,label:`Observability`},{to:`/docs/guides/configuration`,label:`Configuration`}];function $n(){let[e,t]=(0,v.useState)(!1),[n,r]=(0,v.useState)(!1),{language:i}=M(),a=i===`rust`,o=e=>({color:e?`var(--accent)`:`#8b949e`,textDecoration:`none`,fontSize:`0.875rem`,fontWeight:500,padding:`4px 0`,borderBottom:e?`2px solid var(--accent)`:`2px solid transparent`,transition:`color 0.15s`,whiteSpace:`nowrap`,background:`none`,border:`none`,cursor:`pointer`});return(0,j.jsxs)(`header`,{style:{position:`sticky`,top:0,zIndex:50,background:`rgba(13,17,23,0.94)`,backdropFilter:`blur(12px)`,borderBottom:`1px solid #21262d`},children:[(0,j.jsxs)(`nav`,{style:{maxWidth:`1320px`,margin:`0 auto`,padding:`0 24px`,height:`60px`,display:`flex`,alignItems:`center`,gap:`28px`},children:[(0,j.jsxs)(A,{to:`/`,style:{textDecoration:`none`,display:`flex`,alignItems:`center`,gap:`10px`,flexShrink:0},children:[(0,j.jsx)(`div`,{style:{width:28,height:28,borderRadius:6,background:`var(--accent)`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`0.875rem`,fontWeight:700,color:`#fff`,transition:`background 0.2s`},children:`F`}),(0,j.jsx)(`span`,{style:{fontWeight:700,fontSize:`1rem`,color:`#e6edf3`,letterSpacing:`-0.02em`},children:`flowgentra`})]}),(0,j.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`24px`,flex:1},className:`desktop-nav`,children:[(0,j.jsx)(jn,{to:`/docs/getting-started`,style:({isActive:e})=>o(e),children:`Docs`}),(0,j.jsxs)(`div`,{style:{position:`relative`},onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:[(0,j.jsxs)(`button`,{style:{...o(!1),display:`flex`,alignItems:`center`,gap:4},children:[`Guides`,(0,j.jsx)(`svg`,{width:`10`,height:`10`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,style:{opacity:.5},children:(0,j.jsx)(`polyline`,{points:`6 9 12 15 18 9`})})]}),n&&(0,j.jsx)(`div`,{style:{position:`absolute`,top:`100%`,left:`-12px`,marginTop:8,background:`#161b22`,border:`1px solid #21262d`,borderRadius:8,padding:`8px`,minWidth:220,zIndex:60,boxShadow:`0 16px 48px rgba(0,0,0,0.5)`},children:Qn.map(e=>(0,j.jsx)(jn,{to:e.to,style:({isActive:e})=>({display:`block`,padding:`8px 12px`,borderRadius:5,textDecoration:`none`,fontSize:`0.875rem`,color:e?`var(--accent)`:`#8b949e`,background:e?`var(--accent-dim)`:`transparent`,transition:`color 0.12s, background 0.12s`,whiteSpace:`nowrap`}),onMouseEnter:e=>{e.currentTarget.style.color=`var(--accent)`,e.currentTarget.style.background=`var(--accent-dim)`},onMouseLeave:e=>{e.currentTarget.style.color=`#8b949e`,e.currentTarget.style.background=`transparent`},onClick:()=>r(!1),children:e.label},e.to))})]}),(0,j.jsx)(jn,{to:`/docs/api/state-graph`,style:({isActive:e})=>o(e),children:`API`}),(0,j.jsx)(jn,{to:`/docs/examples`,style:({isActive:e})=>o(e),children:`Examples`})]}),(0,j.jsxs)(`div`,{style:{marginLeft:`auto`,display:`flex`,alignItems:`center`,gap:`12px`},children:[(0,j.jsx)(A,{to:a?`/docs/quickstart-rust`:`/docs/quickstart-python`,className:`desktop-nav`,style:{background:`var(--accent)`,color:`#fff`,padding:`6px 14px`,borderRadius:6,textDecoration:`none`,fontWeight:600,fontSize:`0.8125rem`,whiteSpace:`nowrap`,transition:`opacity 0.15s`},onMouseEnter:e=>e.target.style.opacity=`0.85`,onMouseLeave:e=>e.target.style.opacity=`1`,children:`Quick Start`}),(0,j.jsx)(`div`,{className:`desktop-nav`,children:(0,j.jsx)(Zn,{compact:!0})}),(0,j.jsx)(`a`,{href:`https://github.com/oussamabenhariz`,target:`_blank`,rel:`noopener noreferrer`,style:{color:`#8b949e`,display:`flex`,alignItems:`center`,transition:`color 0.15s`},onMouseEnter:e=>e.currentTarget.style.color=`var(--accent)`,onMouseLeave:e=>e.currentTarget.style.color=`#8b949e`,title:`GitHub`,children:(0,j.jsx)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`currentColor`,children:(0,j.jsx)(`path`,{d:`M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z`})})}),(0,j.jsx)(`button`,{onClick:()=>t(e=>!e),style:{background:`none`,border:`none`,cursor:`pointer`,color:`#8b949e`,padding:4,display:`none`},className:`mobile-menu-btn`,"aria-label":`Toggle menu`,children:(0,j.jsx)(`svg`,{width:`22`,height:`22`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:e?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(`line`,{x1:`18`,y1:`6`,x2:`6`,y2:`18`}),(0,j.jsx)(`line`,{x1:`6`,y1:`6`,x2:`18`,y2:`18`})]}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(`line`,{x1:`3`,y1:`6`,x2:`21`,y2:`6`}),(0,j.jsx)(`line`,{x1:`3`,y1:`12`,x2:`21`,y2:`12`}),(0,j.jsx)(`line`,{x1:`3`,y1:`18`,x2:`21`,y2:`18`})]})})})]})]}),e&&(0,j.jsxs)(`div`,{style:{borderTop:`1px solid #21262d`,background:`#0d1117`,padding:`16px 24px`,display:`flex`,flexDirection:`column`,gap:`12px`},children:[[{to:`/docs/getting-started`,label:`Documentation`},{to:`/docs/quickstart-rust`,label:`🦀 Rust Quickstart`},{to:`/docs/quickstart-python`,label:`🐍 Python Quickstart`},...Qn,{to:`/docs/api/state-graph`,label:`API Reference`},{to:`/docs/examples`,label:`Examples`}].map(e=>(0,j.jsx)(jn,{to:e.to,style:({isActive:e})=>({...o(e),display:`block`}),onClick:()=>t(!1),children:e.label},e.to)),(0,j.jsx)(Zn,{})]}),(0,j.jsx)(`style`,{children:`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `})]})}var er=null;async function tr(){if(er)return er;let{createHighlighter:e}=await S(async()=>{let{createHighlighter:e}=await import(`./dist-C2kW0J0n.js`);return{createHighlighter:e}},[]);return er=await e({themes:[`github-dark`],langs:[`rust`,`python`,`yaml`,`bash`,`toml`]}),er}function N({rust:e,python:t,lang:n,forceLang:r}){let{language:i}=M(),[a,o]=(0,v.useState)(``),[s,c]=(0,v.useState)(!1),l=(0,v.useRef)(null),u=r||(i===`rust`?`rust`:`python`),d=r?e||t:i===`rust`?e:t,f=n||u;return(0,v.useEffect)(()=>{if(!d)return;let e=!1;return tr().then(t=>{e||o(t.codeToHtml(d.trim(),{lang:f,theme:`github-dark`}))}),()=>{e=!0}},[d,f]),(0,j.jsxs)(`div`,{style:{position:`relative`,background:`#161b22`,borderRadius:`8px`,overflow:`hidden`,border:`1px solid #30363d`},children:[(0,j.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,padding:`8px 16px`,borderBottom:`1px solid #21262d`,background:`#0d1117`},children:[(0,j.jsx)(`span`,{style:{fontSize:`0.75rem`,color:`#8b949e`,fontFamily:`JetBrains Mono, monospace`,textTransform:`uppercase`,letterSpacing:`0.05em`},children:f}),(0,j.jsx)(`button`,{onClick:()=>{navigator.clipboard.writeText(d?.trim()||``),c(!0),clearTimeout(l.current),l.current=setTimeout(()=>c(!1),2e3)},style:{background:`none`,border:`1px solid #30363d`,borderRadius:`4px`,color:s?`var(--accent)`:`#8b949e`,cursor:`pointer`,fontSize:`0.75rem`,padding:`3px 10px`,fontFamily:`IBM Plex Sans, sans-serif`,transition:`color 0.15s, border-color 0.15s`,borderColor:s?`var(--accent)`:`#30363d`},children:s?`Copied!`:`Copy`})]}),a?(0,j.jsx)(`div`,{dangerouslySetInnerHTML:{__html:a}}):(0,j.jsx)(`pre`,{style:{padding:`1.25rem 1.5rem`,margin:0,fontSize:`0.8125rem`,lineHeight:1.75,color:`#e6edf3`,overflowX:`auto`},children:(0,j.jsx)(`code`,{children:d?.trim()})})]})}var nr=`use flowgentra_ai::prelude::*;

#[derive(State, Default)]
struct AgentState {
    query:    String,
    response: String,
}

#[node]
async fn answer(state: &mut AgentState) -> Result<()> {
    let client = LLMClient::openai("gpt-4o");
    let msg = Message::user(&state.query);
    state.response = client.chat(vec![msg]).await?.content;
    Ok(())
}

#[tokio::main]
async fn main() -> Result<()> {
    let graph = StateGraph::<AgentState>::builder()
        .add_node("answer", answer)
        .set_entry("answer")
        .build()?;

    let result = graph.invoke(AgentState {
        query: "What is Flowgentra?".into(),
        ..Default::default()
    }).await?;

    println!("{}", result.response);
    Ok(())
}`,rr=`from flowgentra_ai.graph import StateGraph, END
from flowgentra_ai.llm import LLMConfig, LLMClient, Message
from typing import TypedDict

class AgentState(TypedDict):
    query: str
    response: str

config = LLMConfig(provider="openai", model="gpt-4o")
client = LLMClient.from_config(config)

def answer(state: AgentState) -> AgentState:
    msg = Message.user(state["query"])
    reply = client.chat([msg])
    return {**state, "response": reply.content}

builder = StateGraph(AgentState)
builder.add_node("answer", answer)
builder.set_entry_point("answer")
builder.add_edge("answer", END)
graph = builder.compile()

result = graph.invoke({"query": "What is Flowgentra?", "response": ""})
print(result["response"])`,ir=[{icon:`⚡`,title:`Built on Rust`,description:`Zero-cost abstractions and async-first design. Python bindings run at near-native speed via PyO3. No GIL bottlenecks.`},{icon:`🗺️`,title:`Graph-First Design`,description:`Model any agent logic as a directed graph. Conditional routing, parallel branches, subgraphs — all composable.`},{icon:`💾`,title:`Stateful by Default`,description:`Strongly-typed state flows through every node. Reducers handle concurrent merges. Checkpointing gives you resumability for free.`},{icon:`🔌`,title:`LLM-Agnostic`,description:`One API for OpenAI, Anthropic, Ollama, Groq, Mistral, Azure, and HuggingFace. Switch providers with one config line.`},{icon:`🤖`,title:`Multi-Agent Ready`,description:`11 orchestration strategies out of the box: Sequential, Parallel, Map-Reduce, Debate, LLM-Routed, and more.`},{icon:`🔍`,title:`Built-in RAG`,description:`Embeddings, vector stores (in-memory, Chroma, Pinecone), hybrid retrieval, ingestion pipelines — all first-class.`}],ar=[{feature:`Language`,flowgentra:`Rust + Python (PyO3)`,langgraph:`Python only`,langchain:`Python + JS`},{feature:`Performance`,flowgentra:`Native (Rust engine)`,langgraph:`Python runtime`,langchain:`Python runtime`},{feature:`State typing`,flowgentra:`Compile-time (Rust) / TypedDict (Python)`,langgraph:`TypedDict`,langchain:`Weakly typed`},{feature:`Multi-agent`,flowgentra:`11 strategies built-in`,langgraph:`Manual wiring`,langchain:`Via LCEL chains`},{feature:`Config-driven`,flowgentra:`YAML + auto-discovery`,langgraph:`Code only`,langchain:`Partial (LangServe)`},{feature:`Checkpointing`,flowgentra:`File + in-memory`,langgraph:`File, Redis, Postgres`,langchain:`Via LangSmith`},{feature:`Built-in RAG`,flowgentra:`Yes (embeddings + stores)`,langgraph:`Via LangChain`,langchain:`Yes`},{feature:`Observability`,flowgentra:`Built-in tracer + Mermaid`,langgraph:`LangSmith required`,langchain:`LangSmith required`}];function or({onChoose:e}){let[t,n]=(0,v.useState)(null),r=(r,i,a,o,s,c)=>{let l=t===r;return(0,j.jsxs)(`button`,{onClick:()=>e(r),onMouseEnter:()=>n(r),onMouseLeave:()=>n(null),style:{background:`#161b22`,border:`2px solid ${l?s:`#21262d`}`,borderRadius:14,padding:`44px 60px`,cursor:`pointer`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:16,minWidth:240,transform:l?`translateY(-4px) scale(1.02)`:`none`,transition:`all 0.2s`,boxShadow:l?`0 12px 40px ${s}33`:`none`},children:[(0,j.jsx)(`span`,{style:{fontSize:`4rem`,lineHeight:1},children:i}),(0,j.jsx)(`span`,{style:{fontSize:`1.5rem`,fontWeight:700,color:`#e6edf3`},children:a}),(0,j.jsx)(`span`,{style:{fontSize:`0.875rem`,color:`#8b949e`,textAlign:`center`,lineHeight:1.6,maxWidth:200},children:o}),(0,j.jsxs)(`span`,{style:{marginTop:4,background:s,color:`#fff`,fontSize:`0.875rem`,fontWeight:600,padding:`7px 22px`,borderRadius:20},children:[`Start with `,a,` →`]})]})};return(0,j.jsxs)(`div`,{style:{minHeight:`calc(100vh - 60px)`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,padding:`40px 24px`,gap:52},children:[(0,j.jsxs)(`div`,{style:{textAlign:`center`,maxWidth:600},children:[(0,j.jsx)(`div`,{style:{display:`inline-block`,background:`rgba(206,66,43,0.12)`,border:`1px solid rgba(206,66,43,0.4)`,borderRadius:20,padding:`4px 14px`,fontSize:`0.8rem`,color:`#CE422B`,marginBottom:20,fontWeight:600,letterSpacing:`0.05em`,textTransform:`uppercase`},children:`Welcome to Flowgentra`}),(0,j.jsx)(`h1`,{style:{fontSize:`clamp(1.875rem, 5vw, 3rem)`,fontWeight:700,color:`#e6edf3`,marginBottom:16,marginTop:0,letterSpacing:`-0.03em`,lineHeight:1.15},children:`Which language are you using?`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,fontSize:`1.0625rem`,lineHeight:1.7,margin:0},children:`We'll show you the right API signatures, code examples, and installation instructions throughout the entire site. You can switch anytime from the navbar.`})]}),(0,j.jsxs)(`div`,{style:{display:`flex`,gap:32,flexWrap:`wrap`,justifyContent:`center`},children:[r(`rust`,`🦀`,`Rust`,`Type-safe, zero-cost, compile-time guarantees`,`#CE422B`),r(`python`,`🐍`,`Python`,`Ergonomic, fast iteration, LangGraph-compatible`,`#3572A5`)]}),(0,j.jsxs)(`p`,{style:{color:`#484f58`,fontSize:`0.875rem`},children:[`Not sure? `,(0,j.jsx)(`button`,{onClick:()=>e(`python`),style:{background:`none`,border:`none`,color:`#8b949e`,cursor:`pointer`,fontSize:`0.875rem`,textDecoration:`underline`},children:`Start with Python`}),` — you can always switch.`]})]})}function sr(){let{language:e,setLanguage:t}=M(),n=e===`rust`,[r,i]=(0,v.useState)(()=>localStorage.getItem(`fg-lang-chosen`)===`true`);return r?(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`section`,{style:{background:`linear-gradient(180deg, #161b22 0%, #0d1117 60%)`,borderBottom:`1px solid #21262d`},children:(0,j.jsx)(`div`,{style:{maxWidth:1160,margin:`0 auto`,padding:`80px 24px 72px`},children:(0,j.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:56,alignItems:`center`},children:[(0,j.jsxs)(`div`,{style:{flex:`1 1 380px`,minWidth:0},children:[(0,j.jsxs)(`div`,{style:{display:`inline-flex`,alignItems:`center`,gap:8,background:`var(--accent-dim)`,border:`1px solid var(--accent)`,borderRadius:20,padding:`4px 14px`,fontSize:`0.8125rem`,color:`var(--accent)`,marginBottom:22},children:[(0,j.jsx)(`span`,{children:n?`🦀`:`🐍`}),(0,j.jsx)(`span`,{children:n?`Zero-cost Rust engine`:`Python — powered by Rust`})]}),(0,j.jsxs)(`h1`,{style:{fontSize:`clamp(2.25rem, 5vw, 3.5rem)`,fontWeight:800,lineHeight:1.1,letterSpacing:`-0.04em`,color:`#e6edf3`,marginBottom:20,marginTop:0},children:[`Build stateful AI agents`,(0,j.jsx)(`br`,{}),(0,j.jsx)(`span`,{style:{color:`var(--accent)`},children:`as typed graphs.`})]}),(0,j.jsxs)(`p`,{style:{fontSize:`1.125rem`,color:`#8b949e`,lineHeight:1.75,marginBottom:12,maxWidth:480},children:[`Flowgentra is a high-performance framework for building multi-step AI agents. Define nodes, connect edges, share typed state — in `,n?`Rust or Python`:`Python or Rust`,`.`]}),(0,j.jsxs)(`p`,{style:{fontSize:`0.9375rem`,color:`#8b949e`,lineHeight:1.7,marginBottom:36,maxWidth:480},children:[`Inspired by LangGraph. Built for production — with `,(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Rust performance`}),`,`,` `,(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`compile-time state guarantees`}),`, and`,` `,(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`11 multi-agent strategies`}),` out of the box.`]}),(0,j.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:12,marginBottom:36},children:[(0,j.jsx)(A,{to:n?`/docs/quickstart-rust`:`/docs/quickstart-python`,style:{background:`var(--accent)`,color:`#fff`,padding:`11px 28px`,borderRadius:7,textDecoration:`none`,fontWeight:700,fontSize:`0.9375rem`,transition:`opacity 0.15s`},onMouseEnter:e=>e.target.style.opacity=`0.85`,onMouseLeave:e=>e.target.style.opacity=`1`,children:n?`Get Started with Rust →`:`Get Started with Python →`}),(0,j.jsx)(A,{to:n?`/docs/quickstart-python`:`/docs/quickstart-rust`,style:{background:`transparent`,color:`#e6edf3`,padding:`11px 28px`,borderRadius:7,textDecoration:`none`,fontWeight:500,fontSize:`0.9375rem`,border:`1px solid #30363d`,transition:`border-color 0.15s`},onMouseEnter:e=>e.target.style.borderColor=`var(--accent)`,onMouseLeave:e=>e.target.style.borderColor=`#30363d`,children:n?`Python Quickstart`:`Rust Quickstart`})]}),(0,j.jsx)(Zn,{}),(0,j.jsx)(`div`,{style:{display:`flex`,gap:32,marginTop:36,flexWrap:`wrap`},children:[[`7+`,`LLM Providers`],[`11`,`Multi-Agent Strategies`],[`3`,`Memory Types`]].map(([e,t])=>(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`div`,{style:{fontSize:`1.75rem`,fontWeight:700,color:`var(--accent)`},children:e}),(0,j.jsx)(`div`,{style:{fontSize:`0.8125rem`,color:`#8b949e`},children:t})]},t))})]}),(0,j.jsx)(`div`,{style:{flex:`1 1 460px`,minWidth:0},children:(0,j.jsx)(N,{rust:nr,python:rr})})]})})}),(0,j.jsxs)(`section`,{style:{maxWidth:1160,margin:`0 auto`,padding:`80px 24px`},children:[(0,j.jsxs)(`div`,{style:{textAlign:`center`,marginBottom:56},children:[(0,j.jsx)(`h2`,{style:{fontSize:`clamp(1.5rem, 3vw, 2rem)`,fontWeight:700,color:`#e6edf3`,letterSpacing:`-0.02em`,marginBottom:12,marginTop:0},children:`Everything you need to build production agents`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,maxWidth:560,margin:`0 auto`,lineHeight:1.7},children:`From simple single-LLM nodes to complex multi-agent orchestration — Flowgentra has you covered.`})]}),(0,j.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(290px, 1fr))`,gap:18},children:ir.map(e=>(0,j.jsxs)(`div`,{style:{background:`#161b22`,border:`1px solid #21262d`,borderRadius:10,padding:`28px`,transition:`border-color 0.2s, transform 0.15s`},onMouseEnter:e=>{e.currentTarget.style.borderColor=`var(--accent)`,e.currentTarget.style.transform=`translateY(-2px)`},onMouseLeave:e=>{e.currentTarget.style.borderColor=`#21262d`,e.currentTarget.style.transform=`none`},children:[(0,j.jsx)(`div`,{style:{fontSize:`1.875rem`,marginBottom:14},children:e.icon}),(0,j.jsx)(`h3`,{style:{fontSize:`1rem`,fontWeight:600,color:`#e6edf3`,marginBottom:8,marginTop:0},children:e.title}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,lineHeight:1.7,margin:0,fontSize:`0.9rem`},children:e.description})]},e.title))})]}),(0,j.jsx)(`section`,{style:{background:`#161b22`,borderTop:`1px solid #21262d`,borderBottom:`1px solid #21262d`},children:(0,j.jsxs)(`div`,{style:{maxWidth:1160,margin:`0 auto`,padding:`72px 24px`},children:[(0,j.jsxs)(`div`,{style:{textAlign:`center`,marginBottom:48},children:[(0,j.jsx)(`h2`,{style:{fontSize:`clamp(1.5rem, 3vw, 2rem)`,fontWeight:700,color:`#e6edf3`,marginBottom:12,marginTop:0},children:`How Flowgentra works`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,maxWidth:520,margin:`0 auto`,lineHeight:1.7},children:`Three primitives. Infinite flexibility.`})]}),(0,j.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:0,alignItems:`stretch`,justifyContent:`center`},children:[{num:`01`,title:`Define State`,body:`Declare a typed struct (Rust) or TypedDict (Python). State is the single source of truth that every node reads and writes.`,code:n?`#[derive(State, Default)]
struct MyState {
    messages: Vec<String>,
    step: u32,
}`:`class MyState(TypedDict):
    messages: list[str]
    step: int`},{num:`02`,title:`Write Nodes`,body:`Each node is a pure function: receive state, do work (call LLM, run tools, transform data), return updated state.`,code:n?`#[node]
async fn process(
    state: &mut MyState
) -> Result<()> {
    state.step += 1;
    Ok(())
}`:`def process(state: MyState) -> MyState:
    return {**state, "step": state["step"] + 1}`},{num:`03`,title:`Connect & Run`,body:`Wire nodes with edges, add conditional routing, and compile. Invoke with initial state — get final state back.`,code:n?`let graph = StateGraph::<MyState>::builder()
    .add_node("process", process)
    .set_entry("process")
    .build()?;
let result = graph.invoke(state).await?;`:`builder.add_node("process", process)
builder.set_entry_point("process")
builder.add_edge("process", END)
graph = builder.compile()
result = graph.invoke(state)`}].map((e,t,n)=>(0,j.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`},children:[(0,j.jsxs)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:10,padding:`28px 28px`,flex:1,maxWidth:320},children:[(0,j.jsxs)(`div`,{style:{fontSize:`0.7rem`,fontWeight:700,color:`var(--accent)`,letterSpacing:`0.12em`,textTransform:`uppercase`,marginBottom:10},children:[`Step `,e.num]}),(0,j.jsx)(`h3`,{style:{fontSize:`1.0625rem`,fontWeight:600,color:`#e6edf3`,marginBottom:8,marginTop:0},children:e.title}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,fontSize:`0.875rem`,lineHeight:1.65,marginBottom:16},children:e.body}),(0,j.jsx)(`pre`,{style:{background:`#161b22`,border:`1px solid #30363d`,borderRadius:6,padding:`12px 14px`,fontSize:`0.75rem`,lineHeight:1.6,color:`#e6edf3`,margin:0,overflowX:`auto`,whiteSpace:`pre`},children:e.code})]}),t<n.length-1&&(0,j.jsx)(`div`,{style:{color:`#484f58`,fontSize:`1.5rem`,padding:`0 16px`,flexShrink:0},children:`→`})]},e.num))})]})}),(0,j.jsxs)(`section`,{style:{maxWidth:1160,margin:`0 auto`,padding:`80px 24px`},children:[(0,j.jsxs)(`div`,{style:{textAlign:`center`,marginBottom:48},children:[(0,j.jsx)(`h2`,{style:{fontSize:`clamp(1.5rem, 3vw, 2rem)`,fontWeight:700,color:`#e6edf3`,marginBottom:12,marginTop:0},children:`How does Flowgentra compare?`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,maxWidth:520,margin:`0 auto`,lineHeight:1.7},children:`Inspired by LangGraph, built for higher performance and multi-language teams.`})]}),(0,j.jsx)(`div`,{style:{overflowX:`auto`},children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,fontSize:`0.9rem`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsx)(`tr`,{children:[`Feature`,`Flowgentra`,`LangGraph`,`LangChain`].map((e,t)=>(0,j.jsx)(`th`,{style:{textAlign:t===0?`left`:`center`,padding:`12px 16px`,borderBottom:`1px solid #21262d`,color:t===1?`var(--accent)`:`#8b949e`,fontWeight:600,fontSize:`0.875rem`,background:t===1?`var(--accent-dim)`:`transparent`},children:e},e))})}),(0,j.jsx)(`tbody`,{children:ar.map((e,t)=>(0,j.jsxs)(`tr`,{style:{background:t%2==0?`transparent`:`#0a0f14`},children:[(0,j.jsx)(`td`,{style:{padding:`11px 16px`,color:`#e6edf3`,fontWeight:500,whiteSpace:`nowrap`},children:e.feature}),(0,j.jsx)(`td`,{style:{padding:`11px 16px`,color:`#e6edf3`,textAlign:`center`,background:`rgba(206,66,43,0.04)`},children:e.flowgentra}),(0,j.jsx)(`td`,{style:{padding:`11px 16px`,color:`#8b949e`,textAlign:`center`},children:e.langgraph}),(0,j.jsx)(`td`,{style:{padding:`11px 16px`,color:`#8b949e`,textAlign:`center`},children:e.langchain})]},e.feature))})]})})]}),(0,j.jsx)(`section`,{style:{background:`#161b22`,borderTop:`1px solid #21262d`,borderBottom:`1px solid #21262d`},children:(0,j.jsxs)(`div`,{style:{maxWidth:760,margin:`0 auto`,padding:`72px 24px`,textAlign:`center`},children:[(0,j.jsx)(`h2`,{style:{fontSize:`clamp(1.5rem, 3vw, 2.125rem)`,fontWeight:700,color:`#e6edf3`,marginBottom:12,marginTop:0},children:`Ready to build your first agent?`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:36,lineHeight:1.7,fontSize:`1.0625rem`,maxWidth:520,margin:`0 auto 36px`},children:`Follow the quickstart for your language and ship a working agent in under 10 minutes.`}),(0,j.jsxs)(`div`,{style:{display:`flex`,gap:14,justifyContent:`center`,flexWrap:`wrap`},children:[(0,j.jsx)(A,{to:`/docs/quickstart-rust`,style:{background:`#CE422B`,color:`#fff`,padding:`12px 28px`,borderRadius:7,textDecoration:`none`,fontWeight:700,fontSize:`0.9375rem`,display:`inline-flex`,alignItems:`center`,gap:8,transition:`opacity 0.15s`},onMouseEnter:e=>e.currentTarget.style.opacity=`0.85`,onMouseLeave:e=>e.currentTarget.style.opacity=`1`,children:`🦀 Quick Start — Rust`}),(0,j.jsx)(A,{to:`/docs/quickstart-python`,style:{background:`#3572A5`,color:`#fff`,padding:`12px 28px`,borderRadius:7,textDecoration:`none`,fontWeight:700,fontSize:`0.9375rem`,display:`inline-flex`,alignItems:`center`,gap:8,transition:`opacity 0.15s`},onMouseEnter:e=>e.currentTarget.style.opacity=`0.85`,onMouseLeave:e=>e.currentTarget.style.opacity=`1`,children:`🐍 Quick Start — Python`})]})]})}),(0,j.jsxs)(`footer`,{style:{maxWidth:1160,margin:`0 auto`,padding:`32px 24px`,display:`flex`,flexWrap:`wrap`,gap:16,alignItems:`center`,justifyContent:`space-between`,borderTop:`1px solid #21262d`},children:[(0,j.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:10},children:[(0,j.jsx)(`div`,{style:{width:24,height:24,borderRadius:5,background:`var(--accent)`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`0.75rem`,fontWeight:700,color:`#fff`},children:`F`}),(0,j.jsx)(`span`,{style:{color:`#484f58`,fontSize:`0.875rem`},children:`© 2025 Flowgentra`})]}),(0,j.jsx)(`div`,{style:{display:`flex`,gap:24},children:[[`GitHub`,`https://github.com/oussamabenhariz`],[`crates.io`,`https://crates.io`],[`PyPI`,`https://pypi.org`]].map(([e,t])=>(0,j.jsx)(`a`,{href:t,target:`_blank`,rel:`noopener noreferrer`,style:{color:`#8b949e`,textDecoration:`none`,fontSize:`0.875rem`,transition:`color 0.15s`},onMouseEnter:e=>e.target.style.color=`var(--accent)`,onMouseLeave:e=>e.target.style.color=`#8b949e`,children:e},e))})]})]}):(0,j.jsx)(or,{onChoose:e=>{t(e),localStorage.setItem(`fg-lang-chosen`,`true`),i(!0)}})}var cr=[{to:`/docs/getting-started`,label:`Introduction`,group:`Get Started`},{to:`/docs/quickstart-rust`,label:`Quick Start — Rust`,group:`Get Started`},{to:`/docs/quickstart-python`,label:`Quick Start — Python`,group:`Get Started`},{to:`/docs/installation`,label:`Installation`,group:`Get Started`},{to:`/docs/what-is-flowgentra`,label:`What is Flowgentra?`,group:`Core Concepts`},{to:`/docs/concepts/state`,label:`State`,group:`Core Concepts`},{to:`/docs/concepts/graphs`,label:`Graphs & Workflows`,group:`Core Concepts`},{to:`/docs/concepts/nodes`,label:`Nodes`,group:`Core Concepts`},{to:`/docs/guides/agents`,label:`Building Agents`,group:`Guides`},{to:`/docs/guides/llm-client`,label:`LLM Integration`,group:`Guides`},{to:`/docs/guides/tools`,label:`Tool Use`,group:`Guides`},{to:`/docs/guides/memory`,label:`Memory & Conversations`,group:`Guides`},{to:`/docs/guides/rag`,label:`RAG`,group:`Guides`},{to:`/docs/guides/document-loaders`,label:`Document Loaders`,group:`Guides`},{to:`/docs/guides/supervisor`,label:`Multi-Agent Systems`,group:`Guides`},{to:`/docs/guides/human-in-loop`,label:`Human-in-the-Loop`,group:`Guides`},{to:`/docs/guides/error-handling`,label:`Error Handling & Retries`,group:`Guides`},{to:`/docs/guides/evaluation`,label:`Evaluation`,group:`Guides`},{to:`/docs/guides/observability`,label:`Observability & Tracing`,group:`Guides`},{to:`/docs/guides/advanced-nodes`,label:`Advanced Nodes`,group:`Guides`},{to:`/docs/guides/reranking`,label:`Reranking`,group:`Guides`},{to:`/docs/guides/configuration`,label:`Configuration`,group:`Guides`},{to:`/docs/api/state-graph`,label:`StateGraph`,group:`API Reference`},{to:`/docs/api/handlers-config`,label:`Handlers & Config`,group:`API Reference`},{to:`/docs/api/agents`,label:`Agents`,group:`API Reference`},{to:`/docs/api/llm`,label:`LLM Clients`,group:`API Reference`},{to:`/docs/api/builtin-nodes`,label:`Built-in Nodes`,group:`API Reference`},{to:`/docs/api/rag`,label:`RAG`,group:`API Reference`},{to:`/docs/api/memory`,label:`Memory`,group:`API Reference`},{to:`/docs/api/supervisor`,label:`Supervisor`,group:`API Reference`},{to:`/docs/api/observability`,label:`Observability`,group:`API Reference`},{to:`/docs/examples`,label:`Examples`,group:`Resources`},{to:`/docs/best-practices`,label:`Best Practices`,group:`Resources`},{to:`/docs/faq`,label:`FAQ`,group:`Resources`},{to:`/docs/changelog`,label:`Changelog`,group:`Resources`}],lr=[`Get Started`,`Core Concepts`,`Guides`,`API Reference`,`Resources`].map(e=>({group:e,links:cr.filter(t=>t.group===e)}));function P({children:e,anchors:t=[]}){let[n,r]=(0,v.useState)(!1),i=lt(),a=cr.findIndex(e=>e.to===i.pathname),o=a>0?cr[a-1]:null,s=a>=0&&a<cr.length-1?cr[a+1]:null,c=({isActive:e})=>({display:`block`,padding:`5px 12px`,borderRadius:4,fontSize:`0.875rem`,color:e?`var(--accent)`:`#8b949e`,background:e?`var(--accent-dim, rgba(206,66,43,0.1))`:`transparent`,textDecoration:`none`,fontWeight:e?500:400,transition:`color 0.15s, background 0.15s`}),l=()=>(0,j.jsxs)(`aside`,{style:{width:230,flexShrink:0,borderRight:`1px solid #21262d`,padding:`28px 0`,display:`flex`,flexDirection:`column`,gap:`24px`},children:[lr.map(e=>(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`div`,{style:{fontSize:`0.7rem`,fontWeight:600,color:`#484f58`,textTransform:`uppercase`,letterSpacing:`0.08em`,padding:`0 12px`,marginBottom:6},children:e.group}),e.links.map(e=>(0,j.jsx)(jn,{to:e.to,style:c,end:!0,children:e.label},e.to))]},e.group)),t.length>0&&(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`div`,{style:{fontSize:`0.7rem`,fontWeight:600,color:`#484f58`,textTransform:`uppercase`,letterSpacing:`0.08em`,padding:`0 12px`,marginBottom:6},children:`On this page`}),t.map(e=>(0,j.jsx)(`a`,{href:`#${e.id}`,style:{display:`block`,padding:`4px 12px`,fontSize:`0.8125rem`,color:`#8b949e`,textDecoration:`none`,transition:`color 0.15s`},onMouseEnter:e=>e.target.style.color=`var(--accent)`,onMouseLeave:e=>e.target.style.color=`#8b949e`,children:e.label},e.id))]})]});return(0,j.jsxs)(`div`,{style:{maxWidth:1320,margin:`0 auto`,padding:`0 24px`,display:`flex`,minHeight:`calc(100vh - 60px)`},children:[(0,j.jsx)(`div`,{className:`doc-sidebar-desktop`,style:{position:`sticky`,top:60,height:`calc(100vh - 60px)`,overflowY:`auto`},children:(0,j.jsx)(l,{})}),n&&(0,j.jsxs)(`div`,{style:{position:`fixed`,inset:0,zIndex:40,display:`flex`},children:[(0,j.jsx)(`div`,{style:{background:`rgba(0,0,0,0.6)`,position:`absolute`,inset:0},onClick:()=>r(!1)}),(0,j.jsxs)(`div`,{style:{position:`relative`,background:`#0d1117`,width:270,height:`100%`,padding:`20px 0`,overflowY:`auto`,borderRight:`1px solid #21262d`,zIndex:1},children:[(0,j.jsx)(`button`,{onClick:()=>r(!1),style:{background:`none`,border:`none`,color:`#8b949e`,cursor:`pointer`,padding:`0 16px`,marginBottom:16},children:`✕ Close`}),(0,j.jsx)(l,{})]})]}),(0,j.jsxs)(`main`,{style:{flex:1,padding:`40px 0 80px 52px`,minWidth:0,maxWidth:820},children:[(0,j.jsx)(`button`,{onClick:()=>r(!0),className:`doc-mobile-toggle`,style:{display:`none`,marginBottom:24,background:`#161b22`,border:`1px solid #30363d`,borderRadius:6,color:`#e6edf3`,cursor:`pointer`,padding:`8px 16px`,fontSize:`0.875rem`},children:`☰ Menu`}),e,(o||s)&&(0,j.jsxs)(`nav`,{style:{display:`flex`,justifyContent:`space-between`,gap:16,marginTop:64,paddingTop:32,borderTop:`1px solid #21262d`},children:[o?(0,j.jsxs)(A,{to:o.to,style:{display:`flex`,flexDirection:`column`,gap:2,background:`#161b22`,border:`1px solid #21262d`,borderRadius:8,padding:`14px 18px`,textDecoration:`none`,flex:1,maxWidth:`48%`,transition:`border-color 0.2s`},onMouseEnter:e=>e.currentTarget.style.borderColor=`var(--accent)`,onMouseLeave:e=>e.currentTarget.style.borderColor=`#21262d`,children:[(0,j.jsx)(`span`,{style:{fontSize:`0.75rem`,color:`#484f58`,textTransform:`uppercase`,letterSpacing:`0.06em`},children:`← Previous`}),(0,j.jsx)(`span`,{style:{fontSize:`0.9375rem`,color:`#e6edf3`,fontWeight:500},children:o.label})]}):(0,j.jsx)(`div`,{}),s?(0,j.jsxs)(A,{to:s.to,style:{display:`flex`,flexDirection:`column`,gap:2,alignItems:`flex-end`,background:`#161b22`,border:`1px solid #21262d`,borderRadius:8,padding:`14px 18px`,textDecoration:`none`,flex:1,maxWidth:`48%`,transition:`border-color 0.2s`},onMouseEnter:e=>e.currentTarget.style.borderColor=`var(--accent)`,onMouseLeave:e=>e.currentTarget.style.borderColor=`#21262d`,children:[(0,j.jsx)(`span`,{style:{fontSize:`0.75rem`,color:`#484f58`,textTransform:`uppercase`,letterSpacing:`0.06em`},children:`Next →`}),(0,j.jsx)(`span`,{style:{fontSize:`0.9375rem`,color:`#e6edf3`,fontWeight:500},children:s.label})]}):(0,j.jsx)(`div`,{})]})]}),(0,j.jsx)(`style`,{children:`
        .doc-sidebar-desktop { display: block; }
        .doc-mobile-toggle   { display: none; }
        @media (max-width: 900px) {
          .doc-sidebar-desktop { display: none !important; }
          .doc-mobile-toggle   { display: flex !important; }
          main { padding-left: 0 !important; }
        }
      `})]})}var ur=[{id:`what`,label:`What is Flowgentra?`},{id:`choose-path`,label:`Choose Your Path`},{id:`three-concepts`,label:`Three Core Concepts`},{id:`explore`,label:`Explore the Docs`}];function dr(){let{language:e,setLanguage:t}=M(),n=e===`rust`;return(0,j.jsxs)(P,{anchors:ur,children:[(0,j.jsx)(`h1`,{style:pr,children:`Introduction`}),(0,j.jsx)(`p`,{style:mr,children:`Flowgentra is a high-performance framework for building stateful, multi-step AI agents as typed graphs. It has a Rust core with Python bindings — you can use either language independently.`}),(0,j.jsxs)(fr,{id:`what`,title:`What is Flowgentra?`,children:[(0,j.jsx)(`p`,{style:hr,children:`Modern AI applications are more than a single LLM call. They involve sequences of steps: fetching data, calling tools, making decisions, looping until a goal is met. Managing this complexity with plain code becomes unmaintainable fast.`}),(0,j.jsxs)(`p`,{style:hr,children:[`Flowgentra gives you a `,(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`graph abstraction`}),` for this. You define your agent as a directed graph of nodes (functions), connect them with edges, and Flowgentra handles execution, state management, checkpointing, and routing.`]}),(0,j.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(240px, 1fr))`,gap:14,marginTop:16},children:[{icon:`⚡`,title:`Rust-powered`,body:`The execution engine is written in Rust. Python bindings run at near-native speed via PyO3 — no GIL bottlenecks on graph execution.`},{icon:`📊`,title:`Inspired by LangGraph`,body:`If you've used LangGraph, Flowgentra will feel familiar. It uses the same graph model with additional performance, multi-language support, and built-in multi-agent strategies.`},{icon:`🏭`,title:`Production-ready`,body:`Built-in checkpointing, retry nodes, timeout nodes, token tracking, cost estimation, and observability tracing.`}].map(e=>(0,j.jsxs)(`div`,{style:{background:`#161b22`,border:`1px solid #21262d`,borderRadius:8,padding:`18px 20px`},children:[(0,j.jsx)(`div`,{style:{fontSize:`1.5rem`,marginBottom:10},children:e.icon}),(0,j.jsx)(`div`,{style:{fontWeight:600,color:`#e6edf3`,marginBottom:6},children:e.title}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,fontSize:`0.875rem`,lineHeight:1.65,margin:0},children:e.body})]},e.title))})]}),(0,j.jsxs)(fr,{id:`choose-path`,title:`Choose Your Path`,children:[(0,j.jsx)(`p`,{style:hr,children:`The documentation is organized with two parallel paths — one for Rust, one for Python. Use the language switcher in the navbar to toggle code examples throughout the site.`}),(0,j.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:16,marginTop:8},children:[(0,j.jsxs)(A,{to:`/docs/quickstart-rust`,style:{flex:`1 1 260px`,display:`flex`,gap:18,alignItems:`flex-start`,background:n?`rgba(206,66,43,0.08)`:`#161b22`,border:`2px solid ${n?`#CE422B`:`#21262d`}`,borderRadius:10,padding:`22px 24px`,textDecoration:`none`,transition:`border-color 0.2s`},onClick:()=>t(`rust`),onMouseEnter:e=>e.currentTarget.style.borderColor=`#CE422B`,onMouseLeave:e=>e.currentTarget.style.borderColor=n?`#CE422B`:`#21262d`,children:[(0,j.jsx)(`span`,{style:{fontSize:`2.5rem`,lineHeight:1,flexShrink:0},children:`🦀`}),(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`div`,{style:{fontWeight:700,color:`#e6edf3`,marginBottom:6,fontSize:`1.0625rem`},children:`Rust Quickstart`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,fontSize:`0.875rem`,lineHeight:1.65,margin:`0 0 12px`},children:`Compile-time state guarantees, zero-cost abstractions, async-first. Best for performance-critical production systems.`}),(0,j.jsx)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:[`Type-safe`,`Async`,`Zero-cost`].map(e=>(0,j.jsx)(`span`,{style:{background:`rgba(206,66,43,0.12)`,border:`1px solid rgba(206,66,43,0.3)`,borderRadius:12,padding:`2px 8px`,fontSize:`0.75rem`,color:`#CE422B`},children:e},e))})]})]}),(0,j.jsxs)(A,{to:`/docs/quickstart-python`,style:{flex:`1 1 260px`,display:`flex`,gap:18,alignItems:`flex-start`,background:n?`#161b22`:`rgba(53,114,165,0.08)`,border:`2px solid ${n?`#21262d`:`#3572A5`}`,borderRadius:10,padding:`22px 24px`,textDecoration:`none`,transition:`border-color 0.2s`},onClick:()=>t(`python`),onMouseEnter:e=>e.currentTarget.style.borderColor=`#3572A5`,onMouseLeave:e=>e.currentTarget.style.borderColor=n?`#21262d`:`#3572A5`,children:[(0,j.jsx)(`span`,{style:{fontSize:`2.5rem`,lineHeight:1,flexShrink:0},children:`🐍`}),(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`div`,{style:{fontWeight:700,color:`#e6edf3`,marginBottom:6,fontSize:`1.0625rem`},children:`Python Quickstart`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,fontSize:`0.875rem`,lineHeight:1.65,margin:`0 0 12px`},children:`Ergonomic API, fast iteration, LangGraph-compatible patterns. Best for prototyping and data science workflows.`}),(0,j.jsx)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:[`Ergonomic`,`Familiar`,`LangGraph-compatible`].map(e=>(0,j.jsx)(`span`,{style:{background:`rgba(53,114,165,0.12)`,border:`1px solid rgba(53,114,165,0.3)`,borderRadius:12,padding:`2px 8px`,fontSize:`0.75rem`,color:`#3572A5`},children:e},e))})]})]})]})]}),(0,j.jsxs)(fr,{id:`three-concepts`,title:`Three Core Concepts`,children:[(0,j.jsx)(`p`,{style:hr,children:`You only need three things to build a Flowgentra agent:`}),(0,j.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[{num:`1`,accent:`#CE422B`,title:`State`,body:`A typed container of key-value data that flows through the entire graph. Every node reads from and writes to state. In Rust: a struct with #[derive(State)]. In Python: a TypedDict or State instance.`,link:`/docs/concepts/state`},{num:`2`,accent:`#3572A5`,title:`Nodes`,body:`Functions that receive state and return updated state. Nodes do the actual work: call LLMs, execute tools, transform data, make decisions. One node = one unit of responsibility.`,link:`/docs/concepts/nodes`},{num:`3`,accent:`#3fb950`,title:`Graph`,body:`The wiring that connects nodes. Edges define execution order. Conditional edges route dynamically based on state. You compile a graph once, then invoke it many times.`,link:`/docs/concepts/graphs`}].map(e=>(0,j.jsxs)(A,{to:e.link,style:{display:`flex`,gap:16,alignItems:`flex-start`,background:`#161b22`,border:`1px solid #21262d`,borderRadius:8,padding:`18px 20px`,textDecoration:`none`,transition:`border-color 0.2s`},onMouseEnter:t=>t.currentTarget.style.borderColor=e.accent,onMouseLeave:e=>e.currentTarget.style.borderColor=`#21262d`,children:[(0,j.jsx)(`div`,{style:{width:32,height:32,borderRadius:`50%`,background:e.accent,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`0.9rem`,fontWeight:700,color:`#fff`,flexShrink:0},children:e.num}),(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`div`,{style:{fontWeight:600,color:`#e6edf3`,marginBottom:4},children:e.title}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,fontSize:`0.875rem`,lineHeight:1.65,margin:0},children:e.body})]})]},e.num))})]}),(0,j.jsx)(fr,{id:`explore`,title:`Explore the Docs`,children:(0,j.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(220px, 1fr))`,gap:12},children:[{to:`/docs/installation`,emoji:`📦`,label:`Installation`,desc:`Cargo, pip, or build from source`},{to:`/docs/guides/agents`,emoji:`🤖`,label:`Building Agents`,desc:`ZeroShotReAct, conversational, config-driven`},{to:`/docs/guides/llm-client`,emoji:`🔌`,label:`LLM Integration`,desc:`7 providers, tool calling, streaming`},{to:`/docs/guides/rag`,emoji:`🔍`,label:`RAG`,desc:`Embeddings, vector stores, retrieval`},{to:`/docs/guides/supervisor`,emoji:`🎯`,label:`Multi-Agent Systems`,desc:`11 orchestration strategies`},{to:`/docs/guides/memory`,emoji:`💾`,label:`Memory`,desc:`Conversation history, checkpointing`},{to:`/docs/api/state-graph`,emoji:`📖`,label:`API Reference`,desc:`Complete API for all modules`},{to:`/docs/examples`,emoji:`💡`,label:`Examples`,desc:`Chatbot, RAG agent, multi-agent`}].map(e=>(0,j.jsxs)(A,{to:e.to,style:gr,onMouseEnter:e=>e.currentTarget.style.borderColor=`var(--accent)`,onMouseLeave:e=>e.currentTarget.style.borderColor=`#21262d`,children:[(0,j.jsx)(`span`,{style:{fontSize:`1.25rem`,marginBottom:6,display:`block`},children:e.emoji}),(0,j.jsx)(`div`,{style:{fontWeight:600,color:`#e6edf3`,marginBottom:4,fontSize:`0.9375rem`},children:e.label}),(0,j.jsx)(`div`,{style:{fontSize:`0.8125rem`,color:`#8b949e`,lineHeight:1.5},children:e.desc})]},e.to))})})]})}function fr({id:e,title:t,children:n}){return(0,j.jsxs)(`section`,{id:e,style:{marginBottom:52},children:[(0,j.jsx)(`h2`,{style:{fontSize:`1.375rem`,fontWeight:600,color:`#e6edf3`,marginBottom:16,marginTop:0},children:t}),n]})}var pr={fontSize:`2rem`,fontWeight:700,color:`#e6edf3`,letterSpacing:`-0.02em`,marginBottom:8,marginTop:0},mr={color:`#8b949e`,marginBottom:40,lineHeight:1.7,fontSize:`1.0625rem`},hr={color:`#8b949e`,lineHeight:1.75,marginBottom:16},gr={background:`#161b22`,border:`1px solid #21262d`,borderRadius:8,padding:`18px 18px`,textDecoration:`none`,display:`block`,transition:`border-color 0.2s`},_r=[{id:`prerequisites`,label:`Prerequisites`},{id:`install`,label:`Installation`},{id:`first-agent`,label:`Your First Agent`},{id:`add-llm`,label:`Add an LLM Node`},{id:`add-tools`,label:`Add Tools`},{id:`next`,label:`Next Steps`}];function vr(){return(0,j.jsxs)(P,{anchors:_r,children:[(0,j.jsx)(`div`,{style:{marginBottom:8},children:(0,j.jsx)(`span`,{style:{background:`rgba(206,66,43,0.12)`,border:`1px solid rgba(206,66,43,0.4)`,borderRadius:20,padding:`3px 12px`,fontSize:`0.8rem`,color:`#CE422B`,fontWeight:600},children:`🦀 Rust`})}),(0,j.jsx)(`h1`,{style:xr,children:`Quick Start — Rust`}),(0,j.jsx)(`p`,{style:Sr,children:`Build a working AI agent in Rust in under 10 minutes. No prior Flowgentra experience needed.`}),(0,j.jsx)(yr,{id:`prerequisites`,title:`Prerequisites`,children:(0,j.jsxs)(`ul`,{style:wr,children:[(0,j.jsxs)(`li`,{children:[`Rust 1.75+ (`,(0,j.jsx)(`code`,{style:Tr,children:`rustup update stable`}),`)`]}),(0,j.jsx)(`li`,{children:`Tokio async runtime (added automatically via Cargo)`}),(0,j.jsxs)(`li`,{children:[`An API key for your LLM provider (e.g., `,(0,j.jsx)(`code`,{style:Tr,children:`OPENAI_API_KEY`}),`)`]})]})}),(0,j.jsxs)(yr,{id:`install`,title:`Installation`,children:[(0,j.jsxs)(`p`,{style:Cr,children:[`Add Flowgentra to your `,(0,j.jsx)(`code`,{style:Tr,children:`Cargo.toml`}),`:`]}),(0,j.jsx)(N,{forceLang:`toml`,rust:`[dependencies]
flowgentra-ai = "0.1.3"
tokio = { version = "1", features = ["full"] }

# Optional feature flags:
# flowgentra-ai = { version = "0.1.3", features = ["openai", "tracing", "memory"] }`}),(0,j.jsx)(br,{type:`info`,title:`Feature flags`,children:(0,j.jsxs)(`p`,{style:{margin:0},children:[`Enable only what you need: `,(0,j.jsx)(`code`,{style:Tr,children:`openai`}),` for OpenAI provider, `,(0,j.jsx)(`code`,{style:Tr,children:`tracing`}),` for structured logs, `,(0,j.jsx)(`code`,{style:Tr,children:`memory`}),` for checkpointing, `,(0,j.jsx)(`code`,{style:Tr,children:`rag`}),` for vector stores.`]})})]}),(0,j.jsxs)(yr,{id:`first-agent`,title:`Your First Agent`,children:[(0,j.jsx)(`p`,{style:Cr,children:`A Flowgentra agent is a directed graph where each node is an async function that reads and writes shared state. Let's build a minimal one:`}),(0,j.jsx)(N,{rust:`use flowgentra_ai::prelude::*;

// 1. Define your state — the data that flows through the graph
#[derive(State, Default, Clone)]
struct GreetState {
    name:     String,
    greeting: String,
}

// 2. Write a node — receives state, returns Result
#[node]
async fn greet(state: &mut GreetState) -> Result<()> {
    state.greeting = format!("Hello, {}! Welcome to Flowgentra.", state.name);
    Ok(())
}

#[tokio::main]
async fn main() -> Result<()> {
    // 3. Build the graph
    let graph = StateGraph::<GreetState>::builder()
        .add_node("greet", greet)
        .set_entry("greet")
        .build()?;

    // 4. Invoke with initial state
    let result = graph.invoke(GreetState {
        name: "Alice".into(),
        ..Default::default()
    }).await?;

    println!("{}", result.greeting);
    // Hello, Alice! Welcome to Flowgentra.
    Ok(())
}`}),(0,j.jsxs)(`p`,{style:{...Cr,marginTop:16},children:[`Run it with `,(0,j.jsx)(`code`,{style:Tr,children:`cargo run`}),`. That's a complete Flowgentra agent.`]})]}),(0,j.jsxs)(yr,{id:`add-llm`,title:`Add an LLM Node`,children:[(0,j.jsxs)(`p`,{style:Cr,children:[`Now let's wire in a real LLM. Flowgentra provides a unified `,(0,j.jsx)(`code`,{style:Tr,children:`LLMClient`}),` that works across all providers.`]}),(0,j.jsx)(N,{rust:`use flowgentra_ai::prelude::*;
use flowgentra_ai::llm::{LLMConfig, LLMClient, Message};

#[derive(State, Default, Clone)]
struct ChatState {
    user_message: String,
    response:     String,
}

#[node]
async fn call_llm(state: &mut ChatState) -> Result<()> {
    let config = LLMConfig::openai("gpt-4o");
    let client = LLMClient::from_config(config)?;

    let messages = vec![
        Message::system("You are a helpful assistant."),
        Message::user(&state.user_message),
    ];

    let reply = client.chat(messages).await?;
    state.response = reply.content;
    Ok(())
}

#[tokio::main]
async fn main() -> Result<()> {
    // Set your API key via environment variable
    std::env::set_var("OPENAI_API_KEY", "sk-...");

    let graph = StateGraph::<ChatState>::builder()
        .add_node("llm", call_llm)
        .set_entry("llm")
        .build()?;

    let result = graph.invoke(ChatState {
        user_message: "What is a directed acyclic graph?".into(),
        ..Default::default()
    }).await?;

    println!("{}", result.response);
    Ok(())
}`}),(0,j.jsxs)(br,{type:`tip`,title:`Switching providers`,children:[`Replace `,(0,j.jsx)(`code`,{style:Tr,children:`LLMConfig::openai("gpt-4o")`}),` with any of:`,(0,j.jsx)(`br`,{}),(0,j.jsx)(`code`,{style:Tr,children:`LLMConfig::anthropic("claude-3-5-haiku-20241022")`}),(0,j.jsx)(`br`,{}),(0,j.jsx)(`code`,{style:Tr,children:`LLMConfig::ollama("llama3.2")`}),(0,j.jsx)(`br`,{}),(0,j.jsx)(`code`,{style:Tr,children:`LLMConfig::groq("llama-3.3-70b-versatile")`})]})]}),(0,j.jsxs)(yr,{id:`add-tools`,title:`Add Tools (Bonus)`,children:[(0,j.jsx)(`p`,{style:Cr,children:`Tools let your LLM call functions. Here's a two-node graph: the LLM reasons about which tool to call, the tool node executes it, and the loop continues until the LLM is done.`}),(0,j.jsx)(N,{rust:`use flowgentra_ai::prelude::*;
use flowgentra_ai::tools::{ToolRegistry, ToolDefinition};

#[derive(State, Default, Clone)]
struct ToolState {
    #[reducer(Append)]
    messages: Vec<Message>,
    done: bool,
}

#[node]
async fn llm_node(state: &mut ToolState) -> Result<()> {
    let client = LLMClient::openai("gpt-4o");

    let calculator = ToolDefinition::new(
        "calculator",
        "Perform arithmetic. Args: expression (string)",
        serde_json::json!({
            "type": "object",
            "properties": { "expression": { "type": "string" } },
            "required": ["expression"]
        }),
    );

    let response = client
        .chat_with_tools(state.messages.clone(), vec![calculator])
        .await?;

    state.messages.push(response.clone());
    state.done = !response.has_tool_calls();
    Ok(())
}

#[node]
async fn tool_node(state: &mut ToolState) -> Result<()> {
    for call in state.messages.last().unwrap().tool_calls() {
        if call.name == "calculator" {
            let expr = call.args["expression"].as_str().unwrap();
            // evaluate expr...
            let result_msg = Message::tool(&format!("Result: 42"), &call.id);
            state.messages.push(result_msg);
        }
    }
    Ok(())
}

fn router(state: &ToolState) -> &'static str {
    if state.done { "__end__" } else { "tools" }
}

#[tokio::main]
async fn main() -> Result<()> {
    let graph = StateGraph::<ToolState>::builder()
        .add_node("llm",   llm_node)
        .add_node("tools", tool_node)
        .add_edge("tools", "llm")
        .conditional_edge("llm", router)
        .set_entry("llm")
        .build()?;

    let result = graph.invoke(ToolState {
        messages: vec![Message::user("What is 123 * 456?")],
        ..Default::default()
    }).await?;

    println!("{}", result.messages.last().unwrap().content);
    Ok(())
}`})]}),(0,j.jsx)(yr,{id:`next`,title:`Next Steps`,children:(0,j.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(200px, 1fr))`,gap:12},children:[{to:`/docs/concepts/state`,label:`📦 State & Reducers`,desc:`Typed state, parallel merges`},{to:`/docs/concepts/graphs`,label:`🗺️ Graphs & Routing`,desc:`Conditional edges, subgraphs`},{to:`/docs/guides/agents`,label:`🤖 Agent Patterns`,desc:`ReAct, ZeroShot, Conversational`},{to:`/docs/guides/memory`,label:`💾 Memory & Checkpoints`,desc:`Resume interrupted workflows`},{to:`/docs/api/state-graph`,label:`📖 API Reference`,desc:`Full StateGraph API`},{to:`/docs/examples`,label:`💡 Examples`,desc:`Real-world patterns`}].map(e=>(0,j.jsxs)(A,{to:e.to,style:Er,onMouseEnter:e=>e.currentTarget.style.borderColor=`var(--accent)`,onMouseLeave:e=>e.currentTarget.style.borderColor=`#21262d`,children:[(0,j.jsx)(`div`,{style:{fontWeight:600,color:`#e6edf3`,marginBottom:4},children:e.label}),(0,j.jsx)(`div`,{style:{fontSize:`0.875rem`,color:`#8b949e`},children:e.desc})]},e.to))})})]})}function yr({id:e,title:t,children:n}){return(0,j.jsxs)(`section`,{id:e,style:{marginBottom:52},children:[(0,j.jsx)(`h2`,{style:{fontSize:`1.375rem`,fontWeight:600,color:`#e6edf3`,marginBottom:16,marginTop:0},children:t}),n]})}function br({type:e,title:t,children:n}){let r={info:{bg:`rgba(53,114,165,0.1)`,border:`rgba(53,114,165,0.4)`,text:`#58a6ff`},tip:{bg:`rgba(63,185,80,0.1)`,border:`rgba(63,185,80,0.4)`,text:`#3fb950`},warn:{bg:`rgba(210,153,34,0.1)`,border:`rgba(210,153,34,0.4)`,text:`#d29922`}},i=r[e]||r.info;return(0,j.jsxs)(`div`,{style:{background:i.bg,border:`1px solid ${i.border}`,borderRadius:8,padding:`14px 18px`,marginTop:16},children:[t&&(0,j.jsx)(`div`,{style:{fontWeight:600,color:i.text,marginBottom:6,fontSize:`0.9rem`},children:t}),(0,j.jsx)(`div`,{style:{color:`#8b949e`,fontSize:`0.875rem`,lineHeight:1.65},children:n})]})}var xr={fontSize:`2rem`,fontWeight:700,color:`#e6edf3`,letterSpacing:`-0.02em`,marginBottom:8,marginTop:8},Sr={color:`#8b949e`,marginBottom:40,lineHeight:1.7,fontSize:`1.0625rem`},Cr={color:`#8b949e`,lineHeight:1.75,marginBottom:16},wr={color:`#8b949e`,lineHeight:2,paddingLeft:20,margin:`0 0 16px`},Tr={background:`#21262d`,border:`1px solid #30363d`,borderRadius:4,padding:`1px 6px`,fontSize:`0.85em`,fontFamily:`JetBrains Mono, monospace`},Er={background:`#161b22`,border:`1px solid #21262d`,borderRadius:8,padding:`16px 18px`,textDecoration:`none`,display:`block`,transition:`border-color 0.2s`},Dr=[{id:`prerequisites`,label:`Prerequisites`},{id:`install`,label:`Installation`},{id:`first-agent`,label:`Your First Agent`},{id:`add-llm`,label:`Add an LLM Node`},{id:`multi-node`,label:`Multi-Node Graph`},{id:`config-driven`,label:`Config-Driven (Production)`},{id:`next`,label:`Next Steps`}];function Or(){return(0,j.jsxs)(P,{anchors:Dr,children:[(0,j.jsx)(`div`,{style:{marginBottom:8},children:(0,j.jsx)(`span`,{style:{background:`rgba(53,114,165,0.12)`,border:`1px solid rgba(53,114,165,0.4)`,borderRadius:20,padding:`3px 12px`,fontSize:`0.8rem`,color:`#3572A5`,fontWeight:600},children:`🐍 Python`})}),(0,j.jsx)(`h1`,{style:jr,children:`Quick Start — Python`}),(0,j.jsx)(`p`,{style:Mr,children:`Build a working AI agent in Python in under 10 minutes. The Python library wraps the high-performance Rust engine via PyO3.`}),(0,j.jsx)(kr,{id:`prerequisites`,title:`Prerequisites`,children:(0,j.jsxs)(`ul`,{style:Pr,children:[(0,j.jsx)(`li`,{children:`Python 3.10+`}),(0,j.jsxs)(`li`,{children:[`An API key for your LLM provider (e.g., `,(0,j.jsx)(`code`,{style:Fr,children:`OPENAI_API_KEY`}),`)`]}),(0,j.jsx)(`li`,{children:`pip or a virtual environment manager`})]})}),(0,j.jsxs)(kr,{id:`install`,title:`Installation`,children:[(0,j.jsx)(`p`,{style:Nr,children:`Install from PyPI:`}),(0,j.jsx)(N,{forceLang:`bash`,rust:`pip install flowgentra-ai

# With optional extras:
pip install "flowgentra-ai[openai]"       # OpenAI provider
pip install "flowgentra-ai[anthropic]"    # Anthropic / Claude
pip install "flowgentra-ai[tracing]"      # Structured logging
pip install "flowgentra-ai[openai,anthropic,tracing]"  # Multiple`}),(0,j.jsxs)(Ar,{type:`info`,title:`Building from source`,children:[`If you need the latest changes or want to customize the Rust engine:`,(0,j.jsx)(`br`,{}),(0,j.jsx)(`code`,{style:Fr,children:`pip install maturin && cd flowgentra-ai-py && maturin develop`})]}),(0,j.jsx)(`p`,{style:{...Nr,marginTop:16},children:`Verify installation:`}),(0,j.jsx)(N,{forceLang:`bash`,rust:`python -c "import flowgentra_ai; print(flowgentra_ai.__version__)"
# 0.1.3`})]}),(0,j.jsxs)(kr,{id:`first-agent`,title:`Your First Agent`,children:[(0,j.jsxs)(`p`,{style:Nr,children:[`A Flowgentra graph has three components: `,(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`State`}),` (shared data), `,(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Nodes`}),` (functions), and `,(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Edges`}),` (connections).`]}),(0,j.jsx)(N,{python:`from flowgentra_ai.graph import StateGraph, END
from typing import TypedDict

# 1. Define state — TypedDict gives you type hints and IDE autocomplete
class GreetState(TypedDict):
    name:     str
    greeting: str

# 2. Write a node — receives state dict, returns updated state dict
def greet(state: GreetState) -> GreetState:
    return {**state, "greeting": f"Hello, {state['name']}! Welcome to Flowgentra."}

# 3. Build and compile the graph
builder = StateGraph(GreetState)
builder.add_node("greet", greet)
builder.set_entry_point("greet")
builder.add_edge("greet", END)
graph = builder.compile()

# 4. Run it
result = graph.invoke({"name": "Alice", "greeting": ""})
print(result["greeting"])
# Hello, Alice! Welcome to Flowgentra.`}),(0,j.jsxs)(Ar,{type:`tip`,title:`Using State instead of TypedDict`,children:[`For a more dynamic approach, use the built-in `,(0,j.jsx)(`code`,{style:Fr,children:`State`}),` class which supports any key-value pairs and provides helper methods:`,(0,j.jsx)(`pre`,{style:Lr,children:`from flowgentra_ai import State
state = State({"name": "Alice"})
state.get("name")        # "Alice"
state["score"] = 42
"score" in state         # True`})]})]}),(0,j.jsxs)(kr,{id:`add-llm`,title:`Add an LLM Node`,children:[(0,j.jsxs)(`p`,{style:Nr,children:[`Connect a real LLM. Flowgentra's `,(0,j.jsx)(`code`,{style:Fr,children:`LLMClient`}),` works with all major providers via a unified API.`]}),(0,j.jsx)(N,{python:`import os
from flowgentra_ai.graph import StateGraph, END
from flowgentra_ai.llm import LLMConfig, LLMClient, Message
from typing import TypedDict

os.environ["OPENAI_API_KEY"] = "sk-..."

class ChatState(TypedDict):
    user_message: str
    response:     str

# Create a reusable LLM client
config = LLMConfig(provider="openai", model="gpt-4o")
client = LLMClient.from_config(config)

def call_llm(state: ChatState) -> ChatState:
    messages = [
        Message.system("You are a helpful assistant."),
        Message.user(state["user_message"]),
    ]
    reply = client.chat(messages)
    return {**state, "response": reply.content}

builder = StateGraph(ChatState)
builder.add_node("llm", call_llm)
builder.set_entry_point("llm")
builder.add_edge("llm", END)
graph = builder.compile()

result = graph.invoke({
    "user_message": "What is a directed acyclic graph?",
    "response": "",
})
print(result["response"])`}),(0,j.jsx)(`p`,{style:{...Nr,marginTop:12},children:`To use a different provider, change one line:`}),(0,j.jsx)(N,{python:`# Anthropic Claude
config = LLMConfig(provider="anthropic", model="claude-3-5-haiku-20241022", api_key="...")

# Ollama (local — no API key needed)
config = LLMConfig(provider="ollama", model="llama3.2")

# Groq (fast inference)
config = LLMConfig(provider="groq", model="llama-3.3-70b-versatile", api_key="...")`})]}),(0,j.jsxs)(kr,{id:`multi-node`,title:`Multi-Node Graph with Routing`,children:[(0,j.jsx)(`p`,{style:Nr,children:`Real agents have multiple nodes with branching logic. Here's a graph that classifies a question and routes it differently:`}),(0,j.jsx)(N,{python:`from flowgentra_ai.graph import StateGraph, END
from flowgentra_ai.llm import LLMConfig, LLMClient, Message
from typing import TypedDict

class RouterState(TypedDict):
    question:  str
    category:  str   # "technical" | "general"
    answer:    str

config = LLMConfig(provider="openai", model="gpt-4o-mini")
client = LLMClient.from_config(config)

def classify(state: RouterState) -> RouterState:
    """Classify the question type."""
    reply = client.chat([
        Message.system("Classify the question as 'technical' or 'general'. Reply with one word only."),
        Message.user(state["question"]),
    ])
    return {**state, "category": reply.content.strip().lower()}

def technical_answer(state: RouterState) -> RouterState:
    reply = client.chat([
        Message.system("You are a technical expert. Give a precise, detailed answer."),
        Message.user(state["question"]),
    ])
    return {**state, "answer": reply.content}

def general_answer(state: RouterState) -> RouterState:
    reply = client.chat([
        Message.system("Give a friendly, easy-to-understand answer."),
        Message.user(state["question"]),
    ])
    return {**state, "answer": reply.content}

# Router function — returns the next node name
def route(state: RouterState) -> str:
    return "technical" if state["category"] == "technical" else "general"

builder = StateGraph(RouterState)
builder.add_node("classify",  classify)
builder.add_node("technical", technical_answer)
builder.add_node("general",   general_answer)

builder.set_entry_point("classify")
builder.add_conditional_edge("classify", route)   # branches based on router output
builder.add_edge("technical", END)
builder.add_edge("general",   END)

graph = builder.compile()

result = graph.invoke({"question": "How does TCP flow control work?", "category": "", "answer": ""})
print(f"[{result['category']}] {result['answer'][:80]}...")`})]}),(0,j.jsxs)(kr,{id:`config-driven`,title:`Config-Driven Approach (Production)`,children:[(0,j.jsxs)(`p`,{style:Nr,children:[`For production agents, define the graph topology in YAML and auto-discover handler functions with `,(0,j.jsx)(`code`,{style:Fr,children:`@register_handler`}),`. This lets you swap configurations without touching Python code.`]}),(0,j.jsx)(`p`,{style:{...Nr,marginBottom:8},children:(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`handlers.py`})}),(0,j.jsx)(N,{python:`from flowgentra_ai.agent import register_handler
from flowgentra_ai.llm import LLMConfig, LLMClient, Message

config = LLMConfig(provider="openai", model="gpt-4o-mini")
client = LLMClient.from_config(config)

@register_handler("answer_question")
def answer_question(state):
    reply = client.chat([Message.user(state.get("query", ""))])
    state["response"] = reply.content
    return state`}),(0,j.jsx)(`p`,{style:{...Nr,marginTop:16,marginBottom:8},children:(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`agent.yaml`})}),(0,j.jsx)(N,{forceLang:`yaml`,rust:`name: my-agent
type: graph
python_handler_module: handlers

llm:
  provider: openai
  model: gpt-4o-mini

graph:
  entry: answer_question
  nodes:
    - name: answer_question
      handler: answer_question
  edges:
    - from: answer_question
      to: __end__`}),(0,j.jsx)(`p`,{style:{...Nr,marginTop:16,marginBottom:8},children:(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`main.py`})}),(0,j.jsx)(N,{python:`from flowgentra_ai.agent import Agent

agent = Agent.from_config_path("agent.yaml")
result = agent.run()

# Or with thread ID for checkpointing:
result = agent.run_with_thread("session-001")`})]}),(0,j.jsx)(kr,{id:`next`,title:`Next Steps`,children:(0,j.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(200px, 1fr))`,gap:12},children:[{to:`/docs/concepts/state`,label:`📦 State Management`,desc:`State class, TypedDict, reducers`},{to:`/docs/concepts/graphs`,label:`🗺️ Graphs & Routing`,desc:`Conditional edges, loops`},{to:`/docs/guides/agents`,label:`🤖 Agent Patterns`,desc:`ReAct, conversational, config-driven`},{to:`/docs/guides/llm-client`,label:`🔌 LLM Integration`,desc:`7 providers, tool calling, streaming`},{to:`/docs/guides/memory`,label:`💾 Memory`,desc:`Conversation history, checkpointing`},{to:`/docs/examples`,label:`💡 Examples`,desc:`Chatbot, RAG, multi-agent`}].map(e=>(0,j.jsxs)(A,{to:e.to,style:Ir,onMouseEnter:e=>e.currentTarget.style.borderColor=`var(--accent)`,onMouseLeave:e=>e.currentTarget.style.borderColor=`#21262d`,children:[(0,j.jsx)(`div`,{style:{fontWeight:600,color:`#e6edf3`,marginBottom:4},children:e.label}),(0,j.jsx)(`div`,{style:{fontSize:`0.875rem`,color:`#8b949e`},children:e.desc})]},e.to))})})]})}function kr({id:e,title:t,children:n}){return(0,j.jsxs)(`section`,{id:e,style:{marginBottom:52},children:[(0,j.jsx)(`h2`,{style:{fontSize:`1.375rem`,fontWeight:600,color:`#e6edf3`,marginBottom:16,marginTop:0},children:t}),n]})}function Ar({type:e,title:t,children:n}){let r={info:{bg:`rgba(53,114,165,0.1)`,border:`rgba(53,114,165,0.4)`,text:`#58a6ff`},tip:{bg:`rgba(63,185,80,0.1)`,border:`rgba(63,185,80,0.4)`,text:`#3fb950`}},i=r[e]||r.info;return(0,j.jsxs)(`div`,{style:{background:i.bg,border:`1px solid ${i.border}`,borderRadius:8,padding:`14px 18px`,marginTop:16},children:[t&&(0,j.jsx)(`div`,{style:{fontWeight:600,color:i.text,marginBottom:6,fontSize:`0.9rem`},children:t}),(0,j.jsx)(`div`,{style:{color:`#8b949e`,fontSize:`0.875rem`,lineHeight:1.65},children:n})]})}var jr={fontSize:`2rem`,fontWeight:700,color:`#e6edf3`,letterSpacing:`-0.02em`,marginBottom:8,marginTop:8},Mr={color:`#8b949e`,marginBottom:40,lineHeight:1.7,fontSize:`1.0625rem`},Nr={color:`#8b949e`,lineHeight:1.75,marginBottom:16},Pr={color:`#8b949e`,lineHeight:2,paddingLeft:20,margin:`0 0 16px`},Fr={background:`#21262d`,border:`1px solid #30363d`,borderRadius:4,padding:`1px 6px`,fontSize:`0.85em`,fontFamily:`JetBrains Mono, monospace`},Ir={background:`#161b22`,border:`1px solid #21262d`,borderRadius:8,padding:`16px 18px`,textDecoration:`none`,display:`block`,transition:`border-color 0.2s`},Lr={background:`#161b22`,border:`1px solid #30363d`,borderRadius:6,padding:`10px 14px`,fontSize:`0.8rem`,lineHeight:1.6,color:`#e6edf3`,margin:`10px 0 0`,overflowX:`auto`,whiteSpace:`pre`};function Rr(){let{language:e}=M();return(0,j.jsxs)(P,{children:[(0,j.jsx)(`h1`,{style:{fontSize:`2rem`,fontWeight:700,color:`#e6edf3`,letterSpacing:`-0.02em`,marginBottom:8,marginTop:0},children:`Installation`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:40,lineHeight:1.7},children:`Get Flowgentra added to your project in under a minute.`}),e===`rust`?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(zr,{title:`Cargo (Rust)`,subtitle:`Add to your Cargo.toml:`,children:(0,j.jsx)(N,{forceLang:`toml`,rust:`[dependencies]
flowgentra = "0.4"
tokio = { version = "1", features = ["full"] }`})}),(0,j.jsx)(zr,{title:`Feature Flags`,subtitle:`Enable optional features:`,children:(0,j.jsx)(N,{forceLang:`toml`,rust:`[dependencies]
flowgentra = { version = "0.4", features = [
    "openai",    # OpenAI integration helpers
    "tracing",   # Tracing + spans for each node
    "yaml",      # YAML config loading
    "memory",    # Built-in conversation memory
]}`})}),(0,j.jsx)(zr,{title:`Requirements`,children:(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,lineHeight:2,paddingLeft:20},children:[(0,j.jsxs)(`li`,{children:[`Rust `,(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`1.75+`})]}),(0,j.jsx)(`li`,{children:`Tokio async runtime`}),(0,j.jsx)(`li`,{children:`Cargo 1.75+`})]})}),(0,j.jsx)(zr,{title:`Verify`,children:(0,j.jsx)(N,{forceLang:`bash`,rust:`cargo add flowgentra
cargo build`})})]}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(zr,{title:`pip (Python)`,subtitle:`Install from PyPI:`,children:(0,j.jsx)(N,{forceLang:`bash`,python:`pip install flowgentra-ai`})}),(0,j.jsx)(zr,{title:`With extras`,children:(0,j.jsx)(N,{forceLang:`bash`,python:`# Include all optional integrations
pip install "flowgentra-ai[all]"

# Or individually
pip install "flowgentra-ai[openai]"
pip install "flowgentra-ai[anthropic]"
pip install "flowgentra-ai[tracing]"`})}),(0,j.jsx)(zr,{title:`Requirements`,children:(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,lineHeight:2,paddingLeft:20},children:[(0,j.jsxs)(`li`,{children:[`Python `,(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`3.10+`})]}),(0,j.jsx)(`li`,{children:`Works in both sync and async contexts`})]})}),(0,j.jsx)(zr,{title:`Verify`,children:(0,j.jsx)(N,{forceLang:`bash`,python:`python -c "import flowgentra_ai; print(flowgentra_ai.__version__)"`})}),(0,j.jsx)(zr,{title:`Virtual environment (recommended)`,children:(0,j.jsx)(N,{forceLang:`bash`,python:`python -m venv .venv
source .venv/bin/activate  # Windows: .venv\\Scripts\\activate
pip install flowgentra-ai`})}),(0,j.jsxs)(zr,{title:`Import style`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:12,fontSize:`0.9375rem`},children:`Import from the appropriate submodule — not from the top-level package:`}),(0,j.jsx)(N,{forceLang:`bash`,python:`# Correct — submodule imports
from flowgentra_ai.graph import StateGraph, END
from flowgentra_ai.llm import LLMConfig, LLMClient, Message
from flowgentra_ai.agent import Agent
from flowgentra_ai.memory import ConversationMemory, FileCheckpointer
from flowgentra_ai.tools import ToolRegistry, CalculatorTool
from flowgentra_ai.rag import InMemoryVectorStore, Embeddings
from flowgentra_ai.supervision import Supervisor
from flowgentra_ai.observability import ExecutionTracer`})]})]})]})}function zr({title:e,subtitle:t,children:n}){return(0,j.jsxs)(`div`,{style:{marginBottom:40},children:[(0,j.jsx)(`h2`,{style:{fontSize:`1.25rem`,fontWeight:600,color:`#e6edf3`,marginBottom:t?6:14,marginTop:0},children:e}),t&&(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:12},children:t}),n]})}var Br=[{id:`overview`,label:`Overview`},{id:`mental-model`,label:`Mental Model`},{id:`core-primitives`,label:`Core Primitives`},{id:`engine-features`,label:`Engine Features`},{id:`two-patterns`,label:`Two Patterns`},{id:`languages`,label:`Languages`},{id:`next-steps`,label:`Next Steps`}];function Vr(){let{language:e}=M();return(0,j.jsxs)(P,{anchors:Br,children:[(0,j.jsx)(`h1`,{style:{fontSize:`2rem`,fontWeight:700,color:`#e6edf3`,letterSpacing:`-0.02em`,marginBottom:8,marginTop:0},children:`What is Flowgentra?`}),(0,j.jsxs)(`p`,{style:{color:`#8b949e`,marginBottom:40,lineHeight:1.7},children:[`Flowgentra is a framework for building `,(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`AI agent workflows`}),`. It gives you the building blocks to create anything from a simple LLM-powered function to a complex multi-agent system with memory, tools, evaluation, and observability.`]}),(0,j.jsx)(Hr,{id:`overview`,title:`Overview`,children:(0,j.jsxs)(`p`,{style:{color:`#8b949e`,lineHeight:1.75,margin:0},children:[`The core idea is simple: your agent logic is a `,(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`graph`}),`. Nodes are functions. Edges connect them. State flows through.`]})}),(0,j.jsxs)(Hr,{id:`mental-model`,title:`The Mental Model`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Think of your agent as a flowchart:`}),(0,j.jsx)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20,fontFamily:`monospace`,fontSize:`0.9rem`,color:`#8b949e`,textAlign:`center`},children:`          ┌─────────────┐
Input ───►│  Classify   │
          └──────┬──────┘
                 │
        ┌────────┴────────┐
        │                 │
        ▼                 ▼
┌─────────────┐   ┌─────────────┐
│  Use Tools  │   │  Answer LLM │
└──────┬──────┘   └──────┬──────┘
       │                 │
       └────────┬────────┘
                ▼
           ┌─────────┐
           │  Output │
           └─────────┘`}),(0,j.jsxs)(`p`,{style:{color:`#8b949e`,lineHeight:1.7,margin:0},children:[`Each box is a `,(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`node`}),` — a function that reads state in and returns state out. The arrows are `,(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`edges`}),` — connections that tell the engine what to run next. Some edges are fixed; others are `,(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`conditional`}),` (the router function decides at runtime).`]})]}),(0,j.jsxs)(Hr,{id:`core-primitives`,title:`Core Primitives`,children:[(0,j.jsx)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:16,marginTop:24},children:`State`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`State is the data container that travels through your graph. Every node reads from it and writes to it.`}),(0,j.jsx)(N,{rust:`state.set("user_query", "What is Rust?");
state.get_string("answer");`,python:`state["user_query"] = "What is Rust?"
state["answer"]  # read it later`}),(0,j.jsx)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:16,marginTop:24},children:`Nodes`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`A node is just a function. It receives state, does something (call an LLM, run a query, format text), and returns updated state.`}),(0,j.jsx)(N,{rust:`async fn my_node(mut state: DynState) -> Result<DynState> {
    let input = state.get_string("input").unwrap_or_default();
    let result = process(&input).await?;
    state.set("output", result);
    Ok(state)
}`,python:`def my_node(state):
    # Read from state
    input_data = state["input"]

    # Do work
    result = process(input_data)

    # Write to state
    state["output"] = result

    return state   # always return state`}),(0,j.jsx)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:16,marginTop:24},children:`Graphs`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`A graph wires nodes together and tells the engine the execution order.`}),(0,j.jsx)(N,{rust:`let graph = StateGraph::builder()
    .add_node("fetch",   fetch_fn)
    .add_node("process", process_fn)
    .edge("fetch",   "process")
    .edge("process", "__end__")
    .build();`,python:`builder = StateGraph()
builder.add_node("fetch",   fetch_fn)
builder.add_node("process", process_fn)
builder.add_edge("fetch", "process")
builder.add_edge("process", END)
graph = builder.compile()`})]}),(0,j.jsxs)(Hr,{id:`engine-features`,title:`What the Engine Gives You`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:20},children:`On top of this simple model, Flowgentra's engine adds:`}),(0,j.jsx)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20},children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,color:`#8b949e`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Feature`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`What it does`})]})}),(0,j.jsxs)(`tbody`,{children:[(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Checkpointing`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Persist state to disk between nodes — resume after crashes or for human review`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Retries`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Automatically retry failed nodes with exponential backoff`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Timeouts`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Kill slow nodes after a deadline`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Tracing`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Record every node execution, state change, and timing`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Visualization`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Export your graph as Mermaid or Graphviz diagrams`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`},children:`Parallel execution`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`Run multiple branches simultaneously and merge results`})]})]})]})})]}),(0,j.jsxs)(Hr,{id:`two-patterns`,title:`The Three Patterns`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`There are three ways to use Flowgentra. All use the same engine.`}),(0,j.jsx)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`1. Predefined Agents`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Use built-in agent templates for common patterns. Best for getting started quickly.`}),(0,j.jsx)(N,{python:`from flowgentra_ai.agent import Agent

# Create a conversational agent
agent = Agent.create(
    agent_type="conversational",
    model="claude-opus-4-6",
    memory_steps=10
)

result = agent.run_with_input("Hello!")`}),(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Agent.create() Parameters`}),(0,j.jsx)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20},children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,color:`#8b949e`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Parameter`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Type`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Default`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Description`})]})}),(0,j.jsxs)(`tbody`,{children:[(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`agent_type`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`string`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`required`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Agent behavior: "zero_shot_react", "few_shot_react", or "conversational"`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`model`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`string`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`"gpt-4"`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`LLM model identifier (e.g., "gpt-4", "claude-3-opus-20240229")`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,fontFamily:`monospace`,fontSize:`0.9em`},children:`memory_steps`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`int`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`10`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`Number of conversation turns to remember`})]})]})]})}),(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Agent Types`}),(0,j.jsx)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20},children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,color:`#8b949e`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Type`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Best For`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Characteristics`})]})}),(0,j.jsxs)(`tbody`,{children:[(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`"zero_shot_react"`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`General tool use`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Reasoning + actions without examples`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`"few_shot_react"`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Specialized domains`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Uses example demonstrations`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,fontFamily:`monospace`,fontSize:`0.9em`},children:`"conversational"`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`Chat applications`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`Multi-turn conversations with memory`})]})]})]})}),(0,j.jsx)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`2. Code-first (direct API)`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Build the graph programmatically. Best for complex logic with non-trivial routing.`}),(0,j.jsx)(N,{python:`builder = StateGraph()
builder.add_node("step_a", fn_a)
builder.add_node("step_b", fn_b)
builder.set_entry_point("step_a")
builder.add_conditional_edge("step_a", router)
builder.add_edge("step_b", END)
graph = builder.compile()`}),(0,j.jsx)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`3. Config-driven (YAML + handlers)`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Define the graph in YAML; write handlers in code. Best for production deployments where non-engineers need to adjust the flow.`}),(0,j.jsx)(N,{yaml:`# agent.yaml
name: my-agent
graph:
  entry: fetch
  edges:
    - from: fetch
      to: process
    - from: process
      to: __end__`}),(0,j.jsx)(N,{python:`from flowgentra_ai.agent import Agent
agent = Agent.from_config_path("agent.yaml")
result = agent.run()`})]}),(0,j.jsxs)(Hr,{id:`languages`,title:`How Rust and Python Relate`,children:[(0,j.jsxs)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:[`The Python library is a thin PyO3 wrapper around the Rust engine. When you call `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`graph.invoke()`}),` in Python, you're calling the same Rust execution loop that you'd use directly in Rust.`]}),(0,j.jsx)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20},children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,color:`#8b949e`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Rust`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Python`})]})}),(0,j.jsxs)(`tbody`,{children:[(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:(0,j.jsx)(`code`,{children:`StateGraph::<S>::builder()`})}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:(0,j.jsx)(`code`,{children:`StateGraph()`})})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:(0,j.jsx)(`code`,{children:`DynState`})}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:(0,j.jsx)(`code`,{children:`State`})})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:(0,j.jsx)(`code`,{children:`#[derive(State)]`})}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`TypedDict / dict`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:(0,j.jsx)(`code`,{children:`#[register_handler]`})}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:(0,j.jsx)(`code`,{children:`@register_handler`})})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,fontFamily:`monospace`,fontSize:`0.9em`},children:(0,j.jsx)(`code`,{children:`Agent::from_config_path()`})}),(0,j.jsx)(`td`,{style:{padding:`8px`,fontFamily:`monospace`,fontSize:`0.9em`},children:(0,j.jsx)(`code`,{children:`Agent.from_config_path()`})})]})]})]})}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,lineHeight:1.7,margin:0},children:`The key difference: Rust uses generics for compile-time type safety; Python uses dynamic dispatch for flexibility. Both are full-featured.`})]}),(0,j.jsx)(Hr,{id:`next-steps`,title:`Next Steps`,children:(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,lineHeight:1.7,paddingLeft:20},children:[(0,j.jsxs)(`li`,{children:[(0,j.jsx)(A,{to:`/docs/installation`,style:{color:`#58a6ff`},children:`Installation`}),` — set up Rust or Python`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(A,{to:`/docs/getting-started`,style:{color:`#58a6ff`},children:`Quick Start`}),` — build your first graph in 5 minutes`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(A,{to:`/docs/concepts/state`,style:{color:`#58a6ff`},children:`State Management`}),` — understand how state works`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(A,{to:`/docs/concepts/graphs`,style:{color:`#58a6ff`},children:`Graph Execution`}),` — understand how graphs execute`]})]})})]})}function Hr({id:e,title:t,children:n}){return(0,j.jsxs)(`section`,{id:e,style:{marginBottom:48},children:[(0,j.jsx)(`h2`,{style:{fontSize:`1.5rem`,fontWeight:600,color:`#e6edf3`,marginBottom:16,marginTop:0},children:t}),n]})}var Ur=[{id:`anatomy`,label:`Anatomy of a Graph`},{id:`building`,label:`Building a Graph`},{id:`conditional-routing`,label:`Conditional Routing`},{id:`invoking`,label:`Invoking a Graph`},{id:`special-nodes`,label:`Special Nodes`}];function Wr(){let{language:e}=M();return(0,j.jsxs)(P,{anchors:Ur,children:[(0,j.jsx)(`h1`,{style:{fontSize:`2rem`,fontWeight:700,color:`#e6edf3`,letterSpacing:`-0.02em`,marginBottom:8,marginTop:0},children:`Graph Execution`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:40,lineHeight:1.7},children:`A graph is the core execution unit in Flowgentra. It defines which nodes run, in which order, and under what conditions.`}),(0,j.jsxs)(Gr,{id:`anatomy`,title:`Anatomy of a Graph`,children:[(0,j.jsx)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20,fontFamily:`monospace`,fontSize:`0.9rem`,color:`#8b949e`,textAlign:`center`},children:`          entry point
               │
               ▼
          [Node A]
         /        \\
   (cond)          (cond)
       │                │
       ▼                ▼
  [Node B]          [Node C]
       │                │
       └────────┬───────┘
                ▼
             __end__`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,lineHeight:1.7,margin:0},children:`Every graph has:`}),(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,lineHeight:1.7,paddingLeft:20,marginTop:12},children:[(0,j.jsxs)(`li`,{children:[`An `,(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`entry point`}),` — the first node to run`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Nodes`}),` — functions that transform state`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Edges`}),` — connections between nodes (fixed or conditional)`]}),(0,j.jsxs)(`li`,{children:[`A `,(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`terminal`}),` — `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`END`}),` / `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`"__end__"`}),` signals the graph to stop`]})]})]}),(0,j.jsx)(Gr,{id:`building`,title:`Building a Graph`,children:(0,j.jsx)(N,{rust:`use flowgentra_ai::{StateGraph, DynState};

let graph = StateGraph::builder()
    .add_node("fetch",   fetch_fn)
    .add_node("process", process_fn)
    .add_node("respond", respond_fn)
    .entry("fetch")
    .edge("fetch",   "process")
    .edge("process", "respond")
    .edge("respond", "__end__")
    .build();`,python:`from flowgentra_ai.graph import StateGraph, END
from flowgentra_ai import State

builder = StateGraph()

# Add nodes
builder.add_node("fetch",   fetch_fn)
builder.add_node("process", process_fn)
builder.add_node("respond", respond_fn)

# Set entry point
builder.set_entry_point("fetch")

# Fixed edges
builder.add_edge("fetch", "process")
builder.add_edge("process", "respond")
builder.add_edge("respond", END)

# Compile — after this the graph is immutable
graph = builder.compile()

# Run
result = graph.invoke(State({"input": "hello"}))`})}),(0,j.jsxs)(Gr,{id:`conditional-routing`,title:`Conditional Routing`,children:[(0,j.jsxs)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:[`When you need different nodes to run based on state, use a `,(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`conditional edge`}),`. Your router function receives the current state and returns the name of the next node.`]}),(0,j.jsx)(N,{rust:`.conditional_edge("evaluate", |state: &DynState| {
    let score = state.get_float("confidence").unwrap_or(0.0);
    if score > 0.8 { "accept" }
    else if score > 0.5 { "review" }
    else { "reject" }
})`,python:`def router(state):
    score = state.get("confidence") or 0
    if score > 0.8:
        return "accept"
    elif score > 0.5:
        return "review"
    return "reject"

builder.add_conditional_edge("evaluate", router)
# Each possible return value must be a node name`}),(0,j.jsxs)(`div`,{style:{background:`#0d1117`,border:`1px solid #d29922`,borderRadius:8,padding:`16px`,marginTop:16,marginBottom:16},children:[(0,j.jsx)(`div`,{style:{color:`#d29922`,fontWeight:600,marginBottom:8},children:`⚠️ Tip`}),(0,j.jsxs)(`p`,{style:{color:`#8b949e`,margin:0,lineHeight:1.6},children:[`Your router's return values must be node names (or `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`"__end__"`}),`). If a router returns an unknown name, the engine will panic at compile/build time — not silently at runtime.`]})]})]}),(0,j.jsx)(Gr,{id:`invoking`,title:`Invoking a Graph`,children:(0,j.jsx)(N,{rust:`// Basic
let result = graph.invoke(state).await?;

// With thread ID
let result = graph.invoke_with_thread("thread-1", state).await?;`,python:`# Basic — no persistence
result = graph.invoke(State({"input": "data"}))

# With thread ID — enables checkpointing
result = graph.invoke_with_thread("thread-1", State({"input": "data"}))`})}),(0,j.jsxs)(Gr,{id:`special-nodes`,title:`Special Nodes`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`The builder has convenience methods for common patterns. Use these instead of implementing the logic manually.`}),(0,j.jsx)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Retry Node`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Automatically retries with exponential backoff when the node function fails.`}),(0,j.jsx)(N,{rust:`.add_retry_node("fetch_api", fetch_fn, RetryConfig {
    max_retries: 3,
    backoff_ms: 1000,
    backoff_multiplier: 2.0,
    max_backoff_ms: 30_000,
})`,python:`builder.add_retry_node(
    "fetch_api",
    fetch_fn,
    max_retries=3,         # attempt count (default: 3)
    backoff_ms=1000,       # first wait (default: 1000ms)
    backoff_multiplier=2.0, # doubles each retry (default: 2.0)
    max_backoff_ms=30000,   # cap (default: 30s)
)`}),(0,j.jsx)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Timeout Node`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Kills the function if it takes too long.`}),(0,j.jsx)(N,{rust:`.add_timeout_node("slow_op", slow_fn, TimeoutConfig {
    timeout_ms: 5000,
    on_timeout: OnTimeout::Error,
})`,python:`builder.add_timeout_node(
    "slow_op",
    slow_fn,
    timeout_ms=5000,
    on_timeout="error",   # "error" (default) or "skip"
)
# on_timeout="skip" returns the original state unchanged`})]})]})}function Gr({id:e,title:t,children:n}){return(0,j.jsxs)(`section`,{id:e,style:{marginBottom:48},children:[(0,j.jsx)(`h2`,{style:{fontSize:`1.5rem`,fontWeight:600,color:`#e6edf3`,marginBottom:16,marginTop:0},children:t}),n]})}var Kr=[{id:`node-contract`,label:`The Node Contract`},{id:`node-types`,label:`Node Types`}];function qr(){let{language:e}=M();return(0,j.jsxs)(P,{anchors:Kr,children:[(0,j.jsx)(`h1`,{style:{fontSize:`2rem`,fontWeight:700,color:`#e6edf3`,letterSpacing:`-0.02em`,marginBottom:8,marginTop:0},children:`Nodes`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:40,lineHeight:1.7},children:`A node is the fundamental unit of work in a Flowgentra graph. It's just a function.`}),(0,j.jsxs)(Jr,{id:`node-contract`,title:`The Node Contract`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Every node must:`}),(0,j.jsxs)(`ol`,{style:{color:`#8b949e`,lineHeight:1.7,paddingLeft:20,marginBottom:16},children:[(0,j.jsxs)(`li`,{children:[`Accept a single `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`State`}),` argument (Python) or `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`DynState`}),` / your typed state (Rust)`]}),(0,j.jsxs)(`li`,{children:[`Return a `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`State`}),` (usually the same object, modified)`]})]}),(0,j.jsx)(N,{rust:`async fn my_node(mut state: DynState) -> Result<DynState> {
    let input = state.get_string("input").unwrap_or_default();
    let result = process(&input).await?;
    state.set("output", result);
    Ok(state)
}`,python:`def my_node(state):
    # Read from state
    input_data = state["input"]

    # Do work
    result = process(input_data)

    # Write to state
    state["output"] = result

    return state   # always return state`})]}),(0,j.jsxs)(Jr,{id:`node-types`,title:`Node Types`,children:[(0,j.jsx)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Regular Nodes`}),(0,j.jsxs)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:[`The default. A plain function added with `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`add_node`}),`.`]}),(0,j.jsx)(N,{python:`builder.add_node("process", process_fn)`}),(0,j.jsx)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Retry Nodes`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Automatically retries with exponential backoff when the function raises an exception.`}),(0,j.jsx)(N,{python:`builder.add_retry_node("fetch", fetch_fn, max_retries=3, backoff_ms=1000)`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Use this for: API calls, database queries, network requests — anything that can fail transiently.`}),(0,j.jsx)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Timeout Nodes`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Terminates the function if it exceeds a time limit.`}),(0,j.jsx)(N,{python:`builder.add_timeout_node("slow_op", slow_fn, timeout_ms=5000, on_timeout="skip")`}),(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,lineHeight:1.7,paddingLeft:20,marginBottom:16},children:[(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`on_timeout="error"`}),` — raises an exception (default)`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`on_timeout="skip"`}),` — returns the original state unchanged`]})]}),(0,j.jsx)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`LLM Nodes`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`A pre-wired node that reads a prompt from state, calls an LLM, and writes the response.`}),(0,j.jsx)(N,{python:`builder.add_llm_node(
    "generate",
    client,
    prompt_key="user_query",
    output_key="llm_response",
    system_prompt="You are a helpful assistant.",
)`}),(0,j.jsx)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Planner Nodes`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Uses an LLM to decide the next node dynamically at runtime.`}),(0,j.jsx)(N,{python:`builder.add_planner_node("planner", client)`}),(0,j.jsxs)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:[`The planner reads `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`state["_reachable_nodes"]`}),` (a list of node names) and writes `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`state["_next_node"]`}),` (the chosen next node).`]}),(0,j.jsx)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Evaluation Nodes`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Wraps a node in an iterative refinement loop — runs the node, evaluates the output, and re-runs until quality meets a threshold.`})]})]})}function Jr({id:e,title:t,children:n}){return(0,j.jsxs)(`section`,{id:e,style:{marginBottom:48},children:[(0,j.jsx)(`h2`,{style:{fontSize:`1.5rem`,fontWeight:600,color:`#e6edf3`,marginBottom:16,marginTop:0},children:t}),n]})}var Yr=[{id:`what-is-state`,label:`What is State?`},{id:`typed-state`,label:`Typed State`},{id:`reducers`,label:`Reducers (Parallel Merges)`},{id:`state-types`,label:`State Types`},{id:`patterns`,label:`Design Patterns`},{id:`serialization`,label:`Serialization`}];function Xr(){let{language:e}=M(),t=e===`rust`;return(0,j.jsxs)(P,{anchors:Yr,children:[(0,j.jsx)(`h1`,{style:ei,children:`State`}),(0,j.jsx)(`p`,{style:ti,children:`State is the single source of truth that flows through your entire graph. Every node reads from state and writes to state. Getting state design right is the most important decision in a Flowgentra agent.`}),(0,j.jsxs)(Zr,{id:`what-is-state`,title:`What is State?`,children:[(0,j.jsx)(`p`,{style:ni,children:`Think of state as a shared whiteboard. When the graph starts, it's initialized with your input data. Each node reads from the board, does its work, and writes its output back. When the graph finishes, you read the final answers from the board.`}),(0,j.jsxs)(`p`,{style:ni,children:[`Unlike function arguments, state `,(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`accumulates`}),` across nodes. A node can read a key written by any previous node in the execution path.`]}),(0,j.jsx)(`div`,{style:{background:`#161b22`,border:`1px solid #21262d`,borderRadius:8,padding:`16px 20px`,marginTop:4},children:(0,j.jsx)(`pre`,{style:{margin:0,color:`#8b949e`,fontSize:`0.85rem`,lineHeight:2,fontFamily:`JetBrains Mono, monospace`},children:`initial state: { query: "..." }
        ↓
  [classify node]  → writes: { category: "technical" }
        ↓
  [answer node]    → writes: { response: "..." }
        ↓
  [format node]    → writes: { formatted: "..." }
        ↓
final state: { query: "...", category: "technical", response: "...", formatted: "..." }`})})]}),(0,j.jsxs)(Zr,{id:`typed-state`,title:`Typed State`,children:[(0,j.jsxs)(`p`,{style:ni,children:[`The recommended approach is to use `,(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`typed state`}),`. In Rust, this means a struct with `,(0,j.jsx)(`code`,{style:ri,children:`#[derive(State)]`}),`. In Python, this means a `,(0,j.jsx)(`code`,{style:ri,children:`TypedDict`}),`. Typed state gives you IDE autocomplete and catches typos at compile time (Rust) or during development (Python).`]}),(0,j.jsx)(N,{rust:`use flowgentra_ai::prelude::*;
use serde::{Serialize, Deserialize};

// Derive State + standard derives
#[derive(State, Default, Clone, Debug, Serialize, Deserialize)]
struct AgentState {
    // Input fields (set before invocation)
    query:      String,
    user_id:    String,

    // Output fields (written by nodes)
    category:   String,
    response:   String,
    formatted:  String,

    // Control fields (used for routing)
    done:       bool,
    error:      Option<String>,
}

// Nodes receive a mutable reference — just modify in place
#[node]
async fn classify(state: &mut AgentState) -> Result<()> {
    state.category = classify_query(&state.query).await?;
    Ok(())
}

// Build graph with the typed state
let graph = StateGraph::<AgentState>::builder()
    .add_node("classify", classify)
    .set_entry("classify")
    .build()?;`,python:`from flowgentra_ai.graph import StateGraph, END
from typing import TypedDict

# TypedDict gives you type hints and IDE autocomplete
class AgentState(TypedDict):
    # Input fields
    query:     str
    user_id:   str

    # Output fields
    category:  str
    response:  str
    formatted: str

    # Control fields
    done:      bool
    error:     str | None  # Python 3.10+

# Nodes receive state dict, return updated dict (immutable pattern)
def classify(state: AgentState) -> AgentState:
    return {**state, "category": classify_query(state["query"])}

# Build graph with typed state
builder = StateGraph(AgentState)
builder.add_node("classify", classify)
builder.set_entry_point("classify")
builder.add_edge("classify", END)
graph = builder.compile()`}),(0,j.jsxs)($r,{type:`tip`,title:`Use .get() for optional fields (Python)`,children:[`When a key might not be set yet (e.g., before a node has run), use`,(0,j.jsx)(`code`,{style:ri,children:`state.get("key")`}),` instead of `,(0,j.jsx)(`code`,{style:ri,children:`state["key"]`}),` to avoid KeyError.`]})]}),(0,j.jsxs)(Zr,{id:`reducers`,title:`Reducers — Parallel Branch Merges`,children:[(0,j.jsxs)(`p`,{style:ni,children:[`When two branches of a parallel graph both write to the same state key, Flowgentra needs to know `,(0,j.jsx)(`em`,{children:`how`}),` to merge them. This is what `,(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`reducers`}),` do.`]}),(0,j.jsx)(`p`,{style:ni,children:`Without a reducer, the last write wins (default overwrite behavior). With a reducer, you can accumulate, sum, merge maps, and more.`}),(0,j.jsx)(N,{rust:`use flowgentra_ai::prelude::*;

#[derive(State, Default, Clone)]
struct ResearchState {
    // Append: new items are added to the vec (don't replace it)
    #[reducer(Append)]
    messages: Vec<String>,

    // Sum: adds numeric values from parallel branches
    #[reducer(Sum)]
    total_tokens: u64,

    // MergeMap: merges HashMap entries (new keys win on conflict)
    #[reducer(MergeMap)]
    metadata: std::collections::HashMap<String, String>,

    // Min / Max: keeps the extreme value
    #[reducer(Min)]
    best_score: f32,

    // Default (no annotation): last write wins
    final_answer: String,
}

// If branch A writes messages: ["Hello"]
// and branch B writes messages: ["World"]
// After merge: messages = ["Hello", "World"]  ✓ (Append)
// Without reducer: messages = ["World"]        ✗ (last write wins)`,python:`from flowgentra_ai.graph import StateGraph
from typing import TypedDict, Annotated, List
import operator

class ResearchState(TypedDict):
    # Annotated[list, operator.add] → append reducer
    messages: Annotated[List[str], operator.add]

    # Plain field → last write wins (default)
    final_answer: str
    category: str

# In Python, add_reducer() lets you register custom reducers:
def deep_merge_reducer(a: dict, b: dict) -> dict:
    """Merge two dicts, recursively."""
    result = {**a}
    for k, v in b.items():
        if k in result and isinstance(result[k], dict) and isinstance(v, dict):
            result[k] = deep_merge_reducer(result[k], v)
        else:
            result[k] = v
    return result`}),(0,j.jsxs)(`div`,{style:{background:`#161b22`,border:`1px solid #21262d`,borderRadius:8,padding:`18px 20px`,marginTop:16},children:[(0,j.jsx)(`div`,{style:{fontWeight:600,color:`#e6edf3`,marginBottom:12,fontSize:`0.9rem`},children:`Available Reducers (Rust)`}),(0,j.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(200px, 1fr))`,gap:10},children:[[`Append`,`Appends new items to a Vec`],[`Sum`,`Adds numeric values together`],[`MergeMap`,`Merges HashMap (new keys win)`],[`Min`,`Keeps the minimum value`],[`Max`,`Keeps the maximum value`],[`AppendUnique`,`Appends, deduplicates`]].map(([e,t])=>(0,j.jsxs)(`div`,{style:{background:`#0d1117`,borderRadius:6,padding:`10px 12px`},children:[(0,j.jsxs)(`code`,{style:{...ri,display:`block`,marginBottom:4,fontWeight:600,color:`var(--accent)`},children:[`#[reducer(`,e,`)]`]}),(0,j.jsx)(`span`,{style:{color:`#8b949e`,fontSize:`0.8rem`},children:t})]},e))})]})]}),(0,j.jsxs)(Zr,{id:`state-types`,title:`State Types`,children:[(0,j.jsx)(`p`,{style:ni,children:`Flowgentra provides several state implementations for different use cases:`}),(0,j.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:t?[{name:`DynState`,when:`Quick prototypes, JSON-compatible data`,body:`Dynamic key-value store. Values are JSON-compatible (String, i64, f64, bool, arrays, objects). No compile-time schema.`,code:`let mut state = DynState::new();
state.set("key", "value");
state.get_string("key"); // Option<&str>`},{name:`#[derive(State)] struct`,when:`Production — recommended`,body:`Typed, compiled struct. Fields are accessed directly. Supports reducers. Zero runtime overhead vs plain Rust structs.`,code:`#[derive(State, Default)]
struct MyState { name: String }`},{name:`SharedState`,when:`Concurrent node execution`,body:`Thread-safe Arc-wrapped state. Required when nodes run in parallel threads. Ensures safe concurrent reads/writes.`,code:`let shared = SharedState::new(MyState::default());
let guard = shared.write().await;
guard.name = "Alice".into();`},{name:`ScopedState`,when:`Namespace isolation`,body:`Namespaced view into a larger state. Each node can work on its own slice without polluting the global namespace.`,code:`let scoped = state.scope("classifier");
scoped.set("confidence", 0.95f64);`}].map(e=>(0,j.jsxs)(`div`,{style:{background:`#161b22`,border:`1px solid #21262d`,borderRadius:8,padding:`18px 20px`},children:[(0,j.jsxs)(`div`,{style:{display:`flex`,alignItems:`baseline`,gap:12,marginBottom:6},children:[(0,j.jsx)(`code`,{style:{fontFamily:`JetBrains Mono, monospace`,fontWeight:700,color:`var(--accent)`},children:e.name}),(0,j.jsxs)(`span`,{style:{background:`#21262d`,borderRadius:10,padding:`2px 8px`,fontSize:`0.75rem`,color:`#8b949e`},children:[`Use when: `,e.when]})]}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,fontSize:`0.875rem`,lineHeight:1.65,marginBottom:12},children:e.body}),(0,j.jsx)(`pre`,{style:{background:`#0d1117`,border:`1px solid #30363d`,borderRadius:6,padding:`10px 12px`,fontSize:`0.8rem`,lineHeight:1.6,color:`#e6edf3`,margin:0,overflowX:`auto`,fontFamily:`JetBrains Mono, monospace`},children:e.code})]},e.name)):[{name:`TypedDict`,when:`Recommended for most cases`,body:`A plain Python dict with type annotations. Nodes return a new dict (immutable pattern). Compatible with type checkers like mypy and pyright.`,code:`class MyState(TypedDict):
    name: str
    score: int

# Node returns a new dict
def node(state: MyState) -> MyState:
    return {**state, "score": state["score"] + 1}`},{name:`State`,when:`Dynamic / flexible schemas`,body:`Flowgentra's built-in mutable state class. Supports any key-value data including nested dicts, lists, and objects. Good for prototyping.`,code:`from flowgentra_ai import State

state = State({"name": "Alice"})
state["score"] = 42
state.get("missing")  # None, no KeyError`},{name:`PlainState`,when:`Simple scripts without thread safety`,body:`Non-thread-safe state with typed getters. Slightly faster than State for single-threaded use.`,code:`from flowgentra_ai import PlainState

state = PlainState({"count": 0})
state.get_int("count")   # int | None
state.get_float("ratio") # float | None
state.get_bool("flag")   # bool | None`}].map(e=>(0,j.jsxs)(`div`,{style:{background:`#161b22`,border:`1px solid #21262d`,borderRadius:8,padding:`18px 20px`},children:[(0,j.jsxs)(`div`,{style:{display:`flex`,alignItems:`baseline`,gap:12,marginBottom:6},children:[(0,j.jsx)(`code`,{style:{fontFamily:`JetBrains Mono, monospace`,fontWeight:700,color:`var(--accent)`},children:e.name}),(0,j.jsxs)(`span`,{style:{background:`#21262d`,borderRadius:10,padding:`2px 8px`,fontSize:`0.75rem`,color:`#8b949e`},children:[`Use when: `,e.when]})]}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,fontSize:`0.875rem`,lineHeight:1.65,marginBottom:12},children:e.body}),(0,j.jsx)(`pre`,{style:{background:`#0d1117`,border:`1px solid #30363d`,borderRadius:6,padding:`10px 12px`,fontSize:`0.8rem`,lineHeight:1.6,color:`#e6edf3`,margin:0,overflowX:`auto`,fontFamily:`JetBrains Mono, monospace`},children:e.code})]},e.name))})]}),(0,j.jsx)(Zr,{id:`patterns`,title:`State Design Patterns`,children:(0,j.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,j.jsx)(Qr,{title:`Flat structure`,badge:`Best practice`,body:`Keep state flat — avoid deeply nested objects. Flat state is easier to read in router functions and easier to debug when things go wrong.`,children:(0,j.jsx)(N,{rust:`// ✓ Good — flat and readable
#[derive(State, Default)]
struct GoodState {
    query:    String,
    answer:   String,
    category: String,
    tokens:   u64,
}

// ✗ Avoid — hard to work with in routers
#[derive(State, Default)]
struct BadState {
    data: serde_json::Value, // too generic
}`,python:`# ✓ Good — flat and readable
class GoodState(TypedDict):
    query:    str
    answer:   str
    category: str
    tokens:   int

# ✗ Avoid — opaque, hard to route on
class BadState(TypedDict):
    data: dict  # what's in here?`})}),(0,j.jsx)(Qr,{title:`Input / output / control separation`,badge:`Tip`,body:`Group fields by role: inputs (set before invoke), outputs (written by nodes), control flags (used for routing). Comment each group.`,children:(0,j.jsx)(N,{rust:`#[derive(State, Default)]
struct PipelineState {
    // ── Inputs ──────────────────────────────
    query:   String,
    user_id: String,

    // ── Outputs ─────────────────────────────
    #[reducer(Append)]
    findings: Vec<String>,
    summary:  String,

    // ── Routing control ──────────────────────
    done:       bool,
    error_msg:  Option<String>,
    retry_count: u8,
}`,python:`class PipelineState(TypedDict):
    # ── Inputs ──────────────────────────────
    query:   str
    user_id: str

    # ── Outputs ─────────────────────────────
    findings: list[str]  # accumulated by multiple nodes
    summary:  str

    # ── Routing control ──────────────────────
    done:        bool
    error_msg:   str | None
    retry_count: int`})}),(0,j.jsx)(Qr,{title:`Store large objects by reference`,badge:`Performance`,body:`Don't put large blobs directly in state (big PDFs, images, embeddings). Store them in a database/file system and keep only an ID in state.`,children:(0,j.jsx)(N,{rust:`// ✗ Avoid — puts megabytes of bytes in state
#[derive(State, Default)]
struct BadState {
    document_bytes: Vec<u8>,  // 50MB PDF
    embeddings: Vec<Vec<f32>>, // 10K x 1536 floats
}

// ✓ Better — keep references
#[derive(State, Default)]
struct GoodState {
    document_id:   String, // lookup in object store
    embeddings_id: String, // lookup in vector DB
}`,python:`# ✗ Avoid — puts megabytes in state
class BadState(TypedDict):
    document_bytes: bytes   # 50MB PDF
    embeddings: list[list[float]]  # huge matrix

# ✓ Better — store IDs, look up on demand
class GoodState(TypedDict):
    document_id:   str   # S3 key, local path, etc.
    embeddings_id: str   # Chroma collection ID`})})]})}),(0,j.jsxs)(Zr,{id:`serialization`,title:`Serialization`,children:[(0,j.jsx)(`p`,{style:ni,children:`State serializes to and from JSON — useful for logging, checkpointing, and debugging.`}),(0,j.jsx)(N,{rust:`// To JSON
let json_str  = state.to_json()?;
let json_val  = serde_json::to_value(&state)?;

// From JSON
let state: MyState = serde_json::from_str(&json_str)?;
let state = DynState::from_json(&json_str)?;

// Clone state (deep copy)
let checkpoint = state.clone();`,python:`# To dict / JSON
d     = state.to_dict()    # {"query": "...", "answer": "..."}
j     = state.to_json()    # '{"query":"...","answer":"..."}'

# From dict / JSON
state = State.from_dict(d)
state = State.from_json(j)

# Deep clone (copy, not reference)
checkpoint = state.deep_clone()

# String getter helper
value = state.get_string("key")  # str | None`})]})]})}function Zr({id:e,title:t,children:n}){return(0,j.jsxs)(`section`,{id:e,style:{marginBottom:52},children:[(0,j.jsx)(`h2`,{style:{fontSize:`1.375rem`,fontWeight:600,color:`#e6edf3`,marginBottom:16,marginTop:0},children:t}),n]})}function Qr({title:e,badge:t,body:n,children:r}){let i={"Best practice":{bg:`rgba(63,185,80,0.1)`,border:`rgba(63,185,80,0.4)`,text:`#3fb950`},Tip:{bg:`rgba(53,114,165,0.1)`,border:`rgba(53,114,165,0.4)`,text:`#58a6ff`},Performance:{bg:`rgba(206,66,43,0.1)`,border:`rgba(206,66,43,0.4)`,text:`#CE422B`}},a=i[t]||i.Tip;return(0,j.jsxs)(`div`,{style:{background:`#161b22`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`},children:[(0,j.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:10,marginBottom:10},children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`,fontSize:`1rem`},children:e}),(0,j.jsx)(`span`,{style:{background:a.bg,border:`1px solid ${a.border}`,color:a.text,fontSize:`0.72rem`,padding:`2px 8px`,borderRadius:10,fontWeight:600},children:t})]}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,lineHeight:1.65,marginBottom:r?14:0,fontSize:`0.9rem`},children:n}),r]})}function $r({type:e,title:t,children:n}){let r={info:{bg:`rgba(53,114,165,0.1)`,border:`rgba(53,114,165,0.4)`,text:`#58a6ff`},tip:{bg:`rgba(63,185,80,0.1)`,border:`rgba(63,185,80,0.4)`,text:`#3fb950`}},i=r[e]||r.info;return(0,j.jsxs)(`div`,{style:{background:i.bg,border:`1px solid ${i.border}`,borderRadius:8,padding:`14px 18px`,marginTop:16},children:[t&&(0,j.jsx)(`div`,{style:{fontWeight:600,color:i.text,marginBottom:6,fontSize:`0.9rem`},children:t}),(0,j.jsx)(`div`,{style:{color:`#8b949e`,fontSize:`0.875rem`,lineHeight:1.65},children:n})]})}var ei={fontSize:`2rem`,fontWeight:700,color:`#e6edf3`,letterSpacing:`-0.02em`,marginBottom:8,marginTop:0},ti={color:`#8b949e`,marginBottom:40,lineHeight:1.7,fontSize:`1.0625rem`},ni={color:`#8b949e`,lineHeight:1.75,marginBottom:16},ri={background:`#21262d`,border:`1px solid #30363d`,borderRadius:4,padding:`1px 6px`,fontSize:`0.85em`,fontFamily:`JetBrains Mono, monospace`},ii=[{id:`five-ways`,label:`The Five Ways to Create an Agent`},{id:`zero-shot-react`,label:`ZeroShotReAct`},{id:`few-shot-react`,label:`FewShotReAct`},{id:`conversational`,label:`Conversational`},{id:`config-driven`,label:`Config-Driven Agents`},{id:`memory-aware`,label:`MemoryAwareAgent`}];function ai(){let{language:e}=M();return(0,j.jsxs)(P,{anchors:ii,children:[(0,j.jsx)(`h1`,{style:{fontSize:`2rem`,fontWeight:700,color:`#e6edf3`,letterSpacing:`-0.02em`,marginBottom:8,marginTop:0},children:`Building Agents`}),(0,j.jsxs)(`p`,{style:{color:`#8b949e`,marginBottom:40,lineHeight:1.7},children:[`An `,(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`agent`}),` is a graph that loops: it reasons, picks an action (usually a tool call or an LLM call), observes the result, and repeats — until it has a final answer.`]}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:40,lineHeight:1.7},children:`Flowgentra gives you prebuilt agents for the most common patterns, so you don't have to build the loop from scratch.`}),(0,j.jsx)(oi,{id:`five-ways`,title:`The Five Ways to Create an Agent`,children:(0,j.jsx)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20},children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,color:`#8b949e`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Method`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Best for`})]})}),(0,j.jsxs)(`tbody`,{children:[(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`AgentBuilder + ZeroShotReAct`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`General-purpose tool-using agent`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`AgentBuilder + FewShotReAct`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Specialized domain with example shots`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`AgentBuilder + Conversational`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Multi-turn chat with memory`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Agent.from_config_path()`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Production, YAML-configured workflows`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`},children:`MemoryAwareAgent`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`Multi-user chatbots with per-user memory`})]})]})]})})}),(0,j.jsxs)(oi,{id:`zero-shot-react`,title:`ZeroShotReAct`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`The classic ReAct (Reason + Act) loop. The agent reasons step by step, decides which tool to call, observes the result, and loops until it has an answer — all without needing example demonstrations.`}),(0,j.jsx)(N,{rust:`use flowgentra_ai::agents::{AgentBuilder, AgentType, ToolSpec};

let search = ToolSpec::new("web_search", "Search the web")
    .param("query", "string", true);

let calc = ToolSpec::new("calculator", "Perform arithmetic")
    .param("expression", "string", true);

let agent = AgentBuilder::new(AgentType::ZeroShotReAct)
    .with_name("research-assistant")
    .with_llm("gpt-4", "sk-...")
    .with_tool(search)
    .with_tool(calc)
    .with_system_prompt("You are a helpful research assistant.")
    .with_temperature(0.2)
    .with_retries(3)
    .build()
    .await?;

let answer = agent.execute("What is the population of France divided by 1000?").await?;
println!("{answer}");`,python:`from flowgentra_ai.agent import AgentBuilder, AgentType, ToolSpec

# Define the tools available to the agent
search = ToolSpec("web_search", "Search the web for up-to-date information")
search.add_parameter("query", "string")
search.set_required("query")

calc = ToolSpec("calculator", "Perform arithmetic calculations")
calc.add_parameter("expression", "string")
calc.set_required("expression")

# Build the agent
agent = (
    AgentBuilder(AgentType.zero_shot_react())
    .with_name("research-assistant")
    .with_llm_config("gpt-4")
    .with_tool(search)
    .with_tool(calc)
    .with_system_prompt("You are a helpful research assistant. Think step by step.")
    .with_temperature(0.2)        # lower = more deterministic reasoning
    .with_max_tokens(2000)
    .with_retries(3)              # retry failed LLM calls
    .build_graph()
)

answer = agent.execute_input("What is the population of France divided by 1000?")
print(answer)`}),(0,j.jsx)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`How ZeroShotReAct Works Internally`}),(0,j.jsx)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20,fontFamily:`monospace`,fontSize:`0.9rem`,color:`#8b949e`,textAlign:`center`},children:`User query
    │
    ▼
[LLM: Reason]   ←──────────────────────────────┐
    │                                           │
    ▼                                           │
Has tool calls?                                 │
    │                                           │
    ├── Yes ──► [Execute tools] ──► [Observe] ──┘
    │
    └── No ───► [Final answer]`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,lineHeight:1.7,margin:0},children:`The agent loops until the LLM decides it has enough information and produces a final answer (no tool calls).`})]}),(0,j.jsxs)(oi,{id:`few-shot-react`,title:`FewShotReAct`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Like ZeroShotReAct, but includes example interactions in the prompt to guide the agent's behavior in specialized domains.`}),(0,j.jsx)(N,{python:`# Add examples to the agent
agent = (
    AgentBuilder(AgentType.few_shot_react())
    .with_name("code-reviewer")
    .with_llm_config("gpt-4")
    .with_tool(git_diff_tool)
    .with_system_prompt("You are an expert code reviewer.")
    .with_examples([
        {
            "input": "Review this Python function",
            "output": "The function looks good. Consider adding type hints for better readability."
        },
        {
            "input": "Check for security issues in this code",
            "output": "Found potential SQL injection vulnerability. Use parameterized queries."
        }
    ])
    .build_graph()
)`})]}),(0,j.jsxs)(oi,{id:`conversational`,title:`Conversational`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`A conversational agent that maintains context across multiple turns. Perfect for chatbots and interactive assistants.`}),(0,j.jsx)(N,{python:`from flowgentra_ai.agent import AgentBuilder, AgentType
from flowgentra_ai.memory import ConversationMemory

memory = ConversationMemory(max_messages=50)

agent = (
    AgentBuilder(AgentType.conversational())
    .with_name("chatbot")
    .with_llm_config("gpt-4")
    .with_memory(memory)
    .with_system_prompt("You are a helpful assistant.")
    .build_graph()
)

# Multi-turn conversation
response1 = agent.execute_input("Hi, I'm Alice!")
response2 = agent.execute_input("What's my name?")  # Remembers "Alice"
response3 = agent.execute_input("Tell me a joke about programming")`})]}),(0,j.jsxs)(oi,{id:`config-driven`,title:`Config-Driven Agents`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Define your agent in YAML for production deployments where non-engineers need to adjust the workflow.`}),(0,j.jsx)(N,{yaml:`# agent.yaml
name: research-assistant
type: zero_shot_react
llm:
  provider: openai
  model: gpt-4
  temperature: 0.2
tools:
  - name: web_search
    description: Search the web
    parameters:
      query: { type: string, required: true }
  - name: calculator
    description: Perform calculations
    parameters:
      expression: { type: string, required: true }`}),(0,j.jsx)(N,{python:`from flowgentra_ai.agent import Agent

agent = Agent.from_config_path("agent.yaml")
result = agent.run({"input": "What is 2 + 2?"})`})]}),(0,j.jsxs)(oi,{id:`memory-aware`,title:`MemoryAwareAgent`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`A pre-built agent for multi-user chatbots with per-user conversation memory.`}),(0,j.jsx)(N,{python:`from flowgentra_ai.agent import MemoryAwareAgent
from flowgentra_ai.memory import ConversationMemory

memory = ConversationMemory(max_messages=50)

agent = MemoryAwareAgent(
    llm_config="gpt-4",
    memory=memory,
    system_prompt="You are a helpful assistant."
)

# Multi-user conversations are automatically isolated
alice_response = agent.chat("alice-123", "Hi, I'm Alice!")
bob_response = agent.chat("bob-456", "Hi, I'm Bob!")

# Each user has their own conversation history
alice_followup = agent.chat("alice-123", "What's my name?")  # Remembers Alice`})]})]})}function oi({id:e,title:t,children:n}){return(0,j.jsxs)(`section`,{id:e,style:{marginBottom:48},children:[(0,j.jsx)(`h2`,{style:{fontSize:`1.5rem`,fontWeight:600,color:`#e6edf3`,marginBottom:16,marginTop:0},children:t}),n]})}var si=[{id:`creating-client`,label:`Creating a Client`},{id:`sending-messages`,label:`Sending Messages`},{id:`tool-calling`,label:`Tool Calling`},{id:`streaming`,label:`Streaming`}];function ci(){let{language:e}=M();return(0,j.jsxs)(P,{anchors:si,children:[(0,j.jsx)(`h1`,{style:{fontSize:`2rem`,fontWeight:700,color:`#e6edf3`,letterSpacing:`-0.02em`,marginBottom:8,marginTop:0},children:`LLM Integration`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:40,lineHeight:1.7},children:`Flowgentra provides a unified LLM client that works with 7 providers. You configure it once and use the same API regardless of whether you're using OpenAI, Anthropic, or a local Ollama model.`}),(0,j.jsxs)(li,{id:`creating-client`,title:`Creating a Client`,children:[(0,j.jsx)(N,{rust:`use flowgentra_ai::llm::{LLMConfig, LLMClient};

// OpenAI
let client = LLMClient::from_config(LLMConfig::openai("gpt-4", "sk-..."));

// Anthropic
let client = LLMClient::from_config(LLMConfig::anthropic("claude-3-opus-20240229", "sk-ant-..."));

// Ollama (local)
let client = LLMClient::from_config(LLMConfig::ollama("llama3"));

// Groq (fast inference)
let client = LLMClient::from_config(LLMConfig::groq("llama3-70b-8192", "gsk_..."));`,python:`from flowgentra_ai.llm import LLMConfig, LLMClient

# OpenAI
client = LLMClient.from_config(
    LLMConfig("openai", "gpt-4", api_key="sk-...")
)

# Anthropic
client = LLMClient.from_config(
    LLMConfig("anthropic", "claude-3-opus-20240229", api_key="sk-ant-...")
)

# Ollama (local — no API key needed)
client = LLMClient.from_config(
    LLMConfig("ollama", "llama3")
)

# Groq (fast inference)
client = LLMClient.from_config(
    LLMConfig("groq", "llama3-70b-8192", api_key="gsk_...")
)`}),(0,j.jsx)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Supported Providers`}),(0,j.jsx)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20},children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,color:`#8b949e`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Provider`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Config Key`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Notes`})]})}),(0,j.jsxs)(`tbody`,{children:[(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`OpenAI`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:(0,j.jsx)(`code`,{children:`"openai"`})}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`GPT-3.5, GPT-4, GPT-4 Turbo`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Anthropic`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:(0,j.jsx)(`code`,{children:`"anthropic"`})}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Claude 3 models`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Ollama`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:(0,j.jsx)(`code`,{children:`"ollama"`})}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Local models, no API key`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Groq`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:(0,j.jsx)(`code`,{children:`"groq"`})}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Fast Llama models`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`},children:`Mistral`}),(0,j.jsx)(`td`,{style:{padding:`8px`,fontFamily:`monospace`,fontSize:`0.9em`},children:(0,j.jsx)(`code`,{children:`"mistral"`})}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`Mistral AI models`})]})]})]})})]}),(0,j.jsx)(li,{id:`sending-messages`,title:`Sending Messages`,children:(0,j.jsx)(N,{rust:`use flowgentra_ai::llm::Message;

let response = client.chat(vec![
    Message::system("You are a helpful assistant."),
    Message::user("What is the capital of France?"),
]).await?;

println!("{}", response.content); // "The capital of France is Paris."
println!("{}", response.role);    // "assistant"`,python:`from flowgentra_ai.llm import Message

response = client.chat([
    Message.system("You are a helpful assistant."),
    Message.user("What is the capital of France?"),
])

print(response.content)   # "The capital of France is Paris."
print(response.role)      # "assistant"`})}),(0,j.jsxs)(li,{id:`tool-calling`,title:`Tool Calling`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Flowgentra supports function calling with all major providers. Define your tools and the LLM will call them automatically.`}),(0,j.jsx)(N,{python:`from flowgentra_ai.llm import ToolDefinition

# Define a tool
calculator = ToolDefinition(
    name="calculator",
    description="Perform arithmetic calculations",
    parameters={
        "type": "object",
        "properties": {
            "expression": {
                "type": "string",
                "description": "Mathematical expression to evaluate"
            }
        },
        "required": ["expression"]
    }
)

# Use with tools
response = client.chat_with_tools(
    messages=[Message.user("What is 2 + 2?")],
    tools=[calculator]
)

if response.has_tool_calls():
    for call in response.tool_calls:
        if call.name == "calculator":
            result = eval(call.arguments["expression"])
            print(f"Result: {result}")  # Result: 4`})]}),(0,j.jsxs)(li,{id:`streaming`,title:`Streaming`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`For real-time responses, use streaming. The client yields chunks as they're generated.`}),(0,j.jsx)(N,{python:`# Streaming responses
for chunk in client.chat_stream([
    Message.user("Write a short story")
]):
    print(chunk.content, end="", flush=True)
print()  # New line at end`})]})]})}function li({id:e,title:t,children:n}){return(0,j.jsxs)(`section`,{id:e,style:{marginBottom:48},children:[(0,j.jsx)(`h2`,{style:{fontSize:`1.5rem`,fontWeight:600,color:`#e6edf3`,marginBottom:16,marginTop:0},children:t}),n]})}var ui=[{id:`checkpointers`,label:`Checkpointers`},{id:`conversation-memory`,label:`Conversation Memory`},{id:`memory-aware-agents`,label:`Memory-Aware Agents`},{id:`threading`,label:`Threading & Sessions`},{id:`persistence`,label:`Persistence`}];function di(){let{language:e}=M();return(0,j.jsxs)(P,{anchors:ui,children:[(0,j.jsx)(`h1`,{style:{fontSize:`2rem`,fontWeight:700,color:`#e6edf3`,letterSpacing:`-0.02em`,marginBottom:8,marginTop:0},children:`Memory Management`}),(0,j.jsxs)(`p`,{style:{color:`#8b949e`,marginBottom:40,lineHeight:1.7},children:[`Memory in Flowgentra refers to both `,(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`conversation history`}),` (what the agent remembers from previous interactions) and `,(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`checkpointing`}),` (persisting graph state to disk for resumability).`]}),(0,j.jsxs)(fi,{id:`checkpointers`,title:`Checkpointers`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Checkpointers save your graph's state to disk after each node execution. This lets you resume interrupted workflows and provides audit trails.`}),(0,j.jsx)(N,{rust:`use flowgentra_ai::checkpointer::FileCheckpointer;

let checkpointer = FileCheckpointer::new("./checkpoints")?;
let graph = StateGraph::builder()
    .add_node("step1", step1_fn)
    .add_node("step2", step2_fn)
    .add_edge("step1", "step2")
    .set_entry("step1")
    .with_checkpointer(checkpointer)
    .build()?;

// Run with checkpointing
let result = graph.invoke(initial_state).await?;`,python:`from flowgentra_ai.checkpointer import FileCheckpointer

checkpointer = FileCheckpointer("./checkpoints")
graph = StateGraph(MyState)
graph.add_node("step1", step1_fn)
graph.add_node("step2", step2_fn)
graph.add_edge("step1", "step2")
graph.set_entry_point("step1")
graph.checkpointer = checkpointer

# Run with checkpointing
result = graph.invoke(initial_state)`}),(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Checkpointer Types`}),(0,j.jsx)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20},children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,color:`#8b949e`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Checkpointer`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Storage`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Use Case`})]})}),(0,j.jsxs)(`tbody`,{children:[(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`FileCheckpointer`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Local JSON files`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Development, single-machine deployments`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`ThreadedCheckpointer`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Per-thread JSON files`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Multi-user applications, chatbots`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,fontFamily:`monospace`,fontSize:`0.9em`},children:`DatabaseCheckpointer`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`PostgreSQL/MySQL`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`Production, distributed systems`})]})]})]})}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Checkpoints are saved as JSON files. You can resume from any checkpoint by loading the saved state and continuing execution.`})]}),(0,j.jsxs)(fi,{id:`conversation-memory`,title:`Conversation Memory`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`For chatbots and multi-turn conversations, you need to maintain context across interactions. Flowgentra provides several memory strategies.`}),(0,j.jsx)(N,{rust:`use flowgentra_ai::memory::ConversationMemory;

let memory = ConversationMemory::new(10); // Keep last 10 messages
let mut state = MyState::default();

// Add user message
memory.add_user_message("Hello, can you help me?")?;

// Add assistant response
memory.add_assistant_message("Of course! What do you need help with?")?;

// Get recent messages for LLM context
let recent = memory.get_recent(5)?;
let context = recent.iter()
    .map(|msg| format!("{}: {}", msg.role, msg.content))
    .collect::<Vec<_>>()
    .join("\\n");`,python:`from flowgentra_ai.memory import ConversationMemory

memory = ConversationMemory(max_messages=10)

# Add messages
memory.add_user_message("Hello, can you help me?")
memory.add_assistant_message("Of course! What do you need help with?")

# Get recent messages for LLM context
recent = memory.get_recent(5)
context = "\\n".join(f"{msg.role}: {msg.content}" for msg in recent)`}),(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`ConversationMemory Methods`}),(0,j.jsx)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20},children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,color:`#8b949e`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Method`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Parameters`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Returns`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Description`})]})}),(0,j.jsxs)(`tbody`,{children:[(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`add_user_message(content)`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`content: str`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`None`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Add a user message to memory`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`add_assistant_message(content)`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`content: str`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`None`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Add an assistant response to memory`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`get_recent(n)`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`n: int`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`List[Message]`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Get last n messages`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`clear()`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`None`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`None`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Clear all messages from memory`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,fontFamily:`monospace`,fontSize:`0.9em`},children:`get_all()`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`None`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`List[Message]`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`Get all messages in memory`})]})]})]})})]}),(0,j.jsxs)(fi,{id:`memory-aware-agents`,title:`Memory-Aware Agents`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Memory-aware agents automatically manage conversation history and can handle multi-turn conversations without manual state management.`}),(0,j.jsx)(N,{rust:`use flowgentra_ai::agent::MemoryAwareAgent;

let agent = MemoryAwareAgent::builder()
    .llm_config(llm_config)
    .memory_steps(20) // Keep 20 recent messages
    .tools(vec![calculator_tool])
    .build()?;

// First interaction
let response1 = agent.run("What's 15 + 27?").await?;
// Agent remembers the calculation

// Follow-up conversation
let response2 = agent.run("Now multiply that by 3").await?;
// Agent recalls the previous result (42) and computes 42 * 3 = 126`,python:`from flowgentra_ai.agent import MemoryAwareAgent

agent = MemoryAwareAgent(
    llm_config=llm_config,
    memory_steps=20,  # Keep 20 recent messages
    tools=[calculator_tool]
)

# First interaction
response1 = agent.run("What's 15 + 27?")
# Agent remembers the calculation

# Follow-up conversation
response2 = agent.run("Now multiply that by 3")
# Agent recalls the previous result (42) and computes 42 * 3 = 126`})]}),(0,j.jsxs)(fi,{id:`threading`,title:`Threading & Sessions`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`For applications with multiple users or conversations, use threads to keep conversations separate.`}),(0,j.jsx)(N,{rust:`use flowgentra_ai::checkpointer::ThreadedCheckpointer;

// Each thread has its own conversation history
let checkpointer = ThreadedCheckpointer::new("./threads")?;

// User A's conversation
let thread_a = checkpointer.create_thread("user_a")?;
let result_a = graph.invoke_with_thread(initial_state, thread_a).await?;

// User B's conversation (completely separate)
let thread_b = checkpointer.create_thread("user_b")?;
let result_b = graph.invoke_with_thread(initial_state, thread_b).await?;`,python:`from flowgentra_ai.checkpointer import ThreadedCheckpointer

# Each thread has its own conversation history
checkpointer = ThreadedCheckpointer("./threads")

# User A's conversation
result_a = graph.invoke(initial_state, thread_id="user_a")

# User B's conversation (completely separate)
result_b = graph.invoke(initial_state, thread_id="user_b")`})]}),(0,j.jsxs)(fi,{id:`persistence`,title:`Persistence & Recovery`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Checkpoints let you recover from crashes and resume long-running workflows. You can also inspect execution history for debugging.`}),(0,j.jsx)(N,{rust:`// List all checkpoints for a thread
let checkpoints = checkpointer.list_checkpoints("user_a")?;

// Resume from a specific checkpoint
let snapshot = checkpointer.load_checkpoint("user_a", checkpoint_id)?;
let resumed_state = snapshot.state;

// Continue execution from where it left off
let final_result = graph.invoke_from_checkpoint(resumed_state, snapshot).await?;`,python:`# List all checkpoints for a thread
checkpoints = checkpointer.list_checkpoints("user_a")

# Resume from a specific checkpoint
snapshot = checkpointer.load_checkpoint("user_a", checkpoint_id)
resumed_state = snapshot.state

# Continue execution from where it left off
final_result = graph.invoke(resumed_state, thread_id="user_a")`})]})]})}function fi({id:e,title:t,children:n}){return(0,j.jsxs)(`section`,{id:e,style:{marginBottom:48},children:[(0,j.jsx)(`h2`,{style:{fontSize:`1.5rem`,fontWeight:600,color:`#e6edf3`,marginBottom:16,marginTop:0},children:t}),n]})}var pi=[{id:`human-in-loop-node`,label:`HumanInTheLoop Node`},{id:`approval-workflows`,label:`Approval Workflows`},{id:`intervention-points`,label:`Intervention Points`},{id:`feedback-loops`,label:`Feedback & Corrections`}];function mi(){let{language:e}=M();return(0,j.jsxs)(P,{anchors:pi,children:[(0,j.jsx)(`h1`,{style:{fontSize:`2rem`,fontWeight:700,color:`#e6edf3`,letterSpacing:`-0.02em`,marginBottom:8,marginTop:0},children:`Human-in-the-Loop Workflows`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:40,lineHeight:1.7},children:`Human-in-the-loop (HITL) workflows let humans intervene in automated processes. Use this for quality control, safety checks, or when automation can't handle edge cases.`}),(0,j.jsxs)(hi,{id:`human-in-loop-node`,title:`HumanInTheLoop Node`,children:[(0,j.jsxs)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:[`The `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`HumanInTheLoop`}),` node pauses execution and waits for human approval before continuing.`]}),(0,j.jsx)(N,{rust:`use flowgentra_ai::nodes::HumanInTheLoop;

#[derive(State)]
struct MyState {
    task: String,
    approved: Option<bool>,
    human_feedback: Option<String>,
}

let human_node = HumanInTheLoop::new(|state: &MyState| {
    format!("Task: {}\\nApprove this action?", state.task)
});

let graph = StateGraph::<MyState>::builder()
    .add_node("process", process_fn)
    .add_node("human_review", human_node)
    .add_node("execute", execute_fn)
    .add_edge("process", "human_review")
    .add_conditional_edge("human_review",
        |state| if state.approved.unwrap_or(false) { "execute" } else { "process" })
    .build()?;`,python:`from flowgentra_ai.nodes import HumanInTheLoop
from typing import TypedDict, Optional

class MyState(TypedDict):
    task: str
    approved: Optional[bool]
    human_feedback: Optional[str]

def review_prompt(state: MyState) -> str:
    return f"Task: {state['task']}\\nApprove this action?"

human_node = HumanInTheLoop(review_prompt)

builder = StateGraph(MyState)
builder.add_node("process", process_fn)
builder.add_node("human_review", human_node)
builder.add_node("execute", execute_fn)
builder.add_edge("process", "human_review")
builder.add_conditional_edge("human_review",
    lambda state: "execute" if state.get("approved") else "process")
graph = builder.compile()`}),(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`HumanInTheLoop Parameters`}),(0,j.jsx)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20},children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,color:`#8b949e`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Parameter`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Type`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Default`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Description`})]})}),(0,j.jsxs)(`tbody`,{children:[(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`prompt_function`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`function`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Required`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Function that generates the review prompt from the current state`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`timeout`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`float`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`None`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Maximum time to wait for human response (seconds)`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`default_action`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`str`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`"reject"`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Action to take if timeout occurs ("approve", "reject", or "escalate")`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,fontFamily:`monospace`,fontSize:`0.9em`},children:`notification_channel`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`str`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`None`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`Channel for sending notifications (email, slack, etc.)`})]})]})]})})]}),(0,j.jsxs)(hi,{id:`approval-workflows`,title:`Approval Workflows`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Common patterns for human approval in automated workflows.`}),(0,j.jsx)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Content Moderation`}),(0,j.jsx)(N,{python:`def moderate_content(state):
    content = state["generated_content"]
    # Check for sensitive topics
    if contains_sensitive_topics(content):
        return {**state, "needs_review": True}
    return {**state, "needs_review": False}

def human_review(state):
    if state["needs_review"]:
        # Pause for human review
        return HumanInTheLoop.review(
            f"Review content: {state['generated_content'][:200]}..."
        )
    return state

# Graph: generate -> moderate -> human_review -> publish`}),(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Content Moderation Functions`}),(0,j.jsx)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20},children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,color:`#8b949e`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Function`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Parameters`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Returns`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Description`})]})}),(0,j.jsxs)(`tbody`,{children:[(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`contains_sensitive_topics(content)`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`content: str`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`bool`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Checks if content contains sensitive or inappropriate topics`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,fontFamily:`monospace`,fontSize:`0.9em`},children:`HumanInTheLoop.review(prompt)`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`prompt: str`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`dict`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`Initiates human review with the given prompt and returns approval decision`})]})]})]})}),(0,j.jsx)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Code Deployment`}),(0,j.jsx)(N,{python:`def deploy_check(state):
    changes = state["code_changes"]
    risk_level = assess_risk(changes)

    if risk_level == "high":
        return {**state, "needs_approval": True}
    elif risk_level == "medium":
        return {**state, "needs_approval": True, "auto_approve": True}
    else:
        return {**state, "needs_approval": False}

# High-risk changes require explicit approval
# Medium-risk can auto-approve after 24h timeout
# Low-risk deploys automatically`}),(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Code Deployment Functions`}),(0,j.jsx)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20},children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,color:`#8b949e`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Function`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Parameters`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Returns`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Description`})]})}),(0,j.jsxs)(`tbody`,{children:[(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`assess_risk(changes)`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`changes: List[str]`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`str`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Assesses risk level of code changes ("low", "medium", "high")`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,fontFamily:`monospace`,fontSize:`0.9em`},children:`deploy_check(state)`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`state: dict`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`dict`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`Evaluates deployment state and sets approval requirements`})]})]})]})})]}),(0,j.jsxs)(hi,{id:`intervention-points`,title:`Intervention Points`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Strategic places to insert human intervention in your workflows.`}),(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,lineHeight:1.7,paddingLeft:20,marginBottom:16},children:[(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Before external actions:`}),` API calls, database writes, file operations`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Quality gates:`}),` After content generation, before publishing`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Error recovery:`}),` When automated retries fail`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Edge cases:`}),` When confidence scores are low`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Cost controls:`}),` Before expensive operations`]})]}),(0,j.jsx)(N,{python:`def confidence_check(state):
    score = state.get("confidence", 0)
    if score < 0.8:
        return {**state, "needs_human": True,
                "reason": f"Low confidence: {score:.2f}"}
    return {**state, "needs_human": False}

def human_intervention(state):
    if state.get("needs_human"):
        reason = state.get("reason", "Manual review required")
        return HumanInTheLoop.review(f"Review needed: {reason}")
    return state`}),(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Intervention Functions`}),(0,j.jsx)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20},children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,color:`#8b949e`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Function`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Parameters`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Returns`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Description`})]})}),(0,j.jsxs)(`tbody`,{children:[(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`confidence_check(state)`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`state: dict`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`dict`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Checks confidence score and flags for human intervention if below threshold`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,fontFamily:`monospace`,fontSize:`0.9em`},children:`human_intervention(state)`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`state: dict`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`dict`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`Handles human intervention workflow based on state flags`})]})]})]})})]}),(0,j.jsxs)(hi,{id:`feedback-loops`,title:`Feedback & Corrections`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Use human feedback to improve future automation.`}),(0,j.jsx)(N,{python:`def collect_feedback(state):
    if state.get("human_feedback"):
        feedback = state["human_feedback"]
        # Store feedback for model training
        save_feedback(feedback, state["original_input"])

        # Update the response based on feedback
        corrected_response = apply_feedback_corrections(
            state["generated_response"], feedback
        )
        return {**state, "final_response": corrected_response}

    return {**state, "final_response": state["generated_response"]}

def apply_feedback_corrections(response, feedback):
    # Use feedback to improve response
    # Could involve another LLM call or rule-based corrections
    return improved_response`}),(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Feedback Functions`}),(0,j.jsx)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20},children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,color:`#8b949e`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Function`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Parameters`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Returns`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Description`})]})}),(0,j.jsxs)(`tbody`,{children:[(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`collect_feedback(state)`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`state: dict`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`dict`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Processes human feedback and applies corrections to improve responses`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`save_feedback(feedback, input)`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`feedback: str, input: str`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`None`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Stores feedback data for future model training and improvement`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,fontFamily:`monospace`,fontSize:`0.9em`},children:`apply_feedback_corrections(response, feedback)`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`response: str, feedback: str`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`str`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`Applies human feedback corrections to improve the response`})]})]})]})}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Human feedback creates a virtuous cycle: each intervention improves the system's ability to handle similar cases automatically in the future.`})]})]})}function hi({id:e,title:t,children:n}){return(0,j.jsxs)(`section`,{id:e,style:{marginBottom:48},children:[(0,j.jsx)(`h2`,{style:{fontSize:`1.5rem`,fontWeight:600,color:`#e6edf3`,marginBottom:16,marginTop:0},children:t}),n]})}var gi=[{id:`rag-overview`,label:`RAG Overview`},{id:`document-loading`,label:`Document Loading`},{id:`text-splitting`,label:`Text Splitting`},{id:`embeddings`,label:`Embeddings & Vector Stores`},{id:`retrieval`,label:`Retrieval`},{id:`generation`,label:`Generation with Context`}];function _i(){let{language:e}=M();return(0,j.jsxs)(P,{anchors:gi,children:[(0,j.jsx)(`h1`,{style:{fontSize:`2rem`,fontWeight:700,color:`#e6edf3`,letterSpacing:`-0.02em`,marginBottom:8,marginTop:0},children:`RAG Implementation`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:40,lineHeight:1.7},children:`Retrieval-Augmented Generation (RAG) combines the power of large language models with your own knowledge base. Flowgentra provides all the components you need to build RAG systems.`}),(0,j.jsxs)(vi,{id:`rag-overview`,title:`RAG Overview`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`RAG (Retrieval-Augmented Generation) is the pattern of fetching relevant documents and injecting them into the LLM's context before answering. This lets you give your agent access to a private knowledge base without fine-tuning.`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Traditional LLMs are trained on public data up to a certain point. They can't access your private documents, recent information after training, or domain-specific knowledge. RAG solves this by retrieving relevant information from your knowledge base and adding it to the LLM's context.`}),(0,j.jsx)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20,fontFamily:`monospace`,fontSize:`0.9rem`,color:`#8b949e`,textAlign:`center`},children:`Documents ──► Split ──► Embed ──► Store
                              │
                              ▼
User Query ──► Embed ──► Search ──► Retrieve ──► Generate Answer`})]}),(0,j.jsxs)(vi,{id:`document-loading`,title:`Document Loading`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Load documents from various sources: files, URLs, databases, or APIs.`}),(0,j.jsx)(N,{rust:`use flowgentra_ai::document_loader::{FileLoader, WebLoader};

let file_loader = FileLoader::new("./documents");
let web_loader = WebLoader::new();

// Load from files
let docs = file_loader.load_directory("./docs")?;

// Load from URLs
let web_docs = web_loader.load_urls(vec![
    "https://example.com/doc1.pdf",
    "https://example.com/doc2.html"
])?;

// Combine all documents
let all_docs = docs.into_iter().chain(web_docs).collect::<Vec<_>>();`,python:`from flowgentra_ai.document_loaders import FileLoader, WebLoader

file_loader = FileLoader("./documents")
web_loader = WebLoader()

# Load from files
docs = file_loader.load_directory("./docs")

# Load from URLs
web_docs = web_loader.load_urls([
    "https://example.com/doc1.pdf",
    "https://example.com/doc2.html"
])

# Combine all documents
all_docs = docs + web_docs`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Flowgentra supports PDF, HTML, Markdown, JSON, CSV, and plain text files out of the box.`})]}),(0,j.jsxs)(vi,{id:`text-splitting`,title:`Text Splitting`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Before embedding, split large documents into smaller chunks. Why?`}),(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,marginBottom:16,paddingLeft:`20px`},children:[(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Context limits`}),`: LLMs have maximum context windows (e.g., 4K-128K tokens)`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Relevance`}),`: Smaller chunks are more likely to be entirely relevant`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Cost`}),`: Smaller chunks = fewer tokens = lower API costs`]})]}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Flowgentra provides multiple splitting strategies:`}),(0,j.jsx)(N,{rust:`use flowgentra_ai::text_splitter::{RecursiveTextSplitter, ChunkConfig};

let splitter = RecursiveTextSplitter::new(ChunkConfig {
    chunk_size: 1000,        // Characters per chunk
    chunk_overlap: 200,      // Overlap between chunks
    separators: vec!["\\n\\n", "\\n", " ", ""].into_iter().map(|s| s.to_string()).collect(),
});

let chunks = splitter.split_documents(all_docs)?;

// Each chunk has text, metadata, and source information
for chunk in &chunks {
    println!("Chunk: {} chars from {}", chunk.text.len(), chunk.source);
}`,python:`from flowgentra_ai.rag import (
    chunk_text,
    chunk_text_by_tokens,
    estimate_tokens,
    RecursiveCharacterTextSplitter,
    MarkdownTextSplitter,
    HTMLTextSplitter,
    TokenTextSplitter,
    CodeTextSplitter,
)

# Simple character-based splitting
chunks = chunk_text("long text...", chunk_size=500, overlap=50)

# Token-based splitting (more accurate for LLM limits)
chunks = chunk_text_by_tokens("long text...", max_tokens=200, overlap_tokens=20)

# Estimate token count (approximate)
count = estimate_tokens("some text")

# Smart splitters that respect content structure
splitter = RecursiveCharacterTextSplitter(chunk_size=500, overlap=50)
chunks = splitter.split("long document text...")  # Tries paragraph → sentence → word boundaries

splitter = MarkdownTextSplitter(chunk_size=500, overlap=50)
chunks = splitter.split(markdown_content)  # Splits on headers/sections

splitter = HTMLTextSplitter(chunk_size=500, overlap=50)
chunks = splitter.split(html_content)  # Strips tags, respects structure

splitter = TokenTextSplitter(max_tokens=200, overlap_tokens=20)
chunks = splitter.split(text)  # Splits by token count

splitter = CodeTextSplitter(chunk_size=500, overlap=50)
chunks = splitter.split(source_code)  # Respects function/class boundaries`}),(0,j.jsxs)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Choosing chunk size:`}),` Too small: Loses context. Too large: May exceed context limits. Good starting point: 500-1000 characters, 50-200 character overlap.`]}),(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Text Splitter Parameters`}),(0,j.jsx)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20},children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,color:`#8b949e`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Parameter`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Type`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Default`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Description`})]})}),(0,j.jsxs)(`tbody`,{children:[(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`chunk_size`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`int`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`1000`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Maximum characters per chunk`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`chunk_overlap`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`int`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`200`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Number of characters to overlap between chunks`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,fontFamily:`monospace`,fontSize:`0.9em`},children:`separators`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`List[str]`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`["\\n\\n", "\\n", " ", ""]`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`Ordered list of separators to try for splitting`})]})]})]})})]}),(0,j.jsxs)(vi,{id:`embeddings`,title:`Embeddings & Vector Stores`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Embeddings convert text into numerical vectors that capture semantic meaning. Similar texts have similar vectors.`}),(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Embedding Providers`}),(0,j.jsx)(N,{rust:`use flowgentra_ai::rag::{OpenAIEmbeddings, CachedEmbeddings, EmbeddingsProvider};

let emb = OpenAIEmbeddings::new("sk-...", "text-embedding-3-small");
let cached = CachedEmbeddings::new(emb);  // Wrap with cache

let vector = cached.embed("Hello world").await?;`,python:`from flowgentra_ai.rag import Embeddings

# OpenAI (recommended for quality) - costs money but very good
emb = Embeddings.openai("sk-...", "text-embedding-3-small")

# With custom dimension (reduce storage for speed)
emb = Embeddings.openai_with_dimension("sk-...", "text-embedding-3-small", 256)

# With caching (avoids re-embedding the same text)
emb = Embeddings.openai_cached("sk-...")

# Ollama (free, runs locally) - requires Ollama installed
emb = Embeddings.ollama("nomic-embed-text")

# Mock (for testing - deterministic, no API calls)
emb = Embeddings.mock(dimension=128)

# Usage
vector = emb.embed("Hello world")          # Single vector
vectors = emb.embed_batch(["Hello", "World"])  # Multiple at once (faster)
dim = emb.get_dimension()                  # Vector size`}),(0,j.jsxs)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Choosing an embedding model:`}),` OpenAI text-embedding-3-small is good for most cases. Use local models for privacy, mock for testing.`]}),(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Vector Store Setup`}),(0,j.jsx)(N,{rust:`use flowgentra_ai::rag::{ChromaStore, Embeddings};

// Create embeddings
let emb = OpenAIEmbeddings::new("sk-...", "text-embedding-3-small");

// Create vector store
let store = ChromaStore::new("./chroma_db", emb);

// Add documents (automatically embeds and indexes)
store.add_documents(chunks).await?;`,python:`from flowgentra_ai.rag import ChromaStore, Embeddings

# Create embeddings
emb = Embeddings.openai("sk-...", "text-embedding-3-small")

# Create vector store
store = ChromaStore("./chroma_db", emb)

# Add documents (automatically embeds and indexes)
store.add_documents(chunks)`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Flowgentra supports Chroma, Qdrant, Weaviate, Pinecone, and other vector databases.`}),(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`ChromaStore Parameters`}),(0,j.jsx)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20},children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,color:`#8b949e`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Parameter`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Type`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Default`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Description`})]})}),(0,j.jsxs)(`tbody`,{children:[(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`persist_directory`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`str`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Required`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Directory path to persist the vector database`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`embedding_function`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Embeddings`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Required`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Embedding function to convert text to vectors`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`collection_name`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`str`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`"default"`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Name of the Chroma collection to use`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,fontFamily:`monospace`,fontSize:`0.9em`},children:`client_settings`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`dict`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`None`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`Additional Chroma client configuration settings`})]})]})]})}),(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`OpenAIEmbeddings Parameters`}),(0,j.jsx)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20},children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,color:`#8b949e`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Parameter`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Type`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Default`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Description`})]})}),(0,j.jsxs)(`tbody`,{children:[(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`model`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`str`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`"text-embedding-3-small"`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`OpenAI embedding model to use`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`api_key`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`str`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Required`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`OpenAI API key for authentication`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`base_url`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`str`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`"https://api.openai.com/v1"`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Base URL for OpenAI API`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,fontFamily:`monospace`,fontSize:`0.9em`},children:`max_retries`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`int`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`3`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`Maximum number of retries for failed requests`})]})]})]})})]}),(0,j.jsxs)(vi,{id:`retrieval`,title:`Retrieval`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Find the most relevant documents for a user's query using semantic search.`}),(0,j.jsx)(N,{rust:`use flowgentra_ai::rag::{Retriever, RetrievalConfig};

let retriever = Retriever::new(
    store,
    RetrievalConfig::semantic(5, 0.7)  // top_k=5, threshold=0.7
).with_dedup(0.85);

let results = retriever.retrieve("What is Rust?").await?;

for result in &results {
    println!("Score: {:.3}, Text: {}...",
             result.score, &result.text[..100]);
}`,python:`from flowgentra_ai.rag import Retriever, RetrievalConfig

# Pure semantic search (vector similarity only)
config = RetrievalConfig.semantic(top_k=5, threshold=0.7)
retriever = Retriever(store, emb, config)

# Hybrid search (semantic + keyword matching)
config = RetrievalConfig.hybrid(keyword_weight=0.3, top_k=10, threshold=0.5)
retriever = Retriever(store, emb, config)

# Enable deduplication (removes near-identical results)
retriever.with_dedup(threshold=0.85)

# Retrieve relevant documents
results = retriever.retrieve("What is Rust?")
for r in results:
    print(f"[{r.score:.2f}] {r.text[:100]}...")`}),(0,j.jsxs)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Retrieval strategies:`}),` Semantic finds conceptually similar content. Hybrid combines semantic with keyword matching (better for exact terms). Threshold filters low-relevance results. Deduplication removes redundant results.`]}),(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Retriever Parameters`}),(0,j.jsx)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20},children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,color:`#8b949e`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Parameter`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Type`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Default`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Description`})]})}),(0,j.jsxs)(`tbody`,{children:[(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`vectorstore`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`VectorStore`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Required`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Vector store instance to search in`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`top_k`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`int`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`5`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Number of top results to return`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`score_threshold`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`float`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`None`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Minimum similarity score threshold (0.0-1.0)`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`rerank`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`bool`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`False`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Whether to use reranking for better results`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,fontFamily:`monospace`,fontSize:`0.9em`},children:`search_kwargs`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`dict`}),(0,j.jsx)(`td`,{style:{padding:`8px`}}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`Additional search parameters for the vector store`})]})]})]})})]}),(0,j.jsxs)(vi,{id:`generation`,title:`Generation with Context`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Use retrieved documents as context for generating accurate, grounded answers.`}),(0,j.jsx)(N,{rust:`use flowgentra_ai::{StateGraph, DynState};
use flowgentra_ai::llm::{LLMConfig, LLMClient, Message};

#[tokio::main]
async fn main() -> Result<()> {
    let client = LLMClient::from_config(LLMConfig::openai("gpt-4", "sk-..."));
    let retriever = /* ... setup retriever ... */;

    let graph = StateGraph::builder()
        .add_node("retrieve", {
            let retriever = retriever.clone();
            move |mut state: DynState| {
                let retriever = retriever.clone();
                async move {
                    let query = state.get_string("question").unwrap_or_default();
                    let results = retriever.retrieve(&query).await?;
                    let context: Vec<String> = results.iter()
                        .map(|r| r.text.clone())
                        .collect();
                    state.set("context", context.join("\\n\\n"));
                    Ok(state)
                }
            }
        })
        .add_node("answer", {
            let client = client.clone();
            move |mut state: DynState| {
                let client = client.clone();
                async move {
                    let question = state.get_string("question").unwrap_or_default();
                    let context = state.get_string("context").unwrap_or_default();

                    let response = client.chat(vec![
                        Message::system(&format!("Answer based on this context:\\n{}", context)),
                        Message::user(&question),
                    ]).await?;

                    state.set("answer", response.content);
                    Ok(state)
                }
            }
        })
        .entry("retrieve")
        .edge("retrieve", "answer")
        .edge("answer", "__end__")
        .build();

    let mut state = DynState::new();
    state.set("question", "What is Rust?");
    let result = graph.invoke(state).await?;
    println!("{}", result.get_string("answer").unwrap_or_default());
    Ok(())
}`,python:`from flowgentra_ai.graph import StateGraph, END
from flowgentra_ai.llm import LLMConfig, LLMClient, Message
from flowgentra_ai import State

# Set up LLM and retriever
client = LLMClient.from_config(LLMConfig("openai", "gpt-4", api_key="sk-..."))
# retriever = ... (from previous steps)

def retrieve_node(state):
    query = state["question"]
    results = retriever.retrieve(query)
    context = "\\n\\n".join(r.text for r in results)
    state["context"] = context
    return state

def answer_node(state):
    response = client.chat([
        Message.system(f"Answer based on this context:\\n{state['context']}"),
        Message.user(state["question"]),
    ])
    state["answer"] = response.content
    return state

# Build RAG graph
builder = StateGraph()
builder.add_node("retrieve", retrieve_node)
builder.add_node("answer", answer_node)
builder.set_entry_point("retrieve")
builder.add_edge("retrieve", "answer")
builder.add_edge("answer", END)
graph = builder.compile()

# Run it
result = graph.invoke(State({"question": "What is Rust?"}))
print(result["answer"])`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`This creates a complete RAG pipeline: retrieve relevant context, then generate an answer grounded in that context.`})]})]})}function vi({id:e,title:t,children:n}){return(0,j.jsxs)(`section`,{id:e,style:{marginBottom:48},children:[(0,j.jsx)(`h2`,{style:{fontSize:`1.5rem`,fontWeight:600,color:`#e6edf3`,marginBottom:16,marginTop:0},children:t}),n]})}var yi=[{id:`tool-basics`,label:`Tool Basics`},{id:`creating-tools`,label:`Creating Tools`},{id:`tool-registry`,label:`Tool Registry`},{id:`tool-nodes`,label:`Tool Nodes`},{id:`tool-calling`,label:`Tool Calling with LLMs`},{id:`builtin-tools`,label:`Built-in Tools`}];function bi(){let{language:e}=M();return(0,j.jsxs)(P,{anchors:yi,children:[(0,j.jsx)(`h1`,{style:{fontSize:`2rem`,fontWeight:700,color:`#e6edf3`,letterSpacing:`-0.02em`,marginBottom:8,marginTop:0},children:`Tool Integration`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:40,lineHeight:1.7},children:`Tools extend your agents with the ability to perform actions: call APIs, run calculations, search databases, or interact with external systems. Flowgentra provides a complete toolkit for building and using tools.`}),(0,j.jsxs)(xi,{id:`tool-basics`,title:`Tool Basics`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`A tool is a function that an agent can call. Tools have names, descriptions, and schemas that tell the LLM how to use them.`}),(0,j.jsx)(N,{rust:`use flowgentra_ai::tools::{Tool, ToolSpec};

struct CalculatorTool;

impl Tool for CalculatorTool {
    fn name(&self) -> &str { "calculator" }

    fn description(&self) -> &str {
        "Calculate mathematical expressions. Use for arithmetic operations."
    }

    fn schema(&self) -> ToolSpec {
        ToolSpec {
            parameters: json!({
                "type": "object",
                "properties": {
                    "expression": {
                        "type": "string",
                        "description": "Mathematical expression to evaluate"
                    }
                },
                "required": ["expression"]
            })
        }
    }

    async fn call(&self, args: serde_json::Value) -> Result<String> {
        let expr = args["expression"].as_str().unwrap();
        let result = eval_expression(expr)?;
        Ok(result.to_string())
    }
}`,python:`from flowgentra_ai.tools import Tool, ToolSpec
from typing import Any, Dict

class CalculatorTool(Tool):
    def name(self) -> str:
        return "calculator"

    def description(self) -> str:
        return "Calculate mathematical expressions. Use for arithmetic operations."

    def schema(self) -> Dict[str, Any]:
        return {
            "type": "object",
            "properties": {
                "expression": {
                    "type": "string",
                    "description": "Mathematical expression to evaluate"
                }
            },
            "required": ["expression"]
        }

    def call(self, args: Dict[str, Any]) -> str:
        expr = args["expression"]
        result = eval(expr)  # In practice, use a safe evaluator
        return str(result)`})]}),(0,j.jsxs)(xi,{id:`creating-tools`,title:`Creating Tools`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Tools can be created from functions, classes, or even external APIs.`}),(0,j.jsx)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Function-based Tools`}),(0,j.jsx)(N,{python:`from flowgentra_ai.tools import tool

@tool
def search_web(query: str) -> str:
    """Search the web for information."""
    # Implementation here
    return f"Search results for: {query}"

@tool
def get_weather(city: str) -> dict:
    """Get current weather for a city."""
    # Call weather API
    return {"temperature": 72, "condition": "sunny"}`}),(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`@tool Decorator Parameters`}),(0,j.jsx)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20},children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,color:`#8b949e`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Parameter`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Type`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Required`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Description`})]})}),(0,j.jsxs)(`tbody`,{children:[(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`name`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`str`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Auto`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Function name (auto-detected)`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`description`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`str`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Auto`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Function docstring (auto-detected)`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,fontFamily:`monospace`,fontSize:`0.9em`},children:`schema`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`dict`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`Auto`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`JSON schema from type hints (auto-generated)`})]})]})]})}),(0,j.jsx)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`API Tools`}),(0,j.jsx)(N,{python:`import requests
from flowgentra_ai.tools import tool

@tool
def github_api(endpoint: str, method: str = "GET", **kwargs) -> dict:
    """Call GitHub API endpoints."""
    base_url = "https://api.github.com"
    response = requests.request(method, f"{base_url}{endpoint}", **kwargs)
    return response.json()

# Usage in agent
agent = Agent.create(
    agent_type="tool_calling",
    tools=[github_api],
    model="gpt-4"
)`})]}),(0,j.jsxs)(xi,{id:`tool-registry`,title:`Tool Registry`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`The tool registry manages all available tools and makes them discoverable by agents.`}),(0,j.jsx)(N,{rust:`use flowgentra_ai::tools::ToolRegistry;

let mut registry = ToolRegistry::new();

// Register tools
registry.register(Box::new(CalculatorTool))?;
registry.register(Box::new(WebSearchTool))?;

// Get all tools for an agent
let tools = registry.get_tools_by_names(&["calculator", "web_search"])?;

// Or get all tools
let all_tools = registry.all_tools()?;`,python:`from flowgentra_ai.tools import ToolRegistry

registry = ToolRegistry()

# Register tools
registry.register(CalculatorTool())
registry.register(WebSearchTool())

# Get tools for an agent
tools = registry.get_tools_by_names(["calculator", "web_search"])

# Or get all tools
all_tools = registry.all_tools()`})]}),(0,j.jsxs)(xi,{id:`tool-nodes`,title:`Tool Nodes`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Tool nodes execute tools within your graph workflow.`}),(0,j.jsx)(N,{rust:`use flowgentra_ai::nodes::ToolNode;

#[derive(State)]
struct AgentState {
    messages: Vec<Message>,
    tool_calls: Vec<ToolCall>,
}

let tool_node = ToolNode::new(registry);

let graph = StateGraph::<AgentState>::builder()
    .add_node("agent", agent_node)
    .add_node("tools", tool_node)
    .add_conditional_edge("agent", |state| {
        if !state.tool_calls.is_empty() {
            "tools"
        } else {
            "__end__"
        }
    })
    .add_edge("tools", "agent")  // Loop back to agent
    .build()?;`,python:`from flowgentra_ai.nodes import ToolNode

class AgentState(TypedDict):
    messages: List[Message]
    tool_calls: List[ToolCall]

tool_node = ToolNode(registry)

builder = StateGraph(AgentState)
builder.add_node("agent", agent_node)
builder.add_node("tools", tool_node)
builder.add_conditional_edge("agent",
    lambda state: "tools" if state.get("tool_calls") else END)
builder.add_edge("tools", "agent")  # Loop back to agent
graph = builder.compile()`})]}),(0,j.jsxs)(xi,{id:`tool-calling`,title:`Tool Calling with LLMs`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Modern LLMs can call tools directly. Flowgentra handles the tool calling protocol.`}),(0,j.jsx)(N,{python:`from flowgentra_ai.llm import LLMClient

llm = LLMClient.from_config({
    "provider": "openai",
    "model": "gpt-4",
    "tools": [calculator_tool, search_tool]
})

# The LLM will automatically call tools when needed
response = llm.complete(
    "What is 15 * 23, and what's the weather in Tokyo?",
    tools=[calculator_tool, search_tool]
)

# Response includes tool calls and final answer
print(response.tool_calls)  # [{"name": "calculator", "args": {"expression": "15*23"}}]
print(response.final_answer)  # "15 * 23 = 345, and Tokyo is sunny with 72°F"`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Tool calling is supported for OpenAI, Anthropic, and other providers that implement the tool calling protocol.`})]}),(0,j.jsxs)(xi,{id:`builtin-tools`,title:`Built-in Tools`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Flowgentra includes many useful tools out of the box.`}),(0,j.jsx)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20},children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,color:`#8b949e`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Tool`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Parameters`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Returns`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Purpose`})]})}),(0,j.jsxs)(`tbody`,{children:[(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`Calculator`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`expression: str`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`str`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Mathematical calculations and arithmetic`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`WebSearch`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`query: str, limit: int = 10`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`List[dict]`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Search the web for up-to-date information`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`FileSystem`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`path: str, operation: str`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`str | dict`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Read and write files, list directories`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`HTTPClient`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`url: str, method: str = "GET"`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`dict`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Make HTTP requests to APIs`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`DateTime`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`operation: str`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`str | dict`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Date and time operations, formatting`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`JSONParser`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`json_string: str`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`dict | list`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Parse and validate JSON strings`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,fontFamily:`monospace`,fontSize:`0.9em`},children:`TextSplitter`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`text: str, chunk_size: int = 1000`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`List[str]`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`Split text into manageable chunks`})]})]})]})}),(0,j.jsx)(N,{python:`from flowgentra_ai.tools import builtin_tools

# Get all built-in tools
tools = builtin_tools()

# Or get specific tools
calculator = builtin_tools()["calculator"]
web_search = builtin_tools()["web_search"]

agent = Agent.create(
    agent_type="tool_calling",
    tools=[calculator, web_search],
    model="gpt-4"
)`})]})]})}function xi({id:e,title:t,children:n}){return(0,j.jsxs)(`section`,{id:e,style:{marginBottom:48},children:[(0,j.jsx)(`h2`,{style:{fontSize:`1.5rem`,fontWeight:600,color:`#e6edf3`,marginBottom:16,marginTop:0},children:t}),n]})}var Si=[{id:`error-types`,label:`Error Types`},{id:`retry-nodes`,label:`Retry Nodes`},{id:`timeout-nodes`,label:`Timeout Nodes`},{id:`fallback-nodes`,label:`Fallback Strategies`},{id:`error-recovery`,label:`Error Recovery Patterns`},{id:`monitoring`,label:`Error Monitoring`}];function Ci(){let{language:e}=M();return(0,j.jsxs)(P,{anchors:Si,children:[(0,j.jsx)(`h1`,{style:{fontSize:`2rem`,fontWeight:700,color:`#e6edf3`,letterSpacing:`-0.02em`,marginBottom:8,marginTop:0},children:`Error Handling & Resilience`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:40,lineHeight:1.7},children:`Production agents must handle failures gracefully. Flowgentra provides comprehensive error handling with retries, timeouts, fallbacks, and recovery strategies.`}),(0,j.jsxs)(wi,{id:`error-types`,title:`Error Types`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Flowgentra categorizes errors to enable appropriate handling strategies.`}),(0,j.jsx)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20},children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,color:`#8b949e`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Error Type`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Examples`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Handling Strategy`})]})}),(0,j.jsxs)(`tbody`,{children:[(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Transient`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Network timeouts, rate limits`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Retry with backoff`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Permanent`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Invalid API keys, bad requests`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Fail fast, don't retry`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Recoverable`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Service temporarily down`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Retry with circuit breaker`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`},children:`Logic Errors`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`Invalid state, assertion failures`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`Fallback to alternative path`})]})]})]})})]}),(0,j.jsxs)(wi,{id:`retry-nodes`,title:`Retry Nodes`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Automatically retry failed operations with exponential backoff.`}),(0,j.jsx)(N,{rust:`use flowgentra_ai::nodes::{RetryNode, RetryConfig};
use std::time::Duration;

let retry_config = RetryConfig {
    max_attempts: 3,
    initial_delay: Duration::from_millis(100),
    max_delay: Duration::from_secs(10),
    backoff_multiplier: 2.0,
    retry_on: |error| {
        // Only retry transient errors
        matches!(error, FlowgentraError::NetworkError(_) |
                        FlowgentraError::TimeoutError(_))
    },
};

let retry_node = RetryNode::new(api_call_node, retry_config);

let graph = StateGraph::<MyState>::builder()
    .add_node("api_call", retry_node)
    .add_edge("api_call", "next_step")
    .build()?;`,python:`from flowgentra_ai.nodes import RetryNode
from flowgentra_ai.errors import NetworkError, TimeoutError
import time

def retry_config():
    return {
        "max_attempts": 3,
        "initial_delay": 0.1,  # seconds
        "max_delay": 10.0,
        "backoff_multiplier": 2.0,
        "retry_on": lambda error: isinstance(error, (NetworkError, TimeoutError))
    }

retry_node = RetryNode(api_call_node, retry_config())

builder = StateGraph(MyState)
builder.add_node("api_call", retry_node)
builder.add_edge("api_call", "next_step")
graph = builder.compile()`}),(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`RetryConfig Parameters`}),(0,j.jsx)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20},children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,color:`#8b949e`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Parameter`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Type`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Default`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Description`})]})}),(0,j.jsxs)(`tbody`,{children:[(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`max_attempts`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`int`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`3`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Maximum number of retry attempts`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`initial_delay`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`float`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`0.1`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Initial delay between retries (seconds)`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`max_delay`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`float`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`10.0`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Maximum delay between retries (seconds)`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`backoff_multiplier`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`float`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`2.0`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Multiplier for exponential backoff`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,fontFamily:`monospace`,fontSize:`0.9em`},children:`retry_on`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`function`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`All errors`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`Function to determine which errors to retry`})]})]})]})})]}),(0,j.jsxs)(wi,{id:`timeout-nodes`,title:`Timeout Nodes`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Prevent slow operations from blocking your workflow indefinitely.`}),(0,j.jsx)(N,{rust:`use flowgentra_ai::nodes::{TimeoutNode, TimeoutConfig};
use std::time::Duration;

let timeout_config = TimeoutConfig {
    timeout: Duration::from_secs(30),
    on_timeout: |state| {
        // Log timeout and set error flag
        eprintln!("Operation timed out");
        state.set("timed_out", true);
        state
    },
};

let timeout_node = TimeoutNode::new(slow_operation_node, timeout_config);

let graph = StateGraph::<MyState>::builder()
    .add_node("operation", timeout_node)
    .add_conditional_edge("operation", |state| {
        if state.get("timed_out").unwrap_or(false) {
            "fallback"
        } else {
            "success"
        }
    })
    .build()?;`,python:`from flowgentra_ai.nodes import TimeoutNode
import asyncio

def timeout_config():
    return {
        "timeout": 30.0,  # seconds
        "on_timeout": lambda state: {
            **state,
            "timed_out": True,
            "error": "Operation timed out after 30 seconds"
        }
    }

timeout_node = TimeoutNode(slow_operation_node, timeout_config())

builder = StateGraph(MyState)
builder.add_node("operation", timeout_node)
builder.add_conditional_edge("operation",
    lambda state: "fallback" if state.get("timed_out") else "success")
graph = builder.compile()`}),(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`TimeoutConfig Parameters`}),(0,j.jsx)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20},children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,color:`#8b949e`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Parameter`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Type`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Default`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Description`})]})}),(0,j.jsxs)(`tbody`,{children:[(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`timeout`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`float`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`30.0`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Maximum time to wait before timing out (seconds)`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,fontFamily:`monospace`,fontSize:`0.9em`},children:`on_timeout`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`function`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`None`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`Function called when timeout occurs, receives state and returns modified state`})]})]})]})})]}),(0,j.jsxs)(wi,{id:`fallback-nodes`,title:`Fallback Strategies`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`When primary operations fail, try alternative approaches.`}),(0,j.jsx)(N,{rust:`use flowgentra_ai::nodes::FallbackNode;

let fallback_node = FallbackNode::new(vec![
    primary_api_call,     // Try this first
    backup_api_call,      // If primary fails, try this
    cached_response,      // If both fail, use cache
]);

let graph = StateGraph::<MyState>::builder()
    .add_node("api_call", fallback_node)
    .add_edge("api_call", "process_result")
    .build()?;`,python:`from flowgentra_ai.nodes import FallbackNode

fallback_node = FallbackNode([
    primary_api_call,     # Try this first
    backup_api_call,      # If primary fails, try this
    cached_response,      # If both fail, use cache
])

builder = StateGraph(MyState)
builder.add_node("api_call", fallback_node)
builder.add_edge("api_call", "process_result")
graph = builder.compile()`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Fallbacks are especially useful for external API calls where you have multiple providers or cached alternatives.`})]}),(0,j.jsxs)(wi,{id:`error-recovery`,title:`Error Recovery Patterns`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Design your graphs to handle errors gracefully and recover when possible.`}),(0,j.jsx)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Circuit Breaker Pattern`}),(0,j.jsx)(N,{python:`class CircuitBreakerNode:
    def __init__(self, node, failure_threshold=5, recovery_timeout=60):
        self.node = node
        self.failure_threshold = failure_threshold
        self.recovery_timeout = recovery_timeout
        self.failures = 0
        self.last_failure_time = None
        self.state = "closed"  # closed, open, half-open

    def __call__(self, state):
        if self.state == "open":
            if time.time() - self.last_failure_time > self.recovery_timeout:
                self.state = "half-open"
            else:
                raise CircuitBreakerError("Circuit is open")

        try:
            result = self.node(state)
            if self.state == "half-open":
                self.state = "closed"
                self.failures = 0
            return result
        except Exception as e:
            self.failures += 1
            self.last_failure_time = time.time()
            if self.failures >= self.failure_threshold:
                self.state = "open"
            raise`}),(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`CircuitBreakerNode Parameters`}),(0,j.jsx)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20},children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,color:`#8b949e`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Parameter`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Type`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Default`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Description`})]})}),(0,j.jsxs)(`tbody`,{children:[(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`node`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Node`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Required`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`The node to wrap with circuit breaker protection`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`failure_threshold`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`int`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`5`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Number of failures before opening the circuit`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,fontFamily:`monospace`,fontSize:`0.9em`},children:`recovery_timeout`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`float`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`60.0`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`Time to wait before attempting recovery (seconds)`})]})]})]})}),(0,j.jsx)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Graceful Degradation`}),(0,j.jsx)(N,{python:`def robust_processing(state):
    try:
        # Try full processing
        return full_quality_processing(state)
    except Exception as e:
        try:
            # Fallback to basic processing
            return basic_processing(state)
        except Exception as e2:
            # Final fallback - return minimal result
            return {
                **state,
                "result": "Unable to process request",
                "error": str(e),
                "degraded": True
            }`})]}),(0,j.jsxs)(wi,{id:`monitoring`,title:`Error Monitoring`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Track errors and performance to improve your system's reliability.`}),(0,j.jsx)(N,{rust:`use flowgentra_ai::observability::{ErrorTracker, MetricsCollector};

let error_tracker = ErrorTracker::new();
let metrics = MetricsCollector::new();

let graph = StateGraph::<MyState>::builder()
    .add_node("operation", operation_node)
    .with_error_tracking(error_tracker)
    .with_metrics(metrics)
    .build()?;

// Get error statistics
let stats = error_tracker.get_stats();
println!("Total errors: {}", stats.total_errors);
println!("Errors by type: {:?}", stats.errors_by_type);

// Get performance metrics
let perf = metrics.get_performance_stats();
println!("Average execution time: {}ms", perf.avg_execution_time_ms);`,python:`from flowgentra_ai.observability import ErrorTracker, MetricsCollector

error_tracker = ErrorTracker()
metrics = MetricsCollector()

builder = StateGraph(MyState)
builder.add_node("operation", operation_node)
builder.error_tracker = error_tracker
builder.metrics = metrics
graph = builder.compile()

# Get error statistics
stats = error_tracker.get_stats()
print(f"Total errors: {stats.total_errors}")
print(f"Errors by type: {stats.errors_by_type}")

# Get performance metrics
perf = metrics.get_performance_stats()
print(f"Average execution time: {perf.avg_execution_time_ms}ms")`}),(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`ErrorTracker Methods`}),(0,j.jsx)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20},children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,color:`#8b949e`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Method`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Parameters`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Returns`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Description`})]})}),(0,j.jsxs)(`tbody`,{children:[(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`get_stats()`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`None`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`ErrorStats`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Returns error statistics including total errors and errors by type`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`record_error(error)`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`error: Exception`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`None`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Records an error for tracking and analysis`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,fontFamily:`monospace`,fontSize:`0.9em`},children:`clear_stats()`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`None`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`None`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`Clears all accumulated error statistics`})]})]})]})}),(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`MetricsCollector Methods`}),(0,j.jsx)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20},children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,color:`#8b949e`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Method`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Parameters`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Returns`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Description`})]})}),(0,j.jsxs)(`tbody`,{children:[(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`get_performance_stats()`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`None`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`PerformanceStats`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Returns performance metrics including execution times and throughput`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`record_execution_time(node_name, duration)`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`node_name: str, duration: float`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`None`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Records execution time for a specific node`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,fontFamily:`monospace`,fontSize:`0.9em`},children:`reset_metrics()`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`None`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`None`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`Resets all performance metrics to initial state`})]})]})]})}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Use error tracking and metrics to identify failure patterns and optimize your error handling strategies.`})]})]})}function wi({id:e,title:t,children:n}){return(0,j.jsxs)(`section`,{id:e,style:{marginBottom:48},children:[(0,j.jsx)(`h2`,{style:{fontSize:`1.5rem`,fontWeight:600,color:`#e6edf3`,marginBottom:16,marginTop:0},children:t}),n]})}var Ti=[{id:`config-files`,label:`Configuration Files`},{id:`environment-variables`,label:`Environment Variables`},{id:`yaml-schema`,label:`YAML Schema Reference`},{id:`config-validation`,label:`Configuration Validation`},{id:`runtime-config`,label:`Runtime Configuration`},{id:`config-patterns`,label:`Configuration Patterns`}];function Ei(){let{language:e}=M();return(0,j.jsxs)(P,{anchors:Ti,children:[(0,j.jsx)(`h1`,{style:{fontSize:`2rem`,fontWeight:700,color:`#e6edf3`,letterSpacing:`-0.02em`,marginBottom:8,marginTop:0},children:`Configuration Management`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:40,lineHeight:1.7},children:`Configuration is how you customize Flowgentra agents for different environments and use cases. Learn how to configure LLMs, tools, memory, and behavior through YAML files and environment variables.`}),(0,j.jsxs)(Di,{id:`config-files`,title:`Configuration Files`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Flowgentra uses YAML for declarative configuration. This separates code from configuration, making it easy to deploy the same agent with different settings.`}),(0,j.jsx)(N,{yaml:`# agent.yaml
name: customer_support_agent
description: "Handles customer inquiries with tool access"

# LLM Configuration
llm:
  provider: anthropic
  model: claude-3-sonnet-20240229
  api_key: \${ANTHROPIC_API_KEY}
  temperature: 0.7
  max_tokens: 1000

# Memory settings
memory:
  type: conversation
  max_messages: 20

# Tool configuration
tools:
  - name: knowledge_base_search
    type: vector_search
    config:
      collection: customer_docs
      top_k: 5

  - name: ticket_system
    type: api_call
    config:
      base_url: https://api.ticketsystem.com
      auth_token: \${TICKET_API_TOKEN}

# Graph configuration
graph:
  entry: classify_intent
  nodes:
    - name: classify_intent
      handler: classify_intent
      config:
        categories: ["billing", "technical", "general"]

    - name: handle_billing
      handler: handle_billing_query

    - name: handle_technical
      handler: escalate_to_engineer

# Observability
observability:
  tracing: true
  metrics: true
  log_level: INFO`}),(0,j.jsxs)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:[`Use `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`from_config_path("agent.yaml")`}),` to load this configuration.`]}),(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Agent Configuration Methods`}),(0,j.jsx)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20},children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,color:`#8b949e`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Method`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Parameters`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Returns`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Description`})]})}),(0,j.jsxs)(`tbody`,{children:[(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`from_config_path(path)`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`path: str`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Agent`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Loads and validates agent configuration from YAML file`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`from_config_dict(config)`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`config: dict`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Agent`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Creates agent from configuration dictionary`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,fontFamily:`monospace`,fontSize:`0.9em`},children:`validate_config(config)`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`config: dict`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`bool`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`Validates configuration without creating agent instance`})]})]})]})})]}),(0,j.jsxs)(Di,{id:`environment-variables`,title:`Environment Variables`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Keep secrets and environment-specific values out of your config files using variable substitution.`}),(0,j.jsx)(N,{yaml:`# config.yaml
llm:
  api_key: \${OPENAI_API_KEY}
  model: \${MODEL_NAME:-gpt-4}  # Default value if not set

database:
  url: \${DATABASE_URL}
  password: \${DB_PASSWORD}

# Nested variable substitution
api:
  endpoint: \${API_BASE_URL}/v\${API_VERSION:-1}/endpoint`}),(0,j.jsx)(N,{bash:`# .env file or environment
export OPENAI_API_KEY="sk-..."
export MODEL_NAME="gpt-4-turbo"
export DATABASE_URL="postgresql://..."
export DB_PASSWORD="secret"
export API_BASE_URL="https://api.example.com"
export API_VERSION="2"`}),(0,j.jsxs)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:[`Variable syntax: `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`$VAR_NAME`}),` or `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`$VAR_NAME:-default`}),` for defaults.`]})]}),(0,j.jsxs)(Di,{id:`yaml-schema`,title:`YAML Schema Reference`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Complete reference for all configuration options.`}),(0,j.jsx)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`LLM Configuration`}),(0,j.jsx)(N,{yaml:`llm:
  provider: openai | anthropic | groq | ollama | ...  # Required
  model: "gpt-4" | "claude-3-opus-20240229" | ...     # Required
  api_key: "sk-..." | \${API_KEY}                     # Required for cloud providers
  base_url: "https://api.openai.com"                  # Optional, defaults vary by provider
  temperature: 0.7                                    # Optional, 0.0-2.0
  max_tokens: 1000                                    # Optional
  top_p: 1.0                                          # Optional
  frequency_penalty: 0.0                              # Optional
  presence_penalty: 0.0                               # Optional
  timeout: 30                                          # Optional, seconds
  retries: 3                                          # Optional`}),(0,j.jsx)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Memory Configuration`}),(0,j.jsx)(N,{yaml:`memory:
  type: conversation | buffer | summary | none      # Default: conversation
  max_messages: 20                                   # For conversation type
  max_tokens: 2000                                   # For buffer/summary types
  strategy: recent | important | compressed         # Default: recent`}),(0,j.jsx)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Tool Configuration`}),(0,j.jsx)(N,{yaml:`tools:
  - name: my_tool                                    # Required, unique identifier
    type: function | api_call | vector_search | ...  # Required
    description: "What this tool does"               # Optional
    config:                                          # Tool-specific configuration
      param1: value1
      param2: value2`}),(0,j.jsx)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Graph Configuration`}),(0,j.jsx)(N,{yaml:`graph:
  entry: node_name                                   # Required, starting node
  max_steps: 50                                      # Optional, prevent infinite loops
  timeout: 300                                        # Optional, seconds

  nodes:                                             # Required, list of nodes
    - name: node_name                                # Required
      handler: function_name                         # Required, references @register_handler
      config:                                        # Optional, passed to handler
        key: value
      retry:                                         # Optional, retry configuration
        max_attempts: 3
        backoff: exponential
      timeout: 30                                    # Optional, seconds

  edges:                                             # Optional, explicit edges
    - from: source_node
      to: target_node
      condition: "state.get('score', 0) > 0.8"      # Optional, conditional routing`})]}),(0,j.jsxs)(Di,{id:`config-validation`,title:`Configuration Validation`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Flowgentra validates your configuration at load time to catch errors early.`}),(0,j.jsx)(N,{rust:`use flowgentra_ai::agent::Agent;

// This will validate the entire config
match Agent::from_config_path("agent.yaml") {
    Ok(agent) => println!("Config is valid!"),
    Err(e) => {
        eprintln!("Configuration error: {}", e);
        // Detailed error messages help you fix issues
        std::process::exit(1);
    }
}`,python:`from flowgentra_ai.agent import Agent

try:
    agent = Agent.from_config_path("agent.yaml")
    print("Config is valid!")
except Exception as e:
    print(f"Configuration error: {e}")
    # Detailed error messages help you fix issues
    exit(1)`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Common validation checks include:`}),(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,lineHeight:1.7,paddingLeft:20,marginBottom:16},children:[(0,j.jsx)(`li`,{children:`LLM provider and model compatibility`}),(0,j.jsx)(`li`,{children:`Handler function existence`}),(0,j.jsx)(`li`,{children:`Graph connectivity (no orphaned nodes)`}),(0,j.jsx)(`li`,{children:`Tool configuration validity`}),(0,j.jsx)(`li`,{children:`Environment variable resolution`})]})]}),(0,j.jsxs)(Di,{id:`runtime-config`,title:`Runtime Configuration`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Some settings can be changed at runtime without reloading the entire agent.`}),(0,j.jsx)(N,{python:`# Load agent
agent = Agent.from_config_path("agent.yaml")

# Change LLM settings at runtime
agent.update_llm_config({
    "temperature": 0.9,
    "model": "gpt-4-turbo"
})

# Add tools dynamically
agent.add_tool(new_tool)

# Update memory settings
agent.update_memory_config({
    "max_messages": 50
})

# The agent adapts to these changes immediately`}),(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Runtime Configuration Methods`}),(0,j.jsx)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20},children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,color:`#8b949e`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Method`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Parameters`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Returns`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Description`})]})}),(0,j.jsxs)(`tbody`,{children:[(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`update_llm_config(config)`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`config: dict`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`None`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Updates LLM configuration (temperature, model, etc.)`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`add_tool(tool_config)`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`tool_config: dict`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`None`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Adds a new tool to the agent at runtime`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`update_memory_config(config)`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`config: dict`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`None`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Updates memory configuration settings`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,fontFamily:`monospace`,fontSize:`0.9em`},children:`reload_config()`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`None`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`None`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`Reloads configuration from original source file`})]})]})]})}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Runtime configuration is useful for A/B testing, gradual rollouts, and user-specific customization.`})]}),(0,j.jsxs)(Di,{id:`config-patterns`,title:`Configuration Patterns`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Best practices for organizing and managing configurations.`}),(0,j.jsx)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Environment-specific Configs`}),(0,j.jsx)(N,{yaml:`# config.base.yaml (shared settings)
name: my_agent
llm:
  provider: \${LLM_PROVIDER}
  model: \${MODEL_NAME}

# config.dev.yaml (development overrides)
_extends: config.base.yaml
llm:
  temperature: 0.9  # More creative in dev
memory:
  max_messages: 100  # More memory for debugging

# config.prod.yaml (production overrides)
_extends: config.base.yaml
llm:
  temperature: 0.1  # More conservative in prod
observability:
  tracing: true
  metrics: true`}),(0,j.jsx)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Modular Configurations`}),(0,j.jsx)(N,{yaml:`# Split large configs into logical modules
# agent.yaml
name: complex_agent
includes:
  - llm.yaml
  - tools.yaml
  - graph.yaml

# llm.yaml
llm:
  provider: anthropic
  model: claude-3-opus-20240229

# tools.yaml
tools:
  - name: search
    type: vector_search
    config: {collection: docs}

# graph.yaml
graph:
  entry: process_input
  nodes:
    - name: process_input
      handler: process_input`}),(0,j.jsx)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Configuration as Code`}),(0,j.jsx)(N,{python:`# For complex configurations, generate YAML programmatically
import yaml
from flowgentra_ai.config import ConfigBuilder

config = ConfigBuilder() \\
    .name("dynamic_agent") \\
    .llm(provider="openai", model="gpt-4", temperature=0.7) \\
    .tool("calculator", type="function") \\
    .tool("web_search", type="api_call", base_url="https://api.search.com") \\
    .node("start", handler="process_input") \\
    .node("calculate", handler="run_calculation") \\
    .edge("start", "calculate") \\
    .build()

# Save to file
with open("generated_config.yaml", "w") as f:
    yaml.dump(config.to_dict(), f)`}),(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`ConfigBuilder Methods`}),(0,j.jsx)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20},children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,color:`#8b949e`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Method`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Parameters`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Returns`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Description`})]})}),(0,j.jsxs)(`tbody`,{children:[(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`name(name)`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`name: str`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`ConfigBuilder`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Sets the agent name`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`llm(**kwargs)`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`provider, model, temperature, etc.`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`ConfigBuilder`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Configures the LLM settings`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`tool(name, **kwargs)`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`name: str, type: str, config: dict`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`ConfigBuilder`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Adds a tool configuration`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`node(name, **kwargs)`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`name: str, handler: str, config: dict`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`ConfigBuilder`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Adds a graph node configuration`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`edge(from_node, to_node, **kwargs)`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`from_node: str, to_node: str, condition: str`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`ConfigBuilder`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Adds an edge between nodes`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,fontFamily:`monospace`,fontSize:`0.9em`},children:`build()`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`None`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`Config`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`Builds the final configuration object`})]})]})]})})]})]})}function Di({id:e,title:t,children:n}){return(0,j.jsxs)(`section`,{id:e,style:{marginBottom:48},children:[(0,j.jsx)(`h2`,{style:{fontSize:`1.5rem`,fontWeight:600,color:`#e6edf3`,marginBottom:16,marginTop:0},children:t}),n]})}var Oi=[{id:`overview`,label:`Overview`},{id:`supported-formats`,label:`Supported Formats`},{id:`loading-single`,label:`Loading Single Documents`},{id:`loading-directories`,label:`Loading Directories`},{id:`ingestion-pipeline`,label:`Ingestion Pipeline`},{id:`pdf-processing`,label:`PDF Processing`},{id:`custom-loaders`,label:`Custom Loaders`},{id:`error-handling`,label:`Error Handling`},{id:`best-practices`,label:`Best Practices`}];function ki(){let{language:e}=M();return(0,j.jsxs)(P,{anchors:Oi,children:[(0,j.jsx)(`h1`,{style:{fontSize:`2rem`,fontWeight:700,color:`#e6edf3`,letterSpacing:`-0.02em`,marginBottom:8,marginTop:0},children:`Document Loading`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:40,lineHeight:1.7},children:`Flowgentra can load documents from various sources and formats, automatically extracting text content and metadata for use in RAG systems.`}),(0,j.jsx)(Ai,{id:`overview`,title:`Overview`,children:(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Document loading is the first step in building a RAG system. Flowgentra provides comprehensive support for loading documents from files, directories, and various formats with automatic content extraction and metadata preservation.`})}),(0,j.jsxs)(Ai,{id:`supported-formats`,title:`Supported Formats`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Flowgentra supports loading documents from:`}),(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,marginBottom:16,paddingLeft:`20px`},children:[(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Plain text`}),` (.txt) - Direct text loading`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Markdown`}),` (.md) - Preserves structure and formatting`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`HTML`}),` (.html) - Strips tags, preserves text content`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`PDF`}),` (.pdf) - Extracts text content from PDF documents`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`JSON`}),` (.json) - Structured data loading`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`CSV`}),` (.csv) - Tabular data processing`]})]})]}),(0,j.jsx)(Ai,{id:`loading-single`,title:`Loading Single Documents`,children:(0,j.jsx)(N,{rust:`use flowgentra_ai::data::load_document;
use std::path::Path;

let doc = load_document(Path::new("./research_paper.pdf"))?;
println!("Loaded: {} ({} chars)", doc.filename, doc.content.len());`,python:`from flowgentra_ai.document_loaders import load_document

# Load any supported format
doc = load_document("./research_paper.pdf")
print(f"Filename: {doc.filename}")
print(f"Content length: {len(doc.content)}")
print(f"File type: {doc.file_type}")

# Access metadata
print(f"Title: {doc.metadata.get('title')}")
print(f"Author: {doc.metadata.get('author')}")`})}),(0,j.jsxs)(Ai,{id:`loading-directories`,title:`Loading Directories`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Load all documents from a directory recursively:`}),(0,j.jsx)(N,{rust:`use flowgentra_ai::data::load_directory;

let documents = load_directory("./docs")?;
for doc in documents {
    println!("Loaded: {} ({})", doc.filename, doc.file_type);
}`,python:`from flowgentra_ai.document_loaders import load_directory

# Load all documents from directory
documents = load_directory("./docs")

for doc in documents:
    print(f"Loaded: {doc.filename} ({doc.file_type})")
    print(f"Content preview: {doc.content[:100]}...")
    print(f"Metadata: {doc.metadata}")`})]}),(0,j.jsxs)(Ai,{id:`ingestion-pipeline`,title:`Ingestion Pipeline`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`For production use, use the ingestion pipeline which provides progress tracking and error handling:`}),(0,j.jsx)(N,{python:`from flowgentra_ai.document_loaders import IngestionPipeline

# Create pipeline
pipeline = IngestionPipeline()

# Ingest documents with progress tracking
documents = ["doc1.pdf", "doc2.md", "doc3.html"]
stats = pipeline.ingest(documents)

print(f"Processed: {stats.total_documents}")
print(f"Successful: {stats.successful}")
print(f"Failed: {stats.failed}")
print(f"Total characters: {stats.total_characters}")`})]}),(0,j.jsxs)(Ai,{id:`pdf-processing`,title:`PDF Processing`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Special handling for PDF files:`}),(0,j.jsx)(N,{python:`from flowgentra_ai.document_loaders import extract_pdf

# Extract text from PDF
text = extract_pdf("./document.pdf")
print(f"Extracted {len(text)} characters")

# PDF documents include page information in metadata
doc = load_document("./document.pdf")
print(f"Pages: {doc.metadata.get('pages')}")
print(f"Author: {doc.metadata.get('author')}")
print(f"Subject: {doc.metadata.get('subject')}")`})]}),(0,j.jsxs)(Ai,{id:`custom-loaders`,title:`Custom Document Types`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`For unsupported formats, you can create custom loaders:`}),(0,j.jsx)(N,{python:`from flowgentra_ai.document_loaders import LoadedDocument, FileType

def load_custom_format(file_path: str) -> LoadedDocument:
    # Your custom loading logic here
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    return LoadedDocument(
        filename=file_path,
        content=content,
        file_type=FileType.TEXT,  # or appropriate type
        metadata={"custom": True}
    )

# Use your custom loader
doc = load_custom_format("./my_custom_format.xyz")`})]}),(0,j.jsxs)(Ai,{id:`error-handling`,title:`Error Handling`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Document loading can fail for various reasons:`}),(0,j.jsx)(N,{python:`from flowgentra_ai.document_loaders import load_document

try:
    doc = load_document("./missing_file.pdf")
except FileNotFoundError:
    print("File not found")
except Exception as e:
    print(f"Loading failed: {e}")

# With ingestion pipeline - handles errors gracefully
pipeline = IngestionPipeline()
try:
    stats = pipeline.ingest(["valid.pdf", "missing.xyz", "corrupt.pdf"])
    print(f"Loaded {stats.successful}/{stats.total_documents} successfully")
except Exception as e:
    print(f"Pipeline failed: {e}")`})]}),(0,j.jsx)(Ai,{id:`best-practices`,title:`Best Practices`,children:(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,marginBottom:16,paddingLeft:`20px`},children:[(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Use ingestion pipeline`}),` for batch processing with progress tracking`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Check file sizes`}),` - very large files may need chunking before processing`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Handle encoding`}),` - specify encoding for text files when needed`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Validate content`}),` - check that extracted text is meaningful`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Use metadata`}),` - leverage title, author, and other metadata for better retrieval`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Monitor performance`}),` - PDF processing can be slow for large documents`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Handle mixed formats`}),` - directories often contain different file types`]})]})})]})}function Ai({id:e,title:t,children:n}){return(0,j.jsxs)(`section`,{id:e,style:{marginBottom:48},children:[(0,j.jsx)(`h2`,{style:{fontSize:`1.5rem`,fontWeight:600,color:`#e6edf3`,marginBottom:16,marginTop:0},children:t}),n]})}var ji=[{id:`why-rerank`,label:`Why Rerank?`},{id:`available-rerankers`,label:`Available Rerankers`},{id:`rrf`,label:`Reciprocal Rank Fusion`},{id:`cross-encoder`,label:`Cross-Encoder Reranking`},{id:`llm-reranking`,label:`LLM-Based Reranking`},{id:`no-op-reranker`,label:`No-Op Reranker`},{id:`integration`,label:`RAG Integration`},{id:`performance`,label:`Performance Comparison`},{id:`configuration`,label:`Configuration Tips`},{id:`best-practices`,label:`Best Practices`}];function Mi(){let{language:e}=M();return(0,j.jsxs)(P,{anchors:ji,children:[(0,j.jsx)(`h1`,{style:{fontSize:`2rem`,fontWeight:700,color:`#e6edf3`,letterSpacing:`-0.02em`,marginBottom:8,marginTop:0},children:`Reranking`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:40,lineHeight:1.7},children:`Reranking improves search result quality by reordering retrieved documents. Flowgentra provides multiple reranking strategies optimized for different use cases.`}),(0,j.jsxs)(Ni,{id:`why-rerank`,title:`Why Rerank?`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Initial retrieval (like vector similarity search) is fast but may not capture all relevance signals. Reranking applies more sophisticated scoring to improve result quality.`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`When to rerank:`})}),(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,marginBottom:16,paddingLeft:`20px`},children:[(0,j.jsx)(`li`,{children:`Hybrid search (semantic + keyword results)`}),(0,j.jsx)(`li`,{children:`Large document collections where precision matters`}),(0,j.jsx)(`li`,{children:`Question-answering systems requiring high accuracy`}),(0,j.jsx)(`li`,{children:`Applications where result order significantly impacts user experience`})]})]}),(0,j.jsxs)(Ni,{id:`available-rerankers`,title:`Available Rerankers`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Flowgentra provides four reranking strategies:`}),(0,j.jsx)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20},children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,color:`#8b949e`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Reranker`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Speed`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Accuracy`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Use Case`})]})}),(0,j.jsxs)(`tbody`,{children:[(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`},children:`RRFReranker`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`⚡ Fast`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`⭐ Good`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Hybrid search, production`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`},children:`CrossEncoderReranker`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`🐌 Slow`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`⭐⭐⭐ Excellent`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Quality-critical apps`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`},children:`LLMReranker`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`🐌🐌 Very Slow`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`⭐⭐⭐⭐ Custom`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Complex criteria`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,fontFamily:`monospace`},children:`NoopReranker`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`⚡ Instant`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`❌ None`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`Testing, baseline`})]})]})]})})]}),(0,j.jsxs)(Ni,{id:`rrf`,title:`Reciprocal Rank Fusion (RRF)`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Combines multiple ranking sources mathematically. Excellent for hybrid search (semantic + keyword).`}),(0,j.jsx)(N,{rust:`use flowgentra_ai::reranking::RRFReranker;

let reranker = RRFReranker::new(60);
let reranked = reranker.rerank(search_results)?;`,python:`from flowgentra_ai.rerankers import RRFReranker

# Create RRF reranker
reranker = RRFReranker(k=60)  # k controls influence of original ranking

# Rerank results
reranked_results = reranker.rerank(search_results)

# Results are reordered by combined score
for result in reranked_results:
    print(f"Score: {result.score:.3f}, Text: {result.text[:50]}...")`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`When to use RRF:`})}),(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,marginBottom:16,paddingLeft:`20px`},children:[(0,j.jsx)(`li`,{children:`Hybrid search (combining semantic and keyword results)`}),(0,j.jsx)(`li`,{children:`Multiple retrieval sources`}),(0,j.jsx)(`li`,{children:`Need fast, deterministic reranking`}),(0,j.jsx)(`li`,{children:`Production systems where speed matters`})]})]}),(0,j.jsxs)(Ni,{id:`cross-encoder`,title:`Cross-Encoder Reranking`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Uses a transformer model to score query-document pairs directly. More accurate but slower.`}),(0,j.jsx)(N,{python:`from flowgentra_ai.rerankers import CrossEncoderReranker

# Use pre-trained cross-encoder model
reranker = CrossEncoderReranker(
    model="cross-encoder/ms-marco-MiniLM-L-6-v2"
)

# Rerank with higher quality scores
reranked = reranker.rerank(search_results, query="What is machine learning?")

# Much slower but more accurate than RRF`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`When to use Cross-Encoder:`})}),(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,marginBottom:16,paddingLeft:`20px`},children:[(0,j.jsx)(`li`,{children:`Maximum accuracy needed`}),(0,j.jsx)(`li`,{children:`Small result sets (<100 documents)`}),(0,j.jsx)(`li`,{children:`Can afford 10-100ms per query latency`}),(0,j.jsx)(`li`,{children:`Question-answering systems`})]})]}),(0,j.jsxs)(Ni,{id:`llm-reranking`,title:`LLM-Based Reranking`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Use an LLM to evaluate document relevance. Most flexible but slowest.`}),(0,j.jsx)(N,{python:`from flowgentra_ai.rerankers import LLMReranker
from flowgentra_ai.llm import LLMClient, LLMConfig

# Configure LLM for reranking
llm = LLMClient(LLMConfig("gpt-4", temperature=0.1))

reranker = LLMReranker(
    llm=llm,
    prompt_template="""
    Rate how relevant this document is to the query on a scale of 0-10.
    Query: {query}
    Document: {document}
    Score (0-10): """
)

reranked = reranker.rerank(search_results, query="machine learning basics")`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`When to use LLM reranking:`})}),(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,marginBottom:16,paddingLeft:`20px`},children:[(0,j.jsx)(`li`,{children:`Complex relevance criteria`}),(0,j.jsx)(`li`,{children:`Need explainable rankings`}),(0,j.jsx)(`li`,{children:`Custom scoring logic required`}),(0,j.jsx)(`li`,{children:`Domain-specific relevance rules`})]})]}),(0,j.jsxs)(Ni,{id:`no-op-reranker`,title:`No-Op Reranker`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Pass-through reranker for when you don't want reranking.`}),(0,j.jsx)(N,{python:`from flowgentra_ai.rerankers import NoopReranker

# No reranking - preserves original order
reranker = NoopReranker()
results = reranker.rerank(search_results)  # Returns unchanged`})]}),(0,j.jsxs)(Ni,{id:`integration`,title:`Integration with RAG`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Rerankers integrate seamlessly with the RAG pipeline:`}),(0,j.jsx)(N,{python:`from flowgentra_ai.rag import RAGConfig, Retriever
from flowgentra_ai.rerankers import RRFReranker

# Configure RAG with reranking
rag_config = RAGConfig(
    retriever=Retriever(
        vectorstore=vectorstore,
        reranker=RRFReranker(k=60),  # Add reranking
        top_k=20  # Retrieve more, then rerank
    )
)

# Retrieval now includes reranking
results = rag_config.retriever.retrieve("What is AI?", top_k=5)`})]}),(0,j.jsxs)(Ni,{id:`performance`,title:`Performance Comparison`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Here's how the rerankers compare in practice:`}),(0,j.jsx)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20,fontFamily:`monospace`,fontSize:`0.9rem`,color:`#8b949e`},children:`Reranker Performance (100 documents, approximate):

RRF:           5-10ms   | Good accuracy, fast
Cross-Encoder: 100-500ms | Excellent accuracy, slower
LLM:           1-5s     | Custom accuracy, very slow
No-Op:         <1ms     | No change, instant`})]}),(0,j.jsxs)(Ni,{id:`configuration`,title:`Configuration Tips`,children:[(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Choosing RRF Parameters`}),(0,j.jsx)(N,{python:`# Conservative (preserves original ranking more)
reranker = RRFReranker(k=100)

# Aggressive (more influence from fusion)
reranker = RRFReranker(k=20)`}),(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Cross-Encoder Models`}),(0,j.jsx)(N,{python:`# Fast but less accurate
reranker = CrossEncoderReranker("cross-encoder/ms-marco-TinyBERT-L-2-v2")

# Balanced speed/accuracy
reranker = CrossEncoderReranker("cross-encoder/ms-marco-MiniLM-L-6-v2")

# High accuracy (slower)
reranker = CrossEncoderReranker("cross-encoder/ms-marco-electra-base")`}),(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`LLM Prompt Engineering`}),(0,j.jsx)(N,{python:`# More detailed scoring criteria
prompt = """
Rate relevance 0-10 considering:
- Direct answer to query
- Related concepts
- Background context

Query: {query}
Document: {document}
Score: """

reranker = LLMReranker(llm=llm, prompt_template=prompt)`})]}),(0,j.jsx)(Ni,{id:`best-practices`,title:`Best Practices`,children:(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,marginBottom:16,paddingLeft:`20px`},children:[(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Start with RRF`}),` - Fast and effective for most use cases`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Use cross-encoders`}),` - When accuracy is critical and latency allows`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Retrieve more than needed`}),` - Rerank from larger candidate set (20-50 docs)`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Tune thresholds`}),` - Set minimum scores to filter irrelevant results`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Monitor performance`}),` - Track reranking impact on your metrics`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Consider cost`}),` - LLM reranking can be expensive at scale`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Test different models`}),` - Performance varies by domain and query type`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Cache results`}),` - For frequently asked queries`]})]})})]})}function Ni({id:e,title:t,children:n}){return(0,j.jsxs)(`section`,{id:e,style:{marginBottom:48},children:[(0,j.jsx)(`h2`,{style:{fontSize:`1.5rem`,fontWeight:600,color:`#e6edf3`,marginBottom:16,marginTop:0},children:t}),n]})}var Pi=[{id:`why-evaluate`,label:`Why Evaluate?`},{id:`retrieval-metrics`,label:`Retrieval Metrics`},{id:`hit-rate`,label:`Hit Rate`},{id:`mrr`,label:`Mean Reciprocal Rank`},{id:`ndcg`,label:`Normalized Discounted Cumulative Gain`},{id:`full-evaluation`,label:`Full Evaluation Pipeline`},{id:`generation-evaluation`,label:`Generation Evaluation`},{id:`custom-metrics`,label:`Custom Metrics`},{id:`ab-testing`,label:`A/B Testing`},{id:`best-practices`,label:`Best Practices`}];function Fi(){let{language:e}=M();return(0,j.jsxs)(P,{anchors:Pi,children:[(0,j.jsx)(`h1`,{style:{fontSize:`2rem`,fontWeight:700,color:`#e6edf3`,letterSpacing:`-0.02em`,marginBottom:8,marginTop:0},children:`Evaluation & Metrics`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:40,lineHeight:1.7},children:`Evaluate your RAG systems and agent workflows with comprehensive metrics and automated evaluation pipelines.`}),(0,j.jsxs)(Ii,{id:`why-evaluate`,title:`Why Evaluate?`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Evaluation helps you:`}),(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,marginBottom:16,paddingLeft:`20px`},children:[(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Measure retrieval quality`}),` - How well do you find relevant documents?`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Assess generation accuracy`}),` - How good are the answers?`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Compare different configurations`}),` - Which setup works best?`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Monitor production performance`}),` - Is your system degrading?`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Debug issues systematically`}),` - Where are the problems?`]})]})]}),(0,j.jsxs)(Ii,{id:`retrieval-metrics`,title:`Retrieval Metrics`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Standard metrics for measuring retrieval system quality:`}),(0,j.jsx)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20},children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,color:`#8b949e`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Metric`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`What it measures`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Range`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Good value`})]})}),(0,j.jsxs)(`tbody`,{children:[(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`},children:`Hit Rate`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Fraction of queries with ≥1 relevant result`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`0.0 - 1.0`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`≥ 0.8`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`},children:`MRR`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Average reciprocal rank of first relevant result`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`0.0 - 1.0`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`≥ 0.7`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,fontFamily:`monospace`},children:`NDCG`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`Ranking quality with position discounting`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`0.0 - 1.0`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`≥ 0.6`})]})]})]})})]}),(0,j.jsxs)(Ii,{id:`hit-rate`,title:`Hit Rate`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Fraction of queries that retrieved at least one relevant document.`}),(0,j.jsx)(N,{rust:`use flowgentra_ai::evaluation::{hit_rate};

let hit_rate_score = hit_rate(&retrieval_results, &ground_truth)?;
println!("Hit Rate: {:.3}", hit_rate_score);`,python:`from flowgentra_ai.evaluation import hit_rate

# retrieval_results: List[List[SearchResult]]
# ground_truth: List[List[str]] (document IDs)

score = hit_rate(retrieval_results, ground_truth)
print(f"Hit Rate: {score:.3f}")  # e.g., 0.85`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Interpretation:`})}),(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,marginBottom:16,paddingLeft:`20px`},children:[(0,j.jsx)(`li`,{children:`1.0 = Perfect (every query found relevant docs)`}),(0,j.jsx)(`li`,{children:`0.0 = Terrible (no queries found relevant docs)`}),(0,j.jsx)(`li`,{children:`Good baseline: > 0.8 for most applications`}),(0,j.jsx)(`li`,{children:`Simple but effective effectiveness check`})]})]}),(0,j.jsxs)(Ii,{id:`mrr`,title:`Mean Reciprocal Rank (MRR)`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Measures how highly relevant documents are ranked.`}),(0,j.jsx)(N,{rust:`use flowgentra_ai::evaluation::mrr;

let mrr_score = mrr(&retrieval_results, &ground_truth)?;
println!("MRR: {:.3}", mrr_score);`,python:`from flowgentra_ai.evaluation import mrr

score = mrr(retrieval_results, ground_truth)
print(f"MRR: {score:.3f}")  # e.g., 0.72`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Interpretation:`})}),(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,marginBottom:16,paddingLeft:`20px`},children:[(0,j.jsx)(`li`,{children:`Rewards high rankings of relevant documents`}),(0,j.jsx)(`li`,{children:`Perfect score = 1.0 (relevant doc always first)`}),(0,j.jsx)(`li`,{children:`Good score: > 0.7 for information retrieval`}),(0,j.jsx)(`li`,{children:`Focuses on first relevant result position`})]})]}),(0,j.jsxs)(Ii,{id:`ndcg`,title:`Normalized Discounted Cumulative Gain (NDCG)`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Sophisticated ranking metric that considers position and relevance grades.`}),(0,j.jsx)(N,{python:`from flowgentra_ai.evaluation import mean_ndcg

# Evaluate at different cutoffs
ndcg_5 = mean_ndcg(retrieval_results, ground_truth, k=5)
ndcg_10 = mean_ndcg(retrieval_results, ground_truth, k=10)

print(f"NDCG@5: {ndcg_5:.3f}")
print(f"NDCG@10: {ndcg_10:.3f}")`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Interpretation:`})}),(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,marginBottom:16,paddingLeft:`20px`},children:[(0,j.jsx)(`li`,{children:`Considers graded relevance (not just binary)`}),(0,j.jsx)(`li`,{children:`Perfect = 1.0`}),(0,j.jsx)(`li`,{children:`Good for comparing ranking quality`}),(0,j.jsx)(`li`,{children:`Discounts lower-ranked results`})]})]}),(0,j.jsxs)(Ii,{id:`full-evaluation`,title:`Full Evaluation Pipeline`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Run comprehensive evaluations with multiple metrics:`}),(0,j.jsx)(N,{python:`from flowgentra_ai.evaluation import rag_evaluate, EvaluationConfig, GradingConfig

# Configure evaluation
config = EvaluationConfig(
    metrics=["hit_rate", "mrr", "ndcg@5", "ndcg@10"],
    grading_config=GradingConfig(
        temperature=0.1,  # Low temperature for consistent grading
        model="gpt-4"     # Use strong model for grading
    )
)

# Run evaluation
results = rag_evaluate(
    queries=queries,
    results=retrieval_results,
    ground_truth=ground_truth,
    config=config
)

# Results summary
print(f"Mean Hit Rate: {results.hit_rate:.3f}")
print(f"Mean MRR: {results.mrr:.3f}")
print(f"Mean NDCG@5: {results.ndcg_at_5:.3f}")

# Per-query results
for i, query_result in enumerate(results.query_results):
    print(f"Query {i}: HR={query_result.hit_rate}, MRR={query_result.mrr}")`})]}),(0,j.jsxs)(Ii,{id:`generation-evaluation`,title:`Generation Evaluation`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Evaluate answer quality beyond retrieval:`}),(0,j.jsx)(N,{python:`from flowgentra_ai.evaluation import evaluate_output_score

# Evaluate generated answers
scores = []
for query, answer, context in zip(queries, answers, contexts):
    score = evaluate_output_score(
        query=query,
        output=answer,
        context=context,
        grading_config=GradingConfig(model="gpt-4")
    )
    scores.append(score)

print(f"Average answer quality: {sum(scores)/len(scores):.3f}")`})]}),(0,j.jsxs)(Ii,{id:`custom-metrics`,title:`Custom Metrics`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Create your own evaluation metrics:`}),(0,j.jsx)(N,{python:`from flowgentra_ai.evaluation import EvaluationResult

def custom_metric(results, ground_truth):
    """Custom evaluation logic"""
    total_score = 0.0
    for retrieved, truth in zip(results, ground_truth):
        # Your custom scoring logic
        score = calculate_custom_score(retrieved, truth)
        total_score += score
    return total_score / len(results)

# Use in evaluation
config = EvaluationConfig(
    metrics=["hit_rate", "mrr"],  # Built-in metrics
    custom_metrics={"my_metric": custom_metric}
)`})]}),(0,j.jsxs)(Ii,{id:`ab-testing`,title:`A/B Testing Configurations`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Compare different RAG configurations:`}),(0,j.jsx)(N,{python:`from flowgentra_ai.rag import RAGConfig
from flowgentra_ai.evaluation import rag_evaluate

# Configuration A: Basic setup
config_a = RAGConfig(
    text_splitter=RecursiveCharacterTextSplitter(chunk_size=1000),
    embeddings=Embeddings.openai("text-embedding-3-small"),
    retriever=Retriever(top_k=5)
)

# Configuration B: Optimized setup
config_b = RAGConfig(
    text_splitter=RecursiveCharacterTextSplitter(chunk_size=500, overlap=50),
    embeddings=Embeddings.openai("text-embedding-3-large"),
    retriever=Retriever(top_k=10, reranker=RRFReranker(k=60))
)

# Evaluate both
results_a = rag_evaluate(queries, config_a.retrieve_all(queries), ground_truth)
results_b = rag_evaluate(queries, config_b.retrieve_all(queries), ground_truth)

print(f"Config A - Hit Rate: {results_a.hit_rate:.3f}")
print(f"Config B - Hit Rate: {results_b.hit_rate:.3f}")`})]}),(0,j.jsxs)(Ii,{id:`best-practices`,title:`Best Practices`,children:[(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Dataset Creation`}),(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,marginBottom:16,paddingLeft:`20px`},children:[(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Diverse queries`}),` - Cover different types of questions`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Realistic ground truth`}),` - Use actual relevant documents`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Sufficient volume`}),` - 100+ queries for reliable metrics`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Balanced difficulty`}),` - Mix easy and hard queries`]})]}),(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Metric Selection`}),(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,marginBottom:16,paddingLeft:`20px`},children:[(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Hit Rate`}),` - Simple effectiveness check`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`MRR`}),` - Ranking quality for single relevant docs`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`NDCG`}),` - Graded relevance and ranking quality`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Custom metrics`}),` - Domain-specific evaluation`]})]}),(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Statistical Significance`}),(0,j.jsx)(N,{python:`# Use confidence intervals for reliable comparisons
import numpy as np
from scipy import stats

def confidence_interval(scores, confidence=0.95):
    mean = np.mean(scores)
    std = np.std(scores)
    n = len(scores)
    h = std * stats.t.ppf((1 + confidence) / 2, n - 1) / np.sqrt(n)
    return mean - h, mean + h

# Check if difference is significant
ci_a = confidence_interval(scores_a)
ci_b = confidence_interval(scores_b)

if ci_a[1] < ci_b[0] or ci_b[1] < ci_a[0]:
    print("Results are statistically different")
else:
    print("Results are not significantly different")`}),(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Common Pitfalls`}),(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,marginBottom:16,paddingLeft:`20px`},children:[(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Small test sets`}),` - Need 100+ queries for reliable results`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Biased ground truth`}),` - Ensure relevance judgments are accurate`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Over-optimization`}),` - Don't tune too closely to test set`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Ignoring context`}),` - Consider query type and user intent`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Single metrics`}),` - Use multiple complementary metrics`]})]})]})]})}function Ii({id:e,title:t,children:n}){return(0,j.jsxs)(`section`,{id:e,style:{marginBottom:48},children:[(0,j.jsx)(`h2`,{style:{fontSize:`1.5rem`,fontWeight:600,color:`#e6edf3`,marginBottom:16,marginTop:0},children:t}),n]})}var Li=[{id:`overview`,label:`Overview`},{id:`retry-nodes`,label:`Retry Nodes`},{id:`timeout-nodes`,label:`Timeout Nodes`},{id:`branching`,label:`Branching & Conditional Logic`},{id:`parallel-execution`,label:`Parallel Execution`},{id:`loop-nodes`,label:`Loop Nodes`},{id:`subgraph-nodes`,label:`Subgraph Nodes`},{id:`join-nodes`,label:`Join Nodes`},{id:`error-handling`,label:`Error Handling Patterns`},{id:`best-practices`,label:`Best Practices`}];function F(){let{language:e}=M();return(0,j.jsxs)(P,{anchors:Li,children:[(0,j.jsx)(`h1`,{style:{fontSize:`2rem`,fontWeight:700,color:`#e6edf3`,letterSpacing:`-0.02em`,marginBottom:8,marginTop:0},children:`Advanced Node Types`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:40,lineHeight:1.7},children:`Flowgentra provides sophisticated node types for complex workflow patterns including retry logic, timeouts, branching, parallel execution, and subgraph composition.`}),(0,j.jsxs)(I,{id:`overview`,title:`Overview`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`While basic nodes handle simple operations, advanced nodes enable complex workflow patterns:`}),(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,marginBottom:16,paddingLeft:`20px`},children:[(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Retry Nodes`}),` - Automatic retry with backoff strategies`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Timeout Nodes`}),` - Protect against hanging operations`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Branching`}),` - Conditional execution paths`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Parallel Execution`}),` - Run multiple operations concurrently`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Loop Nodes`}),` - Repeat operations until conditions met`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Subgraphs`}),` - Compose complex workflows from smaller graphs`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Join Nodes`}),` - Synchronize parallel branches`]})]})]}),(0,j.jsxs)(I,{id:`retry-nodes`,title:`Retry Nodes`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Automatically retry failed operations with configurable backoff strategies.`}),(0,j.jsx)(N,{rust:`use flowgentra_ai::nodes::RetryNode;

let retry_node = RetryNode::new(3, BackoffStrategy::Exponential);
graph.add_node("unreliable_task", retry_node.wrap(my_fallible_node))?;`,python:`from flowgentra_ai.nodes import RetryNode
from flowgentra_ai.graph import StateGraph

def unreliable_api_call(state):
    # Simulate occasional failures
    if random.random() < 0.3:
        raise Exception("API temporarily unavailable")
    state["result"] = "Success!"
    return state

# Wrap with retry logic
retry_node = RetryNode(
    max_retries=3,
    backoff_strategy="exponential",  # or "linear", "fixed"
    base_delay=1.0  # seconds
)

builder = StateGraph(MyState)
builder.add_node("api_call", retry_node.wrap(unreliable_api_call))`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Configuration Options:`})}),(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,marginBottom:16,paddingLeft:`20px`},children:[(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`code`,{children:`max_retries`}),`: Maximum retry attempts (default: 3)`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`code`,{children:`backoff_strategy`}),`: "exponential", "linear", or "fixed"`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`code`,{children:`base_delay`}),`: Initial delay between retries (default: 1.0 seconds)`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`code`,{children:`max_delay`}),`: Maximum delay cap (default: 60.0 seconds)`]})]})]}),(0,j.jsxs)(I,{id:`timeout-nodes`,title:`Timeout Nodes`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Protect against hanging operations with configurable timeouts.`}),(0,j.jsx)(N,{python:`from flowgentra_ai.nodes import TimeoutNode

def slow_operation(state):
    time.sleep(30)  # This might hang
    state["result"] = "Completed"
    return state

# Add timeout protection
timeout_node = TimeoutNode(timeout_seconds=10.0)

builder.add_node("slow_task", timeout_node.wrap(slow_operation))`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`When to use timeouts:`})}),(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,marginBottom:16,paddingLeft:`20px`},children:[(0,j.jsx)(`li`,{children:`External API calls`}),(0,j.jsx)(`li`,{children:`File I/O operations`}),(0,j.jsx)(`li`,{children:`Long-running computations`}),(0,j.jsx)(`li`,{children:`Network requests`})]})]}),(0,j.jsxs)(I,{id:`branching`,title:`Branching & Conditional Logic`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Execute different paths based on state conditions.`}),(0,j.jsx)(N,{python:`from flowgentra_ai.nodes import BranchConfig
from flowgentra_ai.types import Condition

def classify_query(state):
    query = state["query"].lower()
    if "calculate" in query:
        state["category"] = "math"
    elif "search" in query:
        state["category"] = "search"
    else:
        state["category"] = "general"
    return state

def math_handler(state):
    # Handle math queries
    return state

def search_handler(state):
    # Handle search queries
    return state

# Configure branching
branch_config = BranchConfig(
    branches=[
        (Condition.field_equals("category", "math"), "math_handler"),
        (Condition.field_equals("category", "search"), "search_handler")
    ],
    default_branch="general_handler"
)

builder.add_node("classify", classify_query)
builder.add_node("math", math_handler)
builder.add_node("search", search_handler)
builder.add_node("general", general_handler)
builder.add_node("branch", branch_config)

builder.add_edge("classify", "branch")
# Branch node automatically routes to appropriate handler`})]}),(0,j.jsxs)(I,{id:`parallel-execution`,title:`Parallel Execution`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Run multiple nodes concurrently and merge results.`}),(0,j.jsx)(N,{python:`from flowgentra_ai.nodes import ParallelNodeConfig, MergeStrategy

# Define parallel tasks
def analyze_sentiment(state):
    state["sentiment"] = analyze_text_sentiment(state["text"])
    return state

def extract_keywords(state):
    state["keywords"] = extract_text_keywords(state["text"])
    return state

def summarize_text(state):
    state["summary"] = summarize_text_content(state["text"])
    return state

# Configure parallel execution
parallel_config = ParallelNodeConfig(
    nodes=["sentiment_analysis", "keyword_extraction", "summarization"],
    merge_strategy=MergeStrategy.CONCATENATE  # or OVERWRITE, MERGE_MAP
)

builder.add_node("sentiment_analysis", analyze_sentiment)
builder.add_node("keyword_extraction", extract_keywords)
builder.add_node("summarization", summarize_text)
builder.add_node("parallel_processor", parallel_config)

# All three nodes run in parallel
builder.add_edge("input_processor", "parallel_processor")`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Merge Strategies:`})}),(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,marginBottom:16,paddingLeft:`20px`},children:[(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`code`,{children:`CONCATENATE`}),`: Combine list fields`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`code`,{children:`OVERWRITE`}),`: Last writer wins`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`code`,{children:`MERGE_MAP`}),`: Deep merge dictionaries`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`code`,{children:`CUSTOM`}),`: Provide custom merge function`]})]})]}),(0,j.jsxs)(I,{id:`loop-nodes`,title:`Loop Nodes`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Repeat operations until a condition is met.`}),(0,j.jsx)(N,{python:`from flowgentra_ai.nodes import LoopNodeConfig
from flowgentra_ai.types import Condition

def iterative_refinement(state):
    # Improve result iteratively
    current_score = evaluate_quality(state["result"])
    state["iterations"] = state.get("iterations", 0) + 1

    if current_score > 0.8 or state["iterations"] > 5:
        state["complete"] = True
    else:
        # Refine the result
        state["result"] = improve_result(state["result"])

    return state

# Configure loop
loop_config = LoopNodeConfig(
    body_node="refinement_step",
    exit_condition=Condition.field_equals("complete", True),
    max_iterations=10
)

builder.add_node("refinement_step", iterative_refinement)
builder.add_node("quality_loop", loop_config)`})]}),(0,j.jsxs)(I,{id:`subgraph-nodes`,title:`Subgraph Nodes`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Compose complex workflows from smaller graphs.`}),(0,j.jsx)(N,{python:`from flowgentra_ai.nodes import SubgraphNodeConfig

# Define a subgraph for document processing
doc_builder = StateGraph(DocumentState)
doc_builder.add_node("load", load_document_node)
doc_builder.add_node("chunk", chunk_document_node)
doc_builder.add_node("embed", embed_chunks_node)
doc_builder.set_entry_point("load")
doc_builder.add_edge("load", "chunk")
doc_builder.add_edge("chunk", "embed")

document_processor = doc_builder.compile()

# Use as a node in larger workflow
subgraph_config = SubgraphNodeConfig(
    subgraph=document_processor,
    input_mapping={"document_path": "path"},  # Map outer state to inner
    output_mapping={"processed_chunks": "chunks"}  # Map inner results to outer
)

main_builder.add_node("process_documents", subgraph_config)`})]}),(0,j.jsxs)(I,{id:`join-nodes`,title:`Join Nodes`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Synchronize multiple parallel branches.`}),(0,j.jsx)(N,{python:`from flowgentra_ai.nodes import JoinNodeConfig, JoinType

# After parallel processing, join results
join_config = JoinNodeConfig(
    join_type=JoinType.ALL,  # Wait for all branches
    merge_strategy=MergeStrategy.MERGE_MAP
)

builder.add_node("join_results", join_config)

# Connect parallel branches to join
builder.add_edge("branch_a", "join_results")
builder.add_edge("branch_b", "join_results")
builder.add_edge("branch_c", "join_results")`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Join Types:`})}),(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,marginBottom:16,paddingLeft:`20px`},children:[(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`code`,{children:`ALL`}),`: Wait for all incoming branches`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`code`,{children:`ANY`}),`: Continue when any branch completes`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`code`,{children:`RACE`}),`: Use result from first completed branch`]})]})]}),(0,j.jsxs)(I,{id:`error-handling`,title:`Error Handling Patterns`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Combine nodes for robust error handling:`}),(0,j.jsx)(N,{python:`from flowgentra_ai.nodes import RetryNode, TimeoutNode

# Chain error handling strategies
robust_node = RetryNode(
    max_retries=3,
    backoff_strategy="exponential"
).wrap(
    TimeoutNode(timeout_seconds=30.0).wrap(
        my_unreliable_operation
    )
)

builder.add_node("robust_operation", robust_node)`}),(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Circuit Breaker`}),(0,j.jsx)(N,{python:`def circuit_breaker_wrapper(node_func, failure_threshold=5):
    failures = 0

    def wrapped(state):
        nonlocal failures
        if failures >= failure_threshold:
            raise Exception("Circuit breaker open")

        try:
            result = node_func(state)
            failures = 0  # Reset on success
            return result
        except Exception as e:
            failures += 1
            raise e

    return wrapped`}),(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Progressive Retry`}),(0,j.jsx)(N,{python:`# Start fast, then slow down
progressive_retry = RetryNode(
    max_retries=5,
    backoff_strategy="exponential",
    base_delay=0.1,  # Quick first retry
    max_delay=10.0   # Cap at 10 seconds
)`})]}),(0,j.jsxs)(I,{id:`best-practices`,title:`Best Practices`,children:[(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,marginBottom:16,paddingLeft:`20px`},children:[(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Start simple`}),` - Begin with basic nodes and add complexity gradually`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Test error cases`}),` - Thoroughly test retry logic, timeouts, and error conditions`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Monitor performance`}),` - Parallel execution and retries can impact performance`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Clear state management`}),` - Ensure state updates are predictable when using parallel execution and merging`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Use appropriate timeouts`}),` - Set realistic timeouts based on expected operation duration`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Handle partial failures`}),` - Design workflows to handle partial failures in parallel execution`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Document complex logic`}),` - Use comments and clear naming for complex node configurations`]})]}),(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Common Patterns`}),(0,j.jsx)(`h5`,{style:{color:`#e6edf3`,fontSize:`1rem`,fontWeight:600,marginBottom:8,marginTop:16},children:`Conditional Parallelism`}),(0,j.jsx)(N,{python:`# Only run expensive operations if needed
def should_parallelize(state):
    return len(state["documents"]) > 10

parallel_config = ParallelNodeConfig(
    nodes=["expensive_analysis", "basic_processing"],
    condition=should_parallelize  # Only run in parallel when worthwhile
)`})]})]})}function I({id:e,title:t,children:n}){return(0,j.jsxs)(`section`,{id:e,style:{marginBottom:48},children:[(0,j.jsx)(`h2`,{style:{fontSize:`1.5rem`,fontWeight:600,color:`#e6edf3`,marginBottom:16,marginTop:0},children:t}),n]})}var Ri=[{id:`overview`,label:`Overview`},{id:`strategies`,label:`Orchestration Strategies`},{id:`sequential`,label:`Sequential`},{id:`parallel`,label:`Parallel`},{id:`llm-routed`,label:`LLM-Routed`},{id:`autonomous`,label:`Autonomous`},{id:`dynamic`,label:`Dynamic`},{id:`round-robin`,label:`Round Robin`},{id:`hierarchical`,label:`Hierarchical`},{id:`broadcast`,label:`Broadcast + Vote`},{id:`map-reduce`,label:`Map-Reduce`},{id:`conditional`,label:`Conditional Routing`},{id:`retry`,label:`Retry Fallback`},{id:`debate`,label:`Debate`},{id:`advanced`,label:`Strategy Comparison`},{id:`yaml`,label:`Config-Driven Supervisor`}];function zi(){return(0,j.jsxs)(P,{anchors:Ri,children:[(0,j.jsx)(`h1`,{style:Hi,children:`Multi-Agent Systems`}),(0,j.jsx)(`p`,{style:Ui,children:`Build systems where multiple specialized agents collaborate to solve complex tasks. Flowgentra's Supervisor orchestrates agent execution with 11 built-in strategies.`}),(0,j.jsxs)(Bi,{id:`overview`,title:`Overview`,children:[(0,j.jsxs)(`p`,{style:L,children:[`A `,(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Supervisor`}),` is a controller that manages a set of child agents. It decides which agent runs next, when to stop, and how to merge results from multiple agents.`]}),(0,j.jsx)(`p`,{style:L,children:`Each child agent is itself a graph — the Supervisor composes them into a higher-level workflow. You can nest Supervisors for hierarchical multi-agent architectures.`}),(0,j.jsxs)(`div`,{style:{background:`#161b22`,border:`1px solid #21262d`,borderRadius:8,padding:`20px 24px`,marginTop:16},children:[(0,j.jsx)(`div`,{style:{fontSize:`0.75rem`,fontWeight:600,color:`#484f58`,textTransform:`uppercase`,letterSpacing:`0.08em`,marginBottom:14},children:`Architecture`}),(0,j.jsx)(`pre`,{style:{margin:0,color:`#8b949e`,fontSize:`0.875rem`,lineHeight:2,fontFamily:`JetBrains Mono, monospace`},children:`Supervisor
├── Strategy (Sequential | Parallel | LLMRouted | ...)
├── Child Agent A  ─── graph with nodes + state
├── Child Agent B  ─── graph with nodes + state
└── Child Agent C  ─── graph with nodes + state

State flows: Supervisor state → child state → merged back`})]})]}),(0,j.jsxs)(Bi,{id:`strategies`,title:`Orchestration Strategies`,children:[(0,j.jsx)(`p`,{style:L,children:`Flowgentra ships with 11 strategies. Choose based on your use case:`}),(0,j.jsx)(`div`,{style:{overflowX:`auto`},children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,fontSize:`0.875rem`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsx)(`tr`,{children:[`Strategy`,`Description`,`Best for`].map(e=>(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`10px 14px`,borderBottom:`1px solid #21262d`,color:`#8b949e`,fontWeight:600,fontSize:`0.8rem`},children:e},e))})}),(0,j.jsx)(`tbody`,{children:[[`sequential()`,`Run children in order, one at a time`,`Pipelines, step-by-step research`],[`parallel()`,`Run all children simultaneously`,`Independent tasks, fan-out patterns`],[`autonomous()`,`Loop until required outputs are present`,`Self-directed research agents`],[`dynamic()`,`LLM decides which child runs next`,`Complex routing, unknown paths`],[`round_robin()`,`Distribute tasks in rotation`,`Load balancing, fair scheduling`],[`hierarchical()`,`Nested supervisors`,`Team-of-teams architectures`],[`broadcast()`,`Send to all, pick best response`,`Ensembling, quality voting`],[`map_reduce()`,`Split input, process chunks, merge`,`Document analysis, bulk tasks`],[`conditional_routing()`,`Route based on state conditions`,`Business rule-driven flows`],[`retry_fallback()`,`Try children in order until success`,`Fault-tolerant, degraded modes`],[`debate()`,`Agents argue, then reach consensus`,`Complex reasoning, fact-checking`]].map(([e,t,n],r)=>(0,j.jsxs)(`tr`,{style:{background:r%2==0?`transparent`:`#0a0f14`},children:[(0,j.jsx)(`td`,{style:{padding:`10px 14px`,fontFamily:`JetBrains Mono, monospace`,fontSize:`0.8rem`,color:`var(--accent)`,whiteSpace:`nowrap`},children:e}),(0,j.jsx)(`td`,{style:{padding:`10px 14px`,color:`#e6edf3`},children:t}),(0,j.jsx)(`td`,{style:{padding:`10px 14px`,color:`#8b949e`},children:n})]},e))})]})})]}),(0,j.jsxs)(Bi,{id:`sequential`,title:`Sequential — Pipeline of Agents`,children:[(0,j.jsx)(`p`,{style:L,children:`The simplest strategy: agents run one after the other. The output state of one becomes the input of the next. Great for research → summarize → format pipelines.`}),(0,j.jsx)(N,{rust:`use flowgentra_ai::prelude::*;
use flowgentra_ai::supervision::{Supervisor, SupervisorNodeConfig, OrchestrationStrategy};

// Two simple agents
fn research_agent() -> impl GraphAgent {
    StateGraph::<ResearchState>::builder()
        .add_node("search", search_node)
        .set_entry("search")
        .build()
        .unwrap()
}

fn summarize_agent() -> impl GraphAgent {
    StateGraph::<ResearchState>::builder()
        .add_node("summarize", summarize_node)
        .set_entry("summarize")
        .build()
        .unwrap()
}

#[tokio::main]
async fn main() -> Result<()> {
    let config = SupervisorNodeConfig::new("pipeline")
        .with_children(vec!["researcher", "summarizer"])
        .with_strategy(OrchestrationStrategy::sequential());

    let mut sup = Supervisor::from_config(config);
    sup.add_agent("researcher", research_agent());
    sup.add_agent("summarizer", summarize_agent());

    let state = ResearchState {
        query: "Latest advances in Rust async runtimes".into(),
        ..Default::default()
    };

    let result = sup.run(state).await?;
    println!("{}", result.summary);
    Ok(())
}`,python:`from flowgentra_ai.supervision import Supervisor, SupervisorNodeConfig, OrchestrationStrategy
from flowgentra_ai.graph import StateGraph, END
from flowgentra_ai import State

# Define two simple agents
def make_research_agent():
    def search(state: State) -> State:
        # ... call search API, LLM, etc.
        state["findings"] = f"Research results for: {state.get('query', '')}"
        return state

    builder = StateGraph()
    builder.add_node("search", search)
    builder.set_entry_point("search")
    builder.add_edge("search", END)
    return builder.compile()

def make_summarize_agent():
    def summarize(state: State) -> State:
        findings = state.get("findings", "")
        state["summary"] = f"Summary: {findings[:100]}..."
        return state

    builder = StateGraph()
    builder.add_node("summarize", summarize)
    builder.set_entry_point("summarize")
    builder.add_edge("summarize", END)
    return builder.compile()

# Create supervisor with sequential strategy
config = SupervisorNodeConfig(
    name="pipeline",
    children=["researcher", "summarizer"],
)
config.set_strategy(OrchestrationStrategy.sequential())

sup = Supervisor.from_config(config)
sup.add_agent("researcher", make_research_agent())
sup.add_agent("summarizer", make_summarize_agent())

initial = State({"query": "Latest advances in Rust async runtimes"})
result = sup.run(initial)
print(result.get("summary"))`})]}),(0,j.jsxs)(Bi,{id:`parallel`,title:`Parallel — Fan-Out / Fan-In`,children:[(0,j.jsx)(`p`,{style:L,children:`Run all child agents simultaneously and merge their results. The merge strategy controls how state is combined.`}),(0,j.jsx)(N,{rust:`use flowgentra_ai::supervision::{Supervisor, SupervisorNodeConfig, OrchestrationStrategy, ParallelMergeStrategy};

let config = SupervisorNodeConfig::new("parallel-research")
    .with_children(vec!["web-agent", "db-agent", "kg-agent"])
    .with_strategy(OrchestrationStrategy::parallel())
    .with_merge_strategy(ParallelMergeStrategy::deep_merge())
    .with_max_concurrent(3)
    .with_child_timeout_ms(10_000);`,python:`from flowgentra_ai.supervision import (
    Supervisor, SupervisorNodeConfig,
    OrchestrationStrategy, ParallelMergeStrategy,
)

config = SupervisorNodeConfig(
    name="parallel-research",
    children=["web-agent", "db-agent", "kg-agent"],
)
config.set_strategy(OrchestrationStrategy.parallel())
config.set_merge_strategy(ParallelMergeStrategy.deep_merge())
config.set_max_concurrent(3)
config.set_child_timeout_ms(10_000)

sup = Supervisor.from_config(config)
sup.add_agent("web-agent", make_web_agent())
sup.add_agent("db-agent",  make_db_agent())
sup.add_agent("kg-agent",  make_kg_agent())

result = sup.run(initial_state)`}),(0,j.jsxs)(`div`,{style:{background:`#161b22`,border:`1px solid #21262d`,borderRadius:8,padding:`16px 20px`,marginTop:16},children:[(0,j.jsx)(`div`,{style:{fontWeight:600,color:`#e6edf3`,marginBottom:10,fontSize:`0.875rem`},children:`Merge Strategies`}),(0,j.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:[[`ParallelMergeStrategy.first_success()`,`Use result from whichever agent finishes first successfully`],[`ParallelMergeStrategy.latest()`,`Use result from the last agent to finish`],[`ParallelMergeStrategy.deep_merge()`,`Deep-merge all state dicts (new keys win, lists append)`]].map(([e,t])=>(0,j.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`baseline`},children:[(0,j.jsx)(`code`,{style:Wi,children:e}),(0,j.jsx)(`span`,{style:{color:`#8b949e`,fontSize:`0.875rem`},children:t})]},e))})]})]}),(0,j.jsxs)(Bi,{id:`llm-routed`,title:`LLM-Routed — Dynamic Dispatch`,children:[(0,j.jsx)(`p`,{style:L,children:`The supervisor calls an LLM to decide which agent runs next. The router can see the current state and choose dynamically. This is the most flexible strategy for complex, unknown workflows.`}),(0,j.jsx)(N,{rust:`// With router function
fn router(state: &AgentState) -> &'static str {
    // Return agent name or "FINISH"
    if state.needs_more_research { "researcher" }
    else if state.needs_formatting  { "formatter" }
    else                            { "FINISH" }
}

let sup = Supervisor::with_router(router)
    .add_agent("researcher", research_agent)
    .add_agent("formatter", format_agent)
    .max_rounds(10);

let result = sup.run(initial_state).await?;`,python:`from flowgentra_ai.supervision import Supervisor

def router(state: State) -> str:
    """Return agent name or 'FINISH' to stop the loop."""
    if not state.get("findings"):
        return "researcher"
    if not state.get("summary"):
        return "summarizer"
    if not state.get("formatted"):
        return "formatter"
    return "FINISH"

sup = Supervisor(router)
sup.add_agent("researcher", make_research_agent())
sup.add_agent("summarizer", make_summarize_agent())
sup.add_agent("formatter",  make_format_agent())
sup.max_rounds(10)          # safety limit
sup.finish_marker("FINISH") # what the router returns to stop

result = sup.run(initial_state)`}),(0,j.jsxs)(Vi,{type:`warn`,title:`Set a max_rounds limit`,children:[`LLM-routed supervisors can loop indefinitely if the router never returns "FINISH". Always set `,(0,j.jsx)(`code`,{style:Wi,children:`max_rounds()`}),` to prevent runaway execution.`]})]}),(0,j.jsxs)(Bi,{id:`autonomous`,title:`Autonomous — Self-Directed Teams`,children:[(0,j.jsx)(`p`,{style:L,children:`Loop until all required outputs are present. Agents autonomously decide what to do next to produce the outputs. Perfect for self-supervising research teams that know their responsibilities.`}),(0,j.jsx)(N,{python:`from flowgentra_ai.supervision import SupervisorNodeConfig, OrchestrationStrategy

config = SupervisorNodeConfig(
    name="research_team",
    children=["researcher", "analyst", "writer"],
)
config.set_strategy(OrchestrationStrategy.autonomous())
config.set_goal("Produce comprehensive market analysis")
config.set_required_outputs(["data", "analysis", "report"])
config.add_output_owner("data", "researcher")
config.add_output_owner("analysis", "analyst")
config.add_output_owner("report", "writer")
config.set_max_iterations(20)

result = sup.run(initial_state)
# Returns when all required outputs present`,rust:`use flowgentra_ai::supervision::{Supervisor, SupervisorNodeConfig, OrchestrationStrategy};

let config = SupervisorNodeConfig::new("research-team")
    .with_children(vec!["researcher", "analyst", "writer"])
    .with_strategy(OrchestrationStrategy::autonomous())
    .with_goal("Produce comprehensive market analysis")
    .with_required_outputs(vec!["data", "analysis", "report"])
    .with_max_iterations(20);`}),(0,j.jsxs)(`div`,{style:{background:`#161b22`,border:`1px solid #21262d`,borderRadius:8,padding:`16px 20px`,marginTop:16},children:[(0,j.jsx)(`div`,{style:{fontWeight:600,color:`#e6edf3`,marginBottom:10,fontSize:`0.875rem`},children:`When to use:`}),(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,margin:0,paddingLeft:20,fontSize:`0.875rem`},children:[(0,j.jsx)(`li`,{children:`Goal-oriented workflows with multiple stages`}),(0,j.jsx)(`li`,{children:`Agents know their responsibilities`}),(0,j.jsx)(`li`,{children:`Need to ensure all outputs eventually produced`}),(0,j.jsx)(`li`,{children:`Self-supervising teams`})]})]})]}),(0,j.jsxs)(Bi,{id:`dynamic`,title:`Dynamic — LLM-Based Routing`,children:[(0,j.jsx)(`p`,{style:L,children:`The LLM analyzes current state and decides which agent to call next. Provides interpretable adaptive routing for complex workflows.`}),(0,j.jsx)(N,{python:`from flowgentra_ai.supervision import SupervisorNodeConfig, OrchestrationStrategy
from flowgentra_ai.llm import LLMConfig

config = SupervisorNodeConfig(
    name="research_coordinator",
    children=["researcher", "analyst", "writer"],
)
config.set_strategy(OrchestrationStrategy.dynamic())
config.set_selector_prompt("""
    Analyze the current state and decide which agent should run next:
    - researcher: When we need more data or sources
    - analyst: When we have enough data but need analysis
    - writer: When analysis is complete
    Return: agent name or 'FINISH'
""")
config.set_llm_config(LLMConfig("openai", "gpt-4"))
config.set_max_iterations(15)`,rust:`let config = SupervisorNodeConfig::new("research-coordinator")
    .with_children(vec!["researcher", "analyst", "writer"])
    .with_strategy(OrchestrationStrategy::dynamic())
    .with_selector_prompt("Choose next agent: researcher|analyst|writer|FINISH")
    .with_max_iterations(15);`})]}),(0,j.jsxs)(Bi,{id:`round-robin`,title:`Round Robin — Fair Load Balancing`,children:[(0,j.jsx)(`p`,{style:L,children:`Distribute tasks across agents in sequence. Each agent gets a fair turn. Perfect for load balancing across identical workers.`}),(0,j.jsx)(N,{python:`from flowgentra_ai.supervision import SupervisorNodeConfig, OrchestrationStrategy

config = SupervisorNodeConfig(
    name="load_balancer",
    children=["worker_1", "worker_2", "worker_3"],
)
config.set_strategy(OrchestrationStrategy.round_robin())
config.set_tasks_key("task_queue")  # State key with list of tasks
config.set_skip_on_error(True)      # Skip agent if it fails
config.set_rotation_strategy("sequential")  # or "random"`,rust:`let config = SupervisorNodeConfig::new("load-balancer")
    .with_children(vec!["worker_1", "worker_2", "worker_3"])
    .with_strategy(OrchestrationStrategy::round_robin())
    .with_tasks_key("task_queue")
    .with_skip_on_error(true);`})]}),(0,j.jsxs)(Bi,{id:`hierarchical`,title:`Hierarchical — Multi-Level Teams`,children:[(0,j.jsx)(`p`,{style:L,children:`Nest supervisors for team-of-teams architectures. Top-level supervisor delegates to sub-supervisors, each coordinating their own agents.`}),(0,j.jsx)(N,{python:`from flowgentra_ai.supervision import Supervisor, SupervisorNodeConfig

# Build sub-teams
research_team = Supervisor(
    SupervisorNodeConfig(
        name="research_team",
        children=["web_researcher", "db_researcher"],
        strategy="sequential"
    )
)

analysis_team = Supervisor(
    SupervisorNodeConfig(
        name="analysis_team",
        children=["data_analyst", "trend_analyst"],
        strategy="parallel"
    )
)

# Hierarchical supervisor
config = SupervisorNodeConfig(
    name="executive_team",
    children=["research_team", "analysis_team"],
    strategy="sequential"
)

executive = Supervisor(config)
executive.add_agent("research_team", research_team)
executive.add_agent("analysis_team", analysis_team)`,rust:`// Team 1: research_team (sequential)
// Team 2: analysis_team (parallel)
// Executive: orchestrates teams
let exec = Supervisor::hierarchical()
    .add_subagent("research_team", research_supervisor)
    .add_subagent("analysis_team", analysis_supervisor)
    .with_coordination("executive");`})]}),(0,j.jsxs)(Bi,{id:`broadcast`,title:`Broadcast + Vote — Ensemble`,children:[(0,j.jsx)(`p`,{style:L,children:`Send the same task to all agents, then use voting or quality scoring to pick the best answer. Great for consensus and fact-checking.`}),(0,j.jsx)(N,{python:`from flowgentra_ai.supervision import SupervisorNodeConfig, OrchestrationStrategy, ParallelMergeStrategy

config = SupervisorNodeConfig(
    name="fact_checker",
    children=["agent_1", "agent_2", "agent_3"],
)
config.set_strategy(OrchestrationStrategy.broadcast())
config.set_merge_strategy(ParallelMergeStrategy.majority_vote())
config.set_max_concurrent(3)
config.set_collect_stats(True)  # Track which agent won`,rust:`let config = SupervisorNodeConfig::new("fact-checker")
    .with_children(vec!["agent_1", "agent_2", "agent_3"])
    .with_strategy(OrchestrationStrategy::broadcast())
    .with_merge_strategy(MergeStrategy::majority_vote())
    .with_max_concurrent(3);`})]}),(0,j.jsxs)(Bi,{id:`map-reduce`,title:`Map-Reduce — Chunk Processing`,children:[(0,j.jsx)(`p`,{style:L,children:`Split large input into chunks, send each to a worker agent, then merge all results. Perfect for document analysis and bulk data processing.`}),(0,j.jsx)(N,{python:`from flowgentra_ai.supervision import SupervisorNodeConfig, OrchestrationStrategy

config = SupervisorNodeConfig(
    name="document_analyzer",
    children=["chunk_analyzer", "chunk_analyzer", "chunk_analyzer"],
)
config.set_strategy(OrchestrationStrategy.map_reduce())
config.set_chunk_size(1000)          # Characters or tokens per chunk
config.set_chunk_key("document")     # Input field to split
config.set_merge_strategy("concatenate")  # Combine all results`,rust:`let config = SupervisorNodeConfig::new("document-analyzer")
    .with_children(vec!["worker"; 3])
    .with_strategy(OrchestrationStrategy::map_reduce())
    .with_chunk_size(1000)
    .with_output_key("analysis");`})]}),(0,j.jsxs)(Bi,{id:`conditional`,title:`Conditional Routing — Business Rules`,children:[(0,j.jsx)(`p`,{style:L,children:`Route to agents based on state conditions. Define rules for which agent should handle each scenario.`}),(0,j.jsx)(N,{python:`from flowgentra_ai.supervision import SupervisorNodeConfig, OrchestrationStrategy

def router(state):
    urgency = state.get("urgency", "normal")
    if urgency == "critical":
        return "priority_handler"
    elif urgency == "high":
        return "fast_handler"
    else:
        return "standard_handler"

config = SupervisorNodeConfig(
    name="ticket_router",
    children=["priority_handler", "fast_handler", "standard_handler"],
)
config.set_strategy(OrchestrationStrategy.conditional_routing(router))`,rust:`fn router(state: &State) -> &'static str {
    match state.get_string("urgency").as_deref() {
        Some("critical") => "priority_handler",
        Some("high") => "fast_handler",
        _ => "standard_handler"
    }
}

let config = SupervisorNodeConfig::new("ticket-router")
    .with_strategy(OrchestrationStrategy::conditional_routing(router));`})]}),(0,j.jsxs)(Bi,{id:`retry`,title:`Retry Fallback — Resilient Pipelines`,children:[(0,j.jsx)(`p`,{style:L,children:`Try agents in sequence. If one fails, automatically move to the next. Excellent for fault-tolerant systems.`}),(0,j.jsx)(N,{python:`from flowgentra_ai.supervision import SupervisorNodeConfig, OrchestrationStrategy

config = SupervisorNodeConfig(
    name="api_call_fallback",
    children=["primary_api", "secondary_api", "fallback_service"],
    strategy="sequential"  # Try in order
)
config.set_strategy(OrchestrationStrategy.retry_fallback())
config.set_max_retries(2)           # Retries per agent
config.set_backoff_ms(1000)         # Wait between retries
config.set_skip_on_error(False)     # Progress to next on error`,rust:`let config = SupervisorNodeConfig::new("api-fallback")
    .with_children(vec!["primary", "secondary", "fallback"])
    .with_strategy(OrchestrationStrategy::retry_fallback())
    .with_max_retries(2)
    .with_backoff_ms(1000);`})]}),(0,j.jsxs)(Bi,{id:`debate`,title:`Debate — Consensus Building`,children:[(0,j.jsx)(`p`,{style:L,children:`Multiple agents generate different answers. Then a moderator agent synthesizes a final consensus. Great for complex reasoning and fact-checking.`}),(0,j.jsx)(N,{python:`from flowgentra_ai.supervision import SupervisorNodeConfig, OrchestrationStrategy

config = SupervisorNodeConfig(
    name="debate_moderator",
    children=["perspective_a", "perspective_b", "perspective_c", "moderator"],
)
config.set_strategy(OrchestrationStrategy.debate())
config.set_debaters(["perspective_a", "perspective_b", "perspective_c"])
config.set_moderator("moderator")
config.set_num_rounds(2)            # Debate rounds
config.set_synthesis_prompt("Synthesize the best answer from all perspectives")`,rust:`let config = SupervisorNodeConfig::new("debate")
    .with_strategy(OrchestrationStrategy::debate())
    .with_debaters(vec!["perspective_a", "perspective_b", "perspective_c"])
    .with_moderator("moderator")
    .with_num_rounds(2);`})]}),(0,j.jsx)(Bi,{id:`advanced`,title:`Strategy Comparison Matrix`,children:(0,j.jsx)(`div`,{style:{overflowX:`auto`},children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,fontSize:`0.8rem`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsx)(`tr`,{children:[`Strategy`,`Execution`,`Merge`,`Best For`,`Complexity`].map(e=>(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`10px 14px`,borderBottom:`1px solid #21262d`,color:`#8b949e`,fontWeight:600},children:e},e))})}),(0,j.jsx)(`tbody`,{children:[[`Sequential`,`One-by-one`,`Latest`,`Pipelines`,`Low`],[`Parallel`,`Simultaneous`,`Configurable`,`Independent tasks`,`Medium`],[`Autonomous`,`Self-directed`,`Until complete`,`Self-supervising`,`High`],[`Dynamic`,`LLM-routed`,`Dynamic`,`Complex logic`,`High`],[`Round Robin`,`Fair distribution`,`Per-agent`,`Load balancing`,`Low`],[`Hierarchical`,`Nested`,`Per-level`,`Team-of-teams`,`Very High`],[`Broadcast`,`All same`,`Vote/score`,`Consensus`,`Medium`],[`Map-Reduce`,`Parallel chunks`,`Merged`,`Bulk data`,`High`],[`Conditional`,`Rule-based`,`Latest`,`Business rules`,`Medium`],[`Retry`,`Sequential + fallback`,`Latest`,`Fault-tolerant`,`Medium`],[`Debate`,`Multi-perspective`,`Synthesis`,`Complex reasoning`,`Very High`]].map(([e,t,n,r,i],a)=>(0,j.jsxs)(`tr`,{style:{background:a%2==0?`transparent`:`#0a0f14`},children:[(0,j.jsx)(`td`,{style:{padding:`10px 14px`,fontFamily:`JetBrains Mono, monospace`,fontSize:`0.8rem`,color:`var(--accent)`,whiteSpace:`nowrap`},children:e}),(0,j.jsx)(`td`,{style:{padding:`10px 14px`,color:`#e6edf3`},children:t}),(0,j.jsx)(`td`,{style:{padding:`10px 14px`,color:`#8b949e`},children:n}),(0,j.jsx)(`td`,{style:{padding:`10px 14px`,color:`#8b949e`},children:r}),(0,j.jsx)(`td`,{style:{padding:`10px 14px`,color:`#8b949e`},children:i})]},e))})]})})}),(0,j.jsxs)(Bi,{id:`yaml`,title:`Config-Driven Supervisor (YAML)`,children:[(0,j.jsx)(`p`,{style:L,children:`For production deployments, define your multi-agent topology in YAML. This lets you iterate on agent composition without code changes.`}),(0,j.jsx)(N,{forceLang:`yaml`,rust:`name: research-pipeline
type: supervisor

supervisor:
  strategy: sequential
  children:
    - researcher
    - summarizer
    - formatter

  # Optional: timeout per child (ms)
  child_timeout_ms: 15000
  # Optional: collect per-agent stats
  collect_stats: true

agents:
  researcher:
    type: graph
    python_handler_module: agents.researcher
    graph:
      entry: search
      nodes:
        - name: search
          handler: search_handler
      edges:
        - from: search
          to: __end__

  summarizer:
    type: graph
    python_handler_module: agents.summarizer
    graph:
      entry: summarize
      nodes:
        - name: summarize
          handler: summarize_handler
      edges:
        - from: summarize
          to: __end__`}),(0,j.jsx)(N,{python:`from flowgentra_ai.agent import Agent

# Load the entire multi-agent pipeline from YAML
pipeline = Agent.from_config_path("research-pipeline.yaml")
pipeline.set_state("query", "Advances in multi-agent AI systems")

result = pipeline.run()
print(result.get("formatted_report"))`}),(0,j.jsx)(Vi,{type:`tip`,title:`Nested supervisors`,children:`You can nest supervisors by making one child agent itself a supervisor config. This enables hierarchical team-of-teams architectures.`})]})]})}function Bi({id:e,title:t,children:n}){return(0,j.jsxs)(`section`,{id:e,style:{marginBottom:52},children:[(0,j.jsx)(`h2`,{style:{fontSize:`1.375rem`,fontWeight:600,color:`#e6edf3`,marginBottom:16,marginTop:0},children:t}),n]})}function Vi({type:e,title:t,children:n}){let r={info:{bg:`rgba(53,114,165,0.1)`,border:`rgba(53,114,165,0.4)`,text:`#58a6ff`},tip:{bg:`rgba(63,185,80,0.1)`,border:`rgba(63,185,80,0.4)`,text:`#3fb950`},warn:{bg:`rgba(210,153,34,0.1)`,border:`rgba(210,153,34,0.4)`,text:`#d29922`}},i=r[e]||r.info;return(0,j.jsxs)(`div`,{style:{background:i.bg,border:`1px solid ${i.border}`,borderRadius:8,padding:`14px 18px`,marginTop:16},children:[t&&(0,j.jsx)(`div`,{style:{fontWeight:600,color:i.text,marginBottom:6,fontSize:`0.9rem`},children:t}),(0,j.jsx)(`div`,{style:{color:`#8b949e`,fontSize:`0.875rem`,lineHeight:1.65},children:n})]})}var Hi={fontSize:`2rem`,fontWeight:700,color:`#e6edf3`,letterSpacing:`-0.02em`,marginBottom:8,marginTop:0},Ui={color:`#8b949e`,marginBottom:40,lineHeight:1.7,fontSize:`1.0625rem`},L={color:`#8b949e`,lineHeight:1.75,marginBottom:16},Wi={background:`#21262d`,border:`1px solid #30363d`,borderRadius:4,padding:`1px 6px`,fontSize:`0.85em`,fontFamily:`JetBrains Mono, monospace`},Gi=[{id:`overview`,label:`Overview`},{id:`init-tracing`,label:`Enable Tracing`},{id:`execution-tracer`,label:`ExecutionTracer`},{id:`visualization`,label:`Graph Visualization`},{id:`token-usage`,label:`Token Usage & Cost`},{id:`debugging`,label:`Debugging Tips`}];function Ki(){return(0,j.jsxs)(P,{anchors:Gi,children:[(0,j.jsx)(`h1`,{style:Yi,children:`Observability & Tracing`}),(0,j.jsx)(`p`,{style:Xi,children:`Understand what your agent is doing, how long each node takes, and how much it costs. Flowgentra has built-in tracing, execution metrics, and graph visualization — no external tools required.`}),(0,j.jsxs)(qi,{id:`overview`,title:`Overview`,children:[(0,j.jsx)(`p`,{style:Zi,children:`Flowgentra's observability stack includes:`}),(0,j.jsxs)(`ul`,{style:Qi,children:[(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Structured logging`}),` — per-node span logs with timing`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`ExecutionTracer`}),` — programmatic event capture and inspection`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Graph visualization`}),` — Mermaid flowcharts and Graphviz DOT export`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Token tracking`}),` — built into `,(0,j.jsx)(`code`,{style:$i,children:`LLMClient.chat_with_usage()`})]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Cost estimation`}),` — per-model pricing via `,(0,j.jsx)(`code`,{style:$i,children:`TokenUsage.estimated_cost()`})]})]})]}),(0,j.jsxs)(qi,{id:`init-tracing`,title:`Enable Tracing`,children:[(0,j.jsxs)(`p`,{style:Zi,children:[`Call `,(0,j.jsx)(`code`,{style:$i,children:`init_tracing()`}),` once at startup to enable structured span logging. All node starts, ends, and edge traversals will be logged automatically.`]}),(0,j.jsx)(N,{rust:`use flowgentra_ai::observability::init_tracing;

#[tokio::main]
async fn main() -> Result<()> {
    // "debug" | "info" | "warn" | "error"
    init_tracing("info");

    // Now run your graph — logs appear automatically
    let result = graph.invoke(state).await?;
    Ok(())
}`,python:`from flowgentra_ai.observability import init_tracing

# Call once at app startup
init_tracing("info")  # "debug" | "info" | "warn" | "error"

# All graph.invoke() calls will now emit structured logs:
# [INFO] flowgentra::graph  node_start  node=classify
# [INFO] flowgentra::graph  node_end    node=classify  duration_ms=142  success=true
# [INFO] flowgentra::graph  edge        from=classify  to=technical  condition_met=true`})]}),(0,j.jsxs)(qi,{id:`execution-tracer`,title:`ExecutionTracer — Programmatic Capture`,children:[(0,j.jsxs)(`p`,{style:Zi,children:[`For programmatic access to execution events (e.g., in tests or dashboards), use `,(0,j.jsx)(`code`,{style:$i,children:`ExecutionTracer`}),`. It captures every node execution, edge traversal, and state update.`]}),(0,j.jsx)(N,{rust:`use flowgentra_ai::observability::{ExecutionTracer, ExecutionTrace};

let tracer = ExecutionTracer::new();
let traced_graph = graph.with_tracer(tracer.clone());

let result = traced_graph.invoke(state).await?;

// Inspect the trace
let trace = tracer.last_trace().unwrap();
println!("Nodes visited: {:?}", trace.execution_path());
println!("Total duration: {}ms", trace.total_duration_ms().unwrap_or(0));

// JSON export for logging/monitoring
println!("{}", tracer.get_events_json());`,python:`from flowgentra_ai.observability import ExecutionTracer, ExecutionTrace

tracer = ExecutionTracer()

# Manually instrument (or use with-tracer API)
tracer.trace_node_start("classify")
# ... node runs ...
tracer.trace_node_end("classify", duration_ms=142, success=True)
tracer.trace_edge_traversal("classify", "technical", condition_met=True)
tracer.trace_state_update("category", "technical")
tracer.trace_custom("llm_tokens", "prompt=45, completion=112")

# Read events as JSON
import json
events = json.loads(tracer.get_events_json())
for event in events:
    print(f"[{event['type']}] {event.get('node_id', '')} — {event.get('duration_ms', '')}ms")

# Clear for next run
tracer.clear()`}),(0,j.jsxs)(`p`,{style:{...Zi,marginTop:16},children:[`The `,(0,j.jsx)(`code`,{style:$i,children:`ExecutionTrace`}),` class provides a higher-level summary:`]}),(0,j.jsx)(N,{rust:`let trace = ExecutionTrace::from_agent("my-agent");
let path      = trace.execution_path();    // ["classify", "technical", "__end__"]
let duration  = trace.total_duration_ms(); // Some(387)
let json      = trace.to_json();`,python:`from flowgentra_ai.observability import ExecutionTrace

trace = ExecutionTrace(agent_name="my-agent")
path     = trace.execution_path()     # ["classify", "technical", "__end__"]
duration = trace.total_duration_ms()  # 387
json_str = trace.to_json()            # full JSON export`})]}),(0,j.jsxs)(qi,{id:`visualization`,title:`Graph Visualization`,children:[(0,j.jsx)(`p`,{style:Zi,children:`Export your compiled graph as a Mermaid flowchart or Graphviz DOT diagram. Great for documentation and debugging routing logic.`}),(0,j.jsx)(N,{rust:`let graph = builder.build()?;

// Mermaid diagram (paste into mermaid.live)
let mermaid = graph.to_mermaid();
println!("{}", mermaid);

// Graphviz DOT (use with dot -Tpng graph.dot > graph.png)
let dot = graph.to_dot();
println!("{}", dot);

// JSON representation
let json = serde_json::to_string_pretty(&graph.to_json())?;`,python:`from flowgentra_ai.observability import graph_to_mermaid, graph_to_dot

graph = builder.compile()

# Mermaid — paste into https://mermaid.live or GitHub markdown
mermaid_str = graph.to_mermaid()
print(mermaid_str)
# graph TD
#   classify --> |technical| technical_answer
#   classify --> |general| general_answer
#   technical_answer --> __end__
#   general_answer --> __end__

# Graphviz DOT
dot_str = graph.to_dot()

# JSON
graph_dict = graph.to_json()
print(graph_dict["nodes"])   # list of node names
print(graph_dict["edges"])   # list of {from, to} dicts`}),(0,j.jsxs)(Ji,{type:`tip`,title:`Embed in Jupyter notebooks`,children:[`In a Jupyter notebook, render the Mermaid diagram inline:`,(0,j.jsx)(`pre`,{style:ea,children:`from IPython.display import display, HTML

mermaid = graph.to_mermaid()
display(HTML(f"""
<div class="mermaid">{mermaid}</div>
<script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"><\/script>
"""))`})]})]}),(0,j.jsxs)(qi,{id:`token-usage`,title:`Token Usage & Cost Estimation`,children:[(0,j.jsxs)(`p`,{style:Zi,children:[`Use `,(0,j.jsx)(`code`,{style:$i,children:`chat_with_usage()`}),` to get token counts alongside the response. Then estimate cost per-model with `,(0,j.jsx)(`code`,{style:$i,children:`TokenUsage.estimated_cost()`}),`.`]}),(0,j.jsx)(N,{rust:`let (response, usage) = client.chat_with_usage(messages).await?;

if let Some(u) = usage {
    println!("Prompt tokens:     {}", u.prompt_tokens);
    println!("Completion tokens: {}", u.completion_tokens);
    println!("Total:             {}", u.total_tokens());
    if let Some(cost) = u.estimated_cost("gpt-4o") {
        println!("Estimated cost: {:.6{'}'}", cost);
    }
}`,python:`from flowgentra_ai.llm import LLMClient, LLMConfig, Message

client = LLMClient.from_config(LLMConfig(provider="openai", model="gpt-4o"))

response, usage = client.chat_with_usage([
    Message.system("You are a helpful assistant."),
    Message.user("Explain RAG in one sentence."),
])

if usage:
    print(f"Prompt:     {usage.prompt_tokens} tokens")
    print(f"Completion: {usage.completion_tokens} tokens")
    print(f"Total:      {usage.total_tokens} tokens")

    cost = usage.estimated_cost("gpt-4o")
    if cost:
        print(f"Estimated:  {cost:.6f{'}'}")

# Get per-model pricing
from flowgentra_ai.llm import model_pricing
input_price, output_price = model_pricing("gpt-4o")
# (2.50, 10.00) — $ per million tokens`}),(0,j.jsxs)(Ji,{type:`info`,title:`Track costs across a workflow`,children:[`Accumulate usage across multiple LLM calls by adding a `,(0,j.jsx)(`code`,{style:$i,children:`total_tokens`}),` field to your state with a `,(0,j.jsx)(`code`,{style:$i,children:`#[reducer(Sum)]`}),` (Rust) or by manually accumulating in Python.`]})]}),(0,j.jsx)(qi,{id:`debugging`,title:`Debugging Tips`,children:(0,j.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[{title:`Agent loops forever`,fix:`Your conditional router never returns "__end__". Add a max_steps limit and print the state in your router to see what condition is failing.`,code:`builder.set_max_steps(25)  # Python
// or
StateGraph::<S>::builder().max_steps(25)  // Rust`},{title:`"Unknown node: xyz" error`,fix:`The router returned a node name that doesn't exist in the graph. Check spelling — node names are case-sensitive.`,code:`# Python: print what your router returns
def debug_router(state):
    next_node = my_router(state)
    print(f"Router → {next_node!r}")
    return next_node`},{title:`State key is None unexpectedly`,fix:`Use .get() with a default value instead of direct key access. Nodes that haven't run yet won't have populated their output keys.`,code:`# Safe access:
value = state.get("key", "default")  # Python
state.get_string("key").unwrap_or_default()  // Rust`},{title:`LLM returns inconsistent JSON`,fix:`Use ResponseFormat.json_schema() to enforce a schema. Set temperature to 0.0 for deterministic structured output.`,code:`from flowgentra_ai.types import ResponseFormat

config.set_response_format(
    ResponseFormat.json_schema("output", {
        "type": "object",
        "properties": {"answer": {"type": "string"}},
        "required": ["answer"]
    })
)`}].map(e=>(0,j.jsxs)(`div`,{style:{background:`#161b22`,border:`1px solid #21262d`,borderRadius:8,padding:`18px 20px`},children:[(0,j.jsx)(`div`,{style:{fontWeight:600,color:`#e6edf3`,marginBottom:6},children:e.title}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,fontSize:`0.875rem`,lineHeight:1.65,marginBottom:12},children:e.fix}),(0,j.jsx)(`pre`,{style:{background:`#0d1117`,border:`1px solid #30363d`,borderRadius:6,padding:`10px 14px`,fontSize:`0.8rem`,lineHeight:1.6,color:`#e6edf3`,margin:0,overflowX:`auto`,fontFamily:`JetBrains Mono, monospace`},children:e.code})]},e.title))})})]})}function qi({id:e,title:t,children:n}){return(0,j.jsxs)(`section`,{id:e,style:{marginBottom:52},children:[(0,j.jsx)(`h2`,{style:{fontSize:`1.375rem`,fontWeight:600,color:`#e6edf3`,marginBottom:16,marginTop:0},children:t}),n]})}function Ji({type:e,title:t,children:n}){let r={info:{bg:`rgba(53,114,165,0.1)`,border:`rgba(53,114,165,0.4)`,text:`#58a6ff`},tip:{bg:`rgba(63,185,80,0.1)`,border:`rgba(63,185,80,0.4)`,text:`#3fb950`},warn:{bg:`rgba(210,153,34,0.1)`,border:`rgba(210,153,34,0.4)`,text:`#d29922`}},i=r[e]||r.info;return(0,j.jsxs)(`div`,{style:{background:i.bg,border:`1px solid ${i.border}`,borderRadius:8,padding:`14px 18px`,marginTop:16},children:[t&&(0,j.jsx)(`div`,{style:{fontWeight:600,color:i.text,marginBottom:6,fontSize:`0.9rem`},children:t}),(0,j.jsx)(`div`,{style:{color:`#8b949e`,fontSize:`0.875rem`,lineHeight:1.65},children:n})]})}var Yi={fontSize:`2rem`,fontWeight:700,color:`#e6edf3`,letterSpacing:`-0.02em`,marginBottom:8,marginTop:0},Xi={color:`#8b949e`,marginBottom:40,lineHeight:1.7,fontSize:`1.0625rem`},Zi={color:`#8b949e`,lineHeight:1.75,marginBottom:16},Qi={color:`#8b949e`,lineHeight:2,paddingLeft:20,margin:`0 0 16px`},$i={background:`#21262d`,border:`1px solid #30363d`,borderRadius:4,padding:`1px 6px`,fontSize:`0.85em`,fontFamily:`JetBrains Mono, monospace`},ea={background:`#161b22`,border:`1px solid #30363d`,borderRadius:6,padding:`10px 14px`,fontSize:`0.8rem`,lineHeight:1.6,color:`#e6edf3`,margin:`10px 0 0`,overflowX:`auto`,whiteSpace:`pre`,fontFamily:`JetBrains Mono, monospace`},ta=[{id:`state-design`,label:`State Design`},{id:`graph-design`,label:`Graph Design`},{id:`llm-calls`,label:`LLM Calls`},{id:`rag`,label:`RAG`},{id:`memory`,label:`Memory`},{id:`error-handling`,label:`Error Handling`}];function na(){let{language:e}=M();return(0,j.jsxs)(P,{anchors:ta,children:[(0,j.jsx)(`h1`,{style:{fontSize:`2rem`,fontWeight:700,color:`#e6edf3`,letterSpacing:`-0.02em`,marginBottom:8,marginTop:0},children:`Best Practices`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:40,lineHeight:1.7},children:`Patterns that work well in production Flowgentra deployments.`}),(0,j.jsxs)(R,{id:`state-design`,title:`State Design`,children:[(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,lineHeight:1.7,paddingLeft:20,marginBottom:16},children:[(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Keep state flat.`}),` Nested dicts are harder to read and update. Prefer `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`state["user_name"]`}),` over `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`state["user"]["name"]`}),`.`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Use descriptive key names.`}),` `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`state["llm_response"]`}),` is clearer than `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`state["res"]`}),`. You'll thank yourself when debugging a trace.`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Don't store large objects in state.`}),` State is serialized to JSON for checkpointing. Keep it to strings, numbers, and small lists. Store large data (embeddings, binary files) outside state and reference them by ID.`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Document your state schema.`}),` Add a comment at the top of your graph file explaining what keys each node reads and writes. This becomes essential as graphs grow.`]})]}),(0,j.jsx)(N,{python:`# State schema:
# "question"     (str)  — user's input question
# "context_docs" (list) — retrieved documents
# "answer"       (str)  — final LLM response
# "sources"      (list) — source file paths`})]}),(0,j.jsxs)(R,{id:`graph-design`,title:`Graph Design`,children:[(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,lineHeight:1.7,paddingLeft:20,marginBottom:16},children:[(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`One node, one responsibility.`}),` If a node does three things, split it into three nodes. Smaller nodes are easier to retry, test, and replace.`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Name nodes as verbs.`}),` `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`fetch_data`}),`, `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`classify_intent`}),`, `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`generate_response`}),` — not `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`node_1`}),`, `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`handler`}),`, `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`step_3`}),`.`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Make routers explicit.`}),` Your conditional edge router should be a named function, not an inline lambda. Give it a docstring explaining the routing logic.`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsxs)(`strong`,{style:{color:`#e6edf3`},children:[`Always set `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`max_steps`}),`.`]}),` The default (1000) is high. For production agents, set it to a reasonable value (50–100) to catch runaway loops early.`]})]}),(0,j.jsx)(N,{python:`def quality_router(state):
    """Route to 'retry' if score is below threshold, else 'finalize'."""
    if (state.get("score") or 0) < 0.8:
        return "retry"
    return "finalize"`})]}),(0,j.jsx)(R,{id:`llm-calls`,title:`LLM Calls`,children:(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,lineHeight:1.7,paddingLeft:20,marginBottom:16},children:[(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Don't call the LLM in a loop without a termination condition.`}),` ReAct agents must have a maximum step count. Set it via `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`builder.set_max_steps(n)`}),`.`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Use low temperature for tool-calling and reasoning.`}),` `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`temperature=0.0–0.3`}),` produces more reliable function calls. Use `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`0.7+`}),` only for creative writing tasks.`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Add retries to all LLM clients.`}),` Networks fail. Rate limits happen. `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`client.with_retry(max_retries=3)`}),` costs almost nothing and prevents a lot of pain.`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Use caching in development.`}),` `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`client.cached()`}),` prevents re-running the same prompts while you're iterating. Disable it in production if you need fresh responses.`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Check token usage.`}),` Use `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`client.chat_with_usage()`}),` to track costs during development. It's easy to accidentally build a workflow that costs $5 per run.`]})]})}),(0,j.jsx)(R,{id:`rag`,title:`RAG`,children:(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,lineHeight:1.7,paddingLeft:20,marginBottom:16},children:[(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Chunk size matters.`}),` Too small (< 200 chars) → each chunk lacks context. Too large (> 1000 chars) → chunks contain irrelevant content. Start at 400–600 chars.`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Always use overlap.`}),` A 50–100 char overlap between chunks prevents splitting a sentence mid-thought.`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Match embedding model with your content type.`}),` `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`text-embedding-3-small`}),` works for most text. For code, consider a code-specific model.`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Hybrid search > pure semantic for most cases.`}),` Pure semantic can miss exact keyword matches. Add 20–40% BM25 weight as a baseline.`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Test retrieval quality independently.`}),` Before building the full RAG pipeline, manually test that `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`retriever.retrieve(question)`}),` returns the right chunks. If retrieval is wrong, the LLM can't fix it.`]})]})}),(0,j.jsx)(R,{id:`memory`,title:`Memory`,children:(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,lineHeight:1.7,paddingLeft:20,marginBottom:16},children:[(0,j.jsxs)(`li`,{children:[(0,j.jsxs)(`strong`,{style:{color:`#e6edf3`},children:[`Use `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`ConversationMemory`}),` with a cap.`]}),` Unlimited memory is dangerous — 100+ messages will exceed the LLM's context window. Set `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`max_messages=50`}),` as a safe default.`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsxs)(`strong`,{style:{color:`#e6edf3`},children:[(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`SummaryMemory`}),` for long sessions.`]}),` If users have conversations that run for hours, `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`TokenBufferMemory`}),` will drop important early context. `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`SummaryMemory`}),` preserves it in compressed form.`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Don't store memory in state.`}),` Conversation history shouldn't be in the graph state. Keep it in a `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`ConversationMemory`}),` object that lives outside the graph and is loaded at the start of each turn.`]})]})}),(0,j.jsxs)(R,{id:`error-handling`,title:`Error Handling`,children:[(0,j.jsx)(`ul`,{style:{color:`#8b949e`,lineHeight:1.7,paddingLeft:20,marginBottom:16},children:(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Use state for errors, not exceptions.`}),` In a graph, raising an exception terminates the run. Use a state key (`,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`state["error"]`}),`) so the graph can route to an error-handling node.`]})}),(0,j.jsx)(N,{python:`def risky_node(state):
    try:
        state["result"] = do_something()
    except Exception as e:
        state["error"] = str(e)
    return state

def router(state):
    return "error_node" if state.get("error") else "next_node"`})]})]})}function R({id:e,title:t,children:n}){return(0,j.jsxs)(`section`,{id:e,style:{marginBottom:48},children:[(0,j.jsx)(`h2`,{style:{fontSize:`1.5rem`,fontWeight:600,color:`#e6edf3`,marginBottom:16,marginTop:0},children:t}),n]})}var ra=[{id:`general`,label:`General`},{id:`installation`,label:`Installation`},{id:`graphs`,label:`Graphs`},{id:`llm`,label:`LLM`},{id:`memory`,label:`Memory & Checkpointing`}];function ia(){let{language:e}=M();return(0,j.jsxs)(P,{anchors:ra,children:[(0,j.jsx)(`h1`,{style:{fontSize:`2rem`,fontWeight:700,color:`#e6edf3`,letterSpacing:`-0.02em`,marginBottom:8,marginTop:0},children:`FAQ & Troubleshooting`}),(0,j.jsxs)(aa,{id:`general`,title:`General`,children:[(0,j.jsx)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`What's the difference between Flowgentra and LangChain/LangGraph?`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`LangGraph is the closest comparison. Key differences:`}),(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,lineHeight:1.7,paddingLeft:20,marginBottom:16},children:[(0,j.jsx)(`li`,{children:`Flowgentra's execution engine is written in Rust — significantly faster for CPU-bound operations and concurrent workloads`}),(0,j.jsx)(`li`,{children:`Flowgentra has a native Python API (via PyO3) rather than a pure-Python reimplementation`}),(0,j.jsx)(`li`,{children:`Both use the same graph-based model with state, nodes, and edges`}),(0,j.jsx)(`li`,{children:`LangGraph has a larger ecosystem of integrations; Flowgentra is newer`})]}),(0,j.jsx)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Do I need to know Rust to use the Python library?`}),(0,j.jsxs)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:[`No. The Python library is a complete, standalone package. You install it with `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`pip`}),` and write Python. You only need Rust if you're building from source or contributing to the library itself.`]}),(0,j.jsx)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Can I use both Rust and Python in the same project?`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Yes. The Rust engine is used by both, but you can't directly share graphs between them at runtime. You can, however, use them side-by-side: run performance-critical parts in Rust and prototyping/orchestration in Python.`})]}),(0,j.jsxs)(aa,{id:`installation`,title:`Installation`,children:[(0,j.jsxs)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:[(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`pip install flowgentra-ai`}),` fails with "no matching distribution found"`]}),(0,j.jsxs)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:[`Check your Python version: `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`python --version`}),`. Flowgentra requires Python 3.9+. If you're on an older version or an unsupported platform (e.g., 32-bit Linux), you'll need to build from source.`]}),(0,j.jsxs)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:[(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`maturin develop`}),` fails with "linker not found"`]}),(0,j.jsxs)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:[`You need a C linker. On Ubuntu/Debian: `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`sudo apt install build-essential`}),`. On macOS: `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`xcode-select --install`}),`.`]}),(0,j.jsxs)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:[`ImportError: `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`flowgentra_ai._native`}),` not found`]}),(0,j.jsxs)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:[`The native extension wasn't compiled. Run `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`maturin develop`}),` again from the `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`flowgentra-ai-py`}),` directory.`]})]}),(0,j.jsxs)(aa,{id:`graphs`,title:`Graphs`,children:[(0,j.jsx)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`My graph runs forever / hits max_steps`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Your graph has a loop with no exit condition. Check that:`}),(0,j.jsxs)(`ol`,{style:{color:`#8b949e`,lineHeight:1.7,paddingLeft:20,marginBottom:16},children:[(0,j.jsxs)(`li`,{children:[`Your conditional edge router can return `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`"__end__"`}),` (or use `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`END`}),`)`]}),(0,j.jsx)(`li`,{children:`The condition that breaks the loop can actually be reached`}),(0,j.jsxs)(`li`,{children:[`You've set `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`builder.set_max_steps(n)`}),` to a reasonable value`]})]}),(0,j.jsxs)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:[(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`KeyError: "my_key"`}),` inside a node`]}),(0,j.jsxs)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:[`You used `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`state["my_key"]`}),` but the key wasn't set. Use `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`state.get("my_key")`}),` (returns `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`None`}),` instead of raising) or check `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`"my_key" in state`}),` first.`]}),(0,j.jsx)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`"Unknown node: xyz" error when building the graph`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Your router returned a node name that doesn't exist. Common causes:`}),(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,lineHeight:1.7,paddingLeft:20,marginBottom:16},children:[(0,j.jsx)(`li`,{children:`Typo in the node name`}),(0,j.jsx)(`li`,{children:`The node was added to the builder but with a different name`}),(0,j.jsx)(`li`,{children:`The router returns a string that varies at runtime — check all possible return values`})]}),(0,j.jsx)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Graph compiles but never terminates (no error)`}),(0,j.jsxs)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:[`You have a cycle with no exit. Make sure at least one path from every node eventually reaches `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`END`}),` / `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`"__end__"`}),`.`]})]}),(0,j.jsxs)(aa,{id:`llm`,title:`LLM`,children:[(0,j.jsx)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`LLM calls fail with rate limit errors`}),(0,j.jsxs)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:[`Add retries: `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`client.with_retry(max_retries=5)`}),`. The retry client uses exponential backoff by default.`]}),(0,j.jsx)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Responses are inconsistent / not following instructions`}),(0,j.jsxs)(`ol`,{style:{color:`#8b949e`,lineHeight:1.7,paddingLeft:20,marginBottom:16},children:[(0,j.jsxs)(`li`,{children:[`Lower the temperature (try `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`0.1–0.3`}),` for structured tasks)`]}),(0,j.jsx)(`li`,{children:`Check your system prompt — it should be clear and specific`}),(0,j.jsxs)(`li`,{children:[`For structured output, use `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`ResponseFormat.json_schema(...)`}),` instead of asking "respond in JSON"`]})]}),(0,j.jsx)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Tool calls are malformed / arguments are missing`}),(0,j.jsxs)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:[`Make sure your `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`ToolDefinition.parameters`}),` has the correct JSON Schema, including `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`"required"`}),` for mandatory fields. The LLM ignores schema constraints it doesn't know about.`]}),(0,j.jsxs)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:[(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`chat_with_tools`}),` returns a message without tool calls`]}),(0,j.jsxs)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:[`The LLM decided it doesn't need the tools. This is expected behavior — it might answer directly. Check `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`response.has_tool_calls()`}),` before processing tool calls.`]})]}),(0,j.jsxs)(aa,{id:`memory`,title:`Memory & Checkpointing`,children:[(0,j.jsx)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`How do I clear a user's conversation history?`}),(0,j.jsx)(N,{python:`memory.clear("user-thread-id")`}),(0,j.jsx)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Checkpoints are growing unboundedly on disk`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Implement periodic cleanup. Delete old checkpoint files from the checkpoint directory based on age or thread ID. The checkpoint format is plain JSON files — you can safely delete them.`})]})]})}function aa({id:e,title:t,children:n}){return(0,j.jsxs)(`section`,{id:e,style:{marginBottom:48},children:[(0,j.jsx)(`h2`,{style:{fontSize:`1.5rem`,fontWeight:600,color:`#e6edf3`,marginBottom:16,marginTop:0},children:t}),n]})}var oa=[{id:`state-graph`,topic:`state-graph`,name:`StateGraph`,summary:`Core graph builder. Define nodes, edges, and entry points to compose your agent workflow.`,rust:{signature:`StateGraph::<S>::builder() -> GraphBuilder<S>`,description:"Creates a typed graph builder. `S` must implement the `State` trait (use `#[derive(State)]`). For config-driven agents, prefer `from_config_path()` instead.",params:[{name:`S`,type:`impl State`,description:`Generic state type shared across all nodes.`}],returns:`GraphBuilder<S>`,example:`use flowgentra_ai::prelude::*;

#[derive(State, Default, Clone)]
struct MyState {
    #[reducer(Append)]
    messages: Vec<String>,
    turn: u32,
}

let graph = StateGraph::<MyState>::builder()
    .add_node("greet",   greet_node)
    .add_node("respond", respond_node)
    .add_edge("greet",   "respond")
    .set_entry("greet")
    .set_finish("respond")
    .build()?;`},python:{signature:`StateGraph(state_schema) -> GraphBuilder`,description:`Creates a graph builder. Accepts TypedDict or a plain dict schema. Compatible with LangGraph-style API.`,params:[{name:`state_schema`,type:`type | TypedDict`,description:`Class or TypedDict that defines the shared state shape.`}],returns:`GraphBuilder — call .add_node(), .add_edge(), .compile()`,example:`from flowgentra_ai.graph import StateGraph, END
from typing import TypedDict, List

class MyState(TypedDict):
    messages: List[str]
    turn: int

builder = StateGraph(MyState)
builder.add_node("greet",   greet_node)
builder.add_node("respond", respond_node)
builder.add_edge("greet",   "respond")
builder.set_entry_point("greet")
graph = builder.compile()`}},{id:`derive-state`,topic:`state-graph`,name:`#[derive(State)] + Reducers`,summary:`Compile-time proc-macro that generates a typed Update struct and per-field merge reducers for your state.`,rust:{signature:`#[derive(State, Clone, Debug, Serialize, Deserialize)]
struct MyState { ... }`,description:"Generates a `MyStateUpdate` struct where every field is `Option<T>`. Per-field reducers control how concurrent updates merge. Available reducers: `Append`, `Sum`, `MergeMap`, `Min`, `Max`, or custom.",params:[{name:`#[reducer(Append)]`,type:`field attr`,description:`Appends new items to a Vec field instead of replacing.`},{name:`#[reducer(Sum)]`,type:`field attr`,description:`Adds numeric values together.`},{name:`#[reducer(MergeMap)]`,type:`field attr`,description:`Merges HashMap entries (new keys win).`},{name:`#[reducer(Min)] / Max`,type:`field attr`,description:`Keeps min or max numeric value.`}],returns:`Implements the State trait; generates {Name}Update struct`,example:`#[derive(State, Default, Clone, Debug, Serialize, Deserialize)]
struct AgentState {
    /// Appends new messages instead of replacing the whole vec
    #[reducer(Append)]
    messages: Vec<String>,

    /// Sums token counts from parallel branches
    #[reducer(Sum)]
    total_tokens: u64,

    /// Merges metadata from different nodes
    #[reducer(MergeMap)]
    metadata: std::collections::HashMap<String, String>,

    /// Plain replace — last write wins (default)
    current_step: String,
}`},python:{signature:`class MyState(TypedDict):
    field: type`,description:"In Python, use TypedDict for static typing. Reducers are set programmatically via `add_reducer()` on the builder, or fields with `Annotated[list, operator.add]` are auto-merged.",params:[{name:`TypedDict`,type:`type`,description:`Recommended. Provides IDE autocompletion and runtime hints.`},{name:`Annotated[list, operator.add]`,type:`field type`,description:`Auto-appends list fields from parallel branches.`}],returns:`Dict-like state passed between nodes`,example:`from typing import TypedDict, Annotated, List
import operator

class AgentState(TypedDict):
    # Annotated with operator.add → auto-appended across branches
    messages: Annotated[List[str], operator.add]
    total_tokens: int
    current_step: str`}},{id:`register-handler`,topic:`handlers-config`,name:`#[register_handler] / @register_handler`,summary:`Mark a function as an auto-discoverable agent handler. Used with from_config_path() — no manual wiring needed.`,rust:{signature:`#[register_handler]
pub async fn my_handler(state: DynState) -> Result<DynState>`,description:"Proc-macro that registers the function into a global inventory. `from_config_path()` auto-discovers all registered handlers at startup. The function name must match the `handler:` field in your YAML node config.",params:[{name:`state`,type:`DynState`,description:`Current graph state. Read with state.get("key"), write with state.set("key", json!(...)).`}],returns:`Result<DynState> — return the (modified) state`,example:`use flowgentra_ai::prelude::*;
use serde_json::json;

// The function name "fetch_data" must match handler: fetch_data in config.yaml
#[register_handler]
pub async fn fetch_data(state: DynState) -> Result<DynState> {
    let url = state.get("url")
        .and_then(|v| v.as_str())
        .unwrap_or("https://example.com");

    let body = reqwest::get(url).await?.text().await?;
    state.set("content", json!(body));
    Ok(state)
}

#[register_handler]
pub async fn summarize(state: DynState) -> Result<DynState> {
    let content = state.get("content")
        .and_then(|v| v.as_str())
        .unwrap_or("");
    state.set("summary", json!(&content[..200.min(content.len())]));
    Ok(state)
}

// main.rs — no manual handler wiring!
#[tokio::main]
async fn main() -> Result<()> {
    let mut agent = from_config_path("config.yaml")?;
    agent.state.set("url", json!("https://example.com"));
    let result = agent.run().await?;
    println!("{}", result.get("summary").unwrap());
    Ok(())
}`},python:{signature:`@register_handler
def my_handler(state: dict) -> dict`,description:"Decorator that marks a Python function as an agent handler. The module must be specified via `python_handler_module:` in config.yaml so it is auto-imported at startup. The function name must match the `handler:` field in the YAML node.",params:[{name:`state`,type:`dict`,description:`Current agent state. Return a full or partial dict (merged into state).`}],returns:`dict — returned state is merged into current state`,example:`# handlers.py
from flowgentra_ai.agent import register_handler

@register_handler
def fetch_data(state: dict) -> dict:
    import httpx
    r = httpx.get(state.get("url", "https://example.com"))
    return {**state, "content": r.text}

@register_handler
def summarize(state: dict) -> dict:
    content = state.get("content", "")
    return {**state, "summary": content[:200]}

# config.yaml must include:
#   python_handler_module: handlers

# main.py
from flowgentra_ai.agent import Agent

agent = Agent.from_config_path("config.yaml")
import asyncio
result = asyncio.run(agent.run({"url": "https://example.com"}))
print(result["summary"])`}},{id:`from-config-path`,topic:`handlers-config`,name:`from_config_path / Agent.from_config_path`,summary:`The primary production API. Load a fully configured agent from YAML — handlers are auto-discovered, no manual wiring.`,rust:{signature:`from_config_path(config_path: &str) -> Result<Agent>`,description:"Top-level convenience function (in `prelude`). Reads the YAML file, validates the graph, and wires all handlers discovered via `#[register_handler]`. LLM client is created from the `llm:` block. Prefer this over `Agent::from_config`.",params:[{name:`config_path`,type:`&str`,description:`Path to the agent config YAML file.`}],returns:`Result<Agent>`,example:`use flowgentra_ai::prelude::*;

#[register_handler]
pub async fn process(state: DynState) -> Result<DynState> {
    let input = state.get("input").and_then(|v| v.as_str()).unwrap_or("");
    state.set("output", serde_json::json!(input.to_uppercase()));
    Ok(state)
}

#[tokio::main]
async fn main() -> Result<()> {
    let mut agent = from_config_path("agent.yaml")?;
    agent.state.set("input", serde_json::json!("hello world"));

    let result = agent.run().await?;
    println!("{}", result.get("output").unwrap());
    // "HELLO WORLD"
    Ok(())
}`},python:{signature:`Agent.from_config_path(path: str) -> Agent`,description:"Class method that loads the YAML config. If `python_handler_module` is set, that module is imported and `@register_handler` functions are auto-discovered. Also supports inline `python.module:function` paths in node `handler:` fields.",params:[{name:`path`,type:`str`,description:`Path to the agent config YAML file.`}],returns:`Agent`,example:`# agent.yaml
# python_handler_module: handlers   ← auto-imports handlers.py

from flowgentra_ai.agent import Agent
import asyncio

async def main():
    agent = Agent.from_config_path("agent.yaml")
    result = await agent.run({"input": "hello world"})
    print(result["output"])  # HELLO WORLD

asyncio.run(main())`}},{id:`agent-run`,topic:`memory`,name:`agent.run / agent.run_with_thread`,summary:`Execute the agent. Use run() for stateless execution, run_with_thread() for persistent multi-turn conversations with checkpointing.`,rust:{signature:`agent.run() -> Result<DynState>
agent.run_with_thread(thread_id: &str) -> Result<DynState>`,description:"`run()` executes the graph once. `run_with_thread()` loads the last checkpoint for `thread_id` before execution and saves state after each node — enabling multi-turn conversations. Requires a checkpointer to be set (via config or `with_checkpointer()`).",params:[{name:`thread_id`,type:`&str`,description:`Unique identifier for a conversation thread. Same ID resumes the conversation.`}],returns:`Result<DynState> — the final state after execution`,example:`use flowgentra_ai::prelude::*;
use flowgentra_ai::core::memory::MemoryCheckpointer;
use std::sync::Arc;

#[tokio::main]
async fn main() -> Result<()> {
    let mut agent = from_config_path("agent.yaml")?
        .with_checkpointer(Arc::new(MemoryCheckpointer::new()));

    // Turn 1
    agent.state.set("user_input", serde_json::json!("My name is Alice."));
    agent.run_with_thread("thread-42").await?;

    // Turn 2 — previous state is reloaded automatically
    agent.state.set("user_input", serde_json::json!("What's my name?"));
    let result = agent.run_with_thread("thread-42").await?;
    println!("{}", result.get("reply").unwrap());
    // → "Your name is Alice."
    Ok(())
}`},python:{signature:`await agent.run(initial_state: dict) -> dict
await agent.run_with_thread(thread_id: str, initial_state: dict) -> dict`,description:"`run()` is a one-shot execution. `run_with_thread()` persists state between calls using a checkpointer. Both are async — use `await` or `asyncio.run()`.",params:[{name:`initial_state`,type:`dict`,description:`Initial state values. Merged with any previously saved checkpoint.`},{name:`thread_id`,type:`str`,description:`Unique ID for this conversation thread.`}],returns:`dict — final state after execution`,example:`from flowgentra_ai.agent import Agent
from flowgentra_ai.memory import FileCheckpointer
import asyncio

async def main():
    checkpointer = FileCheckpointer("./checkpoints")
    agent = Agent.from_config_path("agent.yaml",
                                   checkpointer=checkpointer)

    # Turn 1
    await agent.run_with_thread("user-42",
        {"user_input": "My name is Alice."})

    # Turn 2 — state is automatically reloaded
    result = await agent.run_with_thread("user-42",
        {"user_input": "What's my name?"})
    print(result["reply"])  # "Your name is Alice."

asyncio.run(main())`}},{id:`builtin-nodes`,topic:`builtin-nodes`,name:`Built-in Nodes`,summary:`Ready-to-use node types: LLMNode, ToolNode, RetryNode, TimeoutNode, HumanInTheLoopNode, ConditionalRouter. Add to any graph without writing handler functions.`,rust:{signature:`LLMNode::new(name)
ToolNode::new(name, tool_name, method)
RetryNode::new(name).with_max_retries(n).with_inner_node(node)
TimeoutNode::new(name, timeout_ms).with_inner_node(node)
HumanInTheLoopNode::new(name, prompt).require_approval(true)
ConditionalRouter::new(name).register_condition("name", |state| ...).add_rule("name", "target")`,description:"These nodes implement `PluggableNode<DynState>` and can be added to graphs directly. Use `node_type:` in YAML config to activate them without any handler code.",params:[{name:`LLMNode`,type:`PluggableNode`,description:`Sends prompt to an LLM, stores response in state.`},{name:`ToolNode`,type:`PluggableNode`,description:`Executes an MCP tool, stores result in state.`},{name:`RetryNode`,type:`PluggableNode`,description:`Wraps any node with exponential backoff retry (via Tower).`},{name:`TimeoutNode`,type:`PluggableNode`,description:`Enforces a timeout on a wrapped node. on_timeout: "error" | "skip" | "default_value".`},{name:`HumanInTheLoopNode`,type:`PluggableNode`,description:`Pauses for human approval. Sets _human_approved and _human_timestamp in state.`},{name:`ConditionalRouter`,type:`PluggableNode`,description:`Evaluates conditions and sets _next_node in state.`}],returns:`NodeOutput<DynState>`,example:`use flowgentra_ai::prelude::*;
use flowgentra_ai::core::node::builtin_nodes::*;

// Retry node wrapping a custom handler
let inner = MyApiNode::new("api_call");
let retry = RetryNode::new("retry_api")
    .with_max_retries(3)
    .with_inner_node(Box::new(inner));

// Timeout node — fail fast if > 5 seconds
let timed = TimeoutNode::new("timed_op", 5000)
    .with_inner_node(Box::new(slow_node));

// Human-in-the-loop for sensitive actions
let approval = HumanInTheLoopNode::new(
    "approve_payment",
    "Please review and approve this payment"
)
.add_editable_field("amount")
.require_approval(true);

// Conditional router
let router = ConditionalRouter::new("intent_router")
    .register_condition("is_urgent", |state: &DynState| {
        state.get("priority")
            .and_then(|v| v.as_str())
            == Some("high")
    })
    .add_rule("is_urgent", "fast_path")
    .add_rule("default",   "slow_path");`},python:{signature:`from flowgentra_ai.nodes import RetryNode, TimeoutNode

RetryNode(max_retries=3, backoff_ms=500)
TimeoutNode(timeout_ms=5000, on_timeout="error")`,description:"Python exposes RetryNode and TimeoutNode directly. LLMNode, ToolNode, HumanInTheLoop, and ConditionalRouter are configured via `node_type:` in YAML — no Python code needed.",params:[{name:`RetryNode(max_retries, backoff_ms)`,type:`node`,description:`Retries the wrapped node on failure with exponential backoff.`},{name:`TimeoutNode(timeout_ms, on_timeout)`,type:`node`,description:`on_timeout: "error" | "skip" | "default_value"`}],returns:`Node instance — pass to builder.add_node()`,example:`from flowgentra_ai.nodes import RetryNode, TimeoutNode
from flowgentra_ai.graph import StateGraph

builder = StateGraph(dict)

# Wrap your handler with retry logic
retry = RetryNode(max_retries=3, backoff_ms=500)
builder.add_node("fetch", retry.wrap(fetch_data))

# Or configure via YAML:
# nodes:
#   - name: fetch
#     handler: fetch_data
#     node_type: retry
#     config:
#       max_retries: 3
#       backoff_ms: 500

# Human-in-the-loop (YAML only):
# nodes:
#   - name: approve
#     node_type: human_in_the_loop
#     config:
#       prompt: "Approve this action?"
#       require_approval: true
#       editable_fields: [amount]`}},{id:`memory`,topic:`memory`,name:`Memory & Checkpointing`,summary:`Persist state between runs with checkpointers, and manage conversation history with ConversationMemory. Both configurable via YAML or code.`,rust:{signature:`// Checkpointer
MemoryCheckpointer::new()
FileCheckpointer::new(path)

// Conversation Memory
InMemoryConversationMemory::new()
    .with_max_messages(20)
    .with_system_prompt("You are helpful")
    .with_summarize_threshold(4000)

TokenBufferMemory::new(max_tokens)
SummaryMemory::new(llm_client, config)

// Agent wiring
agent.with_checkpointer(Arc::new(checkpointer))
agent.with_conversation_memory(Arc::new(memory))
agent.run_with_thread("thread-id").await`,description:`**Checkpointer** saves/loads full state per thread — enables resuming long workflows. **ConversationMemory** stores message history per thread with optional sliding-window, token-buffer, or summarization strategies.`,params:[{name:`MemoryCheckpointer`,type:`in-process`,description:`In-memory checkpointer (lost on restart). Good for testing.`},{name:`FileCheckpointer`,type:`persistent`,description:`Saves state to disk. Survives restarts.`},{name:`InMemoryConversationMemory`,type:`in-process`,description:`Stores messages per thread in a HashMap.`},{name:`TokenBufferMemory`,type:`buffer`,description:`Keeps last N tokens worth of messages.`},{name:`SummaryMemory`,type:`compressed`,description:`Summarizes old messages via LLM when threshold is reached.`}],returns:`State persisted and loaded transparently`,example:`use flowgentra_ai::prelude::*;
use flowgentra_ai::core::memory::{
    InMemoryConversationMemory, MemoryCheckpointer
};
use std::sync::Arc;

#[tokio::main]
async fn main() -> Result<()> {
    let memory = InMemoryConversationMemory::new()
        .with_max_messages(20)           // sliding window
        .with_system_prompt("You are a helpful assistant.".into());

    let checkpointer = MemoryCheckpointer::new();

    let mut agent = from_config_path("agent.yaml")?
        .with_checkpointer(Arc::new(checkpointer))
        .with_conversation_memory(Arc::new(memory));

    // Turn 1
    agent.add_message("user", "Hello! My name is Alice.")?;
    agent.run_with_thread("session-1").await?;

    // Turn 2 — memory is loaded automatically
    agent.add_message("user", "What's my name?")?;
    let result = agent.run_with_thread("session-1").await?;
    println!("{}", result.get("reply").unwrap());
    Ok(())
}`},python:{signature:`from flowgentra_ai.memory import (
    ConversationMemory,
    FileCheckpointer,
    TokenBufferMemory,
    SummaryMemory,
)`,description:"Python exposes the same memory types. Configure in YAML under `memory:` to avoid any Python setup code.",params:[{name:`ConversationMemory`,type:`in-process`,description:`In-memory message history per thread.`},{name:`FileCheckpointer(path)`,type:`persistent`,description:`Disk-backed state persistence.`},{name:`TokenBufferMemory(max_tokens)`,type:`buffer`,description:`Token-bounded message history.`},{name:`SummaryMemory(config)`,type:`compressed`,description:`LLM-based summarization of old messages.`}],returns:`Wired automatically when passed to Agent or set in YAML`,example:`from flowgentra_ai.agent import Agent
from flowgentra_ai.memory import ConversationMemory, FileCheckpointer
import asyncio

async def multi_turn():
    checkpointer = FileCheckpointer("./checkpoints")
    memory = ConversationMemory(max_messages=20)

    agent = Agent.from_config_path("agent.yaml",
        checkpointer=checkpointer,
        conversation_memory=memory)

    # Turn 1
    r1 = await agent.run_with_thread("alice",
        {"user_input": "Hi, I'm Alice."})

    # Turn 2
    r2 = await agent.run_with_thread("alice",
        {"user_input": "What's my name?"})
    print(r2["reply"])  # "Your name is Alice."

asyncio.run(multi_turn())

# Or configure entirely in YAML:
# memory:
#   checkpointer:
#     type: memory   # or "file" with path: ./checkpoints
#   conversation:
#     enabled: true
#     max_messages: 20
#     state_key: messages`}},{id:`predefined-agents`,topic:`agents`,name:`Predefined Agent Types`,summary:`High-level agent presets — ZeroShotReAct, FewShotReAct, Conversational, and MemoryAwareAgent. Build agents in a few lines without defining a graph.`,rust:{signature:`AgentBuilder::new(AgentType::ZeroShotReAct)
    .with_llm_config("gpt-4")
    .with_tool(ToolSpec::new("search", "Search the web"))
    .build()?

AgentBuilder::new(AgentType::Conversational)
    .with_memory_steps(10)
    .with_system_prompt("You are a helpful assistant")
    .build()?`,description:"Three built-in agent personalities. All follow the ReAct (Reason + Act) paradigm. `ZeroShotReAct` is general-purpose; `FewShotReAct` adds example demonstrations; `Conversational` focuses on multi-turn dialogue with memory.",params:[{name:`AgentType::ZeroShotReAct`,type:`AgentType`,description:`General reasoning + tool use. No example demonstrations needed.`},{name:`AgentType::FewShotReAct`,type:`AgentType`,description:`ReAct with example traces for better few-shot performance.`},{name:`AgentType::Conversational`,type:`AgentType`,description:`Multi-turn chat agent with built-in memory.`}],returns:`Box<dyn Agent>`,example:`use flowgentra_ai::core::agents::{AgentBuilder, AgentType, ToolSpec};

let search_tool = ToolSpec::new("search", "Search the web for information")
    .with_parameter("query", "string")
    .required("query");

let calc_tool = ToolSpec::new("calculator", "Perform math calculations")
    .with_parameter("expression", "string")
    .required("expression");

// Zero-shot ReAct agent
let mut agent = AgentBuilder::new(AgentType::ZeroShotReAct)
    .with_llm_config("gpt-4o")
    .with_tool(search_tool)
    .with_tool(calc_tool)
    .build()?;

// Conversational agent with 10-message memory window
let mut conv_agent = AgentBuilder::new(AgentType::Conversational)
    .with_memory_steps(10)
    .with_system_prompt("You are a friendly assistant.")
    .build()?;`},python:{signature:`# ── Way 1: Agent.create() — model name string, quick setup ──────────────────
from flowgentra_ai.agent import Agent

agent = Agent.create(
    agent_type="zero_shot_react",   # or "few_shot_react" | "conversational"
    model="gpt-4o",                 # model name string
    memory_steps=10,
)
result = agent.run_with_input("What is 42 × 1_000_000?")  # → {"result": str}

# ── Way 2: AgentBuilder → GraphBasedAgent — full builder API ─────────────────
from flowgentra_ai.agent import AgentBuilder, AgentType, ToolSpec

builder = AgentBuilder(AgentType.zero_shot_react())
builder.with_name("my_agent")
builder.with_llm_config("gpt-4o")
builder.with_system_prompt("You are helpful.")
builder.with_tool(tool_spec)        # ToolSpec objects
builder.with_memory_steps(10)
builder.with_temperature(0.7)
builder.with_max_tokens(1024)
builder.with_retries(3)
agent = builder.build_graph()       # → GraphBasedAgent
result = agent.execute_input("Hello")  # → str

# ── Way 3: Agent.from_config_path — fully YAML-driven ────────────────────────
agent = Agent.from_config_path("config.yaml")
state = agent.run()
state = agent.run_with_thread("thread_id")`,description:"Three ways to build a predefined agent (`zero_shot_react`, `few_shot_react`, `conversational`). **Way 1** (`Agent.create`) takes a model name string and returns an `Agent` — call `run_with_input(str)` on it. **Way 2** (`AgentBuilder`) exposes the full builder API with temperature, tools, retries, etc. — call `build_graph()` then `execute_input(str)`. **Way 3** (`Agent.from_config_path`) is fully YAML-driven — call `run()` or `run_with_thread(id)`.",params:[{name:`Agent.create(agent_type, model?, memory_steps?)`,type:`classmethod → Agent`,description:`agent_type: "zero_shot_react" | "few_shot_react" | "conversational". model: model name string (default "gpt-4"). Returns Agent — call run_with_input(str).`},{name:`agent.run_with_input(str)`,type:`→ dict`,description:`Run Agent created via Agent.create(). Returns {"result": str}.`},{name:`AgentType.zero_shot_react()`,type:`→ AgentType`,description:`General-purpose ReAct (Reason+Act). No example demonstrations.`},{name:`AgentType.few_shot_react()`,type:`→ AgentType`,description:`ReAct with example traces for better few-shot performance.`},{name:`AgentType.conversational()`,type:`→ AgentType`,description:`Multi-turn chat agent with built-in memory.`},{name:`builder.with_llm_config(model)`,type:`fn`,description:`Set model name string for AgentBuilder.`},{name:`builder.with_temperature(f) / with_max_tokens(n)`,type:`fn`,description:`Fine-tune LLM parameters (AgentBuilder only).`},{name:`builder.with_tool(ToolSpec)`,type:`fn`,description:`Add a tool. ToolSpec(name, desc) + .add_parameter(name, type) + .set_required(name).`},{name:`builder.with_memory_steps(n)`,type:`fn`,description:`Conversation memory window (number of turns to retain).`},{name:`builder.with_retries(n)`,type:`fn`,description:`Retry count on node failure.`},{name:`builder.build_graph()`,type:`→ GraphBasedAgent`,description:`Compile AgentBuilder. Raises on misconfiguration.`},{name:`graph_agent.execute_input(str)`,type:`→ str`,description:`Run GraphBasedAgent with text input, returns text response.`},{name:`agent.run() / run_with_thread(id)`,type:`→ dict`,description:`Execute config-based Agent (Way 3). run_with_thread enables persistent memory.`}],returns:`Agent (Way 1 & 3) | GraphBasedAgent (Way 2)`,example:`import os
from flowgentra_ai.agent import Agent, AgentBuilder, AgentType, ToolSpec

# ── Way 1: Agent.create — model name string, simplest API ───────────────────
agent = Agent.create(
    agent_type="zero_shot_react",
    model="claude-3-5-haiku-20241022",
    memory_steps=10,
)
result = agent.run_with_input("What is 42 × 1_000_000?")
print(result["result"])

# ── Way 2: AgentBuilder — full builder, tool + retry control ────────────────
search = ToolSpec("search", "Search the web")
search.add_parameter("query", "string")
search.set_required("query")

builder = AgentBuilder(AgentType.zero_shot_react())
builder.with_name("research_agent")
builder.with_llm_config("gpt-4o")
builder.with_system_prompt("You are a research assistant.")
builder.with_tool(search)
builder.with_retries(2)
graph_agent = builder.build_graph()

print(graph_agent.execute_input("What is the capital of Japan?"))

# Conversational with memory
conv = AgentBuilder(AgentType.conversational())
conv.with_llm_config("gpt-4o-mini")
conv.with_memory_steps(10)
conv_agent = conv.build_graph()
print(conv_agent.execute_input("Hi, I'm Alice."))
print(conv_agent.execute_input("What's my name?"))  # remembers

# ── Way 3: YAML config ───────────────────────────────────────────────────────
agent = Agent.from_config_path("agent.yaml")
state = agent.run_with_thread("session_42")`}},{id:`llm-clients`,topic:`llm`,name:`LLM Clients & Providers`,summary:`Built-in clients for 7 LLM providers, plus CachedLLMClient, FallbackLLMClient, and RetryLLMClient wrappers.`,rust:{signature:`// Direct construction
OpenAIClient::new(api_key, model)
AnthropicClient::new(api_key, model)
OllamaClient::new(model)              // Local, no key
AzureOpenAIClient::new(...)
GroqClient::new(api_key, model)
MistralClient::new(api_key, model)
HuggingFaceClient::new(api_key, model)

// Wrappers
CachedLLMClient::new(inner)
FallbackLLMClient::new(vec![primary, backup])
RetryLLMClient::new(inner, max_retries)`,description:"All implement the `LLMClient` trait: `chat()`, `chat_stream()`, `chat_with_tools()`, `chat_structured()`. Streaming returns a `tokio::sync::mpsc::Receiver<String>`. Structured output uses `ResponseFormat::Json` or `ResponseFormat::JsonSchema`.",params:[{name:`chat(messages)`,type:`async fn`,description:`Standard chat completion.`},{name:`chat_stream(messages)`,type:`async fn`,description:`Streaming response via mpsc channel.`},{name:`chat_with_tools(messages, tools)`,type:`async fn`,description:`Function/tool calling — response may contain ToolCall objects.`},{name:`chat_structured(messages)`,type:`async fn`,description:`Forces JSON output, parses to serde_json::Value.`},{name:`chat_with_usage(messages)`,type:`async fn`,description:`Returns (Message, Option<TokenUsage>) for cost tracking.`}],returns:`Result<Message> or Result<Receiver<String>> for streaming`,example:`use flowgentra_ai::core::llm::*;
use std::sync::Arc;

// Primary provider with fallback
let primary = OpenAIClient::new(std::env::var("OPENAI_API_KEY")?, "gpt-4o");
let backup  = AnthropicClient::new(std::env::var("ANTHROPIC_API_KEY")?, "claude-3-haiku-20240307");
let client  = FallbackLLMClient::new(vec![Arc::new(primary), Arc::new(backup)]);

// Streaming
let mut rx = client.chat_stream(vec![
    Message::system("You are helpful."),
    Message::user("Write a haiku about Rust."),
]).await?;
while let Some(chunk) = rx.recv().await {
    print!("{chunk}");
}
println!();

// Structured JSON output
let response = client.chat_structured(vec![
    Message::user("List 3 Rust features as JSON array"),
]).await?;
println!("{}", response);

// Token cost tracking
let (msg, usage) = client.chat_with_usage(vec![
    Message::user("Hello!")
]).await?;
if let Some(u) = usage {
    println!("Cost: \${:.4}", u.estimated_cost("gpt-4o").unwrap_or(0.0));
}`},python:{signature:`from flowgentra_ai.llm import LLMConfig, LLMClient, Message

# Option A — direct constructor (provider + model as positional args)
client = LLMClient("openai",     "gpt-4o",                         api_key="sk-...")
client = LLMClient("anthropic",  "claude-3-5-haiku-20241022",      api_key="sk-ant-...")
client = LLMClient("groq",       "llama3-70b-8192",                api_key="...")
client = LLMClient("ollama",     "llama3")               # Local — no api_key needed
client = LLMClient("mistral",    "mistral-large",        api_key="...", temperature=0.3)

# Option B — LLMConfig + from_config (useful when reusing the same config)
config = LLMConfig("openai", "gpt-4o", api_key="sk-...", temperature=0.7, max_tokens=1000)
client = LLMClient.from_config(config)

# Wrappers via method chaining
client = client.with_retry(max_retries=3)
client = client.cached(max_entries=100)
client = client.with_fallback(backup_client)`,description:"Two ways to create a client: `LLMClient(provider, model, api_key=...)` directly, or `LLMClient.from_config(LLMConfig(...))` when you want to reuse or mutate the config (e.g. `set_response_format`). No separate provider-specific classes. Wrappers (retry, cache, fallback) chain as methods.",params:[{name:`LLMConfig(provider, model, api_key?, temperature?, max_tokens?, top_p?)`,type:`config`,description:`Providers: "openai" | "anthropic" | "mistral" | "groq" | "ollama" | "huggingface" | "azure". api_key optional for ollama.`},{name:`LLMClient.from_config(config)`,type:`classmethod`,description:`Create client from LLMConfig.`},{name:`client.chat(messages)`,type:`fn → Message`,description:`Standard completion.`},{name:`client.chat_with_usage(messages)`,type:`fn → (Message, TokenUsage|None)`,description:`Chat with token count and cost tracking.`},{name:`client.chat_with_tools(messages, tools)`,type:`fn → Message`,description:`Function calling. Check response.has_tool_calls() / response.tool_calls().`},{name:`client.with_retry(max_retries=3)`,type:`fn → LLMClient`,description:`Wrap with exponential backoff retry.`},{name:`client.cached(max_entries=100)`,type:`fn → LLMClient`,description:`Wrap with response cache.`},{name:`client.with_fallback(backup)`,type:`fn → LLMClient`,description:`Falls back to backup client on error.`},{name:`config.set_response_format(fmt)`,type:`fn`,description:`ResponseFormat.json() or ResponseFormat.json_schema(name, schema) for structured output.`}],returns:`Message | (Message, TokenUsage | None) depending on method`,example:`import os
from flowgentra_ai.llm import LLMConfig, LLMClient, Message, ToolDefinition
from flowgentra_ai.types import ResponseFormat

# Direct constructor — shortest form
client = LLMClient(
    "anthropic",
    "claude-3-5-haiku-20241022",
    api_key=os.environ["ANTHROPIC_API_KEY"],
    temperature=0.7,
)

# Or via LLMConfig when you need set_response_format()
config = LLMConfig("anthropic", "claude-3-5-haiku-20241022",
                   api_key=os.environ["ANTHROPIC_API_KEY"])
client = LLMClient.from_config(config)

# Standard chat
response = client.chat([
    Message.system("You are a helpful assistant."),
    Message.user("What is Rust?"),
])
print(response.content)

# Token usage & cost
response, usage = client.chat_with_usage([Message.user("Hello!")])
if usage:
    print(f"Tokens: {usage.total_tokens}")
    cost = usage.estimated_cost("claude-3-5-haiku-20241022")
    if cost: print(f"Cost: \${cost:.4f}")

# Structured JSON output
config.set_response_format(ResponseFormat.json_schema("person", {
    "type": "object",
    "properties": {"name": {"type": "string"}, "age": {"type": "integer"}},
    "required": ["name", "age"],
}))
result = client.chat([Message.user("Return a person object")])
import json; print(json.loads(result.content))

# Tool calling
tools = [ToolDefinition(
    "get_weather",
    "Get current weather for a city",
    {"type": "object", "properties": {"city": {"type": "string"}}, "required": ["city"]},
)]
response = client.chat_with_tools([Message.user("Weather in Paris?")], tools)
if response.has_tool_calls():
    for tc in response.tool_calls():
        print(tc.name, tc.arguments)

# Production setup: retry + cache + fallback — all via method chaining
backup = LLMClient.from_config(LLMConfig("openai", "gpt-4o-mini", api_key=os.environ["OPENAI_API_KEY"]))
production_client = client.with_retry(max_retries=3).cached(max_entries=500).with_fallback(backup)`}},{id:`supervisor`,topic:`supervisor`,name:`Supervisor / Multi-Agent`,summary:`Orchestrate multiple agents as children of a Supervisor. The supervisor routes tasks, aggregates results, and can run children in parallel.`,rust:{signature:`Supervisor::new(name, strategy, llm_client)
    .add_child("worker_a", agent_a)
    .add_child("worker_b", agent_b)`,description:"Supervisor is itself a `PluggableNode`. Add it to a StateGraph as a node. Strategies: `Sequential`, `Parallel`, `LLMRouted` (LLM decides which child to call).",params:[{name:`OrchestrationStrategy::Sequential`,type:`strategy`,description:`Children run one after another.`},{name:`OrchestrationStrategy::Parallel`,type:`strategy`,description:`All children run concurrently, results merged.`},{name:`OrchestrationStrategy::LLMRouted`,type:`strategy`,description:`LLM decides which child agent handles the task.`}],returns:`NodeOutput<DynState>`,example:`use flowgentra_ai::core::agents::supervisor::Supervisor;
use flowgentra_ai::core::agents::supervisor::OrchestrationStrategy;

let researcher = build_research_agent()?;
let writer     = build_writer_agent()?;

let supervisor = Supervisor::new(
    "editorial_supervisor",
    OrchestrationStrategy::Sequential,
    llm_client.clone(),
)
.add_child("researcher", Box::new(researcher))
.add_child("writer",     Box::new(writer));

// Add supervisor as a node in your graph
let graph = StateGraph::<DynState>::builder()
    .add_node("supervisor", supervisor)
    .set_entry("supervisor")
    .build()?;`},python:{signature:`from flowgentra_ai.supervision import (
    Supervisor, OrchestrationStrategy
)`,description:"In Python, Supervisor and PlannerNode are available from `flowgentra_ai.supervision`. Configure via YAML `node_type: supervisor` for zero-code orchestration.",params:[{name:`Supervisor(agents, strategy)`,type:`class`,description:`Multi-agent coordinator.`},{name:`OrchestrationStrategy`,type:`enum`,description:`Sequential | Parallel | LLMRouted`},{name:`PlannerNode`,type:`class`,description:`LLM generates a plan and dynamically routes to sub-agents.`}],returns:`Node or state dict from orchestrated execution`,example:`from flowgentra_ai.supervision import (
    Supervisor, OrchestrationStrategy, PlannerNode
)
from flowgentra_ai.graph import StateGraph

# Configure via YAML (recommended):
# nodes:
#   - name: orchestrator
#     node_type: supervisor
#     config:
#       strategy: llm_routed
#       children: [research, write, review]
#
# Or in code:
supervisor = Supervisor(
    agents={"research": research_agent, "write": write_agent},
    strategy=OrchestrationStrategy.LLMRouted,
)

builder = StateGraph(dict)
builder.add_node("supervisor", supervisor)
builder.set_entry_point("supervisor")
graph = builder.compile()
result = graph.invoke({"task": "Write a blog post about Rust."})`}},{id:`rag`,topic:`rag`,name:`RAG (Retrieval-Augmented Generation)`,summary:`Built-in RAG pipeline: chunk documents, embed them, store in a vector DB, and retrieve context at query time.`,rust:{signature:`// In YAML config:
// graph:
//   rag:
//     vector_store: { type: chroma, endpoint: "...", collection: "docs" }
//     embeddings: { provider: openai, model: text-embedding-3-small }
//     retrieval: { top_k: 5, similarity_threshold: 0.7 }`,description:"RAG is fully config-driven. Set `graph.rag` in your YAML and the runtime auto-injects `_rag_config` into state for handlers to use. Supported vector stores: `memory`, `chroma`, `pinecone`. Embedding providers: `openai`, `mistral`, `ollama`.",params:[{name:`vector_store.type`,type:`string`,description:`"memory" | "chroma" | "pinecone"`},{name:`embeddings.provider`,type:`string`,description:`"openai" | "mistral" | "ollama"`},{name:`retrieval.top_k`,type:`usize`,description:`Number of documents to retrieve. Default: 5.`},{name:`retrieval.similarity_threshold`,type:`f32`,description:`Minimum similarity score. Default: 0.7.`},{name:`pdf.chunk_size`,type:`usize`,description:`Characters per chunk. Default: 1000.`}],returns:`RAG config injected into state as _rag_config`,example:`# agent.yaml with RAG
name: rag_agent
llm:
  provider: openai
  model: gpt-4o-mini
  api_key: \${OPENAI_API_KEY}

graph:
  rag:
    vector_store:
      type: chroma
      endpoint: "http://localhost:8000"
      collection: "my_docs"
    embeddings:
      provider: openai
      model: text-embedding-3-small
      api_key: \${OPENAI_API_KEY}
    retrieval:
      top_k: 5
      similarity_threshold: 0.7
    pdf:
      chunk_size: 1000
      chunk_overlap: 200
  nodes:
    - name: retrieve
      handler: retrieve_context
    - name: answer
      handler: generate_answer
  edges:
    - from: START
      to: retrieve
    - from: retrieve
      to: answer
    - from: answer
      to: END`},python:{signature:`from flowgentra_ai.rag import (
    InMemoryVectorStore, ChromaStore, Embeddings,
    RecursiveCharacterTextSplitter,
    bm25_score, hybrid_merge, decompose_query
)`,description:`Python exposes the full RAG toolkit directly. Use InMemoryVectorStore for testing and ChromaStore for production.`,params:[{name:`RecursiveCharacterTextSplitter(chunk_size)`,type:`splitter`,description:`Also: MarkdownTextSplitter, HTMLTextSplitter, TokenTextSplitter, CodeTextSplitter.`},{name:`InMemoryVectorStore(embeddings)`,type:`store`,description:`Fast in-process vector store for prototyping.`},{name:`ChromaStore(config)`,type:`store`,description:`Production-grade ChromaDB integration.`},{name:`hybrid_merge(bm25, semantic)`,type:`fn`,description:`Merge BM25 and semantic results with RRF.`},{name:`decompose_query(query)`,type:`fn`,description:`Break a complex query into sub-queries for multi-hop retrieval.`}],returns:`List[SearchResult] or Document list`,example:`from flowgentra_ai.rag import (
    InMemoryVectorStore, Embeddings,
    RecursiveCharacterTextSplitter,
    Document
)
from flowgentra_ai.document_loaders import load_document

# Load and chunk a document
docs = load_document("whitepaper.pdf")
splitter = RecursiveCharacterTextSplitter(
    chunk_size=1000, chunk_overlap=200)
chunks = splitter.split_documents(docs)

# Embed and store
embeddings = Embeddings(provider="openai",
    model="text-embedding-3-small")
store = InMemoryVectorStore(embeddings)
store.add_documents(chunks)

# Retrieve
results = store.similarity_search("What is the main finding?", k=5)
for r in results:
    print(f"Score: {r.score:.2f} — {r.document.content[:80]}")`}},{id:`observability`,topic:`observability`,name:`Observability & Visualization`,summary:`Trace node execution, export graphs to Mermaid/DOT, and score output quality.`,rust:{signature:`// Init structured logging
init_tracing()

// Graph visualization
graph_to_mermaid(&graph) -> String
graph_to_dot(&graph) -> String`,description:"Flowgentra uses `tracing` for structured logging. Call `init_tracing()` at startup for span/event output. Graph visualization exports to Mermaid (paste into mermaid.live) or Graphviz DOT.",params:[{name:`init_tracing()`,type:`fn`,description:`Initializes subscriber for tracing spans and events.`},{name:`graph_to_mermaid(graph)`,type:`fn`,description:`Returns Mermaid flowchart string.`},{name:`graph_to_dot(graph)`,type:`fn`,description:`Returns Graphviz DOT format string.`},{name:`evaluate_output_score(output, expected)`,type:`fn`,description:`Returns a 0.0–1.0 quality score.`}],returns:`String diagram or f64 score`,example:`use flowgentra_ai::core::utils::{init_tracing, graph_to_mermaid};

init_tracing(); // Call once at startup

let agent = from_config_path("agent.yaml")?;

// Export the graph as Mermaid
let diagram = graph_to_mermaid(agent.runtime_mut().graph());
println!("{diagram}");
// flowchart TD
//   START --> fetch_data
//   fetch_data --> summarize
//   summarize --> END`},python:{signature:`from flowgentra_ai.observability import (
    ExecutionTracer, init_tracing,
    graph_to_mermaid, visualize_graph,
    evaluate_output_score
)`,description:"Python provides the same observability tools. `ExecutionTracer` wraps a graph and records per-node execution time, input/output state snapshots.",params:[{name:`init_tracing()`,type:`fn`,description:`Enable structured logging.`},{name:`ExecutionTracer()`,type:`class`,description:`Wrap a compiled graph to capture execution traces.`},{name:`graph_to_mermaid(graph)`,type:`fn`,description:`Returns Mermaid diagram string.`},{name:`evaluate_output_score(output, expected)`,type:`fn`,description:`Heuristic quality score 0.0–1.0.`}],returns:`String | float | ExecutionTrace`,example:`from flowgentra_ai.observability import (
    ExecutionTracer, init_tracing, graph_to_mermaid
)
from flowgentra_ai.graph import StateGraph

init_tracing()  # once at startup

builder = StateGraph(dict)
builder.add_node("step", my_step)
builder.set_entry_point("step")
graph = builder.compile()

# Visualize
print(graph_to_mermaid(graph))
# flowchart TD
#   START --> step
#   step --> END

# Trace execution
tracer = ExecutionTracer()
traced_graph = tracer.wrap(graph)
result = traced_graph.invoke({"input": "hello"})

trace = tracer.last_trace()
for span in trace.spans:
    print(f"{span.node}: {span.duration_ms:.1f}ms")`}},{id:`document-loaders`,topic:`data-loading`,name:`Document Loaders`,summary:`Load and process documents from files, directories, and various formats (PDF, Markdown, HTML, JSON, CSV, plain text).`,rust:{signature:`load_document(path: &Path) -> Result<LoadedDocument>`,description:`Auto-detects file type and extracts content. Supports PDF text extraction, Markdown parsing, HTML stripping, and structured data formats.`,params:[{name:`path`,type:`&Path`,description:`Path to document file`}],returns:`LoadedDocument with metadata and content`,example:`use flowgentra_ai::data::load_document;

let doc = load_document("./research_paper.pdf")?;
println!("Loaded: {} ({} chars)", doc.filename, doc.content.len());`},python:{signature:`load_document(path: str) -> LoadedDocument`,description:`Load a single document with automatic format detection. Returns document content, metadata, and file information.`,params:[{name:`path`,type:`str`,description:`Path to the document file`}],returns:`LoadedDocument — content, metadata, filename, file_type`,example:`from flowgentra_ai.document_loaders import load_document

doc = load_document("./research_paper.pdf")
print(f"Loaded: {doc.filename} ({len(doc.content)} chars)")
print(f"Type: {doc.file_type}")`}},{id:`text-splitters`,topic:`text-processing`,name:`Text Splitters`,summary:`Split large documents into chunks for embedding and retrieval. Choose from character-based, token-based, or content-aware splitters.`,rust:{signature:`RecursiveCharacterTextSplitter::new(config: ChunkConfig) -> Self`,description:`Smart text splitting that respects content structure. Tries paragraph → sentence → word boundaries before falling back to character splitting.`,params:[{name:`chunk_size`,type:`usize`,description:`Maximum characters per chunk`},{name:`chunk_overlap`,type:`usize`,description:`Characters to overlap between chunks`},{name:`separators`,type:`Vec<String>`,description:`Ordered list of separator strings to try`}],returns:`Configured text splitter`,example:`use flowgentra_ai::text_splitter::RecursiveCharacterTextSplitter;

let splitter = RecursiveCharacterTextSplitter::new(ChunkConfig {
    chunk_size: 1000,
    chunk_overlap: 200,
    separators: vec!["\\n\\n".to_string(), "\\n".to_string(), " ".to_string()],
});

let chunks = splitter.split_documents(documents)?;`},python:{signature:`RecursiveCharacterTextSplitter(chunk_size=1000, overlap=200, separators=None)`,description:`Content-aware text splitting. Automatically tries separators in order: paragraphs, sentences, words, characters.`,params:[{name:`chunk_size`,type:`int`,description:`Maximum characters per chunk. Default: 1000`},{name:`overlap`,type:`int`,description:`Character overlap between chunks. Default: 200`},{name:`separators`,type:`List[str]`,description:`Custom separator priority list. Default: ["\\n\\n", "\\n", " ", ""]`}],returns:`Configured splitter instance`,example:`from flowgentra_ai.rag import RecursiveCharacterTextSplitter

splitter = RecursiveCharacterTextSplitter(chunk_size=1000, overlap=200)
chunks = splitter.split("Long document text...")

# Content-aware splitters
markdown_splitter = MarkdownTextSplitter(chunk_size=500)
html_splitter = HTMLTextSplitter(chunk_size=500)
code_splitter = CodeTextSplitter(chunk_size=500)  # Respects function/class boundaries`}},{id:`rerankers`,topic:`search-ranking`,name:`Rerankers`,summary:`Improve search result quality by reranking retrieved documents. Choose from RRF, cross-encoders, or LLM-based reranking.`,rust:{signature:`RRFReranker::new(k: usize) -> Self`,description:`Reciprocal Rank Fusion combines multiple ranking signals. Effective for hybrid search (semantic + keyword).`,params:[{name:`k`,type:`usize`,description:`RRF parameter controlling rank influence. Default: 60`}],returns:`Configured RRF reranker`,example:`use flowgentra_ai::reranking::RRFReranker;

let reranker = RRFReranker::new(60);
let reranked = reranker.rerank(search_results)?;`},python:{signature:`RRFReranker(k=60)`,description:`Reciprocal Rank Fusion for combining multiple ranking sources. Mathematically sound approach to fusion.`,params:[{name:`k`,type:`int`,description:`RRF parameter. Higher = more influence from original ranking. Default: 60`}],returns:`Reranker instance`,example:`from flowgentra_ai.rerankers import RRFReranker, CrossEncoderReranker

# RRF for hybrid search
rrf = RRFReranker(k=60)
reranked_results = rrf.rerank(search_results)

# Cross-encoder for quality (slower but better)
cross_encoder = CrossEncoderReranker(model="cross-encoder/ms-marco-MiniLM-L-6-v2")
reranked = cross_encoder.rerank(results)

# LLM-based reranking (most accurate)
llm_reranker = LLMReranker(model="gpt-4", prompt_template=custom_prompt)`}},{id:`evaluation-metrics`,topic:`evaluation`,name:`Evaluation Metrics`,summary:`Measure retrieval and generation quality with standard metrics: Hit Rate, MRR, NDCG, and custom scoring functions.`,rust:{signature:`hit_rate(results: &[SearchResult], ground_truth: &[String]) -> f64`,description:`Fraction of queries where at least one relevant document was retrieved. Simple but effective baseline metric.`,params:[{name:`results`,type:`&[SearchResult]`,description:`Retrieved documents for each query`},{name:`ground_truth`,type:`&[String]`,description:`Relevant document IDs for each query`}],returns:`Hit rate as fraction (0.0 to 1.0)`,example:`use flowgentra_ai::evaluation::{hit_rate, mrr};

let hit_rate_score = hit_rate(&retrieval_results, &ground_truth)?;
let mrr_score = mrr(&retrieval_results, &ground_truth)?;`},python:{signature:`hit_rate(results: List[List[SearchResult]], ground_truth: List[List[str]]) -> float`,description:`Hit Rate: Fraction of queries that retrieved at least one relevant document. Good baseline metric.`,params:[{name:`results`,type:`List[List[SearchResult]]`,description:`Retrieved results for each query`},{name:`ground_truth`,type:`List[List[str]]`,description:`Relevant document IDs for each query`}],returns:`Hit rate as float (0.0 to 1.0)`,example:`from flowgentra_ai.evaluation import hit_rate, mrr, mean_ndcg

# Basic metrics
hr = hit_rate(retrieval_results, ground_truth)
mrr_score = mrr(retrieval_results, ground_truth)
ndcg = mean_ndcg(retrieval_results, ground_truth, k=10)

# Full evaluation pipeline
from flowgentra_ai.evaluation import rag_evaluate, EvaluationConfig

config = EvaluationConfig(
    metrics=["hit_rate", "mrr", "ndcg@5", "ndcg@10"],
    grading_config=GradingConfig(temperature=0.1)
)

results = rag_evaluate(queries, results, ground_truth, config)`}},{id:`memory-types`,topic:`memory`,name:`Memory Systems`,summary:`Persistent conversation memory with different strategies: conversation buffer, token limits, summarization, and checkpoints.`,rust:{signature:`ConversationMemory::new() -> Self`,description:`Simple append-only memory for conversation history. Grows indefinitely — use TokenBufferMemory for bounded memory.`,params:[],returns:`Conversation memory instance`,example:`use flowgentra_ai::memory::ConversationMemory;

let memory = ConversationMemory::new();
memory.add_message("user", "Hello")?;
memory.add_message("assistant", "Hi there!");

// Retrieve full conversation
let history = memory.get_messages()?;`},python:{signature:`ConversationMemory()`,description:`Basic conversation memory that stores all messages. Use TokenBufferMemory for memory with size limits.`,params:[],returns:`Memory instance`,example:`from flowgentra_ai.memory import ConversationMemory, TokenBufferMemory

# Unlimited conversation memory
memory = ConversationMemory()
memory.add_message("user", "Hello")
memory.add_message("assistant", "Hi!")

# Bounded memory (token limit)
token_memory = TokenBufferMemory(max_tokens=2000, llm_for_count="gpt-4")

# Summarization memory (compresses old messages)
summary_memory = SummaryMemory(
    llm=LLMClient(LLMConfig("gpt-4")),
    summary_prompt="Summarize the conversation so far:"
)`}},{id:`advanced-nodes`,topic:`nodes`,name:`Advanced Node Types`,summary:`Sophisticated workflow nodes: retry logic, timeouts, parallel execution, branching, loops, and subgraph composition.`,rust:{signature:`RetryNode::new(max_retries: usize, backoff: BackoffStrategy) -> Self`,description:`Automatically retry failed node executions with exponential backoff. Useful for unreliable operations.`,params:[{name:`max_retries`,type:`usize`,description:`Maximum retry attempts`},{name:`backoff`,type:`BackoffStrategy`,description:`Exponential, linear, or fixed delay strategy`}],returns:`Configured retry node`,example:`use flowgentra_ai::nodes::RetryNode;

let retry_node = RetryNode::new(3, BackoffStrategy::Exponential);
graph.add_node("unreliable_task", retry_node.wrap(my_fallible_node))?;`},python:{signature:`RetryNode(max_retries=3, backoff_strategy="exponential")`,description:`Wrap any node with automatic retry logic. Handles transient failures gracefully.`,params:[{name:`max_retries`,type:`int`,description:`Maximum retry attempts. Default: 3`},{name:`backoff_strategy`,type:`str`,description:`"exponential" | "linear" | "fixed". Default: "exponential"`}],returns:`Retry node wrapper`,example:`from flowgentra_ai.nodes import RetryNode, TimeoutNode, ParallelNodeConfig

# Retry failed operations
retry_node = RetryNode(max_retries=3)
builder.add_node("unreliable_api", retry_node.wrap(api_call_node))

# Timeout protection
timeout_node = TimeoutNode(timeout_seconds=30.0)
builder.add_node("slow_task", timeout_node.wrap(processing_node))

# Parallel execution
parallel_config = ParallelNodeConfig(
    nodes=["task_a", "task_b", "task_c"],
    merge_strategy="concatenate"
)`}},{id:`supervision`,topic:`multi-agent`,name:`Multi-Agent Supervision`,summary:`Orchestrate multiple agents with supervisors, planners, and parallel execution strategies.`,rust:{signature:`Supervisor::new(agents: Vec<Agent>, strategy: OrchestrationStrategy) -> Self`,description:`Coordinate multiple agents with different orchestration patterns: sequential, parallel, or hierarchical.`,params:[{name:`agents`,type:`Vec<Agent>`,description:`Child agents to supervise`},{name:`strategy`,type:`OrchestrationStrategy`,description:`How to coordinate agents`}],returns:`Configured supervisor`,example:`use flowgentra_ai::supervision::Supervisor;

let supervisor = Supervisor::new(
    vec![research_agent, writing_agent],
    OrchestrationStrategy::Parallel
);

graph.add_node("team_work", supervisor.node())?;`},python:{signature:`Supervisor(agents: List[Agent], strategy: OrchestrationStrategy = "parallel")`,description:`Manage multiple agents with different coordination strategies. Distribute work and aggregate results.`,params:[{name:`agents`,type:`List[Agent]`,description:`List of agents to coordinate`},{name:`strategy`,type:`str`,description:`"sequential" | "parallel" | "hierarchical". Default: "parallel"`}],returns:`Supervisor instance`,example:`from flowgentra_ai.supervision import Supervisor, PlannerNode

# Parallel agent execution
supervisor = Supervisor(
    agents=[research_agent, analysis_agent, writer_agent],
    strategy="parallel"
)

# Planner-based orchestration
planner = PlannerNode(
    llm=LLMClient(LLMConfig("gpt-4")),
    available_agents=[agent1, agent2, agent3]
)

builder.add_node("plan_and_execute", planner)
builder.add_node("supervise", supervisor)`}},{id:`tool-registry`,topic:`tools`,name:`Tool Registry & Built-in Tools`,summary:`Register custom tools and use built-in implementations: calculators, web requests, file operations, and search tools.`,rust:{signature:`ToolRegistry::new() -> Self`,description:`Central registry for tool definitions and execution. Tools are functions that agents can call.`,params:[],returns:`Empty tool registry`,example:`use flowgentra_ai::tools::{ToolRegistry, ToolDefinition};

let mut registry = ToolRegistry::new();

// Register custom tool
registry.register(ToolDefinition {
    name: "calculate".to_string(),
    description: "Calculate mathematical expressions".to_string(),
    parameters: json_schema_for_calculator(),
    handler: |args| async move { calculate(args).await },
})?;`},python:{signature:`ToolRegistry()`,description:`Register and manage tools that agents can execute. Tools are functions with JSON schemas.`,params:[],returns:`Tool registry instance`,example:`from flowgentra_ai.tools import ToolRegistry, ToolNode, CalculatorTool

registry = ToolRegistry()

# Register custom tool
@registry.register
def calculate(expression: str) -> float:
    """Calculate a mathematical expression."""
    return eval(expression)  # In real code, use safe evaluation

# Use built-in tools
calc_tool = CalculatorTool()
web_tool = WebRequestTool()
search_tool = SearchTool()
files_tool = FilesTool()

# Add to graph
tool_node = ToolNode(registry)
builder.add_node("tools", tool_node)`}},{id:`yaml-config`,topic:`handlers-config`,name:`Full YAML Config Reference`,summary:`Complete schema for agent config YAML files — all top-level keys, node options, LLM providers, memory, RAG, evaluation, and parallel execution settings.`,rust:{signature:`AgentConfig::from_file(path) -> Result<AgentConfig>`,description:"Every field shown. `${ENV_VAR}` substitution is supported in any string value.",params:[{name:`name`,type:`string`,description:`Agent identifier (required).`},{name:`llm.provider`,type:`string`,description:`"openai" | "anthropic" | "mistral" | "groq" | "ollama" | "azure" | "huggingface"`},{name:`graph.nodes[].node_type`,type:`string`,description:`"llm" | "tool" | "retry" | "timeout" | "human_in_the_loop" | "memory" | "supervisor" | "subgraph" | "planner"`},{name:`graph.recursion_limit`,type:`usize`,description:`Max execution steps before abort. Default: 25.`},{name:`graph.allow_cycles`,type:`bool`,description:`Allow cycles in graph. Default: true.`},{name:`graph.parallel`,type:`Vec<Vec<String>>`,description:`Explicit parallel groups. E.g. [[node_a, node_b]]`},{name:`memory.checkpointer.type`,type:`string`,description:`"memory" | "file"`},{name:`evaluation.min_confidence`,type:`f64`,description:`Retry threshold 0.0–1.0. Default: 0.8.`}],returns:`Fully validated AgentConfig struct`,example:`name: production_agent
description: "A production-ready research agent"

llm:
  provider: openai
  model: gpt-4o
  temperature: 0.3
  max_tokens: 2048
  top_p: 0.9
  api_key: \${OPENAI_API_KEY}
  # For Azure:
  # provider: azure
  # extra_params:
  #   resource_name: my-azure-resource
  #   api_version: "2024-02-15-preview"

graph:
  recursion_limit: 50      # default 25
  allow_cycles: true
  parallel:                # run these groups concurrently
    - [analyze_logs, analyze_pcap]

  nodes:
    - name: classify
      handler: classify_handler        # must match #[register_handler] fn name
      node_type: llm                   # or: tool, retry, timeout, human_in_the_loop

    - name: fetch
      handler: fetch_handler
      mcps: [web_search]               # attach MCP tools to this node

    - name: approval
      node_type: human_in_the_loop
      config:
        prompt: "Approve this action?"
        require_approval: true
        editable_fields: [amount]

    - name: retry_fetch
      node_type: retry
      config:
        max_retries: 3
        backoff_ms: 500

    - name: timed_op
      node_type: timeout
      config:
        timeout_ms: 10000
        on_timeout: skip              # error | skip | default_value

  edges:
    - from: START
      to: classify
    - from: classify
      to: fetch
    - from: fetch
      to: END

  mcps:
    web_search:
      type: stdio
      command: ["npx", "-y", "@modelcontextprotocol/server-brave-search"]
      env:
        BRAVE_API_KEY: \${BRAVE_API_KEY}

  rag:
    vector_store:
      type: chroma
      endpoint: "http://localhost:8000"
      collection: "docs"
    embeddings:
      provider: openai
      model: text-embedding-3-small
      api_key: \${OPENAI_API_KEY}
    retrieval:
      top_k: 5
      similarity_threshold: 0.7

  planner:
    enabled: true
    max_plan_steps: 5

state_schema:
  input:
    type: string
    description: "User query"
  output:
    type: string
    description: "Final answer"
  # Legacy format also supported:
  # input: "string - User query"

memory:
  checkpointer:
    type: memory          # "memory" or "file" (add path: ./checkpoints)
  conversation:
    enabled: true
    state_key: messages   # syncs messages to state["messages"]
  buffer:
    max_messages: 20

evaluation:
  enabled: true
  min_confidence: 0.8
  max_retries: 3
  retry_policy: exponential
  retry_delay_ms: 1000`},python:{signature:`Agent.from_config_path(path) -> Agent`,description:"Identical YAML schema used in Python. Add `python_handler_module:` at top-level to auto-import your handler module.",params:[{name:`python_handler_module`,type:`string`,description:`Module name to auto-import. @register_handler functions in that module are discovered automatically.`},{name:`graph.nodes[].handler`,type:`string`,description:`Can be "python.mymodule:my_function" for explicit inline module:function path.`}],returns:`Agent with Python handlers wired automatically`,example:`# Full Python-specific config additions:

name: python_agent
python_handler_module: my_handlers   # auto-imports my_handlers.py

llm:
  provider: anthropic
  model: claude-3-5-sonnet-20241022
  api_key: \${ANTHROPIC_API_KEY}
  temperature: 0.5

graph:
  nodes:
    - name: process
      handler: process_handler      # matches @register_handler def process_handler

    - name: inline_node
      # Explicit module:function path — no @register_handler needed
      handler: "python.my_handlers:process_handler"

  edges:
    - from: START
      to: process
    - from: process
      to: END

state_schema:
  input:
    type: string
    description: "User input"
  output:
    type: string
    description: "Processed result"

memory:
  checkpointer:
    type: file
    path: ./checkpoints
  conversation:
    enabled: true
    max_messages: 20`}}];function sa({entry:e}){let{language:t}=M(),n=t===`rust`?e.rust:e.python;return(0,j.jsxs)(`section`,{id:e.id,style:{marginBottom:64,paddingBottom:64,borderBottom:`1px solid #21262d`},children:[(0,j.jsx)(`h2`,{style:{fontFamily:`JetBrains Mono, monospace`,fontSize:`1.25rem`,color:`#e6edf3`,fontWeight:600,marginBottom:8,marginTop:0},children:e.name}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:20,lineHeight:1.7},children:e.summary}),(0,j.jsx)(`div`,{style:{background:`#161b22`,border:`1px solid #30363d`,borderLeft:`3px solid var(--accent)`,borderRadius:`0 6px 6px 0`,padding:`12px 16px`,marginBottom:20,fontFamily:`JetBrains Mono, monospace`,fontSize:`0.8125rem`,color:`#e6edf3`,overflowX:`auto`,whiteSpace:`pre`},children:n.signature}),(0,j.jsx)(`p`,{style:{color:`#c9d1d9`,marginBottom:24,lineHeight:1.7},children:n.description}),n.params?.length>0&&(0,j.jsxs)(`div`,{style:{marginBottom:24},children:[(0,j.jsx)(`h4`,{style:{fontSize:`0.8125rem`,fontWeight:600,color:`#8b949e`,textTransform:`uppercase`,letterSpacing:`0.07em`,marginBottom:12,marginTop:0},children:`Parameters`}),(0,j.jsx)(`div`,{style:{border:`1px solid #21262d`,borderRadius:6,overflow:`hidden`},children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsx)(`tr`,{style:{background:`#161b22`},children:[`Name`,`Type`,`Description`].map(e=>(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px 14px`,fontSize:`0.75rem`,color:`#8b949e`,fontWeight:600,borderBottom:`1px solid #21262d`,fontFamily:`IBM Plex Sans, sans-serif`},children:e},e))})}),(0,j.jsx)(`tbody`,{children:n.params.map((e,t)=>(0,j.jsxs)(`tr`,{style:{borderBottom:t<n.params.length-1?`1px solid #21262d`:`none`},children:[(0,j.jsx)(`td`,{style:{padding:`8px 14px`,fontFamily:`JetBrains Mono, monospace`,fontSize:`0.8125rem`,color:`var(--accent)`},children:e.name}),(0,j.jsx)(`td`,{style:{padding:`8px 14px`,fontFamily:`JetBrains Mono, monospace`,fontSize:`0.8125rem`,color:`#79c0ff`},children:e.type}),(0,j.jsx)(`td`,{style:{padding:`8px 14px`,fontSize:`0.875rem`,color:`#8b949e`},children:e.description})]},t))})]})})]}),(0,j.jsxs)(`div`,{style:{marginBottom:24},children:[(0,j.jsx)(`h4`,{style:{fontSize:`0.8125rem`,fontWeight:600,color:`#8b949e`,textTransform:`uppercase`,letterSpacing:`0.07em`,marginBottom:8,marginTop:0},children:`Returns`}),(0,j.jsx)(`p`,{style:{fontFamily:`JetBrains Mono, monospace`,fontSize:`0.8125rem`,color:`#a5d6ff`,margin:0},children:n.returns})]}),(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`h4`,{style:{fontSize:`0.8125rem`,fontWeight:600,color:`#8b949e`,textTransform:`uppercase`,letterSpacing:`0.07em`,marginBottom:12,marginTop:0},children:`Example`}),(0,j.jsx)(N,{rust:e.rust.example,python:e.python.example})]})]})}var z={"state-graph":{title:`StateGraph`,desc:`Core graph builder, typed state, and field reducers.`},"handlers-config":{title:`Handlers & Config`,desc:`Handler registration, from_config_path, and the full YAML config schema.`},memory:{title:`Memory`,desc:`Checkpointers, conversation memory, and multi-turn thread execution.`},"builtin-nodes":{title:`Built-in Nodes`,desc:`Ready-to-use node types — LLMNode, RetryNode, TimeoutNode, HumanInTheLoop, and more.`},agents:{title:`Agents`,desc:`Predefined agent types: ZeroShotReAct, FewShotReAct, Conversational, and MemoryAwareAgent.`},llm:{title:`LLM Clients`,desc:`All 7 providers, streaming, structured output, tool calling, caching, and cost tracking.`},rag:{title:`RAG`,desc:`Retrieval-augmented generation — vector stores, embeddings, text splitters, and retrieval utilities.`},supervisor:{title:`Supervisor`,desc:`Multi-agent orchestration with sequential, parallel, or LLM-routed strategies.`},observability:{title:`Observability`,desc:`Execution tracing, graph visualization (Mermaid / DOT), and output scoring.`}};function ca(){let{topicId:e}=mt(),{language:t}=M();if(!z[e])return(0,j.jsx)(Rt,{to:`/docs/api/state-graph`,replace:!0});let n=oa.filter(t=>t.topic===e),r=n.map(e=>({id:e.id,label:e.name})),{title:i,desc:a}=z[e];return(0,j.jsxs)(P,{anchors:r,children:[(0,j.jsxs)(`div`,{style:{display:`inline-flex`,alignItems:`center`,gap:6,background:`var(--accent-dim, rgba(206,66,43,0.12))`,border:`1px solid var(--accent)`,borderRadius:20,padding:`3px 12px`,fontSize:`0.8125rem`,color:`var(--accent)`,marginBottom:16},children:[(0,j.jsx)(`span`,{children:t===`rust`?`🦀`:`🐍`}),` `,t===`rust`?`Rust`:`Python`,` API`]}),(0,j.jsx)(`h1`,{style:{fontSize:`2rem`,fontWeight:700,color:`#e6edf3`,letterSpacing:`-0.02em`,marginBottom:8,marginTop:0},children:i}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:48,lineHeight:1.7},children:a}),n.length===0?(0,j.jsx)(`p`,{style:{color:`#484f58`},children:`No entries for this topic yet.`}):n.map(e=>(0,j.jsx)(sa,{entry:e},e.id))]})}var la=[{id:`hello-world`,title:`Hello World Agent`,description:`The simplest graph — one node that echoes the input. Use this as a blank slate for new projects.`,rust:`use flowgentra_ai::prelude::*;

#[derive(State, Default)]
struct EchoState {
    input: String,
    output: String,
}

#[node]
async fn echo(state: &mut EchoState) -> Result<()> {
    state.output = format!("Echo: {}", state.input);
    Ok(())
}

#[tokio::main]
async fn main() -> Result<()> {
    let graph = StateGraph::<EchoState>::builder()
        .add_node("echo", echo)
        .set_entry("echo")
        .build()?;

    let result = graph.invoke(EchoState {
        input: "Hello, Flowgentra!".into(),
        ..Default::default()
    }).await?;

    println!("{}", result.output);
    // Echo: Hello, Flowgentra!
    Ok(())
}`,python:`from flowgentra_ai.graph import StateGraph
from typing import TypedDict

class EchoState(TypedDict):
    input: str
    output: str

def echo(state: EchoState) -> EchoState:
    return {**state, "output": f"Echo: {state['input']}"}

builder = StateGraph(EchoState)
builder.add_node("echo", echo)
builder.set_entry_point("echo")
graph = builder.compile()

result = graph.invoke({"input": "Hello, Flowgentra!"})
print(result["output"])
# Echo: Hello, Flowgentra!`},{id:`register-handler-config`,title:`Handler Registration + from_config_path`,description:`The recommended production pattern. Define handlers with #[register_handler] (Rust) or @register_handler (Python), write the graph in YAML, and call from_config_path() — zero manual wiring.`,rust:`// handlers.rs
use flowgentra_ai::prelude::*;
use serde_json::json;

#[register_handler]
pub async fn validate_input(state: DynState) -> Result<DynState> {
    let input = state.get("input")
        .and_then(|v| v.as_str())
        .unwrap_or("");

    if input.is_empty() {
        return Err(FlowgentraError::ValidationError(
            "Input is required".into()
        ));
    }
    state.set("validated", json!(true));
    Ok(state)
}

#[register_handler]
pub async fn process(state: DynState) -> Result<DynState> {
    let input = state.get("input")
        .and_then(|v| v.as_str())
        .unwrap_or("");
    state.set("output", json!(input.to_uppercase()));
    Ok(state)
}

// ---
// config.yaml
// name: my_agent
// llm:
//   provider: openai
//   model: gpt-4o-mini
//   api_key: \${OPENAI_API_KEY}
// graph:
//   nodes:
//     - name: validate
//       handler: validate_input
//     - name: process
//       handler: process
//   edges:
//     - from: START
//       to: validate
//     - from: validate
//       to: process
//     - from: process
//       to: END
// state_schema:
//   input: "string - User query"
//   output: "string - Result"
// ---

// main.rs
#[tokio::main]
async fn main() -> Result<()> {
    // Auto-discovers validate_input and process handlers
    let mut agent = from_config_path("config.yaml")?;

    agent.state.set("input", json!("hello world"));
    let result = agent.run().await?;

    println!("{}", result.get("output").unwrap());
    // "HELLO WORLD"
    Ok(())
}`,python:`# handlers.py
from flowgentra_ai.agent import register_handler

@register_handler
def validate_input(state: dict) -> dict:
    if not state.get("input"):
        raise ValueError("Input is required")
    return {**state, "validated": True}

@register_handler
def process(state: dict) -> dict:
    return {**state, "output": state["input"].upper()}

# config.yaml
# name: my_agent
# python_handler_module: handlers   ← auto-imports handlers.py
# llm:
#   provider: openai
#   model: gpt-4o-mini
#   api_key: \${OPENAI_API_KEY}
# graph:
#   nodes:
#     - name: validate
#       handler: validate_input
#     - name: process
#       handler: process
#   edges:
#     - from: START
#       to: validate
#     - from: validate
#       to: process
#     - from: process
#       to: END
# state_schema:
#   input: "string - User query"
#   output: "string - Result"

# main.py
from flowgentra_ai.agent import Agent
import asyncio

async def main():
    agent = Agent.from_config_path("config.yaml")
    result = await agent.run({"input": "hello world"})
    print(result["output"])  # "HELLO WORLD"

asyncio.run(main())`},{id:`multi-turn-memory`,title:`Multi-Turn Conversation with Memory`,description:`Use run_with_thread() + a checkpointer to persist state across turns. The agent "remembers" previous messages automatically.`,rust:`use flowgentra_ai::prelude::*;
use flowgentra_ai::core::memory::{
    InMemoryConversationMemory, MemoryCheckpointer
};
use serde_json::json;
use std::sync::Arc;

#[register_handler]
pub async fn chat(state: DynState) -> Result<DynState> {
    // Access the LLM config injected by the runtime
    let _llm_config = state.get("_llm_config");

    // In production: use state.get("messages") for history
    // and call the LLM with full context
    let user_input = state.get("user_input")
        .and_then(|v| v.as_str())
        .unwrap_or("");

    // Simulate LLM response
    let reply = format!("You said: '{user_input}'. I remember everything.");
    state.set("reply", json!(reply));

    // Append to message history
    let mut msgs: Vec<serde_json::Value> =
        state.get("messages")
            .and_then(|v| v.as_array().cloned())
            .unwrap_or_default();
    msgs.push(json!({"role": "user",      "content": user_input}));
    msgs.push(json!({"role": "assistant", "content": reply}));
    state.set("messages", json!(msgs));
    Ok(state)
}

#[tokio::main]
async fn main() -> Result<()> {
    let memory = InMemoryConversationMemory::new()
        .with_max_messages(20)
        .with_system_prompt("You are a helpful assistant.".into());

    let mut agent = from_config_path("config.yaml")?
        .with_checkpointer(Arc::new(MemoryCheckpointer::new()))
        .with_conversation_memory(Arc::new(memory));

    // Turn 1
    agent.state.set("user_input", json!("My name is Alice."));
    agent.run_with_thread("session-alice").await?;

    // Turn 2 — state reloaded, history preserved
    agent.state.set("user_input", json!("What's my name?"));
    let result = agent.run_with_thread("session-alice").await?;
    println!("{}", result.get("reply").unwrap());
    Ok(())
}`,python:`from flowgentra_ai.agent import Agent, register_handler
from flowgentra_ai.memory import ConversationMemory, FileCheckpointer
import asyncio

@register_handler
def chat(state: dict) -> dict:
    user_input = state.get("user_input", "")
    msgs = state.get("messages", [])
    msgs = msgs + [
        {"role": "user",      "content": user_input},
        {"role": "assistant", "content": f"You said: '{user_input}'"},
    ]
    return {**state, "messages": msgs,
            "reply": f"You said: '{user_input}'"}

# config.yaml enables memory:
# memory:
#   checkpointer: { type: memory }
#   conversation: { enabled: true, max_messages: 20 }

async def main():
    checkpointer = FileCheckpointer("./checkpoints")
    memory       = ConversationMemory(max_messages=20)

    agent = Agent.from_config_path("config.yaml",
        checkpointer=checkpointer,
        conversation_memory=memory)

    # Turn 1
    await agent.run_with_thread("alice",
        {"user_input": "My name is Alice.", "messages": []})

    # Turn 2 — previous state automatically restored
    result = await agent.run_with_thread("alice",
        {"user_input": "What's my name?"})
    print(result["reply"])

asyncio.run(main())`},{id:`llm-streaming`,title:`LLM Streaming Response`,description:`Stream tokens from the LLM as they arrive instead of waiting for the full response. Works with all providers that support streaming.`,rust:`use flowgentra_ai::core::llm::{
    LLMConfig, LLMProvider, LLMClient, Message, create_llm_client
};

#[tokio::main]
async fn main() -> flowgentra_ai::core::error::Result<()> {
    let config = LLMConfig::new(
        LLMProvider::Anthropic,
        "claude-3-5-haiku-20241022".into(),
        std::env::var("ANTHROPIC_API_KEY").unwrap(),
    ).with_temperature(0.7);

    let client = create_llm_client(&config)?;

    let messages = vec![
        Message::system("You are a creative writer."),
        Message::user("Write a short story about a robot learning to code."),
    ];

    print!("Story: ");
    let mut rx = client.chat_stream(messages).await?;
    while let Some(chunk) = rx.recv().await {
        print!("{chunk}");
        // Flush for real-time output in terminals
        use std::io::Write;
        std::io::stdout().flush().ok();
    }
    println!();
    Ok(())
}`,python:`from flowgentra_ai.llm import LLMClient, LLMConfig, Message
import asyncio

async def stream_response():
    config = LLMConfig(
        provider="anthropic",
        model="claude-3-5-haiku-20241022",
        api_key="\${ANTHROPIC_API_KEY}",
        temperature=0.7,
    )
    client = LLMClient(config)

    messages = [
        Message(role="system",
                content="You are a creative writer."),
        Message(role="user",
                content="Write a short story about a robot learning to code."),
    ]

    print("Story: ", end="", flush=True)
    async for chunk in client.stream(messages):
        print(chunk, end="", flush=True)
    print()

asyncio.run(stream_response())`},{id:`structured-output`,title:`Structured JSON Output`,description:`Force the LLM to return valid JSON — useful for extraction tasks, classification, or feeding results into downstream nodes.`,rust:`use flowgentra_ai::core::llm::*;
use serde::{Deserialize, Serialize};

#[derive(Deserialize, Debug)]
struct PersonInfo {
    name: String,
    age: u32,
    occupation: String,
}

#[tokio::main]
async fn main() -> flowgentra_ai::core::error::Result<()> {
    let config = LLMConfig::new(
        LLMProvider::OpenAI,
        "gpt-4o-mini".into(),
        std::env::var("OPENAI_API_KEY").unwrap(),
    ).with_response_format(ResponseFormat::Json);

    let client = create_llm_client(&config)?;

    let response = client.chat_structured(vec![
        Message::system("Extract person information from the text as JSON."),
        Message::user("Alice is a 30-year-old software engineer."),
    ]).await?;

    let person: PersonInfo = serde_json::from_value(response)?;
    println!("Name: {}, Age: {}, Job: {}",
        person.name, person.age, person.occupation);
    // Name: Alice, Age: 30, Job: software engineer
    Ok(())
}`,python:`from flowgentra_ai.llm import LLMClient, LLMConfig, Message
from flowgentra_ai.types import ResponseFormat
import json

config = LLMConfig(
    provider="openai",
    model="gpt-4o-mini",
    api_key="\${OPENAI_API_KEY}",
    response_format=ResponseFormat.Json,  # forces JSON output
)
client = LLMClient(config)

msg = client.call([
    Message(role="system",
            content="Extract person info from text as JSON with keys: name, age, occupation."),
    Message(role="user",
            content="Alice is a 30-year-old software engineer."),
])

person = json.loads(msg.content)
print(f"Name: {person['name']}, Age: {person['age']}, Job: {person['occupation']}")
# Name: Alice, Age: 30, Job: software engineer`},{id:`retry-timeout`,title:`RetryNode + TimeoutNode`,description:`Wrap unreliable operations with automatic exponential backoff retry, or enforce strict execution deadlines with TimeoutNode.`,rust:`use flowgentra_ai::prelude::*;
use flowgentra_ai::core::node::builtin_nodes::{RetryNode, TimeoutNode};
use serde_json::json;

// Simulates a flaky external API
#[register_handler]
pub async fn call_flaky_api(state: DynState) -> Result<DynState> {
    // Randomly fail for demo purposes
    if rand::random::<f32>() < 0.5 {
        return Err(FlowgentraError::NodeExecutionError(
            "API temporarily unavailable".into()
        ));
    }
    state.set("api_result", json!("success"));
    Ok(state)
}

// In config.yaml, use node_type: retry instead of code:
// nodes:
//   - name: fetch
//     handler: call_flaky_api
//     node_type: retry
//     config:
//       max_retries: 3
//       backoff_ms: 500
//       backoff_multiplier: 2.0
//       max_backoff_ms: 5000
//
//   - name: timed_fetch
//     handler: call_flaky_api
//     node_type: timeout
//     config:
//       timeout_ms: 3000
//       on_timeout: skip    # error | skip | default_value`,python:`from flowgentra_ai.nodes import RetryNode, TimeoutNode
from flowgentra_ai.graph import StateGraph
import httpx, asyncio

async def fetch_data(state: dict) -> dict:
    async with httpx.AsyncClient() as client:
        r = await client.get(state["url"], timeout=2.0)
        return {**state, "content": r.text}

async def main():
    builder = StateGraph(dict)

    # Wrap fetch_data with retry (3 attempts, exponential backoff)
    retry = RetryNode(max_retries=3, backoff_ms=500)
    builder.add_node("fetch", retry.wrap(fetch_data))
    builder.set_entry_point("fetch")
    graph = builder.compile()

    result = await graph.ainvoke({"url": "https://example.com"})
    print(result["content"][:100])

# Or configure entirely in YAML:
# nodes:
#   - name: fetch
#     handler: fetch_data
#     node_type: retry
#     config:
#       max_retries: 3
#       backoff_ms: 500
#
#   - name: timed_fetch
#     handler: fetch_data
#     node_type: timeout
#     config:
#       timeout_ms: 3000
#       on_timeout: skip

asyncio.run(main())`},{id:`zero-shot-react`,title:`ZeroShotReAct Agent`,description:`Spin up a reasoning + tool-use agent in a few lines using the AgentBuilder preset. No graph wiring required.`,rust:`use flowgentra_ai::core::agents::{AgentBuilder, AgentType, ToolSpec};
use flowgentra_ai::core::error::Result;

#[tokio::main]
async fn main() -> Result<()> {
    let search = ToolSpec::new("web_search", "Search the internet for information")
        .with_parameter("query", "string")
        .required("query");

    let calculator = ToolSpec::new("calculator", "Evaluate a math expression")
        .with_parameter("expression", "string")
        .required("expression");

    let mut agent = AgentBuilder::new(AgentType::ZeroShotReAct)
        .with_llm_config("gpt-4o")
        .with_tool(search)
        .with_tool(calculator)
        .build()?;

    let state = flowgentra_ai::core::state::DynState::new();
    agent.initialize(&mut state.clone())?;

    let result = agent.process(
        "What is the population of Japan divided by 1000?",
        &state
    )?;

    println!("Answer:    {}", result.output);
    println!("Reasoning: {}", result.reasoning.unwrap_or_default());
    for call in &result.tool_calls {
        println!("Tool called: {} → {:?}", call.tool_name, call.result);
    }
    Ok(())
}`,python:`from flowgentra_ai.agent import AgentBuilder, AgentType, ToolSpec

search = (ToolSpec(name="web_search",
                   description="Search the internet")
          .with_parameter("query", "string")
          .required("query"))

calc   = (ToolSpec(name="calculator",
                   description="Evaluate a math expression")
          .with_parameter("expression", "string")
          .required("expression"))

agent = (AgentBuilder(AgentType.ZeroShotReAct)
         .with_llm_config("gpt-4o")
         .with_tool(search)
         .with_tool(calc)
         .build())

result = agent.process(
    "What is the population of Japan divided by 1000?"
)

print("Answer:   ", result.output)
print("Reasoning:", result.reasoning)
for call in result.tool_calls:
    print(f"Tool: {call.tool_name} → {call.result}")`},{id:`rag-pipeline`,title:`RAG Pipeline`,description:`Index documents into a vector store and retrieve relevant chunks at query time to ground LLM responses with factual context.`,rust:`// config.yaml enables RAG automatically — just write handlers:
use flowgentra_ai::prelude::*;
use serde_json::json;

#[register_handler]
pub async fn retrieve_context(state: DynState) -> Result<DynState> {
    // The runtime injects _rag_config from your YAML automatically
    let query = state.get("query")
        .and_then(|v| v.as_str())
        .unwrap_or("");

    // In production: use the injected _rag_config to init a VectorStore
    // and call store.similarity_search(query, 5).await
    state.set("context", json!([
        "Flowgentra supports async-first execution.",
        "StateGraph is the core primitive.",
    ]));
    Ok(state)
}

#[register_handler]
pub async fn answer_with_context(state: DynState) -> Result<DynState> {
    let query   = state.get("query").and_then(|v| v.as_str()).unwrap_or("");
    let context = state.get("context").and_then(|v| v.as_array()).cloned()
        .unwrap_or_default();

    let ctx_str = context.iter()
        .filter_map(|v| v.as_str())
        .collect::<Vec<_>>()
        .join("\\n");

    // Call LLM with context (simplified)
    state.set("answer", json!(format!(
        "Based on context: {}\\n\\nAnswer to '{}': ...",
        ctx_str, query
    )));
    Ok(state)
}`,python:`from flowgentra_ai.rag import (
    InMemoryVectorStore, Embeddings,
    RecursiveCharacterTextSplitter,
    Document
)
from flowgentra_ai.llm import LLMClient, LLMConfig, Message
import asyncio

async def build_rag_pipeline(docs_text: str, query: str):
    # 1. Chunk the document
    splitter = RecursiveCharacterTextSplitter(
        chunk_size=500, chunk_overlap=50)
    docs = splitter.create_documents([docs_text])

    # 2. Embed and index
    embeddings = Embeddings(
        provider="openai",
        model="text-embedding-3-small",
        api_key="\${OPENAI_API_KEY}"
    )
    store = InMemoryVectorStore(embeddings)
    await store.aadd_documents(docs)

    # 3. Retrieve relevant chunks
    results = await store.asimilarity_search(query, k=3)
    context = "\\n\\n".join(r.document.content for r in results)

    # 4. Generate answer with context
    config = LLMConfig(provider="openai", model="gpt-4o-mini",
                       api_key="\${OPENAI_API_KEY}")
    client = LLMClient(config)

    answer = client.call([
        Message(role="system",
                content=f"Answer using this context:\\n{context}"),
        Message(role="user", content=query),
    ])
    return answer.content

result = asyncio.run(build_rag_pipeline(
    docs_text="Flowgentra is an async-first agent graph framework...",
    query="What is Flowgentra?"
))
print(result)`},{id:`supervisor-multiagent`,title:`Supervisor Multi-Agent`,description:`Orchestrate a team of specialized agents with a Supervisor that routes tasks using LLM reasoning.`,rust:`use flowgentra_ai::core::agents::supervisor::{Supervisor, OrchestrationStrategy};
use flowgentra_ai::prelude::*;
use serde_json::json;

#[register_handler]
pub async fn research_task(state: DynState) -> Result<DynState> {
    let topic = state.get("task").and_then(|v| v.as_str()).unwrap_or("");
    state.set("research", json!(format!("Research findings on: {topic}")));
    Ok(state)
}

#[register_handler]
pub async fn write_task(state: DynState) -> Result<DynState> {
    let research = state.get("research").and_then(|v| v.as_str()).unwrap_or("");
    state.set("draft", json!(format!("Article based on: {research}")));
    Ok(state)
}

// In config.yaml, declare supervisor node:
// nodes:
//   - name: coordinator
//     node_type: supervisor
//     config:
//       strategy: sequential      # sequential | parallel | llm_routed
//       children: [researcher, writer]
//
//   - name: researcher
//     handler: research_task
//
//   - name: writer
//     handler: write_task`,python:`from flowgentra_ai.supervision import (
    Supervisor, OrchestrationStrategy
)
from flowgentra_ai.graph import StateGraph
import asyncio

async def research(state: dict) -> dict:
    return {**state,
            "research": f"Findings on: {state.get('task', '')}"}

async def write(state: dict) -> dict:
    return {**state,
            "draft": f"Article: {state.get('research', '')}"}

async def main():
    supervisor = Supervisor(
        agents={"researcher": research, "writer": write},
        strategy=OrchestrationStrategy.Sequential,
    )

    builder = StateGraph(dict)
    builder.add_node("supervisor", supervisor)
    builder.set_entry_point("supervisor")
    graph = builder.compile()

    result = await graph.ainvoke({"task": "Rust programming language"})
    print(result["draft"])

# Or configure in YAML (zero Python code for orchestration):
# nodes:
#   - name: supervisor
#     node_type: supervisor
#     config:
#       strategy: llm_routed
#       children: [researcher, writer, reviewer]

asyncio.run(main())`},{id:`graph-visualization`,title:`Graph Visualization & Observability`,description:`Export your agent graph to Mermaid or Graphviz DOT, trace node execution with spans, and score output quality.`,rust:`use flowgentra_ai::prelude::*;
use flowgentra_ai::core::utils::{init_tracing, graph_to_mermaid};

#[register_handler]
pub async fn step_a(state: DynState) -> Result<DynState> {
    state.set("a_done", serde_json::json!(true));
    Ok(state)
}

#[register_handler]
pub async fn step_b(state: DynState) -> Result<DynState> {
    state.set("b_done", serde_json::json!(true));
    Ok(state)
}

#[tokio::main]
async fn main() -> Result<()> {
    // Enable structured tracing (spans for each node execution)
    init_tracing();

    let mut agent = from_config_path("config.yaml")?;

    // Export Mermaid diagram before running
    let diagram = graph_to_mermaid(agent.runtime_mut().graph());
    println!("=== Graph ===");
    println!("{diagram}");
    // flowchart TD
    //   START --> step_a
    //   step_a --> step_b
    //   step_b --> END

    // Save to file for rendering
    std::fs::write("graph.md",
        format!("\`\`\`mermaid\\n{diagram}\\n\`\`\`"))?;

    // Run with tracing active
    agent.state.set("input", serde_json::json!("test"));
    let result = agent.run().await?;
    println!("Done: {:?}", result.to_json_string()?);
    Ok(())
}`,python:`from flowgentra_ai.observability import (
    ExecutionTracer, init_tracing,
    graph_to_mermaid, evaluate_output_score
)
from flowgentra_ai.graph import StateGraph

init_tracing()  # Enable span logging

def step_a(state: dict) -> dict:
    return {**state, "a_done": True}

def step_b(state: dict) -> dict:
    return {**state, "b_done": True}

builder = StateGraph(dict)
builder.add_node("step_a", step_a)
builder.add_node("step_b", step_b)
builder.add_edge("step_a", "step_b")
builder.set_entry_point("step_a")
graph = builder.compile()

# Export Mermaid diagram
diagram = graph_to_mermaid(graph)
print("=== Graph ===")
print(diagram)
# flowchart TD
#   START --> step_a
#   step_a --> step_b
#   step_b --> END

# Wrap with tracer for execution spans
tracer = ExecutionTracer()
traced = tracer.wrap(graph)
result = traced.invoke({"input": "test"})

# Print per-node timings
trace = tracer.last_trace()
for span in trace.spans:
    print(f"{span.node:20s} {span.duration_ms:.1f}ms")

# Score output quality
score = evaluate_output_score(result.get("output", ""), "expected answer")
print(f"Quality score: {score:.2f}")`}];function ua(){return(0,j.jsxs)(P,{anchors:la.map(e=>({id:e.id,label:e.title})),children:[(0,j.jsx)(`h1`,{style:{fontSize:`2rem`,fontWeight:700,color:`#e6edf3`,letterSpacing:`-0.02em`,marginBottom:8,marginTop:0},children:`Examples`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:48,lineHeight:1.7},children:`Real-world usage patterns. Toggle between Rust and Python using the language switcher.`}),la.map((e,t)=>(0,j.jsxs)(`section`,{id:e.id,style:{marginBottom:60,paddingBottom:60,borderBottom:t<la.length-1?`1px solid #21262d`:`none`},children:[(0,j.jsx)(`div`,{style:{display:`flex`,alignItems:`baseline`,gap:12,marginBottom:8},children:(0,j.jsxs)(`span`,{style:{fontSize:`0.75rem`,fontWeight:600,color:`var(--accent)`,background:`var(--accent-dim)`,border:`1px solid var(--accent)`,borderRadius:10,padding:`2px 10px`},children:[`Example `,t+1]})}),(0,j.jsx)(`h2`,{style:{fontSize:`1.375rem`,fontWeight:600,color:`#e6edf3`,marginBottom:8,marginTop:0},children:e.title}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,lineHeight:1.7,marginBottom:20},children:e.description}),(0,j.jsx)(N,{rust:e.rust,python:e.python})]},e.id))]})}var da=[{version:`0.1.3`,date:`2025-04-05`,tag:`latest`,changes:[{type:`fix`,text:"Python: all submodule imports now work correctly (use `from flowgentra_ai.graph import StateGraph`, not `from flowgentra import …`)"},{type:`fix`,text:"Python: `Agent.create()` now takes `model` string instead of `llm` LLMClient object; use `run_with_input(str)` on the returned agent"},{type:`fix`,text:"Python: `StateGraph.invoke()` accepts a plain `dict` — do not wrap with `State()`"},{type:`fix`,text:`Python: fixed 9 compile errors in PyO3 bindings (rayon, schema_version, tool extraction, GIL cloning, type mismatches)`},{type:`fix`,text:"Python: `conversation_memory.rs` extra brace syntax error resolved"},{type:`fix`,text:"Python: `LLMClient` constructor no longer requires a pre-built config object"},{type:`breaking`,text:'Python: `Agent.create(llm=…)` removed — pass `model="gpt-4o"` string instead'},{type:`breaking`,text:"Python: top-level `from flowgentra import StateGraph` removed — use submodule imports"},{type:`docs`,text:"Updated all code examples to use correct `flowgentra_ai.*` submodule import paths"}],rust:`# Cargo.toml
flowgentra-ai = "0.1.3"`,python:`pip install "flowgentra-ai==0.1.3"`},{version:`0.4.0`,date:`2024-12-01`,tag:null,changes:[{type:`feat`,text:"Add `add_conditional_edge` for dynamic routing based on state"},{type:`feat`,text:"Python: `@register_handler` now auto-discovered with zero config"},{type:`feat`,text:"New `Agent::from_config_path` API — define graphs in YAML"},{type:`perf`,text:`State cloning reduced by 40% via arena allocator in hot paths`},{type:`fix`,text:`Fix race condition in async node execution with shared state`}],rust:`# Cargo.toml
flowgentra = "0.4"`,python:`pip install "flowgentra==0.4.0"`},{version:`0.3.2`,date:`2024-10-15`,tag:null,changes:[{type:`fix`,text:"Python: handle `None` return values from node functions"},{type:`fix`,text:`Rust: correct borrow checker error with recursive graphs`},{type:`docs`,text:`Improve error messages for missing entry node`}],rust:`flowgentra = "0.3.2"`,python:`pip install "flowgentra==0.3.2"`},{version:`0.3.0`,date:`2024-09-01`,tag:null,changes:[{type:`feat`,text:`Initial Python bindings via PyO3`},{type:`feat`,text:`TypedDict state support in Python`},{type:`feat`,text:`Async node support in both languages`},{type:`breaking`,text:"Renamed `Graph::new` to `StateGraph::builder`"}],rust:`flowgentra = "0.3"`,python:`pip install "flowgentra==0.3.0"`}],fa={feat:{bg:`rgba(35,134,54,0.15)`,color:`#3fb950`,label:`feat`},fix:{bg:`rgba(248,81,73,0.15)`,color:`#f85149`,label:`fix`},perf:{bg:`rgba(53,114,165,0.15)`,color:`#79c0ff`,label:`perf`},docs:{bg:`rgba(139,148,158,0.15)`,color:`#8b949e`,label:`docs`},breaking:{bg:`rgba(210,153,34,0.15)`,color:`#e3b341`,label:`breaking`}};function pa(){return(0,j.jsxs)(P,{children:[(0,j.jsx)(`h1`,{style:{fontSize:`2rem`,fontWeight:700,color:`#e6edf3`,letterSpacing:`-0.02em`,marginBottom:8,marginTop:0},children:`Changelog`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:48,lineHeight:1.7},children:`All notable changes to Flowgentra. The language switcher shows the install snippet for each version.`}),da.map((e,t)=>(0,j.jsxs)(`article`,{style:{marginBottom:52,paddingBottom:52,borderBottom:t<da.length-1?`1px solid #21262d`:`none`},children:[(0,j.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,gap:10,marginBottom:6},children:[(0,j.jsxs)(`h2`,{style:{fontFamily:`JetBrains Mono, monospace`,fontSize:`1.25rem`,color:`#e6edf3`,margin:0},children:[`v`,e.version]}),e.tag&&(0,j.jsx)(`span`,{style:{background:`rgba(35,134,54,0.15)`,color:`#3fb950`,border:`1px solid rgba(35,134,54,0.4)`,borderRadius:10,fontSize:`0.75rem`,padding:`2px 10px`,fontWeight:500},children:e.tag}),(0,j.jsx)(`span`,{style:{color:`#484f58`,fontSize:`0.875rem`,marginLeft:`auto`},children:e.date})]}),(0,j.jsx)(`ul`,{style:{listStyle:`none`,padding:0,margin:`16px 0 20px`},children:e.changes.map((t,n)=>{let r=fa[t.type]||fa.docs;return(0,j.jsxs)(`li`,{style:{display:`flex`,alignItems:`baseline`,gap:10,padding:`6px 0`,borderBottom:n<e.changes.length-1?`1px solid #161b22`:`none`},children:[(0,j.jsx)(`span`,{style:{background:r.bg,color:r.color,fontSize:`0.7rem`,fontWeight:600,padding:`2px 7px`,borderRadius:4,flexShrink:0,fontFamily:`JetBrains Mono, monospace`},children:r.label}),(0,j.jsx)(`span`,{style:{color:`#c9d1d9`,lineHeight:1.6,fontSize:`0.9375rem`},children:t.text})]},n)})}),(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`p`,{style:{fontSize:`0.8125rem`,color:`#8b949e`,marginBottom:8},children:`Install this version:`}),(0,j.jsx)(N,{rust:e.rust,python:e.python})]})]},e.version))]})}function ma(){return(0,j.jsx)(Xn,{children:(0,j.jsx)(On,{basename:`/flowgentra-ai-docs`,children:(0,j.jsxs)(`div`,{style:{minHeight:`100vh`,display:`flex`,flexDirection:`column`},children:[(0,j.jsx)($n,{}),(0,j.jsx)(`div`,{style:{flex:1},children:(0,j.jsxs)(Bt,{children:[(0,j.jsx)(k,{path:`/`,element:(0,j.jsx)(sr,{})}),(0,j.jsx)(k,{path:`/docs/getting-started`,element:(0,j.jsx)(dr,{})}),(0,j.jsx)(k,{path:`/docs/quickstart-rust`,element:(0,j.jsx)(vr,{})}),(0,j.jsx)(k,{path:`/docs/quickstart-python`,element:(0,j.jsx)(Or,{})}),(0,j.jsx)(k,{path:`/docs/installation`,element:(0,j.jsx)(Rr,{})}),(0,j.jsx)(k,{path:`/docs/what-is-flowgentra`,element:(0,j.jsx)(Vr,{})}),(0,j.jsx)(k,{path:`/docs/concepts/state`,element:(0,j.jsx)(Xr,{})}),(0,j.jsx)(k,{path:`/docs/concepts/graphs`,element:(0,j.jsx)(Wr,{})}),(0,j.jsx)(k,{path:`/docs/concepts/nodes`,element:(0,j.jsx)(qr,{})}),(0,j.jsx)(k,{path:`/docs/guides/agents`,element:(0,j.jsx)(ai,{})}),(0,j.jsx)(k,{path:`/docs/guides/llm-client`,element:(0,j.jsx)(ci,{})}),(0,j.jsx)(k,{path:`/docs/guides/tools`,element:(0,j.jsx)(bi,{})}),(0,j.jsx)(k,{path:`/docs/guides/memory`,element:(0,j.jsx)(di,{})}),(0,j.jsx)(k,{path:`/docs/guides/rag`,element:(0,j.jsx)(_i,{})}),(0,j.jsx)(k,{path:`/docs/guides/document-loaders`,element:(0,j.jsx)(ki,{})}),(0,j.jsx)(k,{path:`/docs/guides/supervisor`,element:(0,j.jsx)(zi,{})}),(0,j.jsx)(k,{path:`/docs/guides/human-in-loop`,element:(0,j.jsx)(mi,{})}),(0,j.jsx)(k,{path:`/docs/guides/error-handling`,element:(0,j.jsx)(Ci,{})}),(0,j.jsx)(k,{path:`/docs/guides/evaluation`,element:(0,j.jsx)(Fi,{})}),(0,j.jsx)(k,{path:`/docs/guides/observability`,element:(0,j.jsx)(Ki,{})}),(0,j.jsx)(k,{path:`/docs/guides/advanced-nodes`,element:(0,j.jsx)(F,{})}),(0,j.jsx)(k,{path:`/docs/guides/reranking`,element:(0,j.jsx)(Mi,{})}),(0,j.jsx)(k,{path:`/docs/guides/configuration`,element:(0,j.jsx)(Ei,{})}),(0,j.jsx)(k,{path:`/docs/api/:topicId`,element:(0,j.jsx)(ca,{})}),(0,j.jsx)(k,{path:`/docs/examples`,element:(0,j.jsx)(ua,{})}),(0,j.jsx)(k,{path:`/docs/best-practices`,element:(0,j.jsx)(na,{})}),(0,j.jsx)(k,{path:`/docs/faq`,element:(0,j.jsx)(ia,{})}),(0,j.jsx)(k,{path:`/docs/changelog`,element:(0,j.jsx)(pa,{})}),(0,j.jsx)(k,{path:`/docs/api-reference`,element:(0,j.jsx)(Rt,{to:`/docs/api/state-graph`,replace:!0})}),(0,j.jsx)(k,{path:`/docs`,element:(0,j.jsx)(Rt,{to:`/docs/getting-started`,replace:!0})}),(0,j.jsx)(k,{path:`*`,element:(0,j.jsx)(Rt,{to:`/`,replace:!0})})]})})]})})})}(0,y.createRoot)(document.getElementById(`root`)).render((0,j.jsx)(v.StrictMode,{children:(0,j.jsx)(ma,{})}));export{s as n,S as t};
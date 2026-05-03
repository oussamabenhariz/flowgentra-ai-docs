var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),s=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},c=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},l=(n,r,a)=>(a=n==null?{}:e(i(n)),c(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var u=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function S(){}var C={H:null,A:null,T:null,S:null},te=Object.prototype.hasOwnProperty;function ne(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function w(e,t){return ne(e.type,t,e.props)}function T(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function re(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ie=/\/+/g;function ae(e,t){return typeof e==`object`&&e&&e.key!=null?re(``+e.key):t.toString(36)}function oe(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(S,S):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function se(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,se(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ae(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(ie,`$&/`)+`/`),se(o,r,i,``,function(e){return e})):o!=null&&(T(o)&&(o=w(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ie,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ae(a,u),c+=se(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ae(a,u++),c+=se(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return se(oe(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ce(e,t,n){if(e==null)return e;var r=[],i=0;return se(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function le(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var E=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},D={map:ce,forEach:function(e,t,n){ce(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ce(e,function(){t++}),t},toArray:function(e){return ce(e,function(e){return e})||[]},only:function(e){if(!T(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=D,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!te.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return ne(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)te.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return ne(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=T,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:le}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=C.T,n={};C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(S,E)}catch(e){E(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}},e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.2.4`})),d=o(((e,t)=>{t.exports=u()})),f=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,ee||(ee=!0,T());else{var t=n(l);t!==null&&ae(x,t.startTime-e)}}var ee=!1,S=-1,C=5,te=-1;function ne(){return g?!0:!(e.unstable_now()-te<C)}function w(){if(g=!1,ee){var t=e.unstable_now();te=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(S),S=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ne());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ae(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?T():ee=!1}}}var T;if(typeof y==`function`)T=function(){y(w)};else if(typeof MessageChannel<`u`){var re=new MessageChannel,ie=re.port2;re.port1.onmessage=w,T=function(){ie.postMessage(null)}}else T=function(){_(w,0)};function ae(t,n){S=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):C=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(S),S=-1):h=!0,ae(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,T()))),r},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),p=o(((e,t)=>{t.exports=f()})),m=o((e=>{var t=d();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.4`})),h=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=m()})),g=o((e=>{var t=p(),n=d(),r=h();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function u(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function f(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=f(e),t!==null)return t;e=e.sibling}return null}var m=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),S=Symbol.for(`react.context`),C=Symbol.for(`react.forward_ref`),te=Symbol.for(`react.suspense`),ne=Symbol.for(`react.suspense_list`),w=Symbol.for(`react.memo`),T=Symbol.for(`react.lazy`),re=Symbol.for(`react.activity`),ie=Symbol.for(`react.memo_cache_sentinel`),ae=Symbol.iterator;function oe(e){return typeof e!=`object`||!e?null:(e=ae&&e[ae]||e[`@@iterator`],typeof e==`function`?e:null)}var se=Symbol.for(`react.client.reference`);function ce(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===se?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case te:return`Suspense`;case ne:return`SuspenseList`;case re:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case S:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case C:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case w:return t=e.displayName||null,t===null?ce(e.type)||`Memo`:t;case T:t=e._payload,e=e._init;try{return ce(e(t))}catch{}}return null}var le=Array.isArray,E=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue={pending:!1,data:null,method:null,action:null},de=[],fe=-1;function pe(e){return{current:e}}function me(e){0>fe||(e.current=de[fe],de[fe]=null,fe--)}function O(e,t){fe++,de[fe]=e.current,e.current=t}var he=pe(null),ge=pe(null),_e=pe(null),ve=pe(null);function ye(e,t){switch(O(_e,t),O(ge,e),O(he,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}me(he),O(he,e)}function be(){me(he),me(ge),me(_e)}function xe(e){e.memoizedState!==null&&O(ve,e);var t=he.current,n=Hd(t,e.type);t!==n&&(O(ge,e),O(he,n))}function Se(e){ge.current===e&&(me(he),me(ge)),ve.current===e&&(me(ve),Qf._currentValue=ue)}var Ce,we;function Te(e){if(Ce===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Ce=t&&t[1]||``,we=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Ce+e+we}var Ee=!1;function De(e,t){if(!e||Ee)return``;Ee=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Ee=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Te(n):``}function Oe(e,t){switch(e.tag){case 26:case 27:case 5:return Te(e.type);case 16:return Te(`Lazy`);case 13:return e.child!==t&&t!==null?Te(`Suspense Fallback`):Te(`Suspense`);case 19:return Te(`SuspenseList`);case 0:case 15:return De(e.type,!1);case 11:return De(e.type.render,!1);case 1:return De(e.type,!0);case 31:return Te(`Activity`);default:return``}}function ke(e){try{var t=``,n=null;do t+=Oe(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ae=Object.prototype.hasOwnProperty,je=t.unstable_scheduleCallback,Me=t.unstable_cancelCallback,Ne=t.unstable_shouldYield,Pe=t.unstable_requestPaint,Fe=t.unstable_now,Ie=t.unstable_getCurrentPriorityLevel,Le=t.unstable_ImmediatePriority,Re=t.unstable_UserBlockingPriority,ze=t.unstable_NormalPriority,Be=t.unstable_LowPriority,Ve=t.unstable_IdlePriority,He=t.log,Ue=t.unstable_setDisableYieldValue,We=null,Ge=null;function Ke(e){if(typeof He==`function`&&Ue(e),Ge&&typeof Ge.setStrictMode==`function`)try{Ge.setStrictMode(We,e)}catch{}}var qe=Math.clz32?Math.clz32:Xe,Je=Math.log,Ye=Math.LN2;function Xe(e){return e>>>=0,e===0?32:31-(Je(e)/Ye|0)|0}var Ze=256,Qe=262144,$e=4194304;function et(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function tt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=et(n))):i=et(o):i=et(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=et(n))):i=et(o)):i=et(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function nt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function rt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function it(){var e=$e;return $e<<=1,!($e&62914560)&&($e=4194304),e}function at(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ot(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function st(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-qe(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&ct(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function ct(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-qe(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function lt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-qe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ut(e,t){var n=t&-t;return n=n&42?1:dt(n),(n&(e.suspendedLanes|t))===0?n:0}function dt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ft(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function pt(){var e=D.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function mt(e,t){var n=D.p;try{return D.p=e,t()}finally{D.p=n}}var ht=Math.random().toString(36).slice(2),gt=`__reactFiber$`+ht,_t=`__reactProps$`+ht,vt=`__reactContainer$`+ht,yt=`__reactEvents$`+ht,bt=`__reactListeners$`+ht,xt=`__reactHandles$`+ht,St=`__reactResources$`+ht,Ct=`__reactMarker$`+ht;function wt(e){delete e[gt],delete e[_t],delete e[yt],delete e[bt],delete e[xt]}function Tt(e){var t=e[gt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[vt]||n[gt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[gt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Et(e){if(e=e[gt]||e[vt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Dt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Ot(e){var t=e[St];return t||=e[St]={hoistableStyles:new Map,hoistableScripts:new Map},t}function kt(e){e[Ct]=!0}var At=new Set,jt={};function Mt(e,t){Nt(e,t),Nt(e+`Capture`,t)}function Nt(e,t){for(jt[e]=t,e=0;e<t.length;e++)At.add(t[e])}var Pt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Ft={},It={};function Lt(e){return Ae.call(It,e)?!0:Ae.call(Ft,e)?!1:Pt.test(e)?It[e]=!0:(Ft[e]=!0,!1)}function Rt(e,t,n){if(Lt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function k(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function zt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Bt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Vt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Ht(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ut(e){if(!e._valueTracker){var t=Vt(e)?`checked`:`value`;e._valueTracker=Ht(e,t,``+e[t])}}function Wt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Vt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Gt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Kt=/[\n"\\]/g;function qt(e){return e.replace(Kt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Jt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Bt(t)):e.value!==``+Bt(t)&&(e.value=``+Bt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Xt(e,o,Bt(n)):Xt(e,o,Bt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Bt(s):e.removeAttribute(`name`)}function Yt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Ut(e);return}n=n==null?``:``+Bt(n),t=t==null?n:``+Bt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Ut(e)}function Xt(e,t,n){t===`number`&&Gt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Zt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Bt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Qt(e,t,n){if(t!=null&&(t=``+Bt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Bt(n)}function $t(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(le(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Bt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Ut(e)}function en(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var tn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function nn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||tn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function rn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&nn(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&nn(e,o,t[o])}function an(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var on=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),sn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function cn(e){return sn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function ln(){}var un=null;function dn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fn=null,pn=null;function mn(e){var t=Et(e);if(t&&(e=t.stateNode)){var n=e[_t]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Jt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+qt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[_t]||null;if(!a)throw Error(i(90));Jt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Wt(r)}break a;case`textarea`:Qt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Zt(e,!!n.multiple,t,!1)}}}var hn=!1;function gn(e,t,n){if(hn)return e(t,n);hn=!0;try{return e(t)}finally{if(hn=!1,(fn!==null||pn!==null)&&(bu(),fn&&(t=fn,e=pn,pn=fn=null,mn(t),e)))for(t=0;t<e.length;t++)mn(e[t])}}function _n(e,t){var n=e.stateNode;if(n===null)return null;var r=n[_t]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var vn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),yn=!1;if(vn)try{var bn={};Object.defineProperty(bn,`passive`,{get:function(){yn=!0}}),window.addEventListener(`test`,bn,bn),window.removeEventListener(`test`,bn,bn)}catch{yn=!1}var xn=null,Sn=null,Cn=null;function wn(){if(Cn)return Cn;var e,t=Sn,n=t.length,r,i=`value`in xn?xn.value:xn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Cn=i.slice(e,1<r?1-r:void 0)}function Tn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function En(){return!0}function Dn(){return!1}function On(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?En:Dn,this.isPropagationStopped=Dn,this}return m(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=En)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=En)},persist:function(){},isPersistent:En}),t}var kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},An=On(kn),A=m({},kn,{view:0,detail:0}),jn=On(A),Mn,Nn,Pn,Fn=m({},A,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Pn&&(Pn&&e.type===`mousemove`?(Mn=e.screenX-Pn.screenX,Nn=e.screenY-Pn.screenY):Nn=Mn=0,Pn=e),Mn)},movementY:function(e){return`movementY`in e?e.movementY:Nn}}),In=On(Fn),Ln=On(m({},Fn,{dataTransfer:0})),Rn=On(m({},A,{relatedTarget:0})),zn=On(m({},kn,{animationName:0,elapsedTime:0,pseudoElement:0})),Bn=On(m({},kn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Vn=On(m({},kn,{data:0})),Hn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Un={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Wn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Gn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wn[e])?!!t[e]:!1}function Kn(){return Gn}var qn=On(m({},A,{key:function(e){if(e.key){var t=Hn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Tn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Un[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kn,charCode:function(e){return e.type===`keypress`?Tn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Tn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Jn=On(m({},Fn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),j=On(m({},A,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kn})),Yn=On(m({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Xn=On(m({},Fn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),M=On(m({},kn,{newState:0,oldState:0})),Zn=[9,13,27,32],Qn=vn&&`CompositionEvent`in window,$n=null;vn&&`documentMode`in document&&($n=document.documentMode);var er=vn&&`TextEvent`in window&&!$n,tr=vn&&(!Qn||$n&&8<$n&&11>=$n),nr=` `,rr=!1;function ir(e,t){switch(e){case`keyup`:return Zn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function ar(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var or=!1;function N(e,t){switch(e){case`compositionend`:return ar(t);case`keypress`:return t.which===32?(rr=!0,nr):null;case`textInput`:return e=t.data,e===nr&&rr?null:e;default:return null}}function sr(e,t){if(or)return e===`compositionend`||!Qn&&ir(e,t)?(e=wn(),Cn=Sn=xn=null,or=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return tr&&t.locale!==`ko`?null:t.data;default:return null}}var cr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!cr[e.type]:t===`textarea`}function ur(e,t,n,r){fn?pn?pn.push(r):pn=[r]:fn=r,t=Ed(t,`onChange`),0<t.length&&(n=new An(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var dr=null,fr=null;function pr(e){yd(e,0)}function mr(e){if(Wt(Dt(e)))return e}function P(e,t){if(e===`change`)return t}var hr=!1;if(vn){var gr;if(vn){var _r=`oninput`in document;if(!_r){var vr=document.createElement(`div`);vr.setAttribute(`oninput`,`return;`),_r=typeof vr.oninput==`function`}gr=_r}else gr=!1;hr=gr&&(!document.documentMode||9<document.documentMode)}function yr(){dr&&(dr.detachEvent(`onpropertychange`,br),fr=dr=null)}function br(e){if(e.propertyName===`value`&&mr(fr)){var t=[];ur(t,fr,e,dn(e)),gn(pr,t)}}function xr(e,t,n){e===`focusin`?(yr(),dr=t,fr=n,dr.attachEvent(`onpropertychange`,br)):e===`focusout`&&yr()}function Sr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return mr(fr)}function Cr(e,t){if(e===`click`)return mr(t)}function wr(e,t){if(e===`input`||e===`change`)return mr(t)}function Tr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Er=typeof Object.is==`function`?Object.is:Tr;function Dr(e,t){if(Er(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ae.call(t,i)||!Er(e[i],t[i]))return!1}return!0}function Or(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function kr(e,t){var n=Or(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Or(n)}}function Ar(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ar(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function jr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Gt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gt(e.document)}return t}function Mr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Nr=vn&&`documentMode`in document&&11>=document.documentMode,Pr=null,Fr=null,Ir=null,Lr=!1;function Rr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Lr||Pr==null||Pr!==Gt(r)||(r=Pr,`selectionStart`in r&&Mr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ir&&Dr(Ir,r)||(Ir=r,r=Ed(Fr,`onSelect`),0<r.length&&(t=new An(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Pr)))}function zr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Br={animationend:zr(`Animation`,`AnimationEnd`),animationiteration:zr(`Animation`,`AnimationIteration`),animationstart:zr(`Animation`,`AnimationStart`),transitionrun:zr(`Transition`,`TransitionRun`),transitionstart:zr(`Transition`,`TransitionStart`),transitioncancel:zr(`Transition`,`TransitionCancel`),transitionend:zr(`Transition`,`TransitionEnd`)},Vr={},Hr={};vn&&(Hr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Br.animationend.animation,delete Br.animationiteration.animation,delete Br.animationstart.animation),`TransitionEvent`in window||delete Br.transitionend.transition);function Ur(e){if(Vr[e])return Vr[e];if(!Br[e])return e;var t=Br[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Hr)return Vr[e]=t[n];return e}var Wr=Ur(`animationend`),Gr=Ur(`animationiteration`),Kr=Ur(`animationstart`),qr=Ur(`transitionrun`),Jr=Ur(`transitionstart`),Yr=Ur(`transitioncancel`),Xr=Ur(`transitionend`),Zr=new Map,Qr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Qr.push(`scrollEnd`);function $r(e,t){Zr.set(e,t),Mt(t,[e])}var ei=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ti=[],ni=0,ri=0;function ii(){for(var e=ni,t=ri=ni=0;t<e;){var n=ti[t];ti[t++]=null;var r=ti[t];ti[t++]=null;var i=ti[t];ti[t++]=null;var a=ti[t];if(ti[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ci(n,i,a)}}function ai(e,t,n,r){ti[ni++]=e,ti[ni++]=t,ti[ni++]=n,ti[ni++]=r,ri|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function oi(e,t,n,r){return ai(e,t,n,r),li(e)}function si(e,t){return ai(e,null,null,t),li(e)}function ci(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-qe(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function li(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ui={};function di(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fi(e,t,n,r){return new di(e,t,n,r)}function pi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function mi(e,t){var n=e.alternate;return n===null?(n=fi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function hi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function gi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)pi(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,he.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case re:return e=fi(31,n,t,a),e.elementType=re,e.lanes=o,e;case y:return _i(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=fi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case te:return e=fi(13,n,t,a),e.elementType=te,e.lanes=o,e;case ne:return e=fi(19,n,t,a),e.elementType=ne,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case S:s=10;break a;case ee:s=9;break a;case C:s=11;break a;case w:s=14;break a;case T:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=fi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function _i(e,t,n,r){return e=fi(7,e,r,t),e.lanes=n,e}function vi(e,t,n){return e=fi(6,e,null,t),e.lanes=n,e}function yi(e){var t=fi(18,null,null,0);return t.stateNode=e,t}function bi(e,t,n){return t=fi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var xi=new WeakMap;function Si(e,t){if(typeof e==`object`&&e){var n=xi.get(e);return n===void 0?(t={value:e,source:t,stack:ke(t)},xi.set(e,t),t):n}return{value:e,source:t,stack:ke(t)}}var Ci=[],wi=0,Ti=null,Ei=0,F=[],I=0,L=null,R=1,Di=``;function Oi(e,t){Ci[wi++]=Ei,Ci[wi++]=Ti,Ti=e,Ei=t}function ki(e,t,n){F[I++]=R,F[I++]=Di,F[I++]=L,L=e;var r=R;e=Di;var i=32-qe(r)-1;r&=~(1<<i),n+=1;var a=32-qe(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,R=1<<32-qe(t)+i|n<<i|r,Di=a+e}else R=1<<a|n<<i|r,Di=e}function Ai(e){e.return!==null&&(Oi(e,1),ki(e,1,0))}function ji(e){for(;e===Ti;)Ti=Ci[--wi],Ci[wi]=null,Ei=Ci[--wi],Ci[wi]=null;for(;e===L;)L=F[--I],F[I]=null,Di=F[--I],F[I]=null,R=F[--I],F[I]=null}function Mi(e,t){F[I++]=R,F[I++]=Di,F[I++]=L,R=t.id,Di=t.overflow,L=e}var Ni=null,z=null,B=!1,Pi=null,Fi=!1,Ii=Error(i(519));function Li(e){throw Ui(Si(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Ii}function Ri(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[gt]=e,t[_t]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Yt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),$t(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=ln),t=!0):t=!1,t||Li(e,!0)}function zi(e){for(Ni=e.return;Ni;)switch(Ni.tag){case 5:case 31:case 13:Fi=!1;return;case 27:case 3:Fi=!0;return;default:Ni=Ni.return}}function Bi(e){if(e!==Ni)return!1;if(!B)return zi(e),B=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&z&&Li(e),zi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));z=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));z=uf(e)}else t===27?(t=z,Zd(e.type)?(e=lf,lf=null,z=e):z=t):z=Ni?cf(e.stateNode.nextSibling):null;return!0}function Vi(){z=Ni=null,B=!1}function Hi(){var e=Pi;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),Pi=null),e}function Ui(e){Pi===null?Pi=[e]:Pi.push(e)}var Wi=pe(null),Gi=null,Ki=null;function qi(e,t,n){O(Wi,t._currentValue),t._currentValue=n}function Ji(e){e._currentValue=Wi.current,me(Wi)}function Yi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Xi(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Yi(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Yi(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Zi(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Er(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ve.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&Xi(t,e,n,r),t.flags|=262144}function Qi(e){for(e=e.firstContext;e!==null;){if(!Er(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function $i(e){Gi=e,Ki=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ea(e){return na(Gi,e)}function ta(e,t){return Gi===null&&$i(e),na(e,t)}function na(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ki===null){if(e===null)throw Error(i(308));Ki=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ki=Ki.next=t;return n}var ra=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ia=t.unstable_scheduleCallback,aa=t.unstable_NormalPriority,V={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function oa(){return{controller:new ra,data:new Map,refCount:0}}function sa(e){e.refCount--,e.refCount===0&&ia(aa,function(){e.controller.abort()})}var ca=null,la=0,ua=0,da=null;function fa(e,t){if(ca===null){var n=ca=[];la=0,ua=dd(),da={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return la++,t.then(pa,pa),t}function pa(){if(--la===0&&ca!==null){da!==null&&(da.status=`fulfilled`);var e=ca;ca=null,ua=0,da=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ma(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ha=E.S;E.S=function(e,t){eu=Fe(),typeof t==`object`&&t&&typeof t.then==`function`&&fa(e,t),ha!==null&&ha(e,t)};var ga=pe(null);function _a(){var e=ga.current;return e===null?q.pooledCache:e}function H(e,t){t===null?O(ga,ga.current):O(ga,t.pool)}function va(){var e=_a();return e===null?null:{parent:V._currentValue,pool:e}}var ya=Error(i(460)),ba=Error(i(474)),xa=Error(i(542)),Sa={then:function(){}};function Ca(e){return e=e.status,e===`fulfilled`||e===`rejected`}function wa(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ln,ln),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Oa(e),e;default:if(typeof t.status==`string`)t.then(ln,ln);else{if(e=q,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Oa(e),e}throw Ea=t,ya}}function Ta(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Ea=e,ya):e}}var Ea=null;function Da(){if(Ea===null)throw Error(i(459));var e=Ea;return Ea=null,e}function Oa(e){if(e===ya||e===xa)throw Error(i(483))}var ka=null,Aa=0;function ja(e){var t=Aa;return Aa+=1,ka===null&&(ka=[]),wa(ka,e,t)}function Ma(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Na(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Pa(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=mi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=vi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===T&&Ta(i)===t.type)?(t=a(t,n.props),Ma(t,n),t.return=e,t):(t=gi(n.type,n.key,n.props,null,e.mode,r),Ma(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=bi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=_i(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=vi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=gi(t.type,t.key,t.props,null,e.mode,n),Ma(n,t),n.return=e,n;case v:return t=bi(t,e.mode,n),t.return=e,t;case T:return t=Ta(t),f(e,t,n)}if(le(t)||oe(t))return t=_i(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,ja(t),n);if(t.$$typeof===S)return f(e,ta(e,t),n);Na(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case T:return n=Ta(n),p(e,t,n,r)}if(le(n)||oe(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,ja(n),r);if(n.$$typeof===S)return p(e,t,ta(e,n),r);Na(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case T:return r=Ta(r),m(e,t,n,r,i)}if(le(r)||oe(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,ja(r),i);if(r.$$typeof===S)return m(e,t,n,ta(t,r),i);Na(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),B&&Oi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return B&&Oi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),B&&Oi(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),B&&Oi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return B&&Oi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),B&&Oi(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===T&&Ta(l)===r.type){n(e,r.sibling),c=a(r,o.props),Ma(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=_i(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=gi(o.type,o.key,o.props,null,e.mode,c),Ma(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=bi(o,e.mode,c),c.return=e,e=c}return s(e);case T:return o=Ta(o),b(e,r,o,c)}if(le(o))return h(e,r,o,c);if(oe(o)){if(l=oe(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,ja(o),c);if(o.$$typeof===S)return b(e,r,ta(e,o),c);Na(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=vi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Aa=0;var i=b(e,t,n,r);return ka=null,i}catch(t){if(t===ya||t===xa)throw t;var a=fi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Fa=Pa(!0),Ia=Pa(!1),La=!1;function Ra(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function za(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ba(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Va(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=li(e),ci(e,null,n),t}return ai(e,r,t,n),li(e)}function Ha(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lt(e,n)}}function Ua(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Wa=!1;function Ga(){if(Wa){var e=da;if(e!==null)throw e}}function Ka(e,t,n,r){Wa=!1;var i=e.updateQueue;La=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Y&f)===f:(r&f)===f){f!==0&&f===ua&&(Wa=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var h=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(h=g.payload,typeof h==`function`){d=h.call(_,d,f);break a}d=h;break a;case 3:h.flags=h.flags&-65537|128;case 0:if(h=g.payload,f=typeof h==`function`?h.call(_,d,f):h,f==null)break a;d=m({},d,f);break a;case 2:La=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function qa(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Ja(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)qa(n[e],t)}var Ya=pe(null),Xa=pe(0);function Za(e,t){e=Ul,O(Xa,e),O(Ya,t),Ul=e|t.baseLanes}function Qa(){O(Xa,Ul),O(Ya,Ya.current)}function $a(){Ul=Xa.current,me(Ya),me(Xa)}var eo=pe(null),to=null;function no(e){var t=e.alternate;O(so,so.current&1),O(eo,e),to===null&&(t===null||Ya.current!==null||t.memoizedState!==null)&&(to=e)}function ro(e){O(so,so.current),O(eo,e),to===null&&(to=e)}function io(e){e.tag===22?(O(so,so.current),O(eo,e),to===null&&(to=e)):ao(e)}function ao(){O(so,so.current),O(eo,eo.current)}function oo(e){me(eo),to===e&&(to=null),me(so)}var so=pe(0);function co(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var lo=0,U=null,W=null,uo=null,fo=!1,po=!1,mo=!1,ho=0,go=0,_o=null,vo=0;function yo(){throw Error(i(321))}function bo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Er(e[n],t[n]))return!1;return!0}function xo(e,t,n,r,i,a){return lo=a,U=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,E.H=e===null||e.memoizedState===null?Rs:zs,mo=!1,a=n(r,i),mo=!1,po&&(a=Co(t,n,r,i)),So(e),a}function So(e){E.H=Ls;var t=W!==null&&W.next!==null;if(lo=0,uo=W=U=null,fo=!1,go=0,_o=null,t)throw Error(i(300));e===null||nc||(e=e.dependencies,e!==null&&Qi(e)&&(nc=!0))}function Co(e,t,n,r){U=e;var a=0;do{if(po&&(_o=null),go=0,po=!1,25<=a)throw Error(i(301));if(a+=1,uo=W=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}E.H=Bs,o=t(n,r)}while(po);return o}function wo(){var e=E.H,t=e.useState()[0];return t=typeof t.then==`function`?jo(t):t,e=e.useState()[0],(W===null?null:W.memoizedState)!==e&&(U.flags|=1024),t}function To(){var e=ho!==0;return ho=0,e}function Eo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Do(e){if(fo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}fo=!1}lo=0,uo=W=U=null,po=!1,go=ho=0,_o=null}function Oo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return uo===null?U.memoizedState=uo=e:uo=uo.next=e,uo}function ko(){if(W===null){var e=U.alternate;e=e===null?null:e.memoizedState}else e=W.next;var t=uo===null?U.memoizedState:uo.next;if(t!==null)uo=t,W=e;else{if(e===null)throw U.alternate===null?Error(i(467)):Error(i(310));W=e,e={memoizedState:W.memoizedState,baseState:W.baseState,baseQueue:W.baseQueue,queue:W.queue,next:null},uo===null?U.memoizedState=uo=e:uo=uo.next=e}return uo}function Ao(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function jo(e){var t=go;return go+=1,_o===null&&(_o=[]),e=wa(_o,e,t),t=U,(uo===null?t.memoizedState:uo.next)===null&&(t=t.alternate,E.H=t===null||t.memoizedState===null?Rs:zs),e}function Mo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return jo(e);if(e.$$typeof===S)return ea(e)}throw Error(i(438,String(e)))}function No(e){var t=null,n=U.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=U.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Ao(),U.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ie;return t.index++,n}function Po(e,t){return typeof t==`function`?t(e):t}function Fo(e){return Io(ko(),W,e)}function Io(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(lo&f)===f:(Y&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ua&&(d=!0);else if((lo&p)===p){u=u.next,p===ua&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,U.lanes|=p,Gl|=p;f=u.action,mo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,U.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Er(o,e.memoizedState)&&(nc=!0,d&&(n=da,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Lo(e){var t=ko(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Er(o,t.memoizedState)||(nc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Ro(e,t,n){var r=U,a=ko(),o=B;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Er((W||a).memoizedState,n);if(s&&(a.memoizedState=n,nc=!0),a=a.queue,ls(Vo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||uo!==null&&uo.memoizedState.tag&1){if(r.flags|=2048,is(9,{destroy:void 0},Bo.bind(null,r,a,n,t),null),q===null)throw Error(i(349));o||lo&127||zo(r,t,n)}return n}function zo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=U.updateQueue,t===null?(t=Ao(),U.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Bo(e,t,n,r){t.value=n,t.getSnapshot=r,Ho(t)&&Uo(e)}function Vo(e,t,n){return n(function(){Ho(t)&&Uo(e)})}function Ho(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Er(e,n)}catch{return!0}}function Uo(e){var t=si(e,2);t!==null&&hu(t,e,2)}function Wo(e){var t=Oo();if(typeof e==`function`){var n=e;if(e=n(),mo){Ke(!0);try{n()}finally{Ke(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Po,lastRenderedState:e},t}function Go(e,t,n,r){return e.baseState=n,Io(e,W,typeof r==`function`?r:Po)}function Ko(e,t,n,r,a){if(Ps(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};E.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,qo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function qo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=E.T,o={};E.T=o;try{var s=n(i,r),c=E.S;c!==null&&c(o,s),Jo(e,t,s)}catch(n){Xo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),E.T=a}}else try{a=n(i,r),Jo(e,t,a)}catch(n){Xo(e,t,n)}}function Jo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Yo(e,t,n)},function(n){return Xo(e,t,n)}):Yo(e,t,n)}function Yo(e,t,n){t.status=`fulfilled`,t.value=n,Zo(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,qo(e,n)))}function Xo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Zo(t),t=t.next;while(t!==r)}e.action=null}function Zo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Qo(e,t){return t}function $o(e,t){if(B){var n=q.formState;if(n!==null){a:{var r=U;if(B){if(z){b:{for(var i=z,a=Fi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){z=cf(i.nextSibling),r=i.data===`F!`;break a}}Li(r)}r=!1}r&&(t=n[0])}}return n=Oo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qo,lastRenderedState:t},n.queue=r,n=js.bind(null,U,r),r.dispatch=n,r=Wo(!1),a=Ns.bind(null,U,!1,r.queue),r=Oo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Ko.bind(null,U,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function es(e){return ts(ko(),W,e)}function ts(e,t,n){if(t=Io(e,t,Qo)[0],e=Fo(Po)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=jo(t)}catch(e){throw e===ya?xa:e}else r=t;t=ko();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(U.flags|=2048,is(9,{destroy:void 0},ns.bind(null,i,n),null)),[r,a,e]}function ns(e,t){e.action=t}function rs(e){var t=ko(),n=W;if(n!==null)return ts(t,n,e);ko(),t=t.memoizedState,n=ko();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function is(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=U.updateQueue,t===null&&(t=Ao(),U.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function as(){return ko().memoizedState}function os(e,t,n,r){var i=Oo();U.flags|=e,i.memoizedState=is(1|t,{destroy:void 0},n,r===void 0?null:r)}function ss(e,t,n,r){var i=ko();r=r===void 0?null:r;var a=i.memoizedState.inst;W!==null&&r!==null&&bo(r,W.memoizedState.deps)?i.memoizedState=is(t,a,n,r):(U.flags|=e,i.memoizedState=is(1|t,a,n,r))}function cs(e,t){os(8390656,8,e,t)}function ls(e,t){ss(2048,8,e,t)}function us(e){U.flags|=4;var t=U.updateQueue;if(t===null)t=Ao(),U.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ds(e){var t=ko().memoizedState;return us({ref:t,nextImpl:e}),function(){if(K&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function fs(e,t){return ss(4,2,e,t)}function ps(e,t){return ss(4,4,e,t)}function ms(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function hs(e,t,n){n=n==null?null:n.concat([e]),ss(4,4,ms.bind(null,t,e),n)}function gs(){}function _s(e,t){var n=ko();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&bo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function vs(e,t){var n=ko();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&bo(t,r[1]))return r[0];if(r=e(),mo){Ke(!0);try{e()}finally{Ke(!1)}}return n.memoizedState=[r,t],r}function ys(e,t,n){return n===void 0||lo&1073741824&&!(Y&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),U.lanes|=e,Gl|=e,n)}function bs(e,t,n,r){return Er(n,t)?n:Ya.current===null?!(lo&42)||lo&1073741824&&!(Y&261930)?(nc=!0,e.memoizedState=n):(e=mu(),U.lanes|=e,Gl|=e,t):(e=ys(e,n,r),Er(e,t)||(nc=!0),e)}function xs(e,t,n,r,i){var a=D.p;D.p=a!==0&&8>a?a:8;var o=E.T,s={};E.T=s,Ns(e,!1,t,n);try{var c=i(),l=E.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ms(e,t,ma(c,r),pu(e)):Ms(e,t,r,pu(e))}catch(n){Ms(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{D.p=a,o!==null&&s.types!==null&&(o.types=s.types),E.T=o}}function Ss(){}function Cs(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=ws(e).queue;xs(e,a,t,ue,n===null?Ss:function(){return Ts(e),n(r)})}function ws(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ue,baseState:ue,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Po,lastRenderedState:ue},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Po,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ts(e){var t=ws(e);t.next===null&&(t=e.alternate.memoizedState),Ms(e,t.next.queue,{},pu())}function Es(){return ea(Qf)}function Ds(){return ko().memoizedState}function Os(){return ko().memoizedState}function ks(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ba(n);var r=Va(t,e,n);r!==null&&(hu(r,t,n),Ha(r,t,n)),t={cache:oa()},e.payload=t;return}t=t.return}}function As(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ps(e)?Fs(t,n):(n=oi(e,t,n,r),n!==null&&(hu(n,e,r),Is(n,t,r)))}function js(e,t,n){Ms(e,t,n,pu())}function Ms(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ps(e))Fs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Er(s,o))return ai(e,t,i,0),q===null&&ii(),!1}catch{}if(n=oi(e,t,i,r),n!==null)return hu(n,e,r),Is(n,t,r),!0}return!1}function Ns(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ps(e)){if(t)throw Error(i(479))}else t=oi(e,n,r,2),t!==null&&hu(t,e,2)}function Ps(e){var t=e.alternate;return e===U||t!==null&&t===U}function Fs(e,t){po=fo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Is(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lt(e,n)}}var Ls={readContext:ea,use:Mo,useCallback:yo,useContext:yo,useEffect:yo,useImperativeHandle:yo,useLayoutEffect:yo,useInsertionEffect:yo,useMemo:yo,useReducer:yo,useRef:yo,useState:yo,useDebugValue:yo,useDeferredValue:yo,useTransition:yo,useSyncExternalStore:yo,useId:yo,useHostTransitionStatus:yo,useFormState:yo,useActionState:yo,useOptimistic:yo,useMemoCache:yo,useCacheRefresh:yo};Ls.useEffectEvent=yo;var Rs={readContext:ea,use:Mo,useCallback:function(e,t){return Oo().memoizedState=[e,t===void 0?null:t],e},useContext:ea,useEffect:cs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),os(4194308,4,ms.bind(null,t,e),n)},useLayoutEffect:function(e,t){return os(4194308,4,e,t)},useInsertionEffect:function(e,t){os(4,2,e,t)},useMemo:function(e,t){var n=Oo();t=t===void 0?null:t;var r=e();if(mo){Ke(!0);try{e()}finally{Ke(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Oo();if(n!==void 0){var i=n(t);if(mo){Ke(!0);try{n(t)}finally{Ke(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=As.bind(null,U,e),[r.memoizedState,e]},useRef:function(e){var t=Oo();return e={current:e},t.memoizedState=e},useState:function(e){e=Wo(e);var t=e.queue,n=js.bind(null,U,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:gs,useDeferredValue:function(e,t){return ys(Oo(),e,t)},useTransition:function(){var e=Wo(!1);return e=xs.bind(null,U,e.queue,!0,!1),Oo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=U,a=Oo();if(B){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),q===null)throw Error(i(349));Y&127||zo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,cs(Vo.bind(null,r,o,e),[e]),r.flags|=2048,is(9,{destroy:void 0},Bo.bind(null,r,o,n,t),null),n},useId:function(){var e=Oo(),t=q.identifierPrefix;if(B){var n=Di,r=R;n=(r&~(1<<32-qe(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=ho++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=vo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Es,useFormState:$o,useActionState:$o,useOptimistic:function(e){var t=Oo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ns.bind(null,U,!0,n),n.dispatch=t,[e,t]},useMemoCache:No,useCacheRefresh:function(){return Oo().memoizedState=ks.bind(null,U)},useEffectEvent:function(e){var t=Oo(),n={impl:e};return t.memoizedState=n,function(){if(K&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},zs={readContext:ea,use:Mo,useCallback:_s,useContext:ea,useEffect:ls,useImperativeHandle:hs,useInsertionEffect:fs,useLayoutEffect:ps,useMemo:vs,useReducer:Fo,useRef:as,useState:function(){return Fo(Po)},useDebugValue:gs,useDeferredValue:function(e,t){return bs(ko(),W.memoizedState,e,t)},useTransition:function(){var e=Fo(Po)[0],t=ko().memoizedState;return[typeof e==`boolean`?e:jo(e),t]},useSyncExternalStore:Ro,useId:Ds,useHostTransitionStatus:Es,useFormState:es,useActionState:es,useOptimistic:function(e,t){return Go(ko(),W,e,t)},useMemoCache:No,useCacheRefresh:Os};zs.useEffectEvent=ds;var Bs={readContext:ea,use:Mo,useCallback:_s,useContext:ea,useEffect:ls,useImperativeHandle:hs,useInsertionEffect:fs,useLayoutEffect:ps,useMemo:vs,useReducer:Lo,useRef:as,useState:function(){return Lo(Po)},useDebugValue:gs,useDeferredValue:function(e,t){var n=ko();return W===null?ys(n,e,t):bs(n,W.memoizedState,e,t)},useTransition:function(){var e=Lo(Po)[0],t=ko().memoizedState;return[typeof e==`boolean`?e:jo(e),t]},useSyncExternalStore:Ro,useId:Ds,useHostTransitionStatus:Es,useFormState:rs,useActionState:rs,useOptimistic:function(e,t){var n=ko();return W===null?(n.baseState=e,[e,n.queue.dispatch]):Go(n,W,e,t)},useMemoCache:No,useCacheRefresh:Os};Bs.useEffectEvent=ds;function Vs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:m({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Hs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ba(r);i.payload=t,n!=null&&(i.callback=n),t=Va(e,i,r),t!==null&&(hu(t,e,r),Ha(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ba(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Va(e,i,r),t!==null&&(hu(t,e,r),Ha(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ba(n);r.tag=2,t!=null&&(r.callback=t),t=Va(e,r,n),t!==null&&(hu(t,e,n),Ha(t,e,n))}};function Us(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Dr(n,r)||!Dr(i,a):!0}function Ws(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Hs.enqueueReplaceState(t,t.state,null)}function Gs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=m({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Ks(e){ei(e)}function qs(e){console.error(e)}function Js(e){ei(e)}function Ys(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Xs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Zs(e,t,n){return n=Ba(n),n.tag=3,n.payload={element:null},n.callback=function(){Ys(e,t)},n}function Qs(e){return e=Ba(e),e.tag=3,e}function $s(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Xs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Xs(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function ec(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Zi(t,n,a,!0),n=eo.current,n!==null){switch(n.tag){case 31:case 13:return to===null?Du():n.alternate===null&&Wl===0&&(Wl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Sa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===Sa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(B)return t=eo.current,t===null?(r!==Ii&&(t=Error(i(423),{cause:r}),Ui(Si(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Si(r,n),a=Zs(e.stateNode,r,a),Ua(e,a),Wl!==4&&(Wl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Ii&&(e=Error(i(422),{cause:r}),Ui(Si(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Si(o,n),Xl===null?Xl=[o]:Xl.push(o),Wl!==4&&(Wl=2),t===null)return!0;r=Si(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Zs(n.stateNode,r,e),Ua(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Qs(a),$s(a,e,n,r),Ua(n,a),!1}n=n.return}while(n!==null);return!1}var tc=Error(i(461)),nc=!1;function rc(e,t,n,r){t.child=e===null?Ia(t,null,n,r):Fa(t,e.child,n,r)}function ic(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return $i(t),r=xo(e,t,n,o,a,i),s=To(),e!==null&&!nc?(Eo(e,t,i),Oc(e,t,i)):(B&&s&&Ai(t),t.flags|=1,rc(e,t,r,i),t.child)}function ac(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!pi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,oc(e,t,a,r,i)):(e=gi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!kc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Dr:n,n(o,r)&&e.ref===t.ref)return Oc(e,t,i)}return t.flags|=1,e=mi(a,r),e.ref=t.ref,e.return=t,t.child=e}function oc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Dr(a,r)&&e.ref===t.ref)if(nc=!1,t.pendingProps=r=a,kc(e,i))e.flags&131072&&(nc=!0);else return t.lanes=e.lanes,Oc(e,t,i)}return mc(e,t,n,r,i)}function sc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return lc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&H(t,a===null?null:a.cachePool),a===null?Qa():Za(t,a),io(t);else return r=t.lanes=536870912,lc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&H(t,null),Qa(),ao(t)):(H(t,a.cachePool),Za(t,a),ao(t),t.memoizedState=null);return rc(e,t,i,n),t.child}function cc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function lc(e,t,n,r,i){var a=_a();return a=a===null?null:{parent:V._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&H(t,null),Qa(),io(t),e!==null&&Zi(e,t,r,!0),t.childLanes=i,null}function uc(e,t){return t=Cc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function dc(e,t,n){return Fa(t,e.child,null,n),e=uc(t,t.pendingProps),e.flags|=2,oo(t),t.memoizedState=null,e}function fc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(B){if(r.mode===`hidden`)return e=uc(t,r),t.lanes=536870912,cc(null,e);if(ro(t),(e=z)?(e=rf(e,Fi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:L===null?null:{id:R,overflow:Di},retryLane:536870912,hydrationErrors:null},n=yi(e),n.return=t,t.child=n,Ni=t,z=null)):e=null,e===null)throw Li(t);return t.lanes=536870912,null}return uc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(ro(t),a)if(t.flags&256)t.flags&=-257,t=dc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(nc||Zi(e,t,n,!1),a=(n&e.childLanes)!==0,nc||a){if(r=q,r!==null&&(s=ut(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,si(e,s),hu(r,e,s),tc;Du(),t=dc(e,t,n)}else e=o.treeContext,z=cf(s.nextSibling),Ni=t,B=!0,Pi=null,Fi=!1,e!==null&&Mi(t,e),t=uc(t,r),t.flags|=4096;return t}return e=mi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function pc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function mc(e,t,n,r,i){return $i(t),n=xo(e,t,n,r,void 0,i),r=To(),e!==null&&!nc?(Eo(e,t,i),Oc(e,t,i)):(B&&r&&Ai(t),t.flags|=1,rc(e,t,n,i),t.child)}function hc(e,t,n,r,i,a){return $i(t),t.updateQueue=null,n=Co(t,r,n,i),So(e),r=To(),e!==null&&!nc?(Eo(e,t,a),Oc(e,t,a)):(B&&r&&Ai(t),t.flags|=1,rc(e,t,n,a),t.child)}function gc(e,t,n,r,i){if($i(t),t.stateNode===null){var a=ui,o=n.contextType;typeof o==`object`&&o&&(a=ea(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Hs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ra(t),o=n.contextType,a.context=typeof o==`object`&&o?ea(o):ui,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Vs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Hs.enqueueReplaceState(a,a.state,null),Ka(t,r,a,i),Ga(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Gs(n,s);a.props=c;var l=a.context,u=n.contextType;o=ui,typeof u==`object`&&u&&(o=ea(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ws(t,a,r,o),La=!1;var f=t.memoizedState;a.state=f,Ka(t,r,a,i),Ga(),l=t.memoizedState,s||f!==l||La?(typeof d==`function`&&(Vs(t,n,d,r),l=t.memoizedState),(c=La||Us(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,za(e,t),o=t.memoizedProps,u=Gs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=ui,typeof l==`object`&&l&&(c=ea(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ws(t,a,r,c),La=!1,f=t.memoizedState,a.state=f,Ka(t,r,a,i),Ga();var p=t.memoizedState;o!==d||f!==p||La||e!==null&&e.dependencies!==null&&Qi(e.dependencies)?(typeof s==`function`&&(Vs(t,n,s,r),p=t.memoizedState),(u=La||Us(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Qi(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,pc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Fa(t,e.child,null,i),t.child=Fa(t,null,n,i)):rc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Oc(e,t,i),e}function _c(e,t,n,r){return Vi(),t.flags|=256,rc(e,t,n,r),t.child}var vc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function yc(e){return{baseLanes:e,cachePool:va()}}function bc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function xc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(so.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(B){if(a?no(t):ao(t),(e=z)?(e=rf(e,Fi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:L===null?null:{id:R,overflow:Di},retryLane:536870912,hydrationErrors:null},n=yi(e),n.return=t,t.child=n,Ni=t,z=null)):e=null,e===null)throw Li(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(ao(t),a=t.mode,c=Cc({mode:`hidden`,children:c},a),r=_i(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=yc(n),r.childLanes=bc(e,s,n),t.memoizedState=vc,cc(null,r)):(no(t),Sc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(no(t),t.flags&=-257,t=wc(e,t,n)):t.memoizedState===null?(ao(t),c=r.fallback,a=t.mode,r=Cc({mode:`visible`,children:r.children},a),c=_i(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Fa(t,e.child,null,n),r=t.child,r.memoizedState=yc(n),r.childLanes=bc(e,s,n),t.memoizedState=vc,t=cc(null,r)):(ao(t),t.child=e.child,t.flags|=128,t=null);else if(no(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Ui({value:r,source:null,stack:null}),t=wc(e,t,n)}else if(nc||Zi(e,t,n,!1),s=(n&e.childLanes)!==0,nc||s){if(s=q,s!==null&&(r=ut(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,si(e,r),hu(s,e,r),tc;af(c)||Du(),t=wc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,z=cf(c.nextSibling),Ni=t,B=!0,Pi=null,Fi=!1,e!==null&&Mi(t,e),t=Sc(t,r.children),t.flags|=4096);return t}return a?(ao(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=mi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=_i(c,a,n,null),c.flags|=2):c=mi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,cc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=yc(n):(a=c.cachePool,a===null?a=va():(l=V._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=bc(e,s,n),t.memoizedState=vc,cc(e.child,r)):(no(t),n=e.child,e=n.sibling,n=mi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Sc(e,t){return t=Cc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Cc(e,t){return e=fi(22,e,null,t),e.lanes=0,e}function wc(e,t,n){return Fa(t,e.child,null,n),e=Sc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Tc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Yi(e.return,t,n)}function Ec(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Dc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=so.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,O(so,o),rc(e,t,r,n),r=B?Ei:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Tc(e,n,t);else if(e.tag===19)Tc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&co(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ec(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&co(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ec(t,!0,n,null,a,r);break;case`together`:Ec(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Oc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Zi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=mi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=mi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function kc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&Qi(e))):!0}function Ac(e,t,n){switch(t.tag){case 3:ye(t,t.stateNode.containerInfo),qi(t,V,e.memoizedState.cache),Vi();break;case 27:case 5:xe(t);break;case 4:ye(t,t.stateNode.containerInfo);break;case 10:qi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,ro(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(no(t),e=Oc(e,t,n),e===null?null:e.sibling):xc(e,t,n):(no(t),t.flags|=128,null);no(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(Zi(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Dc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),O(so,so.current),r)break;return null;case 22:return t.lanes=0,sc(e,t,n,t.pendingProps);case 24:qi(t,V,e.memoizedState.cache)}return Oc(e,t,n)}function jc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)nc=!0;else{if(!kc(e,n)&&!(t.flags&128))return nc=!1,Ac(e,t,n);nc=!!(e.flags&131072)}else nc=!1,B&&t.flags&1048576&&ki(t,Ei,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Ta(t.elementType),t.type=e,typeof e==`function`)pi(e)?(r=Gs(e,r),t.tag=1,t=gc(null,t,e,r,n)):(t.tag=0,t=mc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===C){t.tag=11,t=ic(null,t,e,r,n);break a}else if(a===w){t.tag=14,t=ac(null,t,e,r,n);break a}}throw t=ce(e)||e,Error(i(306,t,``))}}return t;case 0:return mc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Gs(r,t.pendingProps),gc(e,t,r,a,n);case 3:a:{if(ye(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,za(e,t),Ka(t,r,null,n);var s=t.memoizedState;if(r=s.cache,qi(t,V,r),r!==o.cache&&Xi(t,[V],n,!0),Ga(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=_c(e,t,r,n);break a}else if(r!==a){a=Si(Error(i(424)),t),Ui(a),t=_c(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(z=cf(e.firstChild),Ni=t,B=!0,Pi=null,Fi=!0,n=Ia(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Vi(),r===a){t=Oc(e,t,n);break a}rc(e,t,r,n)}t=t.child}return t;case 26:return pc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:B||(n=t.type,e=t.pendingProps,r=Bd(_e.current).createElement(n),r[gt]=t,r[_t]=e,Pd(r,n,e),kt(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return xe(t),e===null&&B&&(r=t.stateNode=ff(t.type,t.pendingProps,_e.current),Ni=t,Fi=!0,a=z,Zd(t.type)?(lf=a,z=cf(r.firstChild)):z=a),rc(e,t,t.pendingProps.children,n),pc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&B&&((a=r=z)&&(r=tf(r,t.type,t.pendingProps,Fi),r===null?a=!1:(t.stateNode=r,Ni=t,z=cf(r.firstChild),Fi=!1,a=!0)),a||Li(t)),xe(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=xo(e,t,wo,null,null,n),Qf._currentValue=a),pc(e,t),rc(e,t,r,n),t.child;case 6:return e===null&&B&&((e=n=z)&&(n=nf(n,t.pendingProps,Fi),n===null?e=!1:(t.stateNode=n,Ni=t,z=null,e=!0)),e||Li(t)),null;case 13:return xc(e,t,n);case 4:return ye(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Fa(t,null,r,n):rc(e,t,r,n),t.child;case 11:return ic(e,t,t.type,t.pendingProps,n);case 7:return rc(e,t,t.pendingProps,n),t.child;case 8:return rc(e,t,t.pendingProps.children,n),t.child;case 12:return rc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,qi(t,t.type,r.value),rc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,$i(t),a=ea(a),r=r(a),t.flags|=1,rc(e,t,r,n),t.child;case 14:return ac(e,t,t.type,t.pendingProps,n);case 15:return oc(e,t,t.type,t.pendingProps,n);case 19:return Dc(e,t,n);case 31:return fc(e,t,n);case 22:return sc(e,t,n,t.pendingProps);case 24:return $i(t),r=ea(V),e===null?(a=_a(),a===null&&(a=q,o=oa(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ra(t),qi(t,V,a)):((e.lanes&n)!==0&&(za(e,t),Ka(t,null,null,n),Ga()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,qi(t,V,r),r!==a.cache&&Xi(t,[V],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),qi(t,V,r))),rc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Mc(e){e.flags|=4}function Nc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Ea=Sa,ba}else e.flags&=-16777217}function Pc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Ea=Sa,ba}function Fc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:it(),e.lanes|=t,Yl|=t)}function Ic(e,t){if(!B)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function G(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Lc(e,t,n){var r=t.pendingProps;switch(ji(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return G(t),null;case 1:return G(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Ji(V),be(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Bi(t)?Mc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Hi())),G(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Mc(t),o===null?(G(t),Nc(t,a,null,r,n)):(G(t),Pc(t,o))):o?o===e.memoizedState?(G(t),t.flags&=-16777217):(Mc(t),G(t),Pc(t,o)):(e=e.memoizedProps,e!==r&&Mc(t),G(t),Nc(t,a,e,r,n)),null;case 27:if(Se(t),n=_e.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Mc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return G(t),null}e=he.current,Bi(t)?Ri(t,e):(e=ff(a,r,n),t.stateNode=e,Mc(t))}return G(t),null;case 5:if(Se(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Mc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return G(t),null}if(o=he.current,Bi(t))Ri(t,o);else{var s=Bd(_e.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[gt]=t,o[_t]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Mc(t)}}return G(t),Nc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Mc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=_e.current,Bi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Ni,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[gt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Li(t,!0)}else e=Bd(e).createTextNode(r),e[gt]=t,t.stateNode=e}return G(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Bi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[gt]=t}else Vi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;G(t),e=!1}else n=Hi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(oo(t),t):(oo(t),null);if(t.flags&128)throw Error(i(558))}return G(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Bi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[gt]=t}else Vi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;G(t),a=!1}else a=Hi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(oo(t),t):(oo(t),null)}return oo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Fc(t,t.updateQueue),G(t),null);case 4:return be(),e===null&&Sd(t.stateNode.containerInfo),G(t),null;case 10:return Ji(t.type),G(t),null;case 19:if(me(so),r=t.memoizedState,r===null)return G(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Ic(r,!1);else{if(Wl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=co(e),o!==null){for(t.flags|=128,Ic(r,!1),e=o.updateQueue,t.updateQueue=e,Fc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)hi(n,e),n=n.sibling;return O(so,so.current&1|2),B&&Oi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Fe()>tu&&(t.flags|=128,a=!0,Ic(r,!1),t.lanes=4194304)}else{if(!a)if(e=co(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Fc(t,e),Ic(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!B)return G(t),null}else 2*Fe()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,Ic(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(G(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Fe(),e.sibling=null,n=so.current,O(so,a?n&1|2:n&1),B&&Oi(t,r.treeForkCount),e);case 22:case 23:return oo(t),$a(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(G(t),t.subtreeFlags&6&&(t.flags|=8192)):G(t),n=t.updateQueue,n!==null&&Fc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&me(ga),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ji(V),G(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Rc(e,t){switch(ji(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ji(V),be(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Se(t),null;case 31:if(t.memoizedState!==null){if(oo(t),t.alternate===null)throw Error(i(340));Vi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(oo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Vi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return me(so),null;case 4:return be(),null;case 10:return Ji(t.type),null;case 22:case 23:return oo(t),$a(),e!==null&&me(ga),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ji(V),null;case 25:return null;default:return null}}function zc(e,t){switch(ji(t),t.tag){case 3:Ji(V),be();break;case 26:case 27:case 5:Se(t);break;case 4:be();break;case 31:t.memoizedState!==null&&oo(t);break;case 13:oo(t);break;case 19:me(so);break;case 10:Ji(t.type);break;case 22:case 23:oo(t),$a(),e!==null&&me(ga);break;case 24:Ji(V)}}function Bc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Vc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Hc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Ja(t,n)}catch(t){Z(e,e.return,t)}}}function Uc(e,t,n){n.props=Gs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Wc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Gc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Kc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function qc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[_t]=t}catch(t){Z(e,e.return,t)}}function Jc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Yc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Jc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ln));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Xc(e,t,n),e=e.sibling;e!==null;)Xc(e,t,n),e=e.sibling}function Zc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Zc(e,t,n),e=e.sibling;e!==null;)Zc(e,t,n),e=e.sibling}function Qc(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[gt]=e,t[_t]=n}catch(t){Z(e,e.return,t)}}var $c=!1,el=!1,tl=!1,nl=typeof WeakSet==`function`?WeakSet:Set,rl=null;function il(e,t){if(e=e.containerInfo,Rd=sp,e=jr(e),Mr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,rl=t;rl!==null;)if(t=rl,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,rl=e;else for(;rl!==null;){switch(t=rl,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Gs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,rl=e;break}rl=t.return}}function al(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:bl(e,n),r&4&&Bc(5,n);break;case 1:if(bl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Gs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Hc(n),r&512&&Wc(n,n.return);break;case 3:if(bl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Ja(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&Qc(n);case 26:case 5:bl(e,n),t===null&&r&4&&Kc(n),r&512&&Wc(n,n.return);break;case 12:bl(e,n);break;case 31:bl(e,n),r&4&&dl(e,n);break;case 13:bl(e,n),r&4&&fl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||$c,!r){t=t!==null&&t.memoizedState!==null||el,i=$c;var a=el;$c=r,(el=t)&&!a?Sl(e,n,(n.subtreeFlags&8772)!=0):bl(e,n),$c=i,el=a}break;case 30:break;default:bl(e,n)}}function ol(e){var t=e.alternate;t!==null&&(e.alternate=null,ol(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&wt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var sl=null,cl=!1;function ll(e,t,n){for(n=n.child;n!==null;)ul(e,t,n),n=n.sibling}function ul(e,t,n){if(Ge&&typeof Ge.onCommitFiberUnmount==`function`)try{Ge.onCommitFiberUnmount(We,n)}catch{}switch(n.tag){case 26:el||Gc(n,t),ll(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:el||Gc(n,t);var r=sl,i=cl;Zd(n.type)&&(sl=n.stateNode,cl=!1),ll(e,t,n),pf(n.stateNode),sl=r,cl=i;break;case 5:el||Gc(n,t);case 6:if(r=sl,i=cl,sl=null,ll(e,t,n),sl=r,cl=i,sl!==null)if(cl)try{(sl.nodeType===9?sl.body:sl.nodeName===`HTML`?sl.ownerDocument.body:sl).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{sl.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:sl!==null&&(cl?(e=sl,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(sl,n.stateNode));break;case 4:r=sl,i=cl,sl=n.stateNode.containerInfo,cl=!0,ll(e,t,n),sl=r,cl=i;break;case 0:case 11:case 14:case 15:Vc(2,n,t),el||Vc(4,n,t),ll(e,t,n);break;case 1:el||(Gc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Uc(n,t,r)),ll(e,t,n);break;case 21:ll(e,t,n);break;case 22:el=(r=el)||n.memoizedState!==null,ll(e,t,n),el=r;break;default:ll(e,t,n)}}function dl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function pl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new nl),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new nl),t;default:throw Error(i(435,e.tag))}}function ml(e,t){var n=pl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function hl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){sl=c.stateNode,cl=!1;break a}break;case 5:sl=c.stateNode,cl=!1;break a;case 3:case 4:sl=c.stateNode.containerInfo,cl=!0;break a}c=c.return}if(sl===null)throw Error(i(160));ul(o,s,a),sl=null,cl=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)_l(t,e),t=t.sibling}var gl=null;function _l(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:hl(t,e),vl(e),r&4&&(Vc(3,e,e.return),Bc(3,e),Vc(5,e,e.return));break;case 1:hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),r&64&&$c&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=gl;if(hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[Ct]||o[gt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[gt]=e,kt(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[gt]=e,kt(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&qc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),n!==null&&r&4&&qc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),e.flags&32){a=e.stateNode;try{en(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,qc(e,a,n===null?a:n.memoizedProps)),r&1024&&(tl=!0);break;case 6:if(hl(t,e),vl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=gl,gl=gf(t.containerInfo),hl(t,e),gl=a,vl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}tl&&(tl=!1,yl(e));break;case 4:r=gl,gl=gf(e.stateNode.containerInfo),hl(t,e),vl(e),gl=r;break;case 12:hl(t,e),vl(e);break;case 31:hl(t,e),vl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 13:hl(t,e),vl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=Fe()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=$c,d=el;if($c=u||a,el=d||l,hl(t,e),el=d,$c=u,vl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||$c||el||xl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,ml(e,n))));break;case 19:hl(t,e),vl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 30:break;case 21:break;default:hl(t,e),vl(e)}}function vl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Jc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;Zc(e,Yc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(en(o,``),n.flags&=-33),Zc(e,Yc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Xc(e,Yc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;yl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function bl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)al(e,t.alternate,t),t=t.sibling}function xl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Vc(4,t,t.return),xl(t);break;case 1:Gc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Uc(t,t.return,n),xl(t);break;case 27:pf(t.stateNode);case 26:case 5:Gc(t,t.return),xl(t);break;case 22:t.memoizedState===null&&xl(t);break;case 30:xl(t);break;default:xl(t)}e=e.sibling}}function Sl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Sl(i,a,n),Bc(4,a);break;case 1:if(Sl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)qa(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Hc(a),Wc(a,a.return);break;case 27:Qc(a);case 26:case 5:Sl(i,a,n),n&&r===null&&o&4&&Kc(a),Wc(a,a.return);break;case 12:Sl(i,a,n);break;case 31:Sl(i,a,n),n&&o&4&&dl(i,a);break;case 13:Sl(i,a,n),n&&o&4&&fl(i,a);break;case 22:a.memoizedState===null&&Sl(i,a,n),Wc(a,a.return);break;case 30:break;default:Sl(i,a,n)}t=t.sibling}}function Cl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&sa(n))}function wl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&sa(e))}function Tl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)El(e,t,n,r),t=t.sibling}function El(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Tl(e,t,n,r),i&2048&&Bc(9,t);break;case 1:Tl(e,t,n,r);break;case 3:Tl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&sa(e)));break;case 12:if(i&2048){Tl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Tl(e,t,n,r);break;case 31:Tl(e,t,n,r);break;case 13:Tl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Tl(e,t,n,r):(a._visibility|=2,Dl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Tl(e,t,n,r):Ol(e,t),i&2048&&Cl(o,t);break;case 24:Tl(e,t,n,r),i&2048&&wl(t.alternate,t);break;default:Tl(e,t,n,r)}}function Dl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Dl(a,o,s,c,i),Bc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Dl(a,o,s,c,i)):u._visibility&2?Dl(a,o,s,c,i):Ol(a,o),i&&l&2048&&Cl(o.alternate,o);break;case 24:Dl(a,o,s,c,i),i&&l&2048&&wl(o.alternate,o);break;default:Dl(a,o,s,c,i)}t=t.sibling}}function Ol(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Ol(n,r),i&2048&&Cl(r.alternate,r);break;case 24:Ol(n,r),i&2048&&wl(r.alternate,r);break;default:Ol(n,r)}t=t.sibling}}var kl=8192;function Al(e,t,n){if(e.subtreeFlags&kl)for(e=e.child;e!==null;)jl(e,t,n),e=e.sibling}function jl(e,t,n){switch(e.tag){case 26:Al(e,t,n),e.flags&kl&&e.memoizedState!==null&&Gf(n,gl,e.memoizedState,e.memoizedProps);break;case 5:Al(e,t,n);break;case 3:case 4:var r=gl;gl=gf(e.stateNode.containerInfo),Al(e,t,n),gl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=kl,kl=16777216,Al(e,t,n),kl=r):Al(e,t,n));break;default:Al(e,t,n)}}function Ml(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Nl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];rl=r,Il(r,e)}Ml(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Pl(e),e=e.sibling}function Pl(e){switch(e.tag){case 0:case 11:case 15:Nl(e),e.flags&2048&&Vc(9,e,e.return);break;case 3:Nl(e);break;case 12:Nl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Fl(e)):Nl(e);break;default:Nl(e)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];rl=r,Il(r,e)}Ml(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Vc(8,t,t.return),Fl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Fl(t));break;default:Fl(t)}e=e.sibling}}function Il(e,t){for(;rl!==null;){var n=rl;switch(n.tag){case 0:case 11:case 15:Vc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:sa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,rl=r;else a:for(n=e;rl!==null;){r=rl;var i=r.sibling,a=r.return;if(ol(r),r===n){rl=null;break a}if(i!==null){i.return=a,rl=i;break a}rl=a}}}var Ll={getCacheForType:function(e){var t=ea(V),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ea(V).controller.signal}},Rl=typeof WeakMap==`function`?WeakMap:Map,K=0,q=null,J=null,Y=0,X=0,zl=null,Bl=!1,Vl=!1,Hl=!1,Ul=0,Wl=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return K&2&&Y!==0?Y&-Y:E.T===null?pt():dd()}function mu(){if(Jl===0)if(!(Y&536870912)||B){var e=Qe;Qe<<=1,!(Qe&3932160)&&(Qe=262144),Jl=e}else Jl=536870912;return e=eo.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===q&&(X===2||X===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,Y,Jl,!1)),ot(e,n),(!(K&2)||e!==q)&&(e===q&&(!(K&2)&&(Kl|=n),Wl===4&&yu(e,Y,Jl,!1)),rd(e))}function gu(e,t,n){if(K&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||nt(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Vl&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Hl&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Bl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-Fe(),10<a)){if(yu(r,t,Jl,!Bl),tt(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ln},jl(t,a,d);var m=(a&62914560)===a?$l-Fe():(a&4194048)===a?eu-Fe():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Er(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-qe(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&ct(e,n,t)}function bu(){return K&6?!0:(id(0,!1),!1)}function xu(){if(J!==null){if(X===0)var e=J.return;else e=J,Ki=Gi=null,Do(e),ka=null,Aa=0,e=J;for(;e!==null;)zc(e.alternate,e),e=e.return;J=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),q=e,J=n=mi(e.current,null),Y=t,X=0,zl=null,Bl=!1,Vl=nt(e,t),Hl=!1,Yl=Jl=ql=Kl=Gl=Wl=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-qe(r),a=1<<i;t|=e[i],r&=~a}return Ul=t,ii(),n}function Cu(e,t){U=null,E.H=Ls,t===ya||t===xa?(t=Da(),X=3):t===ba?(t=Da(),X=4):X=t===tc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,zl=t,J===null&&(Wl=1,Ys(e,Si(t,e.current)))}function wu(){var e=eo.current;return e===null?!0:(Y&4194048)===Y?to===null:(Y&62914560)===Y||Y&536870912?e===to:!1}function Tu(){var e=E.H;return E.H=Ls,e===null?Ls:e}function Eu(){var e=E.A;return E.A=Ll,e}function Du(){Wl=4,Bl||(Y&4194048)!==Y&&eo.current!==null||(Vl=!0),!(Gl&134217727)&&!(Kl&134217727)||q===null||yu(q,Y,Jl,!1)}function Ou(e,t,n){var r=K;K|=2;var i=Tu(),a=Eu();(q!==e||Y!==t)&&(nu=null,Su(e,t)),t=!1;var o=Wl;a:do try{if(X!==0&&J!==null){var s=J,c=zl;switch(X){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:eo.current===null&&(t=!0);var l=X;if(X=0,zl=null,Pu(e,s,c,l),n&&Vl){o=0;break a}break;default:l=X,X=0,zl=null,Pu(e,s,c,l)}}ku(),o=Wl;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Ki=Gi=null,K=r,E.H=i,E.A=a,J===null&&(q=null,Y=0,ii()),o}function ku(){for(;J!==null;)Mu(J)}function Au(e,t){var n=K;K|=2;var r=Tu(),a=Eu();q!==e||Y!==t?(nu=null,tu=Fe()+500,Su(e,t)):Vl=nt(e,t);a:do try{if(X!==0&&J!==null){t=J;var o=zl;b:switch(X){case 1:X=0,zl=null,Pu(e,t,o,1);break;case 2:case 9:if(Ca(o)){X=0,zl=null,Nu(t);break}t=function(){X!==2&&X!==9||q!==e||(X=7),rd(e)},o.then(t,t);break a;case 3:X=7;break a;case 4:X=5;break a;case 7:Ca(o)?(X=0,zl=null,Nu(t)):(X=0,zl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(J.tag){case 26:s=J.memoizedState;case 5:case 27:var c=J;if(s?Wf(s):c.stateNode.complete){X=0,zl=null;var l=c.sibling;if(l!==null)J=l;else{var u=c.return;u===null?J=null:(J=u,Fu(u))}break b}}X=0,zl=null,Pu(e,t,o,5);break;case 6:X=0,zl=null,Pu(e,t,o,6);break;case 8:xu(),Wl=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Ki=Gi=null,E.H=r,E.A=a,K=n,J===null?(q=null,Y=0,ii(),Wl):0}function ju(){for(;J!==null&&!Ne();)Mu(J)}function Mu(e){var t=jc(e.alternate,e,Ul);e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=hc(n,t,t.pendingProps,t.type,void 0,Y);break;case 11:t=hc(n,t,t.pendingProps,t.type.render,t.ref,Y);break;case 5:Do(t);default:zc(n,t),t=J=hi(t,Ul),t=jc(n,t,Ul)}e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Pu(e,t,n,r){Ki=Gi=null,Do(t),ka=null,Aa=0;var i=t.return;try{if(ec(e,i,t,n,Y)){Wl=1,Ys(e,Si(n,e.current)),J=null;return}}catch(t){if(i!==null)throw J=i,t;Wl=1,Ys(e,Si(n,e.current)),J=null;return}t.flags&32768?(B||r===1?e=!0:Vl||Y&536870912?e=!1:(Bl=e=!0,(r===2||r===9||r===3||r===6)&&(r=eo.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Bl);return}e=t.return;var n=Lc(t.alternate,t,Ul);if(n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);Wl===0&&(Wl=5)}function Iu(e,t){do{var n=Rc(e.alternate,e);if(n!==null){n.flags&=32767,J=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){J=e;return}J=e=n}while(e!==null);Wl=6,J=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(K&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ri,st(e,n,o,s,c,l),e===q&&(J=q=null,Y=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(ze,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=E.T,E.T=null,a=D.p,D.p=2,s=K,K|=4;try{il(e,t,n)}finally{K=s,D.p=a,E.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=K;K|=4;try{_l(t,e);var a=zd,o=jr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Ar(s.ownerDocument.documentElement,s)){if(c!==null&&Mr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=kr(s,h),v=kr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{K=i,D.p=r,E.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=K;K|=4;try{al(e,t.alternate,t)}finally{K=i,D.p=r,E.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,Pe();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),ft(n),t=t.stateNode,Ge&&typeof Ge.onCommitFiberRoot==`function`)try{Ge.onCommitFiberRoot(We,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=E.T,i=D.p,D.p=2,E.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{E.T=t,D.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,sa(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=ft(su),r=E.T,a=D.p;try{D.p=32>n?32:n,E.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,K&6)throw Error(i(331));var c=K;if(K|=4,Pl(o.current),El(o,o.current,s,n),K=c,id(0,!1),Ge&&typeof Ge.onPostCommitFiberRoot==`function`)try{Ge.onPostCommitFiberRoot(We,o)}catch{}return!0}finally{D.p=a,E.T=r,Vu(e,t)}}function Wu(e,t,n){t=Si(n,t),t=Zs(e.stateNode,t,2),e=Va(e,t,2),e!==null&&(ot(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=Si(n,e),n=Qs(2),r=Va(t,n,2),r!==null&&($s(n,r,t,e),ot(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Rl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Hl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,q===e&&(Y&n)===n&&(Wl===4||Wl===3&&(Y&62914560)===Y&&300>Fe()-$l?!(K&2)&&Su(e,0):ql|=n,Yl===Y&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=it()),e=si(e,t),e!==null&&(ot(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return je(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-qe(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=Y,a=tt(r,r===q?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||nt(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Fe(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-qe(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=rt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=q,n=Y,n=tt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(X===2||X===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Me(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||nt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Me(r),ft(n)){case 2:case 8:n=Re;break;case 32:n=ze;break;case 268435456:n=Ve;break;default:n=ze}return r=cd.bind(null,e),n=je(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Me(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=Y;return r=tt(e,e===q?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Fe()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){K&6?je(Le,ad):od()})}function dd(){if(nd===0){var e=ua;e===0&&(e=Ze,Ze<<=1,!(Ze&261888)&&(Ze=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:cn(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[_t]||null).action),o=r.submitter;o&&(t=(t=o[_t]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new An(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Cs(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Cs(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<Qr.length;hd++){var gd=Qr[hd];$r(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}$r(Wr,`onAnimationEnd`),$r(Gr,`onAnimationIteration`),$r(Kr,`onAnimationStart`),$r(`dblclick`,`onDoubleClick`),$r(`focusin`,`onFocus`),$r(`focusout`,`onBlur`),$r(qr,`onTransitionRun`),$r(Jr,`onTransitionStart`),$r(Yr,`onTransitionCancel`),$r(Xr,`onTransitionEnd`),Nt(`onMouseEnter`,[`mouseout`,`mouseover`]),Nt(`onMouseLeave`,[`mouseout`,`mouseover`]),Nt(`onPointerEnter`,[`pointerout`,`pointerover`]),Nt(`onPointerLeave`,[`pointerout`,`pointerover`]),Mt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Mt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Mt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Mt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Mt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Mt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ei(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ei(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[yt];n===void 0&&(n=t[yt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,At.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!yn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Tt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}gn(function(){var r=a,i=dn(n),s=[];a:{var c=Zr.get(e);if(c!==void 0){var l=An,u=e;switch(e){case`keypress`:if(Tn(n)===0)break a;case`keydown`:case`keyup`:l=qn;break;case`focusin`:u=`focus`,l=Rn;break;case`focusout`:u=`blur`,l=Rn;break;case`beforeblur`:case`afterblur`:l=Rn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=In;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Ln;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=j;break;case Wr:case Gr:case Kr:l=zn;break;case Xr:l=Yn;break;case`scroll`:case`scrollend`:l=jn;break;case`wheel`:l=Xn;break;case`copy`:case`cut`:case`paste`:l=Bn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Jn;break;case`toggle`:case`beforetoggle`:l=M}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=_n(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==un&&(u=n.relatedTarget||n.fromElement)&&(Tt(u)||u[vt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?Tt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=In,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Jn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Dt(l),h=u==null?c:Dt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,Tt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?Dt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=P;else if(lr(c))if(hr)v=wr;else{v=Sr;var y=xr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&an(r.elementType)&&(v=P):v=Cr;if(v&&=v(e,r)){ur(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Xt(c,`number`,c.value)}switch(y=r?Dt(r):window,e){case`focusin`:(lr(y)||y.contentEditable===`true`)&&(Pr=y,Fr=r,Ir=null);break;case`focusout`:Ir=Fr=Pr=null;break;case`mousedown`:Lr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Lr=!1,Rr(s,n,i);break;case`selectionchange`:if(Nr)break;case`keydown`:case`keyup`:Rr(s,n,i)}var b;if(Qn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else or?ir(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(tr&&n.locale!==`ko`&&(or||x!==`onCompositionStart`?x===`onCompositionEnd`&&or&&(b=wn()):(xn=i,Sn=`value`in xn?xn.value:xn.textContent,or=!0)),y=Ed(r,x),0<y.length&&(x=new Vn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=ar(n),b!==null&&(x.data=b)))),(b=er?N(e,n):sr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Vn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=_n(e,n),i!=null&&r.unshift(Td(e,i,a)),i=_n(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=_n(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=_n(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||en(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&en(e,``+r);break;case`className`:k(e,`class`,r);break;case`tabIndex`:k(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:k(e,n,r);break;case`style`:rn(e,r,o);break;case`data`:if(t!==`object`){k(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=cn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=cn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=ln);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=cn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Rt(e,`popover`,r);break;case`xlinkActuate`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Rt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=on.get(n)||n,Rt(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:rn(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?en(e,r):(typeof r==`number`||typeof r==`bigint`)&&en(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=ln);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!jt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[_t]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Rt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Yt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Zt(e,!!r,n,!0):Zt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}$t(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(an(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Jt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Zt(e,!!n,n?[]:``,!1):Zt(e,!!n,t,!0)):Zt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Qt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(an(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[Ct]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),wt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[Ct])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);wt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=D.d;D.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=Et(e);t!==null&&t.tag===5&&t.type===`form`?Ts(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=qt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),kt(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+qt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+qt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+qt(n.imageSizes)+`"]`)):i+=`[href="`+qt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=m({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),kt(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+qt(r)+`"][href="`+qt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=m({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),kt(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Ot(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=m({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);kt(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Ot(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=m({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),kt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Ot(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=m({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),kt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=_e.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Ot(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=Ot(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Ot(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+qt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return m({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),kt(t),e.head.appendChild(t))}function Pf(e){return`[src="`+qt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+qt(n.href)+`"]`);if(r)return t.instance=r,kt(r),r;var a=m({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),kt(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,kt(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),kt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,kt(a),a):(r=n,(a=mf.get(o))&&(r=m({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),kt(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[Ct]||a[gt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,kt(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),kt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:S,Provider:null,Consumer:null,_currentValue:ue,_currentValue2:ue,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=at(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=at(0),this.hiddenUpdates=at(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=fi(3,null,null,t),e.current=a,a.stateNode=e,t=oa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ra(a),e}function tp(e){return e?(e=ui,e):ui}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ba(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Va(e,r,t),n!==null&&(hu(n,e,t),Ha(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=si(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=dt(t);var n=si(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=2,up(e,t,n,r)}finally{D.p=a,E.T=i}}function lp(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=8,up(e,t,n,r)}finally{D.p=a,E.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Et(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=et(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-qe(o);s.entanglements[1]|=c,o&=~c}rd(a),!(K&6)&&(tu=Fe()+500,id(0,!1))}}break;case 31:case 13:s=si(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=dn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=Tt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ie()){case Le:return 2;case Re:return 8;case ze:case Be:return 32;case Ve:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Et(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=Tt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,mt(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,mt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);un=r,n.target.dispatchEvent(r),un=null}else return t=Et(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Et(n);a!==null&&(e.splice(t,3),t-=3,Cs(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[_t]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[_t]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[vt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=pt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.4`)throw Error(i(527,Lp,`19.2.4`));D.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=u(t),e=e===null?null:f(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.4`,rendererPackageName:`react-dom`,currentDispatcherRef:E,reconcilerVersion:`19.2.4`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{We=zp.inject(Rp),Ge=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Ks,s=qs,c=Js;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[vt]=t.current,Sd(e),new Fp(t)}})),_=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=g()})),v=l(d(),1),y=_(),b=`modulepreload`,x=function(e){return`/flowgentra-ai-docs/`+e},ee={},S=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=x(t,n),t in ee)return;ee[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:b,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},C=`popstate`;function te(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function ne(e={}){function t(e,t){let n=t.state?.masked,{pathname:r,search:i,hash:a}=n||e.location;return ae(``,{pathname:r,search:i,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||`default`,n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)}function n(e,t){return typeof t==`string`?t:oe(t)}return ce(t,n,null,e)}function w(e,t){if(e===!1||e==null)throw Error(t)}function T(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function re(){return Math.random().toString(36).substring(2,10)}function ie(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.unstable_mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function ae(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?se(t):t,state:n,key:t&&t.key||r||re(),unstable_mask:i}}function oe({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function se(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function ce(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=te(e)?e:ae(h.location,e,t);n&&n(r,e),l=u()+1;let d=ie(r,l),f=h.createHref(r.unstable_mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=te(e)?e:ae(h.location,e,t);n&&n(r,e),l=u();let i=ie(r,l),d=h.createHref(r.unstable_mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return le(e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(C,d),c=e,()=>{i.removeEventListener(C,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function le(e,t=!1){let n=`http://localhost`;typeof window<`u`&&(n=window.location.origin===`null`?window.location.href:window.location.origin),w(n,`No window.location.(origin|href) available to create URL`);let r=typeof e==`string`?e:oe(e);return r=r.replace(/ $/,`%20`),!t&&r.startsWith(`//`)&&(r=n+r),new URL(r,n)}function E(e,t,n=`/`){return D(e,t,n,!1)}function D(e,t,n,r){let i=Ee((typeof t==`string`?se(t):t).pathname||`/`,n);if(i==null)return null;let a=de(e);pe(a);let o=null;for(let e=0;o==null&&e<a.length;++e){let t=Te(i);o=Se(a[e],t,r)}return o}function ue(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function de(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;w(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=Pe([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(w(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),de(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:be(l,e.index),routesMeta:u})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of fe(e.path))a(e,t,!0,n)}),t}function fe(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=fe(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function pe(e){e.sort((e,t)=>e.score===t.score?xe(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var me=/^:[\w-]+$/,O=3,he=2,ge=1,_e=10,ve=-2,ye=e=>e===`*`;function be(e,t){let n=e.split(`/`),r=n.length;return n.some(ye)&&(r+=ve),t&&(r+=he),n.filter(e=>!ye(e)).reduce((e,t)=>e+(me.test(t)?O:t===``?ge:_e),r)}function xe(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function Se(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u=Ce({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},l),d=s.route;if(!u&&c&&n&&!r[r.length-1].route.index&&(u=Ce({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:Pe([a,u.pathname]),pathnameBase:Fe(Pe([a,u.pathnameBase])),route:d}),u.pathnameBase!==`/`&&(a=Pe([a,u.pathnameBase]))}return o}function Ce(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=we(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return n&&!i?e[t]=void 0:e[t]=(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function we(e,t=!1,n=!0){T(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function Te(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return T(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Ee(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}var De=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Oe(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?se(e):e,a;return n?(n=n.replace(/\/\/+/g,`/`),a=n.startsWith(`/`)?ke(n.substring(1),`/`):ke(n,t)):a=t,{pathname:a,search:Ie(r),hash:Le(i)}}function ke(e,t){let n=t.replace(/\/+$/,``).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function Ae(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function je(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Me(e){let t=je(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Ne(e,t,n,r=!1){let i;typeof e==`string`?i=se(e):(i={...e},w(!i.pathname||!i.pathname.includes(`?`),Ae(`?`,`pathname`,`search`,i)),w(!i.pathname||!i.pathname.includes(`#`),Ae(`#`,`pathname`,`hash`,i)),w(!i.search||!i.search.includes(`#`),Ae(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=Oe(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var Pe=e=>e.join(`/`).replace(/\/\/+/g,`/`),Fe=e=>e.replace(/\/+$/,``).replace(/^\/*/,`/`),Ie=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,Le=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,Re=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function ze(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function Be(e){return e.map(e=>e.route.path).filter(Boolean).join(`/`).replace(/\/\/*/g,`/`)||`/`}var Ve=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function He(e,t){let n=e;if(typeof n!=`string`||!De.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(Ve)try{let e=new URL(window.location.href),r=n.startsWith(`//`)?new URL(e.protocol+n):new URL(n),a=Ee(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{T(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var Ue=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(Ue);var We=[`GET`,...Ue];new Set(We);var Ge=v.createContext(null);Ge.displayName=`DataRouter`;var Ke=v.createContext(null);Ke.displayName=`DataRouterState`;var qe=v.createContext(!1);function Je(){return v.useContext(qe)}var Ye=v.createContext({isTransitioning:!1});Ye.displayName=`ViewTransition`;var Xe=v.createContext(new Map);Xe.displayName=`Fetchers`;var Ze=v.createContext(null);Ze.displayName=`Await`;var Qe=v.createContext(null);Qe.displayName=`Navigation`;var $e=v.createContext(null);$e.displayName=`Location`;var et=v.createContext({outlet:null,matches:[],isDataRoute:!1});et.displayName=`Route`;var tt=v.createContext(null);tt.displayName=`RouteError`;var nt=`REACT_ROUTER_ERROR`,rt=`REDIRECT`,it=`ROUTE_ERROR_RESPONSE`;function at(e){if(e.startsWith(`${nt}:${rt}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function ot(e){if(e.startsWith(`${nt}:${it}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new Re(t.status,t.statusText,t.data)}catch{}}function st(e,{relative:t}={}){w(ct(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=v.useContext(Qe),{hash:i,pathname:a,search:o}=ht(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:Pe([n,a])),r.createHref({pathname:s,search:o,hash:i})}function ct(){return v.useContext($e)!=null}function lt(){return w(ct(),`useLocation() may be used only in the context of a <Router> component.`),v.useContext($e).location}var ut=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function dt(e){v.useContext(Qe).static||v.useLayoutEffect(e)}function ft(){let{isDataRoute:e}=v.useContext(et);return e?Pt():pt()}function pt(){w(ct(),`useNavigate() may be used only in the context of a <Router> component.`);let e=v.useContext(Ge),{basename:t,navigator:n}=v.useContext(Qe),{matches:r}=v.useContext(et),{pathname:i}=lt(),a=JSON.stringify(Me(r)),o=v.useRef(!1);return dt(()=>{o.current=!0}),v.useCallback((r,s={})=>{if(T(o.current,ut),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=Ne(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:Pe([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}v.createContext(null);function mt(){let{matches:e}=v.useContext(et),t=e[e.length-1];return t?t.params:{}}function ht(e,{relative:t}={}){let{matches:n}=v.useContext(et),{pathname:r}=lt(),i=JSON.stringify(Me(n));return v.useMemo(()=>Ne(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function gt(e,t){return _t(e,t)}function _t(e,t,n){w(ct(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=v.useContext(Qe),{matches:i}=v.useContext(et),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;It(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=lt(),d;if(t){let e=typeof t==`string`?se(t):t;w(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=E(e,{pathname:p});T(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),T(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=wt(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:Pe([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:Pe([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?v.createElement($e.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,unstable_mask:void 0,...d},navigationType:`POP`}},h):h}function vt(){let e=Nt(),t=ze(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=v.createElement(v.Fragment,null,v.createElement(`p`,null,`💿 Hey developer 👋`),v.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,v.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,v.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),v.createElement(v.Fragment,null,v.createElement(`h2`,null,`Unexpected Application Error!`),v.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?v.createElement(`pre`,{style:i},n):null,o)}var yt=v.createElement(vt,null),bt=class extends v.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=ot(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:v.createElement(et.Provider,{value:this.props.routeContext},v.createElement(tt.Provider,{value:e,children:this.props.component}));return this.context?v.createElement(St,{error:e},t):t}};bt.contextType=qe;var xt=new WeakMap;function St({children:e,error:t}){let{basename:n}=v.useContext(Qe);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=at(t.digest);if(e){let r=xt.get(t);if(r)throw r;let i=He(e.location,n);if(Ve&&!xt.get(t))if(i.isExternal||e.reloadDocument)window.location.href=i.absoluteURL||i.to;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw xt.set(t,n),n}return v.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${i.absoluteURL||i.to}`})}}return e}function Ct({routeContext:e,match:t,children:n}){let r=v.useContext(Ge);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),v.createElement(et.Provider,{value:e},n)}function wt(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);w(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},unstable_pattern:Be(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||yt,o&&(s<0&&c===0?(It(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?v.createElement(n.route.Component,null):n.route.element?n.route.element:e,v.createElement(Ct,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?v.createElement(bt,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function Tt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Et(e){let t=v.useContext(Ge);return w(t,Tt(e)),t}function Dt(e){let t=v.useContext(Ke);return w(t,Tt(e)),t}function Ot(e){let t=v.useContext(et);return w(t,Tt(e)),t}function kt(e){let t=Ot(e),n=t.matches[t.matches.length-1];return w(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function At(){return kt(`useRouteId`)}function jt(){return Dt(`useNavigation`).navigation}function Mt(){let{matches:e,loaderData:t}=Dt(`useMatches`);return v.useMemo(()=>e.map(e=>ue(e,t)),[e,t])}function Nt(){let e=v.useContext(tt),t=Dt(`useRouteError`),n=kt(`useRouteError`);return e===void 0?t.errors?.[n]:e}function Pt(){let{router:e}=Et(`useNavigate`),t=kt(`useNavigate`),n=v.useRef(!1);return dt(()=>{n.current=!0}),v.useCallback(async(r,i={})=>{T(n.current,ut),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var Ft={};function It(e,t,n){!t&&!Ft[e]&&(Ft[e]=!0,T(!1,n))}v.useOptimistic,v.memo(Lt);function Lt({routes:e,future:t,state:n,isStatic:r,onError:i}){return _t(e,void 0,{state:n,isStatic:r,onError:i,future:t})}function Rt({to:e,replace:t,state:n,relative:r}){w(ct(),`<Navigate> may be used only in the context of a <Router> component.`);let{static:i}=v.useContext(Qe);T(!i,`<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.`);let{matches:a}=v.useContext(et),{pathname:o}=lt(),s=ft(),c=Ne(e,Me(a),o,r===`path`),l=JSON.stringify(c);return v.useEffect(()=>{s(JSON.parse(l),{replace:t,state:n,relative:r})},[s,l,r,t,n]),null}function k(e){w(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function zt({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,unstable_useTransitions:o}){w(!ct(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=v.useMemo(()=>({basename:s,navigator:i,static:a,unstable_useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=se(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,unstable_mask:m}=n,h=v.useMemo(()=>{let e=Ee(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,unstable_mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return T(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:v.createElement(Qe.Provider,{value:c},v.createElement($e.Provider,{children:t,value:h}))}function Bt({children:e,location:t}){return gt(Vt(e),t)}v.Component;function Vt(e,t=[]){let n=[];return v.Children.forEach(e,(e,r)=>{if(!v.isValidElement(e))return;let i=[...t,r];if(e.type===v.Fragment){n.push.apply(n,Vt(e.props.children,i));return}w(e.type===k,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),w(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=Vt(e.props.children,i)),n.push(a)}),n}var Ht=`get`,Ut=`application/x-www-form-urlencoded`;function Wt(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function Gt(e){return Wt(e)&&e.tagName.toLowerCase()===`button`}function Kt(e){return Wt(e)&&e.tagName.toLowerCase()===`form`}function qt(e){return Wt(e)&&e.tagName.toLowerCase()===`input`}function Jt(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Yt(e,t){return e.button===0&&(!t||t===`_self`)&&!Jt(e)}var Xt=null;function Zt(){if(Xt===null)try{new FormData(document.createElement(`form`),0),Xt=!1}catch{Xt=!0}return Xt}var Qt=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function $t(e){return e!=null&&!Qt.has(e)?(T(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ut}"`),null):e}function en(e,t){let n,r,i,a,o;if(Kt(e)){let o=e.getAttribute(`action`);r=o?Ee(o,t):null,n=e.getAttribute(`method`)||Ht,i=$t(e.getAttribute(`enctype`))||Ut,a=new FormData(e)}else if(Gt(e)||qt(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?Ee(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||Ht,i=$t(e.getAttribute(`formenctype`))||$t(o.getAttribute(`enctype`))||Ut,a=new FormData(o,e),!Zt()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(Wt(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=Ht,r=null,i=Ut,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var tn={"&":`\\u0026`,">":`\\u003e`,"<":`\\u003c`,"\u2028":`\\u2028`,"\u2029":`\\u2029`},nn=/[&><\u2028\u2029]/g;function rn(e){return e.replace(nn,e=>tn[e])}function an(e,t){if(e===!1||e==null)throw Error(t)}function on(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return n?i.pathname.endsWith(`/`)?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:i.pathname===`/`?i.pathname=`_root.${r}`:t&&Ee(i.pathname,t)===`/`?i.pathname=`${t.replace(/\/$/,``)}/_root.${r}`:i.pathname=`${i.pathname.replace(/\/$/,``)}.${r}`,i}async function sn(e,t){if(e.id in t)return t[e.id];try{let n=await S(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function cn(e){return e!=null&&typeof e.page==`string`}function ln(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function un(e,t,n){return hn((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await sn(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(ln).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function dn(e,t,n,r,i,a){let o=(e,t)=>n[t]?e.route.id!==n[t].route.id:!0,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function fn(e,t,{includeHydrateFallback:n}={}){return pn(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function pn(e){return[...new Set(e)]}function mn(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function hn(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!cn(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(mn(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function gn(){let e=v.useContext(Ge);return an(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function _n(){let e=v.useContext(Ke);return an(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var vn=v.createContext(void 0);vn.displayName=`FrameworkContext`;function yn(){let e=v.useContext(vn);return an(e,`You must render this element inside a <HydratedRouter> element`),e}function bn(e,t){let n=v.useContext(vn),[r,i]=v.useState(!1),[a,o]=v.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=v.useRef(null);v.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),v.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:xn(s,p),onBlur:xn(c,m),onMouseEnter:xn(l,p),onMouseLeave:xn(u,m),onTouchStart:xn(d,p)}]:[a,f,{}]:[!1,f,{}]}function xn(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Sn({page:e,...t}){let n=Je(),{router:r}=gn(),i=v.useMemo(()=>E(r.routes,e,r.basename),[r.routes,e,r.basename]);return i?n?v.createElement(wn,{page:e,matches:i,...t}):v.createElement(Tn,{page:e,matches:i,...t}):null}function Cn(e){let{manifest:t,routeModules:n}=yn(),[r,i]=v.useState([]);return v.useEffect(()=>{let r=!1;return un(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function wn({page:e,matches:t,...n}){let r=lt(),{future:i}=yn(),{basename:a}=gn(),o=v.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=on(e,a,i.unstable_trailingSlashAwareDataRequests,`rsc`),o=!1,s=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set(`_routes`,s.join(`,`)),[n.pathname+n.search]},[a,i.unstable_trailingSlashAwareDataRequests,e,r,t]);return v.createElement(v.Fragment,null,o.map(e=>v.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function Tn({page:e,matches:t,...n}){let r=lt(),{future:i,manifest:a,routeModules:o}=yn(),{basename:s}=gn(),{loaderData:c,matches:l}=_n(),u=v.useMemo(()=>dn(e,t,l,a,r,`data`),[e,t,l,a,r]),d=v.useMemo(()=>dn(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=v.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=on(e,s,i.unstable_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.unstable_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=v.useMemo(()=>fn(d,a),[d,a]),m=Cn(d);return v.createElement(v.Fragment,null,f.map(e=>v.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>v.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>v.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function En(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}v.Component;var Dn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{Dn&&(window.__reactRouterVersion=`7.14.0`)}catch{}function On({basename:e,children:t,unstable_useTransitions:n,window:r}){let i=v.useRef();i.current??=ne({window:r,v5Compat:!0});let a=i.current,[o,s]=v.useState({action:a.action,location:a.location}),c=v.useCallback(e=>{n===!1?s(e):v.startTransition(()=>s(e))},[n]);return v.useLayoutEffect(()=>a.listen(c),[a,c]),v.createElement(zt,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,unstable_useTransitions:n})}function kn({basename:e,children:t,history:n,unstable_useTransitions:r}){let[i,a]=v.useState({action:n.action,location:n.location}),o=v.useCallback(e=>{r===!1?a(e):v.startTransition(()=>a(e))},[r]);return v.useLayoutEffect(()=>n.listen(o),[n,o]),v.createElement(zt,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:n,unstable_useTransitions:r})}kn.displayName=`unstable_HistoryRouter`;var An=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,A=v.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,unstable_mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,unstable_useTransitions:_}=v.useContext(Qe),y=typeof l==`string`&&An.test(l),b=He(l,h);l=b.to;let x=st(l,{relative:r}),ee=lt(),S=null;if(o){let e=Ne(o,[],ee.unstable_mask?ee.unstable_mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:Pe([h,e.pathname])),S=g.createHref(e)}let[C,te,ne]=bn(n,p),w=Ln(l,{replace:a,unstable_mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,unstable_defaultShouldRevalidate:f,unstable_useTransitions:_});function T(t){e&&e(t),t.defaultPrevented||w(t)}let re=!(b.isExternal||i),ie=v.createElement(`a`,{...p,...ne,href:(re?S:void 0)||b.absoluteURL||x,onClick:re?T:e,ref:En(m,te),target:c,"data-discover":!y&&t===`render`?`true`:void 0});return C&&!y?v.createElement(v.Fragment,null,ie,v.createElement(Sn,{page:x})):ie});A.displayName=`Link`;var jn=v.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=ht(a,{relative:c.relative}),d=lt(),f=v.useContext(Ke),{navigator:p,basename:m}=v.useContext(Qe),h=f!=null&&qn(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,_=d.pathname,y=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(_=_.toLowerCase(),y=y?y.toLowerCase():null,g=g.toLowerCase()),y&&m&&(y=Ee(y,m)||y);let b=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,x=_===g||!r&&_.startsWith(g)&&_.charAt(b)===`/`,ee=y!=null&&(y===g||!r&&y.startsWith(g)&&y.charAt(g.length)===`/`),S={isActive:x,isPending:ee,isTransitioning:h},C=x?e:void 0,te;te=typeof n==`function`?n(S):[n,x?`active`:null,ee?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let ne=typeof i==`function`?i(S):i;return v.createElement(A,{...c,"aria-current":C,className:te,ref:l,style:ne,to:a,viewTransition:o},typeof s==`function`?s(S):s)});jn.displayName=`NavLink`;var Mn=v.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=Ht,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f,...p},m)=>{let{unstable_useTransitions:h}=v.useContext(Qe),g=Bn(),_=Vn(s,{relative:l}),y=o.toLowerCase()===`get`?`get`:`post`,b=typeof s==`string`&&An.test(s);return v.createElement(`form`,{ref:m,method:y,action:_,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f});h&&n!==!1?v.startTransition(()=>p()):p()},...p,"data-discover":!b&&e===`render`?`true`:void 0})});Mn.displayName=`Form`;function Nn({getKey:e,storageKey:t,...n}){let r=v.useContext(vn),{basename:i}=v.useContext(Qe),a=lt(),o=Mt();Gn({getKey:e,storageKey:t});let s=v.useMemo(()=>{if(!r||!e)return null;let t=Wn(a,o,i,e);return t===a.key?null:t},[]);if(!r||r.isSpaMode)return null;let c=((e,t)=>{if(!window.history.state||!window.history.state.key){let e=Math.random().toString(32).slice(2);window.history.replaceState({key:e},``)}try{let n=JSON.parse(sessionStorage.getItem(e)||`{}`)[t||window.history.state.key];typeof n==`number`&&window.scrollTo(0,n)}catch(t){console.error(t),sessionStorage.removeItem(e)}}).toString();return v.createElement(`script`,{...n,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${c})(${rn(JSON.stringify(t||Hn))}, ${rn(JSON.stringify(s))})`}})}Nn.displayName=`ScrollRestoration`;function Pn(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Fn(e){let t=v.useContext(Ge);return w(t,Pn(e)),t}function In(e){let t=v.useContext(Ke);return w(t,Pn(e)),t}function Ln(e,{target:t,replace:n,unstable_mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,unstable_defaultShouldRevalidate:c,unstable_useTransitions:l}={}){let u=ft(),d=lt(),f=ht(e,{relative:o});return v.useCallback(p=>{if(Yt(p,t)){p.preventDefault();let t=n===void 0?oe(d)===oe(f):n,m=()=>u(e,{replace:t,unstable_mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,unstable_defaultShouldRevalidate:c});l?v.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}var Rn=0,zn=()=>`__${String(++Rn)}__`;function Bn(){let{router:e}=Fn(`useSubmit`),{basename:t}=v.useContext(Qe),n=At(),r=e.fetch,i=e.navigate;return v.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=en(e,t);a.navigate===!1?await r(a.fetcherKey||zn(),n,a.action||o,{unstable_defaultShouldRevalidate:a.unstable_defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync}):await i(a.action||o,{unstable_defaultShouldRevalidate:a.unstable_defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function Vn(e,{relative:t}={}){let{basename:n}=v.useContext(Qe),r=v.useContext(et);w(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...ht(e||`.`,{relative:t})},o=lt();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:Pe([n,a.pathname])),oe(a)}var Hn=`react-router-scroll-positions`,Un={};function Wn(e,t,n,r){let i=null;return r&&(i=r(n===`/`?e:{...e,pathname:Ee(e.pathname,n)||e.pathname},t)),i??=e.key,i}function Gn({getKey:e,storageKey:t}={}){let{router:n}=Fn(`useScrollRestoration`),{restoreScrollPosition:r,preventScrollReset:i}=In(`useScrollRestoration`),{basename:a}=v.useContext(Qe),o=lt(),s=Mt(),c=jt();v.useEffect(()=>(window.history.scrollRestoration=`manual`,()=>{window.history.scrollRestoration=`auto`}),[]),Kn(v.useCallback(()=>{if(c.state===`idle`){let t=Wn(o,s,a,e);Un[t]=window.scrollY}try{sessionStorage.setItem(t||Hn,JSON.stringify(Un))}catch(e){T(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`)}window.history.scrollRestoration=`auto`},[c.state,e,a,o,s,t])),typeof document<`u`&&(v.useLayoutEffect(()=>{try{let e=sessionStorage.getItem(t||Hn);e&&(Un=JSON.parse(e))}catch{}},[t]),v.useLayoutEffect(()=>{let t=n?.enableScrollRestoration(Un,()=>window.scrollY,e?(t,n)=>Wn(t,n,a,e):void 0);return()=>t&&t()},[n,a,e]),v.useLayoutEffect(()=>{if(r!==!1){if(typeof r==`number`){window.scrollTo(0,r);return}try{if(o.hash){let e=document.getElementById(decodeURIComponent(o.hash.slice(1)));if(e){e.scrollIntoView();return}}}catch{T(!1,`"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}i!==!0&&window.scrollTo(0,0)}},[o,r,i]))}function Kn(e,t){let{capture:n}=t||{};v.useEffect(()=>{let t=n==null?void 0:{capture:n};return window.addEventListener(`pagehide`,e,t),()=>{window.removeEventListener(`pagehide`,e,t)}},[e,n])}function qn(e,{relative:t}={}){let n=v.useContext(Ye);w(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Fn(`useViewTransitionState`),i=ht(e,{relative:t});if(!n.isTransitioning)return!1;let a=Ee(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Ee(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Ce(i.pathname,o)!=null||Ce(i.pathname,a)!=null}var Jn=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),j=o(((e,t)=>{t.exports=Jn()}))(),Yn=(0,v.createContext)(null);function Xn({children:e}){let[t,n]=(0,v.useState)(()=>localStorage.getItem(`fg-lang`)||`rust`);return(0,v.useEffect)(()=>{let e=document.documentElement;t===`python`?e.classList.add(`lang-python`):e.classList.remove(`lang-python`)},[t]),(0,j.jsx)(Yn.Provider,{value:{language:t,setLanguage:e=>{n(e),localStorage.setItem(`fg-lang`,e)}},children:e})}function M(){return(0,v.useContext)(Yn)}function Zn({compact:e=!1}){let{language:t,setLanguage:n}=M(),r={backgroundColor:`var(--accent)`,color:`#fff`,borderColor:`var(--accent)`},i={backgroundColor:`transparent`,color:`#8b949e`,borderColor:`#30363d`},a={cursor:`pointer`,fontFamily:`IBM Plex Sans, sans-serif`,fontWeight:500,fontSize:e?`0.8125rem`:`0.875rem`,padding:e?`4px 12px`:`5px 16px`,border:`1px solid`,transition:`background-color 0.2s, color 0.2s, border-color 0.2s`,display:`flex`,alignItems:`center`,gap:`6px`,whiteSpace:`nowrap`};return(0,j.jsxs)(`div`,{style:{display:`flex`,borderRadius:`6px`,overflow:`hidden`,border:`1px solid #30363d`},children:[(0,j.jsxs)(`button`,{onClick:()=>n(`rust`),style:{...a,borderRadius:0,border:`none`,...t===`rust`?r:i},"aria-pressed":t===`rust`,children:[(0,j.jsx)(`span`,{"aria-hidden":!0,children:`🦀`}),` Rust`]}),(0,j.jsx)(`div`,{style:{width:`1px`,background:`#30363d`}}),(0,j.jsxs)(`button`,{onClick:()=>n(`python`),style:{...a,borderRadius:0,border:`none`,...t===`python`?r:i},"aria-pressed":t===`python`,children:[(0,j.jsx)(`span`,{"aria-hidden":!0,children:`🐍`}),` Python`]})]})}var Qn=[{title:`Introduction`,route:`/docs/getting-started`,desc:`What is Flowgentra? Overview and core concepts.`,tags:[`overview`,`intro`,`start`]},{title:`Quick Start — Python`,route:`/docs/quickstart-python`,desc:`Build your first agent in Python in under 10 minutes.`,tags:[`python`,`install`,`start`,`beginner`]},{title:`Quick Start — Rust`,route:`/docs/quickstart-rust`,desc:`Build your first agent in Rust using StateGraph.`,tags:[`rust`,`install`,`start`,`beginner`]},{title:`Installation`,route:`/docs/installation`,desc:`pip install, Cargo.toml, feature flags, building from source.`,tags:[`install`,`pip`,`cargo`,`setup`]},{title:`What is Flowgentra?`,route:`/docs/what-is-flowgentra`,desc:`Philosophy, key abstractions, comparison to LangGraph.`,tags:[`overview`,`langgraph`,`compare`]},{title:`State & Reducers`,route:`/docs/state-concepts`,desc:`TypedDict, DynState, reducers, Append, Sum, Overwrite.`,tags:[`state`,`reducer`,`typeddict`,`dynstate`]},{title:`Graphs & Execution`,route:`/docs/graphs`,desc:`Building graphs, conditional edges, loops, stream, batch.`,tags:[`graph`,`edge`,`node`,`conditional`,`routing`]},{title:`Nodes`,route:`/docs/nodes`,desc:`Node types, FunctionNode, RetryNode, TimeoutNode, parallel.`,tags:[`node`,`function`,`retry`,`timeout`,`parallel`]},{title:`Runtime & Execution`,route:`/docs/runtime`,desc:`How Flowgentra executes graphs, async runtime, concurrency.`,tags:[`runtime`,`async`,`execution`,`tokio`]},{title:`LLM Integration`,route:`/docs/llm-client`,desc:`LLM class, all providers, chat(), tool calling, streaming.`,tags:[`llm`,`openai`,`anthropic`,`ollama`,`groq`,`chat`]},{title:`LLM Providers`,route:`/docs/llm-providers`,desc:`OpenAI, Anthropic, Ollama, Groq, Mistral, Azure, HuggingFace.`,tags:[`provider`,`openai`,`anthropic`,`azure`,`ollama`]},{title:`Tools & MCP`,route:`/docs/tools`,desc:`ToolDefinition, ToolRegistry, built-in tools, function calling.`,tags:[`tool`,`function`,`calling`,`registry`,`mcp`]},{title:`Memory Management`,route:`/docs/memory`,desc:`ConversationMemory, FileCheckpointer, multi-turn sessions.`,tags:[`memory`,`checkpointer`,`conversation`,`thread`,`session`]},{title:`RAG Pipeline`,route:`/docs/rag`,desc:`Document loading, embeddings, vector stores, retrieval.`,tags:[`rag`,`vector`,`embeddings`,`retrieval`,`search`]},{title:`Evaluation & Scoring`,route:`/docs/evaluation`,desc:`hit_rate, mrr, ndcg, output scoring, grading.`,tags:[`eval`,`metric`,`score`,`hit_rate`,`mrr`]},{title:`Document Loaders`,route:`/docs/document-loaders`,desc:`PDF, CSV, HTML, Markdown, JSON, S3, web loaders.`,tags:[`loader`,`pdf`,`csv`,`html`,`markdown`,`document`]},{title:`Reranking`,route:`/docs/reranking`,desc:`CrossEncoder, RRF reranker, improving retrieval quality.`,tags:[`rerank`,`cross-encoder`,`rrf`,`retrieval`]},{title:`Building Agents`,route:`/docs/agents`,desc:`Predefined agents, config-driven agents, MemoryAwareAgent.`,tags:[`agent`,`react`,`conversational`,`tool`]},{title:`Predefined Agents`,route:`/docs/predefined-agents`,desc:`ZeroShotReAct, FewShotReAct, ToolCalling, Conversational.`,tags:[`react`,`zeroshotreact`,`fewshot`,`conversational`]},{title:`Multi-Agent Supervisor`,route:`/docs/supervisor`,desc:`Supervisor, Sequential, Parallel, LLM-routed orchestration.`,tags:[`supervisor`,`multi-agent`,`orchestration`,`parallel`]},{title:`Human-in-the-Loop`,route:`/docs/human-in-the-loop`,desc:`Interrupt graph execution, await approval, resume.`,tags:[`human`,`approval`,`interrupt`,`hitl`]},{title:`Advanced Nodes`,route:`/docs/advanced-nodes`,desc:`ParallelNode, JoinNode, SubgraphNode, LoopNode patterns.`,tags:[`parallel`,`join`,`subgraph`,`loop`,`advanced`]},{title:`Observability & Tracing`,route:`/docs/observability`,desc:`ExecutionTracer, Mermaid export, token usage, quality scoring.`,tags:[`trace`,`mermaid`,`token`,`cost`,`debug`,`visualization`]},{title:`Configuration & YAML`,route:`/docs/configuration`,desc:`YAML-driven agents, register_handler, from_config_path.`,tags:[`yaml`,`config`,`register`,`handler`,`production`]},{title:`Error Handling`,route:`/docs/error-handling`,desc:`RetryNode, TimeoutNode, fallback chains, circuit breaker.`,tags:[`error`,`retry`,`timeout`,`fallback`,`resilience`]},{title:`MCP Integration`,route:`/docs/mcp`,desc:`Model Context Protocol client, HTTP and stdio connections.`,tags:[`mcp`,`model-context-protocol`,`tool`,`integration`]},{title:`Plugins System`,route:`/docs/plugins`,desc:`Extend Flowgentra, custom node types, plugin registry.`,tags:[`plugin`,`extend`,`custom`,`registry`]},{title:`Middleware`,route:`/docs/middleware`,desc:`Request/response interceptors, logging, auth, transformation.`,tags:[`middleware`,`interceptor`,`logging`,`auth`]},{title:`Input Validation`,route:`/docs/validation`,desc:`Validate state fields, schema enforcement, sanitize inputs.`,tags:[`validation`,`schema`,`input`,`sanitize`]},{title:`Performance Optimization`,route:`/docs/performance`,desc:`Batching, caching, parallel nodes, cost reduction strategies.`,tags:[`performance`,`cache`,`batch`,`speed`,`cost`]},{title:`Database Integration`,route:`/docs/database`,desc:`SQLite, Postgres, MongoDB, document stores.`,tags:[`database`,`sqlite`,`postgres`,`mongo`,`sql`]},{title:`StateGraph API`,route:`/docs/api/state-graph`,desc:`StateGraph, builder, add_node, add_edge, compile, invoke.`,tags:[`api`,`stategraph`,`graph`,`builder`]},{title:`LLM API`,route:`/docs/api/llm-clients`,desc:`LLM class, LLMConfig, Message, ToolDefinition, TokenUsage.`,tags:[`api`,`llm`,`llmconfig`,`message`]},{title:`Agents API`,route:`/docs/api/agents`,desc:`Agent, AgentBuilder, AgentType, from_config_path.`,tags:[`api`,`agent`,`agentbuilder`]},{title:`Memory API`,route:`/docs/api/memory-types`,desc:`ConversationMemory, FileCheckpointer, AsyncSqliteCheckpointer.`,tags:[`api`,`memory`,`checkpointer`]},{title:`RAG API`,route:`/docs/api/rag-config`,desc:`InMemoryVectorStore, Embeddings, RecursiveCharacterTextSplitter.`,tags:[`api`,`rag`,`vector`,`embeddings`]},{title:`Supervisor API`,route:`/docs/api/supervisor`,desc:`Supervisor, OrchestrationStrategy, agent routing.`,tags:[`api`,`supervisor`,`multi-agent`]},{title:`Observability API`,route:`/docs/api/observability`,desc:`ExecutionTracer, graph_to_mermaid, evaluate_output_score.`,tags:[`api`,`tracer`,`mermaid`,`score`]},{title:`Tutorial: Research Assistant`,route:`/docs/tutorials/research-assistant`,desc:`Full end-to-end guide: classification, tools, memory, traces.`,tags:[`tutorial`,`guide`,`e2e`,`end-to-end`,`research`]},{title:`Code Examples`,route:`/docs/examples`,desc:`Copy-paste examples: agents, RAG, streaming, multi-agent.`,tags:[`example`,`code`,`snippet`]},{title:`Best Practices`,route:`/docs/best-practices`,desc:`Production tips: state design, error handling, cost control.`,tags:[`best-practice`,`production`,`tip`]},{title:`Glossary`,route:`/docs/glossary`,desc:`Definitions: StateGraph, Node, Reducer, Checkpointer, etc.`,tags:[`glossary`,`definition`,`term`]},{title:`FAQ`,route:`/docs/faq`,desc:`Common questions about Flowgentra setup and usage.`,tags:[`faq`,`help`,`question`]},{title:`Changelog`,route:`/docs/changelog`,desc:`Version history and release notes.`,tags:[`changelog`,`release`,`version`,`update`]}];function $n(e,t){let n=t.toLowerCase(),r=e.title.toLowerCase(),i=e.desc.toLowerCase(),a=e.tags.join(` `);if(r===n)return 100;if(r.startsWith(n))return 80;if(r.includes(n))return 60;if(i.includes(n))return 40;if(a.includes(n))return 30;let o=n.split(` `).filter(Boolean),s=o.filter(e=>r.includes(e)||i.includes(e)||a.includes(e));return s.length===o.length?20:s.length>0?10:0}function er({isOpen:e,onClose:t}){let[n,r]=(0,v.useState)(``),[i,a]=(0,v.useState)(0),o=(0,v.useRef)(null),s=ft(),c=n.trim().length>=1?Qn.map(e=>({...e,score:$n(e,n.trim())})).filter(e=>e.score>0).sort((e,t)=>t.score-e.score).slice(0,8):Qn.slice(0,6);(0,v.useEffect)(()=>{e&&(r(``),a(0),setTimeout(()=>o.current?.focus(),50))},[e]),(0,v.useEffect)(()=>{a(0)},[n]);let l=(0,v.useCallback)(e=>{s(e),t()},[s,t]);return(0,v.useEffect)(()=>{if(!e)return;let n=e=>{if(e.key===`Escape`){t();return}if(e.key===`ArrowDown`){e.preventDefault(),a(e=>Math.min(e+1,c.length-1));return}if(e.key===`ArrowUp`){e.preventDefault(),a(e=>Math.max(e-1,0));return}if(e.key===`Enter`&&c[i]){l(c[i].route);return}};return window.addEventListener(`keydown`,n),()=>window.removeEventListener(`keydown`,n)},[e,i,c,l,t]),e?(0,j.jsxs)(`div`,{style:{position:`fixed`,inset:0,zIndex:9999,display:`flex`,alignItems:`flex-start`,justifyContent:`center`,paddingTop:`15vh`},onClick:e=>{e.target===e.currentTarget&&t()},children:[(0,j.jsx)(`div`,{style:{position:`fixed`,inset:0,background:`rgba(0,0,0,0.7)`,backdropFilter:`blur(4px)`}}),(0,j.jsxs)(`div`,{style:{position:`relative`,zIndex:1,width:`100%`,maxWidth:600,background:`#161b22`,border:`1px solid #30363d`,borderRadius:12,boxShadow:`0 24px 80px rgba(0,0,0,0.6)`,overflow:`hidden`,margin:`0 16px`},children:[(0,j.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,padding:`14px 16px`,borderBottom:`1px solid #21262d`,gap:10},children:[(0,j.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`#8b949e`,strokeWidth:`2`,strokeLinecap:`round`,children:[(0,j.jsx)(`circle`,{cx:`11`,cy:`11`,r:`8`}),(0,j.jsx)(`line`,{x1:`21`,y1:`21`,x2:`16.65`,y2:`16.65`})]}),(0,j.jsx)(`input`,{ref:o,value:n,onChange:e=>r(e.target.value),placeholder:`Search documentation…`,style:{flex:1,background:`none`,border:`none`,outline:`none`,color:`#e6edf3`,fontSize:`1rem`,fontFamily:`inherit`}}),(0,j.jsx)(`kbd`,{style:{background:`#21262d`,border:`1px solid #30363d`,borderRadius:4,padding:`2px 6px`,fontSize:`0.7rem`,color:`#8b949e`},children:`ESC`})]}),(0,j.jsx)(`div`,{style:{maxHeight:400,overflowY:`auto`},children:c.length===0?(0,j.jsxs)(`div`,{style:{padding:`24px`,textAlign:`center`,color:`#8b949e`,fontSize:`0.9rem`},children:[`No results for `,(0,j.jsxs)(`strong`,{style:{color:`#e6edf3`},children:[`"`,n,`"`]})]}):(0,j.jsxs)(`div`,{children:[!n.trim()&&(0,j.jsx)(`div`,{style:{padding:`8px 16px 4px`,fontSize:`0.7rem`,fontWeight:600,color:`#484f58`,textTransform:`uppercase`,letterSpacing:`0.08em`},children:`Popular Pages`}),c.map((e,t)=>(0,j.jsx)(`button`,{onClick:()=>l(e.route),onMouseEnter:()=>a(t),style:{display:`block`,width:`100%`,padding:`10px 16px`,background:t===i?`rgba(206,66,43,0.1)`:`transparent`,border:`none`,cursor:`pointer`,textAlign:`left`,transition:`background 0.1s`,borderLeft:t===i?`2px solid var(--accent)`:`2px solid transparent`},children:(0,j.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:10},children:[(0,j.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:t===i?`var(--accent)`:`#484f58`,strokeWidth:`2`,style:{flexShrink:0},children:[(0,j.jsx)(`path`,{d:`M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z`}),(0,j.jsx)(`polyline`,{points:`14 2 14 8 20 8`}),(0,j.jsx)(`line`,{x1:`16`,y1:`13`,x2:`8`,y2:`13`}),(0,j.jsx)(`line`,{x1:`16`,y1:`17`,x2:`8`,y2:`17`}),(0,j.jsx)(`polyline`,{points:`10 9 9 9 8 9`})]}),(0,j.jsxs)(`div`,{style:{minWidth:0},children:[(0,j.jsx)(`div`,{style:{fontWeight:500,color:t===i?`var(--accent)`:`#e6edf3`,fontSize:`0.9rem`,marginBottom:2},children:tr(e.title,n)}),(0,j.jsx)(`div`,{style:{fontSize:`0.8rem`,color:`#8b949e`,overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`},children:e.desc})]}),t===i&&(0,j.jsx)(`kbd`,{style:{marginLeft:`auto`,flexShrink:0,background:`#21262d`,border:`1px solid #30363d`,borderRadius:4,padding:`2px 6px`,fontSize:`0.7rem`,color:`#8b949e`},children:`↵`})]})},e.route))]})}),(0,j.jsxs)(`div`,{style:{padding:`8px 16px`,borderTop:`1px solid #21262d`,display:`flex`,gap:16,fontSize:`0.75rem`,color:`#484f58`},children:[(0,j.jsxs)(`span`,{children:[(0,j.jsx)(`kbd`,{style:nr,children:`↑↓`}),` navigate`]}),(0,j.jsxs)(`span`,{children:[(0,j.jsx)(`kbd`,{style:nr,children:`↵`}),` open`]}),(0,j.jsxs)(`span`,{children:[(0,j.jsx)(`kbd`,{style:nr,children:`esc`}),` close`]})]})]})]}):null}function tr(e,t){if(!t.trim())return e;let n=e.toLowerCase().indexOf(t.toLowerCase());return n===-1?e:(0,j.jsxs)(j.Fragment,{children:[e.slice(0,n),(0,j.jsx)(`mark`,{style:{background:`rgba(206,66,43,0.25)`,color:`var(--accent)`,borderRadius:2},children:e.slice(n,n+t.length)}),e.slice(n+t.length)]})}var nr={background:`#21262d`,border:`1px solid #30363d`,borderRadius:3,padding:`1px 5px`,fontFamily:`inherit`},rr=[{to:`/docs/agents`,label:`Building Agents`},{to:`/docs/predefined-agents`,label:`Predefined Agents`},{to:`/docs/llm-client`,label:`LLM Integration`},{to:`/docs/tools`,label:`Tools`},{to:`/docs/mcp`,label:`MCP Integration`},{to:`/docs/memory`,label:`Memory`},{to:`/docs/rag`,label:`RAG Pipeline`},{to:`/docs/supervisor`,label:`Multi-Agent Supervisor`},{to:`/docs/human-in-the-loop`,label:`Human-in-the-Loop`},{to:`/docs/error-handling`,label:`Error Handling`},{to:`/docs/evaluation`,label:`Evaluation`},{to:`/docs/observability`,label:`Observability`},{to:`/docs/configuration`,label:`Configuration`},{to:`/docs/plugins`,label:`Plugins`},{to:`/docs/middleware`,label:`Middleware`},{to:`/docs/validation`,label:`Validation`},{to:`/docs/performance`,label:`Performance`}];function ir(){let[e,t]=(0,v.useState)(!1),[n,r]=(0,v.useState)(!1),[i,a]=(0,v.useState)(!1),{language:o}=M(),s=o===`rust`;(0,v.useEffect)(()=>{let e=e=>{(e.metaKey||e.ctrlKey)&&e.key===`k`&&(e.preventDefault(),a(e=>!e))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[]);let c=e=>({color:e?`var(--accent)`:`#8b949e`,textDecoration:`none`,fontSize:`0.875rem`,fontWeight:500,padding:`4px 0`,borderBottom:e?`2px solid var(--accent)`:`2px solid transparent`,transition:`color 0.15s`,whiteSpace:`nowrap`,background:`none`,border:`none`,cursor:`pointer`});return(0,j.jsxs)(`header`,{style:{position:`sticky`,top:0,zIndex:50,background:`rgba(13,17,23,0.94)`,backdropFilter:`blur(12px)`,borderBottom:`1px solid #21262d`},children:[(0,j.jsxs)(`nav`,{style:{maxWidth:`1320px`,margin:`0 auto`,padding:`0 24px`,height:`60px`,display:`flex`,alignItems:`center`,gap:`28px`},children:[(0,j.jsxs)(A,{to:`/`,style:{textDecoration:`none`,display:`flex`,alignItems:`center`,gap:`10px`,flexShrink:0},children:[(0,j.jsx)(`div`,{style:{width:28,height:28,borderRadius:6,background:`var(--accent)`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`0.875rem`,fontWeight:700,color:`#fff`,transition:`background 0.2s`},children:`F`}),(0,j.jsx)(`span`,{style:{fontWeight:700,fontSize:`1rem`,color:`#e6edf3`,letterSpacing:`-0.02em`},children:`flowgentra`})]}),(0,j.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`24px`,flex:1},className:`desktop-nav`,children:[(0,j.jsx)(jn,{to:`/docs/getting-started`,style:({isActive:e})=>c(e),children:`Docs`}),(0,j.jsxs)(`div`,{style:{position:`relative`},onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:[(0,j.jsxs)(`button`,{style:{...c(!1),display:`flex`,alignItems:`center`,gap:4},children:[`Guides`,(0,j.jsx)(`svg`,{width:`10`,height:`10`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,style:{opacity:.5},children:(0,j.jsx)(`polyline`,{points:`6 9 12 15 18 9`})})]}),n&&(0,j.jsx)(`div`,{style:{position:`absolute`,top:`100%`,left:`-12px`,marginTop:8,background:`#161b22`,border:`1px solid #21262d`,borderRadius:8,padding:`8px`,minWidth:220,zIndex:60,boxShadow:`0 16px 48px rgba(0,0,0,0.5)`},children:rr.map(e=>(0,j.jsx)(jn,{to:e.to,style:({isActive:e})=>({display:`block`,padding:`8px 12px`,borderRadius:5,textDecoration:`none`,fontSize:`0.875rem`,color:e?`var(--accent)`:`#8b949e`,background:e?`var(--accent-dim)`:`transparent`,transition:`color 0.12s, background 0.12s`,whiteSpace:`nowrap`}),onMouseEnter:e=>{e.currentTarget.style.color=`var(--accent)`,e.currentTarget.style.background=`var(--accent-dim)`},onMouseLeave:e=>{e.currentTarget.style.color=`#8b949e`,e.currentTarget.style.background=`transparent`},onClick:()=>r(!1),children:e.label},e.to))})]}),(0,j.jsx)(jn,{to:`/docs/tutorials/research-assistant`,style:({isActive:e})=>c(e),children:`Tutorials`}),(0,j.jsx)(jn,{to:`/docs/api/state-graph`,style:({isActive:e})=>c(e),children:`API`}),(0,j.jsx)(jn,{to:`/docs/examples`,style:({isActive:e})=>c(e),children:`Examples`})]}),(0,j.jsxs)(`button`,{onClick:()=>a(!0),className:`desktop-nav`,style:{display:`flex`,alignItems:`center`,gap:8,background:`#161b22`,border:`1px solid #21262d`,borderRadius:7,padding:`6px 12px`,color:`#8b949e`,fontSize:`0.8rem`,cursor:`pointer`,transition:`border-color 0.15s`,minWidth:180},onMouseEnter:e=>e.currentTarget.style.borderColor=`#30363d`,onMouseLeave:e=>e.currentTarget.style.borderColor=`#21262d`,children:[(0,j.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,children:[(0,j.jsx)(`circle`,{cx:`11`,cy:`11`,r:`8`}),(0,j.jsx)(`line`,{x1:`21`,y1:`21`,x2:`16.65`,y2:`16.65`})]}),(0,j.jsx)(`span`,{style:{flex:1,textAlign:`left`},children:`Search docs…`}),(0,j.jsx)(`kbd`,{style:{background:`#21262d`,border:`1px solid #30363d`,borderRadius:4,padding:`1px 5px`,fontSize:`0.65rem`,color:`#484f58`},children:`⌘K`})]}),(0,j.jsxs)(`div`,{style:{marginLeft:`auto`,display:`flex`,alignItems:`center`,gap:`12px`},children:[(0,j.jsx)(A,{to:s?`/docs/quickstart-rust`:`/docs/quickstart-python`,className:`desktop-nav`,style:{background:`var(--accent)`,color:`#fff`,padding:`6px 14px`,borderRadius:6,textDecoration:`none`,fontWeight:600,fontSize:`0.8125rem`,whiteSpace:`nowrap`,transition:`opacity 0.15s`},onMouseEnter:e=>e.target.style.opacity=`0.85`,onMouseLeave:e=>e.target.style.opacity=`1`,children:`Quick Start`}),(0,j.jsx)(`div`,{className:`desktop-nav`,children:(0,j.jsx)(Zn,{compact:!0})}),(0,j.jsx)(`a`,{href:`https://github.com/oussamabenhariz`,target:`_blank`,rel:`noopener noreferrer`,style:{color:`#8b949e`,display:`flex`,alignItems:`center`,transition:`color 0.15s`},onMouseEnter:e=>e.currentTarget.style.color=`var(--accent)`,onMouseLeave:e=>e.currentTarget.style.color=`#8b949e`,title:`GitHub`,children:(0,j.jsx)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`currentColor`,children:(0,j.jsx)(`path`,{d:`M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z`})})}),(0,j.jsx)(`button`,{onClick:()=>t(e=>!e),style:{background:`none`,border:`none`,cursor:`pointer`,color:`#8b949e`,padding:4,display:`none`},className:`mobile-menu-btn`,"aria-label":`Toggle menu`,children:(0,j.jsx)(`svg`,{width:`22`,height:`22`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:e?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(`line`,{x1:`18`,y1:`6`,x2:`6`,y2:`18`}),(0,j.jsx)(`line`,{x1:`6`,y1:`6`,x2:`18`,y2:`18`})]}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(`line`,{x1:`3`,y1:`6`,x2:`21`,y2:`6`}),(0,j.jsx)(`line`,{x1:`3`,y1:`12`,x2:`21`,y2:`12`}),(0,j.jsx)(`line`,{x1:`3`,y1:`18`,x2:`21`,y2:`18`})]})})})]})]}),e&&(0,j.jsxs)(`div`,{style:{borderTop:`1px solid #21262d`,background:`#0d1117`,padding:`16px 24px`,display:`flex`,flexDirection:`column`,gap:`12px`},children:[[{to:`/docs/getting-started`,label:`Documentation`},{to:`/docs/quickstart-rust`,label:`🦀 Rust Quickstart`},{to:`/docs/quickstart-python`,label:`🐍 Python Quickstart`},...rr,{to:`/docs/api/state-graph`,label:`API Reference`},{to:`/docs/examples`,label:`Examples`}].map(e=>(0,j.jsx)(jn,{to:e.to,style:({isActive:e})=>({...c(e),display:`block`}),onClick:()=>t(!1),children:e.label},e.to)),(0,j.jsx)(Zn,{})]}),(0,j.jsx)(er,{isOpen:i,onClose:()=>a(!1)}),(0,j.jsx)(`style`,{children:`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `})]})}var ar=null;async function or(){if(ar)return ar;let{createHighlighter:e}=await S(async()=>{let{createHighlighter:e}=await import(`./dist-DCNzGT1U.js`);return{createHighlighter:e}},[]);return ar=await e({themes:[`github-dark`],langs:[`rust`,`python`,`yaml`,`bash`,`toml`]}),ar}function N({rust:e,python:t,lang:n,forceLang:r}){let{language:i}=M(),[a,o]=(0,v.useState)(``),[s,c]=(0,v.useState)(!1),l=(0,v.useRef)(null),u=r||(i===`rust`?`rust`:`python`),d=r?e||t:i===`rust`?e:t,f=n||u;return(0,v.useEffect)(()=>{if(!d)return;let e=!1;return or().then(t=>{e||o(t.codeToHtml(d.trim(),{lang:f,theme:`github-dark`}))}),()=>{e=!0}},[d,f]),(0,j.jsxs)(`div`,{style:{position:`relative`,background:`#161b22`,borderRadius:`8px`,overflow:`hidden`,border:`1px solid #30363d`},children:[(0,j.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,padding:`8px 16px`,borderBottom:`1px solid #21262d`,background:`#0d1117`},children:[(0,j.jsx)(`span`,{style:{fontSize:`0.75rem`,color:`#8b949e`,fontFamily:`JetBrains Mono, monospace`,textTransform:`uppercase`,letterSpacing:`0.05em`},children:f}),(0,j.jsx)(`button`,{onClick:()=>{navigator.clipboard.writeText(d?.trim()||``),c(!0),clearTimeout(l.current),l.current=setTimeout(()=>c(!1),2e3)},style:{background:`none`,border:`1px solid #30363d`,borderRadius:`4px`,color:s?`var(--accent)`:`#8b949e`,cursor:`pointer`,fontSize:`0.75rem`,padding:`3px 10px`,fontFamily:`IBM Plex Sans, sans-serif`,transition:`color 0.15s, border-color 0.15s`,borderColor:s?`var(--accent)`:`#30363d`},children:s?`Copied!`:`Copy`})]}),a?(0,j.jsx)(`div`,{dangerouslySetInnerHTML:{__html:a}}):(0,j.jsx)(`pre`,{style:{padding:`1.25rem 1.5rem`,margin:0,fontSize:`0.8125rem`,lineHeight:1.75,color:`#e6edf3`,overflowX:`auto`},children:(0,j.jsx)(`code`,{children:d?.trim()})})]})}var sr=`use flowgentra_ai::prelude::*;

#[derive(State, Default)]
struct AgentState {
    query:    String,
    response: String,
}

#[node]
async fn answer(state: &mut AgentState) -> Result<()> {
    let client = LLM::openai("gpt-4o");
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
}`,cr=`from flowgentra_ai.graph import StateGraph, END
from flowgentra_ai.llm import LLMConfig, LLM, Message
from typing import TypedDict

class AgentState(TypedDict):
    query: str
    response: str

config = LLMConfig(provider="openai", model="gpt-4o")
client = LLM.from_config(config)

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
print(result["response"])`,lr=[{icon:`⚡`,title:`Built on Rust`,description:`Zero-cost abstractions and async-first design. Python bindings run at near-native speed via PyO3. No GIL bottlenecks.`},{icon:`🗺️`,title:`Graph-First Design`,description:`Model any agent logic as a directed graph. Conditional routing, parallel branches, subgraphs — all composable.`},{icon:`💾`,title:`Stateful by Default`,description:`Strongly-typed state flows through every node. Reducers handle concurrent merges. Checkpointing gives you resumability for free.`},{icon:`🔌`,title:`LLM-Agnostic`,description:`One API for OpenAI, Anthropic, Ollama, Groq, Mistral, Azure, and HuggingFace. Switch providers with one config line.`},{icon:`🤖`,title:`Multi-Agent Ready`,description:`11 orchestration strategies out of the box: Sequential, Parallel, Map-Reduce, Debate, LLM-Routed, and more.`},{icon:`🔍`,title:`Built-in RAG`,description:`Embeddings, vector stores (in-memory, Chroma, Pinecone), hybrid retrieval, ingestion pipelines — all first-class.`}],ur=[{feature:`Language`,flowgentra:`Rust + Python (PyO3)`,langgraph:`Python only`,langchain:`Python + JS`},{feature:`Performance`,flowgentra:`Native (Rust engine)`,langgraph:`Python runtime`,langchain:`Python runtime`},{feature:`State typing`,flowgentra:`Compile-time (Rust) / TypedDict (Python)`,langgraph:`TypedDict`,langchain:`Weakly typed`},{feature:`Multi-agent`,flowgentra:`11 strategies built-in`,langgraph:`Manual wiring`,langchain:`Via LCEL chains`},{feature:`Config-driven`,flowgentra:`YAML + auto-discovery`,langgraph:`Code only`,langchain:`Partial (LangServe)`},{feature:`Checkpointing`,flowgentra:`File + in-memory`,langgraph:`File, Redis, Postgres`,langchain:`Via LangSmith`},{feature:`Built-in RAG`,flowgentra:`Yes (embeddings + stores)`,langgraph:`Via LangChain`,langchain:`Yes`},{feature:`Observability`,flowgentra:`Built-in tracer + Mermaid`,langgraph:`LangSmith required`,langchain:`LangSmith required`}];function dr({onChoose:e}){let[t,n]=(0,v.useState)(null),r=(r,i,a,o,s,c)=>{let l=t===r;return(0,j.jsxs)(`button`,{onClick:()=>e(r),onMouseEnter:()=>n(r),onMouseLeave:()=>n(null),style:{background:`#161b22`,border:`2px solid ${l?s:`#21262d`}`,borderRadius:14,padding:`44px 60px`,cursor:`pointer`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:16,minWidth:240,transform:l?`translateY(-4px) scale(1.02)`:`none`,transition:`all 0.2s`,boxShadow:l?`0 12px 40px ${s}33`:`none`},children:[(0,j.jsx)(`span`,{style:{fontSize:`4rem`,lineHeight:1},children:i}),(0,j.jsx)(`span`,{style:{fontSize:`1.5rem`,fontWeight:700,color:`#e6edf3`},children:a}),(0,j.jsx)(`span`,{style:{fontSize:`0.875rem`,color:`#8b949e`,textAlign:`center`,lineHeight:1.6,maxWidth:200},children:o}),(0,j.jsxs)(`span`,{style:{marginTop:4,background:s,color:`#fff`,fontSize:`0.875rem`,fontWeight:600,padding:`7px 22px`,borderRadius:20},children:[`Start with `,a,` →`]})]})};return(0,j.jsxs)(`div`,{style:{minHeight:`calc(100vh - 60px)`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,padding:`40px 24px`,gap:52},children:[(0,j.jsxs)(`div`,{style:{textAlign:`center`,maxWidth:600},children:[(0,j.jsx)(`div`,{style:{display:`inline-block`,background:`rgba(206,66,43,0.12)`,border:`1px solid rgba(206,66,43,0.4)`,borderRadius:20,padding:`4px 14px`,fontSize:`0.8rem`,color:`#CE422B`,marginBottom:20,fontWeight:600,letterSpacing:`0.05em`,textTransform:`uppercase`},children:`Welcome to Flowgentra`}),(0,j.jsx)(`h1`,{style:{fontSize:`clamp(1.875rem, 5vw, 3rem)`,fontWeight:700,color:`#e6edf3`,marginBottom:16,marginTop:0,letterSpacing:`-0.03em`,lineHeight:1.15},children:`Which language are you using?`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,fontSize:`1.0625rem`,lineHeight:1.7,margin:0},children:`We'll show you the right API signatures, code examples, and installation instructions throughout the entire site. You can switch anytime from the navbar.`})]}),(0,j.jsxs)(`div`,{style:{display:`flex`,gap:32,flexWrap:`wrap`,justifyContent:`center`},children:[r(`rust`,`🦀`,`Rust`,`Type-safe, zero-cost, compile-time guarantees`,`#CE422B`),r(`python`,`🐍`,`Python`,`Ergonomic, fast iteration, LangGraph-compatible`,`#3572A5`)]}),(0,j.jsxs)(`p`,{style:{color:`#484f58`,fontSize:`0.875rem`},children:[`Not sure? `,(0,j.jsx)(`button`,{onClick:()=>e(`python`),style:{background:`none`,border:`none`,color:`#8b949e`,cursor:`pointer`,fontSize:`0.875rem`,textDecoration:`underline`},children:`Start with Python`}),` — you can always switch.`]})]})}function fr(){let{language:e,setLanguage:t}=M(),n=e===`rust`,[r,i]=(0,v.useState)(()=>localStorage.getItem(`fg-lang-chosen`)===`true`);return r?(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`section`,{style:{background:`linear-gradient(180deg, #161b22 0%, #0d1117 60%)`,borderBottom:`1px solid #21262d`},children:(0,j.jsx)(`div`,{style:{maxWidth:1160,margin:`0 auto`,padding:`80px 24px 72px`},children:(0,j.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:56,alignItems:`center`},children:[(0,j.jsxs)(`div`,{style:{flex:`1 1 380px`,minWidth:0},children:[(0,j.jsxs)(`div`,{style:{display:`inline-flex`,alignItems:`center`,gap:8,background:`var(--accent-dim)`,border:`1px solid var(--accent)`,borderRadius:20,padding:`4px 14px`,fontSize:`0.8125rem`,color:`var(--accent)`,marginBottom:22},children:[(0,j.jsx)(`span`,{children:n?`🦀`:`🐍`}),(0,j.jsx)(`span`,{children:n?`Zero-cost Rust engine`:`Python — powered by Rust`})]}),(0,j.jsxs)(`h1`,{style:{fontSize:`clamp(2.25rem, 5vw, 3.5rem)`,fontWeight:800,lineHeight:1.1,letterSpacing:`-0.04em`,color:`#e6edf3`,marginBottom:20,marginTop:0},children:[`Build stateful AI agents`,(0,j.jsx)(`br`,{}),(0,j.jsx)(`span`,{style:{color:`var(--accent)`},children:`as typed graphs.`})]}),(0,j.jsxs)(`p`,{style:{fontSize:`1.125rem`,color:`#8b949e`,lineHeight:1.75,marginBottom:12,maxWidth:480},children:[`Flowgentra is a high-performance framework for building multi-step AI agents. Define nodes, connect edges, share typed state — in `,n?`Rust or Python`:`Python or Rust`,`.`]}),(0,j.jsxs)(`p`,{style:{fontSize:`0.9375rem`,color:`#8b949e`,lineHeight:1.7,marginBottom:36,maxWidth:480},children:[`Inspired by LangGraph. Built for production — with `,(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Rust performance`}),`,`,` `,(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`compile-time state guarantees`}),`, and`,` `,(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`11 multi-agent strategies`}),` out of the box.`]}),(0,j.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:12,marginBottom:36},children:[(0,j.jsx)(A,{to:n?`/docs/quickstart-rust`:`/docs/quickstart-python`,style:{background:`var(--accent)`,color:`#fff`,padding:`11px 28px`,borderRadius:7,textDecoration:`none`,fontWeight:700,fontSize:`0.9375rem`,transition:`opacity 0.15s`},onMouseEnter:e=>e.target.style.opacity=`0.85`,onMouseLeave:e=>e.target.style.opacity=`1`,children:n?`Get Started with Rust →`:`Get Started with Python →`}),(0,j.jsx)(A,{to:n?`/docs/quickstart-python`:`/docs/quickstart-rust`,style:{background:`transparent`,color:`#e6edf3`,padding:`11px 28px`,borderRadius:7,textDecoration:`none`,fontWeight:500,fontSize:`0.9375rem`,border:`1px solid #30363d`,transition:`border-color 0.15s`},onMouseEnter:e=>e.target.style.borderColor=`var(--accent)`,onMouseLeave:e=>e.target.style.borderColor=`#30363d`,children:n?`Python Quickstart`:`Rust Quickstart`})]}),(0,j.jsx)(Zn,{}),(0,j.jsx)(`div`,{style:{display:`flex`,gap:32,marginTop:36,flexWrap:`wrap`},children:[[`7+`,`LLM Providers`],[`11`,`Multi-Agent Strategies`],[`3`,`Memory Types`]].map(([e,t])=>(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`div`,{style:{fontSize:`1.75rem`,fontWeight:700,color:`var(--accent)`},children:e}),(0,j.jsx)(`div`,{style:{fontSize:`0.8125rem`,color:`#8b949e`},children:t})]},t))})]}),(0,j.jsx)(`div`,{style:{flex:`1 1 460px`,minWidth:0},children:(0,j.jsx)(N,{rust:sr,python:cr})})]})})}),(0,j.jsxs)(`section`,{style:{maxWidth:1160,margin:`0 auto`,padding:`80px 24px`},children:[(0,j.jsxs)(`div`,{style:{textAlign:`center`,marginBottom:56},children:[(0,j.jsx)(`h2`,{style:{fontSize:`clamp(1.5rem, 3vw, 2rem)`,fontWeight:700,color:`#e6edf3`,letterSpacing:`-0.02em`,marginBottom:12,marginTop:0},children:`Everything you need to build production agents`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,maxWidth:560,margin:`0 auto`,lineHeight:1.7},children:`From simple single-LLM nodes to complex multi-agent orchestration — Flowgentra has you covered.`})]}),(0,j.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(290px, 1fr))`,gap:18},children:lr.map(e=>(0,j.jsxs)(`div`,{style:{background:`#161b22`,border:`1px solid #21262d`,borderRadius:10,padding:`28px`,transition:`border-color 0.2s, transform 0.15s`},onMouseEnter:e=>{e.currentTarget.style.borderColor=`var(--accent)`,e.currentTarget.style.transform=`translateY(-2px)`},onMouseLeave:e=>{e.currentTarget.style.borderColor=`#21262d`,e.currentTarget.style.transform=`none`},children:[(0,j.jsx)(`div`,{style:{fontSize:`1.875rem`,marginBottom:14},children:e.icon}),(0,j.jsx)(`h3`,{style:{fontSize:`1rem`,fontWeight:600,color:`#e6edf3`,marginBottom:8,marginTop:0},children:e.title}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,lineHeight:1.7,margin:0,fontSize:`0.9rem`},children:e.description})]},e.title))})]}),(0,j.jsx)(`section`,{style:{background:`#161b22`,borderTop:`1px solid #21262d`,borderBottom:`1px solid #21262d`},children:(0,j.jsxs)(`div`,{style:{maxWidth:1160,margin:`0 auto`,padding:`72px 24px`},children:[(0,j.jsxs)(`div`,{style:{textAlign:`center`,marginBottom:48},children:[(0,j.jsx)(`h2`,{style:{fontSize:`clamp(1.5rem, 3vw, 2rem)`,fontWeight:700,color:`#e6edf3`,marginBottom:12,marginTop:0},children:`How Flowgentra works`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,maxWidth:520,margin:`0 auto`,lineHeight:1.7},children:`Three primitives. Infinite flexibility.`})]}),(0,j.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:0,alignItems:`stretch`,justifyContent:`center`},children:[{num:`01`,title:`Define State`,body:`Declare a typed struct (Rust) or TypedDict (Python). State is the single source of truth that every node reads and writes.`,code:n?`#[derive(State, Default)]
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
result = graph.invoke(state)`}].map((e,t,n)=>(0,j.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`},children:[(0,j.jsxs)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:10,padding:`28px 28px`,flex:1,maxWidth:320},children:[(0,j.jsxs)(`div`,{style:{fontSize:`0.7rem`,fontWeight:700,color:`var(--accent)`,letterSpacing:`0.12em`,textTransform:`uppercase`,marginBottom:10},children:[`Step `,e.num]}),(0,j.jsx)(`h3`,{style:{fontSize:`1.0625rem`,fontWeight:600,color:`#e6edf3`,marginBottom:8,marginTop:0},children:e.title}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,fontSize:`0.875rem`,lineHeight:1.65,marginBottom:16},children:e.body}),(0,j.jsx)(`pre`,{style:{background:`#161b22`,border:`1px solid #30363d`,borderRadius:6,padding:`12px 14px`,fontSize:`0.75rem`,lineHeight:1.6,color:`#e6edf3`,margin:0,overflowX:`auto`,whiteSpace:`pre`},children:e.code})]}),t<n.length-1&&(0,j.jsx)(`div`,{style:{color:`#484f58`,fontSize:`1.5rem`,padding:`0 16px`,flexShrink:0},children:`→`})]},e.num))})]})}),(0,j.jsxs)(`section`,{style:{maxWidth:1160,margin:`0 auto`,padding:`80px 24px`},children:[(0,j.jsxs)(`div`,{style:{textAlign:`center`,marginBottom:48},children:[(0,j.jsx)(`h2`,{style:{fontSize:`clamp(1.5rem, 3vw, 2rem)`,fontWeight:700,color:`#e6edf3`,marginBottom:12,marginTop:0},children:`How does Flowgentra compare?`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,maxWidth:520,margin:`0 auto`,lineHeight:1.7},children:`Inspired by LangGraph, built for higher performance and multi-language teams.`})]}),(0,j.jsx)(`div`,{style:{overflowX:`auto`},children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,fontSize:`0.9rem`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsx)(`tr`,{children:[`Feature`,`Flowgentra`,`LangGraph`,`LangChain`].map((e,t)=>(0,j.jsx)(`th`,{style:{textAlign:t===0?`left`:`center`,padding:`12px 16px`,borderBottom:`1px solid #21262d`,color:t===1?`var(--accent)`:`#8b949e`,fontWeight:600,fontSize:`0.875rem`,background:t===1?`var(--accent-dim)`:`transparent`},children:e},e))})}),(0,j.jsx)(`tbody`,{children:ur.map((e,t)=>(0,j.jsxs)(`tr`,{style:{background:t%2==0?`transparent`:`#0a0f14`},children:[(0,j.jsx)(`td`,{style:{padding:`11px 16px`,color:`#e6edf3`,fontWeight:500,whiteSpace:`nowrap`},children:e.feature}),(0,j.jsx)(`td`,{style:{padding:`11px 16px`,color:`#e6edf3`,textAlign:`center`,background:`rgba(206,66,43,0.04)`},children:e.flowgentra}),(0,j.jsx)(`td`,{style:{padding:`11px 16px`,color:`#8b949e`,textAlign:`center`},children:e.langgraph}),(0,j.jsx)(`td`,{style:{padding:`11px 16px`,color:`#8b949e`,textAlign:`center`},children:e.langchain})]},e.feature))})]})})]}),(0,j.jsx)(`section`,{style:{background:`#161b22`,borderTop:`1px solid #21262d`,borderBottom:`1px solid #21262d`},children:(0,j.jsxs)(`div`,{style:{maxWidth:760,margin:`0 auto`,padding:`72px 24px`,textAlign:`center`},children:[(0,j.jsx)(`h2`,{style:{fontSize:`clamp(1.5rem, 3vw, 2.125rem)`,fontWeight:700,color:`#e6edf3`,marginBottom:12,marginTop:0},children:`Ready to build your first agent?`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:36,lineHeight:1.7,fontSize:`1.0625rem`,maxWidth:520,margin:`0 auto 36px`},children:`Follow the quickstart for your language and ship a working agent in under 10 minutes.`}),(0,j.jsxs)(`div`,{style:{display:`flex`,gap:14,justifyContent:`center`,flexWrap:`wrap`},children:[(0,j.jsx)(A,{to:`/docs/quickstart-rust`,style:{background:`#CE422B`,color:`#fff`,padding:`12px 28px`,borderRadius:7,textDecoration:`none`,fontWeight:700,fontSize:`0.9375rem`,display:`inline-flex`,alignItems:`center`,gap:8,transition:`opacity 0.15s`},onMouseEnter:e=>e.currentTarget.style.opacity=`0.85`,onMouseLeave:e=>e.currentTarget.style.opacity=`1`,children:`🦀 Quick Start — Rust`}),(0,j.jsx)(A,{to:`/docs/quickstart-python`,style:{background:`#3572A5`,color:`#fff`,padding:`12px 28px`,borderRadius:7,textDecoration:`none`,fontWeight:700,fontSize:`0.9375rem`,display:`inline-flex`,alignItems:`center`,gap:8,transition:`opacity 0.15s`},onMouseEnter:e=>e.currentTarget.style.opacity=`0.85`,onMouseLeave:e=>e.currentTarget.style.opacity=`1`,children:`🐍 Quick Start — Python`})]})]})}),(0,j.jsxs)(`footer`,{style:{maxWidth:1160,margin:`0 auto`,padding:`32px 24px`,display:`flex`,flexWrap:`wrap`,gap:16,alignItems:`center`,justifyContent:`space-between`,borderTop:`1px solid #21262d`},children:[(0,j.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:10},children:[(0,j.jsx)(`div`,{style:{width:24,height:24,borderRadius:5,background:`var(--accent)`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`0.75rem`,fontWeight:700,color:`#fff`},children:`F`}),(0,j.jsx)(`span`,{style:{color:`#484f58`,fontSize:`0.875rem`},children:`© 2025 Flowgentra`})]}),(0,j.jsx)(`div`,{style:{display:`flex`,gap:24},children:[[`GitHub`,`https://github.com/oussamabenhariz`],[`crates.io`,`https://crates.io`],[`PyPI`,`https://pypi.org`]].map(([e,t])=>(0,j.jsx)(`a`,{href:t,target:`_blank`,rel:`noopener noreferrer`,style:{color:`#8b949e`,textDecoration:`none`,fontSize:`0.875rem`,transition:`color 0.15s`},onMouseEnter:e=>e.target.style.color=`var(--accent)`,onMouseLeave:e=>e.target.style.color=`#8b949e`,children:e},e))})]})]}):(0,j.jsx)(dr,{onChoose:e=>{t(e),localStorage.setItem(`fg-lang-chosen`,`true`),i(!0)}})}var pr=[{to:`/docs/getting-started`,label:`Introduction`,group:`Get Started`},{to:`/docs/installation`,label:`Installation`,group:`Get Started`},{to:`/docs/quickstart-python`,label:`Quick Start — Python`,group:`Get Started`},{to:`/docs/quickstart-rust`,label:`Quick Start — Rust`,group:`Get Started`},{to:`/docs/what-is-flowgentra`,label:`What is Flowgentra?`,group:`Core Concepts`},{to:`/docs/state-concepts`,label:`State & Reducers`,group:`Core Concepts`},{to:`/docs/graphs`,label:`Graphs & Execution`,group:`Core Concepts`},{to:`/docs/nodes`,label:`Nodes`,group:`Core Concepts`},{to:`/docs/runtime`,label:`Runtime`,group:`Core Concepts`},{to:`/docs/configuration`,label:`Configuration & YAML`,group:`Core Concepts`},{to:`/docs/agents`,label:`Building Agents`,group:`Guides`},{to:`/docs/predefined-agents`,label:`Predefined Agents`,group:`Guides`},{to:`/docs/llm-client`,label:`LLM Integration`,group:`Guides`},{to:`/docs/llm-providers`,label:`LLM Providers`,group:`Guides`},{to:`/docs/tools`,label:`Tools`,group:`Guides`},{to:`/docs/mcp`,label:`MCP Integration`,group:`Guides`},{to:`/docs/memory`,label:`Memory`,group:`Guides`},{to:`/docs/rag`,label:`RAG Pipeline`,group:`Guides`},{to:`/docs/document-loaders`,label:`Document Loaders`,group:`Guides`},{to:`/docs/reranking`,label:`Reranking`,group:`Guides`},{to:`/docs/supervisor`,label:`Multi-Agent Supervisor`,group:`Guides`},{to:`/docs/human-in-the-loop`,label:`Human-in-the-Loop`,group:`Guides`},{to:`/docs/error-handling`,label:`Error Handling`,group:`Guides`},{to:`/docs/evaluation`,label:`Evaluation`,group:`Guides`},{to:`/docs/observability`,label:`Observability`,group:`Guides`},{to:`/docs/advanced-nodes`,label:`Advanced Nodes`,group:`Guides`},{to:`/docs/plugins`,label:`Plugins`,group:`Guides`},{to:`/docs/middleware`,label:`Middleware`,group:`Guides`},{to:`/docs/validation`,label:`Validation`,group:`Guides`},{to:`/docs/performance`,label:`Performance`,group:`Guides`},{to:`/docs/database`,label:`Database`,group:`Guides`},{to:`/docs/tutorials/research-assistant`,label:`Research Assistant`,group:`Tutorials`},{to:`/docs/api/state-graph`,label:`StateGraph`,group:`API Reference`},{to:`/docs/api/agent-builder`,label:`AgentBuilder`,group:`API Reference`},{to:`/docs/api/agents`,label:`Agents`,group:`API Reference`},{to:`/docs/api/llm-clients`,label:`LLM Clients`,group:`API Reference`},{to:`/docs/api/messages`,label:`Messages`,group:`API Reference`},{to:`/docs/api/tool-registry`,label:`Tool Registry`,group:`API Reference`},{to:`/docs/api/builtin-nodes`,label:`Built-in Nodes`,group:`API Reference`},{to:`/docs/api/memory-types`,label:`Memory Types`,group:`API Reference`},{to:`/docs/api/checkpointer`,label:`Checkpointer`,group:`API Reference`},{to:`/docs/api/rag-config`,label:`RAG Config`,group:`API Reference`},{to:`/docs/api/vector-store`,label:`Vector Store`,group:`API Reference`},{to:`/docs/api/supervisor`,label:`Supervisor`,group:`API Reference`},{to:`/docs/api/observability`,label:`Observability`,group:`API Reference`},{to:`/docs/examples`,label:`Examples`,group:`Resources`},{to:`/docs/best-practices`,label:`Best Practices`,group:`Resources`},{to:`/docs/glossary`,label:`Glossary`,group:`Resources`},{to:`/docs/faq`,label:`FAQ`,group:`Resources`},{to:`/docs/changelog`,label:`Changelog`,group:`Resources`}],mr=[`Get Started`,`Core Concepts`,`Guides`,`Tutorials`,`API Reference`,`Resources`].map(e=>({group:e,links:pr.filter(t=>t.group===e)}));function P({children:e,anchors:t=[]}){let[n,r]=(0,v.useState)(!1),i=lt(),a=pr.findIndex(e=>e.to===i.pathname),o=a>0?pr[a-1]:null,s=a>=0&&a<pr.length-1?pr[a+1]:null,c=({isActive:e})=>({display:`block`,padding:`5px 12px`,borderRadius:4,fontSize:`0.875rem`,color:e?`var(--accent)`:`#8b949e`,background:e?`var(--accent-dim, rgba(206,66,43,0.1))`:`transparent`,textDecoration:`none`,fontWeight:e?500:400,transition:`color 0.15s, background 0.15s`}),l=()=>(0,j.jsxs)(`aside`,{style:{width:230,flexShrink:0,borderRight:`1px solid #21262d`,padding:`28px 0`,display:`flex`,flexDirection:`column`,gap:`24px`},children:[mr.map(e=>(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`div`,{style:{fontSize:`0.7rem`,fontWeight:600,color:`#484f58`,textTransform:`uppercase`,letterSpacing:`0.08em`,padding:`0 12px`,marginBottom:6},children:e.group}),e.links.map(e=>(0,j.jsx)(jn,{to:e.to,style:c,end:!0,children:e.label},e.to))]},e.group)),t.length>0&&(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`div`,{style:{fontSize:`0.7rem`,fontWeight:600,color:`#484f58`,textTransform:`uppercase`,letterSpacing:`0.08em`,padding:`0 12px`,marginBottom:6},children:`On this page`}),t.map(e=>(0,j.jsx)(`a`,{href:`#${e.id}`,style:{display:`block`,padding:`4px 12px`,fontSize:`0.8125rem`,color:`#8b949e`,textDecoration:`none`,transition:`color 0.15s`},onMouseEnter:e=>e.target.style.color=`var(--accent)`,onMouseLeave:e=>e.target.style.color=`#8b949e`,children:e.label},e.id))]})]});return(0,j.jsxs)(`div`,{style:{maxWidth:1320,margin:`0 auto`,padding:`0 24px`,display:`flex`,minHeight:`calc(100vh - 60px)`},children:[(0,j.jsx)(`div`,{className:`doc-sidebar-desktop`,style:{position:`sticky`,top:60,height:`calc(100vh - 60px)`,overflowY:`auto`},children:(0,j.jsx)(l,{})}),n&&(0,j.jsxs)(`div`,{style:{position:`fixed`,inset:0,zIndex:40,display:`flex`},children:[(0,j.jsx)(`div`,{style:{background:`rgba(0,0,0,0.6)`,position:`absolute`,inset:0},onClick:()=>r(!1)}),(0,j.jsxs)(`div`,{style:{position:`relative`,background:`#0d1117`,width:270,height:`100%`,padding:`20px 0`,overflowY:`auto`,borderRight:`1px solid #21262d`,zIndex:1},children:[(0,j.jsx)(`button`,{onClick:()=>r(!1),style:{background:`none`,border:`none`,color:`#8b949e`,cursor:`pointer`,padding:`0 16px`,marginBottom:16},children:`✕ Close`}),(0,j.jsx)(l,{})]})]}),(0,j.jsxs)(`main`,{style:{flex:1,padding:`40px 0 80px 52px`,minWidth:0,maxWidth:820},children:[(0,j.jsx)(`button`,{onClick:()=>r(!0),className:`doc-mobile-toggle`,style:{display:`none`,marginBottom:24,background:`#161b22`,border:`1px solid #30363d`,borderRadius:6,color:`#e6edf3`,cursor:`pointer`,padding:`8px 16px`,fontSize:`0.875rem`},children:`☰ Menu`}),e,(o||s)&&(0,j.jsxs)(`nav`,{style:{display:`flex`,justifyContent:`space-between`,gap:16,marginTop:64,paddingTop:32,borderTop:`1px solid #21262d`},children:[o?(0,j.jsxs)(A,{to:o.to,style:{display:`flex`,flexDirection:`column`,gap:2,background:`#161b22`,border:`1px solid #21262d`,borderRadius:8,padding:`14px 18px`,textDecoration:`none`,flex:1,maxWidth:`48%`,transition:`border-color 0.2s`},onMouseEnter:e=>e.currentTarget.style.borderColor=`var(--accent)`,onMouseLeave:e=>e.currentTarget.style.borderColor=`#21262d`,children:[(0,j.jsx)(`span`,{style:{fontSize:`0.75rem`,color:`#484f58`,textTransform:`uppercase`,letterSpacing:`0.06em`},children:`← Previous`}),(0,j.jsx)(`span`,{style:{fontSize:`0.9375rem`,color:`#e6edf3`,fontWeight:500},children:o.label})]}):(0,j.jsx)(`div`,{}),s?(0,j.jsxs)(A,{to:s.to,style:{display:`flex`,flexDirection:`column`,gap:2,alignItems:`flex-end`,background:`#161b22`,border:`1px solid #21262d`,borderRadius:8,padding:`14px 18px`,textDecoration:`none`,flex:1,maxWidth:`48%`,transition:`border-color 0.2s`},onMouseEnter:e=>e.currentTarget.style.borderColor=`var(--accent)`,onMouseLeave:e=>e.currentTarget.style.borderColor=`#21262d`,children:[(0,j.jsx)(`span`,{style:{fontSize:`0.75rem`,color:`#484f58`,textTransform:`uppercase`,letterSpacing:`0.06em`},children:`Next →`}),(0,j.jsx)(`span`,{style:{fontSize:`0.9375rem`,color:`#e6edf3`,fontWeight:500},children:s.label})]}):(0,j.jsx)(`div`,{})]})]}),(0,j.jsx)(`style`,{children:`
        .doc-sidebar-desktop { display: block; }
        .doc-mobile-toggle   { display: none; }
        @media (max-width: 900px) {
          .doc-sidebar-desktop { display: none !important; }
          .doc-mobile-toggle   { display: flex !important; }
          main { padding-left: 0 !important; }
        }
      `})]})}var hr=[{id:`what`,label:`What is Flowgentra?`},{id:`choose-path`,label:`Choose Your Path`},{id:`three-concepts`,label:`Three Core Concepts`},{id:`explore`,label:`Explore the Docs`}];function gr(){let{language:e,setLanguage:t}=M(),n=e===`rust`;return(0,j.jsxs)(P,{anchors:hr,children:[(0,j.jsx)(`h1`,{style:vr,children:`Introduction`}),(0,j.jsx)(`p`,{style:yr,children:`Flowgentra is a high-performance framework for building stateful, multi-step AI agents as typed graphs. It has a Rust core with Python bindings — you can use either language independently.`}),(0,j.jsxs)(_r,{id:`what`,title:`What is Flowgentra?`,children:[(0,j.jsx)(`p`,{style:br,children:`Modern AI applications are more than a single LLM call. They involve sequences of steps: fetching data, calling tools, making decisions, looping until a goal is met. Managing this complexity with plain code becomes unmaintainable fast.`}),(0,j.jsxs)(`p`,{style:br,children:[`Flowgentra gives you a `,(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`graph abstraction`}),` for this. You define your agent as a directed graph of nodes (functions), connect them with edges, and Flowgentra handles execution, state management, checkpointing, and routing.`]}),(0,j.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(240px, 1fr))`,gap:14,marginTop:16},children:[{icon:`⚡`,title:`Rust-powered`,body:`The execution engine is written in Rust. Python bindings run at near-native speed via PyO3 — no GIL bottlenecks on graph execution.`},{icon:`📊`,title:`Inspired by LangGraph`,body:`If you've used LangGraph, Flowgentra will feel familiar. It uses the same graph model with additional performance, multi-language support, and built-in multi-agent strategies.`},{icon:`🏭`,title:`Production-ready`,body:`Built-in checkpointing, retry nodes, timeout nodes, token tracking, cost estimation, and observability tracing.`}].map(e=>(0,j.jsxs)(`div`,{style:{background:`#161b22`,border:`1px solid #21262d`,borderRadius:8,padding:`18px 20px`},children:[(0,j.jsx)(`div`,{style:{fontSize:`1.5rem`,marginBottom:10},children:e.icon}),(0,j.jsx)(`div`,{style:{fontWeight:600,color:`#e6edf3`,marginBottom:6},children:e.title}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,fontSize:`0.875rem`,lineHeight:1.65,margin:0},children:e.body})]},e.title))})]}),(0,j.jsxs)(_r,{id:`choose-path`,title:`Choose Your Path`,children:[(0,j.jsx)(`p`,{style:br,children:`The documentation is organized with two parallel paths — one for Rust, one for Python. Use the language switcher in the navbar to toggle code examples throughout the site.`}),(0,j.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:16,marginTop:8},children:[(0,j.jsxs)(A,{to:`/docs/quickstart-rust`,style:{flex:`1 1 260px`,display:`flex`,gap:18,alignItems:`flex-start`,background:n?`rgba(206,66,43,0.08)`:`#161b22`,border:`2px solid ${n?`#CE422B`:`#21262d`}`,borderRadius:10,padding:`22px 24px`,textDecoration:`none`,transition:`border-color 0.2s`},onClick:()=>t(`rust`),onMouseEnter:e=>e.currentTarget.style.borderColor=`#CE422B`,onMouseLeave:e=>e.currentTarget.style.borderColor=n?`#CE422B`:`#21262d`,children:[(0,j.jsx)(`span`,{style:{fontSize:`2.5rem`,lineHeight:1,flexShrink:0},children:`🦀`}),(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`div`,{style:{fontWeight:700,color:`#e6edf3`,marginBottom:6,fontSize:`1.0625rem`},children:`Rust Quickstart`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,fontSize:`0.875rem`,lineHeight:1.65,margin:`0 0 12px`},children:`Compile-time state guarantees, zero-cost abstractions, async-first. Best for performance-critical production systems.`}),(0,j.jsx)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:[`Type-safe`,`Async`,`Zero-cost`].map(e=>(0,j.jsx)(`span`,{style:{background:`rgba(206,66,43,0.12)`,border:`1px solid rgba(206,66,43,0.3)`,borderRadius:12,padding:`2px 8px`,fontSize:`0.75rem`,color:`#CE422B`},children:e},e))})]})]}),(0,j.jsxs)(A,{to:`/docs/quickstart-python`,style:{flex:`1 1 260px`,display:`flex`,gap:18,alignItems:`flex-start`,background:n?`#161b22`:`rgba(53,114,165,0.08)`,border:`2px solid ${n?`#21262d`:`#3572A5`}`,borderRadius:10,padding:`22px 24px`,textDecoration:`none`,transition:`border-color 0.2s`},onClick:()=>t(`python`),onMouseEnter:e=>e.currentTarget.style.borderColor=`#3572A5`,onMouseLeave:e=>e.currentTarget.style.borderColor=n?`#21262d`:`#3572A5`,children:[(0,j.jsx)(`span`,{style:{fontSize:`2.5rem`,lineHeight:1,flexShrink:0},children:`🐍`}),(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`div`,{style:{fontWeight:700,color:`#e6edf3`,marginBottom:6,fontSize:`1.0625rem`},children:`Python Quickstart`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,fontSize:`0.875rem`,lineHeight:1.65,margin:`0 0 12px`},children:`Ergonomic API, fast iteration, LangGraph-compatible patterns. Best for prototyping and data science workflows.`}),(0,j.jsx)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:[`Ergonomic`,`Familiar`,`LangGraph-compatible`].map(e=>(0,j.jsx)(`span`,{style:{background:`rgba(53,114,165,0.12)`,border:`1px solid rgba(53,114,165,0.3)`,borderRadius:12,padding:`2px 8px`,fontSize:`0.75rem`,color:`#3572A5`},children:e},e))})]})]})]})]}),(0,j.jsxs)(_r,{id:`three-concepts`,title:`Three Core Concepts`,children:[(0,j.jsx)(`p`,{style:br,children:`You only need three things to build a Flowgentra agent:`}),(0,j.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[{num:`1`,accent:`#CE422B`,title:`State`,body:`A typed container of key-value data that flows through the entire graph. Every node reads from and writes to state. In Rust: a struct with #[derive(State)]. In Python: a TypedDict or State instance.`,link:`/docs/state-concepts`},{num:`2`,accent:`#3572A5`,title:`Nodes`,body:`Functions that receive state and return updated state. Nodes do the actual work: call LLMs, execute tools, transform data, make decisions. One node = one unit of responsibility.`,link:`/docs/nodes`},{num:`3`,accent:`#3fb950`,title:`Graph`,body:`The wiring that connects nodes. Edges define execution order. Conditional edges route dynamically based on state. You compile a graph once, then invoke it many times.`,link:`/docs/graphs`}].map(e=>(0,j.jsxs)(A,{to:e.link,style:{display:`flex`,gap:16,alignItems:`flex-start`,background:`#161b22`,border:`1px solid #21262d`,borderRadius:8,padding:`18px 20px`,textDecoration:`none`,transition:`border-color 0.2s`},onMouseEnter:t=>t.currentTarget.style.borderColor=e.accent,onMouseLeave:e=>e.currentTarget.style.borderColor=`#21262d`,children:[(0,j.jsx)(`div`,{style:{width:32,height:32,borderRadius:`50%`,background:e.accent,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`0.9rem`,fontWeight:700,color:`#fff`,flexShrink:0},children:e.num}),(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`div`,{style:{fontWeight:600,color:`#e6edf3`,marginBottom:4},children:e.title}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,fontSize:`0.875rem`,lineHeight:1.65,margin:0},children:e.body})]})]},e.num))})]}),(0,j.jsx)(_r,{id:`explore`,title:`Explore the Docs`,children:(0,j.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(220px, 1fr))`,gap:12},children:[{to:`/docs/installation`,emoji:`📦`,label:`Installation`,desc:`Cargo, pip, or build from source`},{to:`/docs/agents`,emoji:`🤖`,label:`Building Agents`,desc:`ZeroShotReAct, conversational, config-driven`},{to:`/docs/llm-client`,emoji:`🔌`,label:`LLM Integration`,desc:`7 providers, tool calling, streaming`},{to:`/docs/rag`,emoji:`🔍`,label:`RAG`,desc:`Embeddings, vector stores, retrieval`},{to:`/docs/supervisor`,emoji:`🎯`,label:`Multi-Agent`,desc:`11 orchestration strategies`},{to:`/docs/memory`,emoji:`💾`,label:`Memory`,desc:`Conversation history, checkpointing`},{to:`/docs/api/state-graph`,emoji:`📖`,label:`API Reference`,desc:`Complete API for all modules`},{to:`/docs/examples`,emoji:`💡`,label:`Examples`,desc:`Chatbot, RAG agent, multi-agent`},{to:`/docs/tutorials/research-assistant`,emoji:`🔬`,label:`E2E Tutorial`,desc:`Build a research assistant from scratch`}].map(e=>(0,j.jsxs)(A,{to:e.to,style:xr,onMouseEnter:e=>e.currentTarget.style.borderColor=`var(--accent)`,onMouseLeave:e=>e.currentTarget.style.borderColor=`#21262d`,children:[(0,j.jsx)(`span`,{style:{fontSize:`1.25rem`,marginBottom:6,display:`block`},children:e.emoji}),(0,j.jsx)(`div`,{style:{fontWeight:600,color:`#e6edf3`,marginBottom:4,fontSize:`0.9375rem`},children:e.label}),(0,j.jsx)(`div`,{style:{fontSize:`0.8125rem`,color:`#8b949e`,lineHeight:1.5},children:e.desc})]},e.to))})})]})}function _r({id:e,title:t,children:n}){return(0,j.jsxs)(`section`,{id:e,style:{marginBottom:52},children:[(0,j.jsx)(`h2`,{style:{fontSize:`1.375rem`,fontWeight:600,color:`#e6edf3`,marginBottom:16,marginTop:0},children:t}),n]})}var vr={fontSize:`2rem`,fontWeight:700,color:`#e6edf3`,letterSpacing:`-0.02em`,marginBottom:8,marginTop:0},yr={color:`#8b949e`,marginBottom:40,lineHeight:1.7,fontSize:`1.0625rem`},br={color:`#8b949e`,lineHeight:1.75,marginBottom:16},xr={background:`#161b22`,border:`1px solid #21262d`,borderRadius:8,padding:`18px 18px`,textDecoration:`none`,display:`block`,transition:`border-color 0.2s`},Sr=[{id:`prerequisites`,label:`Prerequisites`},{id:`install`,label:`Installation`},{id:`first-agent`,label:`Your First Agent`},{id:`add-llm`,label:`Add an LLM Node`},{id:`add-tools`,label:`Add Tools`},{id:`next`,label:`Next Steps`}];function Cr(){return(0,j.jsxs)(P,{anchors:Sr,children:[(0,j.jsx)(`div`,{style:{marginBottom:8},children:(0,j.jsx)(`span`,{style:{background:`rgba(206,66,43,0.12)`,border:`1px solid rgba(206,66,43,0.4)`,borderRadius:20,padding:`3px 12px`,fontSize:`0.8rem`,color:`#CE422B`,fontWeight:600},children:`🦀 Rust`})}),(0,j.jsx)(`h1`,{style:Er,children:`Quick Start — Rust`}),(0,j.jsx)(`p`,{style:Dr,children:`Build a working AI agent in Rust in under 10 minutes. No prior Flowgentra experience needed.`}),(0,j.jsx)(wr,{id:`prerequisites`,title:`Prerequisites`,children:(0,j.jsxs)(`ul`,{style:kr,children:[(0,j.jsxs)(`li`,{children:[`Rust 1.75+ (`,(0,j.jsx)(`code`,{style:Ar,children:`rustup update stable`}),`)`]}),(0,j.jsx)(`li`,{children:`Tokio async runtime (added automatically via Cargo)`}),(0,j.jsxs)(`li`,{children:[`An API key for your LLM provider (e.g., `,(0,j.jsx)(`code`,{style:Ar,children:`OPENAI_API_KEY`}),`)`]})]})}),(0,j.jsxs)(wr,{id:`install`,title:`Installation`,children:[(0,j.jsxs)(`p`,{style:Or,children:[`Add Flowgentra to your `,(0,j.jsx)(`code`,{style:Ar,children:`Cargo.toml`}),`:`]}),(0,j.jsx)(N,{forceLang:`toml`,rust:`[dependencies]
flowgentra-ai = "0.1.5"
tokio = { version = "1", features = ["full"] }

# Optional feature flags:
# flowgentra-ai = { version = "0.1.5", features = ["openai", "tracing", "memory"] }`}),(0,j.jsx)(Tr,{type:`info`,title:`Feature flags`,children:(0,j.jsxs)(`p`,{style:{margin:0},children:[`Enable only what you need: `,(0,j.jsx)(`code`,{style:Ar,children:`openai`}),` for OpenAI provider, `,(0,j.jsx)(`code`,{style:Ar,children:`tracing`}),` for structured logs, `,(0,j.jsx)(`code`,{style:Ar,children:`memory`}),` for checkpointing, `,(0,j.jsx)(`code`,{style:Ar,children:`rag`}),` for vector stores.`]})})]}),(0,j.jsxs)(wr,{id:`first-agent`,title:`Your First Agent`,children:[(0,j.jsx)(`p`,{style:Or,children:`A Flowgentra agent is a directed graph where each node is an async function that reads and writes shared state. Let's build a minimal one:`}),(0,j.jsx)(N,{rust:`use flowgentra_ai::prelude::*;

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
}`}),(0,j.jsxs)(`p`,{style:{...Or,marginTop:16},children:[`Run it with `,(0,j.jsx)(`code`,{style:Ar,children:`cargo run`}),`. That's a complete Flowgentra agent.`]})]}),(0,j.jsxs)(wr,{id:`add-llm`,title:`Add an LLM Node`,children:[(0,j.jsxs)(`p`,{style:Or,children:[`Now let's wire in a real LLM. Flowgentra provides a unified `,(0,j.jsx)(`code`,{style:Ar,children:`LLM`}),` that works across all providers.`]}),(0,j.jsx)(N,{rust:`use flowgentra_ai::prelude::*;
use flowgentra_ai::llm::{LLMConfig, LLM, Message};

#[derive(State, Default, Clone)]
struct ChatState {
    user_message: String,
    response:     String,
}

#[node]
async fn call_llm(state: &mut ChatState) -> Result<()> {
    let config = LLMConfig::openai("gpt-4o");
    let client = LLM::from_config(config)?;

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
}`}),(0,j.jsxs)(Tr,{type:`tip`,title:`Switching providers`,children:[`Replace `,(0,j.jsx)(`code`,{style:Ar,children:`LLMConfig::openai("gpt-4o")`}),` with any of:`,(0,j.jsx)(`br`,{}),(0,j.jsx)(`code`,{style:Ar,children:`LLMConfig::anthropic("claude-3-5-haiku-20241022")`}),(0,j.jsx)(`br`,{}),(0,j.jsx)(`code`,{style:Ar,children:`LLMConfig::ollama("llama3.2")`}),(0,j.jsx)(`br`,{}),(0,j.jsx)(`code`,{style:Ar,children:`LLMConfig::groq("llama-3.3-70b-versatile")`})]})]}),(0,j.jsxs)(wr,{id:`add-tools`,title:`Add Tools (Bonus)`,children:[(0,j.jsx)(`p`,{style:Or,children:`Tools let your LLM call functions. Here's a two-node graph: the LLM reasons about which tool to call, the tool node executes it, and the loop continues until the LLM is done.`}),(0,j.jsx)(N,{rust:`use flowgentra_ai::prelude::*;
use flowgentra_ai::tools::{ToolRegistry, ToolDefinition};

#[derive(State, Default, Clone)]
struct ToolState {
    #[reducer(Append)]
    messages: Vec<Message>,
    done: bool,
}

#[node]
async fn llm_node(state: &mut ToolState) -> Result<()> {
    let client = LLM::openai("gpt-4o");

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
}`})]}),(0,j.jsx)(wr,{id:`next`,title:`Next Steps`,children:(0,j.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(200px, 1fr))`,gap:12},children:[{to:`/docs/state-concepts`,label:`📦 State & Reducers`,desc:`Typed state, parallel merges`},{to:`/docs/graphs`,label:`🗺️ Graphs & Routing`,desc:`Conditional edges, subgraphs`},{to:`/docs/agents`,label:`🤖 Agent Patterns`,desc:`ReAct, ZeroShot, Conversational`},{to:`/docs/memory`,label:`💾 Memory & Checkpoints`,desc:`Resume interrupted workflows`},{to:`/docs/api/state-graph`,label:`📖 API Reference`,desc:`Full StateGraph API`},{to:`/docs/examples`,label:`💡 Examples`,desc:`Real-world patterns`}].map(e=>(0,j.jsxs)(A,{to:e.to,style:jr,onMouseEnter:e=>e.currentTarget.style.borderColor=`var(--accent)`,onMouseLeave:e=>e.currentTarget.style.borderColor=`#21262d`,children:[(0,j.jsx)(`div`,{style:{fontWeight:600,color:`#e6edf3`,marginBottom:4},children:e.label}),(0,j.jsx)(`div`,{style:{fontSize:`0.875rem`,color:`#8b949e`},children:e.desc})]},e.to))})})]})}function wr({id:e,title:t,children:n}){return(0,j.jsxs)(`section`,{id:e,style:{marginBottom:52},children:[(0,j.jsx)(`h2`,{style:{fontSize:`1.375rem`,fontWeight:600,color:`#e6edf3`,marginBottom:16,marginTop:0},children:t}),n]})}function Tr({type:e,title:t,children:n}){let r={info:{bg:`rgba(53,114,165,0.1)`,border:`rgba(53,114,165,0.4)`,text:`#58a6ff`},tip:{bg:`rgba(63,185,80,0.1)`,border:`rgba(63,185,80,0.4)`,text:`#3fb950`},warn:{bg:`rgba(210,153,34,0.1)`,border:`rgba(210,153,34,0.4)`,text:`#d29922`}},i=r[e]||r.info;return(0,j.jsxs)(`div`,{style:{background:i.bg,border:`1px solid ${i.border}`,borderRadius:8,padding:`14px 18px`,marginTop:16},children:[t&&(0,j.jsx)(`div`,{style:{fontWeight:600,color:i.text,marginBottom:6,fontSize:`0.9rem`},children:t}),(0,j.jsx)(`div`,{style:{color:`#8b949e`,fontSize:`0.875rem`,lineHeight:1.65},children:n})]})}var Er={fontSize:`2rem`,fontWeight:700,color:`#e6edf3`,letterSpacing:`-0.02em`,marginBottom:8,marginTop:8},Dr={color:`#8b949e`,marginBottom:40,lineHeight:1.7,fontSize:`1.0625rem`},Or={color:`#8b949e`,lineHeight:1.75,marginBottom:16},kr={color:`#8b949e`,lineHeight:2,paddingLeft:20,margin:`0 0 16px`},Ar={background:`#21262d`,border:`1px solid #30363d`,borderRadius:4,padding:`1px 6px`,fontSize:`0.85em`,fontFamily:`JetBrains Mono, monospace`},jr={background:`#161b22`,border:`1px solid #21262d`,borderRadius:8,padding:`16px 18px`,textDecoration:`none`,display:`block`,transition:`border-color 0.2s`},Mr=[{id:`prerequisites`,label:`Prerequisites`},{id:`install`,label:`Installation`},{id:`first-agent`,label:`Your First Agent`},{id:`add-llm`,label:`Add an LLM Node`},{id:`multi-node`,label:`Multi-Node Graph`},{id:`config-driven`,label:`Config-Driven (Production)`},{id:`next`,label:`Next Steps`}];function Nr(){return(0,j.jsxs)(P,{anchors:Mr,children:[(0,j.jsx)(`div`,{style:{marginBottom:8},children:(0,j.jsx)(`span`,{style:{background:`rgba(53,114,165,0.12)`,border:`1px solid rgba(53,114,165,0.4)`,borderRadius:20,padding:`3px 12px`,fontSize:`0.8rem`,color:`#3572A5`,fontWeight:600},children:`🐍 Python`})}),(0,j.jsx)(`h1`,{style:Ir,children:`Quick Start — Python`}),(0,j.jsx)(`p`,{style:Lr,children:`Build a working AI agent in Python in under 10 minutes. The Python library wraps the high-performance Rust engine via PyO3.`}),(0,j.jsx)(Pr,{id:`prerequisites`,title:`Prerequisites`,children:(0,j.jsxs)(`ul`,{style:zr,children:[(0,j.jsx)(`li`,{children:`Python 3.10+`}),(0,j.jsxs)(`li`,{children:[`An API key for your LLM provider (e.g., `,(0,j.jsx)(`code`,{style:Br,children:`OPENAI_API_KEY`}),`)`]}),(0,j.jsx)(`li`,{children:`pip or a virtual environment manager`})]})}),(0,j.jsxs)(Pr,{id:`install`,title:`Installation`,children:[(0,j.jsx)(`p`,{style:Rr,children:`Install from PyPI:`}),(0,j.jsx)(N,{forceLang:`bash`,rust:`pip install flowgentra-ai

# With optional extras:
pip install "flowgentra-ai[openai]"       # OpenAI provider
pip install "flowgentra-ai[anthropic]"    # Anthropic / Claude
pip install "flowgentra-ai[tracing]"      # Structured logging
pip install "flowgentra-ai[openai,anthropic,tracing]"  # Multiple`}),(0,j.jsxs)(Fr,{type:`info`,title:`Building from source`,children:[`If you need the latest changes or want to customize the Rust engine:`,(0,j.jsx)(`br`,{}),(0,j.jsx)(`code`,{style:Br,children:`pip install maturin && cd flowgentra-ai-py && maturin develop`})]}),(0,j.jsx)(`p`,{style:{...Rr,marginTop:16},children:`Verify installation:`}),(0,j.jsx)(N,{forceLang:`bash`,rust:`python -c "import flowgentra_ai; print(flowgentra_ai.__version__)"
# 0.1.5`})]}),(0,j.jsxs)(Pr,{id:`first-agent`,title:`Your First Agent`,children:[(0,j.jsxs)(`p`,{style:Rr,children:[`A Flowgentra graph has three components: `,(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`State`}),` (shared data), `,(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Nodes`}),` (functions), and `,(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Edges`}),` (connections).`]}),(0,j.jsx)(N,{python:`from flowgentra_ai.graph import StateGraph, END
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
# Hello, Alice! Welcome to Flowgentra.`}),(0,j.jsxs)(Fr,{type:`tip`,title:`Using State instead of TypedDict`,children:[`For a more dynamic approach, use the built-in `,(0,j.jsx)(`code`,{style:Br,children:`State`}),` class which supports any key-value pairs and provides helper methods:`,(0,j.jsx)(`pre`,{style:Hr,children:`from flowgentra_ai import State
state = State({"name": "Alice"})
state.get("name")        # "Alice"
state["score"] = 42
"score" in state         # True`})]})]}),(0,j.jsxs)(Pr,{id:`add-llm`,title:`Add an LLM Node`,children:[(0,j.jsxs)(`p`,{style:Rr,children:[`Connect a real LLM. Flowgentra's `,(0,j.jsx)(`code`,{style:Br,children:`LLM`}),` works with all major providers via a unified API.`]}),(0,j.jsx)(N,{python:`import os
from flowgentra_ai.graph import StateGraph, END
from flowgentra_ai.llm import LLMConfig, LLM, Message
from typing import TypedDict

os.environ["OPENAI_API_KEY"] = "sk-..."

class ChatState(TypedDict):
    user_message: str
    response:     str

# Create a reusable LLM
config = LLMConfig(provider="openai", model="gpt-4o")
client = LLM.from_config(config)

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
print(result["response"])`}),(0,j.jsx)(`p`,{style:{...Rr,marginTop:12},children:`To use a different provider, change one line:`}),(0,j.jsx)(N,{python:`# Anthropic Claude
config = LLMConfig(provider="anthropic", model="claude-3-5-haiku-20241022", api_key="...")

# Ollama (local — no API key needed)
config = LLMConfig(provider="ollama", model="llama3.2")

# Groq (fast inference)
config = LLMConfig(provider="groq", model="llama-3.3-70b-versatile", api_key="...")`})]}),(0,j.jsxs)(Pr,{id:`multi-node`,title:`Multi-Node Graph with Routing`,children:[(0,j.jsx)(`p`,{style:Rr,children:`Real agents have multiple nodes with branching logic. Here's a graph that classifies a question and routes it differently:`}),(0,j.jsx)(N,{python:`from flowgentra_ai.graph import StateGraph, END
from flowgentra_ai.llm import LLMConfig, LLM, Message
from typing import TypedDict

class RouterState(TypedDict):
    question:  str
    category:  str   # "technical" | "general"
    answer:    str

config = LLMConfig(provider="openai", model="gpt-4o-mini")
client = LLM.from_config(config)

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
print(f"[{result['category']}] {result['answer'][:80]}...")`})]}),(0,j.jsxs)(Pr,{id:`config-driven`,title:`Config-Driven Approach (Production)`,children:[(0,j.jsxs)(`p`,{style:Rr,children:[`For production agents, define the graph topology in YAML and auto-discover handler functions with `,(0,j.jsx)(`code`,{style:Br,children:`@register_handler`}),`. This lets you swap configurations without touching Python code.`]}),(0,j.jsx)(`p`,{style:{...Rr,marginBottom:8},children:(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`handlers.py`})}),(0,j.jsx)(N,{python:`from flowgentra_ai.agent import register_handler
from flowgentra_ai.llm import LLMConfig, LLM, Message

config = LLMConfig(provider="openai", model="gpt-4o-mini")
client = LLM.from_config(config)

@register_handler("answer_question")
def answer_question(state):
    reply = client.chat([Message.user(state.get("query", ""))])
    state["response"] = reply.content
    return state`}),(0,j.jsx)(`p`,{style:{...Rr,marginTop:16,marginBottom:8},children:(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`agent.yaml`})}),(0,j.jsx)(N,{forceLang:`yaml`,rust:`name: my-agent
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
      to: __end__`}),(0,j.jsx)(`p`,{style:{...Rr,marginTop:16,marginBottom:8},children:(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`main.py`})}),(0,j.jsx)(N,{python:`from flowgentra_ai.agent import Agent

agent = Agent.from_config_path("agent.yaml")
result = agent.run()

# Or with thread ID for checkpointing:
result = agent.run_with_thread("session-001")`})]}),(0,j.jsx)(Pr,{id:`next`,title:`Next Steps`,children:(0,j.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(200px, 1fr))`,gap:12},children:[{to:`/docs/state-concepts`,label:`📦 State Management`,desc:`State class, TypedDict, reducers`},{to:`/docs/graphs`,label:`🗺️ Graphs & Routing`,desc:`Conditional edges, loops`},{to:`/docs/agents`,label:`🤖 Agent Patterns`,desc:`ReAct, conversational, config-driven`},{to:`/docs/llm-client`,label:`🔌 LLM Integration`,desc:`7 providers, tool calling, streaming`},{to:`/docs/memory`,label:`💾 Memory`,desc:`Conversation history, checkpointing`},{to:`/docs/examples`,label:`💡 Examples`,desc:`Chatbot, RAG, multi-agent`}].map(e=>(0,j.jsxs)(A,{to:e.to,style:Vr,onMouseEnter:e=>e.currentTarget.style.borderColor=`var(--accent)`,onMouseLeave:e=>e.currentTarget.style.borderColor=`#21262d`,children:[(0,j.jsx)(`div`,{style:{fontWeight:600,color:`#e6edf3`,marginBottom:4},children:e.label}),(0,j.jsx)(`div`,{style:{fontSize:`0.875rem`,color:`#8b949e`},children:e.desc})]},e.to))})})]})}function Pr({id:e,title:t,children:n}){return(0,j.jsxs)(`section`,{id:e,style:{marginBottom:52},children:[(0,j.jsx)(`h2`,{style:{fontSize:`1.375rem`,fontWeight:600,color:`#e6edf3`,marginBottom:16,marginTop:0},children:t}),n]})}function Fr({type:e,title:t,children:n}){let r={info:{bg:`rgba(53,114,165,0.1)`,border:`rgba(53,114,165,0.4)`,text:`#58a6ff`},tip:{bg:`rgba(63,185,80,0.1)`,border:`rgba(63,185,80,0.4)`,text:`#3fb950`}},i=r[e]||r.info;return(0,j.jsxs)(`div`,{style:{background:i.bg,border:`1px solid ${i.border}`,borderRadius:8,padding:`14px 18px`,marginTop:16},children:[t&&(0,j.jsx)(`div`,{style:{fontWeight:600,color:i.text,marginBottom:6,fontSize:`0.9rem`},children:t}),(0,j.jsx)(`div`,{style:{color:`#8b949e`,fontSize:`0.875rem`,lineHeight:1.65},children:n})]})}var Ir={fontSize:`2rem`,fontWeight:700,color:`#e6edf3`,letterSpacing:`-0.02em`,marginBottom:8,marginTop:8},Lr={color:`#8b949e`,marginBottom:40,lineHeight:1.7,fontSize:`1.0625rem`},Rr={color:`#8b949e`,lineHeight:1.75,marginBottom:16},zr={color:`#8b949e`,lineHeight:2,paddingLeft:20,margin:`0 0 16px`},Br={background:`#21262d`,border:`1px solid #30363d`,borderRadius:4,padding:`1px 6px`,fontSize:`0.85em`,fontFamily:`JetBrains Mono, monospace`},Vr={background:`#161b22`,border:`1px solid #21262d`,borderRadius:8,padding:`16px 18px`,textDecoration:`none`,display:`block`,transition:`border-color 0.2s`},Hr={background:`#161b22`,border:`1px solid #30363d`,borderRadius:6,padding:`10px 14px`,fontSize:`0.8rem`,lineHeight:1.6,color:`#e6edf3`,margin:`10px 0 0`,overflowX:`auto`,whiteSpace:`pre`};function Ur(){let{language:e}=M();return(0,j.jsxs)(P,{children:[(0,j.jsx)(`h1`,{style:{fontSize:`2rem`,fontWeight:700,color:`#e6edf3`,letterSpacing:`-0.02em`,marginBottom:8,marginTop:0},children:`Installation`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:40,lineHeight:1.7},children:`Get Flowgentra added to your project in under a minute.`}),e===`rust`?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(Wr,{title:`Cargo (Rust)`,subtitle:`Add to your Cargo.toml:`,children:(0,j.jsx)(N,{forceLang:`toml`,rust:`[dependencies]
flowgentra = "0.4"
tokio = { version = "1", features = ["full"] }`})}),(0,j.jsx)(Wr,{title:`Feature Flags`,subtitle:`Enable optional features:`,children:(0,j.jsx)(N,{forceLang:`toml`,rust:`[dependencies]
flowgentra = { version = "0.4", features = [
    "openai",    # OpenAI integration helpers
    "tracing",   # Tracing + spans for each node
    "yaml",      # YAML config loading
    "memory",    # Built-in conversation memory
]}`})}),(0,j.jsx)(Wr,{title:`Requirements`,children:(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,lineHeight:2,paddingLeft:20},children:[(0,j.jsxs)(`li`,{children:[`Rust `,(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`1.75+`})]}),(0,j.jsx)(`li`,{children:`Tokio async runtime`}),(0,j.jsx)(`li`,{children:`Cargo 1.75+`})]})}),(0,j.jsx)(Wr,{title:`Verify`,children:(0,j.jsx)(N,{forceLang:`bash`,rust:`cargo add flowgentra
cargo build`})})]}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(Wr,{title:`pip (Python)`,subtitle:`Install from PyPI:`,children:(0,j.jsx)(N,{forceLang:`bash`,python:`pip install flowgentra-ai`})}),(0,j.jsx)(Wr,{title:`With extras`,children:(0,j.jsx)(N,{forceLang:`bash`,python:`# Include all optional integrations
pip install "flowgentra-ai[all]"

# Or individually
pip install "flowgentra-ai[openai]"
pip install "flowgentra-ai[anthropic]"
pip install "flowgentra-ai[tracing]"`})}),(0,j.jsx)(Wr,{title:`Requirements`,children:(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,lineHeight:2,paddingLeft:20},children:[(0,j.jsxs)(`li`,{children:[`Python `,(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`3.10+`})]}),(0,j.jsx)(`li`,{children:`Works in both sync and async contexts`})]})}),(0,j.jsx)(Wr,{title:`Verify`,children:(0,j.jsx)(N,{forceLang:`bash`,python:`python -c "import flowgentra_ai; print(flowgentra_ai.__version__)"`})}),(0,j.jsx)(Wr,{title:`Virtual environment (recommended)`,children:(0,j.jsx)(N,{forceLang:`bash`,python:`python -m venv .venv
source .venv/bin/activate  # Windows: .venv\\Scripts\\activate
pip install flowgentra-ai`})}),(0,j.jsxs)(Wr,{title:`Import style`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:12,fontSize:`0.9375rem`},children:`Import from the appropriate submodule — not from the top-level package:`}),(0,j.jsx)(N,{forceLang:`bash`,python:`# Correct — submodule imports
from flowgentra_ai.graph import StateGraph, END
from flowgentra_ai.llm import LLMConfig, LLM, Message
from flowgentra_ai.agent import Agent
from flowgentra_ai.memory import ConversationMemory, FileCheckpointer
from flowgentra_ai.tools import ToolRegistry, CalculatorTool
from flowgentra_ai.rag import InMemoryVectorStore, Embeddings
from flowgentra_ai.supervision import Supervisor
from flowgentra_ai.observability import ExecutionTracer`})]})]})]})}function Wr({title:e,subtitle:t,children:n}){return(0,j.jsxs)(`div`,{style:{marginBottom:40},children:[(0,j.jsx)(`h2`,{style:{fontSize:`1.25rem`,fontWeight:600,color:`#e6edf3`,marginBottom:t?6:14,marginTop:0},children:e}),t&&(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:12},children:t}),n]})}var Gr=[{id:`overview`,label:`Overview`},{id:`mental-model`,label:`Mental Model`},{id:`core-primitives`,label:`Core Primitives`},{id:`engine-features`,label:`Engine Features`},{id:`two-patterns`,label:`Two Patterns`},{id:`languages`,label:`Languages`},{id:`next-steps`,label:`Next Steps`}];function Kr(){let{language:e}=M();return(0,j.jsxs)(P,{anchors:Gr,children:[(0,j.jsx)(`h1`,{style:{fontSize:`2rem`,fontWeight:700,color:`#e6edf3`,letterSpacing:`-0.02em`,marginBottom:8,marginTop:0},children:`What is Flowgentra?`}),(0,j.jsxs)(`p`,{style:{color:`#8b949e`,marginBottom:40,lineHeight:1.7},children:[`Flowgentra is a framework for building `,(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`AI agent workflows`}),`. It gives you the building blocks to create anything from a simple LLM-powered function to a complex multi-agent system with memory, tools, evaluation, and observability.`]}),(0,j.jsx)(qr,{id:`overview`,title:`Overview`,children:(0,j.jsxs)(`p`,{style:{color:`#8b949e`,lineHeight:1.75,margin:0},children:[`The core idea is simple: your agent logic is a `,(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`graph`}),`. Nodes are functions. Edges connect them. State flows through.`]})}),(0,j.jsxs)(qr,{id:`mental-model`,title:`The Mental Model`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Think of your agent as a flowchart:`}),(0,j.jsx)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20,fontFamily:`monospace`,fontSize:`0.9rem`,color:`#8b949e`,textAlign:`center`},children:`          ┌─────────────┐
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
           └─────────┘`}),(0,j.jsxs)(`p`,{style:{color:`#8b949e`,lineHeight:1.7,margin:0},children:[`Each box is a `,(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`node`}),` — a function that reads state in and returns state out. The arrows are `,(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`edges`}),` — connections that tell the engine what to run next. Some edges are fixed; others are `,(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`conditional`}),` (the router function decides at runtime).`]})]}),(0,j.jsxs)(qr,{id:`core-primitives`,title:`Core Primitives`,children:[(0,j.jsx)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:16,marginTop:24},children:`State`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`State is the data container that travels through your graph. Every node reads from it and writes to it.`}),(0,j.jsx)(N,{rust:`state.set("user_query", "What is Rust?");
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
graph = builder.compile()`})]}),(0,j.jsxs)(qr,{id:`engine-features`,title:`What the Engine Gives You`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:20},children:`On top of this simple model, Flowgentra's engine adds:`}),(0,j.jsx)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20},children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,color:`#8b949e`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Feature`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`What it does`})]})}),(0,j.jsxs)(`tbody`,{children:[(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Checkpointing`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Persist state to disk between nodes — resume after crashes or for human review`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Retries`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Automatically retry failed nodes with exponential backoff`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Timeouts`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Kill slow nodes after a deadline`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Tracing`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Record every node execution, state change, and timing`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Visualization`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Export your graph as Mermaid or Graphviz diagrams`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`},children:`Parallel execution`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`Run multiple branches simultaneously and merge results`})]})]})]})})]}),(0,j.jsxs)(qr,{id:`two-patterns`,title:`The Three Patterns`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`There are three ways to use Flowgentra. All use the same engine.`}),(0,j.jsx)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`1. Predefined Agents`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Use built-in agent templates for common patterns. Best for getting started quickly.`}),(0,j.jsx)(N,{python:`from flowgentra_ai.agent import Agent

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
result = agent.run()`})]}),(0,j.jsxs)(qr,{id:`languages`,title:`How Rust and Python Relate`,children:[(0,j.jsxs)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:[`The Python library is a thin PyO3 wrapper around the Rust engine. When you call `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`graph.invoke()`}),` in Python, you're calling the same Rust execution loop that you'd use directly in Rust.`]}),(0,j.jsx)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20},children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,color:`#8b949e`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Rust`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Python`})]})}),(0,j.jsxs)(`tbody`,{children:[(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:(0,j.jsx)(`code`,{children:`StateGraph::<S>::builder()`})}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:(0,j.jsx)(`code`,{children:`StateGraph()`})})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:(0,j.jsx)(`code`,{children:`DynState`})}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:(0,j.jsx)(`code`,{children:`State`})})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:(0,j.jsx)(`code`,{children:`#[derive(State)]`})}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`TypedDict / dict`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:(0,j.jsx)(`code`,{children:`#[register_handler]`})}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:(0,j.jsx)(`code`,{children:`@register_handler`})})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,fontFamily:`monospace`,fontSize:`0.9em`},children:(0,j.jsx)(`code`,{children:`Agent::from_config_path()`})}),(0,j.jsx)(`td`,{style:{padding:`8px`,fontFamily:`monospace`,fontSize:`0.9em`},children:(0,j.jsx)(`code`,{children:`Agent.from_config_path()`})})]})]})]})}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,lineHeight:1.7,margin:0},children:`The key difference: Rust uses generics for compile-time type safety; Python uses dynamic dispatch for flexibility. Both are full-featured.`})]}),(0,j.jsx)(qr,{id:`next-steps`,title:`Next Steps`,children:(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,lineHeight:1.7,paddingLeft:20},children:[(0,j.jsxs)(`li`,{children:[(0,j.jsx)(A,{to:`/docs/installation`,style:{color:`#58a6ff`},children:`Installation`}),` — set up Rust or Python`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(A,{to:`/docs/getting-started`,style:{color:`#58a6ff`},children:`Quick Start`}),` — build your first graph in 5 minutes`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(A,{to:`/docs/state-concepts`,style:{color:`#58a6ff`},children:`State Management`}),` — understand how state works`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(A,{to:`/docs/graphs`,style:{color:`#58a6ff`},children:`Graph Execution`}),` — understand how graphs execute`]})]})})]})}function qr({id:e,title:t,children:n}){return(0,j.jsxs)(`section`,{id:e,style:{marginBottom:48},children:[(0,j.jsx)(`h2`,{style:{fontSize:`1.5rem`,fontWeight:600,color:`#e6edf3`,marginBottom:16,marginTop:0},children:t}),n]})}var Jr=[{id:`anatomy`,label:`Anatomy of a Graph`},{id:`building`,label:`Building a Graph`},{id:`conditional-routing`,label:`Conditional Routing`},{id:`invoking`,label:`Invoking a Graph`},{id:`special-nodes`,label:`Special Nodes`}];function Yr(){let{language:e}=M();return(0,j.jsxs)(P,{anchors:Jr,children:[(0,j.jsx)(`h1`,{style:{fontSize:`2rem`,fontWeight:700,color:`#e6edf3`,letterSpacing:`-0.02em`,marginBottom:8,marginTop:0},children:`Graph Execution`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:40,lineHeight:1.7},children:`A graph is the core execution unit in Flowgentra. It defines which nodes run, in which order, and under what conditions.`}),(0,j.jsxs)(Xr,{id:`anatomy`,title:`Anatomy of a Graph`,children:[(0,j.jsx)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20,fontFamily:`monospace`,fontSize:`0.9rem`,color:`#8b949e`,textAlign:`center`},children:`          entry point
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
             __end__`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,lineHeight:1.7,margin:0},children:`Every graph has:`}),(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,lineHeight:1.7,paddingLeft:20,marginTop:12},children:[(0,j.jsxs)(`li`,{children:[`An `,(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`entry point`}),` — the first node to run`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Nodes`}),` — functions that transform state`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Edges`}),` — connections between nodes (fixed or conditional)`]}),(0,j.jsxs)(`li`,{children:[`A `,(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`terminal`}),` — `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`END`}),` / `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`"__end__"`}),` signals the graph to stop`]})]})]}),(0,j.jsx)(Xr,{id:`building`,title:`Building a Graph`,children:(0,j.jsx)(N,{rust:`use flowgentra_ai::{StateGraph, DynState};

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
result = graph.invoke(State({"input": "hello"}))`})}),(0,j.jsxs)(Xr,{id:`conditional-routing`,title:`Conditional Routing`,children:[(0,j.jsxs)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:[`When you need different nodes to run based on state, use a `,(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`conditional edge`}),`. Your router function receives the current state and returns the name of the next node.`]}),(0,j.jsx)(N,{rust:`.conditional_edge("evaluate", |state: &DynState| {
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
# Each possible return value must be a node name`}),(0,j.jsxs)(`div`,{style:{background:`#0d1117`,border:`1px solid #d29922`,borderRadius:8,padding:`16px`,marginTop:16,marginBottom:16},children:[(0,j.jsx)(`div`,{style:{color:`#d29922`,fontWeight:600,marginBottom:8},children:`⚠️ Tip`}),(0,j.jsxs)(`p`,{style:{color:`#8b949e`,margin:0,lineHeight:1.6},children:[`Your router's return values must be node names (or `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`"__end__"`}),`). If a router returns an unknown name, the engine will panic at compile/build time — not silently at runtime.`]})]})]}),(0,j.jsx)(Xr,{id:`invoking`,title:`Invoking a Graph`,children:(0,j.jsx)(N,{rust:`// Basic
let result = graph.invoke(state).await?;

// With thread ID
let result = graph.invoke_with_thread("thread-1", state).await?;`,python:`# Basic — no persistence
result = graph.invoke(State({"input": "data"}))

# With thread ID — enables checkpointing
result = graph.invoke_with_thread("thread-1", State({"input": "data"}))`})}),(0,j.jsxs)(Xr,{id:`special-nodes`,title:`Special Nodes`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`The builder has convenience methods for common patterns. Use these instead of implementing the logic manually.`}),(0,j.jsx)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Retry Node`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Automatically retries with exponential backoff when the node function fails.`}),(0,j.jsx)(N,{rust:`.add_retry_node("fetch_api", fetch_fn, RetryConfig {
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
# on_timeout="skip" returns the original state unchanged`})]})]})}function Xr({id:e,title:t,children:n}){return(0,j.jsxs)(`section`,{id:e,style:{marginBottom:48},children:[(0,j.jsx)(`h2`,{style:{fontSize:`1.5rem`,fontWeight:600,color:`#e6edf3`,marginBottom:16,marginTop:0},children:t}),n]})}var Zr=[{id:`node-contract`,label:`The Node Contract`},{id:`node-types`,label:`Node Types`}];function Qr(){let{language:e}=M();return(0,j.jsxs)(P,{anchors:Zr,children:[(0,j.jsx)(`h1`,{style:{fontSize:`2rem`,fontWeight:700,color:`#e6edf3`,letterSpacing:`-0.02em`,marginBottom:8,marginTop:0},children:`Nodes`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:40,lineHeight:1.7},children:`A node is the fundamental unit of work in a Flowgentra graph. It's just a function.`}),(0,j.jsxs)($r,{id:`node-contract`,title:`The Node Contract`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Every node must:`}),(0,j.jsxs)(`ol`,{style:{color:`#8b949e`,lineHeight:1.7,paddingLeft:20,marginBottom:16},children:[(0,j.jsxs)(`li`,{children:[`Accept a single `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`State`}),` argument (Python) or `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`DynState`}),` / your typed state (Rust)`]}),(0,j.jsxs)(`li`,{children:[`Return a `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`State`}),` (usually the same object, modified)`]})]}),(0,j.jsx)(N,{rust:`async fn my_node(mut state: DynState) -> Result<DynState> {
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

    return state   # always return state`})]}),(0,j.jsxs)($r,{id:`node-types`,title:`Node Types`,children:[(0,j.jsx)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Regular Nodes`}),(0,j.jsxs)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:[`The default. A plain function added with `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`add_node`}),`.`]}),(0,j.jsx)(N,{python:`builder.add_node("process", process_fn)`}),(0,j.jsx)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Retry Nodes`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Automatically retries with exponential backoff when the function raises an exception.`}),(0,j.jsx)(N,{python:`builder.add_retry_node("fetch", fetch_fn, max_retries=3, backoff_ms=1000)`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Use this for: API calls, database queries, network requests — anything that can fail transiently.`}),(0,j.jsx)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Timeout Nodes`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Terminates the function if it exceeds a time limit.`}),(0,j.jsx)(N,{python:`builder.add_timeout_node("slow_op", slow_fn, timeout_ms=5000, on_timeout="skip")`}),(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,lineHeight:1.7,paddingLeft:20,marginBottom:16},children:[(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`on_timeout="error"`}),` — raises an exception (default)`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`on_timeout="skip"`}),` — returns the original state unchanged`]})]}),(0,j.jsx)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`LLM Nodes`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`A pre-wired node that reads a prompt from state, calls an LLM, and writes the response.`}),(0,j.jsx)(N,{python:`builder.add_llm_node(
    "generate",
    client,
    prompt_key="user_query",
    output_key="llm_response",
    system_prompt="You are a helpful assistant.",
)`}),(0,j.jsx)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Planner Nodes`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Uses an LLM to decide the next node dynamically at runtime.`}),(0,j.jsx)(N,{python:`builder.add_planner_node("planner", client)`}),(0,j.jsxs)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:[`The planner reads `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`state["_reachable_nodes"]`}),` (a list of node names) and writes `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`state["_next_node"]`}),` (the chosen next node).`]}),(0,j.jsx)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Evaluation Nodes`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Wraps a node in an iterative refinement loop — runs the node, evaluates the output, and re-runs until quality meets a threshold.`})]})]})}function $r({id:e,title:t,children:n}){return(0,j.jsxs)(`section`,{id:e,style:{marginBottom:48},children:[(0,j.jsx)(`h2`,{style:{fontSize:`1.5rem`,fontWeight:600,color:`#e6edf3`,marginBottom:16,marginTop:0},children:t}),n]})}var ei=[{id:`what-is-state`,label:`What is State?`},{id:`typed-state`,label:`Typed State`},{id:`reducers`,label:`Reducers (Parallel Merges)`},{id:`state-types`,label:`State Types`},{id:`patterns`,label:`Design Patterns`},{id:`serialization`,label:`Serialization`}];function ti(){let{language:e}=M(),t=e===`rust`;return(0,j.jsxs)(P,{anchors:ei,children:[(0,j.jsx)(`h1`,{style:ai,children:`State`}),(0,j.jsx)(`p`,{style:oi,children:`State is the single source of truth that flows through your entire graph. Every node reads from state and writes to state. Getting state design right is the most important decision in a Flowgentra agent.`}),(0,j.jsxs)(ni,{id:`what-is-state`,title:`What is State?`,children:[(0,j.jsx)(`p`,{style:si,children:`Think of state as a shared whiteboard. When the graph starts, it's initialized with your input data. Each node reads from the board, does its work, and writes its output back. When the graph finishes, you read the final answers from the board.`}),(0,j.jsxs)(`p`,{style:si,children:[`Unlike function arguments, state `,(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`accumulates`}),` across nodes. A node can read a key written by any previous node in the execution path.`]}),(0,j.jsx)(`div`,{style:{background:`#161b22`,border:`1px solid #21262d`,borderRadius:8,padding:`16px 20px`,marginTop:4},children:(0,j.jsx)(`pre`,{style:{margin:0,color:`#8b949e`,fontSize:`0.85rem`,lineHeight:2,fontFamily:`JetBrains Mono, monospace`},children:`initial state: { query: "..." }
        ↓
  [classify node]  → writes: { category: "technical" }
        ↓
  [answer node]    → writes: { response: "..." }
        ↓
  [format node]    → writes: { formatted: "..." }
        ↓
final state: { query: "...", category: "technical", response: "...", formatted: "..." }`})})]}),(0,j.jsxs)(ni,{id:`typed-state`,title:`Typed State`,children:[(0,j.jsxs)(`p`,{style:si,children:[`The recommended approach is to use `,(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`typed state`}),`. In Rust, this means a struct with `,(0,j.jsx)(`code`,{style:ci,children:`#[derive(State)]`}),`. In Python, this means a `,(0,j.jsx)(`code`,{style:ci,children:`TypedDict`}),`. Typed state gives you IDE autocomplete and catches typos at compile time (Rust) or during development (Python).`]}),(0,j.jsx)(N,{rust:`use flowgentra_ai::prelude::*;
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
graph = builder.compile()`}),(0,j.jsxs)(ii,{type:`tip`,title:`Use .get() for optional fields (Python)`,children:[`When a key might not be set yet (e.g., before a node has run), use`,(0,j.jsx)(`code`,{style:ci,children:`state.get("key")`}),` instead of `,(0,j.jsx)(`code`,{style:ci,children:`state["key"]`}),` to avoid KeyError.`]})]}),(0,j.jsxs)(ni,{id:`reducers`,title:`Reducers — Parallel Branch Merges`,children:[(0,j.jsxs)(`p`,{style:si,children:[`When two branches of a parallel graph both write to the same state key, Flowgentra needs to know `,(0,j.jsx)(`em`,{children:`how`}),` to merge them. This is what `,(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`reducers`}),` do.`]}),(0,j.jsx)(`p`,{style:si,children:`Without a reducer, the last write wins (default overwrite behavior). With a reducer, you can accumulate, sum, merge maps, and more.`}),(0,j.jsx)(N,{rust:`use flowgentra_ai::prelude::*;

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
    return result`}),(0,j.jsxs)(`div`,{style:{background:`#161b22`,border:`1px solid #21262d`,borderRadius:8,padding:`18px 20px`,marginTop:16},children:[(0,j.jsx)(`div`,{style:{fontWeight:600,color:`#e6edf3`,marginBottom:12,fontSize:`0.9rem`},children:`Available Reducers (Rust)`}),(0,j.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(200px, 1fr))`,gap:10},children:[[`Append`,`Appends new items to a Vec`],[`Sum`,`Adds numeric values together`],[`MergeMap`,`Merges HashMap (new keys win)`],[`Min`,`Keeps the minimum value`],[`Max`,`Keeps the maximum value`],[`AppendUnique`,`Appends, deduplicates`]].map(([e,t])=>(0,j.jsxs)(`div`,{style:{background:`#0d1117`,borderRadius:6,padding:`10px 12px`},children:[(0,j.jsxs)(`code`,{style:{...ci,display:`block`,marginBottom:4,fontWeight:600,color:`var(--accent)`},children:[`#[reducer(`,e,`)]`]}),(0,j.jsx)(`span`,{style:{color:`#8b949e`,fontSize:`0.8rem`},children:t})]},e))})]})]}),(0,j.jsxs)(ni,{id:`state-types`,title:`State Types`,children:[(0,j.jsx)(`p`,{style:si,children:`Flowgentra provides several state implementations for different use cases:`}),(0,j.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:t?[{name:`DynState`,when:`Quick prototypes, JSON-compatible data`,body:`Dynamic key-value store. Values are JSON-compatible (String, i64, f64, bool, arrays, objects). No compile-time schema.`,code:`let mut state = DynState::new();
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
state.get_bool("flag")   # bool | None`}].map(e=>(0,j.jsxs)(`div`,{style:{background:`#161b22`,border:`1px solid #21262d`,borderRadius:8,padding:`18px 20px`},children:[(0,j.jsxs)(`div`,{style:{display:`flex`,alignItems:`baseline`,gap:12,marginBottom:6},children:[(0,j.jsx)(`code`,{style:{fontFamily:`JetBrains Mono, monospace`,fontWeight:700,color:`var(--accent)`},children:e.name}),(0,j.jsxs)(`span`,{style:{background:`#21262d`,borderRadius:10,padding:`2px 8px`,fontSize:`0.75rem`,color:`#8b949e`},children:[`Use when: `,e.when]})]}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,fontSize:`0.875rem`,lineHeight:1.65,marginBottom:12},children:e.body}),(0,j.jsx)(`pre`,{style:{background:`#0d1117`,border:`1px solid #30363d`,borderRadius:6,padding:`10px 12px`,fontSize:`0.8rem`,lineHeight:1.6,color:`#e6edf3`,margin:0,overflowX:`auto`,fontFamily:`JetBrains Mono, monospace`},children:e.code})]},e.name))})]}),(0,j.jsx)(ni,{id:`patterns`,title:`State Design Patterns`,children:(0,j.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,j.jsx)(ri,{title:`Flat structure`,badge:`Best practice`,body:`Keep state flat — avoid deeply nested objects. Flat state is easier to read in router functions and easier to debug when things go wrong.`,children:(0,j.jsx)(N,{rust:`// ✓ Good — flat and readable
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
    data: dict  # what's in here?`})}),(0,j.jsx)(ri,{title:`Input / output / control separation`,badge:`Tip`,body:`Group fields by role: inputs (set before invoke), outputs (written by nodes), control flags (used for routing). Comment each group.`,children:(0,j.jsx)(N,{rust:`#[derive(State, Default)]
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
    retry_count: int`})}),(0,j.jsx)(ri,{title:`Store large objects by reference`,badge:`Performance`,body:`Don't put large blobs directly in state (big PDFs, images, embeddings). Store them in a database/file system and keep only an ID in state.`,children:(0,j.jsx)(N,{rust:`// ✗ Avoid — puts megabytes of bytes in state
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
    embeddings_id: str   # Chroma collection ID`})})]})}),(0,j.jsxs)(ni,{id:`serialization`,title:`Serialization`,children:[(0,j.jsx)(`p`,{style:si,children:`State serializes to and from JSON — useful for logging, checkpointing, and debugging.`}),(0,j.jsx)(N,{rust:`// To JSON
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
value = state.get_string("key")  # str | None`})]})]})}function ni({id:e,title:t,children:n}){return(0,j.jsxs)(`section`,{id:e,style:{marginBottom:52},children:[(0,j.jsx)(`h2`,{style:{fontSize:`1.375rem`,fontWeight:600,color:`#e6edf3`,marginBottom:16,marginTop:0},children:t}),n]})}function ri({title:e,badge:t,body:n,children:r}){let i={"Best practice":{bg:`rgba(63,185,80,0.1)`,border:`rgba(63,185,80,0.4)`,text:`#3fb950`},Tip:{bg:`rgba(53,114,165,0.1)`,border:`rgba(53,114,165,0.4)`,text:`#58a6ff`},Performance:{bg:`rgba(206,66,43,0.1)`,border:`rgba(206,66,43,0.4)`,text:`#CE422B`}},a=i[t]||i.Tip;return(0,j.jsxs)(`div`,{style:{background:`#161b22`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`},children:[(0,j.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:10,marginBottom:10},children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`,fontSize:`1rem`},children:e}),(0,j.jsx)(`span`,{style:{background:a.bg,border:`1px solid ${a.border}`,color:a.text,fontSize:`0.72rem`,padding:`2px 8px`,borderRadius:10,fontWeight:600},children:t})]}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,lineHeight:1.65,marginBottom:r?14:0,fontSize:`0.9rem`},children:n}),r]})}function ii({type:e,title:t,children:n}){let r={info:{bg:`rgba(53,114,165,0.1)`,border:`rgba(53,114,165,0.4)`,text:`#58a6ff`},tip:{bg:`rgba(63,185,80,0.1)`,border:`rgba(63,185,80,0.4)`,text:`#3fb950`}},i=r[e]||r.info;return(0,j.jsxs)(`div`,{style:{background:i.bg,border:`1px solid ${i.border}`,borderRadius:8,padding:`14px 18px`,marginTop:16},children:[t&&(0,j.jsx)(`div`,{style:{fontWeight:600,color:i.text,marginBottom:6,fontSize:`0.9rem`},children:t}),(0,j.jsx)(`div`,{style:{color:`#8b949e`,fontSize:`0.875rem`,lineHeight:1.65},children:n})]})}var ai={fontSize:`2rem`,fontWeight:700,color:`#e6edf3`,letterSpacing:`-0.02em`,marginBottom:8,marginTop:0},oi={color:`#8b949e`,marginBottom:40,lineHeight:1.7,fontSize:`1.0625rem`},si={color:`#8b949e`,lineHeight:1.75,marginBottom:16},ci={background:`#21262d`,border:`1px solid #30363d`,borderRadius:4,padding:`1px 6px`,fontSize:`0.85em`,fontFamily:`JetBrains Mono, monospace`},li=()=>(0,j.jsx)(P,{title:`Runtime & Execution Model`,description:`Understand how Flowgentra executes graphs, manages state, and handles async operations.`,content:`# Runtime & Execution Model

## Overview

Flowgentra uses an async-first execution model powered by Tokio (Rust) with Python bindings via PyO3. Understanding the runtime is essential for building performant agents.

## Execution Model

### Graph Execution

 **Synchronous Compilation, Asynchronous Execution**

- Graph structure (nodes, edges) is compiled into a DAG at startup
- Graph execution is fully async using Tokio in Rust
- Python uses asyncio compatibility layer via PyO3

### Node Execution

Nodes execute in topological order:
1. Entry point node runs first
2. Output determines next node(s) via edges/conditional routing
3. Each node is awaited before proceeding
- Parallel branches spawn separate tasks
- State merges across branches using reducer functions

## State Management During Execution

### Reducer Pattern

When multiple branches complete, their state updates merge via reducers:

\`\`\`rust
#[derive(State, Clone)]
struct AgentState {
    #[reducer(Append)]
    messages: Vec<String>,
    #[reducer(Sum)]
    token_count: u64,
    current_step: String,  // last-write-wins (default)
}
\`\`\`

### Concurrent Safety

- State is wrapped in Arc<RwLock<T>> for thread-safe access
- Reducers ensure deterministic merge semantics
- No data races possible

## Async Runtime

### Tokio Integration (Rust)

- Uses Tokio's multi-threaded runtime by default
- Supports custom runtime configuration
- Graceful shutdown with cancellation tokens

### Python Asyncio

- PyO3 bindings integrate with Python's asyncio
- Use \`asyncio.run()\` or \`await\` in async Python code
- Compatible with Jupyter notebooks

## Performance Considerations

### Branching & Parallelization

Multiple nodes can execute in parallel when:
- Edges diverge from a single parent
- State merging is configured via reducers
- No circular dependencies

### Checkpoint Costs

Checkpointing has I/O overhead:
- File checkpointing: ~10-50ms per save
- In-memory: <1ms
- Use FileCheckpointer only for long-lived conversations

### Token Counting

Token-counting middleware adds negligible overhead on modern hardware:
- Happens in parallel during LLM requests
- HuggingFace tokenizer cache speeds up repeated calls

## Timeouts & Deadlines

### TimeoutNode

Enforce maximum duration on wrapped nodes:

\`\`\`rust
let timeout_node = TimeoutNode::new("api_call", 5000)  // 5 seconds
    .with_inner_node(Box::new(api_handler))
    .on_timeout(TimeoutAction::Error);

graph.add_node("timed", Box::new(timeout_node));
\`\`\`

### Deadline Propagation

Timeouts propagate through nested node calls.

## Error Handling During Execution

### Error Strategies

1. **Fail Fast** (default): Any node error halts execution
2. **Retry** (with RetryNode): Exponential backoff, configurable max retries
3. **Skip** (with TimeoutNode): Timeout -> skip to next node
4. **Fallback**: Conditional routing to alternate path

### Error Recovery

\`\`\`rust
let retry_node = RetryNode::new("flaky_api")
    .with_max_retries(3)
    .with_backoff(Duration::from_secs(1))
    .with_inner_node(Box::new(api_handler));
\`\`\`

## Memory & Resource Cleanup

### Automatic Cleanup

- Tasks are cancelled on graph completion or error
- File handles close automatically
- Memory is freed after execution

### Long-Running Agents

For agents that run indefinitely (like web servers):
- Use \`run_with_thread()\` for persistence
- Checkpointer manages memory automatically
- Monitor via observability tools

## Debugging Runtime Behavior

### Observability

Enable execution tracing to see:
- Node start/end times
- State transitions
- Error propagation
- Reducer merges

\`\`\`python
from flowgentra_ai.observability import ExecutionTracer

tracer = ExecutionTracer()
agent = agent.with_observability(tracer)
result = await agent.run(state)
tracer.export_to_file("execution.json")
\`\`\`

### Logging

Both Rust and Python emit structured logs:
\`\`\`
[INFO] Graph execution started
[DEBUG] Node 'greet' starting
[DEBUG] Node 'greet' completed with state: {...}
[DEBUG] Reducer Append merging messages
[INFO] Graph execution completed
\`\`\`

## Best Practices

1. **Minimize node blocking** - Use async I/O, not std::fs or requests
2. **Balance parallelism** - More branches = more memory usage
3. **Set reasonable timeouts** - Prevent hanging nodes
4. **Monitor token usage** - Token counts affect cost
5. **Use checkpointing for long-running** - Resume interrupted workflows gracefully
`}),ui=[{id:`five-ways`,label:`Ways to Create an Agent`},{id:`zero-shot-react`,label:`ZeroShotReAct`},{id:`few-shot-react`,label:`FewShotReAct`},{id:`conversational`,label:`Conversational`},{id:`tool-calling`,label:`ToolCalling`},{id:`structured-chat`,label:`StructuredChatZeroShotReAct`},{id:`self-ask-with-search`,label:`SelfAskWithSearch`},{id:`react-docstore`,label:`ReactDocstore`},{id:`config-driven`,label:`Config-Driven Agents`},{id:`memory-aware`,label:`MemoryAwareAgent`}];function di(){let{language:e}=M();return(0,j.jsxs)(P,{anchors:ui,children:[(0,j.jsx)(`h1`,{style:{fontSize:`2rem`,fontWeight:700,color:`#e6edf3`,letterSpacing:`-0.02em`,marginBottom:8,marginTop:0},children:`Building Agents`}),(0,j.jsxs)(`p`,{style:{color:`#8b949e`,marginBottom:40,lineHeight:1.7},children:[`An `,(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`agent`}),` is a graph that loops: it reasons, picks an action (usually a tool call or an LLM call), observes the result, and repeats — until it has a final answer.`]}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:40,lineHeight:1.7},children:`Flowgentra gives you prebuilt agents for the most common patterns, so you don't have to build the loop from scratch.`}),(0,j.jsxs)(fi,{id:`five-ways`,title:`Ways to Create an Agent`,children:[(0,j.jsx)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20},children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,color:`#8b949e`,fontSize:`0.9rem`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px 10px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Method`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px 10px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Best for`})]})}),(0,j.jsx)(`tbody`,{children:[[`ZeroShotReAct`,`General-purpose tool-using agent`],[`FewShotReAct`,`Specialized domain with example demonstrations`],[`Conversational`,`Multi-turn chatbot with memory`],[`ToolCalling`,`Native function-calling (OpenAI / Anthropic / Mistral)`],[`StructuredChatZeroShotReAct`,`JSON-blob structured actions`],[`SelfAskWithSearch`,`Multi-hop factual question decomposition`],[`ReactDocstore`,`Search + Lookup loop over a document store`],[`Agent.from_config_path()`,`Production YAML-configured workflows`],[`MemoryAwareAgent`,`Multi-user chatbots with per-user memory isolation`]].map(([e,t],n,r)=>(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px 10px`,borderBottom:n<r.length-1?`1px solid #21262d`:`none`,color:`#79c0ff`,fontFamily:`monospace`,fontSize:`0.85rem`},children:e}),(0,j.jsx)(`td`,{style:{padding:`8px 10px`,borderBottom:n<r.length-1?`1px solid #21262d`:`none`},children:t})]},e))})]})}),(0,j.jsxs)(`p`,{style:{color:`#8b949e`,lineHeight:1.7,fontSize:`0.92rem`},children:[`In Python, use the typed constructors directly (`,(0,j.jsx)(`code`,{style:{color:`#79c0ff`},children:`ZeroShotReAct`}),`, `,(0,j.jsx)(`code`,{style:{color:`#79c0ff`},children:`FewShotReAct`}),`, etc.) and pass an `,(0,j.jsx)(`code`,{style:{color:`#79c0ff`},children:`LLM`}),` client. In Rust, use the typed constructors or `,(0,j.jsx)(`code`,{style:{color:`#79c0ff`},children:`AgentBuilder`}),`. See `,(0,j.jsx)(`a`,{href:`/docs/predefined-agents`,style:{color:`#58a6ff`},children:`Predefined Agent Types`}),` for detailed implementation diagrams, state-key reference, and comparison table.`]})]}),(0,j.jsxs)(fi,{id:`zero-shot-react`,title:`ZeroShotReAct`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`The classic ReAct (Reason + Act) loop. The agent reasons step by step, decides which tool to call, observes the result, and loops until it has an answer — all without needing example demonstrations.`}),(0,j.jsx)(N,{rust:`use flowgentra_ai::core::agents::{AgentBuilder, AgentType, ToolSpec};

let search = ToolSpec::new("web_search", "Search the web")
    .with_parameter("query", "string")
    .required("query");

let calc = ToolSpec::new("calculator", "Perform arithmetic")
    .with_parameter("expression", "string")
    .required("expression");

let agent = AgentBuilder::new(AgentType::ZeroShotReAct)
    .with_name("research-assistant")
    .with_llm_config("gpt-4")
    .with_tool(search)
    .with_tool(calc)
    .with_system_prompt("You are a helpful research assistant.")
    .with_temperature(0.2)
    .with_retries(3)
    .with_tool_executor(|name, args| match name {
        "web_search"  => format!("Results for: {}", args),
        "calculator"  => format!("= {}", eval_expr(args)),
        _             => format!("Unknown tool: {}", name),
    })
    .build_graph()?;

let answer = agent.execute_input("What is the population of France divided by 1000?").await?;
println!("{answer}");`,python:`from flowgentra_ai.agent import ZeroShotReAct, ToolSpec
from flowgentra_ai.llm import LLM

# Define the tools available to the agent
search = ToolSpec("web_search", "Search the web for up-to-date information")
search.add_parameter("query", "string")
search.set_required("query")

calc = ToolSpec("calculator", "Perform arithmetic calculations")
calc.add_parameter("expression", "string")
calc.set_required("expression")

# Build the agent
agent = ZeroShotReAct(
    name="research-assistant",
    llm=LLM(provider="openai", model="gpt-4"),
    tools=[search, calc],
    system_prompt="You are a helpful research assistant. Think step by step.",
    retries=3,
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
    └── No ───► [Final answer]`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,lineHeight:1.7,margin:0},children:`The agent loops until the LLM decides it has enough information and produces a final answer (no tool calls).`})]}),(0,j.jsxs)(fi,{id:`few-shot-react`,title:`FewShotReAct`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Like ZeroShotReAct, but includes example interactions in the prompt to guide the agent's behavior in specialized domains.`}),(0,j.jsx)(N,{python:`from flowgentra_ai.agent import FewShotReAct, ToolSpec
from flowgentra_ai.llm import LLM

# Inject examples directly into the system prompt
agent = FewShotReAct(
    name="code-reviewer",
    llm=LLM(provider="openai", model="gpt-4"),
    tools=[git_diff_tool],
    system_prompt="""You are an expert code reviewer.

EXAMPLES:
Input: Review this Python function
Thought: I need to examine the code diff.
Action: <action>git_diff(main..feature)</action>
Observation: + def process(data): return data
Thought: I can review this now.
Output: <answer>Looks good. Consider adding type hints for better readability.</answer>
---
Input: Check for security issues in this code
Thought: I'll look at the full diff for vulnerabilities.
Action: <action>git_diff(main..feature)</action>
Observation: + query = "SELECT * FROM users WHERE id=" + user_id
Thought: SQL injection risk found.
Output: <answer>Found potential SQL injection. Use parameterized queries.</answer>
---""",
)`})]}),(0,j.jsxs)(fi,{id:`conversational`,title:`Conversational`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`A conversational agent that maintains context across multiple turns. Perfect for chatbots and interactive assistants.`}),(0,j.jsx)(N,{python:`from flowgentra_ai.agent import Conversational
from flowgentra_ai.llm import LLM

agent = Conversational(
    name="chatbot",
    llm=LLM(provider="openai", model="gpt-4"),
    system_prompt="You are a helpful assistant.",
    memory_steps=50,   # keep last 50 turns in context
)

# Multi-turn conversation
response1 = agent.execute_input("Hi, I'm Alice!")
response2 = agent.execute_input("What's my name?")  # Remembers "Alice"
response3 = agent.execute_input("Tell me a joke about programming")`})]}),(0,j.jsxs)(fi,{id:`tool-calling`,title:`ToolCalling`,children:[(0,j.jsxs)(`p`,{style:{color:`#8b949e`,marginBottom:16,lineHeight:1.7},children:[`Uses the provider's `,(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`native function/tool-calling API`}),` — tools are passed as structured JSON schemas to `,(0,j.jsx)(`code`,{style:{color:`#79c0ff`},children:`chat_with_tools()`}),`; the LLM returns structured `,(0,j.jsx)(`code`,{style:{color:`#79c0ff`},children:`tool_calls`}),` in the response instead of text tags. Works with OpenAI, Anthropic, Mistral, Groq, and any OpenAI-compatible endpoint.`]}),(0,j.jsx)(N,{rust:`use flowgentra_ai::core::agents::{AgentBuilder, AgentType, ToolSpec};

let weather = ToolSpec::new("get_weather", "Get current weather for a location")
    .with_parameter("location", "string")
    .with_parameter("unit", "string")
    .required("location");

let agent = AgentBuilder::new(AgentType::ToolCalling)
    .with_name("weather-agent")
    .with_llm_config("gpt-4o")        // or claude-3-5-sonnet, mistral-large
    .with_tool(weather)
    .with_tool_executor(|name, args| match name {
        "get_weather" => format!("72°F, sunny — args: {}", args),
        _             => format!("Unknown tool: {}", name),
    })
    .build_graph()?;

let answer = agent.execute_input("What's the weather in Paris?").await?;`,python:`from flowgentra_ai.agent import ToolCalling, ToolSpec
from flowgentra_ai.llm import LLM

weather = ToolSpec("get_weather", "Get current weather for a location")
weather.add_parameter("location", "string")
weather.add_parameter("unit", "string")
weather.set_required("location")

agent = ToolCalling(
    name="weather-agent",
    llm=LLM(provider="openai", model="gpt-4o"),
    tools=[weather],
)

answer = agent.execute_input("What's the weather in Paris?")`})]}),(0,j.jsxs)(fi,{id:`structured-chat`,title:`StructuredChatZeroShotReAct`,children:[(0,j.jsxs)(`p`,{style:{color:`#8b949e`,marginBottom:16,lineHeight:1.7},children:[`ReAct agent that communicates via `,(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`JSON blobs`}),`. Each LLM turn outputs a fenced code block with `,(0,j.jsx)(`code`,{style:{color:`#79c0ff`},children:`{"action":"tool_name","action_input":"..."}`}),`. The final answer uses `,(0,j.jsx)(`code`,{style:{color:`#79c0ff`},children:`"action":"Final Answer"`}),`.`]}),(0,j.jsx)(N,{python:`from flowgentra_ai.agent import StructuredChat, ToolSpec
from flowgentra_ai.llm import LLM

calc = ToolSpec("calculator", "Evaluate a math expression")
calc.add_parameter("expression", "string")
calc.set_required("expression")

agent = StructuredChat(
    name="structured-agent",
    llm=LLM(provider="openai", model="gpt-4o"),
    tools=[calc],
)

result = agent.execute_input("What is 15% of 2847?")
# LLM outputs: {"action":"calculator","action_input":"0.15 * 2847"}
# Then:        {"action":"Final Answer","action_input":"427.05"}`})]}),(0,j.jsxs)(fi,{id:`self-ask-with-search`,title:`SelfAskWithSearch`,children:[(0,j.jsxs)(`p`,{style:{color:`#8b949e`,marginBottom:16,lineHeight:1.7},children:[`Decomposes complex questions into a chain of simpler sub-questions answered by a single `,(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`search`}),` tool. Iterates `,(0,j.jsx)(`em`,{children:`Follow up → Intermediate answer`}),` until the LLM emits `,(0,j.jsx)(`code`,{style:{color:`#79c0ff`},children:`So the final answer is: ...`}),`. The system prompt contains 4 built-in few-shot examples.`]}),(0,j.jsx)(N,{python:`from flowgentra_ai.agent import SelfAskWithSearch, ToolSpec
from flowgentra_ai.llm import LLM

search = ToolSpec("search", "Search for factual information")
search.add_parameter("query", "string")
search.set_required("query")

agent = SelfAskWithSearch(
    name="fact-checker",
    llm=LLM(provider="openai", model="gpt-4o"),
    tools=[search],
)

answer = agent.execute_input(
    "Who was the maternal grandfather of George Washington?"
)
print(answer)  # "Joseph Ball"

# Agent chain:
#   Follow up: Who was the mother of George Washington?
#   Intermediate answer: Mary Ball Washington
#   Follow up: Who was the father of Mary Ball Washington?
#   Intermediate answer: Joseph Ball
#   So the final answer is: Joseph Ball`})]}),(0,j.jsxs)(fi,{id:`react-docstore`,title:`ReactDocstore`,children:[(0,j.jsxs)(`p`,{style:{color:`#8b949e`,marginBottom:16,lineHeight:1.7},children:[`ReAct loop for document stores. The LLM navigates via three verbs: `,(0,j.jsx)(`code`,{style:{color:`#79c0ff`},children:`Search[query]`}),`, `,(0,j.jsx)(`code`,{style:{color:`#79c0ff`},children:`Lookup[term]`}),`, and `,(0,j.jsx)(`code`,{style:{color:`#79c0ff`},children:`Finish[answer]`}),`. Requires tools named `,(0,j.jsx)(`code`,{style:{color:`#79c0ff`},children:`search`}),` and `,(0,j.jsx)(`code`,{style:{color:`#79c0ff`},children:`lookup`}),` (or a single executor that dispatches by name).`]}),(0,j.jsx)(N,{python:`from flowgentra_ai.agent import ReactDocstore, ToolSpec
from flowgentra_ai.llm import LLM

docstore = WikipediaDocstore()

search_tool = ToolSpec("search", "Find a document in the store")
search_tool.add_parameter("query", "string")
search_tool.set_required("query")

lookup_tool = ToolSpec("lookup", "Look up a term in the last found document")
lookup_tool.add_parameter("term", "string")
lookup_tool.set_required("term")

agent = ReactDocstore(
    name="wiki-agent",
    llm=LLM(provider="openai", model="gpt-4o"),
    tools=[search_tool, lookup_tool],
)

answer = agent.execute_input(
    "What is the elevation range of the High Plains?"
)
# Action: Search[High Plains (United States)]
# Action: Lookup[elevation]
# Action: Finish[1,800 to 7,000 ft]`})]}),(0,j.jsxs)(fi,{id:`config-driven`,title:`Config-Driven Agents`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Define your agent in YAML for production deployments where non-engineers need to adjust the workflow.`}),(0,j.jsx)(N,{yaml:`# agent.yaml
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
result = agent.run({"input": "What is 2 + 2?"})`})]}),(0,j.jsxs)(fi,{id:`memory-aware`,title:`MemoryAwareAgent`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`A pre-built agent for multi-user chatbots with per-user conversation memory.`}),(0,j.jsx)(N,{python:`from flowgentra_ai.agent import MemoryAwareAgent
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
alice_followup = agent.chat("alice-123", "What's my name?")  # Remembers Alice`})]})]})}function fi({id:e,title:t,children:n}){return(0,j.jsxs)(`section`,{id:e,style:{marginBottom:48},children:[(0,j.jsx)(`h2`,{style:{fontSize:`1.5rem`,fontWeight:600,color:`#e6edf3`,marginBottom:16,marginTop:0},children:t}),n]})}var pi=[{id:`creating-client`,label:`Creating a Client`},{id:`sending-messages`,label:`Sending Messages`},{id:`tool-calling`,label:`Tool Calling`},{id:`streaming`,label:`Streaming`}];function mi(){let{language:e}=M();return(0,j.jsxs)(P,{anchors:pi,children:[(0,j.jsx)(`h1`,{style:{fontSize:`2rem`,fontWeight:700,color:`#e6edf3`,letterSpacing:`-0.02em`,marginBottom:8,marginTop:0},children:`LLM Integration`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:40,lineHeight:1.7},children:`Flowgentra provides a unified LLM that works with 7 providers. You configure it once and use the same API regardless of whether you're using OpenAI, Anthropic, or a local Ollama model.`}),(0,j.jsxs)(hi,{id:`creating-client`,title:`Creating a Client`,children:[(0,j.jsx)(N,{rust:`use flowgentra_ai::llm::{LLMConfig, LLM};

// OpenAI
let client = LLM::from_config(LLMConfig::openai("gpt-4", "sk-..."));

// Anthropic
let client = LLM::from_config(LLMConfig::anthropic("claude-3-opus-20240229", "sk-ant-..."));

// Ollama (local)
let client = LLM::from_config(LLMConfig::ollama("llama3"));

// Groq (fast inference)
let client = LLM::from_config(LLMConfig::groq("llama3-70b-8192", "gsk_..."));`,python:`from flowgentra_ai.llm import LLM

# OpenAI — key auto-resolved from OPENAI_API_KEY env var or .env
client = LLM(provider="openai", model="gpt-4")

# Anthropic — explicit key
client = LLM(provider="anthropic", model="claude-3-opus-20240229", api_key="sk-ant-...")

# Ollama (local — no API key needed)
client = LLM(provider="ollama", model="llama3")

# Groq (fast inference)
client = LLM(provider="groq", model="llama3-70b-8192", api_key="gsk_...")

# With extra options
client = LLM(provider="openai", model="gpt-4o", temperature=0.2, max_tokens=4096)

# Alternative: LLM.from_config(LLMConfig(...)) still works if you need to reuse a config object
# from flowgentra_ai.llm import LLMConfig
# client = LLM.from_config(LLMConfig("openai", "gpt-4", api_key="sk-..."))`}),(0,j.jsx)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Supported Providers`}),(0,j.jsx)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20},children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,color:`#8b949e`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Provider`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Config Key`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Notes`})]})}),(0,j.jsxs)(`tbody`,{children:[(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`OpenAI`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:(0,j.jsx)(`code`,{children:`"openai"`})}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`GPT-3.5, GPT-4, GPT-4 Turbo`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Anthropic`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:(0,j.jsx)(`code`,{children:`"anthropic"`})}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Claude 3 models`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Ollama`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:(0,j.jsx)(`code`,{children:`"ollama"`})}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Local models, no API key`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Groq`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:(0,j.jsx)(`code`,{children:`"groq"`})}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Fast Llama models`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`},children:`Mistral`}),(0,j.jsx)(`td`,{style:{padding:`8px`,fontFamily:`monospace`,fontSize:`0.9em`},children:(0,j.jsx)(`code`,{children:`"mistral"`})}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`Mistral AI models`})]})]})]})})]}),(0,j.jsx)(hi,{id:`sending-messages`,title:`Sending Messages`,children:(0,j.jsx)(N,{rust:`use flowgentra_ai::llm::Message;

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
print(response.role)      # "assistant"`})}),(0,j.jsxs)(hi,{id:`tool-calling`,title:`Tool Calling`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Flowgentra supports function calling with all major providers. Define your tools and the LLM will call them automatically.`}),(0,j.jsx)(N,{python:`from flowgentra_ai.llm import ToolDefinition

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
            print(f"Result: {result}")  # Result: 4`})]}),(0,j.jsxs)(hi,{id:`streaming`,title:`Streaming`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`For real-time responses, use streaming. The client yields chunks as they're generated.`}),(0,j.jsx)(N,{python:`# Streaming responses
for chunk in client.chat_stream([
    Message.user("Write a short story")
]):
    print(chunk.content, end="", flush=True)
print()  # New line at end`})]})]})}function hi({id:e,title:t,children:n}){return(0,j.jsxs)(`section`,{id:e,style:{marginBottom:48},children:[(0,j.jsx)(`h2`,{style:{fontSize:`1.5rem`,fontWeight:600,color:`#e6edf3`,marginBottom:16,marginTop:0},children:t}),n]})}var gi=[{id:`checkpointers`,label:`Checkpointers`},{id:`conversation-memory`,label:`Conversation Memory`},{id:`memory-aware-agents`,label:`Memory-Aware Agents`},{id:`threading`,label:`Threading & Sessions`},{id:`persistence`,label:`Persistence`}];function _i(){let{language:e}=M();return(0,j.jsxs)(P,{anchors:gi,children:[(0,j.jsx)(`h1`,{style:{fontSize:`2rem`,fontWeight:700,color:`#e6edf3`,letterSpacing:`-0.02em`,marginBottom:8,marginTop:0},children:`Memory Management`}),(0,j.jsxs)(`p`,{style:{color:`#8b949e`,marginBottom:40,lineHeight:1.7},children:[`Memory in Flowgentra refers to both `,(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`conversation history`}),` (what the agent remembers from previous interactions) and `,(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`checkpointing`}),` (persisting graph state to disk for resumability).`]}),(0,j.jsxs)(vi,{id:`checkpointers`,title:`Checkpointers`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Checkpointers save your graph's state to disk after each node execution. This lets you resume interrupted workflows and provides audit trails.`}),(0,j.jsx)(N,{rust:`use flowgentra_ai::checkpointer::FileCheckpointer;

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
result = graph.invoke(initial_state)`}),(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Checkpointer Types`}),(0,j.jsx)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20},children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,color:`#8b949e`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Checkpointer`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Storage`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Use Case`})]})}),(0,j.jsxs)(`tbody`,{children:[(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`FileCheckpointer`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Local JSON files`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Development, single-machine deployments`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`ThreadedCheckpointer`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Per-thread JSON files`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Multi-user applications, chatbots`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,fontFamily:`monospace`,fontSize:`0.9em`},children:`DatabaseCheckpointer`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`PostgreSQL/MySQL`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`Production, distributed systems`})]})]})]})}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Checkpoints are saved as JSON files. You can resume from any checkpoint by loading the saved state and continuing execution.`})]}),(0,j.jsxs)(vi,{id:`conversation-memory`,title:`Conversation Memory`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`For chatbots and multi-turn conversations, you need to maintain context across interactions. Flowgentra provides several memory strategies.`}),(0,j.jsx)(N,{rust:`use flowgentra_ai::memory::ConversationMemory;

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
context = "\\n".join(f"{msg.role}: {msg.content}" for msg in recent)`}),(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`ConversationMemory Methods`}),(0,j.jsx)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20},children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,color:`#8b949e`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Method`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Parameters`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Returns`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Description`})]})}),(0,j.jsxs)(`tbody`,{children:[(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`add_user_message(content)`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`content: str`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`None`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Add a user message to memory`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`add_assistant_message(content)`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`content: str`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`None`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Add an assistant response to memory`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`get_recent(n)`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`n: int`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`List[Message]`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Get last n messages`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`clear()`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`None`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`None`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Clear all messages from memory`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,fontFamily:`monospace`,fontSize:`0.9em`},children:`get_all()`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`None`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`List[Message]`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`Get all messages in memory`})]})]})]})})]}),(0,j.jsxs)(vi,{id:`memory-aware-agents`,title:`Memory-Aware Agents`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Memory-aware agents automatically manage conversation history and can handle multi-turn conversations without manual state management.`}),(0,j.jsx)(N,{rust:`use flowgentra_ai::agent::MemoryAwareAgent;

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
# Agent recalls the previous result (42) and computes 42 * 3 = 126`})]}),(0,j.jsxs)(vi,{id:`threading`,title:`Threading & Sessions`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`For applications with multiple users or conversations, use threads to keep conversations separate.`}),(0,j.jsx)(N,{rust:`use flowgentra_ai::checkpointer::ThreadedCheckpointer;

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
result_b = graph.invoke(initial_state, thread_id="user_b")`})]}),(0,j.jsxs)(vi,{id:`persistence`,title:`Persistence & Recovery`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Checkpoints let you recover from crashes and resume long-running workflows. You can also inspect execution history for debugging.`}),(0,j.jsx)(N,{rust:`// List all checkpoints for a thread
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
final_result = graph.invoke(resumed_state, thread_id="user_a")`})]})]})}function vi({id:e,title:t,children:n}){return(0,j.jsxs)(`section`,{id:e,style:{marginBottom:48},children:[(0,j.jsx)(`h2`,{style:{fontSize:`1.5rem`,fontWeight:600,color:`#e6edf3`,marginBottom:16,marginTop:0},children:t}),n]})}var yi=[{id:`human-in-loop-node`,label:`HumanInTheLoop Node`},{id:`approval-workflows`,label:`Approval Workflows`},{id:`intervention-points`,label:`Intervention Points`},{id:`feedback-loops`,label:`Feedback & Corrections`}];function bi(){let{language:e}=M();return(0,j.jsxs)(P,{anchors:yi,children:[(0,j.jsx)(`h1`,{style:{fontSize:`2rem`,fontWeight:700,color:`#e6edf3`,letterSpacing:`-0.02em`,marginBottom:8,marginTop:0},children:`Human-in-the-Loop Workflows`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:40,lineHeight:1.7},children:`Human-in-the-loop (HITL) workflows let humans intervene in automated processes. Use this for quality control, safety checks, or when automation can't handle edge cases.`}),(0,j.jsxs)(xi,{id:`human-in-loop-node`,title:`HumanInTheLoop Node`,children:[(0,j.jsxs)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:[`The `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`HumanInTheLoop`}),` node pauses execution and waits for human approval before continuing.`]}),(0,j.jsx)(N,{rust:`use flowgentra_ai::nodes::HumanInTheLoop;

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
graph = builder.compile()`}),(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`HumanInTheLoop Parameters`}),(0,j.jsx)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20},children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,color:`#8b949e`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Parameter`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Type`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Default`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Description`})]})}),(0,j.jsxs)(`tbody`,{children:[(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`prompt_function`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`function`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Required`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Function that generates the review prompt from the current state`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`timeout`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`float`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`None`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Maximum time to wait for human response (seconds)`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`default_action`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`str`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`"reject"`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Action to take if timeout occurs ("approve", "reject", or "escalate")`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,fontFamily:`monospace`,fontSize:`0.9em`},children:`notification_channel`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`str`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`None`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`Channel for sending notifications (email, slack, etc.)`})]})]})]})})]}),(0,j.jsxs)(xi,{id:`approval-workflows`,title:`Approval Workflows`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Common patterns for human approval in automated workflows.`}),(0,j.jsx)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Content Moderation`}),(0,j.jsx)(N,{python:`def moderate_content(state):
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
# Low-risk deploys automatically`}),(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Code Deployment Functions`}),(0,j.jsx)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20},children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,color:`#8b949e`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Function`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Parameters`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Returns`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Description`})]})}),(0,j.jsxs)(`tbody`,{children:[(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`assess_risk(changes)`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`changes: List[str]`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`str`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Assesses risk level of code changes ("low", "medium", "high")`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,fontFamily:`monospace`,fontSize:`0.9em`},children:`deploy_check(state)`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`state: dict`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`dict`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`Evaluates deployment state and sets approval requirements`})]})]})]})})]}),(0,j.jsxs)(xi,{id:`intervention-points`,title:`Intervention Points`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Strategic places to insert human intervention in your workflows.`}),(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,lineHeight:1.7,paddingLeft:20,marginBottom:16},children:[(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Before external actions:`}),` API calls, database writes, file operations`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Quality gates:`}),` After content generation, before publishing`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Error recovery:`}),` When automated retries fail`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Edge cases:`}),` When confidence scores are low`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Cost controls:`}),` Before expensive operations`]})]}),(0,j.jsx)(N,{python:`def confidence_check(state):
    score = state.get("confidence", 0)
    if score < 0.8:
        return {**state, "needs_human": True,
                "reason": f"Low confidence: {score:.2f}"}
    return {**state, "needs_human": False}

def human_intervention(state):
    if state.get("needs_human"):
        reason = state.get("reason", "Manual review required")
        return HumanInTheLoop.review(f"Review needed: {reason}")
    return state`}),(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Intervention Functions`}),(0,j.jsx)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20},children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,color:`#8b949e`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Function`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Parameters`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Returns`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Description`})]})}),(0,j.jsxs)(`tbody`,{children:[(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`confidence_check(state)`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`state: dict`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`dict`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Checks confidence score and flags for human intervention if below threshold`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,fontFamily:`monospace`,fontSize:`0.9em`},children:`human_intervention(state)`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`state: dict`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`dict`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`Handles human intervention workflow based on state flags`})]})]})]})})]}),(0,j.jsxs)(xi,{id:`feedback-loops`,title:`Feedback & Corrections`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Use human feedback to improve future automation.`}),(0,j.jsx)(N,{python:`def collect_feedback(state):
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
    return improved_response`}),(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Feedback Functions`}),(0,j.jsx)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20},children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,color:`#8b949e`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Function`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Parameters`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Returns`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Description`})]})}),(0,j.jsxs)(`tbody`,{children:[(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`collect_feedback(state)`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`state: dict`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`dict`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Processes human feedback and applies corrections to improve responses`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`save_feedback(feedback, input)`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`feedback: str, input: str`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`None`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Stores feedback data for future model training and improvement`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,fontFamily:`monospace`,fontSize:`0.9em`},children:`apply_feedback_corrections(response, feedback)`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`response: str, feedback: str`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`str`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`Applies human feedback corrections to improve the response`})]})]})]})}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Human feedback creates a virtuous cycle: each intervention improves the system's ability to handle similar cases automatically in the future.`})]})]})}function xi({id:e,title:t,children:n}){return(0,j.jsxs)(`section`,{id:e,style:{marginBottom:48},children:[(0,j.jsx)(`h2`,{style:{fontSize:`1.5rem`,fontWeight:600,color:`#e6edf3`,marginBottom:16,marginTop:0},children:t}),n]})}var Si=[{id:`rag-overview`,label:`RAG Overview`},{id:`document-loading`,label:`Document Loading`},{id:`text-splitting`,label:`Text Splitting`},{id:`embeddings`,label:`Embeddings & Vector Stores`},{id:`retrieval`,label:`Retrieval`},{id:`generation`,label:`Generation with Context`}];function Ci(){let{language:e}=M();return(0,j.jsxs)(P,{anchors:Si,children:[(0,j.jsx)(`h1`,{style:{fontSize:`2rem`,fontWeight:700,color:`#e6edf3`,letterSpacing:`-0.02em`,marginBottom:8,marginTop:0},children:`RAG Implementation`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:40,lineHeight:1.7},children:`Retrieval-Augmented Generation (RAG) combines the power of large language models with your own knowledge base. Flowgentra provides all the components you need to build RAG systems.`}),(0,j.jsxs)(wi,{id:`rag-overview`,title:`RAG Overview`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`RAG (Retrieval-Augmented Generation) is the pattern of fetching relevant documents and injecting them into the LLM's context before answering. This lets you give your agent access to a private knowledge base without fine-tuning.`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Traditional LLMs are trained on public data up to a certain point. They can't access your private documents, recent information after training, or domain-specific knowledge. RAG solves this by retrieving relevant information from your knowledge base and adding it to the LLM's context.`}),(0,j.jsx)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20,fontFamily:`monospace`,fontSize:`0.9rem`,color:`#8b949e`,textAlign:`center`},children:`Documents ──► Split ──► Embed ──► Store
                              │
                              ▼
User Query ──► Embed ──► Search ──► Retrieve ──► Generate Answer`})]}),(0,j.jsxs)(wi,{id:`document-loading`,title:`Document Loading`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Load documents from various sources: files, URLs, databases, or APIs.`}),(0,j.jsx)(N,{rust:`use flowgentra_ai::document_loader::{FileLoader, WebLoader};

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
all_docs = docs + web_docs`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Flowgentra supports PDF, HTML, Markdown, JSON, CSV, and plain text files out of the box.`})]}),(0,j.jsxs)(wi,{id:`text-splitting`,title:`Text Splitting`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Before embedding, split large documents into smaller chunks. Why?`}),(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,marginBottom:16,paddingLeft:`20px`},children:[(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Context limits`}),`: LLMs have maximum context windows (e.g., 4K-128K tokens)`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Relevance`}),`: Smaller chunks are more likely to be entirely relevant`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Cost`}),`: Smaller chunks = fewer tokens = lower API costs`]})]}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Flowgentra provides multiple splitting strategies:`}),(0,j.jsx)(N,{rust:`use flowgentra_ai::text_splitter::{RecursiveTextSplitter, ChunkConfig};

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
chunks = splitter.split(source_code)  # Respects function/class boundaries`}),(0,j.jsxs)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Choosing chunk size:`}),` Too small: Loses context. Too large: May exceed context limits. Good starting point: 500-1000 characters, 50-200 character overlap.`]}),(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Text Splitter Parameters`}),(0,j.jsx)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20},children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,color:`#8b949e`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Parameter`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Type`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Default`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Description`})]})}),(0,j.jsxs)(`tbody`,{children:[(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`chunk_size`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`int`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`1000`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Maximum characters per chunk`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`chunk_overlap`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`int`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`200`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Number of characters to overlap between chunks`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,fontFamily:`monospace`,fontSize:`0.9em`},children:`separators`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`List[str]`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`["\\n\\n", "\\n", " ", ""]`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`Ordered list of separators to try for splitting`})]})]})]})})]}),(0,j.jsxs)(wi,{id:`embeddings`,title:`Embeddings & Vector Stores`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Embeddings convert text into numerical vectors that capture semantic meaning. Similar texts have similar vectors.`}),(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Embedding Providers`}),(0,j.jsx)(N,{rust:`use flowgentra_ai::rag::{OpenAIEmbeddings, CachedEmbeddings, EmbeddingsProvider};

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
store.add_documents(chunks)`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Flowgentra supports Chroma, Qdrant, Weaviate, Pinecone, and other vector databases.`}),(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`ChromaStore Parameters`}),(0,j.jsx)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20},children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,color:`#8b949e`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Parameter`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Type`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Default`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Description`})]})}),(0,j.jsxs)(`tbody`,{children:[(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`persist_directory`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`str`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Required`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Directory path to persist the vector database`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`embedding_function`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Embeddings`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Required`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Embedding function to convert text to vectors`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`collection_name`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`str`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`"default"`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Name of the Chroma collection to use`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,fontFamily:`monospace`,fontSize:`0.9em`},children:`client_settings`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`dict`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`None`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`Additional Chroma client configuration settings`})]})]})]})}),(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`OpenAIEmbeddings Parameters`}),(0,j.jsx)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20},children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,color:`#8b949e`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Parameter`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Type`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Default`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Description`})]})}),(0,j.jsxs)(`tbody`,{children:[(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`model`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`str`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`"text-embedding-3-small"`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`OpenAI embedding model to use`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`api_key`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`str`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Required`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`OpenAI API key for authentication`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`base_url`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`str`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`"https://api.openai.com/v1"`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Base URL for OpenAI API`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,fontFamily:`monospace`,fontSize:`0.9em`},children:`max_retries`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`int`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`3`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`Maximum number of retries for failed requests`})]})]})]})})]}),(0,j.jsxs)(wi,{id:`retrieval`,title:`Retrieval`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Find the most relevant documents for a user's query using semantic search.`}),(0,j.jsx)(N,{rust:`use flowgentra_ai::rag::{Retriever, RetrievalConfig};

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
    print(f"[{r.score:.2f}] {r.text[:100]}...")`}),(0,j.jsxs)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Retrieval strategies:`}),` Semantic finds conceptually similar content. Hybrid combines semantic with keyword matching (better for exact terms). Threshold filters low-relevance results. Deduplication removes redundant results.`]}),(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Retriever Parameters`}),(0,j.jsx)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20},children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,color:`#8b949e`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Parameter`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Type`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Default`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Description`})]})}),(0,j.jsxs)(`tbody`,{children:[(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`vectorstore`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`VectorStore`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Required`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Vector store instance to search in`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`top_k`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`int`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`5`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Number of top results to return`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`score_threshold`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`float`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`None`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Minimum similarity score threshold (0.0-1.0)`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`rerank`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`bool`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`False`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Whether to use reranking for better results`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,fontFamily:`monospace`,fontSize:`0.9em`},children:`search_kwargs`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`dict`}),(0,j.jsx)(`td`,{style:{padding:`8px`}}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`Additional search parameters for the vector store`})]})]})]})})]}),(0,j.jsxs)(wi,{id:`generation`,title:`Generation with Context`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Use retrieved documents as context for generating accurate, grounded answers.`}),(0,j.jsx)(N,{rust:`use flowgentra_ai::{StateGraph, DynState};
use flowgentra_ai::llm::{LLMConfig, LLM, Message};

#[tokio::main]
async fn main() -> Result<()> {
    let client = LLM::from_config(LLMConfig::openai("gpt-4", "sk-..."));
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
from flowgentra_ai.llm import LLMConfig, LLM, Message
from flowgentra_ai import State

# Set up LLM and retriever
client = LLM.from_config(LLMConfig("openai", "gpt-4", api_key="sk-..."))
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
print(result["answer"])`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`This creates a complete RAG pipeline: retrieve relevant context, then generate an answer grounded in that context.`})]})]})}function wi({id:e,title:t,children:n}){return(0,j.jsxs)(`section`,{id:e,style:{marginBottom:48},children:[(0,j.jsx)(`h2`,{style:{fontSize:`1.5rem`,fontWeight:600,color:`#e6edf3`,marginBottom:16,marginTop:0},children:t}),n]})}var Ti=[{id:`tool-basics`,label:`Tool Basics`},{id:`creating-tools`,label:`Creating Tools`},{id:`tool-registry`,label:`Tool Registry`},{id:`tool-nodes`,label:`Tool Nodes`},{id:`tool-calling`,label:`Tool Calling with LLMs`},{id:`builtin-tools`,label:`Built-in Tools`},{id:`search-tools`,label:`Search Tools`},{id:`knowledge-tools`,label:`Knowledge Tools`},{id:`code-exec-tools`,label:`Code Execution Tools`},{id:`file-tools`,label:`Extended File Tools`},{id:`data-tools`,label:`Data Tools`},{id:`communication-tools`,label:`Communication Tools`},{id:`external-api-tools`,label:`External API Tools`},{id:`human-tools`,label:`Human-in-the-Loop`}],Ei={background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20},F={textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},I={padding:`8px`,borderBottom:`1px solid #21262d`,color:`#8b949e`},L={...I,fontFamily:`monospace`,fontSize:`0.9em`},R={padding:`8px`,color:`#8b949e`},Di={...R,fontFamily:`monospace`,fontSize:`0.9em`};function Oi(){let{language:e}=M();return(0,j.jsxs)(P,{anchors:Ti,children:[(0,j.jsx)(`h1`,{style:{fontSize:`2rem`,fontWeight:700,color:`#e6edf3`,letterSpacing:`-0.02em`,marginBottom:8,marginTop:0},children:`Tool Integration`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:40,lineHeight:1.7},children:`Tools extend your agents with the ability to perform actions: call APIs, run calculations, search the web, execute code, or interact with external services. Flowgentra ships with 27 production-ready predefined tools plus a complete framework for building custom ones.`}),(0,j.jsxs)(ki,{id:`tool-basics`,title:`Tool Basics`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`A tool is a function that an agent can call. Every tool has a name, a description the LLM reads, and a JSON schema describing its parameters.`}),(0,j.jsx)(N,{rust:`use flowgentra_ai::core::tools::{Tool, ToolDefinition, JsonSchema};
use flowgentra_ai::prelude::*;
use serde_json::{json, Value};
use async_trait::async_trait;

struct MyTool;

#[async_trait]
impl Tool for MyTool {
    fn definition(&self) -> ToolDefinition {
        ToolDefinition {
            name: "my_tool".to_string(),
            description: "Does something useful.".to_string(),
            parameters: JsonSchema::object(),
        }
    }

    async fn call(&self, input: Value) -> Result<Value> {
        let arg = input["arg"].as_str().unwrap_or("");
        Ok(json!({ "result": arg }))
    }
}`,python:`from flowgentra_ai.tools import ToolRegistry, CalculatorTool

# Use a predefined tool directly
calc = CalculatorTool()
result = calc.call({"expression": "2 ** 10"})
print(result)  # {"result": 1024.0}

# Or build a registry and call by name
registry = ToolRegistry.with_builtins()
result = registry.call_tool("calculator", {"expression": "sqrt(144)"})`})]}),(0,j.jsxs)(ki,{id:`creating-tools`,title:`Creating Custom Tools`,children:[(0,j.jsxs)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:[`Implement the `,(0,j.jsx)(`code`,{style:{fontFamily:`monospace`,color:`#79c0ff`},children:`Tool`}),` trait in Rust. Python agents use Flowgentra's predefined tools or extend via PyO3 bindings.`]}),(0,j.jsx)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Rust Custom Tool`}),(0,j.jsx)(N,{rust:`use flowgentra_ai::core::tools::{Tool, ToolDefinition, JsonSchema};
use flowgentra_ai::prelude::*;
use serde_json::{json, Value};
use async_trait::async_trait;

pub struct WeatherTool {
    api_key: String,
    client: reqwest::Client,
}

impl WeatherTool {
    pub fn new(api_key: impl Into<String>) -> Self {
        Self { api_key: api_key.into(), client: reqwest::Client::new() }
    }
    pub fn from_env() -> Result<Self> {
        let key = std::env::var("WEATHER_API_KEY")
            .map_err(|_| FlowgentraError::ToolError("WEATHER_API_KEY not set".into()))?;
        Ok(Self::new(key))
    }
}

#[async_trait]
impl Tool for WeatherTool {
    fn definition(&self) -> ToolDefinition {
        ToolDefinition {
            name: "weather".to_string(),
            description: "Get current weather for a city.".to_string(),
            parameters: JsonSchema::object(),
        }
    }

    async fn call(&self, input: Value) -> Result<Value> {
        let city = input["city"].as_str()
            .ok_or_else(|| FlowgentraError::ToolError("city required".into()))?;
        // ... HTTP call to weather API
        Ok(json!({ "city": city, "temperature": 22 }))
    }
}`,python:`# Python: use the predefined OpenWeatherMapTool (key-based)
from flowgentra_ai.tools import OpenWeatherMapTool

weather = OpenWeatherMapTool(api_key="YOUR_KEY")
# or: OpenWeatherMapTool()  — reads OPENWEATHERMAP_API_KEY env var

result = weather.call({"city": "London"})
print(result)
# {"city": "London", "temperature": 15.2, "feels_like": 13.1,
#  "humidity": 72, "description": "overcast clouds", "wind_speed": 4.1}`}),(0,j.jsx)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:24},children:`Tool Definition Schema`}),(0,j.jsx)(`div`,{style:Ei,children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`th`,{style:F,children:`Field`}),(0,j.jsx)(`th`,{style:F,children:`Type`}),(0,j.jsx)(`th`,{style:F,children:`Description`})]})}),(0,j.jsxs)(`tbody`,{children:[(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:L,children:`name`}),(0,j.jsx)(`td`,{style:I,children:`String`}),(0,j.jsx)(`td`,{style:I,children:`Unique identifier used to call the tool`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:L,children:`description`}),(0,j.jsx)(`td`,{style:I,children:`String`}),(0,j.jsx)(`td`,{style:I,children:`Natural-language explanation the LLM reads to decide when to use the tool`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:Di,children:`parameters`}),(0,j.jsx)(`td`,{style:R,children:`JsonSchema`}),(0,j.jsx)(`td`,{style:R,children:`JSON Schema object describing the input shape`})]})]})]})})]}),(0,j.jsxs)(ki,{id:`tool-registry`,title:`Tool Registry`,children:[(0,j.jsxs)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:[(0,j.jsx)(`code`,{style:{fontFamily:`monospace`,color:`#79c0ff`},children:`ToolRegistry`}),` holds a named collection of tools and dispatches calls. `,(0,j.jsx)(`code`,{style:{fontFamily:`monospace`,color:`#79c0ff`},children:`with_builtins()`}),` pre-registers every keyless, non-destructive tool.`]}),(0,j.jsx)(N,{rust:`use flowgentra_ai::core::tools::ToolRegistry;
use std::sync::Arc;

// Start with all safe built-in tools registered
let mut registry = ToolRegistry::with_builtins();

// Add your own tool
registry.register("weather", Arc::new(WeatherTool::new("key")))?;

// Call a tool by name
let result = registry.call_tool("calculator", json!({"expression": "2^8"})).await?;

// Inspect the registry
println!("{} tools registered", registry.len());
for def in registry.list_definitions() {
    println!("  {} — {}", def.name, def.description);
}`,python:`from flowgentra_ai.tools import (
    ToolRegistry, ToolNode,
    CalculatorTool, FilesTool, WebRequestTool,
    DuckDuckGoSearchTool, WikipediaTool,
)

# Pre-seeded with all keyless built-ins
registry = ToolRegistry.with_builtins()

# Or start empty and add selectively
registry = ToolRegistry()

# Pass a list — tool name comes from definition
registry = ToolRegistry([CalculatorTool(), DuckDuckGoSearchTool()])

# Pass a dict to override names
registry = ToolRegistry({"calc": CalculatorTool(), "search": DuckDuckGoSearchTool()})

# Call directly
result = registry.call_tool("calculator", {"expression": "99 * 99"})

# Check what's registered
print(registry.list_names())   # ['calculator', 'duckduckgo_search', ...]
print(len(registry))           # number of tools`})]}),(0,j.jsxs)(ki,{id:`tool-nodes`,title:`Tool Nodes`,children:[(0,j.jsxs)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:[`A `,(0,j.jsx)(`code`,{style:{fontFamily:`monospace`,color:`#79c0ff`},children:`ToolNode`}),` wraps a registry as a graph node, executing whatever tool calls are pending in the state.`]}),(0,j.jsx)(N,{rust:`use flowgentra_ai::core::tools::{ToolRegistry, ToolNode};
use flowgentra_ai::core::graph::StateGraph;

let registry = ToolRegistry::with_builtins();
let tool_node = ToolNode::new(Arc::new(registry));

let graph = StateGraph::builder()
    .add_node("agent", agent_node)
    .add_node("tools", tool_node)
    .add_conditional_edge("agent", |state| {
        if state.has_pending_tool_calls() { "tools" } else { "__end__" }
    })
    .add_edge("tools", "agent")   // loop back
    .build()?;`,python:`from flowgentra_ai.tools import ToolRegistry, ToolNode, create_tool_node, check_tools_condition

registry = ToolRegistry.with_builtins()

# Functional API
tool_node = create_tool_node(registry)

builder = StateGraph(AgentState)
builder.add_node("agent", agent_node)
builder.add_node("tools", tool_node)
builder.add_conditional_edges("agent", check_tools_condition, {
    "tools": "tools",
    "__end__": END,
})
builder.add_edge("tools", "agent")
graph = builder.compile()`})]}),(0,j.jsxs)(ki,{id:`tool-calling`,title:`Tool Calling with LLMs`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Attach tools to an LLM so the model can decide when and how to call them.`}),(0,j.jsx)(N,{python:`from flowgentra_ai.llm import LLM, LLMConfig
from flowgentra_ai.tools import CalculatorTool, DuckDuckGoSearchTool

llm = LLM(LLMConfig(
    provider="anthropic",
    model="claude-opus-4-7",
    api_key="YOUR_KEY",
))

tools = [CalculatorTool(), DuckDuckGoSearchTool()]

response = llm.complete(
    "What is 15 * 23, and who won the 2024 World Series?",
    tools=tools,
)

print(response.tool_calls)   # tool invocations the model made
print(response.content)      # final answer after tool results`})]}),(0,j.jsxs)(ki,{id:`builtin-tools`,title:`Built-in Tools`,children:[(0,j.jsxs)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:[`These tools are registered automatically by `,(0,j.jsx)(`code`,{style:{fontFamily:`monospace`,color:`#79c0ff`},children:`ToolRegistry::with_builtins()`}),` — no API key or configuration required.`]}),(0,j.jsx)(`div`,{style:Ei,children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`th`,{style:F,children:`Class`}),(0,j.jsx)(`th`,{style:F,children:`Registry name`}),(0,j.jsx)(`th`,{style:F,children:`Input`}),(0,j.jsx)(`th`,{style:F,children:`Purpose`})]})}),(0,j.jsxs)(`tbody`,{children:[(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:L,children:`CalculatorTool`}),(0,j.jsx)(`td`,{style:I,children:(0,j.jsx)(`code`,{style:{fontFamily:`monospace`},children:`calculator`})}),(0,j.jsx)(`td`,{style:I,children:(0,j.jsx)(`code`,{style:{fontFamily:`monospace`},children:`expression: str`})}),(0,j.jsx)(`td`,{style:I,children:`Evaluate mathematical expressions safely`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:L,children:`FilesTool`}),(0,j.jsx)(`td`,{style:I,children:(0,j.jsx)(`code`,{style:{fontFamily:`monospace`},children:`file`})}),(0,j.jsx)(`td`,{style:I,children:(0,j.jsx)(`code`,{style:{fontFamily:`monospace`},children:`operation, path, content?`})}),(0,j.jsx)(`td`,{style:I,children:`Read, write, append, list files within sandbox`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:L,children:`WebRequestTool`}),(0,j.jsx)(`td`,{style:I,children:(0,j.jsx)(`code`,{style:{fontFamily:`monospace`},children:`web_request`})}),(0,j.jsx)(`td`,{style:I,children:(0,j.jsx)(`code`,{style:{fontFamily:`monospace`},children:`url, method?, headers?, body?`})}),(0,j.jsx)(`td`,{style:I,children:`HTTP requests (GET/POST/PUT/PATCH/DELETE/HEAD) with SSRF protection`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:L,children:`DuckDuckGoSearchTool`}),(0,j.jsx)(`td`,{style:I,children:(0,j.jsx)(`code`,{style:{fontFamily:`monospace`},children:`duckduckgo_search`})}),(0,j.jsx)(`td`,{style:I,children:(0,j.jsx)(`code`,{style:{fontFamily:`monospace`},children:`query: str, max_results?: int`})}),(0,j.jsx)(`td`,{style:I,children:`Web search via DuckDuckGo (no API key)`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:L,children:`WikipediaTool`}),(0,j.jsx)(`td`,{style:I,children:(0,j.jsx)(`code`,{style:{fontFamily:`monospace`},children:`wikipedia`})}),(0,j.jsx)(`td`,{style:I,children:(0,j.jsx)(`code`,{style:{fontFamily:`monospace`},children:`title: str`})}),(0,j.jsx)(`td`,{style:I,children:`Fetch Wikipedia article summary`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:L,children:`JsonGetValueTool`}),(0,j.jsx)(`td`,{style:I,children:(0,j.jsx)(`code`,{style:{fontFamily:`monospace`},children:`json_get`})}),(0,j.jsx)(`td`,{style:I,children:(0,j.jsx)(`code`,{style:{fontFamily:`monospace`},children:`json: str, path: str`})}),(0,j.jsx)(`td`,{style:I,children:`Extract value from JSON by dot-notation path`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:L,children:`JsonListKeysTool`}),(0,j.jsx)(`td`,{style:I,children:(0,j.jsx)(`code`,{style:{fontFamily:`monospace`},children:`json_keys`})}),(0,j.jsx)(`td`,{style:I,children:(0,j.jsx)(`code`,{style:{fontFamily:`monospace`},children:`json: str, depth?: int`})}),(0,j.jsx)(`td`,{style:I,children:`List all keys in a JSON object recursively`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:L,children:`CsvQueryTool`}),(0,j.jsx)(`td`,{style:I,children:(0,j.jsx)(`code`,{style:{fontFamily:`monospace`},children:`csv_query`})}),(0,j.jsx)(`td`,{style:I,children:(0,j.jsx)(`code`,{style:{fontFamily:`monospace`},children:`csv: str, filter?: str`})}),(0,j.jsx)(`td`,{style:I,children:`Parse and filter CSV data in memory`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:L,children:`CopyFileTool`}),(0,j.jsx)(`td`,{style:I,children:(0,j.jsx)(`code`,{style:{fontFamily:`monospace`},children:`copy_file`})}),(0,j.jsx)(`td`,{style:I,children:(0,j.jsx)(`code`,{style:{fontFamily:`monospace`},children:`src: str, dst: str`})}),(0,j.jsx)(`td`,{style:I,children:`Copy a file within sandbox`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:L,children:`DeleteFileTool`}),(0,j.jsx)(`td`,{style:I,children:(0,j.jsx)(`code`,{style:{fontFamily:`monospace`},children:`delete_file`})}),(0,j.jsx)(`td`,{style:I,children:(0,j.jsx)(`code`,{style:{fontFamily:`monospace`},children:`path: str, recursive?: bool`})}),(0,j.jsx)(`td`,{style:I,children:`Delete a file or directory`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:L,children:`MoveFileTool`}),(0,j.jsx)(`td`,{style:I,children:(0,j.jsx)(`code`,{style:{fontFamily:`monospace`},children:`move_file`})}),(0,j.jsx)(`td`,{style:I,children:(0,j.jsx)(`code`,{style:{fontFamily:`monospace`},children:`src: str, dst: str`})}),(0,j.jsx)(`td`,{style:I,children:`Move or rename a file`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:L,children:`FileSearchTool`}),(0,j.jsx)(`td`,{style:I,children:(0,j.jsx)(`code`,{style:{fontFamily:`monospace`},children:`file_search`})}),(0,j.jsx)(`td`,{style:I,children:(0,j.jsx)(`code`,{style:{fontFamily:`monospace`},children:`directory, pattern, max_results?`})}),(0,j.jsx)(`td`,{style:I,children:`Recursive file search with regex matching`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:L,children:`HumanInputTool`}),(0,j.jsx)(`td`,{style:I,children:(0,j.jsx)(`code`,{style:{fontFamily:`monospace`},children:`human_input`})}),(0,j.jsx)(`td`,{style:I,children:(0,j.jsx)(`code`,{style:{fontFamily:`monospace`},children:`prompt: str`})}),(0,j.jsx)(`td`,{style:I,children:`Pause execution and prompt the user for input`})]})]})]})}),(0,j.jsx)(N,{rust:`use flowgentra_ai::core::tools::ToolRegistry;

// All 13 keyless tools registered automatically
let registry = ToolRegistry::with_builtins();

let result = registry.call_tool("calculator", json!({"expression": "2^10"})).await?;
let result = registry.call_tool("wikipedia", json!({"title": "Rust programming language"})).await?;
let result = registry.call_tool("csv_query", json!({
    "csv": "name,age
Alice,30
Bob,25",
    "filter": "age=30"
})).await?;`,python:`from flowgentra_ai.tools import ToolRegistry

registry = ToolRegistry.with_builtins()

# Calculator
print(registry.call_tool("calculator", {"expression": "2 ** 10"}))
# {"result": 1024.0}

# Wikipedia
print(registry.call_tool("wikipedia", {"title": "Rust programming language"}))
# {"title": "Rust (programming language)", "extract": "...", "url": "..."}

# CSV query
print(registry.call_tool("csv_query", {
    "csv": "name,score\\nAlice,95\\nBob,82\\nCarol,95",
    "filter": "score=95"
}))
# {"rows": [{"name": "Alice", "score": "95"}, {"name": "Carol", "score": "95"}], "count": 2}`})]}),(0,j.jsxs)(ki,{id:`search-tools`,title:`Search Tools`,children:[(0,j.jsxs)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:[`Five search providers — one free, four requiring API keys. All return a uniform `,(0,j.jsx)(`code`,{style:{fontFamily:`monospace`,color:`#79c0ff`},children:`{ query, results: [{title, url, snippet}], count }`}),` shape.`]}),(0,j.jsx)(`div`,{style:Ei,children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`th`,{style:F,children:`Class`}),(0,j.jsx)(`th`,{style:F,children:`API Key Env Var`}),(0,j.jsx)(`th`,{style:F,children:`Notes`})]})}),(0,j.jsxs)(`tbody`,{children:[(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:L,children:`DuckDuckGoSearchTool`}),(0,j.jsx)(`td`,{style:I,children:`—`}),(0,j.jsx)(`td`,{style:I,children:`Free. Uses Instant Answer API, falls back to DDG Lite HTML scraping.`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:L,children:`TavilySearchTool`}),(0,j.jsx)(`td`,{style:I,children:(0,j.jsx)(`code`,{style:{fontFamily:`monospace`},children:`TAVILY_API_KEY`})}),(0,j.jsxs)(`td`,{style:I,children:[`AI-optimised search with `,(0,j.jsx)(`code`,{style:{fontFamily:`monospace`},children:`max_results`}),` and `,(0,j.jsx)(`code`,{style:{fontFamily:`monospace`},children:`search_depth`}),`.`]})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:L,children:`SerpApiSearchTool`}),(0,j.jsx)(`td`,{style:I,children:(0,j.jsx)(`code`,{style:{fontFamily:`monospace`},children:`SERPAPI_API_KEY`})}),(0,j.jsxs)(`td`,{style:I,children:[`Google SERP via SerpApi. Supports `,(0,j.jsx)(`code`,{style:{fontFamily:`monospace`},children:`engine`}),` param.`]})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:L,children:`GoogleSerperTool`}),(0,j.jsx)(`td`,{style:I,children:(0,j.jsx)(`code`,{style:{fontFamily:`monospace`},children:`SERPER_API_KEY`})}),(0,j.jsx)(`td`,{style:I,children:`Google via Serper.dev. Fastest Google option.`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:Di,children:`BraveSearchTool`}),(0,j.jsx)(`td`,{style:R,children:(0,j.jsx)(`code`,{style:{fontFamily:`monospace`},children:`BRAVE_API_KEY`})}),(0,j.jsx)(`td`,{style:R,children:`Privacy-first independent index.`})]})]})]})}),(0,j.jsx)(N,{python:`from flowgentra_ai.tools import (
    DuckDuckGoSearchTool,
    TavilySearchTool,
    SerpApiSearchTool,
    GoogleSerperTool,
    BraveSearchTool,
)

# Free — no key needed
ddg = DuckDuckGoSearchTool()
result = ddg.call({"query": "Rust programming language", "max_results": 5})
# {"query": "Rust programming language", "results": [...], "count": 5}

# API-key tools — key passed directly or read from env
tavily = TavilySearchTool(api_key="tvly-...")
# tavily = TavilySearchTool()  # reads TAVILY_API_KEY

result = tavily.call({
    "query": "latest AI research 2024",
    "max_results": 10,
    "search_depth": "advanced",  # "basic" or "advanced"
})

# All providers return the same shape
for r in result["results"]:
    print(r["title"], r["url"])`})]}),(0,j.jsxs)(ki,{id:`knowledge-tools`,title:`Knowledge Tools`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Tools for accessing encyclopedic and scientific knowledge bases.`}),(0,j.jsx)(`div`,{style:Ei,children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`th`,{style:F,children:`Class`}),(0,j.jsx)(`th`,{style:F,children:`Source`}),(0,j.jsx)(`th`,{style:F,children:`API Key Env Var`})]})}),(0,j.jsxs)(`tbody`,{children:[(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:L,children:`WikipediaTool`}),(0,j.jsx)(`td`,{style:I,children:`Wikipedia REST API`}),(0,j.jsx)(`td`,{style:I,children:`—`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:L,children:`ArxivTool`}),(0,j.jsx)(`td`,{style:I,children:`arXiv.org Atom feed`}),(0,j.jsx)(`td`,{style:I,children:`—`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:L,children:`PubMedTool`}),(0,j.jsx)(`td`,{style:I,children:`NCBI E-utilities`}),(0,j.jsx)(`td`,{style:I,children:`—`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:Di,children:`WolframAlphaTool`}),(0,j.jsx)(`td`,{style:R,children:`Wolfram Alpha API`}),(0,j.jsx)(`td`,{style:R,children:(0,j.jsx)(`code`,{style:{fontFamily:`monospace`},children:`WOLFRAM_ALPHA_APPID`})})]})]})]})}),(0,j.jsx)(N,{python:`from flowgentra_ai.tools import WikipediaTool, ArxivTool, PubMedTool, WolframAlphaTool

# Wikipedia — article summary
wiki = WikipediaTool()
result = wiki.call({"title": "Large language model"})
# {"title": "Large language model", "extract": "A large language model ...", "url": "..."}

# ArXiv — recent papers
arxiv = ArxivTool()
result = arxiv.call({"query": "transformer attention mechanism", "max_results": 3})
# {"results": [{"id": "2017.12345", "title": "...", "summary": "...", "published": "..."}, ...]}

# PubMed — biomedical literature
pubmed = PubMedTool()
result = pubmed.call({"query": "mRNA vaccine efficacy", "max_results": 5})
# {"results": [{"uid": "...", "title": "...", "source": "Nature", "pubdate": "2023"}, ...]}

# Wolfram Alpha — computational answers
wolfram = WolframAlphaTool(api_key="YOUR_APPID")
result = wolfram.call({"query": "integrate x^2 from 0 to 3"})
# {"query": "...", "pods": [{"title": "Definite integral", "result": "9"}]}`})]}),(0,j.jsxs)(ki,{id:`code-exec-tools`,title:`Code Execution Tools`,children:[(0,j.jsxs)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:[`Execute code in a subprocess. All tools return `,(0,j.jsx)(`code`,{style:{fontFamily:`monospace`,color:`#79c0ff`},children:`{ output, error, exit_code }`}),`. Timeouts kill the child process automatically.`]}),(0,j.jsx)(`div`,{style:Ei,children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`th`,{style:F,children:`Class`}),(0,j.jsx)(`th`,{style:F,children:`Runtime`}),(0,j.jsx)(`th`,{style:F,children:`Default Timeout`})]})}),(0,j.jsxs)(`tbody`,{children:[(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:L,children:`PythonReplTool`}),(0,j.jsx)(`td`,{style:I,children:(0,j.jsx)(`code`,{style:{fontFamily:`monospace`},children:`python3`})}),(0,j.jsx)(`td`,{style:I,children:`30 s`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:L,children:`NodeJsReplTool`}),(0,j.jsx)(`td`,{style:I,children:(0,j.jsx)(`code`,{style:{fontFamily:`monospace`},children:`node`})}),(0,j.jsx)(`td`,{style:I,children:`30 s`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:Di,children:`ShellTool`}),(0,j.jsx)(`td`,{style:R,children:(0,j.jsx)(`code`,{style:{fontFamily:`monospace`},children:`sh -c`})}),(0,j.jsx)(`td`,{style:R,children:`30 s — allowlist required by default`})]})]})]})}),(0,j.jsx)(N,{python:`from flowgentra_ai.tools import PythonReplTool, NodeJsReplTool, ShellTool

# Python REPL
py = PythonReplTool()
result = py.call({"code": "import math; print(math.pi ** 2)"})
# {"output": "9.869604401...", "error": "", "exit_code": 0}

# Node.js REPL
node = NodeJsReplTool()
result = node.call({"code": "console.log([1,2,3].reduce((a,b)=>a+b,0))"})
# {"output": "6", "error": "", "exit_code": 0}

# Shell — allowlist restricts which commands are permitted
shell = ShellTool(allowed_commands=["ls", "cat", "echo", "wc"])
result = shell.call({"command": "wc -l /etc/hosts"})
# {"output": "30 /etc/hosts", "error": "", "exit_code": 0}

# Unrestricted shell — use with caution
shell_unrestricted = ShellTool.unrestricted()
result = shell_unrestricted.call({"command": "git log --oneline -5"})`})]}),(0,j.jsxs)(ki,{id:`file-tools`,title:`Extended File Tools`,children:[(0,j.jsxs)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:[`File operations beyond the core `,(0,j.jsx)(`code`,{style:{fontFamily:`monospace`,color:`#79c0ff`},children:`FilesTool`}),`. All paths are validated against a sandbox root (defaults to `,(0,j.jsx)(`code`,{style:{fontFamily:`monospace`,color:`#79c0ff`},children:`cwd`}),`). Path traversal attacks are blocked.`]}),(0,j.jsx)(`div`,{style:Ei,children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`th`,{style:F,children:`Class`}),(0,j.jsx)(`th`,{style:F,children:`Input Parameters`}),(0,j.jsx)(`th`,{style:F,children:`Notes`})]})}),(0,j.jsxs)(`tbody`,{children:[(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:L,children:`CopyFileTool`}),(0,j.jsx)(`td`,{style:I,children:(0,j.jsx)(`code`,{style:{fontFamily:`monospace`},children:`src, dst`})}),(0,j.jsx)(`td`,{style:I,children:`Copies file; both paths must stay within sandbox`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:L,children:`DeleteFileTool`}),(0,j.jsx)(`td`,{style:I,children:(0,j.jsx)(`code`,{style:{fontFamily:`monospace`},children:`path, recursive?`})}),(0,j.jsxs)(`td`,{style:I,children:[(0,j.jsx)(`code`,{style:{fontFamily:`monospace`},children:`recursive: true`}),` removes directories`]})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:L,children:`MoveFileTool`}),(0,j.jsx)(`td`,{style:I,children:(0,j.jsx)(`code`,{style:{fontFamily:`monospace`},children:`src, dst`})}),(0,j.jsx)(`td`,{style:I,children:`Atomic rename; works across the sandbox`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:Di,children:`FileSearchTool`}),(0,j.jsx)(`td`,{style:R,children:(0,j.jsx)(`code`,{style:{fontFamily:`monospace`},children:`directory, pattern, max_results?`})}),(0,j.jsxs)(`td`,{style:R,children:[`Recursive regex search; returns `,(0,j.jsx)(`code`,{style:{fontFamily:`monospace`},children:`[{file, line_number, line_content}]`})]})]})]})]})}),(0,j.jsx)(N,{python:`from flowgentra_ai.tools import CopyFileTool, DeleteFileTool, MoveFileTool, FileSearchTool

# Copy
copy = CopyFileTool()
copy.call({"src": "report.md", "dst": "backup/report.md"})

# Delete
delete = DeleteFileTool()
delete.call({"path": "tmp/old_data.csv"})
delete.call({"path": "tmp/", "recursive": True})

# Move / rename
move = MoveFileTool()
move.call({"src": "draft.txt", "dst": "final/document.txt"})

# Search — regex pattern across file contents
search = FileSearchTool()
result = search.call({
    "directory": "src/",
    "pattern": "TODO|FIXME",
    "max_results": 50,
})
for hit in result["matches"]:
    print(f"{hit['file']}:{hit['line_number']}  {hit['line_content']}")`})]}),(0,j.jsxs)(ki,{id:`data-tools`,title:`Data Tools`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Pure in-memory tools for JSON and CSV data — no I/O, no API keys.`}),(0,j.jsx)(N,{python:`from flowgentra_ai.tools import JsonGetValueTool, JsonListKeysTool, CsvQueryTool

# Extract a value by dot-notation path
json_get = JsonGetValueTool()
result = json_get.call({
    "json": '{"user": {"name": "Alice", "age": 30}}',
    "path": "user.name"
})
# {"value": "Alice", "found": true}

# List all keys recursively
json_keys = JsonListKeysTool()
result = json_keys.call({
    "json": '{"a": 1, "b": {"c": 2, "d": 3}}',
    "depth": 2
})
# {"keys": ["a", "b", "b.c", "b.d"]}

# Query CSV data with optional column filter
csv_query = CsvQueryTool()
result = csv_query.call({
    "csv": "name,dept,salary\\nAlice,eng,120000\\nBob,hr,80000\\nCarol,eng,115000",
    "filter": "dept=eng"
})
# {"rows": [{"name":"Alice","dept":"eng","salary":"120000"},
#           {"name":"Carol","dept":"eng","salary":"115000"}], "count": 2}`})]}),(0,j.jsxs)(ki,{id:`communication-tools`,title:`Communication Tools`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Send messages and read inboxes via Gmail and Slack. Both tools require access tokens.`}),(0,j.jsx)(`div`,{style:Ei,children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`th`,{style:F,children:`Class`}),(0,j.jsx)(`th`,{style:F,children:`API Key Env Var`}),(0,j.jsx)(`th`,{style:F,children:`Supported Operations`})]})}),(0,j.jsxs)(`tbody`,{children:[(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:L,children:`GmailTool`}),(0,j.jsx)(`td`,{style:I,children:(0,j.jsx)(`code`,{style:{fontFamily:`monospace`},children:`GMAIL_ACCESS_TOKEN`})}),(0,j.jsxs)(`td`,{style:I,children:[(0,j.jsx)(`code`,{style:{fontFamily:`monospace`},children:`send`}),`, `,(0,j.jsx)(`code`,{style:{fontFamily:`monospace`},children:`list`}),`, `,(0,j.jsx)(`code`,{style:{fontFamily:`monospace`},children:`read`})]})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:Di,children:`SlackTool`}),(0,j.jsx)(`td`,{style:R,children:(0,j.jsx)(`code`,{style:{fontFamily:`monospace`},children:`SLACK_BOT_TOKEN`})}),(0,j.jsxs)(`td`,{style:R,children:[(0,j.jsx)(`code`,{style:{fontFamily:`monospace`},children:`post_message`}),`, `,(0,j.jsx)(`code`,{style:{fontFamily:`monospace`},children:`list_channels`})]})]})]})]})}),(0,j.jsx)(N,{python:`from flowgentra_ai.tools import GmailTool, SlackTool

# Gmail
gmail = GmailTool()  # reads GMAIL_ACCESS_TOKEN

# Send an email
gmail.call({
    "operation": "send",
    "to": "colleague@example.com",
    "subject": "Weekly Report",
    "body": "Hi, please find the report attached.",
})

# List recent messages
result = gmail.call({"operation": "list", "max_results": 5})

# Read a specific message
result = gmail.call({"operation": "read", "message_id": result["messages"][0]["id"]})

# Slack
slack = SlackTool()  # reads SLACK_BOT_TOKEN

slack.call({
    "operation": "post_message",
    "channel": "#general",
    "text": "Deployment complete! :white_check_mark:",
})

channels = slack.call({"operation": "list_channels"})`})]}),(0,j.jsxs)(ki,{id:`external-api-tools`,title:`External API Tools`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Production-ready connectors for weather, news, and financial data APIs.`}),(0,j.jsx)(`div`,{style:Ei,children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`th`,{style:F,children:`Class`}),(0,j.jsx)(`th`,{style:F,children:`API Key Env Var`}),(0,j.jsx)(`th`,{style:F,children:`Data Source`})]})}),(0,j.jsxs)(`tbody`,{children:[(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:L,children:`OpenWeatherMapTool`}),(0,j.jsx)(`td`,{style:I,children:(0,j.jsx)(`code`,{style:{fontFamily:`monospace`},children:`OPENWEATHERMAP_API_KEY`})}),(0,j.jsx)(`td`,{style:I,children:`OpenWeatherMap — current conditions by city`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:L,children:`NewsApiTool`}),(0,j.jsx)(`td`,{style:I,children:(0,j.jsx)(`code`,{style:{fontFamily:`monospace`},children:`NEWS_API_KEY`})}),(0,j.jsx)(`td`,{style:I,children:`NewsAPI.org — headlines and article search`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:Di,children:`AlphaVantageTool`}),(0,j.jsx)(`td`,{style:R,children:(0,j.jsx)(`code`,{style:{fontFamily:`monospace`},children:`ALPHA_VANTAGE_API_KEY`})}),(0,j.jsx)(`td`,{style:R,children:`Alpha Vantage — stocks, forex, crypto`})]})]})]})}),(0,j.jsx)(N,{python:`from flowgentra_ai.tools import OpenWeatherMapTool, NewsApiTool, AlphaVantageTool

# Weather
weather = OpenWeatherMapTool()  # reads OPENWEATHERMAP_API_KEY
result = weather.call({"city": "Tokyo"})
# {"city": "Tokyo", "temperature": 18.5, "feels_like": 17.2,
#  "humidity": 65, "description": "clear sky", "wind_speed": 3.1}

# News
news = NewsApiTool()  # reads NEWS_API_KEY
result = news.call({"query": "artificial intelligence", "page_size": 5})
# {"total_results": 1234,
#  "articles": [{"title": "...", "source": "BBC", "url": "...", "publishedAt": "..."}, ...]}

# Finance — stock quote
alpha = AlphaVantageTool()  # reads ALPHA_VANTAGE_API_KEY
result = alpha.call({
    "function": "GLOBAL_QUOTE",
    "symbol": "NVDA",
})

# Crypto exchange rate
result = alpha.call({
    "function": "CURRENCY_EXCHANGE_RATE",
    "params": {"from_currency": "BTC", "to_currency": "USD"},
})`})]}),(0,j.jsxs)(ki,{id:`human-tools`,title:`Human-in-the-Loop`,children:[(0,j.jsxs)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:[(0,j.jsx)(`code`,{style:{fontFamily:`monospace`,color:`#79c0ff`},children:`HumanInputTool`}),` pauses agent execution and reads a line from stdin. Use it when an agent needs human approval or clarification before continuing.`]}),(0,j.jsx)(N,{python:`from flowgentra_ai.tools import HumanInputTool, ToolRegistry

human = HumanInputTool()

# Standalone call
result = human.call({"prompt": "Approve deployment to production? (yes/no): "})
print(result)  # {"input": "yes"}

# Inside an agent graph — the tool blocks until the user types a response
registry = ToolRegistry([HumanInputTool(), CalculatorTool()])
tool_node = create_tool_node(registry)`})]})]})}function ki({id:e,title:t,children:n}){return(0,j.jsxs)(`section`,{id:e,style:{marginBottom:48},children:[(0,j.jsx)(`h2`,{style:{fontSize:`1.5rem`,fontWeight:600,color:`#e6edf3`,marginBottom:16,marginTop:0},children:t}),n]})}var Ai=[{id:`what-is-mcp`,label:`What is MCP?`},{id:`when-to-use-mcp`,label:`When to Use MCP`},{id:`connection-types`,label:`Connection Types`},{id:`creating-a-client`,label:`Creating a Client`},{id:`discovering-tools`,label:`Discovering Tools`},{id:`calling-tools`,label:`Calling Tools`},{id:`authentication`,label:`Authentication`},{id:`connection-settings`,label:`Connection Settings`},{id:`tool-filtering`,label:`Tool Filtering & Namespaces`},{id:`resources`,label:`Resources`},{id:`prompts`,label:`Prompts`},{id:`multiple-clients`,label:`Multiple Clients`},{id:`agent-integration`,label:`Agent Integration`},{id:`yaml-config`,label:`YAML Configuration`},{id:`api-reference`,label:`API Reference`},{id:`best-practices`,label:`Best Practices`}];function ji(){return M(),(0,j.jsxs)(P,{anchors:Ai,children:[(0,j.jsx)(`h1`,{style:{fontSize:`2rem`,fontWeight:700,color:`#e6edf3`,letterSpacing:`-0.02em`,marginBottom:8,marginTop:0},children:`Model Context Protocol (MCP)`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:40,lineHeight:1.7},children:`Connect your agents to external tools and services through the Model Context Protocol. MCP enables seamless integration with web APIs, local processes, and containerized services.`}),(0,j.jsxs)(Mi,{id:`what-is-mcp`,title:`What is MCP?`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`The Model Context Protocol (MCP) is a standard for connecting AI agents to external tools and data sources. It provides a unified interface for accessing web services, databases, local applications, and specialized tools.`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Unlike local tools (functions defined in your code), MCP tools are external services that run independently. This allows you to:`}),(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,marginBottom:16,paddingLeft:20},children:[(0,j.jsx)(`li`,{children:`Access web APIs and cloud services`}),(0,j.jsx)(`li`,{children:`Integrate with existing infrastructure`}),(0,j.jsx)(`li`,{children:`Use specialized tools without rewriting them`}),(0,j.jsx)(`li`,{children:`Scale tool execution across different environments`}),(0,j.jsx)(`li`,{children:`Maintain tool isolation and security boundaries`})]})]}),(0,j.jsxs)(Mi,{id:`when-to-use-mcp`,title:`When to Use MCP`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Choose MCP when you need to connect to external systems or services:`}),(0,j.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(300px, 1fr))`,gap:`16px`,marginBottom:20},children:[(0,j.jsxs)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`},children:[(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12},children:`Use MCP for:`}),(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,margin:0,paddingLeft:20},children:[(0,j.jsx)(`li`,{children:`Web API integrations`}),(0,j.jsx)(`li`,{children:`Database connections`}),(0,j.jsx)(`li`,{children:`Cloud service APIs`}),(0,j.jsx)(`li`,{children:`Specialized external tools`}),(0,j.jsx)(`li`,{children:`Legacy system integration`})]})]}),(0,j.jsxs)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`},children:[(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12},children:`Use Local Tools for:`}),(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,margin:0,paddingLeft:20},children:[(0,j.jsx)(`li`,{children:`Simple calculations`}),(0,j.jsx)(`li`,{children:`Data transformations`}),(0,j.jsx)(`li`,{children:`Business logic`}),(0,j.jsx)(`li`,{children:`Code-defined functions`}),(0,j.jsx)(`li`,{children:`Fast, lightweight operations`})]})]})]})]}),(0,j.jsxs)(Mi,{id:`connection-types`,title:`Connection Types`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`MCP supports three connection types for different deployment scenarios:`}),(0,j.jsxs)(`div`,{style:{marginBottom:20},children:[(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12},children:`SSE (Server-Sent Events)`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:12},children:`Connect to HTTP-based MCP servers. Ideal for web services and cloud APIs.`}),(0,j.jsx)(N,{rust:`use flowgentra_ai::core::mcp::MCPConfig;

let config = MCPConfig::builder()
    .name("web_search")
    .sse("http://api.example.com/mcp")
    .timeout_secs(30)
    .build()?;`,python:`from flowgentra_ai.mcp import MCPConfig

config = MCPConfig.sse(
    url="http://api.example.com/mcp",
    name="web_search"
)`})]}),(0,j.jsxs)(`div`,{style:{marginBottom:20},children:[(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12},children:`Stdio (Standard I/O)`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:12},children:`Launch a local process and communicate via stdin/stdout. Perfect for CLI tools and local services.`}),(0,j.jsx)(N,{rust:`let config = MCPConfig::builder()
    .name("filesystem")
    .stdio("npx")
    .args(vec![
        "-y".into(),
        "@modelcontextprotocol/server-filesystem".into(),
        "/tmp".into(),
    ])
    .timeout_secs(10)
    .build()?;`,python:`config = MCPConfig.stdio(
    command="npx",
    args=["-y", "@modelcontextprotocol/server-filesystem", "/tmp"],
    name="filesystem"
)`})]}),(0,j.jsxs)(`div`,{style:{marginBottom:20},children:[(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12},children:`Docker`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:12},children:`Run a tool in an isolated Docker container. Great for security, reproducibility, and complex dependencies.`}),(0,j.jsx)(N,{rust:`let config = MCPConfig::builder()
    .name("container_tool")
    .docker("my-org/tool-image:latest")
    .timeout_secs(60)
    .build()?;`,python:`config = MCPConfig.docker(
    image="my-org/tool-image:latest",
    name="container_tool"
)`})]})]}),(0,j.jsxs)(Mi,{id:`creating-a-client`,title:`Creating a Client`,children:[(0,j.jsxs)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:[`Use `,(0,j.jsx)(`code`,{style:{color:`#58a6ff`},children:`MCPClientFactory::create`}),` (Rust) or `,(0,j.jsx)(`code`,{style:{color:`#58a6ff`},children:`create_client()`}),` (Python) to instantiate a client. The client is automatically wrapped with retry logic and tool-list caching.`]}),(0,j.jsx)(N,{rust:`use flowgentra_ai::core::mcp::{MCPClientFactory, MCPConfig};

let config = MCPConfig::builder()
    .name("my-server")
    .sse("http://localhost:8080/sse")
    .build()?;

let client = MCPClientFactory::create(config)?;

// Gracefully shut down when done
client.shutdown().await?;`,python:`from flowgentra_ai.mcp import MCPConfig, create_client

config = MCPConfig.sse("http://localhost:8080/sse", name="my-server")
client = create_client(config)

# Always shut down when done (stops processes/containers for stdio/docker)
client.shutdown()`})]}),(0,j.jsxs)(Mi,{id:`discovering-tools`,title:`Discovering Tools`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`List available tools and inspect their schemas before calling them:`}),(0,j.jsx)(N,{rust:`// Initialize MCP handshake (optional — called automatically on first use)
let version = client.initialize().await?;

// List all tools
let tools = client.list_tools().await?;
for tool in &tools {
    println!("{}: {:?}", tool.name, tool.description);
    println!("  Schema: {}", tool.input_schema);
}

// Health check
if client.health_check().await? {
    println!("Server is up");
}`,python:`# Initialize MCP handshake (optional)
version = client.initialize()
print(f"Protocol: {version}")

# List all tools
tools = client.list_tools()
for tool in tools:
    print(f"{tool.name}: {tool.description}")
    print(f"  Input schema: {tool.input_schema}")

# Health check
if client.health_check():
    print("Server is up")`})]}),(0,j.jsxs)(Mi,{id:`calling-tools`,title:`Calling Tools`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Call tools individually or in parallel for independent operations:`}),(0,j.jsx)(N,{rust:`use serde_json::json;

// Call a single tool
let result = client.call_tool(
    "search",
    json!({ "query": "python asyncio", "max_results": 5 })
).await?;
println!("{}", result);

// Call multiple tools in parallel
let results = client.call_tools_parallel(vec![
    ("search".into(), json!({ "query": "MCP protocol" })),
    ("fetch".into(),  json!({ "url": "https://example.com" })),
]).await?;
for r in results {
    println!("{}", r);
}`,python:`# Call a single tool
result = client.call_tool("search", {"query": "python asyncio", "max_results": 5})
print(result)  # Python dict/list/str depending on the tool

# Call multiple tools in parallel
results = client.call_tools_parallel([
    ("search", {"query": "MCP protocol"}),
    ("fetch",  {"url": "https://example.com"}),
])
for r in results:
    print(r)`})]}),(0,j.jsxs)(Mi,{id:`authentication`,title:`Authentication`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Attach authentication credentials to any connection:`}),(0,j.jsxs)(`div`,{style:{marginBottom:20},children:[(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1rem`,fontWeight:600,marginBottom:8},children:`Bearer Token`}),(0,j.jsx)(N,{rust:`let config = MCPConfig::builder()
    .name("api")
    .sse("http://api.example.com/mcp")
    .auth(MCPAuth {
        auth_type: "bearer".into(),
        credentials: [("token".into(), "my-api-token".into())].into(),
    })
    .build()?;`,python:`from flowgentra_ai.mcp import MCPAuth

auth = MCPAuth("bearer", {"token": "my-api-token"})
config = MCPConfig.sse("http://api.example.com/mcp", name="api")                   .with_auth(auth)`})]}),(0,j.jsxs)(`div`,{style:{marginBottom:20},children:[(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1rem`,fontWeight:600,marginBottom:8},children:`API Key`}),(0,j.jsx)(N,{rust:`// In config.yaml
auth:
  type: api_key
  header: "X-API-Key"
  key: "\${API_KEY}"`,python:`auth = MCPAuth("api_key", {"header": "X-API-Key", "key": "abc123"})
config = MCPConfig.sse("http://api.example.com/mcp", name="api")                   .with_auth(auth)`})]}),(0,j.jsxs)(`div`,{style:{marginBottom:20},children:[(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1rem`,fontWeight:600,marginBottom:8},children:`Basic Auth`}),(0,j.jsx)(N,{rust:`// In config.yaml
auth:
  type: basic
  username: "\${USER}"
  password: "\${PASS}"`,python:`auth = MCPAuth("basic", {"username": "user", "password": "pass"})
config = MCPConfig.sse("http://api.example.com/mcp", name="api")                   .with_auth(auth)`})]})]}),(0,j.jsxs)(Mi,{id:`connection-settings`,title:`Connection Settings`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Fine-tune timeouts, retries, and environment variables:`}),(0,j.jsx)(N,{rust:`let config = MCPConfig::builder()
    .name("tool")
    .stdio("python")
    .args(vec!["-m".into(), "my_tool".into()])
    .timeout_secs(30)        // general fallback
    .container_name("my-tool")
    .build()?;

// More settings are available via MCPConnectionSettings directly
// in advanced configurations or config.yaml`,python:`from flowgentra_ai.mcp import MCPConnectionSettings

settings = MCPConnectionSettings(
    timeout=30,           # general fallback timeout (seconds)
    connect_timeout=5,    # timeout for establishing connection
    call_timeout=60,      # timeout per tool call
    max_retries=3,        # retry failed calls up to N times
    working_dir="/app",   # stdio: working directory
    env_vars={"API_KEY": "secret"},  # stdio/docker: env vars
    container_name="my-tool",        # docker: container name
    port=8080,                       # docker: port inside container
    host_port=9090,                  # docker: port on host
)

config = MCPConfig.stdio("python", ["-m", "my_tool"], name="tool")                   .with_connection_settings(settings)`})]}),(0,j.jsxs)(Mi,{id:`tool-filtering`,title:`Tool Filtering & Namespaces`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`When using multiple MCP servers, use namespaces and filters to avoid name collisions and limit exposure:`}),(0,j.jsx)(N,{rust:`// Add namespace prefix: tools become "search.query", "search.fetch", etc.
let config = MCPConfig::builder()
    .name("search")
    .sse("http://search.example.com/mcp")
    .namespace("search")
    .build()?;

// Only expose specific tools
let config = MCPConfig::builder()
    .name("api")
    .sse("http://api.example.com/mcp")
    .tool_include(vec!["search".into(), "fetch".into()])
    .build()?;

// Hide specific tools
let config = MCPConfig::builder()
    .name("api")
    .sse("http://api.example.com/mcp")
    .tool_exclude(vec!["dangerous_tool".into()])
    .build()?;`,python:`# Add namespace prefix: tools become "search.query", "search.fetch", etc.
config = MCPConfig.sse("http://search.example.com/mcp", name="search")                   .with_namespace("search")

# Only expose specific tools
config = MCPConfig.sse("http://api.example.com/mcp", name="api")                   .with_tool_include(["search", "fetch"])

# Hide specific tools
config = MCPConfig.sse("http://api.example.com/mcp", name="api")                   .with_tool_exclude(["dangerous_tool"])`})]}),(0,j.jsxs)(Mi,{id:`resources`,title:`Resources`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Some MCP servers expose resources — files, database records, or other data sources — that can be read directly:`}),(0,j.jsx)(N,{rust:`// List available resources
let resources = client.list_resources().await?;
for r in &resources {
    println!("{} ({:?}): {:?}", r.uri, r.mime_type, r.description);
}

// Read a resource by URI
let content = client.read_resource("file:///path/to/document.txt").await?;
println!("{}", content.text.unwrap_or_default());`,python:`# List available resources
resources = client.list_resources()
for r in resources:
    print(f"{r.uri} ({r.mime_type}): {r.description}")

# Read a resource by URI
content = client.read_resource("file:///path/to/document.txt")
print(content.text)       # text content
print(content.blob)       # base64 blob (for binary files)
print(content.mime_type)  # e.g. "text/plain"`})]}),(0,j.jsxs)(Mi,{id:`prompts`,title:`Prompts`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Some MCP servers expose reusable prompt templates that can be rendered with arguments:`}),(0,j.jsx)(N,{rust:`// List prompt templates
let prompts = client.list_prompts().await?;
for p in &prompts {
    println!("{}: {:?}", p.name, p.description);
    for arg in &p.arguments {
        println!("  {} (required={})", arg.name, arg.required);
    }
}

// Render a prompt with arguments
let result = client.get_prompt(
    "summarize",
    json!({ "text": "Long document content here..." })
).await?;
for msg in &result.messages {
    println!("{}: {}", msg.role, msg.content);
}`,python:`# List prompt templates
prompts = client.list_prompts()
for p in prompts:
    print(f"{p.name}: {p.description}")
    for arg in p.arguments:
        print(f"  {arg.name} (required={arg.required}): {arg.description}")

# Render a prompt with arguments
result = client.get_prompt("summarize", {"text": "Long document content here..."})
for message in result.messages:
    print(f"{message.role}: {message.content}")`})]}),(0,j.jsxs)(Mi,{id:`multiple-clients`,title:`Multiple Clients`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Combine tools from multiple MCP servers into a single unified list:`}),(0,j.jsx)(N,{rust:`use flowgentra_ai::core::mcp::{merge_tool_lists, MCPClientFactory};

let client1 = MCPClientFactory::create(
    MCPConfig::builder().name("s1").sse("http://server1/sse").build()?
)?;
let client2 = MCPClientFactory::create(
    MCPConfig::builder().name("s2").stdio("python").args(vec!["-m".into(), "tool".into()]).build()?
)?;

let all_tools = merge_tool_lists(&[client1, client2]).await?;
println!("Total tools: {}", all_tools.len());`,python:`from flowgentra_ai.mcp import MCPConfig, create_client, merge_tool_lists

client1 = create_client(MCPConfig.sse("http://server1/sse", name="s1"))
client2 = create_client(MCPConfig.stdio("python", ["-m", "tool"], name="s2"))

all_tools = merge_tool_lists([client1, client2])
print(f"Total tools: {len(all_tools)}")`})]}),(0,j.jsxs)(Mi,{id:`agent-integration`,title:`Agent Integration`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Use MCP clients directly inside StateGraph nodes:`}),(0,j.jsx)(N,{rust:`use flowgentra_ai::prelude::*;
use flowgentra_ai::core::mcp::{MCPClientFactory, MCPConfig};
use serde_json::json;
use std::sync::Arc;

#[derive(State, Default, Clone)]
struct AgentState {
    query: String,
    result: Option<serde_json::Value>,
}

// Create client once at startup
let mcp = MCPClientFactory::create(
    MCPConfig::builder()
        .name("tools")
        .sse("http://localhost:8080/sse")
        .build()?
)?;

// Clone the Arc for the closure
let mcp_search = Arc::clone(&mcp);
let graph = StateGraph::<AgentState>::builder()
    .add_node("search", move |mut state: AgentState| {
        let mcp = Arc::clone(&mcp_search);
        async move {
            let result = mcp.call_tool("search", json!({ "query": state.query })).await?;
            state.result = Some(result);
            Ok(state)
        }
    })
    .set_entry("search")
    .set_finish("search")
    .build()?;`,python:`from flowgentra_ai.graph import StateGraph, END
from flowgentra_ai.mcp import MCPConfig, create_client
from typing import TypedDict, Any

class AgentState(TypedDict):
    query: str
    result: Any

# Create client once at startup — tool list is cached automatically
mcp_client = create_client(MCPConfig.sse("http://localhost:8080/sse", name="tools"))

def search_node(state: AgentState) -> AgentState:
    result = mcp_client.call_tool("search", {"query": state["query"]})
    return {"result": result}

builder = StateGraph(AgentState)
builder.add_node("search", search_node)
builder.set_entry_point("search")
builder.add_edge("search", END)

graph = builder.compile()
output = graph.invoke({"query": "hello world", "result": None})`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginTop:16,marginBottom:12},children:`Multi-tool agent using parallel calls:`}),(0,j.jsx)(N,{rust:`pub async fn research_node(mut state: ResearchState) -> Result<ResearchState> {
    let results = mcp.call_tools_parallel(vec![
        ("web_search".into(), json!({ "query": state.query })),
        ("news_search".into(), json!({ "query": state.query, "days": 7 })),
    ]).await?;

    state.web_results  = results[0].clone();
    state.news_results = results[1].clone();
    Ok(state)
}`,python:`def research_node(state: ResearchState) -> ResearchState:
    results = mcp_client.call_tools_parallel([
        ("web_search",  {"query": state["query"]}),
        ("news_search", {"query": state["query"], "days": 7}),
    ])
    return {
        "web_results":  results[0],
        "news_results": results[1],
    }`})]}),(0,j.jsxs)(Mi,{id:`yaml-config`,title:`YAML Configuration`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Configure MCP connections in your agent configuration file for config-driven agents:`}),(0,j.jsx)(N,{rust:`# config.yaml
graph:
  mcps:
    web_search:
      type: sse
      url: "http://api.example.com/search"
      timeout: 30
      auth:
        type: bearer
        token: "\${API_TOKEN}"

    calculator:
      type: stdio
      command: "python"
      args: ["-c", "import sys; exec(sys.stdin.read())"]
      timeout: 5

    data_processor:
      type: docker
      image: "myregistry.com/data-tools:latest"
      timeout: 120`,python:`# config.yaml
graph:
  mcps:
    web_search:
      type: sse
      url: "http://api.example.com/search"
      timeout: 30
      auth:
        type: bearer
        token: "\${API_TOKEN}"

    calculator:
      type: stdio
      command: "python"
      args: ["-c", "import sys; exec(sys.stdin.read())"]
      timeout: 5

    data_processor:
      type: docker
      image: "myregistry.com/data-tools:latest"
      timeout: 120`})]}),(0,j.jsxs)(Mi,{id:`api-reference`,title:`API Reference`,children:[(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12},children:`MCPConfig`}),(0,j.jsx)(Ni,{rows:[[`MCPConfig.sse(url, name=None)`,`Create SSE connection config`],[`MCPConfig.stdio(command, args=None, name=None)`,`Create Stdio connection config`],[`MCPConfig.docker(image, name=None)`,`Create Docker connection config`],[`.with_auth(auth)`,`Return copy with MCPAuth credentials attached`],[`.with_namespace(ns)`,`Return copy with tool namespace prefix (e.g. "search.query")`],[`.with_tool_include(tools)`,`Return copy that only exposes listed tool names`],[`.with_tool_exclude(tools)`,`Return copy that hides listed tool names`],[`.with_connection_settings(settings)`,`Return copy with custom MCPConnectionSettings`],[`.is_remote()`,`True for SSE connections`],[`.is_local()`,`True for Stdio/Docker connections`]]}),(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12,marginTop:24},children:`MCPClient`}),(0,j.jsx)(Ni,{rows:[[`initialize()`,`MCP protocol handshake — returns protocol version string`],[`list_tools() → list[MCPTool]`,`List all tools on the server (result is cached)`],[`call_tool(name, args) → Any`,`Call a tool with a dict of arguments`],[`call_tools_parallel(calls) → list[Any]`,`Call multiple tools in parallel, returns results in order`],[`health_check() → bool`,`Check if the server is reachable`],[`shutdown()`,`Gracefully stop the connection (subprocess / container)`],[`list_resources() → list[MCPResource]`,`List available resources from the server`],[`read_resource(uri) → MCPResourceContent`,`Read a resource by URI`],[`list_prompts() → list[MCPPrompt]`,`List prompt templates from the server`],[`get_prompt(name, args) → MCPPromptResult`,`Render a prompt template with arguments`]]}),(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12,marginTop:24},children:`Functions`}),(0,j.jsx)(Ni,{rows:[[`create_client(config) → MCPClient`,`Factory — creates the right client type, wrapped with retry + caching`],[`merge_tool_lists(clients) → list[MCPTool]`,`Merge tool lists from multiple MCPClient instances`]]}),(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12,marginTop:24},children:`Data Types`}),(0,j.jsx)(Ni,{rows:[[`MCPTool`,`name, description, input_schema`],[`MCPResource`,`uri, name, description, mime_type`],[`MCPResourceContent`,`uri, mime_type, text, blob`],[`MCPPrompt`,`name, description, arguments: list[MCPPromptArgument]`],[`MCPPromptArgument`,`name, description, required`],[`MCPPromptResult`,`description, messages: list[MCPPromptMessage]`],[`MCPPromptMessage`,`role, content`],[`MCPAuth`,`auth_type, credentials: dict[str, str]`],[`MCPConnectionSettings`,`timeout, connect_timeout, call_timeout, max_retries, env_vars, working_dir, port, host_port, container_name`],[`MCPConnectionType`,`Sse | Stdio | Docker — with .is_remote() / .is_local()`]]})]}),(0,j.jsxs)(Mi,{id:`best-practices`,title:`Best Practices`,children:[(0,j.jsxs)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20},children:[(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12},children:`🔧 Configuration`}),(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,margin:0,paddingLeft:20},children:[(0,j.jsx)(`li`,{children:`Use environment variables for credentials — never hard-code tokens`}),(0,j.jsxs)(`li`,{children:[`Set `,(0,j.jsx)(`code`,{style:{color:`#58a6ff`},children:`call_timeout`}),` separately from `,(0,j.jsx)(`code`,{style:{color:`#58a6ff`},children:`connect_timeout`}),` for better failure detection`]}),(0,j.jsx)(`li`,{children:`Use namespaces when combining tools from multiple servers`}),(0,j.jsxs)(`li`,{children:[`Use `,(0,j.jsx)(`code`,{style:{color:`#58a6ff`},children:`with_tool_include()`}),` to whitelist only what your agent needs`]})]})]}),(0,j.jsxs)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20},children:[(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12},children:`⚡ Performance`}),(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,margin:0,paddingLeft:20},children:[(0,j.jsxs)(`li`,{children:[`Create clients once at startup and reuse them — `,(0,j.jsx)(`code`,{style:{color:`#58a6ff`},children:`list_tools()`}),` results are cached automatically`]}),(0,j.jsxs)(`li`,{children:[`Use `,(0,j.jsx)(`code`,{style:{color:`#58a6ff`},children:`call_tools_parallel()`}),` for independent tool calls instead of sequential calls`]}),(0,j.jsxs)(`li`,{children:[`Set `,(0,j.jsx)(`code`,{style:{color:`#58a6ff`},children:`max_retries`}),` to handle transient network failures without extra code`]})]})]}),(0,j.jsxs)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20},children:[(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12},children:`🔒 Security`}),(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,margin:0,paddingLeft:20},children:[(0,j.jsx)(`li`,{children:`Use Docker connections for untrusted or third-party tools`}),(0,j.jsx)(`li`,{children:`Validate tool results before passing them to an LLM`}),(0,j.jsxs)(`li`,{children:[`Use `,(0,j.jsx)(`code`,{style:{color:`#58a6ff`},children:`with_tool_include()`}),` to whitelist only tools your agent actually needs`]}),(0,j.jsx)(`li`,{children:`Log MCP tool usage for audit trails`})]})]}),(0,j.jsxs)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`},children:[(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12},children:`🧹 Resource Management`}),(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,margin:0,paddingLeft:20},children:[(0,j.jsxs)(`li`,{children:[`Always call `,(0,j.jsx)(`code`,{style:{color:`#58a6ff`},children:`client.shutdown()`}),` when done, especially for Stdio and Docker clients`]}),(0,j.jsx)(`li`,{children:`Use try/finally to guarantee cleanup even on errors`})]}),(0,j.jsx)(N,{rust:`// Rust: Drop/shutdown handled automatically in most cases
// For explicit cleanup:
client.shutdown().await?;`,python:`client = create_client(config)
try:
    result = client.call_tool("my_tool", {"arg": "value"})
finally:
    client.shutdown()`})]})]})]})}function Mi({id:e,title:t,children:n}){return(0,j.jsxs)(`section`,{id:e,style:{marginBottom:40},children:[(0,j.jsx)(`h2`,{style:{fontSize:`1.5rem`,fontWeight:600,color:`#e6edf3`,marginBottom:16,scrollMarginTop:`80px`},children:t}),n]})}function Ni({rows:e}){return(0,j.jsx)(`div`,{style:{overflowX:`auto`,marginBottom:20},children:(0,j.jsx)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,fontSize:`0.9rem`},children:(0,j.jsx)(`tbody`,{children:e.map(([e,t],n)=>(0,j.jsxs)(`tr`,{style:{borderBottom:`1px solid #21262d`},children:[(0,j.jsx)(`td`,{style:{padding:`8px 12px`,color:`#58a6ff`,fontFamily:`monospace`,whiteSpace:`nowrap`,verticalAlign:`top`},children:e}),(0,j.jsx)(`td`,{style:{padding:`8px 12px`,color:`#8b949e`},children:t})]},n))})})})}var z=[{id:`error-types`,label:`Error Types`},{id:`retry-nodes`,label:`Retry Nodes`},{id:`timeout-nodes`,label:`Timeout Nodes`},{id:`fallback-nodes`,label:`Fallback Strategies`},{id:`error-recovery`,label:`Error Recovery Patterns`},{id:`monitoring`,label:`Error Monitoring`}];function B(){let{language:e}=M();return(0,j.jsxs)(P,{anchors:z,children:[(0,j.jsx)(`h1`,{style:{fontSize:`2rem`,fontWeight:700,color:`#e6edf3`,letterSpacing:`-0.02em`,marginBottom:8,marginTop:0},children:`Error Handling & Resilience`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:40,lineHeight:1.7},children:`Production agents must handle failures gracefully. Flowgentra provides comprehensive error handling with retries, timeouts, fallbacks, and recovery strategies.`}),(0,j.jsxs)(Pi,{id:`error-types`,title:`Error Types`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Flowgentra categorizes errors to enable appropriate handling strategies.`}),(0,j.jsx)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20},children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,color:`#8b949e`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Error Type`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Examples`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Handling Strategy`})]})}),(0,j.jsxs)(`tbody`,{children:[(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Transient`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Network timeouts, rate limits`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Retry with backoff`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Permanent`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Invalid API keys, bad requests`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Fail fast, don't retry`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Recoverable`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Service temporarily down`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Retry with circuit breaker`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`},children:`Logic Errors`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`Invalid state, assertion failures`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`Fallback to alternative path`})]})]})]})})]}),(0,j.jsxs)(Pi,{id:`retry-nodes`,title:`Retry Nodes`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Automatically retry failed operations with exponential backoff.`}),(0,j.jsx)(N,{rust:`use flowgentra_ai::nodes::{RetryNode, RetryConfig};
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
graph = builder.compile()`}),(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`RetryConfig Parameters`}),(0,j.jsx)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20},children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,color:`#8b949e`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Parameter`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Type`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Default`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Description`})]})}),(0,j.jsxs)(`tbody`,{children:[(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`max_attempts`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`int`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`3`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Maximum number of retry attempts`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`initial_delay`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`float`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`0.1`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Initial delay between retries (seconds)`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`max_delay`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`float`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`10.0`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Maximum delay between retries (seconds)`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`backoff_multiplier`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`float`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`2.0`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Multiplier for exponential backoff`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,fontFamily:`monospace`,fontSize:`0.9em`},children:`retry_on`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`function`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`All errors`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`Function to determine which errors to retry`})]})]})]})})]}),(0,j.jsxs)(Pi,{id:`timeout-nodes`,title:`Timeout Nodes`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Prevent slow operations from blocking your workflow indefinitely.`}),(0,j.jsx)(N,{rust:`use flowgentra_ai::nodes::{TimeoutNode, TimeoutConfig};
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
graph = builder.compile()`}),(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`TimeoutConfig Parameters`}),(0,j.jsx)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20},children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,color:`#8b949e`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Parameter`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Type`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Default`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Description`})]})}),(0,j.jsxs)(`tbody`,{children:[(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`timeout`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`float`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`30.0`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Maximum time to wait before timing out (seconds)`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,fontFamily:`monospace`,fontSize:`0.9em`},children:`on_timeout`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`function`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`None`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`Function called when timeout occurs, receives state and returns modified state`})]})]})]})})]}),(0,j.jsxs)(Pi,{id:`fallback-nodes`,title:`Fallback Strategies`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`When primary operations fail, try alternative approaches.`}),(0,j.jsx)(N,{rust:`use flowgentra_ai::nodes::FallbackNode;

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
graph = builder.compile()`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Fallbacks are especially useful for external API calls where you have multiple providers or cached alternatives.`})]}),(0,j.jsxs)(Pi,{id:`error-recovery`,title:`Error Recovery Patterns`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Design your graphs to handle errors gracefully and recover when possible.`}),(0,j.jsx)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Circuit Breaker Pattern`}),(0,j.jsx)(N,{python:`class CircuitBreakerNode:
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
            }`})]}),(0,j.jsxs)(Pi,{id:`monitoring`,title:`Error Monitoring`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Track errors and performance to improve your system's reliability.`}),(0,j.jsx)(N,{rust:`use flowgentra_ai::observability::{ErrorTracker, MetricsCollector};

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
print(f"Average execution time: {perf.avg_execution_time_ms}ms")`}),(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`ErrorTracker Methods`}),(0,j.jsx)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20},children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,color:`#8b949e`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Method`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Parameters`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Returns`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Description`})]})}),(0,j.jsxs)(`tbody`,{children:[(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`get_stats()`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`None`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`ErrorStats`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Returns error statistics including total errors and errors by type`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`record_error(error)`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`error: Exception`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`None`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Records an error for tracking and analysis`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,fontFamily:`monospace`,fontSize:`0.9em`},children:`clear_stats()`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`None`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`None`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`Clears all accumulated error statistics`})]})]})]})}),(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`MetricsCollector Methods`}),(0,j.jsx)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20},children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,color:`#8b949e`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Method`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Parameters`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Returns`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Description`})]})}),(0,j.jsxs)(`tbody`,{children:[(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`get_performance_stats()`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`None`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`PerformanceStats`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Returns performance metrics including execution times and throughput`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`record_execution_time(node_name, duration)`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`node_name: str, duration: float`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`None`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Records execution time for a specific node`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,fontFamily:`monospace`,fontSize:`0.9em`},children:`reset_metrics()`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`None`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`None`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`Resets all performance metrics to initial state`})]})]})]})}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Use error tracking and metrics to identify failure patterns and optimize your error handling strategies.`})]})]})}function Pi({id:e,title:t,children:n}){return(0,j.jsxs)(`section`,{id:e,style:{marginBottom:48},children:[(0,j.jsx)(`h2`,{style:{fontSize:`1.5rem`,fontWeight:600,color:`#e6edf3`,marginBottom:16,marginTop:0},children:t}),n]})}var Fi=[{id:`config-files`,label:`Configuration Files`},{id:`environment-variables`,label:`Environment Variables`},{id:`yaml-schema`,label:`YAML Schema Reference`},{id:`config-validation`,label:`Configuration Validation`},{id:`runtime-config`,label:`Runtime Configuration`},{id:`config-patterns`,label:`Configuration Patterns`}];function Ii(){let{language:e}=M();return(0,j.jsxs)(P,{anchors:Fi,children:[(0,j.jsx)(`h1`,{style:{fontSize:`2rem`,fontWeight:700,color:`#e6edf3`,letterSpacing:`-0.02em`,marginBottom:8,marginTop:0},children:`Configuration Management`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:40,lineHeight:1.7},children:`Configuration is how you customize Flowgentra agents for different environments and use cases. Learn how to configure LLMs, tools, memory, and behavior through YAML files and environment variables.`}),(0,j.jsxs)(Li,{id:`config-files`,title:`Configuration Files`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Flowgentra uses YAML for declarative configuration. This separates code from configuration, making it easy to deploy the same agent with different settings.`}),(0,j.jsx)(N,{yaml:`# agent.yaml
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
  log_level: INFO`}),(0,j.jsxs)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:[`Use `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`from_config_path("agent.yaml")`}),` to load this configuration.`]}),(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Agent Configuration Methods`}),(0,j.jsx)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20},children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,color:`#8b949e`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Method`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Parameters`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Returns`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Description`})]})}),(0,j.jsxs)(`tbody`,{children:[(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`from_config_path(path)`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`path: str`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Agent`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Loads and validates agent configuration from YAML file`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`from_config_dict(config)`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`config: dict`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Agent`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Creates agent from configuration dictionary`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,fontFamily:`monospace`,fontSize:`0.9em`},children:`validate_config(config)`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`config: dict`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`bool`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`Validates configuration without creating agent instance`})]})]})]})})]}),(0,j.jsxs)(Li,{id:`environment-variables`,title:`Environment Variables`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Keep secrets and environment-specific values out of your config files using variable substitution.`}),(0,j.jsx)(N,{yaml:`# config.yaml
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
export API_VERSION="2"`}),(0,j.jsxs)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:[`Variable syntax: `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`$VAR_NAME`}),` or `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`$VAR_NAME:-default`}),` for defaults.`]})]}),(0,j.jsxs)(Li,{id:`yaml-schema`,title:`YAML Schema Reference`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Complete reference for all configuration options.`}),(0,j.jsx)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`LLM Configuration`}),(0,j.jsx)(N,{yaml:`llm:
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
      condition: "state.get('score', 0) > 0.8"      # Optional, conditional routing`})]}),(0,j.jsxs)(Li,{id:`config-validation`,title:`Configuration Validation`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Flowgentra validates your configuration at load time to catch errors early.`}),(0,j.jsx)(N,{rust:`use flowgentra_ai::agent::Agent;

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
    exit(1)`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Common validation checks include:`}),(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,lineHeight:1.7,paddingLeft:20,marginBottom:16},children:[(0,j.jsx)(`li`,{children:`LLM provider and model compatibility`}),(0,j.jsx)(`li`,{children:`Handler function existence`}),(0,j.jsx)(`li`,{children:`Graph connectivity (no orphaned nodes)`}),(0,j.jsx)(`li`,{children:`Tool configuration validity`}),(0,j.jsx)(`li`,{children:`Environment variable resolution`})]})]}),(0,j.jsxs)(Li,{id:`runtime-config`,title:`Runtime Configuration`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Some settings can be changed at runtime without reloading the entire agent.`}),(0,j.jsx)(N,{python:`# Load agent
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

# The agent adapts to these changes immediately`}),(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Runtime Configuration Methods`}),(0,j.jsx)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20},children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,color:`#8b949e`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Method`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Parameters`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Returns`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Description`})]})}),(0,j.jsxs)(`tbody`,{children:[(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`update_llm_config(config)`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`config: dict`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`None`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Updates LLM configuration (temperature, model, etc.)`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`add_tool(tool_config)`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`tool_config: dict`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`None`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Adds a new tool to the agent at runtime`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`update_memory_config(config)`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`config: dict`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`None`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Updates memory configuration settings`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,fontFamily:`monospace`,fontSize:`0.9em`},children:`reload_config()`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`None`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`None`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`Reloads configuration from original source file`})]})]})]})}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Runtime configuration is useful for A/B testing, gradual rollouts, and user-specific customization.`})]}),(0,j.jsxs)(Li,{id:`config-patterns`,title:`Configuration Patterns`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Best practices for organizing and managing configurations.`}),(0,j.jsx)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Environment-specific Configs`}),(0,j.jsx)(N,{yaml:`# config.base.yaml (shared settings)
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
    yaml.dump(config.to_dict(), f)`}),(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`ConfigBuilder Methods`}),(0,j.jsx)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20},children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,color:`#8b949e`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Method`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Parameters`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Returns`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Description`})]})}),(0,j.jsxs)(`tbody`,{children:[(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`name(name)`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`name: str`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`ConfigBuilder`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Sets the agent name`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`llm(**kwargs)`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`provider, model, temperature, etc.`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`ConfigBuilder`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Configures the LLM settings`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`tool(name, **kwargs)`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`name: str, type: str, config: dict`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`ConfigBuilder`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Adds a tool configuration`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`node(name, **kwargs)`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`name: str, handler: str, config: dict`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`ConfigBuilder`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Adds a graph node configuration`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`,fontSize:`0.9em`},children:`edge(from_node, to_node, **kwargs)`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`from_node: str, to_node: str, condition: str`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`ConfigBuilder`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Adds an edge between nodes`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,fontFamily:`monospace`,fontSize:`0.9em`},children:`build()`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`None`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`Config`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`Builds the final configuration object`})]})]})]})})]})]})}function Li({id:e,title:t,children:n}){return(0,j.jsxs)(`section`,{id:e,style:{marginBottom:48},children:[(0,j.jsx)(`h2`,{style:{fontSize:`1.5rem`,fontWeight:600,color:`#e6edf3`,marginBottom:16,marginTop:0},children:t}),n]})}var Ri=[{id:`overview`,label:`Overview`},{id:`supported-formats`,label:`Supported Formats`},{id:`loading-single`,label:`Loading Single Documents`},{id:`loading-directories`,label:`Loading Directories`},{id:`ingestion-pipeline`,label:`Ingestion Pipeline`},{id:`pdf-processing`,label:`PDF Processing`},{id:`custom-loaders`,label:`Custom Loaders`},{id:`error-handling`,label:`Error Handling`},{id:`best-practices`,label:`Best Practices`}];function zi(){let{language:e}=M();return(0,j.jsxs)(P,{anchors:Ri,children:[(0,j.jsx)(`h1`,{style:{fontSize:`2rem`,fontWeight:700,color:`#e6edf3`,letterSpacing:`-0.02em`,marginBottom:8,marginTop:0},children:`Document Loading`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:40,lineHeight:1.7},children:`Flowgentra can load documents from various sources and formats, automatically extracting text content and metadata for use in RAG systems.`}),(0,j.jsx)(Bi,{id:`overview`,title:`Overview`,children:(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Document loading is the first step in building a RAG system. Flowgentra provides comprehensive support for loading documents from files, directories, and various formats with automatic content extraction and metadata preservation.`})}),(0,j.jsxs)(Bi,{id:`supported-formats`,title:`Supported Formats`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Flowgentra supports loading documents from:`}),(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,marginBottom:16,paddingLeft:`20px`},children:[(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Plain text`}),` (.txt) - Direct text loading`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Markdown`}),` (.md) - Preserves structure and formatting`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`HTML`}),` (.html) - Strips tags, preserves text content`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`PDF`}),` (.pdf) - Extracts text content from PDF documents`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`JSON`}),` (.json) - Structured data loading`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`CSV`}),` (.csv) - Tabular data processing`]})]})]}),(0,j.jsx)(Bi,{id:`loading-single`,title:`Loading Single Documents`,children:(0,j.jsx)(N,{rust:`use flowgentra_ai::data::load_document;
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
print(f"Author: {doc.metadata.get('author')}")`})}),(0,j.jsxs)(Bi,{id:`loading-directories`,title:`Loading Directories`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Load all documents from a directory recursively:`}),(0,j.jsx)(N,{rust:`use flowgentra_ai::data::load_directory;

let documents = load_directory("./docs")?;
for doc in documents {
    println!("Loaded: {} ({})", doc.filename, doc.file_type);
}`,python:`from flowgentra_ai.document_loaders import load_directory

# Load all documents from directory
documents = load_directory("./docs")

for doc in documents:
    print(f"Loaded: {doc.filename} ({doc.file_type})")
    print(f"Content preview: {doc.content[:100]}...")
    print(f"Metadata: {doc.metadata}")`})]}),(0,j.jsxs)(Bi,{id:`ingestion-pipeline`,title:`Ingestion Pipeline`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`For production use, use the ingestion pipeline which provides progress tracking and error handling:`}),(0,j.jsx)(N,{python:`from flowgentra_ai.document_loaders import IngestionPipeline

# Create pipeline
pipeline = IngestionPipeline()

# Ingest documents with progress tracking
documents = ["doc1.pdf", "doc2.md", "doc3.html"]
stats = pipeline.ingest(documents)

print(f"Processed: {stats.total_documents}")
print(f"Successful: {stats.successful}")
print(f"Failed: {stats.failed}")
print(f"Total characters: {stats.total_characters}")`})]}),(0,j.jsxs)(Bi,{id:`pdf-processing`,title:`PDF Processing`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Special handling for PDF files:`}),(0,j.jsx)(N,{python:`from flowgentra_ai.document_loaders import extract_pdf

# Extract text from PDF
text = extract_pdf("./document.pdf")
print(f"Extracted {len(text)} characters")

# PDF documents include page information in metadata
doc = load_document("./document.pdf")
print(f"Pages: {doc.metadata.get('pages')}")
print(f"Author: {doc.metadata.get('author')}")
print(f"Subject: {doc.metadata.get('subject')}")`})]}),(0,j.jsxs)(Bi,{id:`custom-loaders`,title:`Custom Document Types`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`For unsupported formats, you can create custom loaders:`}),(0,j.jsx)(N,{python:`from flowgentra_ai.document_loaders import LoadedDocument, FileType

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
doc = load_custom_format("./my_custom_format.xyz")`})]}),(0,j.jsxs)(Bi,{id:`error-handling`,title:`Error Handling`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Document loading can fail for various reasons:`}),(0,j.jsx)(N,{python:`from flowgentra_ai.document_loaders import load_document

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
    print(f"Pipeline failed: {e}")`})]}),(0,j.jsx)(Bi,{id:`best-practices`,title:`Best Practices`,children:(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,marginBottom:16,paddingLeft:`20px`},children:[(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Use ingestion pipeline`}),` for batch processing with progress tracking`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Check file sizes`}),` - very large files may need chunking before processing`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Handle encoding`}),` - specify encoding for text files when needed`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Validate content`}),` - check that extracted text is meaningful`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Use metadata`}),` - leverage title, author, and other metadata for better retrieval`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Monitor performance`}),` - PDF processing can be slow for large documents`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Handle mixed formats`}),` - directories often contain different file types`]})]})})]})}function Bi({id:e,title:t,children:n}){return(0,j.jsxs)(`section`,{id:e,style:{marginBottom:48},children:[(0,j.jsx)(`h2`,{style:{fontSize:`1.5rem`,fontWeight:600,color:`#e6edf3`,marginBottom:16,marginTop:0},children:t}),n]})}var Vi=[{id:`why-rerank`,label:`Why Rerank?`},{id:`available-rerankers`,label:`Available Rerankers`},{id:`rrf`,label:`Reciprocal Rank Fusion`},{id:`cross-encoder`,label:`Cross-Encoder Reranking`},{id:`llm-reranking`,label:`LLM-Based Reranking`},{id:`no-op-reranker`,label:`No-Op Reranker`},{id:`integration`,label:`RAG Integration`},{id:`performance`,label:`Performance Comparison`},{id:`configuration`,label:`Configuration Tips`},{id:`best-practices`,label:`Best Practices`}];function Hi(){let{language:e}=M();return(0,j.jsxs)(P,{anchors:Vi,children:[(0,j.jsx)(`h1`,{style:{fontSize:`2rem`,fontWeight:700,color:`#e6edf3`,letterSpacing:`-0.02em`,marginBottom:8,marginTop:0},children:`Reranking`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:40,lineHeight:1.7},children:`Reranking improves search result quality by reordering retrieved documents. Flowgentra provides multiple reranking strategies optimized for different use cases.`}),(0,j.jsxs)(Ui,{id:`why-rerank`,title:`Why Rerank?`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Initial retrieval (like vector similarity search) is fast but may not capture all relevance signals. Reranking applies more sophisticated scoring to improve result quality.`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`When to rerank:`})}),(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,marginBottom:16,paddingLeft:`20px`},children:[(0,j.jsx)(`li`,{children:`Hybrid search (semantic + keyword results)`}),(0,j.jsx)(`li`,{children:`Large document collections where precision matters`}),(0,j.jsx)(`li`,{children:`Question-answering systems requiring high accuracy`}),(0,j.jsx)(`li`,{children:`Applications where result order significantly impacts user experience`})]})]}),(0,j.jsxs)(Ui,{id:`available-rerankers`,title:`Available Rerankers`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Flowgentra provides four reranking strategies:`}),(0,j.jsx)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20},children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,color:`#8b949e`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Reranker`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Speed`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Accuracy`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Use Case`})]})}),(0,j.jsxs)(`tbody`,{children:[(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`},children:`RRFReranker`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`⚡ Fast`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`⭐ Good`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Hybrid search, production`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`},children:`CrossEncoderReranker`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`🐌 Slow`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`⭐⭐⭐ Excellent`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Quality-critical apps`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`},children:`LLMReranker`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`🐌🐌 Very Slow`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`⭐⭐⭐⭐ Custom`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Complex criteria`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,fontFamily:`monospace`},children:`NoopReranker`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`⚡ Instant`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`❌ None`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`Testing, baseline`})]})]})]})})]}),(0,j.jsxs)(Ui,{id:`rrf`,title:`Reciprocal Rank Fusion (RRF)`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Combines multiple ranking sources mathematically. Excellent for hybrid search (semantic + keyword).`}),(0,j.jsx)(N,{rust:`use flowgentra_ai::reranking::RRFReranker;

let reranker = RRFReranker::new(60);
let reranked = reranker.rerank(search_results)?;`,python:`from flowgentra_ai.rerankers import RRFReranker

# Create RRF reranker
reranker = RRFReranker(k=60)  # k controls influence of original ranking

# Rerank results
reranked_results = reranker.rerank(search_results)

# Results are reordered by combined score
for result in reranked_results:
    print(f"Score: {result.score:.3f}, Text: {result.text[:50]}...")`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`When to use RRF:`})}),(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,marginBottom:16,paddingLeft:`20px`},children:[(0,j.jsx)(`li`,{children:`Hybrid search (combining semantic and keyword results)`}),(0,j.jsx)(`li`,{children:`Multiple retrieval sources`}),(0,j.jsx)(`li`,{children:`Need fast, deterministic reranking`}),(0,j.jsx)(`li`,{children:`Production systems where speed matters`})]})]}),(0,j.jsxs)(Ui,{id:`cross-encoder`,title:`Cross-Encoder Reranking`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Uses a transformer model to score query-document pairs directly. More accurate but slower.`}),(0,j.jsx)(N,{python:`from flowgentra_ai.rerankers import CrossEncoderReranker

# Use pre-trained cross-encoder model
reranker = CrossEncoderReranker(
    model="cross-encoder/ms-marco-MiniLM-L-6-v2"
)

# Rerank with higher quality scores
reranked = reranker.rerank(search_results, query="What is machine learning?")

# Much slower but more accurate than RRF`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`When to use Cross-Encoder:`})}),(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,marginBottom:16,paddingLeft:`20px`},children:[(0,j.jsx)(`li`,{children:`Maximum accuracy needed`}),(0,j.jsx)(`li`,{children:`Small result sets (<100 documents)`}),(0,j.jsx)(`li`,{children:`Can afford 10-100ms per query latency`}),(0,j.jsx)(`li`,{children:`Question-answering systems`})]})]}),(0,j.jsxs)(Ui,{id:`llm-reranking`,title:`LLM-Based Reranking`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Use an LLM to evaluate document relevance. Most flexible but slowest.`}),(0,j.jsx)(N,{python:`from flowgentra_ai.rerankers import LLMReranker
from flowgentra_ai.llm import LLM, LLMConfig

# Configure LLM for reranking
llm = LLM(LLMConfig("gpt-4", temperature=0.1))

reranker = LLMReranker(
    llm=llm,
    prompt_template="""
    Rate how relevant this document is to the query on a scale of 0-10.
    Query: {query}
    Document: {document}
    Score (0-10): """
)

reranked = reranker.rerank(search_results, query="machine learning basics")`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`When to use LLM reranking:`})}),(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,marginBottom:16,paddingLeft:`20px`},children:[(0,j.jsx)(`li`,{children:`Complex relevance criteria`}),(0,j.jsx)(`li`,{children:`Need explainable rankings`}),(0,j.jsx)(`li`,{children:`Custom scoring logic required`}),(0,j.jsx)(`li`,{children:`Domain-specific relevance rules`})]})]}),(0,j.jsxs)(Ui,{id:`no-op-reranker`,title:`No-Op Reranker`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Pass-through reranker for when you don't want reranking.`}),(0,j.jsx)(N,{python:`from flowgentra_ai.rerankers import NoopReranker

# No reranking - preserves original order
reranker = NoopReranker()
results = reranker.rerank(search_results)  # Returns unchanged`})]}),(0,j.jsxs)(Ui,{id:`integration`,title:`Integration with RAG`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Rerankers integrate seamlessly with the RAG pipeline:`}),(0,j.jsx)(N,{python:`from flowgentra_ai.rag import RAGConfig, Retriever
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
results = rag_config.retriever.retrieve("What is AI?", top_k=5)`})]}),(0,j.jsxs)(Ui,{id:`performance`,title:`Performance Comparison`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Here's how the rerankers compare in practice:`}),(0,j.jsx)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20,fontFamily:`monospace`,fontSize:`0.9rem`,color:`#8b949e`},children:`Reranker Performance (100 documents, approximate):

RRF:           5-10ms   | Good accuracy, fast
Cross-Encoder: 100-500ms | Excellent accuracy, slower
LLM:           1-5s     | Custom accuracy, very slow
No-Op:         <1ms     | No change, instant`})]}),(0,j.jsxs)(Ui,{id:`configuration`,title:`Configuration Tips`,children:[(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Choosing RRF Parameters`}),(0,j.jsx)(N,{python:`# Conservative (preserves original ranking more)
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

reranker = LLMReranker(llm=llm, prompt_template=prompt)`})]}),(0,j.jsx)(Ui,{id:`best-practices`,title:`Best Practices`,children:(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,marginBottom:16,paddingLeft:`20px`},children:[(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Start with RRF`}),` - Fast and effective for most use cases`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Use cross-encoders`}),` - When accuracy is critical and latency allows`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Retrieve more than needed`}),` - Rerank from larger candidate set (20-50 docs)`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Tune thresholds`}),` - Set minimum scores to filter irrelevant results`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Monitor performance`}),` - Track reranking impact on your metrics`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Consider cost`}),` - LLM reranking can be expensive at scale`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Test different models`}),` - Performance varies by domain and query type`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Cache results`}),` - For frequently asked queries`]})]})})]})}function Ui({id:e,title:t,children:n}){return(0,j.jsxs)(`section`,{id:e,style:{marginBottom:48},children:[(0,j.jsx)(`h2`,{style:{fontSize:`1.5rem`,fontWeight:600,color:`#e6edf3`,marginBottom:16,marginTop:0},children:t}),n]})}var Wi=[{id:`why-evaluate`,label:`Why Evaluate?`},{id:`retrieval-metrics`,label:`Retrieval Metrics`},{id:`hit-rate`,label:`Hit Rate`},{id:`mrr`,label:`Mean Reciprocal Rank`},{id:`ndcg`,label:`Normalized Discounted Cumulative Gain`},{id:`full-evaluation`,label:`Full Evaluation Pipeline`},{id:`generation-evaluation`,label:`Generation Evaluation`},{id:`custom-metrics`,label:`Custom Metrics`},{id:`ab-testing`,label:`A/B Testing`},{id:`best-practices`,label:`Best Practices`}];function Gi(){let{language:e}=M();return(0,j.jsxs)(P,{anchors:Wi,children:[(0,j.jsx)(`h1`,{style:{fontSize:`2rem`,fontWeight:700,color:`#e6edf3`,letterSpacing:`-0.02em`,marginBottom:8,marginTop:0},children:`Evaluation & Metrics`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:40,lineHeight:1.7},children:`Evaluate your RAG systems and agent workflows with comprehensive metrics and automated evaluation pipelines.`}),(0,j.jsxs)(Ki,{id:`why-evaluate`,title:`Why Evaluate?`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Evaluation helps you:`}),(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,marginBottom:16,paddingLeft:`20px`},children:[(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Measure retrieval quality`}),` - How well do you find relevant documents?`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Assess generation accuracy`}),` - How good are the answers?`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Compare different configurations`}),` - Which setup works best?`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Monitor production performance`}),` - Is your system degrading?`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Debug issues systematically`}),` - Where are the problems?`]})]})]}),(0,j.jsxs)(Ki,{id:`retrieval-metrics`,title:`Retrieval Metrics`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Standard metrics for measuring retrieval system quality:`}),(0,j.jsx)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20},children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,color:`#8b949e`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Metric`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`What it measures`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Range`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Good value`})]})}),(0,j.jsxs)(`tbody`,{children:[(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`},children:`Hit Rate`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Fraction of queries with ≥1 relevant result`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`0.0 - 1.0`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`≥ 0.8`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`,fontFamily:`monospace`},children:`MRR`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`Average reciprocal rank of first relevant result`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`0.0 - 1.0`}),(0,j.jsx)(`td`,{style:{padding:`8px`,borderBottom:`1px solid #21262d`},children:`≥ 0.7`})]}),(0,j.jsxs)(`tr`,{children:[(0,j.jsx)(`td`,{style:{padding:`8px`,fontFamily:`monospace`},children:`NDCG`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`Ranking quality with position discounting`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`0.0 - 1.0`}),(0,j.jsx)(`td`,{style:{padding:`8px`},children:`≥ 0.6`})]})]})]})})]}),(0,j.jsxs)(Ki,{id:`hit-rate`,title:`Hit Rate`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Fraction of queries that retrieved at least one relevant document.`}),(0,j.jsx)(N,{rust:`use flowgentra_ai::evaluation::{hit_rate};

let hit_rate_score = hit_rate(&retrieval_results, &ground_truth)?;
println!("Hit Rate: {:.3}", hit_rate_score);`,python:`from flowgentra_ai.evaluation import hit_rate

# retrieval_results: List[List[SearchResult]]
# ground_truth: List[List[str]] (document IDs)

score = hit_rate(retrieval_results, ground_truth)
print(f"Hit Rate: {score:.3f}")  # e.g., 0.85`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Interpretation:`})}),(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,marginBottom:16,paddingLeft:`20px`},children:[(0,j.jsx)(`li`,{children:`1.0 = Perfect (every query found relevant docs)`}),(0,j.jsx)(`li`,{children:`0.0 = Terrible (no queries found relevant docs)`}),(0,j.jsx)(`li`,{children:`Good baseline: > 0.8 for most applications`}),(0,j.jsx)(`li`,{children:`Simple but effective effectiveness check`})]})]}),(0,j.jsxs)(Ki,{id:`mrr`,title:`Mean Reciprocal Rank (MRR)`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Measures how highly relevant documents are ranked.`}),(0,j.jsx)(N,{rust:`use flowgentra_ai::evaluation::mrr;

let mrr_score = mrr(&retrieval_results, &ground_truth)?;
println!("MRR: {:.3}", mrr_score);`,python:`from flowgentra_ai.evaluation import mrr

score = mrr(retrieval_results, ground_truth)
print(f"MRR: {score:.3f}")  # e.g., 0.72`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Interpretation:`})}),(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,marginBottom:16,paddingLeft:`20px`},children:[(0,j.jsx)(`li`,{children:`Rewards high rankings of relevant documents`}),(0,j.jsx)(`li`,{children:`Perfect score = 1.0 (relevant doc always first)`}),(0,j.jsx)(`li`,{children:`Good score: > 0.7 for information retrieval`}),(0,j.jsx)(`li`,{children:`Focuses on first relevant result position`})]})]}),(0,j.jsxs)(Ki,{id:`ndcg`,title:`Normalized Discounted Cumulative Gain (NDCG)`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Sophisticated ranking metric that considers position and relevance grades.`}),(0,j.jsx)(N,{python:`from flowgentra_ai.evaluation import mean_ndcg

# Evaluate at different cutoffs
ndcg_5 = mean_ndcg(retrieval_results, ground_truth, k=5)
ndcg_10 = mean_ndcg(retrieval_results, ground_truth, k=10)

print(f"NDCG@5: {ndcg_5:.3f}")
print(f"NDCG@10: {ndcg_10:.3f}")`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Interpretation:`})}),(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,marginBottom:16,paddingLeft:`20px`},children:[(0,j.jsx)(`li`,{children:`Considers graded relevance (not just binary)`}),(0,j.jsx)(`li`,{children:`Perfect = 1.0`}),(0,j.jsx)(`li`,{children:`Good for comparing ranking quality`}),(0,j.jsx)(`li`,{children:`Discounts lower-ranked results`})]})]}),(0,j.jsxs)(Ki,{id:`full-evaluation`,title:`Full Evaluation Pipeline`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Run comprehensive evaluations with multiple metrics:`}),(0,j.jsx)(N,{python:`from flowgentra_ai.evaluation import rag_evaluate, EvaluationConfig, GradingConfig

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
    print(f"Query {i}: HR={query_result.hit_rate}, MRR={query_result.mrr}")`})]}),(0,j.jsxs)(Ki,{id:`generation-evaluation`,title:`Generation Evaluation`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Evaluate answer quality beyond retrieval:`}),(0,j.jsx)(N,{python:`from flowgentra_ai.evaluation import evaluate_output_score

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

print(f"Average answer quality: {sum(scores)/len(scores):.3f}")`})]}),(0,j.jsxs)(Ki,{id:`custom-metrics`,title:`Custom Metrics`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Create your own evaluation metrics:`}),(0,j.jsx)(N,{python:`from flowgentra_ai.evaluation import EvaluationResult

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
)`})]}),(0,j.jsxs)(Ki,{id:`ab-testing`,title:`A/B Testing Configurations`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Compare different RAG configurations:`}),(0,j.jsx)(N,{python:`from flowgentra_ai.rag import RAGConfig
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
print(f"Config B - Hit Rate: {results_b.hit_rate:.3f}")`})]}),(0,j.jsxs)(Ki,{id:`best-practices`,title:`Best Practices`,children:[(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Dataset Creation`}),(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,marginBottom:16,paddingLeft:`20px`},children:[(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Diverse queries`}),` - Cover different types of questions`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Realistic ground truth`}),` - Use actual relevant documents`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Sufficient volume`}),` - 100+ queries for reliable metrics`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Balanced difficulty`}),` - Mix easy and hard queries`]})]}),(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Metric Selection`}),(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,marginBottom:16,paddingLeft:`20px`},children:[(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Hit Rate`}),` - Simple effectiveness check`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`MRR`}),` - Ranking quality for single relevant docs`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`NDCG`}),` - Graded relevance and ranking quality`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Custom metrics`}),` - Domain-specific evaluation`]})]}),(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Statistical Significance`}),(0,j.jsx)(N,{python:`# Use confidence intervals for reliable comparisons
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
    print("Results are not significantly different")`}),(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Common Pitfalls`}),(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,marginBottom:16,paddingLeft:`20px`},children:[(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Small test sets`}),` - Need 100+ queries for reliable results`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Biased ground truth`}),` - Ensure relevance judgments are accurate`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Over-optimization`}),` - Don't tune too closely to test set`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Ignoring context`}),` - Consider query type and user intent`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Single metrics`}),` - Use multiple complementary metrics`]})]})]})]})}function Ki({id:e,title:t,children:n}){return(0,j.jsxs)(`section`,{id:e,style:{marginBottom:48},children:[(0,j.jsx)(`h2`,{style:{fontSize:`1.5rem`,fontWeight:600,color:`#e6edf3`,marginBottom:16,marginTop:0},children:t}),n]})}var qi=[{id:`overview`,label:`Overview`},{id:`retry-nodes`,label:`Retry Nodes`},{id:`timeout-nodes`,label:`Timeout Nodes`},{id:`branching`,label:`Branching & Conditional Logic`},{id:`parallel-execution`,label:`Parallel Execution`},{id:`loop-nodes`,label:`Loop Nodes`},{id:`subgraph-nodes`,label:`Subgraph Nodes`},{id:`join-nodes`,label:`Join Nodes`},{id:`error-handling`,label:`Error Handling Patterns`},{id:`best-practices`,label:`Best Practices`}];function Ji(){let{language:e}=M();return(0,j.jsxs)(P,{anchors:qi,children:[(0,j.jsx)(`h1`,{style:{fontSize:`2rem`,fontWeight:700,color:`#e6edf3`,letterSpacing:`-0.02em`,marginBottom:8,marginTop:0},children:`Advanced Node Types`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:40,lineHeight:1.7},children:`Flowgentra provides sophisticated node types for complex workflow patterns including retry logic, timeouts, branching, parallel execution, and subgraph composition.`}),(0,j.jsxs)(Yi,{id:`overview`,title:`Overview`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`While basic nodes handle simple operations, advanced nodes enable complex workflow patterns:`}),(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,marginBottom:16,paddingLeft:`20px`},children:[(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Retry Nodes`}),` - Automatic retry with backoff strategies`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Timeout Nodes`}),` - Protect against hanging operations`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Branching`}),` - Conditional execution paths`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Parallel Execution`}),` - Run multiple operations concurrently`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Loop Nodes`}),` - Repeat operations until conditions met`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Subgraphs`}),` - Compose complex workflows from smaller graphs`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Join Nodes`}),` - Synchronize parallel branches`]})]})]}),(0,j.jsxs)(Yi,{id:`retry-nodes`,title:`Retry Nodes`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Automatically retry failed operations with configurable backoff strategies.`}),(0,j.jsx)(N,{rust:`use flowgentra_ai::nodes::RetryNode;

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
builder.add_node("api_call", retry_node.wrap(unreliable_api_call))`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Configuration Options:`})}),(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,marginBottom:16,paddingLeft:`20px`},children:[(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`code`,{children:`max_retries`}),`: Maximum retry attempts (default: 3)`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`code`,{children:`backoff_strategy`}),`: "exponential", "linear", or "fixed"`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`code`,{children:`base_delay`}),`: Initial delay between retries (default: 1.0 seconds)`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`code`,{children:`max_delay`}),`: Maximum delay cap (default: 60.0 seconds)`]})]})]}),(0,j.jsxs)(Yi,{id:`timeout-nodes`,title:`Timeout Nodes`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Protect against hanging operations with configurable timeouts.`}),(0,j.jsx)(N,{python:`from flowgentra_ai.nodes import TimeoutNode

def slow_operation(state):
    time.sleep(30)  # This might hang
    state["result"] = "Completed"
    return state

# Add timeout protection
timeout_node = TimeoutNode(timeout_seconds=10.0)

builder.add_node("slow_task", timeout_node.wrap(slow_operation))`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`When to use timeouts:`})}),(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,marginBottom:16,paddingLeft:`20px`},children:[(0,j.jsx)(`li`,{children:`External API calls`}),(0,j.jsx)(`li`,{children:`File I/O operations`}),(0,j.jsx)(`li`,{children:`Long-running computations`}),(0,j.jsx)(`li`,{children:`Network requests`})]})]}),(0,j.jsxs)(Yi,{id:`branching`,title:`Branching & Conditional Logic`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Execute different paths based on state conditions.`}),(0,j.jsx)(N,{python:`from flowgentra_ai.nodes import BranchConfig
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
# Branch node automatically routes to appropriate handler`})]}),(0,j.jsxs)(Yi,{id:`parallel-execution`,title:`Parallel Execution`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Run multiple nodes concurrently and merge results.`}),(0,j.jsx)(N,{python:`from flowgentra_ai.nodes import ParallelNodeConfig, MergeStrategy

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
builder.add_edge("input_processor", "parallel_processor")`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Merge Strategies:`})}),(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,marginBottom:16,paddingLeft:`20px`},children:[(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`code`,{children:`CONCATENATE`}),`: Combine list fields`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`code`,{children:`OVERWRITE`}),`: Last writer wins`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`code`,{children:`MERGE_MAP`}),`: Deep merge dictionaries`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`code`,{children:`CUSTOM`}),`: Provide custom merge function`]})]})]}),(0,j.jsxs)(Yi,{id:`loop-nodes`,title:`Loop Nodes`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Repeat operations until a condition is met.`}),(0,j.jsx)(N,{python:`from flowgentra_ai.nodes import LoopNodeConfig
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
builder.add_node("quality_loop", loop_config)`})]}),(0,j.jsxs)(Yi,{id:`subgraph-nodes`,title:`Subgraph Nodes`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Compose complex workflows from smaller graphs.`}),(0,j.jsx)(N,{python:`from flowgentra_ai.nodes import SubgraphNodeConfig

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

main_builder.add_node("process_documents", subgraph_config)`})]}),(0,j.jsxs)(Yi,{id:`join-nodes`,title:`Join Nodes`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Synchronize multiple parallel branches.`}),(0,j.jsx)(N,{python:`from flowgentra_ai.nodes import JoinNodeConfig, JoinType

# After parallel processing, join results
join_config = JoinNodeConfig(
    join_type=JoinType.ALL,  # Wait for all branches
    merge_strategy=MergeStrategy.MERGE_MAP
)

builder.add_node("join_results", join_config)

# Connect parallel branches to join
builder.add_edge("branch_a", "join_results")
builder.add_edge("branch_b", "join_results")
builder.add_edge("branch_c", "join_results")`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Join Types:`})}),(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,marginBottom:16,paddingLeft:`20px`},children:[(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`code`,{children:`ALL`}),`: Wait for all incoming branches`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`code`,{children:`ANY`}),`: Continue when any branch completes`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`code`,{children:`RACE`}),`: Use result from first completed branch`]})]})]}),(0,j.jsxs)(Yi,{id:`error-handling`,title:`Error Handling Patterns`,children:[(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Combine nodes for robust error handling:`}),(0,j.jsx)(N,{python:`from flowgentra_ai.nodes import RetryNode, TimeoutNode

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
)`})]}),(0,j.jsxs)(Yi,{id:`best-practices`,title:`Best Practices`,children:[(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,marginBottom:16,paddingLeft:`20px`},children:[(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Start simple`}),` - Begin with basic nodes and add complexity gradually`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Test error cases`}),` - Thoroughly test retry logic, timeouts, and error conditions`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Monitor performance`}),` - Parallel execution and retries can impact performance`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Clear state management`}),` - Ensure state updates are predictable when using parallel execution and merging`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Use appropriate timeouts`}),` - Set realistic timeouts based on expected operation duration`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Handle partial failures`}),` - Design workflows to handle partial failures in parallel execution`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Document complex logic`}),` - Use comments and clear naming for complex node configurations`]})]}),(0,j.jsx)(`h4`,{style:{color:`#e6edf3`,fontSize:`1.1rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Common Patterns`}),(0,j.jsx)(`h5`,{style:{color:`#e6edf3`,fontSize:`1rem`,fontWeight:600,marginBottom:8,marginTop:16},children:`Conditional Parallelism`}),(0,j.jsx)(N,{python:`# Only run expensive operations if needed
def should_parallelize(state):
    return len(state["documents"]) > 10

parallel_config = ParallelNodeConfig(
    nodes=["expensive_analysis", "basic_processing"],
    condition=should_parallelize  # Only run in parallel when worthwhile
)`})]})]})}function Yi({id:e,title:t,children:n}){return(0,j.jsxs)(`section`,{id:e,style:{marginBottom:48},children:[(0,j.jsx)(`h2`,{style:{fontSize:`1.5rem`,fontWeight:600,color:`#e6edf3`,marginBottom:16,marginTop:0},children:t}),n]})}var Xi=[{id:`overview`,label:`Overview`},{id:`strategies`,label:`Orchestration Strategies`},{id:`sequential`,label:`Sequential`},{id:`parallel`,label:`Parallel`},{id:`llm-routed`,label:`LLM-Routed`},{id:`autonomous`,label:`Autonomous`},{id:`dynamic`,label:`Dynamic`},{id:`round-robin`,label:`Round Robin`},{id:`hierarchical`,label:`Hierarchical`},{id:`broadcast`,label:`Broadcast + Vote`},{id:`map-reduce`,label:`Map-Reduce`},{id:`conditional`,label:`Conditional Routing`},{id:`retry`,label:`Retry Fallback`},{id:`debate`,label:`Debate`},{id:`advanced`,label:`Strategy Comparison`},{id:`yaml`,label:`Config-Driven Supervisor`}];function Zi(){return(0,j.jsxs)(P,{anchors:Xi,children:[(0,j.jsx)(`h1`,{style:ea,children:`Multi-Agent Systems`}),(0,j.jsx)(`p`,{style:ta,children:`Build systems where multiple specialized agents collaborate to solve complex tasks. Flowgentra's Supervisor orchestrates agent execution with 11 built-in strategies.`}),(0,j.jsxs)(Qi,{id:`overview`,title:`Overview`,children:[(0,j.jsxs)(`p`,{style:na,children:[`A `,(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Supervisor`}),` is a controller that manages a set of child agents. It decides which agent runs next, when to stop, and how to merge results from multiple agents.`]}),(0,j.jsx)(`p`,{style:na,children:`Each child agent is itself a graph — the Supervisor composes them into a higher-level workflow. You can nest Supervisors for hierarchical multi-agent architectures.`}),(0,j.jsxs)(`div`,{style:{background:`#161b22`,border:`1px solid #21262d`,borderRadius:8,padding:`20px 24px`,marginTop:16},children:[(0,j.jsx)(`div`,{style:{fontSize:`0.75rem`,fontWeight:600,color:`#484f58`,textTransform:`uppercase`,letterSpacing:`0.08em`,marginBottom:14},children:`Architecture`}),(0,j.jsx)(`pre`,{style:{margin:0,color:`#8b949e`,fontSize:`0.875rem`,lineHeight:2,fontFamily:`JetBrains Mono, monospace`},children:`Supervisor
├── Strategy (Sequential | Parallel | LLMRouted | ...)
├── Child Agent A  ─── graph with nodes + state
├── Child Agent B  ─── graph with nodes + state
└── Child Agent C  ─── graph with nodes + state

State flows: Supervisor state → child state → merged back`})]})]}),(0,j.jsxs)(Qi,{id:`strategies`,title:`Orchestration Strategies`,children:[(0,j.jsx)(`p`,{style:na,children:`Flowgentra ships with 11 strategies. Choose based on your use case:`}),(0,j.jsx)(`div`,{style:{overflowX:`auto`},children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,fontSize:`0.875rem`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsx)(`tr`,{children:[`Strategy`,`Description`,`Best for`].map(e=>(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`10px 14px`,borderBottom:`1px solid #21262d`,color:`#8b949e`,fontWeight:600,fontSize:`0.8rem`},children:e},e))})}),(0,j.jsx)(`tbody`,{children:[[`sequential()`,`Run children in order, one at a time`,`Pipelines, step-by-step research`],[`parallel()`,`Run all children simultaneously`,`Independent tasks, fan-out patterns`],[`autonomous()`,`Loop until required outputs are present`,`Self-directed research agents`],[`dynamic()`,`LLM decides which child runs next`,`Complex routing, unknown paths`],[`round_robin()`,`Distribute tasks in rotation`,`Load balancing, fair scheduling`],[`hierarchical()`,`Nested supervisors`,`Team-of-teams architectures`],[`broadcast()`,`Send to all, pick best response`,`Ensembling, quality voting`],[`map_reduce()`,`Split input, process chunks, merge`,`Document analysis, bulk tasks`],[`conditional_routing()`,`Route based on state conditions`,`Business rule-driven flows`],[`retry_fallback()`,`Try children in order until success`,`Fault-tolerant, degraded modes`],[`debate()`,`Agents argue, then reach consensus`,`Complex reasoning, fact-checking`]].map(([e,t,n],r)=>(0,j.jsxs)(`tr`,{style:{background:r%2==0?`transparent`:`#0a0f14`},children:[(0,j.jsx)(`td`,{style:{padding:`10px 14px`,fontFamily:`JetBrains Mono, monospace`,fontSize:`0.8rem`,color:`var(--accent)`,whiteSpace:`nowrap`},children:e}),(0,j.jsx)(`td`,{style:{padding:`10px 14px`,color:`#e6edf3`},children:t}),(0,j.jsx)(`td`,{style:{padding:`10px 14px`,color:`#8b949e`},children:n})]},e))})]})})]}),(0,j.jsxs)(Qi,{id:`sequential`,title:`Sequential — Pipeline of Agents`,children:[(0,j.jsx)(`p`,{style:na,children:`The simplest strategy: agents run one after the other. The output state of one becomes the input of the next. Great for research → summarize → format pipelines.`}),(0,j.jsx)(N,{rust:`use flowgentra_ai::prelude::*;
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
print(result.get("summary"))`})]}),(0,j.jsxs)(Qi,{id:`parallel`,title:`Parallel — Fan-Out / Fan-In`,children:[(0,j.jsx)(`p`,{style:na,children:`Run all child agents simultaneously and merge their results. The merge strategy controls how state is combined.`}),(0,j.jsx)(N,{rust:`use flowgentra_ai::supervision::{Supervisor, SupervisorNodeConfig, OrchestrationStrategy, ParallelMergeStrategy};

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

result = sup.run(initial_state)`}),(0,j.jsxs)(`div`,{style:{background:`#161b22`,border:`1px solid #21262d`,borderRadius:8,padding:`16px 20px`,marginTop:16},children:[(0,j.jsx)(`div`,{style:{fontWeight:600,color:`#e6edf3`,marginBottom:10,fontSize:`0.875rem`},children:`Merge Strategies`}),(0,j.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:[[`ParallelMergeStrategy.first_success()`,`Use result from whichever agent finishes first successfully`],[`ParallelMergeStrategy.latest()`,`Use result from the last agent to finish`],[`ParallelMergeStrategy.deep_merge()`,`Deep-merge all state dicts (new keys win, lists append)`]].map(([e,t])=>(0,j.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`baseline`},children:[(0,j.jsx)(`code`,{style:ra,children:e}),(0,j.jsx)(`span`,{style:{color:`#8b949e`,fontSize:`0.875rem`},children:t})]},e))})]})]}),(0,j.jsxs)(Qi,{id:`llm-routed`,title:`LLM-Routed — Dynamic Dispatch`,children:[(0,j.jsx)(`p`,{style:na,children:`The supervisor calls an LLM to decide which agent runs next. The router can see the current state and choose dynamically. This is the most flexible strategy for complex, unknown workflows.`}),(0,j.jsx)(N,{rust:`// With router function
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

result = sup.run(initial_state)`}),(0,j.jsxs)($i,{type:`warn`,title:`Set a max_rounds limit`,children:[`LLM-routed supervisors can loop indefinitely if the router never returns "FINISH". Always set `,(0,j.jsx)(`code`,{style:ra,children:`max_rounds()`}),` to prevent runaway execution.`]})]}),(0,j.jsxs)(Qi,{id:`autonomous`,title:`Autonomous — Self-Directed Teams`,children:[(0,j.jsx)(`p`,{style:na,children:`Loop until all required outputs are present. Agents autonomously decide what to do next to produce the outputs. Perfect for self-supervising research teams that know their responsibilities.`}),(0,j.jsx)(N,{python:`from flowgentra_ai.supervision import SupervisorNodeConfig, OrchestrationStrategy

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
    .with_max_iterations(20);`}),(0,j.jsxs)(`div`,{style:{background:`#161b22`,border:`1px solid #21262d`,borderRadius:8,padding:`16px 20px`,marginTop:16},children:[(0,j.jsx)(`div`,{style:{fontWeight:600,color:`#e6edf3`,marginBottom:10,fontSize:`0.875rem`},children:`When to use:`}),(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,margin:0,paddingLeft:20,fontSize:`0.875rem`},children:[(0,j.jsx)(`li`,{children:`Goal-oriented workflows with multiple stages`}),(0,j.jsx)(`li`,{children:`Agents know their responsibilities`}),(0,j.jsx)(`li`,{children:`Need to ensure all outputs eventually produced`}),(0,j.jsx)(`li`,{children:`Self-supervising teams`})]})]})]}),(0,j.jsxs)(Qi,{id:`dynamic`,title:`Dynamic — LLM-Based Routing`,children:[(0,j.jsx)(`p`,{style:na,children:`The LLM analyzes current state and decides which agent to call next. Provides interpretable adaptive routing for complex workflows.`}),(0,j.jsx)(N,{python:`from flowgentra_ai.supervision import SupervisorNodeConfig, OrchestrationStrategy
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
    .with_max_iterations(15);`})]}),(0,j.jsxs)(Qi,{id:`round-robin`,title:`Round Robin — Fair Load Balancing`,children:[(0,j.jsx)(`p`,{style:na,children:`Distribute tasks across agents in sequence. Each agent gets a fair turn. Perfect for load balancing across identical workers.`}),(0,j.jsx)(N,{python:`from flowgentra_ai.supervision import SupervisorNodeConfig, OrchestrationStrategy

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
    .with_skip_on_error(true);`})]}),(0,j.jsxs)(Qi,{id:`hierarchical`,title:`Hierarchical — Multi-Level Teams`,children:[(0,j.jsx)(`p`,{style:na,children:`Nest supervisors for team-of-teams architectures. Top-level supervisor delegates to sub-supervisors, each coordinating their own agents.`}),(0,j.jsx)(N,{python:`from flowgentra_ai.supervision import Supervisor, SupervisorNodeConfig

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
    .with_coordination("executive");`})]}),(0,j.jsxs)(Qi,{id:`broadcast`,title:`Broadcast + Vote — Ensemble`,children:[(0,j.jsx)(`p`,{style:na,children:`Send the same task to all agents, then use voting or quality scoring to pick the best answer. Great for consensus and fact-checking.`}),(0,j.jsx)(N,{python:`from flowgentra_ai.supervision import SupervisorNodeConfig, OrchestrationStrategy, ParallelMergeStrategy

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
    .with_max_concurrent(3);`})]}),(0,j.jsxs)(Qi,{id:`map-reduce`,title:`Map-Reduce — Chunk Processing`,children:[(0,j.jsx)(`p`,{style:na,children:`Split large input into chunks, send each to a worker agent, then merge all results. Perfect for document analysis and bulk data processing.`}),(0,j.jsx)(N,{python:`from flowgentra_ai.supervision import SupervisorNodeConfig, OrchestrationStrategy

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
    .with_output_key("analysis");`})]}),(0,j.jsxs)(Qi,{id:`conditional`,title:`Conditional Routing — Business Rules`,children:[(0,j.jsx)(`p`,{style:na,children:`Route to agents based on state conditions. Define rules for which agent should handle each scenario.`}),(0,j.jsx)(N,{python:`from flowgentra_ai.supervision import SupervisorNodeConfig, OrchestrationStrategy

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
    .with_strategy(OrchestrationStrategy::conditional_routing(router));`})]}),(0,j.jsxs)(Qi,{id:`retry`,title:`Retry Fallback — Resilient Pipelines`,children:[(0,j.jsx)(`p`,{style:na,children:`Try agents in sequence. If one fails, automatically move to the next. Excellent for fault-tolerant systems.`}),(0,j.jsx)(N,{python:`from flowgentra_ai.supervision import SupervisorNodeConfig, OrchestrationStrategy

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
    .with_backoff_ms(1000);`})]}),(0,j.jsxs)(Qi,{id:`debate`,title:`Debate — Consensus Building`,children:[(0,j.jsx)(`p`,{style:na,children:`Multiple agents generate different answers. Then a moderator agent synthesizes a final consensus. Great for complex reasoning and fact-checking.`}),(0,j.jsx)(N,{python:`from flowgentra_ai.supervision import SupervisorNodeConfig, OrchestrationStrategy

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
    .with_num_rounds(2);`})]}),(0,j.jsx)(Qi,{id:`advanced`,title:`Strategy Comparison Matrix`,children:(0,j.jsx)(`div`,{style:{overflowX:`auto`},children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,fontSize:`0.8rem`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsx)(`tr`,{children:[`Strategy`,`Execution`,`Merge`,`Best For`,`Complexity`].map(e=>(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`10px 14px`,borderBottom:`1px solid #21262d`,color:`#8b949e`,fontWeight:600},children:e},e))})}),(0,j.jsx)(`tbody`,{children:[[`Sequential`,`One-by-one`,`Latest`,`Pipelines`,`Low`],[`Parallel`,`Simultaneous`,`Configurable`,`Independent tasks`,`Medium`],[`Autonomous`,`Self-directed`,`Until complete`,`Self-supervising`,`High`],[`Dynamic`,`LLM-routed`,`Dynamic`,`Complex logic`,`High`],[`Round Robin`,`Fair distribution`,`Per-agent`,`Load balancing`,`Low`],[`Hierarchical`,`Nested`,`Per-level`,`Team-of-teams`,`Very High`],[`Broadcast`,`All same`,`Vote/score`,`Consensus`,`Medium`],[`Map-Reduce`,`Parallel chunks`,`Merged`,`Bulk data`,`High`],[`Conditional`,`Rule-based`,`Latest`,`Business rules`,`Medium`],[`Retry`,`Sequential + fallback`,`Latest`,`Fault-tolerant`,`Medium`],[`Debate`,`Multi-perspective`,`Synthesis`,`Complex reasoning`,`Very High`]].map(([e,t,n,r,i],a)=>(0,j.jsxs)(`tr`,{style:{background:a%2==0?`transparent`:`#0a0f14`},children:[(0,j.jsx)(`td`,{style:{padding:`10px 14px`,fontFamily:`JetBrains Mono, monospace`,fontSize:`0.8rem`,color:`var(--accent)`,whiteSpace:`nowrap`},children:e}),(0,j.jsx)(`td`,{style:{padding:`10px 14px`,color:`#e6edf3`},children:t}),(0,j.jsx)(`td`,{style:{padding:`10px 14px`,color:`#8b949e`},children:n}),(0,j.jsx)(`td`,{style:{padding:`10px 14px`,color:`#8b949e`},children:r}),(0,j.jsx)(`td`,{style:{padding:`10px 14px`,color:`#8b949e`},children:i})]},e))})]})})}),(0,j.jsxs)(Qi,{id:`yaml`,title:`Config-Driven Supervisor (YAML)`,children:[(0,j.jsx)(`p`,{style:na,children:`For production deployments, define your multi-agent topology in YAML. This lets you iterate on agent composition without code changes.`}),(0,j.jsx)(N,{forceLang:`yaml`,rust:`name: research-pipeline
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
print(result.get("formatted_report"))`}),(0,j.jsx)($i,{type:`tip`,title:`Nested supervisors`,children:`You can nest supervisors by making one child agent itself a supervisor config. This enables hierarchical team-of-teams architectures.`})]})]})}function Qi({id:e,title:t,children:n}){return(0,j.jsxs)(`section`,{id:e,style:{marginBottom:52},children:[(0,j.jsx)(`h2`,{style:{fontSize:`1.375rem`,fontWeight:600,color:`#e6edf3`,marginBottom:16,marginTop:0},children:t}),n]})}function $i({type:e,title:t,children:n}){let r={info:{bg:`rgba(53,114,165,0.1)`,border:`rgba(53,114,165,0.4)`,text:`#58a6ff`},tip:{bg:`rgba(63,185,80,0.1)`,border:`rgba(63,185,80,0.4)`,text:`#3fb950`},warn:{bg:`rgba(210,153,34,0.1)`,border:`rgba(210,153,34,0.4)`,text:`#d29922`}},i=r[e]||r.info;return(0,j.jsxs)(`div`,{style:{background:i.bg,border:`1px solid ${i.border}`,borderRadius:8,padding:`14px 18px`,marginTop:16},children:[t&&(0,j.jsx)(`div`,{style:{fontWeight:600,color:i.text,marginBottom:6,fontSize:`0.9rem`},children:t}),(0,j.jsx)(`div`,{style:{color:`#8b949e`,fontSize:`0.875rem`,lineHeight:1.65},children:n})]})}var ea={fontSize:`2rem`,fontWeight:700,color:`#e6edf3`,letterSpacing:`-0.02em`,marginBottom:8,marginTop:0},ta={color:`#8b949e`,marginBottom:40,lineHeight:1.7,fontSize:`1.0625rem`},na={color:`#8b949e`,lineHeight:1.75,marginBottom:16},ra={background:`#21262d`,border:`1px solid #30363d`,borderRadius:4,padding:`1px 6px`,fontSize:`0.85em`,fontFamily:`JetBrains Mono, monospace`},ia=[{id:`overview`,label:`Overview`},{id:`init-tracing`,label:`Enable Tracing`},{id:`execution-tracer`,label:`ExecutionTracer`},{id:`visualization`,label:`Graph Visualization`},{id:`token-usage`,label:`Token Usage & Cost`},{id:`debugging`,label:`Debugging Tips`}];function aa(){return(0,j.jsxs)(P,{anchors:ia,children:[(0,j.jsx)(`h1`,{style:sa,children:`Observability & Tracing`}),(0,j.jsx)(`p`,{style:ca,children:`Understand what your agent is doing, how long each node takes, and how much it costs. Flowgentra has built-in tracing, execution metrics, and graph visualization — no external tools required.`}),(0,j.jsxs)(V,{id:`overview`,title:`Overview`,children:[(0,j.jsx)(`p`,{style:la,children:`Flowgentra's observability stack includes:`}),(0,j.jsxs)(`ul`,{style:ua,children:[(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Structured logging`}),` — per-node span logs with timing`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`ExecutionTracer`}),` — programmatic event capture and inspection`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Graph visualization`}),` — Mermaid flowcharts and Graphviz DOT export`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Token tracking`}),` — built into `,(0,j.jsx)(`code`,{style:da,children:`LLM.chat_with_usage()`})]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Cost estimation`}),` — per-model pricing via `,(0,j.jsx)(`code`,{style:da,children:`TokenUsage.estimated_cost()`})]})]})]}),(0,j.jsxs)(V,{id:`init-tracing`,title:`Enable Tracing`,children:[(0,j.jsxs)(`p`,{style:la,children:[`Call `,(0,j.jsx)(`code`,{style:da,children:`init_tracing()`}),` once at startup to enable structured span logging. All node starts, ends, and edge traversals will be logged automatically.`]}),(0,j.jsx)(N,{rust:`use flowgentra_ai::observability::init_tracing;

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
# [INFO] flowgentra::graph  edge        from=classify  to=technical  condition_met=true`})]}),(0,j.jsxs)(V,{id:`execution-tracer`,title:`ExecutionTracer — Programmatic Capture`,children:[(0,j.jsxs)(`p`,{style:la,children:[`For programmatic access to execution events (e.g., in tests or dashboards), use `,(0,j.jsx)(`code`,{style:da,children:`ExecutionTracer`}),`. It captures every node execution, edge traversal, and state update.`]}),(0,j.jsx)(N,{rust:`use flowgentra_ai::observability::{ExecutionTracer, ExecutionTrace};

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
tracer.clear()`}),(0,j.jsxs)(`p`,{style:{...la,marginTop:16},children:[`The `,(0,j.jsx)(`code`,{style:da,children:`ExecutionTrace`}),` class provides a higher-level summary:`]}),(0,j.jsx)(N,{rust:`let trace = ExecutionTrace::from_agent("my-agent");
let path      = trace.execution_path();    // ["classify", "technical", "__end__"]
let duration  = trace.total_duration_ms(); // Some(387)
let json      = trace.to_json();`,python:`from flowgentra_ai.observability import ExecutionTrace

trace = ExecutionTrace(agent_name="my-agent")
path     = trace.execution_path()     # ["classify", "technical", "__end__"]
duration = trace.total_duration_ms()  # 387
json_str = trace.to_json()            # full JSON export`})]}),(0,j.jsxs)(V,{id:`visualization`,title:`Graph Visualization`,children:[(0,j.jsx)(`p`,{style:la,children:`Export your compiled graph as a Mermaid flowchart or Graphviz DOT diagram. Great for documentation and debugging routing logic.`}),(0,j.jsx)(N,{rust:`let graph = builder.build()?;

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
print(graph_dict["edges"])   # list of {from, to} dicts`}),(0,j.jsxs)(oa,{type:`tip`,title:`Embed in Jupyter notebooks`,children:[`In a Jupyter notebook, render the Mermaid diagram inline:`,(0,j.jsx)(`pre`,{style:fa,children:`from IPython.display import display, HTML

mermaid = graph.to_mermaid()
display(HTML(f"""
<div class="mermaid">{mermaid}</div>
<script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"><\/script>
"""))`})]})]}),(0,j.jsxs)(V,{id:`token-usage`,title:`Token Usage & Cost Estimation`,children:[(0,j.jsxs)(`p`,{style:la,children:[`Use `,(0,j.jsx)(`code`,{style:da,children:`chat_with_usage()`}),` to get token counts alongside the response. Then estimate cost per-model with `,(0,j.jsx)(`code`,{style:da,children:`TokenUsage.estimated_cost()`}),`.`]}),(0,j.jsx)(N,{rust:`let (response, usage) = client.chat_with_usage(messages).await?;

if let Some(u) = usage {
    println!("Prompt tokens:     {}", u.prompt_tokens);
    println!("Completion tokens: {}", u.completion_tokens);
    println!("Total:             {}", u.total_tokens());
    if let Some(cost) = u.estimated_cost("gpt-4o") {
        println!("Estimated cost: {:.6{'}'}", cost);
    }
}`,python:`from flowgentra_ai.llm import LLM, LLMConfig, Message

client = LLM.from_config(LLMConfig(provider="openai", model="gpt-4o"))

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
# (2.50, 10.00) — $ per million tokens`}),(0,j.jsxs)(oa,{type:`info`,title:`Track costs across a workflow`,children:[`Accumulate usage across multiple LLM calls by adding a `,(0,j.jsx)(`code`,{style:da,children:`total_tokens`}),` field to your state with a `,(0,j.jsx)(`code`,{style:da,children:`#[reducer(Sum)]`}),` (Rust) or by manually accumulating in Python.`]})]}),(0,j.jsx)(V,{id:`debugging`,title:`Debugging Tips`,children:(0,j.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[{title:`Agent loops forever`,fix:`Your conditional router never returns "__end__". Add a max_steps limit and print the state in your router to see what condition is failing.`,code:`builder.set_max_steps(25)  # Python
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
)`}].map(e=>(0,j.jsxs)(`div`,{style:{background:`#161b22`,border:`1px solid #21262d`,borderRadius:8,padding:`18px 20px`},children:[(0,j.jsx)(`div`,{style:{fontWeight:600,color:`#e6edf3`,marginBottom:6},children:e.title}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,fontSize:`0.875rem`,lineHeight:1.65,marginBottom:12},children:e.fix}),(0,j.jsx)(`pre`,{style:{background:`#0d1117`,border:`1px solid #30363d`,borderRadius:6,padding:`10px 14px`,fontSize:`0.8rem`,lineHeight:1.6,color:`#e6edf3`,margin:0,overflowX:`auto`,fontFamily:`JetBrains Mono, monospace`},children:e.code})]},e.title))})})]})}function V({id:e,title:t,children:n}){return(0,j.jsxs)(`section`,{id:e,style:{marginBottom:52},children:[(0,j.jsx)(`h2`,{style:{fontSize:`1.375rem`,fontWeight:600,color:`#e6edf3`,marginBottom:16,marginTop:0},children:t}),n]})}function oa({type:e,title:t,children:n}){let r={info:{bg:`rgba(53,114,165,0.1)`,border:`rgba(53,114,165,0.4)`,text:`#58a6ff`},tip:{bg:`rgba(63,185,80,0.1)`,border:`rgba(63,185,80,0.4)`,text:`#3fb950`},warn:{bg:`rgba(210,153,34,0.1)`,border:`rgba(210,153,34,0.4)`,text:`#d29922`}},i=r[e]||r.info;return(0,j.jsxs)(`div`,{style:{background:i.bg,border:`1px solid ${i.border}`,borderRadius:8,padding:`14px 18px`,marginTop:16},children:[t&&(0,j.jsx)(`div`,{style:{fontWeight:600,color:i.text,marginBottom:6,fontSize:`0.9rem`},children:t}),(0,j.jsx)(`div`,{style:{color:`#8b949e`,fontSize:`0.875rem`,lineHeight:1.65},children:n})]})}var sa={fontSize:`2rem`,fontWeight:700,color:`#e6edf3`,letterSpacing:`-0.02em`,marginBottom:8,marginTop:0},ca={color:`#8b949e`,marginBottom:40,lineHeight:1.7,fontSize:`1.0625rem`},la={color:`#8b949e`,lineHeight:1.75,marginBottom:16},ua={color:`#8b949e`,lineHeight:2,paddingLeft:20,margin:`0 0 16px`},da={background:`#21262d`,border:`1px solid #30363d`,borderRadius:4,padding:`1px 6px`,fontSize:`0.85em`,fontFamily:`JetBrains Mono, monospace`},fa={background:`#161b22`,border:`1px solid #30363d`,borderRadius:6,padding:`10px 14px`,fontSize:`0.8rem`,lineHeight:1.6,color:`#e6edf3`,margin:`10px 0 0`,overflowX:`auto`,whiteSpace:`pre`,fontFamily:`JetBrains Mono, monospace`},pa=()=>(0,j.jsx)(P,{title:`Database Module`,description:`Integrate databases for persistence, storage, and vector search.`,content:`# Database Module

## Overview

Flowgentra provides database integrations for:
- Storing documents & vectors (RAG)
- Agent memory & conversation history
- Custom data persistence

Supported backends:
- **SQLite** - Single-file, no setup
- **PostgreSQL** - Production SQL databases
- **MongoDB** - NoSQL document storage
- **Chroma** - Vector database (built-in)

## SQL Database

### SQLite

Simplest option, great for development:

**Python:**
\`\`\`python
from flowgentra_ai.db import SqliteDatabase

db = SqliteDatabase("./agents.db")
conversations = db.query("SELECT * FROM conversations")
\`\`\`

**Rust:**
\`\`\`rust
use flowgentra_ai::core::db::SqliteDatabase;

let db = SqliteDatabase::new("./agents.db")?;
let conversations = db.query("SELECT * FROM conversations")?;
\`\`\`

### PostgreSQL

For production and team environments:

**Python:**
\`\`\`python
from flowgentra_ai.db import PostgresDatabase

db = PostgresDatabase(
    host="localhost",
    port=5432,
    database="flowgentra",
    user="user", 
    password="password"
)
\`\`\`

**Rust:**
\`\`\`rust
use flowgentra_ai::core::db::PostgresDatabase;

let db = PostgresDatabase::new(
    "postgresql://user:password@localhost/flowgentra"
)?;
\`\`\`

### Schema Management

Create tables automatically:

**Python:**
\`\`\`python
db.create_tables()  # Creates all required tables
\`\`\`

**Rust:**
\`\`\`rust
db.create_tables().await?;
\`\`\`

## Document Store

For storing documents without SQL:

**Python:**
\`\`\`python
from flowgentra_ai.db import MongoDocumentStore

store = MongoDocumentStore(
    connection_string="mongodb://localhost:27017",
    database="docs"
)

# Insert
store.insert("collection_name", {
    "id": "doc_1",
    "content": "Hello world",
    "metadata": {"source": "file.txt"}
})

# Query
docs = store.query("collection_name", {"source": "file.txt"})

# Delete
store.delete("collection_name", "doc_1")
\`\`\`

**Rust:**
\`\`\`rust
use flowgentra_ai::core::doc_store::{DocumentStore, MongoDocumentStore};

let store = MongoDocumentStore::new("mongodb://localhost").await?;

store.insert("docs", Document {
    id: "doc_1".to_string(),
    content: "Hello world".to_string(),
    metadata: {{"source": "file.txt".to_string()}}.into(),
}).await?;
\`\`\`

## Vector Store Integration

Store and query embeddings:

**Python:**
\`\`\`python
from flowgentra_ai.rag import InMemoryVectorStore, Embeddings

embeddings = Embeddings.huggingface("sentence-transformers/all-MiniLM-L6-v2")
vector_store = InMemoryVectorStore(embeddings)

# Add documents
vector_store.add_documents([
    {"id": "1", "text": "Hello world"},
    {"id": "2", "text": "Goodbye world"},
])

# Search
results = vector_store.search("hello", k=1)
# returns: [{"id": "1", "text": "Hello world", "score": 0.95}]
\`\`\`

**Rust:**
\`\`\`rust
use flowgentra_ai::core::rag::InMemoryVectorStore;

let embeddings = HuggingFaceEmbeddings::new("sentence-transformers/all-MiniLM-L6-v2")?;
let mut store = InMemoryVectorStore::new(embeddings);

store.add_documents(vec![
    Document { id: "1", text: "Hello world" },
    Document { id: "2", text: "Goodbye world" },
]).await?;

let results = store.search("hello", 1).await?;
\`\`\`

## Best Practices

1. **Choose the right backend**
   - Development: SQLite
   - Production: PostgreSQL
   - NoSQL needs: MongoDB
   - Vector search: Chroma or Pinecone

2. **Index frequently queried fields**
   - Add database indexes for agent_id, thread_id
   - Speeds up checkpoint retrieval

3. **Archive old conversations**
   - Delete > 90 days of conversation history periodically
   - Keeps database size manageable

4. **Monitor connection pool**
   - PostgreSQL: Configure pool size (default: 5)
   - Avoid connection exhaustion

5. **Backup strategy**
   - SQLite: Copy database file daily
   - PostgreSQL: Use pg_dump or WAL archiving

## Migration & Backup

### SQLite to PostgreSQL

\`\`\`python
from flowgentra_ai.db import SqliteDatabase, PostgresDatabase

sqlite_db = SqliteDatabase("./old.db")
postgres_db = PostgresDatabase("postgresql://localhost/new")

# Migrate all tables
for table in sqlite_db.list_tables():
    rows = sqlite_db.query(f"SELECT * FROM {table}")
    for row in rows:
        postgres_db.insert(table, row)
\`\`\`

### Backup

\`\`\`bash
# SQLite
cp agents.db agents.db.backup

# PostgreSQL
pg_dump -U user -d flowgentra > backup.sql
\`\`\`
`}),ma=()=>(0,j.jsx)(P,{title:`Agent Builder API`,description:`Create and configure agents using builders and YAML configuration.`,content:`# Agent Builder API

## Overview

The \`Agent\` and \`AgentBuilder\` provide high-level abstractions for common agent patterns. They bundle state, graph, LLM, and memory into a single interface.

## Creating Agents

### From YAML Configuration

The primary way to create agents in production:

**Python:**
\`\`\`python
from flowgentra_ai.agent import Agent

agent = Agent.from_config_path("agent.yaml")
result = await agent.run({"input": "What is AI?"})
print(result["response"])
\`\`\`

**Rust:**
\`\`\`rust
use flowgentra_ai::prelude::*;

let mut agent = from_config_path("agent.yaml")?;
agent.state.set("input", json!("What is AI?"));
let result = agent.run().await?;
println!("{}", result.get("response").unwrap());
\`\`\`

### From Code (Builder Pattern)

Programmatic construction:

**Python:**
\`\`\`python
from flowgentra_ai.agent import AgentBuilder
from flowgentra_ai.llm import LLMConfig, LLMProvider
from typing import TypedDict

class AgentState(TypedDict):
    input: str
    response: str

builder = AgentBuilder(AgentState)

# Add nodes
builder.add_node("respond", respond_node)

# Configure graph
builder.set_entry_point("respond")

# Configure LLM
llm_config = LLMConfig(
    provider=LLMProvider.OpenAI,
    model="gpt-4",
    temperature=0.7,
)
builder.with_llm(llm_config)

# Build
agent = builder.build()
\`\`\`

**Rust:**
\`\`\`rust
use flowgentra_ai::prelude::*;

#[derive(State, Default, Clone)]
struct AgentState {
    input: String,
    response: String,
}

let agent = Agent::builder()
    .with_state_type::<AgentState>()
    .add_node("respond", Box::new(respond_node))
    .set_entry_point("respond")
    .with_llm(LLMConfig {
        provider: LLMProvider::OpenAI,
        model: "gpt-4".to_string(),
        temperature: 0.7,
        ..Default::default()
    })
    .build()?;
\`\`\`

## Agent Properties

### State Management

\`\`\`python
# Get/set state
agent.state["input"] = "question"
print(agent.state["response"])

# Full state access
print(agent.get_state())
\`\`\`

### Memory & Checkpointing

\`\`\`python
from flowgentra_ai.memory import FileCheckpointer

checkpointer = FileCheckpointer("./checkpoints")
agent = agent.with_checkpointer(checkpointer)

# Save to checkpoint
await agent.run_with_thread("user-42", {"input": "Hello"})

# Resume from checkpoint
result = await agent.run_with_thread("user-42", {"input": "Remember me?"})
\`\`\`

### LLM Access

\`\`\`python
# Access the LLM directly
llm = agent.llm
response = await llm.invoke([
    {"role": "user", "content": "Hello"}
])
print(response.content)
\`\`\`

## Running Agents

### Simple Execution

\`\`\`python
result = await agent.run({"input": "What is AI?"})
print(result)
\`\`\`

### With Thread (Multi-turn)

\`\`\`python
# First turn - saves checkpoint
result1 = await agent.run_with_thread("thread-1", {"input": "My name is Alice"})

# Second turn - loads checkpoint, has memory
result2 = await agent.run_with_thread("thread-1", {"input": "Who am I?"})
print(result2["response"])  # "You are Alice"
\`\`\`

### Streaming Results

\`\`\`python
# Stream node outputs as they complete
async for partial_result in agent.run_stream({"input": "Explain quantum computing"}):
    print(f"Node: {partial_result['node']}, State update: {partial_result['update']}")
\`\`\`

## Error Handling

\`\`\`python
from flowgentra_ai.error import FlowgentraError, NodeExecutionError

try:
    result = await agent.run(state)
except NodeExecutionError as e:
    print(f"Node '{e.node_name}' failed: {e.message}")
    # Handle node-specific errors
except FlowgentraError as e:
    print(f"Agent error: {e}")
\`\`\`

## Advanced Configurations

### Custom Handlers

\`\`\`python
async def custom_handler(state):
    # Custom logic here
    return state

builder.add_node("custom", custom_handler)
\`\`\`

### Middleware

\`\`\`python
from flowgentra_ai.middleware import Middleware

middleware = CustomMiddleware()
agent = agent.with_middleware(middleware)
\`\`\`

### Observability

\`\`\`python
from flowgentra_ai.observability import ExecutionTracer

tracer = ExecutionTracer()
agent = agent.with_observability(tracer)

result = await agent.run(state)
tracer.visualize_graph("graph.html")
\`\`\`

## Agent Subclasses

### Memory-Aware Agent

Automatically manages conversation memory:

\`\`\`python
from flowgentra_ai.agent import MemoryAwareAgent

agent = MemoryAwareAgent.from_config("agent.yaml")
# Automatically appends messages to state["messages"]
\`\`\`

## Best Practices

1. **Use YAML for configuration** - Separates config from code
2. **Set reasonable timeouts** - Prevent hanging nodes
3. **Implement error recovery** - Use RetryNode or conditional routing
4. **Monitor token usage** - Track costs
5. **Test with different LLM models** - Ensure portability
6. **Version control configs** - Track changes over time
`}),ha=[{id:`overview`,label:`Overview`},{id:`how-agents-work`,label:`How Predefined Agents Work`},{id:`zero-shot-react`,label:`ZeroShotReAct`},{id:`few-shot-react`,label:`FewShotReAct`},{id:`conversational`,label:`Conversational`},{id:`tool-calling`,label:`ToolCalling`},{id:`structured-chat`,label:`StructuredChatZeroShotReAct`},{id:`self-ask-with-search`,label:`SelfAskWithSearch`},{id:`react-docstore`,label:`ReactDocstore`},{id:`comparison`,label:`Comparison Table`},{id:`builder-api`,label:`AgentBuilder API`}],ga={background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`,marginBottom:20},_a={...ga,fontFamily:`monospace`,fontSize:`0.875rem`,color:`#8b949e`,lineHeight:1.7,whiteSpace:`pre`,overflowX:`auto`},H=({color:e=`#58a6ff`,children:t})=>(0,j.jsx)(`span`,{style:{display:`inline-block`,background:e+`22`,color:e,borderRadius:4,padding:`1px 8px`,fontSize:`0.8rem`,fontWeight:600,marginRight:6,marginBottom:4},children:t}),va=({title:e,children:t})=>(0,j.jsxs)(`div`,{style:{background:`#161b22`,border:`1px solid #30363d`,borderLeft:`3px solid #58a6ff`,borderRadius:6,padding:`14px 18px`,marginBottom:20},children:[e&&(0,j.jsx)(`div`,{style:{color:`#58a6ff`,fontWeight:600,marginBottom:6,fontSize:`0.9rem`},children:e}),(0,j.jsx)(`div`,{style:{color:`#8b949e`,lineHeight:1.7,fontSize:`0.92rem`},children:t})]});function ya(){let{language:e}=M();return(0,j.jsxs)(P,{anchors:ha,children:[(0,j.jsx)(`h1`,{style:{fontSize:`2rem`,fontWeight:700,color:`#e6edf3`,letterSpacing:`-0.02em`,marginBottom:8,marginTop:0},children:`Predefined Agent Types`}),(0,j.jsxs)(`p`,{style:{color:`#8b949e`,marginBottom:40,lineHeight:1.7},children:[`Flowgentra ships `,(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`seven`}),` production-ready predefined agents that match LangChain's agent taxonomy — each implemented as a compiled `,(0,j.jsx)(`code`,{style:{color:`#79c0ff`},children:`StateGraph`}),` with dedicated prompt templates, routing logic, and parsing nodes. No graph wiring required.`]}),(0,j.jsx)(ba,{id:`overview`,title:`Overview`,children:(0,j.jsx)(`div`,{style:{...ga,padding:0,overflow:`hidden`},children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,color:`#8b949e`,fontSize:`0.9rem`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsxs)(`tr`,{style:{background:`#161b22`},children:[(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`10px 14px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Agent Type`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`10px 14px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`String key`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`10px 14px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Best for`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`10px 14px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:`Requires`})]})}),(0,j.jsx)(`tbody`,{children:[[`ZeroShotReAct`,`zero-shot-react`,`General Q&A with tools`,`Any text model`],[`FewShotReAct`,`few-shot-react`,`Specialized domain with examples`,`Any text model`],[`Conversational`,`conversational`,`Multi-turn chatbot`,`Any text model`],[`ToolCalling`,`tool-calling`,`Structured native function calling`,`Function-calling model`],[`StructuredChatZeroShotReAct`,`structured-chat-zero-shot-react`,`JSON-blob actions`,`JSON-capable model`],[`SelfAskWithSearch`,`self-ask-with-search`,`Multi-hop factual decomposition`,`"search" tool`],[`ReactDocstore`,`react-docstore`,`Document store Search + Lookup`,`"search" + "lookup" tools`]].map(([e,t,n,r],i,a)=>(0,j.jsxs)(`tr`,{style:{background:i%2==0?`transparent`:`#0d1117`},children:[(0,j.jsx)(`td`,{style:{padding:`9px 14px`,borderBottom:i<a.length-1?`1px solid #21262d`:`none`,color:`#79c0ff`,fontFamily:`monospace`,fontSize:`0.85rem`},children:e}),(0,j.jsx)(`td`,{style:{padding:`9px 14px`,borderBottom:i<a.length-1?`1px solid #21262d`:`none`,fontFamily:`monospace`,fontSize:`0.82rem`},children:t}),(0,j.jsx)(`td`,{style:{padding:`9px 14px`,borderBottom:i<a.length-1?`1px solid #21262d`:`none`},children:n}),(0,j.jsx)(`td`,{style:{padding:`9px 14px`,borderBottom:i<a.length-1?`1px solid #21262d`:`none`,color:`#3fb950`},children:r})]},e))})]})})}),(0,j.jsxs)(ba,{id:`how-agents-work`,title:`How Predefined Agents Work Internally`,children:[(0,j.jsxs)(`p`,{style:{color:`#8b949e`,marginBottom:16,lineHeight:1.7},children:[`Every predefined agent is a compiled `,(0,j.jsx)(`code`,{style:{color:`#79c0ff`},children:`StateGraph<DynState>`}),`. When you call `,(0,j.jsx)(`code`,{style:{color:`#79c0ff`},children:`AgentBuilder.build_graph()`}),`, Flowgentra wires the graph for that agent type — you never touch edges or routers yourself.`]}),(0,j.jsx)(`div`,{style:_a,children:`                    ┌──────────────────────────────────────────────┐
                    │              StateGraph<DynState>            │
                    │                                              │
  Input string      │   ┌─────────────┐     conditional_router    │
──────────────────► │   │ Agent Node  │ ──────────────────────────┤
                    │   │ (LLM call)  │                           │
                    │   └─────────────┘     ┌────────────────┐    │
                    │         ▲             │  tool_executor │    │
                    │         │             │  (user fn)     │    │
                    │         └─────────────┤                │    │
                    │                       └────────────────┘    │
                    │                              │               │
                    │                              ▼               │
                    │                        END (extract answer)  │
                    └──────────────────────────────────────────────┘`}),(0,j.jsx)(va,{title:`Key internals shared by all ReAct-family agents`,children:(0,j.jsxs)(`ul`,{style:{margin:0,paddingLeft:20},children:[(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Agent Node`}),` — calls the LLM with system prompt + tool list + user input; writes `,(0,j.jsx)(`code`,{children:`llm_response`}),`, `,(0,j.jsx)(`code`,{children:`needs_tool`}),`, `,(0,j.jsx)(`code`,{children:`pending_tool_name`}),`, `,(0,j.jsx)(`code`,{children:`pending_tool_args`}),` to `,(0,j.jsx)(`code`,{children:`DynState`}),`.`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Conditional router`}),` — reads `,(0,j.jsx)(`code`,{children:`needs_tool`}),`; routes to `,(0,j.jsx)(`code`,{children:`tool_executor`}),` or `,(0,j.jsx)(`code`,{children:`END`}),`.`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`ToolExecutorNode`}),` — calls the user-provided `,(0,j.jsx)(`code`,{children:`with_tool_executor(fn)`}),` closure with `,(0,j.jsx)(`code`,{children:`(tool_name, args)`}),`; writes `,(0,j.jsx)(`code`,{children:`tool_result`}),`.`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Loop`}),` — after tool execution the graph loops back to the Agent Node so the LLM can see the result and decide whether to call more tools or finish.`]})]})}),(0,j.jsxs)(`p`,{style:{color:`#8b949e`,lineHeight:1.7},children:[`Conversation agents (Conversational) use a single-node graph. Document-store agents (ReactDocstore) route to two different tool nodes. ToolCalling passes structured `,(0,j.jsx)(`code`,{children:`ToolDefinition`}),` schemas to `,(0,j.jsx)(`code`,{children:`chat_with_tools()`}),` and reads `,(0,j.jsx)(`code`,{children:`response.tool_calls`}),` instead of parsing text tags.`]})]}),(0,j.jsxs)(ba,{id:`zero-shot-react`,title:`ZeroShotReAct`,children:[(0,j.jsxs)(`div`,{style:{marginBottom:12},children:[(0,j.jsx)(H,{children:`General purpose`}),(0,j.jsx)(H,{color:`#3fb950`,children:`All models`}),(0,j.jsx)(H,{color:`#f0883e`,children:`ReAct loop`})]}),(0,j.jsxs)(`p`,{style:{color:`#8b949e`,marginBottom:16,lineHeight:1.7},children:[`The classic Reason+Act loop. The LLM reasons step by step, decides which tool to call via `,(0,j.jsx)(`code`,{style:{color:`#79c0ff`},children:`<action>tool_name(args)</action>`}),` tags, observes the result, and loops until it emits `,(0,j.jsx)(`code`,{style:{color:`#79c0ff`},children:`<answer>...</answer>`}),`.`]}),(0,j.jsx)(`div`,{style:_a,children:`Input
  │
  ▼
[AgentReasoningNode]  ◄──────────────────────────────┐
  │ sets: llm_response, needs_tool,                   │
  │       pending_tool_name, pending_tool_args         │
  ▼                                                    │
reasoning_router                                       │
  ├─► needs_tool=true  ──► [ToolExecutorNode] ─────────┘
  │                          sets: tool_result
  └─► needs_tool=false ──► [END]
        extract: <answer>...</answer>`}),(0,j.jsx)(N,{rust:`use flowgentra_ai::core::agents::{AgentBuilder, AgentType, ToolSpec};

let search = ToolSpec::new("web_search", "Search the web for information")
    .with_parameter("query", "string")
    .required("query");

let calc = ToolSpec::new("calculator", "Evaluate a math expression")
    .with_parameter("expression", "string")
    .required("expression");

let agent = AgentBuilder::new(AgentType::ZeroShotReAct)
    .with_name("research-assistant")
    .with_llm_config("gpt-4o")
    .with_tool(search)
    .with_tool(calc)
    .with_temperature(0.2)
    .with_retries(2)
    .with_tool_executor(|name, args| match name {
        "web_search"  => format!("Results for: {}", args),
        "calculator"  => format!("= {}", eval_expr(args)),
        _             => format!("Unknown tool: {}", name),
    })
    .build_graph()?;

let answer = agent.execute_input("What is 15% of the population of France?").await?;`,python:`from flowgentra_ai.agent import ZeroShotReAct, ToolSpec
from flowgentra_ai.llm import LLM

search = ToolSpec("web_search", "Search the web for information")
search.add_parameter("query", "string")
search.set_required("query")

calc = ToolSpec("calculator", "Evaluate a math expression")
calc.add_parameter("expression", "string")
calc.set_required("expression")

agent = ZeroShotReAct(
    name="research-assistant",
    llm=LLM(provider="openai", model="gpt-4o"),
    tools=[search, calc],
    retries=2,
)

answer = agent.execute_input("What is 15% of the population of France?")`}),(0,j.jsxs)(va,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Prompt format:`}),` the system prompt instructs the LLM to emit `,(0,j.jsx)(`code`,{children:`<action>tool_name(args)</action>`}),` for tool calls and `,(0,j.jsx)(`code`,{children:`<answer>...</answer>`}),` for final answers.  `,(0,j.jsx)(`code`,{children:`parse_action_tags()`}),` and `,(0,j.jsx)(`code`,{children:`parse_answer_tags()`}),` in `,(0,j.jsx)(`code`,{children:`graph_nodes.rs`}),` handle extraction.`]})]}),(0,j.jsxs)(ba,{id:`few-shot-react`,title:`FewShotReAct`,children:[(0,j.jsxs)(`div`,{style:{marginBottom:12},children:[(0,j.jsx)(H,{children:`Domain-specific`}),(0,j.jsx)(H,{color:`#3fb950`,children:`All models`}),(0,j.jsx)(H,{color:`#f0883e`,children:`ReAct + examples`})]}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16,lineHeight:1.7},children:`Same graph as ZeroShotReAct, but the system prompt includes worked demonstrations (2–5 recommended) so the LLM follows your domain's specific reasoning pattern.`}),(0,j.jsx)(N,{rust:`let agent = AgentBuilder::new(AgentType::FewShotReAct)
    .with_name("finance-analyst")
    .with_llm_config("gpt-4o")
    .with_tool(data_tool)
    .with_system_prompt(r#"You are a financial analyst.

EXAMPLES:
Example 1:
Input: What was Tesla's Q3 2023 revenue?
Thought: I need to find Tesla's Q3 2023 earnings.
Action: <action>search(Tesla Q3 2023 earnings)</action>
Observation: Tesla reported $23.85B in Q3 2023.
Thought: I have the answer.
Output: <answer>Tesla's Q3 2023 revenue was $23.85 billion.</answer>
---
"#)
    .build_graph()?;`,python:`from flowgentra_ai.agent import FewShotReAct, ToolSpec
from flowgentra_ai.llm import LLM

agent = FewShotReAct(
    name="finance-analyst",
    llm=LLM(provider="openai", model="gpt-4o"),
    tools=[data_tool],
    system_prompt="""You are a financial analyst.

EXAMPLES:
Example 1:
Input: What was Tesla's Q3 2023 revenue?
Thought: I need to find Tesla's Q3 2023 earnings.
Action: <action>search(Tesla Q3 2023 earnings)</action>
Observation: Tesla reported $23.85B in Q3 2023.
Thought: I have the answer.
Output: <answer>Tesla's Q3 2023 revenue was $23.85 billion.</answer>
---
""",
    memory_steps=12,
)`})]}),(0,j.jsxs)(ba,{id:`conversational`,title:`Conversational`,children:[(0,j.jsxs)(`div`,{style:{marginBottom:12},children:[(0,j.jsx)(H,{children:`Chatbot`}),(0,j.jsx)(H,{color:`#3fb950`,children:`All models`}),(0,j.jsx)(H,{color:`#a5d6ff`,children:`Single node`})]}),(0,j.jsxs)(`p`,{style:{color:`#8b949e`,marginBottom:16,lineHeight:1.7},children:[`Single-node graph — no tool loop. The LLM receives the system prompt, full conversation history (injected from `,(0,j.jsx)(`code`,{style:{color:`#79c0ff`},children:`conversation_history`}),` state), and the current message; it responds directly. History is appended after each turn.`]}),(0,j.jsx)(`div`,{style:_a,children:`Input + conversation_history
  │
  ▼
[ConversationalNode]
  │ calls: client.chat([system, ...history, user])
  │ sets: response
  ▼
[END]  →  response extracted`}),(0,j.jsx)(N,{rust:`let agent = AgentBuilder::new(AgentType::Conversational)
    .with_name("support-bot")
    .with_llm_config("gpt-4o")
    .with_system_prompt("You are a friendly customer support agent.")
    .with_memory_steps(20)    // keep last 20 turns in context
    .build_graph()?;

let r1 = agent.execute_input("Hi, I can't log in").await?;
let r2 = agent.execute_input("My email is alice@example.com").await?;
// r2: agent remembers r1 context`,python:`from flowgentra_ai.agent import Conversational
from flowgentra_ai.llm import LLM

agent = Conversational(
    name="support-bot",
    llm=LLM(provider="openai", model="gpt-4o"),
    system_prompt="You are a friendly customer support agent.",
    memory_steps=20,
)

r1 = agent.execute_input("Hi, I can't log in")
r2 = agent.execute_input("My email is alice@example.com")
# r2: agent remembers r1 context`})]}),(0,j.jsxs)(ba,{id:`tool-calling`,title:`ToolCalling`,children:[(0,j.jsxs)(`div`,{style:{marginBottom:12},children:[(0,j.jsx)(H,{children:`Native API`}),(0,j.jsx)(H,{color:`#3fb950`,children:`Function-calling models`}),(0,j.jsx)(H,{color:`#f0883e`,children:`ReAct loop`})]}),(0,j.jsxs)(`p`,{style:{color:`#8b949e`,marginBottom:16,lineHeight:1.7},children:[`Uses the provider's `,(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`native function/tool-calling API`}),` instead of text tags. Tools are converted to JSON-schema `,(0,j.jsx)(`code`,{style:{color:`#79c0ff`},children:`ToolDefinition`}),`s and passed to `,(0,j.jsx)(`code`,{style:{color:`#79c0ff`},children:`chat_with_tools()`}),`. The LLM returns structured `,(0,j.jsx)(`code`,{style:{color:`#79c0ff`},children:`tool_calls`}),` in the response — no regex parsing needed.`]}),(0,j.jsx)(`div`,{style:_a,children:`Input
  │
  ▼
[ToolCallingNode]  ◄──────────────────────────────────────┐
  │ calls: client.chat_with_tools(messages, tool_defs)     │
  │ reads: response.tool_calls                             │
  │ sets: needs_tool, pending_tool_name,                   │
  │       pending_tool_args (JSON string),                 │
  │       tc_call_id (for tool_result message)             │
  ▼                                                        │
tool_calling_router                                        │
  ├─► needs_tool=true  ──► [ToolExecutorNode] ─────────────┘
  │                          (result replayed as tool_result message)
  └─► needs_tool=false ──► [END]  →  llm_response`}),(0,j.jsxs)(va,{title:`ToolSpec → ToolDefinition conversion`,children:[(0,j.jsx)(`code`,{children:`ToolSpec`}),` parameters (`,(0,j.jsx)(`code`,{children:`string`}),`, `,(0,j.jsx)(`code`,{children:`integer`}),`, `,(0,j.jsx)(`code`,{children:`boolean`}),`, `,(0,j.jsx)(`code`,{children:`array`}),`, `,(0,j.jsx)(`code`,{children:`object`}),`) are automatically converted to a JSON Schema `,(0,j.jsx)(`code`,{children:`properties`}),` object with `,(0,j.jsx)(`code`,{children:`required`}),` list and passed to the LLM. The `,(0,j.jsx)(`code`,{children:`tool_call_id`}),` from the response is stored in `,(0,j.jsx)(`code`,{children:`tc_call_id`}),` so the next iteration can attach the result as a proper `,(0,j.jsx)(`code`,{children:`MessageRole::Tool`}),` message.`]}),(0,j.jsx)(N,{rust:`use flowgentra_ai::core::agents::{AgentBuilder, AgentType, ToolSpec};

let weather = ToolSpec::new("get_weather", "Get current weather")
    .with_parameter("location", "string")
    .with_parameter("unit", "string")      // "celsius" | "fahrenheit"
    .required("location");

// Works with any function-calling–capable model
let agent = AgentBuilder::new(AgentType::ToolCalling)
    .with_name("weather-agent")
    .with_llm_config("gpt-4o")             // or claude-3-5-sonnet, mistral-large
    .with_tool(weather)
    .with_tool_executor(|name, args| match name {
        "get_weather" => format!("72°F, sunny — args: {}", args),
        _             => format!("Unknown: {}", name),
    })
    .build_graph()?;

let answer = agent.execute_input("What's the weather in Paris?").await?;`,python:`from flowgentra_ai.agent import ToolCalling, ToolSpec
from flowgentra_ai.llm import LLM

weather = ToolSpec("get_weather", "Get current weather for a location")
weather.add_parameter("location", "string")
weather.add_parameter("unit", "string")
weather.set_required("location")

agent = ToolCalling(
    name="weather-agent",
    llm=LLM(provider="openai", model="gpt-4o"),   # or provider="anthropic", model="claude-3-5-sonnet-20241022"
    tools=[weather],
)

answer = agent.execute_input("What's the weather in Paris?")`})]}),(0,j.jsxs)(ba,{id:`structured-chat`,title:`StructuredChatZeroShotReAct`,children:[(0,j.jsxs)(`div`,{style:{marginBottom:12},children:[(0,j.jsx)(H,{children:`JSON actions`}),(0,j.jsx)(H,{color:`#3fb950`,children:`JSON-capable models`}),(0,j.jsx)(H,{color:`#f0883e`,children:`ReAct loop`})]}),(0,j.jsxs)(`p`,{style:{color:`#8b949e`,marginBottom:16,lineHeight:1.7},children:[`ReAct agent that communicates via `,(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`JSON blobs`}),` instead of XML-style tags. Each LLM turn produces a fenced code block containing `,(0,j.jsx)(`code`,{style:{color:`#79c0ff`},children:`{"action": "tool_name", "action_input": ...}`}),`. The final answer uses `,(0,j.jsx)(`code`,{style:{color:`#79c0ff`},children:`"action": "Final Answer"`}),`.`]}),(0,j.jsx)(`div`,{style:_a,children:`LLM turn output:
  Thought: I need to search for this.
  Action:
  \`\`\`
  {"action": "web_search", "action_input": "population of France"}
  \`\`\`

  ──► parse_structured_action() extracts action + action_input
  ──► if action == "Final Answer" → set structured_final_answer, END
  ──► otherwise → ToolExecutorNode → loop back with Observation`}),(0,j.jsx)(N,{rust:`let agent = AgentBuilder::new(AgentType::StructuredChatZeroShotReAct)
    .with_name("structured-agent")
    .with_llm_config("gpt-4o")
    .with_tool(ToolSpec::new("calculator", "Evaluate math")
        .with_parameter("expression", "string")
        .required("expression"))
    .with_tool(ToolSpec::new("lookup", "Look up a value")
        .with_parameter("key", "string")
        .required("key"))
    .with_tool_executor(|name, args| match name {
        "calculator" => format!("= {}", eval_expr(args)),
        "lookup"     => format!("value: {}", db_lookup(args)),
        _            => "unknown tool".to_string(),
    })
    .with_temperature(0.0)
    .build_graph()?;`,python:`from flowgentra_ai.agent import StructuredChat, ToolSpec
from flowgentra_ai.llm import LLM

calc = ToolSpec("calculator", "Evaluate a math expression")
calc.add_parameter("expression", "string")
calc.set_required("expression")

agent = StructuredChat(
    name="structured-agent",
    llm=LLM(provider="openai", model="gpt-4o"),
    tools=[calc],
)

result = agent.execute_input("What is 15% of 2847?")`}),(0,j.jsxs)(va,{children:[`The system prompt is injected with the tool list via `,(0,j.jsx)(`code`,{children:`{tools}`}),` and `,(0,j.jsx)(`code`,{children:`{tool_names}`}),` placeholders at graph build time. `,(0,j.jsx)(`code`,{children:`parse_structured_action()`}),` in `,(0,j.jsx)(`code`,{children:`graph_nodes.rs`}),` extracts the JSON from the last fenced code block (or bare JSON).`]})]}),(0,j.jsxs)(ba,{id:`self-ask-with-search`,title:`SelfAskWithSearch`,children:[(0,j.jsxs)(`div`,{style:{marginBottom:12},children:[(0,j.jsx)(H,{children:`Multi-hop Q&A`}),(0,j.jsx)(H,{color:`#3fb950`,children:`Any model`}),(0,j.jsx)(H,{color:`#a5d6ff`,children:`Requires: search tool`})]}),(0,j.jsxs)(`p`,{style:{color:`#8b949e`,marginBottom:16,lineHeight:1.7},children:[`Decomposes a complex question into a chain of simpler sub-questions, answers each with a `,(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`search`}),` tool, and accumulates `,(0,j.jsx)(`em`,{children:`Intermediate answer`}),`s in a growing scratchpad. Terminates when the LLM emits `,(0,j.jsx)(`code`,{style:{color:`#79c0ff`},children:`So the final answer is: ...`}),`.`]}),(0,j.jsx)(`div`,{style:_a,children:`System prompt = 4 worked few-shot examples (built-in)
State: scratchpad (grows each iteration)

Turn 1:
  prompt = examples + "Question: X
Are follow up questions needed here:"
  LLM → "Yes.
Follow up: Who directed Jaws?"
  parse_self_ask_response() → FollowUp("Who directed Jaws?")
  → set pending_tool_name="search", pending_tool_args="Who directed Jaws?"

  [ToolExecutorNode] → "Steven Spielberg"
  → append "Follow up: ...
Intermediate answer: Steven Spielberg
" to scratchpad

Turn 2:
  prompt = examples + "Question: X
Are follow up questions needed here: [scratchpad]"
  LLM → "So the final answer is: Steven Spielberg"
  parse_self_ask_response() → FinalAnswer("Steven Spielberg")
  → set sa_final_answer, END`}),(0,j.jsx)(N,{rust:`// Requires: a tool named "search"
let agent = AgentBuilder::new(AgentType::SelfAskWithSearch)
    .with_name("fact-checker")
    .with_llm_config("gpt-4o")
    .with_tool(ToolSpec::new("search", "Search Wikipedia or the web")
        .with_parameter("query", "string")
        .required("query"))
    .with_tool_executor(|_name, query| wikipedia_search(query))
    .with_temperature(0.0)
    .build_graph()?;

let answer = agent.execute_input(
    "Who was the maternal grandfather of George Washington?"
).await?;
// answer: "Joseph Ball"`,python:`from flowgentra_ai.agent import SelfAskWithSearch, ToolSpec
from flowgentra_ai.llm import LLM

search = ToolSpec("search", "Search for factual information")
search.add_parameter("query", "string")
search.set_required("query")

agent = SelfAskWithSearch(
    name="fact-checker",
    llm=LLM(provider="openai", model="gpt-4o"),
    tools=[search],
)

answer = agent.execute_input(
    "Who was the maternal grandfather of George Washington?"
)
print(answer)  # "Joseph Ball"`}),(0,j.jsxs)(va,{title:`Built-in few-shot examples`,children:[`The default system prompt contains 4 complete examples (Muhammad Ali/Alan Turing, craigslist founder, George Washington, Jaws/Casino Royale directors) that teach the LLM the `,(0,j.jsx)(`em`,{children:`Follow up / Intermediate answer / So the final answer is`}),` format. You can override the system prompt if your domain needs different examples.`]})]}),(0,j.jsxs)(ba,{id:`react-docstore`,title:`ReactDocstore`,children:[(0,j.jsxs)(`div`,{style:{marginBottom:12},children:[(0,j.jsx)(H,{children:`Document store`}),(0,j.jsx)(H,{color:`#3fb950`,children:`Any model`}),(0,j.jsx)(H,{color:`#a5d6ff`,children:`Requires: search + lookup`})]}),(0,j.jsxs)(`p`,{style:{color:`#8b949e`,marginBottom:16,lineHeight:1.7},children:[`ReAct loop for document stores. The LLM navigates via three verbs: `,(0,j.jsx)(`code`,{style:{color:`#79c0ff`},children:`Search[query]`}),` to find a document, `,(0,j.jsx)(`code`,{style:{color:`#79c0ff`},children:`Lookup[term]`}),` to drill into the last found document, and `,(0,j.jsx)(`code`,{style:{color:`#79c0ff`},children:`Finish[answer]`}),` to terminate.`]}),(0,j.jsx)(`div`,{style:_a,children:`State: scratchpad (Thought + Action + Observation blocks)

LLM output:
  "Thought: I need to search for Colorado orogeny.
   Action: Search[Colorado orogeny]"

parse_docstore_action() →
  ├─ Search[q]  → pending_tool_name="search",  pending_tool_args=q
  ├─ Lookup[t]  → pending_tool_name="lookup",  pending_tool_args=t
  └─ Finish[a]  → ds_final_answer=a, END

[ToolExecutorNode] dispatches by tool name to user fn:
  fn(tool_name="search", args="Colorado orogeny") → observation text

observation appended to scratchpad → next LLM turn sees full context`}),(0,j.jsx)(N,{rust:`// Requires: tools named "search" and "lookup"
let mut last_doc = String::new();

let agent = AgentBuilder::new(AgentType::ReactDocstore)
    .with_name("wiki-agent")
    .with_llm_config("gpt-4o")
    // pre-registered stubs; override descriptions if desired
    .with_tool(ToolSpec::new("search", "Find a document in the store")
        .with_parameter("query", "string").required("query"))
    .with_tool(ToolSpec::new("lookup", "Look up a term in the last found doc")
        .with_parameter("term", "string").required("term"))
    .with_tool_executor(move |name, args| match name {
        "search" => {
            let result = docstore.search(args);
            last_doc = result.clone();
            result
        }
        "lookup" => docstore.lookup(args, &last_doc),
        _        => "Unknown tool".to_string(),
    })
    .with_temperature(0.0)
    .build_graph()?;

let answer = agent.execute_input(
    "What is the elevation range of the High Plains?"
).await?;`,python:`from flowgentra_ai.agent import ReactDocstore, ToolSpec
from flowgentra_ai.llm import LLM

docstore = WikipediaDocstore()    # your docstore implementation

search_tool = ToolSpec("search", "Find a document in the store")
search_tool.add_parameter("query", "string")
search_tool.set_required("query")

lookup_tool = ToolSpec("lookup", "Look up a term in the last found document")
lookup_tool.add_parameter("term", "string")
lookup_tool.set_required("term")

agent = ReactDocstore(
    name="wiki-agent",
    llm=LLM(provider="openai", model="gpt-4o"),
    tools=[search_tool, lookup_tool],
)

answer = agent.execute_input(
    "What is the elevation range of the High Plains?"
)
print(answer)  # "1,800 to 7,000 ft (550 to 2,130 m)."`}),(0,j.jsxs)(va,{title:`Built-in few-shot examples`,children:[`The system prompt contains 2 complete Colorado orogeny and Allie Brosh examples that demonstrate the Thought/Search/Lookup/Finish cycle. The `,(0,j.jsx)(`code`,{children:`scratchpad`}),` state key accumulates the full reasoning trace across iterations.`]})]}),(0,j.jsx)(ba,{id:`comparison`,title:`Comparison Table`,children:(0,j.jsx)(`div`,{style:{...ga,padding:0,overflow:`hidden`},children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,color:`#8b949e`,fontSize:`0.88rem`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsx)(`tr`,{style:{background:`#161b22`},children:[`Agent`,`Graph nodes`,`Tool signal`,`State keys written`,`Terminates when`].map(e=>(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`10px 12px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`,whiteSpace:`nowrap`},children:e},e))})}),(0,j.jsx)(`tbody`,{children:[[`ZeroShotReAct`,`agent → tool_executor → agent`,`<action>…</action>`,`llm_response, needs_tool, pending_tool_*`,`<answer>…</answer>`],[`FewShotReAct`,`agent → tool_executor → agent`,`<action>…</action>`,`same as ZeroShot`,`<answer>…</answer>`],[`Conversational`,`conversation → END`,`n/a`,`response, conversation_history`,`always after 1 turn`],[`ToolCalling`,`agent → tool_executor → agent`,`response.tool_calls`,`llm_response, tc_call_id, tc_tool_calls_json`,`no tool_calls in response`],[`StructuredChatZeroShotReAct`,`agent → tool_executor → agent`,'```{"action":…}```',`llm_response, structured_final_answer`,`"action":"Final Answer"`],[`SelfAskWithSearch`,`agent → tool_executor → agent`,`"Follow up: …"`,`scratchpad, sa_follow_up, sa_final_answer`,`"So the final answer is:"`],[`ReactDocstore`,`agent → tool_executor → agent`,`Action: Search/Lookup/Finish`,`scratchpad, ds_action_type, ds_final_answer`,`Action: Finish[…]`]].map(([e,t,n,r,i],a,o)=>(0,j.jsxs)(`tr`,{style:{background:a%2==0?`transparent`:`#0d1117`},children:[(0,j.jsx)(`td`,{style:{padding:`8px 12px`,borderBottom:a<o.length-1?`1px solid #21262d`:`none`,color:`#79c0ff`,fontFamily:`monospace`,fontSize:`0.82rem`},children:e}),(0,j.jsx)(`td`,{style:{padding:`8px 12px`,borderBottom:a<o.length-1?`1px solid #21262d`:`none`,fontFamily:`monospace`,fontSize:`0.8rem`},children:t}),(0,j.jsx)(`td`,{style:{padding:`8px 12px`,borderBottom:a<o.length-1?`1px solid #21262d`:`none`,fontFamily:`monospace`,fontSize:`0.8rem`},children:n}),(0,j.jsx)(`td`,{style:{padding:`8px 12px`,borderBottom:a<o.length-1?`1px solid #21262d`:`none`,fontFamily:`monospace`,fontSize:`0.78rem`,color:`#8b949e`},children:r}),(0,j.jsx)(`td`,{style:{padding:`8px 12px`,borderBottom:a<o.length-1?`1px solid #21262d`:`none`,fontFamily:`monospace`,fontSize:`0.8rem`},children:i})]},e))})]})})}),(0,j.jsxs)(ba,{id:`builder-api`,title:`Agent Constructor API Reference`,children:[(0,j.jsxs)(`p`,{style:{color:`#8b949e`,marginBottom:16,lineHeight:1.7},children:[`In `,(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Python`}),`, use the typed constructors (`,(0,j.jsx)(`code`,{style:{color:`#79c0ff`},children:`ZeroShotReAct(name=..., llm=LLM(...), tools=[...])`}),`) directly — there is no `,(0,j.jsx)(`code`,{style:{color:`#79c0ff`},children:`AgentBuilder`}),` in Python. In `,(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Rust`}),`, use `,(0,j.jsx)(`code`,{style:{color:`#79c0ff`},children:`AgentBuilder::new(AgentType::ZeroShotReAct)`}),` or the typed constructors. The parameters below apply to both.`]}),(0,j.jsx)(`div`,{style:{...ga,padding:0,overflow:`hidden`},children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,color:`#8b949e`,fontSize:`0.88rem`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsx)(`tr`,{style:{background:`#161b22`},children:[`Method`,`Type`,`Description`].map(e=>(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`10px 12px`,borderBottom:`1px solid #21262d`,color:`#e6edf3`},children:e},e))})}),(0,j.jsx)(`tbody`,{children:[[`name / .with_name(str)`,`param / builder`,`Agent name used in logs and state`],[`llm=LLM(...) / .with_llm_config(model)`,`Python / Rust`,`Python: pass LLM(provider, model) directly. Rust: model string shorthand (provider auto-detected)`],[`.with_llm(LLMConfig)`,`Rust builder`,`Full LLMConfig object — takes precedence over with_llm_config`],[`(no Python param) / .with_temperature(f32)`,`Rust builder`,`LLM temperature 0.0–1.0 (clamped). In Python set on LLM(... temperature=0.2)`],[`tools=[...] / .with_tool(ToolSpec)`,`param / builder`,`Register tools. ToolSpec: name + description + parameters + required list`],[`system_prompt / .with_system_prompt(str)`,`param / builder`,`Override the default system prompt. Default prompts are type-specific.`],[`memory_steps / .with_memory_steps(usize)`,`param / builder`,`Enable conversation memory; keep last N turns. Used by Conversational.`],[`retries / .with_retries(usize)`,`param / builder`,`Retry failed LLM calls N times`],[`.with_tool_executor(fn)`,`Rust builder only`,`Closure called with (tool_name: &str, args: &str) → String. Required for agents that call tools.`],[`.with_param(key, value)`,`Rust builder only`,`Add arbitrary custom parameters to config`],[`.build_graph()`,`Rust → GraphBasedAgent`,`Compile the agent graph. Call execute_input(str) on the result.`],[`.build()`,`Rust → Box<dyn Agent>`,`Compile to a trait object (sync process() only; use build_graph() for async)`],[`agent.execute_input(str)`,`→ String`,`Run the compiled graph with a text input, return the final answer string`]].map(([e,t,n],r,i)=>(0,j.jsxs)(`tr`,{style:{background:r%2==0?`transparent`:`#0d1117`},children:[(0,j.jsx)(`td`,{style:{padding:`8px 12px`,borderBottom:r<i.length-1?`1px solid #21262d`:`none`,color:`#79c0ff`,fontFamily:`monospace`,fontSize:`0.82rem`,whiteSpace:`nowrap`},children:e}),(0,j.jsx)(`td`,{style:{padding:`8px 12px`,borderBottom:r<i.length-1?`1px solid #21262d`:`none`,color:`#f0883e`,fontFamily:`monospace`,fontSize:`0.82rem`},children:t}),(0,j.jsx)(`td`,{style:{padding:`8px 12px`,borderBottom:r<i.length-1?`1px solid #21262d`:`none`},children:n})]},e))})]})}),(0,j.jsx)(N,{rust:`// Minimal — model required, everything else optional
let agent = AgentBuilder::new(AgentType::ZeroShotReAct)
    .with_llm_config("gpt-4o")
    .with_tool_executor(|name, args| my_executor(name, args))
    .build_graph()?;

// Full options
let agent = AgentBuilder::new(AgentType::ToolCalling)
    .with_name("production-agent")
    .with_llm_config("claude-3-5-sonnet-20241022")
    .with_temperature(0.1)
    .with_max_tokens(4096)
    .with_tool(search_tool)
    .with_tool(calc_tool)
    .with_system_prompt("Custom instructions…")
    .with_memory_steps(10)
    .with_retries(3)
    .with_tool_executor(|name, args| dispatcher(name, args))
    .build_graph()?;`,python:`from flowgentra_ai.agent import ToolCalling, ZeroShotReAct
from flowgentra_ai.llm import LLM

# Minimal
agent = ToolCalling(
    name="agent",
    llm=LLM(provider="openai", model="gpt-4o"),
)

# Full options
agent = ToolCalling(
    name="production-agent",
    llm=LLM(provider="anthropic", model="claude-3-5-sonnet-20241022"),
    tools=[search_tool, calc_tool],
    system_prompt="Custom instructions…",
    memory_steps=10,
    retries=3,
)

answer = agent.execute_input("Your question here")`})]})]})}function ba({id:e,title:t,children:n}){return(0,j.jsxs)(`section`,{id:e,style:{marginBottom:56,scrollMarginTop:80},children:[(0,j.jsx)(`h2`,{style:{fontSize:`1.5rem`,fontWeight:600,color:`#e6edf3`,marginBottom:16,marginTop:0},children:t}),n]})}var xa=()=>(0,j.jsx)(P,{title:`Supported LLM Providers`,description:`Complete guide to 7 LLM providers: OpenAI, Anthropic, Mistral, Groq, Ollama, Azure, HuggingFace.`,content:`# Supported LLM Providers

## Overview

Flowgentra supports 7 major LLM providers, including commercial, open-source, and self-hosted options.

## 1. OpenAI

Most popular, best quality models. Requires API key.

**Setup:**
\`\`\`bash
export OPENAI_API_KEY="sk-..."
\`\`\`

**Python:**
\`\`\`python
from flowgentra_ai.llm import LLMConfig, LLMProvider

llm_config = LLMConfig(
    provider=LLMProvider.OpenAI,
    model="gpt-4",  # or "gpt-3.5-turbo", "gpt-4-turbo"
    temperature=0.7,
    max_tokens=2048,
    api_key="sk-...",  # optional, uses env var if not provided
)
\`\`\`

**Rust:**
\`\`\`rust
use flowgentra_ai::core::llm::{LLMConfig, LLMProvider};

let llm_config = LLMConfig {
    provider: LLMProvider::OpenAI,
    model: "gpt-4".to_string(),
    temperature: 0.7,
    max_tokens: 2048,
    api_key: std::env::var("OPENAI_API_KEY").ok(),
    ..Default::default()
};
\`\`\`

**YAML:**
\`\`\`yaml
llm:
  provider: openai
  model: gpt-4
  temperature: 0.7
  max_tokens: 2048
\`\`\`

**Models:**
- gpt-4: Latest, best quality, higher cost
- gpt-4-turbo: Cheaper, nearly same quality
- gpt-3.5-turbo: Most affordable, good for simple tasks

**Pricing:** $0.03-0.30 per 1K tokens (varies by model)

## 2. Anthropic Claude

Excellent reasoning, built-in tool use. API key required.

**Setup:**
\`\`\`bash
export ANTHROPIC_API_KEY="sk-ant-..."
\`\`\`

**Python:**
\`\`\`python
from flowgentra_ai.llm import LLMConfig, LLMProvider

llm_config = LLMConfig(
    provider=LLMProvider.Anthropic,
    model="claude-3-opus",  # or "claude-3-sonnet", "claude-3-haiku"
    temperature=0.7,
    max_tokens=4096,
)
\`\`\`

**Models:**
- claude-3-opus: Most capable, best for reasoning
- claude-3-sonnet: Good balance of quality and speed
- claude-3-haiku: Fastest, cheapest

**Features:**
- Extended context (up to 200K tokens)
- Built-in tool use
- Excellent reasoning

**Pricing:** $0.008-0.24 per 1K tokens

## 3. Mistral

European open-weight model. Good performance, affordable.

**Setup:**
\`\`\`bash
export MISTRAL_API_KEY="..."
\`\`\`

**Python:**
\`\`\`python
from flowgentra_ai.llm import LLMConfig, LLMProvider

llm_config = LLMConfig(
    provider=LLMProvider.Mistral,
    model="mistral-large",  # or "mistral-medium", "mistral-small"
    temperature=0.7,
)
\`\`\`

**Models:**
- mistral-large: Strongest, good reasoning
- mistral-medium: Good balance
- mistral-small: Fast, cheap

**Pricing:** $0.0007-0.007 per 1K tokens (very affordable)

## 4. Groq

Ultra-fast inference. Great for latency-sensitive apps.

**Setup:**
\`\`\`bash
export GROQ_API_KEY="gsk_..."
\`\`\`

**Python:**
\`\`\`python
from flowgentra_ai.llm import LLMConfig, LLMProvider

llm_config = LLMConfig(
    provider=LLMProvider.Groq,
    model="mixtral-8x7b",  # Open-weight model
    temperature=0.7,
)
\`\`\`

**Models:**
- mixtral-8x7b: Most capable
- llama2-70b: Good option

**Advantages:**
- Sub-100ms inference
- Very affordable
- OpenWeights models

**Pricing:** Free tier + pay-as-you-go

## 5. Ollama

Run models locally, no API key needed. Perfect for privacy.

**Setup:**
\`\`\`bash
# Download and run Ollama
ollama pull llama2
ollama serve
\`\`\`

**Python:**
\`\`\`python
from flowgentra_ai.llm import LLMConfig, LLMProvider

llm_config = LLMConfig(
    provider=LLMProvider.Ollama,
    model="llama2",  # or "neural-chat", "mistral", etc.
    base_url="http://localhost:11434",  # Ollama default
)
\`\`\`

**Available Models:**
- llama2: Good general purpose
- neural-chat: Optimized for conversation
- mistral: Fast and capable
- dolphin-mixtral: Stronger reasoning

**Advantages:**
- Privacy (runs locally)
- No API costs
- No rate limits
- Fully controllable

**Disadvantages:**
- Requires local hardware
- Models smaller than API models
- Setup overhead

## 6. Azure OpenAI

Enterprise Azure hosting of OpenAI models.

**Setup:**
\`\`\`bash
export AZURE_OPENAI_API_KEY="..."
export AZURE_OPENAI_ENDPOINT="https://your-instance.openai.azure.com/"
\`\`\`

**Python:**
\`\`\`python
from flowgentra_ai.llm import LLMConfig, LLMProvider

llm_config = LLMConfig(
    provider=LLMProvider.AzureOpenAI,
    model="gpt-4",
    base_url="https://your-instance.openai.azure.com/",
    api_key=os.getenv("AZURE_OPENAI_API_KEY"),
)
\`\`\`

**Uses:**
- Compliance/data sovereignty
- Enterprise deployments
- Private VNet support

## 7. HuggingFace Hosted Inference

Run open-weight models on HuggingFace.

**Setup:**
\`\`\`bash
export HUGGINGFACE_API_KEY="hf_..."
\`\`\`

**Python:**
\`\`\`python
from flowgentra_ai.llm import LLMConfig, LLMProvider

llm_config = LLMConfig(
    provider=LLMProvider.HuggingFace,
    model="meta-llama/Llama-2-7b-chat",
    api_key=os.getenv("HUGGINGFACE_API_KEY"),
)
\`\`\`

**Popular Models:**
- meta-llama/Llama-2-*: Meta's Llama 2
- OpenAssistant/oasst-sft-6-epoch-3: Open Assistant
- mosaicml/mpt-30b: MPT model

## Provider Comparison

| Provider | Speed | Quality | Cost | Privacy | Setup |
|----------|-------|---------|------|---------|-------|
| OpenAI | Fast | Excellent | Medium | Cloud | Easy |
| Anthropic | Fast | Excellent | Medium | Cloud | Easy |
| Mistral | Very Fast | Good | Very Low | Cloud | Easy |
| Groq | Ultra Fast | Good | Low | Cloud | Easy |
| Ollama | Medium | Good | Free | Local | Medium |
| Azure | Fast | Excellent | Medium | Hybrid | Hard |
| HuggingFace | Medium | Variable | Low | Cloud | Easy |

## Switching Between Providers

### From Code

Change config and rebuild agent:

\`\`\`python
# Start with OpenAI
agent = Agent.create(llm_config=openai_config)

# Switch to Anthropic
new_agent = Agent.create(llm_config=anthropic_config)
\`\`\`

### From YAML

Just change the provider:

\`\`\`yaml
# llm.yaml
llm:
  provider: anthropic  # was: openai
  model: claude-3-opus
  temperature: 0.7
\`\`\`

## Fallback Chain

Use multiple providers with fallbacks:

\`\`\`python
from flowgentra_ai.llm import FallbackChain

chain = FallbackChain([
    openai_config,      # Try OpenAI first
    anthropic_config,   # Fallback to Anthropic
    groq_config,        # Fallback to Groq
])

agent = Agent.create(llm_config=chain)

# If OpenAI fails, automatically tries Anthropic, then Groq
result = await agent.run(state)
\`\`\`

## Best Practices

1. **For production:** Use tier-1 providers (OpenAI, Anthropic)
2. **For cost:** Use Mistral or Groq
3. **For privacy:** Use Ollama locally
4. **For variety:** Use fallback chains
5. **Monitor costs:** Track token usage per provider
6. **Test models:** Try multiple before committing

## Next Steps

- Explore model capabilities: https://docs.openai.com/en/docs
- Learn about tool use: [Tools Guide](/docs/tools)
- Tune temperature: [Prompting Best Practices](/docs/prompting)
`}),Sa=[{id:`state-design`,label:`State Design`},{id:`graph-design`,label:`Graph Design`},{id:`llm-calls`,label:`LLM Calls`},{id:`rag`,label:`RAG`},{id:`memory`,label:`Memory`},{id:`error-handling`,label:`Error Handling`}];function Ca(){let{language:e}=M();return(0,j.jsxs)(P,{anchors:Sa,children:[(0,j.jsx)(`h1`,{style:{fontSize:`2rem`,fontWeight:700,color:`#e6edf3`,letterSpacing:`-0.02em`,marginBottom:8,marginTop:0},children:`Best Practices`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:40,lineHeight:1.7},children:`Patterns that work well in production Flowgentra deployments.`}),(0,j.jsxs)(wa,{id:`state-design`,title:`State Design`,children:[(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,lineHeight:1.7,paddingLeft:20,marginBottom:16},children:[(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Keep state flat.`}),` Nested dicts are harder to read and update. Prefer `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`state["user_name"]`}),` over `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`state["user"]["name"]`}),`.`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Use descriptive key names.`}),` `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`state["llm_response"]`}),` is clearer than `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`state["res"]`}),`. You'll thank yourself when debugging a trace.`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Don't store large objects in state.`}),` State is serialized to JSON for checkpointing. Keep it to strings, numbers, and small lists. Store large data (embeddings, binary files) outside state and reference them by ID.`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Document your state schema.`}),` Add a comment at the top of your graph file explaining what keys each node reads and writes. This becomes essential as graphs grow.`]})]}),(0,j.jsx)(N,{python:`# State schema:
# "question"     (str)  — user's input question
# "context_docs" (list) — retrieved documents
# "answer"       (str)  — final LLM response
# "sources"      (list) — source file paths`})]}),(0,j.jsxs)(wa,{id:`graph-design`,title:`Graph Design`,children:[(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,lineHeight:1.7,paddingLeft:20,marginBottom:16},children:[(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`One node, one responsibility.`}),` If a node does three things, split it into three nodes. Smaller nodes are easier to retry, test, and replace.`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Name nodes as verbs.`}),` `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`fetch_data`}),`, `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`classify_intent`}),`, `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`generate_response`}),` — not `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`node_1`}),`, `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`handler`}),`, `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`step_3`}),`.`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Make routers explicit.`}),` Your conditional edge router should be a named function, not an inline lambda. Give it a docstring explaining the routing logic.`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsxs)(`strong`,{style:{color:`#e6edf3`},children:[`Always set `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`max_steps`}),`.`]}),` The default (1000) is high. For production agents, set it to a reasonable value (50–100) to catch runaway loops early.`]})]}),(0,j.jsx)(N,{python:`def quality_router(state):
    """Route to 'retry' if score is below threshold, else 'finalize'."""
    if (state.get("score") or 0) < 0.8:
        return "retry"
    return "finalize"`})]}),(0,j.jsx)(wa,{id:`llm-calls`,title:`LLM Calls`,children:(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,lineHeight:1.7,paddingLeft:20,marginBottom:16},children:[(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Don't call the LLM in a loop without a termination condition.`}),` ReAct agents must have a maximum step count. Set it via `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`builder.set_max_steps(n)`}),`.`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Use low temperature for tool-calling and reasoning.`}),` `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`temperature=0.0–0.3`}),` produces more reliable function calls. Use `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`0.7+`}),` only for creative writing tasks.`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Add retries to all LLMs.`}),` Networks fail. Rate limits happen. `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`client.with_retry(max_retries=3)`}),` costs almost nothing and prevents a lot of pain.`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Use caching in development.`}),` `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`client.cached()`}),` prevents re-running the same prompts while you're iterating. Disable it in production if you need fresh responses.`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Check token usage.`}),` Use `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`client.chat_with_usage()`}),` to track costs during development. It's easy to accidentally build a workflow that costs $5 per run.`]})]})}),(0,j.jsx)(wa,{id:`rag`,title:`RAG`,children:(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,lineHeight:1.7,paddingLeft:20,marginBottom:16},children:[(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Chunk size matters.`}),` Too small (< 200 chars) → each chunk lacks context. Too large (> 1000 chars) → chunks contain irrelevant content. Start at 400–600 chars.`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Always use overlap.`}),` A 50–100 char overlap between chunks prevents splitting a sentence mid-thought.`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Match embedding model with your content type.`}),` `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`text-embedding-3-small`}),` works for most text. For code, consider a code-specific model.`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Hybrid search > pure semantic for most cases.`}),` Pure semantic can miss exact keyword matches. Add 20–40% BM25 weight as a baseline.`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Test retrieval quality independently.`}),` Before building the full RAG pipeline, manually test that `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`retriever.retrieve(question)`}),` returns the right chunks. If retrieval is wrong, the LLM can't fix it.`]})]})}),(0,j.jsx)(wa,{id:`memory`,title:`Memory`,children:(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,lineHeight:1.7,paddingLeft:20,marginBottom:16},children:[(0,j.jsxs)(`li`,{children:[(0,j.jsxs)(`strong`,{style:{color:`#e6edf3`},children:[`Use `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`ConversationMemory`}),` with a cap.`]}),` Unlimited memory is dangerous — 100+ messages will exceed the LLM's context window. Set `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`max_messages=50`}),` as a safe default.`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsxs)(`strong`,{style:{color:`#e6edf3`},children:[(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`SummaryMemory`}),` for long sessions.`]}),` If users have conversations that run for hours, `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`TokenBufferMemory`}),` will drop important early context. `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`SummaryMemory`}),` preserves it in compressed form.`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Don't store memory in state.`}),` Conversation history shouldn't be in the graph state. Keep it in a `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`ConversationMemory`}),` object that lives outside the graph and is loaded at the start of each turn.`]})]})}),(0,j.jsxs)(wa,{id:`error-handling`,title:`Error Handling`,children:[(0,j.jsx)(`ul`,{style:{color:`#8b949e`,lineHeight:1.7,paddingLeft:20,marginBottom:16},children:(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{style:{color:`#e6edf3`},children:`Use state for errors, not exceptions.`}),` In a graph, raising an exception terminates the run. Use a state key (`,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`state["error"]`}),`) so the graph can route to an error-handling node.`]})}),(0,j.jsx)(N,{python:`def risky_node(state):
    try:
        state["result"] = do_something()
    except Exception as e:
        state["error"] = str(e)
    return state

def router(state):
    return "error_node" if state.get("error") else "next_node"`})]})]})}function wa({id:e,title:t,children:n}){return(0,j.jsxs)(`section`,{id:e,style:{marginBottom:48},children:[(0,j.jsx)(`h2`,{style:{fontSize:`1.5rem`,fontWeight:600,color:`#e6edf3`,marginBottom:16,marginTop:0},children:t}),n]})}var Ta=[{id:`general`,label:`General`},{id:`installation`,label:`Installation`},{id:`graphs`,label:`Graphs`},{id:`llm`,label:`LLM`},{id:`memory`,label:`Memory & Checkpointing`}];function Ea(){let{language:e}=M();return(0,j.jsxs)(P,{anchors:Ta,children:[(0,j.jsx)(`h1`,{style:{fontSize:`2rem`,fontWeight:700,color:`#e6edf3`,letterSpacing:`-0.02em`,marginBottom:8,marginTop:0},children:`FAQ & Troubleshooting`}),(0,j.jsxs)(Da,{id:`general`,title:`General`,children:[(0,j.jsx)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`What's the difference between Flowgentra and LangChain/LangGraph?`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`LangGraph is the closest comparison. Key differences:`}),(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,lineHeight:1.7,paddingLeft:20,marginBottom:16},children:[(0,j.jsx)(`li`,{children:`Flowgentra's execution engine is written in Rust — significantly faster for CPU-bound operations and concurrent workloads`}),(0,j.jsx)(`li`,{children:`Flowgentra has a native Python API (via PyO3) rather than a pure-Python reimplementation`}),(0,j.jsx)(`li`,{children:`Both use the same graph-based model with state, nodes, and edges`}),(0,j.jsx)(`li`,{children:`LangGraph has a larger ecosystem of integrations; Flowgentra is newer`})]}),(0,j.jsx)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Do I need to know Rust to use the Python library?`}),(0,j.jsxs)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:[`No. The Python library is a complete, standalone package. You install it with `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`pip`}),` and write Python. You only need Rust if you're building from source or contributing to the library itself.`]}),(0,j.jsx)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Can I use both Rust and Python in the same project?`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Yes. The Rust engine is used by both, but you can't directly share graphs between them at runtime. You can, however, use them side-by-side: run performance-critical parts in Rust and prototyping/orchestration in Python.`})]}),(0,j.jsxs)(Da,{id:`installation`,title:`Installation`,children:[(0,j.jsxs)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:[(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`pip install flowgentra-ai`}),` fails with "no matching distribution found"`]}),(0,j.jsxs)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:[`Check your Python version: `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`python --version`}),`. Flowgentra requires Python 3.9+. If you're on an older version or an unsupported platform (e.g., 32-bit Linux), you'll need to build from source.`]}),(0,j.jsxs)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:[(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`maturin develop`}),` fails with "linker not found"`]}),(0,j.jsxs)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:[`You need a C linker. On Ubuntu/Debian: `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`sudo apt install build-essential`}),`. On macOS: `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`xcode-select --install`}),`.`]}),(0,j.jsxs)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:[`ImportError: `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`flowgentra_ai._native`}),` not found`]}),(0,j.jsxs)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:[`The native extension wasn't compiled. Run `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`maturin develop`}),` again from the `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`flowgentra-ai-py`}),` directory.`]})]}),(0,j.jsxs)(Da,{id:`graphs`,title:`Graphs`,children:[(0,j.jsx)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`My graph runs forever / hits max_steps`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Your graph has a loop with no exit condition. Check that:`}),(0,j.jsxs)(`ol`,{style:{color:`#8b949e`,lineHeight:1.7,paddingLeft:20,marginBottom:16},children:[(0,j.jsxs)(`li`,{children:[`Your conditional edge router can return `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`"__end__"`}),` (or use `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`END`}),`)`]}),(0,j.jsx)(`li`,{children:`The condition that breaks the loop can actually be reached`}),(0,j.jsxs)(`li`,{children:[`You've set `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`builder.set_max_steps(n)`}),` to a reasonable value`]})]}),(0,j.jsxs)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:[(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`KeyError: "my_key"`}),` inside a node`]}),(0,j.jsxs)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:[`You used `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`state["my_key"]`}),` but the key wasn't set. Use `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`state.get("my_key")`}),` (returns `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`None`}),` instead of raising) or check `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`"my_key" in state`}),` first.`]}),(0,j.jsx)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`"Unknown node: xyz" error when building the graph`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Your router returned a node name that doesn't exist. Common causes:`}),(0,j.jsxs)(`ul`,{style:{color:`#8b949e`,lineHeight:1.7,paddingLeft:20,marginBottom:16},children:[(0,j.jsx)(`li`,{children:`Typo in the node name`}),(0,j.jsx)(`li`,{children:`The node was added to the builder but with a different name`}),(0,j.jsx)(`li`,{children:`The router returns a string that varies at runtime — check all possible return values`})]}),(0,j.jsx)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Graph compiles but never terminates (no error)`}),(0,j.jsxs)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:[`You have a cycle with no exit. Make sure at least one path from every node eventually reaches `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`END`}),` / `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`"__end__"`}),`.`]})]}),(0,j.jsxs)(Da,{id:`llm`,title:`LLM`,children:[(0,j.jsx)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`LLM calls fail with rate limit errors`}),(0,j.jsxs)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:[`Add retries: `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`client.with_retry(max_retries=5)`}),`. The retry client uses exponential backoff by default.`]}),(0,j.jsx)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Responses are inconsistent / not following instructions`}),(0,j.jsxs)(`ol`,{style:{color:`#8b949e`,lineHeight:1.7,paddingLeft:20,marginBottom:16},children:[(0,j.jsxs)(`li`,{children:[`Lower the temperature (try `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`0.1–0.3`}),` for structured tasks)`]}),(0,j.jsx)(`li`,{children:`Check your system prompt — it should be clear and specific`}),(0,j.jsxs)(`li`,{children:[`For structured output, use `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`ResponseFormat.json_schema(...)`}),` instead of asking "respond in JSON"`]})]}),(0,j.jsx)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Tool calls are malformed / arguments are missing`}),(0,j.jsxs)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:[`Make sure your `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`ToolDefinition.parameters`}),` has the correct JSON Schema, including `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`"required"`}),` for mandatory fields. The LLM ignores schema constraints it doesn't know about.`]}),(0,j.jsxs)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:[(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`chat_with_tools`}),` returns a message without tool calls`]}),(0,j.jsxs)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:[`The LLM decided it doesn't need the tools. This is expected behavior — it might answer directly. Check `,(0,j.jsx)(`code`,{style:{background:`#161b22`,padding:`2px 6px`,borderRadius:3,fontSize:`0.9em`},children:`response.has_tool_calls()`}),` before processing tool calls.`]})]}),(0,j.jsxs)(Da,{id:`memory`,title:`Memory & Checkpointing`,children:[(0,j.jsx)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`How do I clear a user's conversation history?`}),(0,j.jsx)(N,{python:`memory.clear("user-thread-id")`}),(0,j.jsx)(`h3`,{style:{color:`#e6edf3`,fontSize:`1.25rem`,fontWeight:600,marginBottom:12,marginTop:20},children:`Checkpoints are growing unboundedly on disk`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:16},children:`Implement periodic cleanup. Delete old checkpoint files from the checkpoint directory based on age or thread ID. The checkpoint format is plain JSON files — you can safely delete them.`})]})]})}function Da({id:e,title:t,children:n}){return(0,j.jsxs)(`section`,{id:e,style:{marginBottom:48},children:[(0,j.jsx)(`h2`,{style:{fontSize:`1.5rem`,fontWeight:600,color:`#e6edf3`,marginBottom:16,marginTop:0},children:t}),n]})}var Oa=[{id:`state-graph`,topic:`state-graph`,name:`StateGraph`,summary:`Core graph builder. Define nodes, edges, and entry points to compose your agent workflow.`,rust:{signature:`StateGraph::<S>::builder() -> GraphBuilder<S>`,description:"Creates a typed graph builder. `S` must implement the `State` trait (use `#[derive(State)]`). For config-driven agents, prefer `from_config_path()` instead.",params:[{name:`S`,type:`impl State`,description:`Generic state type shared across all nodes.`}],returns:`GraphBuilder<S>`,example:`use flowgentra_ai::prelude::*;

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
print(result["summary"])`}},{id:`from-config-path`,topic:`handlers-config`,name:`from_config_path / Agent.from_config_path`,summary:`The primary production API. Load a fully configured agent from YAML — handlers are auto-discovered, no manual wiring.`,rust:{signature:`from_config_path(config_path: &str) -> Result<Agent>`,description:"Top-level convenience function (in `prelude`). Reads the YAML file, validates the graph, and wires all handlers discovered via `#[register_handler]`. LLM is created from the `llm:` block. Prefer this over `Agent::from_config`.",params:[{name:`config_path`,type:`&str`,description:`Path to the agent config YAML file.`}],returns:`Result<Agent>`,example:`use flowgentra_ai::prelude::*;

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
SummaryMemory::new(llm, config)

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
#     state_key: messages`}},{id:`predefined-agents`,topic:`agents`,name:`Predefined Agent Types`,summary:`Seven production-ready agent presets — ZeroShotReAct, FewShotReAct, Conversational, ToolCalling, StructuredChatZeroShotReAct, SelfAskWithSearch, ReactDocstore. Each is a compiled StateGraph. No graph wiring required.`,rust:{signature:`// All 7 types — pick one
AgentBuilder::new(AgentType::ZeroShotReAct)           // <action> tag loop
AgentBuilder::new(AgentType::FewShotReAct)            // <action> tag + few-shot examples
AgentBuilder::new(AgentType::Conversational)          // single-node, history injected
AgentBuilder::new(AgentType::ToolCalling)             // chat_with_tools() + response.tool_calls
AgentBuilder::new(AgentType::StructuredChatZeroShotReAct) // JSON blob actions
AgentBuilder::new(AgentType::SelfAskWithSearch)       // Follow up / Intermediate answer loop
AgentBuilder::new(AgentType::ReactDocstore)           // Search[q] / Lookup[t] / Finish[a]

// Common builder chain (same for all types)
AgentBuilder::new(AgentType::ZeroShotReAct)
    .with_name("my-agent")
    .with_llm_config("gpt-4o")        // or with_llm(LLMConfig)
    .with_tool(ToolSpec::new("search", "Search the web")
        .with_parameter("query", "string")
        .required("query"))
    .with_tool_executor(|name, args| dispatch(name, args))
    .with_temperature(0.2)
    .with_max_tokens(4096)
    .with_retries(2)
    .build_graph()?                   // → GraphBasedAgent`,description:'Seven built-in agent types, each compiled to a `StateGraph<DynState>`. **ZeroShotReAct / FewShotReAct** use `AgentReasoningNode` and parse `<action>` / `<answer>` text tags. **Conversational** is a single `ConversationalNode` that injects conversation history. **ToolCalling** uses `ToolCallingNode` which calls `chat_with_tools()` and reads `response.tool_calls`. **StructuredChatZeroShotReAct** uses `StructuredChatNode` parsing JSON blobs with `"action"/"action_input"` keys. **SelfAskWithSearch** uses `SelfAskNode` accumulating a scratchpad of Follow-up/Intermediate-answer pairs. **ReactDocstore** uses `DocstoreNode` parsing `Action: Search[q]`, `Action: Lookup[t]`, `Action: Finish[a]`.',params:[{name:`AgentType::ZeroShotReAct`,type:`AgentType`,description:`General-purpose ReAct. Uses <action>tool(args)</action> and <answer>…</answer> tags. Works with any text model.`},{name:`AgentType::FewShotReAct`,type:`AgentType`,description:`Same graph as ZeroShotReAct but system prompt includes worked examples. Best for specialized domains.`},{name:`AgentType::Conversational`,type:`AgentType`,description:`Single-node: ConversationalNode injects conversation_history from state. No tool loop.`},{name:`AgentType::ToolCalling`,type:`AgentType`,description:`Native function calling via chat_with_tools(). ToolSpec → JSON Schema ToolDefinition. Reads response.tool_calls; stores tc_call_id for proper tool_result messages.`},{name:`AgentType::StructuredChatZeroShotReAct`,type:`AgentType`,description:`JSON blob actions: {"action":"tool","action_input":"…"}. Final answer: {"action":"Final Answer","action_input":"…"}. parse_structured_action() handles extraction.`},{name:`AgentType::SelfAskWithSearch`,type:`AgentType`,description:`Requires "search" tool. Decomposes questions via Follow up: / Intermediate answer: pairs. Built-in 4 few-shot examples. parse_self_ask_response() detects FollowUp or FinalAnswer.`},{name:`AgentType::ReactDocstore`,type:`AgentType`,description:`Requires "search" and "lookup" tools. Parses Action: Search[q], Action: Lookup[t], Action: Finish[a]. Scratchpad accumulates Thought/Action/Observation blocks.`},{name:`.with_llm_config(model: &str)`,type:`fn`,description:`Model name — provider auto-resolved: gpt-*/o1/o3 → OpenAI, claude-* → Anthropic, mistral-* → Mistral, llama-*/mixtral-* → Groq.`},{name:`.with_llm(LLMConfig)`,type:`fn`,description:`Full LLMConfig (provider, model, api_key, temperature, max_tokens). Takes precedence over with_llm_config.`},{name:`.with_tool_executor(fn)`,type:`fn`,description:`Closure (tool_name: &str, args: &str) → String. Called by ToolExecutorNode for every tool dispatch.`},{name:`.with_tool(ToolSpec)`,type:`fn`,description:`ToolSpec::new(name, desc).with_parameter(name, type).required(name).`},{name:`.with_memory_steps(n)`,type:`fn`,description:`Enable conversation history; retain last n turns. Used by Conversational.`},{name:`.build_graph()`,type:`→ GraphBasedAgent`,description:`Compile and return the concrete GraphBasedAgent. Call .execute_input(str).await? on it.`}],returns:`GraphBasedAgent (build_graph) | Box<dyn Agent> (build)`,example:`use flowgentra_ai::core::agents::{AgentBuilder, AgentType, ToolSpec};

// ── ZeroShotReAct ────────────────────────────────────────────────────────────
let search = ToolSpec::new("web_search", "Search the web")
    .with_parameter("query", "string").required("query");
let calc = ToolSpec::new("calculator", "Evaluate math")
    .with_parameter("expression", "string").required("expression");

let agent = AgentBuilder::new(AgentType::ZeroShotReAct)
    .with_llm_config("gpt-4o")
    .with_tool(search).with_tool(calc)
    .with_tool_executor(|name, args| match name {
        "web_search" => web_search(args),
        "calculator" => calc_eval(args),
        _ => "unknown".to_string(),
    })
    .build_graph()?;
let answer = agent.execute_input("Population of France ÷ 1000?").await?;

// ── ToolCalling (native function calling) ────────────────────────────────────
let weather = ToolSpec::new("get_weather", "Get weather")
    .with_parameter("location", "string").required("location");

let tc_agent = AgentBuilder::new(AgentType::ToolCalling)
    .with_llm_config("gpt-4o")
    .with_tool(weather)
    .with_tool_executor(|_, args| format!("72°F, sunny — {}", args))
    .build_graph()?;

// ── SelfAskWithSearch ─────────────────────────────────────────────────────────
let sa_agent = AgentBuilder::new(AgentType::SelfAskWithSearch)
    .with_llm_config("gpt-4o")
    .with_tool(ToolSpec::new("search", "Search Wikipedia")
        .with_parameter("query", "string").required("query"))
    .with_tool_executor(|_, q| wikipedia_search(q))
    .build_graph()?;
let ans = sa_agent.execute_input("Who was the maternal grandfather of George Washington?").await?;
// → "Joseph Ball"

// ── ReactDocstore ─────────────────────────────────────────────────────────────
let rd_agent = AgentBuilder::new(AgentType::ReactDocstore)
    .with_llm_config("gpt-4o")
    .with_tool(ToolSpec::new("search", "Find doc").with_parameter("query","string").required("query"))
    .with_tool(ToolSpec::new("lookup", "Lookup term").with_parameter("term","string").required("term"))
    .with_tool_executor(|name, args| if name == "search" { ds.search(args) } else { ds.lookup(args) })
    .build_graph()?;`},python:{signature:`# ── Typed constructors (preferred) ───────────────────────────────────────────
from flowgentra_ai.agent import ZeroShotReAct, FewShotReAct, Conversational, ToolCalling, StructuredChat, SelfAskWithSearch, ReactDocstore
from flowgentra_ai.llm import LLM

llm = LLM(provider="openai", model="gpt-4o")
agent = ZeroShotReAct(name="my-agent", llm=llm, retries=2)  # → GraphBasedAgent-like
result = agent.execute_input("Your question")               # → str

# ── AgentBuilder (for advanced configuration) ────────────────────────────────
from flowgentra_ai.agent import AgentBuilder, AgentType, ToolSpec

agent = (
    AgentBuilder(AgentType.zero_shot_react(), llm)
    .with_name("my-agent")
    .with_tool(ToolSpec("search", "Search the web"))
    .with_temperature(0.2)
    .with_retries(2)
    .build_graph()
)`,description:`Seven built-in agent presets, each compiled to a StateGraph. Use the typed constructors (ZeroShotReAct, FewShotReAct, etc.) for the simplest API — pass an LLM directly. Use AgentBuilder for advanced configuration (temperature, custom params). The type determines which StateGraph is compiled.`,params:[{name:`ZeroShotReAct(name, llm, ...)`,type:`class`,description:`General ReAct: AgentReasoningNode parses <action>…</action> tags. Terminates on <answer>…</answer>.`},{name:`FewShotReAct(name, llm, system_prompt, ...)`,type:`class`,description:`Same graph as ZeroShot; pass examples via system_prompt.`},{name:`Conversational(name, llm, ...)`,type:`class`,description:`ConversationalNode: injects conversation_history from state. Single-node, no tool loop.`},{name:`ToolCalling(name, llm, ...)`,type:`class`,description:`ToolCallingNode: passes ToolSpec → JSON-Schema ToolDefinition to chat_with_tools().`},{name:`StructuredChat(name, llm, ...)`,type:`class`,description:`StructuredChatNode: parses JSON blob {"action":…,"action_input":…}. Final answer on "Final Answer" action.`},{name:`SelfAskWithSearch(name, llm, ...)`,type:`class`,description:`SelfAskNode: requires "search" tool. Decomposes via Follow up / Intermediate answer pairs.`},{name:`ReactDocstore(name, llm, ...)`,type:`class`,description:`DocstoreNode: requires "search" and "lookup" tools. Parses Action: Search[q] / Lookup[t] / Finish[a].`},{name:`llm`,type:`LLM`,description:`LLM instance (provider + model). Create with LLM(provider="openai", model="gpt-4o").`},{name:`tools`,type:`List[ToolSpec]`,description:`List of ToolSpec objects. ToolSpec(name, desc) then .add_parameter(name, type) / .set_required(name).`},{name:`memory_steps`,type:`int | None`,description:`Keep last n conversation turns in state. Primarily used by Conversational.`},{name:`.build_graph()`,type:`→ GraphBasedAgent`,description:`AgentBuilder only: compile and return GraphBasedAgent.`},{name:`agent.execute_input(str)`,type:`→ str`,description:`Run agent. Typed constructors expose this directly; so does GraphBasedAgent from AgentBuilder.`}],returns:`GraphBasedAgent`,example:`from flowgentra_ai.agent import ZeroShotReAct, FewShotReAct, ToolCalling, StructuredChat, SelfAskWithSearch, ReactDocstore, ToolSpec
from flowgentra_ai.llm import LLM

# ── ZeroShotReAct — typed constructor (preferred) ─────────────────────────────
llm = LLM(provider="openai", model="gpt-4o")
search = ToolSpec("web_search", "Search the web")
search.add_parameter("query", "string")
search.set_required("query")

agent = ZeroShotReAct(
    name="research-agent",
    llm=llm,
    tools=[search],
    retries=2,
)
print(agent.execute_input("What is the capital of Japan?"))

# ── FewShotReAct — embed examples in system_prompt ────────────────────────────
classifier = FewShotReAct(
    name="classifier",
    llm=LLM(provider="anthropic", model="claude-opus-4-6"),
    system_prompt="Example 1: ...
Example 2: ...",
    tools=[search],
    retries=2,
    memory_steps=10,
)

# ── ToolCalling — native function-calling API ─────────────────────────────────
weather = ToolSpec("get_weather", "Get weather for a location")
weather.add_parameter("location", "string")
weather.set_required("location")

tc_agent = ToolCalling(
    name="weather-agent",
    llm=LLM(provider="openai", model="gpt-4o"),
    tools=[weather],
)

# ── StructuredChat — JSON-blob tool actions ───────────────────────────────────
calc = ToolSpec("calculator", "Evaluate math expression")
calc.add_parameter("expression", "string")
calc.set_required("expression")

sc_agent = StructuredChat(
    name="math-agent",
    llm=LLM(provider="openai", model="gpt-4o"),
    tools=[calc],
)
print(sc_agent.execute_input("What is 15% of 2847?"))

# ── SelfAskWithSearch — decompose questions ───────────────────────────────────
sa_agent = SelfAskWithSearch(
    name="researcher",
    llm=LLM(provider="openai", model="gpt-4o"),
)
print(sa_agent.execute_input("Who was the maternal grandfather of George Washington?"))

# ── ReactDocstore — Search + Lookup loop ──────────────────────────────────────
rd_agent = ReactDocstore(
    name="doc-agent",
    llm=LLM(provider="openai", model="gpt-4o"),
)
print(rd_agent.execute_input("What is the elevation range of the High Plains?"))`}},{id:`llm-clients`,topic:`llm`,name:`LLMs & Providers`,summary:`Built-in clients for 7 LLM providers, plus CachedLLM, FallbackLLM, and RetryLLM wrappers.`,rust:{signature:`// Direct construction
OpenAIClient::new(api_key, model)
AnthropicClient::new(api_key, model)
OllamaClient::new(model)              // Local, no key
AzureOpenAIClient::new(...)
GroqClient::new(api_key, model)
MistralClient::new(api_key, model)
HuggingFaceClient::new(api_key, model)

// Wrappers
CachedLLM::new(inner)
FallbackLLM::new(vec![primary, backup])
RetryLLM::new(inner, max_retries)`,description:"All implement the `LLM` trait: `chat()`, `chat_stream()`, `chat_with_tools()`, `chat_structured()`. Streaming returns a `tokio::sync::mpsc::Receiver<String>`. Structured output uses `ResponseFormat::Json` or `ResponseFormat::JsonSchema`.",params:[{name:`chat(messages)`,type:`async fn`,description:`Standard chat completion.`},{name:`chat_stream(messages)`,type:`async fn`,description:`Streaming response via mpsc channel.`},{name:`chat_with_tools(messages, tools)`,type:`async fn`,description:`Function/tool calling — response may contain ToolCall objects.`},{name:`chat_structured(messages)`,type:`async fn`,description:`Forces JSON output, parses to serde_json::Value.`},{name:`chat_with_usage(messages)`,type:`async fn`,description:`Returns (Message, Option<TokenUsage>) for cost tracking.`}],returns:`Result<Message> or Result<Receiver<String>> for streaming`,example:`use flowgentra_ai::core::llm::*;
use std::sync::Arc;

// Primary provider with fallback
let primary = OpenAIClient::new(std::env::var("OPENAI_API_KEY")?, "gpt-4o");
let backup  = AnthropicClient::new(std::env::var("ANTHROPIC_API_KEY")?, "claude-3-haiku-20240307");
let client  = FallbackLLM::new(vec![Arc::new(primary), Arc::new(backup)]);

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
}`},python:{signature:`from flowgentra_ai.llm import LLMConfig, LLM, Message

# Option A — direct constructor (provider + model as positional args)
client = LLM("openai",     "gpt-4o",                         api_key="sk-...")
client = LLM("anthropic",  "claude-3-5-haiku-20241022",      api_key="sk-ant-...")
client = LLM("groq",       "llama3-70b-8192",                api_key="...")
client = LLM("ollama",     "llama3")               # Local — no api_key needed
client = LLM("mistral",    "mistral-large",        api_key="...", temperature=0.3)

# Option B — LLMConfig + from_config (useful when reusing the same config)
config = LLMConfig("openai", "gpt-4o", api_key="sk-...", temperature=0.7, max_tokens=1000)
client = LLM.from_config(config)

# Wrappers via method chaining
client = client.with_retry(max_retries=3)
client = client.cached(max_entries=100)
client = client.with_fallback(backup_client)`,description:"Two ways to create a client: `LLM(provider, model, api_key=...)` directly, or `LLM.from_config(LLMConfig(...))` when you want to reuse or mutate the config (e.g. `set_response_format`). No separate provider-specific classes. Wrappers (retry, cache, fallback) chain as methods.",params:[{name:`LLMConfig(provider, model, api_key?, temperature?, max_tokens?, top_p?)`,type:`config`,description:`Providers: "openai" | "anthropic" | "mistral" | "groq" | "ollama" | "huggingface" | "azure". api_key optional for ollama.`},{name:`LLM.from_config(config)`,type:`classmethod`,description:`Create client from LLMConfig.`},{name:`client.chat(messages)`,type:`fn → Message`,description:`Standard completion.`},{name:`client.chat_with_usage(messages)`,type:`fn → (Message, TokenUsage|None)`,description:`Chat with token count and cost tracking.`},{name:`client.chat_with_tools(messages, tools)`,type:`fn → Message`,description:`Function calling. Check response.has_tool_calls() / response.tool_calls().`},{name:`client.with_retry(max_retries=3)`,type:`fn → LLM`,description:`Wrap with exponential backoff retry.`},{name:`client.cached(max_entries=100)`,type:`fn → LLM`,description:`Wrap with response cache.`},{name:`client.with_fallback(backup)`,type:`fn → LLM`,description:`Falls back to backup client on error.`},{name:`config.set_response_format(fmt)`,type:`fn`,description:`ResponseFormat.json() or ResponseFormat.json_schema(name, schema) for structured output.`}],returns:`Message | (Message, TokenUsage | None) depending on method`,example:`import os
from flowgentra_ai.llm import LLMConfig, LLM, Message, ToolDefinition
from flowgentra_ai.types import ResponseFormat

# Direct constructor — shortest form
client = LLM(
    "anthropic",
    "claude-3-5-haiku-20241022",
    api_key=os.environ["ANTHROPIC_API_KEY"],
    temperature=0.7,
)

# Or via LLMConfig when you need set_response_format()
config = LLMConfig("anthropic", "claude-3-5-haiku-20241022",
                   api_key=os.environ["ANTHROPIC_API_KEY"])
client = LLM.from_config(config)

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
backup = LLM.from_config(LLMConfig("openai", "gpt-4o-mini", api_key=os.environ["OPENAI_API_KEY"]))
production_client = client.with_retry(max_retries=3).cached(max_entries=500).with_fallback(backup)`}},{id:`supervisor`,topic:`supervisor`,name:`Supervisor / Multi-Agent`,summary:`Orchestrate multiple agents as children of a Supervisor. The supervisor routes tasks, aggregates results, and can run children in parallel.`,rust:{signature:`Supervisor::new(name, strategy, llm)
    .add_child("worker_a", agent_a)
    .add_child("worker_b", agent_b)`,description:"Supervisor is itself a `PluggableNode`. Add it to a StateGraph as a node. Strategies: `Sequential`, `Parallel`, `LLMRouted` (LLM decides which child to call).",params:[{name:`OrchestrationStrategy::Sequential`,type:`strategy`,description:`Children run one after another.`},{name:`OrchestrationStrategy::Parallel`,type:`strategy`,description:`All children run concurrently, results merged.`},{name:`OrchestrationStrategy::LLMRouted`,type:`strategy`,description:`LLM decides which child agent handles the task.`}],returns:`NodeOutput<DynState>`,example:`use flowgentra_ai::core::agents::supervisor::Supervisor;
use flowgentra_ai::core::agents::supervisor::OrchestrationStrategy;

let researcher = build_research_agent()?;
let writer     = build_writer_agent()?;

let supervisor = Supervisor::new(
    "editorial_supervisor",
    OrchestrationStrategy::Sequential,
    llm.clone(),
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
    llm=LLM(provider="openai", model="gpt-4"),
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
    llm=LLM(provider="openai", model="gpt-4"),
    available_agents=[agent1, agent2, agent3]
)

builder.add_node("plan_and_execute", planner)
builder.add_node("supervise", supervisor)`}},{id:`tool-registry`,topic:`tools`,name:`Tool Registry & Built-in Tools`,summary:`Register tools and dispatch calls by name. with_builtins() pre-registers 13 keyless tools: calculator, file, web_request, duckduckgo_search, wikipedia, json/csv data tools, and file operations.`,rust:{signature:`ToolRegistry::with_builtins() -> Self`,description:`Central registry for tool definitions and execution. with_builtins() registers all keyless, non-destructive tools. API-key and subprocess tools must be added manually.`,params:[],returns:`ToolRegistry pre-loaded with 13 built-in tools`,example:`use flowgentra_ai::core::tools::ToolRegistry;
use std::sync::Arc;

// 13 keyless tools registered automatically
let mut registry = ToolRegistry::with_builtins();

// Add API-key tools manually
registry.register("tavily", Arc::new(TavilySearchTool::from_env()?))?;
registry.register("weather", Arc::new(OpenWeatherMapTool::from_env()?))?;

// Call by name
let result = registry
    .call_tool("calculator", json!({"expression": "2^10"}))
    .await?;

// Inspect
for def in registry.list_definitions() {
    println!("{}: {}", def.name, def.description);
}`},python:{signature:`ToolRegistry.with_builtins()`,description:`Pre-seeds the registry with all keyless built-in tools. Pass a list or dict to the constructor to build a custom registry instead.`,params:[],returns:`ToolRegistry with 13 built-in tools`,example:`from flowgentra_ai.tools import (
    ToolRegistry, ToolNode, create_tool_node, check_tools_condition,
    CalculatorTool, FilesTool, WebRequestTool,
    DuckDuckGoSearchTool, WikipediaTool,
    TavilySearchTool, OpenWeatherMapTool,
)

# All 13 keyless tools pre-registered
registry = ToolRegistry.with_builtins()

# Add API-key tools
registry = ToolRegistry([
    CalculatorTool(),
    FilesTool(),
    WebRequestTool(),
    DuckDuckGoSearchTool(),
    TavilySearchTool(),          # reads TAVILY_API_KEY
    OpenWeatherMapTool(),         # reads OPENWEATHERMAP_API_KEY
])

# Wire into a graph
tool_node = create_tool_node(registry)
builder.add_node("tools", tool_node)
builder.add_conditional_edges("agent", check_tools_condition, {
    "tools": "tools", "__end__": END,
})
builder.add_edge("tools", "agent")`}},{id:`search-tools`,topic:`tools`,name:`Search Tools`,summary:`Five web search providers. DuckDuckGoSearchTool is free; Tavily, SerpApi, GoogleSerper, and Brave require API keys. All return {query, results:[{title,url,snippet}], count}.`,rust:{signature:`DuckDuckGoSearchTool::new() / TavilySearchTool::new(api_key)`,description:`All search tools implement the Tool trait and return a uniform results array. API-key tools also expose from_env() constructors.`,params:[{name:`query`,type:`str`,description:`Search query string`},{name:`max_results`,type:`int (optional)`,description:`Maximum number of results to return (default: 5)`}],returns:`{ query: str, results: [{title, url, snippet}], count: int }`,example:`use flowgentra_ai::core::tools::search::{
    DuckDuckGoSearchTool, TavilySearchTool,
    SerpApiSearchTool, GoogleSerperTool, BraveSearchTool,
};

// Free — no key
let ddg = DuckDuckGoSearchTool::new();
let result = ddg.call(json!({"query": "Rust 2024 edition", "max_results": 5})).await?;

// API-key tools — from env or explicit
let tavily = TavilySearchTool::from_env()?;  // TAVILY_API_KEY
let brave  = BraveSearchTool::new("YOUR_BRAVE_KEY");`},python:{signature:`DuckDuckGoSearchTool() / TavilySearchTool(api_key=None)`,description:`All five search tools share the same call interface. When api_key is omitted, the tool reads its env var.`,params:[{name:`query`,type:`str`,description:`Search query string`},{name:`max_results`,type:`int (optional)`,description:`Maximum number of results (default: 5)`}],returns:`{ query, results: [{title, url, snippet}], count }`,example:`from flowgentra_ai.tools import (
    DuckDuckGoSearchTool, TavilySearchTool,
    SerpApiSearchTool, GoogleSerperTool, BraveSearchTool,
)

# Free — no key
ddg = DuckDuckGoSearchTool()
result = ddg.call({"query": "Python async patterns", "max_results": 5})

# API-key tools
tavily = TavilySearchTool()             # TAVILY_API_KEY
serp   = SerpApiSearchTool()            # SERPAPI_API_KEY
serper = GoogleSerperTool()             # SERPER_API_KEY
brave  = BraveSearchTool(api_key="...") # or BRAVE_API_KEY

for r in result["results"]:
    print(r["title"], "—", r["url"])`}},{id:`knowledge-tools`,topic:`tools`,name:`Knowledge Tools`,summary:`Wikipedia, ArXiv, PubMed, and Wolfram Alpha. Wikipedia/ArXiv/PubMed are free; Wolfram Alpha requires WOLFRAM_ALPHA_APPID.`,rust:{signature:`WikipediaTool::new() / WolframAlphaTool::new(appid)`,description:`Four tools for encyclopedic and scientific knowledge. All implement the Tool trait.`,params:[],returns:`Structured JSON — see each tool description`,example:`use flowgentra_ai::core::tools::knowledge::{
    WikipediaTool, ArxivTool, PubMedTool, WolframAlphaTool,
};

let wiki   = WikipediaTool::new();
let arxiv  = ArxivTool::new();
let pubmed = PubMedTool::new();
let wolfram = WolframAlphaTool::from_env()?;  // WOLFRAM_ALPHA_APPID

let summary = wiki.call(json!({"title": "Transformer (machine learning)"})).await?;
// {"title": "...", "extract": "...", "url": "..."}

let papers = arxiv.call(json!({"query": "attention is all you need", "max_results": 3})).await?;
// {"results": [{"id": "...", "title": "...", "summary": "...", "published": "..."}]}`},python:{signature:`WikipediaTool() / WolframAlphaTool(api_key=None)`,description:`Knowledge tools for agents that need encyclopedic or scientific data.`,params:[],returns:`Structured JSON per tool`,example:`from flowgentra_ai.tools import WikipediaTool, ArxivTool, PubMedTool, WolframAlphaTool

wiki   = WikipediaTool()
arxiv  = ArxivTool()
pubmed = PubMedTool()
wolfram = WolframAlphaTool()  # reads WOLFRAM_ALPHA_APPID

result = wiki.call({"title": "Attention (machine learning)"})
print(result["extract"][:200])

papers = arxiv.call({"query": "RLHF language models", "max_results": 5})
for p in papers["results"]:
    print(p["title"], p["published"])`}},{id:`code-exec-tools`,topic:`tools`,name:`Code Execution Tools`,summary:`Execute Python, Node.js, or shell commands in a subprocess. All return {output, error, exit_code}. Timeouts kill the child process automatically.`,rust:{signature:`PythonReplTool::new() / ShellTool::new(allowed, timeout_secs)`,description:`Subprocess execution with tokio::process::Command, async stdin write, and tokio::time::timeout for kill-on-timeout.`,params:[{name:`code / command`,type:`str`,description:`Code or shell command to execute`},{name:`timeout_secs`,type:`u64 (constructor)`,description:`Kill timeout in seconds (default: 30)`}],returns:`{ output: str, error: str, exit_code: i32 }`,example:`use flowgentra_ai::core::tools::code_exec::{
    PythonReplTool, NodeJsReplTool, ShellTool,
};

let py   = PythonReplTool::new();
let node = NodeJsReplTool::new();

// Restricted shell — only listed commands allowed
let shell = ShellTool::new(vec!["ls".into(), "cat".into(), "echo".into()], 30);

// Unrestricted — explicit opt-in required
let shell_unr = ShellTool::unrestricted(30);

let r = py.call(json!({"code": "print(sum(range(100)))"})).await?;
// {"output": "4950", "error": "", "exit_code": 0}`},python:{signature:`PythonReplTool() / ShellTool(allowed_commands=[], timeout_secs=30)`,description:`Code execution tools. ShellTool blocks all commands by default unless you pass an allowlist or call unrestricted().`,params:[{name:`code`,type:`str`,description:`Python or JavaScript source code`},{name:`command`,type:`str (ShellTool)`,description:`Shell command to run`}],returns:`{ output, error, exit_code }`,example:`from flowgentra_ai.tools import PythonReplTool, NodeJsReplTool, ShellTool

py   = PythonReplTool()
node = NodeJsReplTool()
shell = ShellTool(allowed_commands=["ls", "cat", "wc"])
shell_unr = ShellTool.unrestricted()

r = py.call({"code": "import math; print(math.factorial(10))"})
# {"output": "3628800", "error": "", "exit_code": 0}

r = node.call({"code": "process.stdout.write(String(2**32))"})
# {"output": "4294967296", "error": "", "exit_code": 0}

r = shell.call({"command": "wc -l README.md"})
# {"output": "42 README.md", "error": "", "exit_code": 0}`}},{id:`file-tools`,topic:`tools`,name:`Extended File Tools`,summary:`CopyFileTool, DeleteFileTool, MoveFileTool, FileSearchTool — all sandbox-validated to prevent path traversal. Registered in with_builtins().`,rust:{signature:`CopyFileTool::new() / FileSearchTool::new()`,description:`All file tools validate paths against a sandbox root (default: cwd). Path traversal attempts return an error.`,params:[],returns:`JSON confirmation or match list`,example:`use flowgentra_ai::core::tools::files_extended::{
    CopyFileTool, DeleteFileTool, MoveFileTool, FileSearchTool,
};

let copy   = CopyFileTool::new();
let delete = DeleteFileTool::new();
let mv     = MoveFileTool::new();
let search = FileSearchTool::new();

copy.call(json!({"src": "report.md", "dst": "backup/report.md"})).await?;
delete.call(json!({"path": "tmp/", "recursive": true})).await?;
mv.call(json!({"src": "draft.txt", "dst": "final/v1.txt"})).await?;

let hits = search.call(json!({
    "directory": "src/",
    "pattern": "TODO|FIXME",
    "max_results": 100,
})).await?;`},python:{signature:`CopyFileTool() / FileSearchTool()`,description:`Extended file operations beyond the core FilesTool. All paths are sandbox-validated.`,params:[],returns:`JSON confirmation or {matches: [{file, line_number, line_content}]}`,example:`from flowgentra_ai.tools import CopyFileTool, DeleteFileTool, MoveFileTool, FileSearchTool

CopyFileTool().call({"src": "report.md", "dst": "backup/report.md"})
DeleteFileTool().call({"path": "tmp/cache/", "recursive": True})
MoveFileTool().call({"src": "draft.txt", "dst": "published/v1.txt"})

result = FileSearchTool().call({
    "directory": "src/",
    "pattern": r"unwrap\\(\\)",
    "max_results": 50,
})
for hit in result["matches"]:
    print(f"{hit['file']}:{hit['line_number']}  {hit['line_content'].strip()}")`}},{id:`data-tools`,topic:`tools`,name:`Data Tools`,summary:`Pure in-memory JSON and CSV manipulation — no I/O, no API keys. JsonGetValueTool, JsonListKeysTool, CsvQueryTool. Registered in with_builtins().`,rust:{signature:`JsonGetValueTool::new() / CsvQueryTool::new()`,description:`Three lightweight data tools that operate on string inputs. Ideal for agents that process structured data from prior tool calls.`,params:[],returns:`Extracted value, key list, or filtered rows`,example:`use flowgentra_ai::core::tools::data::{JsonGetValueTool, JsonListKeysTool, CsvQueryTool};

let jget  = JsonGetValueTool::new();
let jkeys = JsonListKeysTool::new();
let csv   = CsvQueryTool::new();

let v = jget.call(json!({
    "json": r#"{"user":{"name":"Alice","age":30}}"#,
    "path": "user.name"
})).await?;
// {"value": "Alice", "found": true}

let r = csv.call(json!({
    "csv": "name,score\\nAlice,95\\nBob,82",
    "filter": "score=95"
})).await?;
// {"rows": [{"name":"Alice","score":"95"}], "count": 1}`},python:{signature:`JsonGetValueTool() / CsvQueryTool()`,description:`In-memory data tools. Use to parse and query structured data returned by other tools.`,params:[],returns:`Structured result dict`,example:`from flowgentra_ai.tools import JsonGetValueTool, JsonListKeysTool, CsvQueryTool

# Dot-notation JSON path
result = JsonGetValueTool().call({
    "json": '{"config": {"model": "gpt-4", "temp": 0.7}}',
    "path": "config.model"
})
# {"value": "gpt-4", "found": true}

# List all keys (depth-limited)
result = JsonListKeysTool().call({
    "json": '{"a":1,"b":{"c":2,"d":{"e":3}}}',
    "depth": 3
})
# {"keys": ["a", "b", "b.c", "b.d", "b.d.e"]}

# CSV filter
result = CsvQueryTool().call({
    "csv": "city,pop\\nTokyo,14000000\\nOsaka,2700000\\nKyoto,1500000",
    "filter": "city=Tokyo"
})
# {"rows": [{"city":"Tokyo","pop":"14000000"}], "count": 1}`}},{id:`communication-tools`,topic:`tools`,name:`Communication Tools`,summary:`GmailTool (send/list/read) and SlackTool (post_message/list_channels). Both require access tokens via constructor or env var.`,rust:{signature:`GmailTool::new(access_token) / SlackTool::from_env()`,description:`Communication tools for sending and reading messages. Tokens passed explicitly or read from GMAIL_ACCESS_TOKEN / SLACK_BOT_TOKEN.`,params:[],returns:`Operation result as JSON`,example:`use flowgentra_ai::core::tools::communication::{GmailTool, SlackTool};

let gmail = GmailTool::from_env()?;   // GMAIL_ACCESS_TOKEN
let slack = SlackTool::from_env()?;   // SLACK_BOT_TOKEN

gmail.call(json!({
    "operation": "send",
    "to": "team@example.com",
    "subject": "Build passed",
    "body": "All tests green.",
})).await?;

slack.call(json!({
    "operation": "post_message",
    "channel": "#deployments",
    "text": ":white_check_mark: v1.2.0 deployed",
})).await?;`},python:{signature:`GmailTool(access_token=None) / SlackTool(bot_token=None)`,description:`Send messages and read inboxes. Tokens read from env when omitted.`,params:[{name:`operation`,type:`str`,description:`Gmail: "send"|"list"|"read". Slack: "post_message"|"list_channels"`}],returns:`Operation result as dict`,example:`from flowgentra_ai.tools import GmailTool, SlackTool

gmail = GmailTool()  # GMAIL_ACCESS_TOKEN
slack = SlackTool()  # SLACK_BOT_TOKEN

# Gmail: send
gmail.call({
    "operation": "send",
    "to": "boss@example.com",
    "subject": "Weekly summary",
    "body": "Done. See attached.",
})

# Gmail: read latest
msgs = gmail.call({"operation": "list", "max_results": 3})
msg  = gmail.call({"operation": "read", "message_id": msgs["messages"][0]["id"]})

# Slack
slack.call({"operation": "post_message", "channel": "#alerts", "text": "Done!"})
channels = slack.call({"operation": "list_channels"})`}},{id:`yaml-config`,topic:`handlers-config`,name:`Full YAML Config Reference`,summary:`Complete schema for agent config YAML files — all top-level keys, node options, LLM providers, memory, RAG, evaluation, and parallel execution settings.`,rust:{signature:`AgentConfig::from_file(path) -> Result<AgentConfig>`,description:"Every field shown. `${ENV_VAR}` substitution is supported in any string value.",params:[{name:`name`,type:`string`,description:`Agent identifier (required).`},{name:`llm.provider`,type:`string`,description:`"openai" | "anthropic" | "mistral" | "groq" | "ollama" | "azure" | "huggingface"`},{name:`graph.nodes[].node_type`,type:`string`,description:`"llm" | "tool" | "retry" | "timeout" | "human_in_the_loop" | "memory" | "supervisor" | "subgraph" | "planner"`},{name:`graph.recursion_limit`,type:`usize`,description:`Max execution steps before abort. Default: 25.`},{name:`graph.allow_cycles`,type:`bool`,description:`Allow cycles in graph. Default: true.`},{name:`graph.parallel`,type:`Vec<Vec<String>>`,description:`Explicit parallel groups. E.g. [[node_a, node_b]]`},{name:`memory.checkpointer.type`,type:`string`,description:`"memory" | "file"`},{name:`evaluation.min_confidence`,type:`f64`,description:`Retry threshold 0.0–1.0. Default: 0.8.`}],returns:`Fully validated AgentConfig struct`,example:`name: production_agent
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
    max_messages: 20`}}];function ka({entry:e}){let{language:t}=M(),n=t===`rust`?e.rust:e.python;return(0,j.jsxs)(`section`,{id:e.id,style:{marginBottom:64,paddingBottom:64,borderBottom:`1px solid #21262d`},children:[(0,j.jsx)(`h2`,{style:{fontFamily:`JetBrains Mono, monospace`,fontSize:`1.25rem`,color:`#e6edf3`,fontWeight:600,marginBottom:8,marginTop:0},children:e.name}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:20,lineHeight:1.7},children:e.summary}),(0,j.jsx)(`div`,{style:{background:`#161b22`,border:`1px solid #30363d`,borderLeft:`3px solid var(--accent)`,borderRadius:`0 6px 6px 0`,padding:`12px 16px`,marginBottom:20,fontFamily:`JetBrains Mono, monospace`,fontSize:`0.8125rem`,color:`#e6edf3`,overflowX:`auto`,whiteSpace:`pre`},children:n.signature}),(0,j.jsx)(`p`,{style:{color:`#c9d1d9`,marginBottom:24,lineHeight:1.7},children:n.description}),n.params?.length>0&&(0,j.jsxs)(`div`,{style:{marginBottom:24},children:[(0,j.jsx)(`h4`,{style:{fontSize:`0.8125rem`,fontWeight:600,color:`#8b949e`,textTransform:`uppercase`,letterSpacing:`0.07em`,marginBottom:12,marginTop:0},children:`Parameters`}),(0,j.jsx)(`div`,{style:{border:`1px solid #21262d`,borderRadius:6,overflow:`hidden`},children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsx)(`tr`,{style:{background:`#161b22`},children:[`Name`,`Type`,`Description`].map(e=>(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`8px 14px`,fontSize:`0.75rem`,color:`#8b949e`,fontWeight:600,borderBottom:`1px solid #21262d`,fontFamily:`IBM Plex Sans, sans-serif`},children:e},e))})}),(0,j.jsx)(`tbody`,{children:n.params.map((e,t)=>(0,j.jsxs)(`tr`,{style:{borderBottom:t<n.params.length-1?`1px solid #21262d`:`none`},children:[(0,j.jsx)(`td`,{style:{padding:`8px 14px`,fontFamily:`JetBrains Mono, monospace`,fontSize:`0.8125rem`,color:`var(--accent)`},children:e.name}),(0,j.jsx)(`td`,{style:{padding:`8px 14px`,fontFamily:`JetBrains Mono, monospace`,fontSize:`0.8125rem`,color:`#79c0ff`},children:e.type}),(0,j.jsx)(`td`,{style:{padding:`8px 14px`,fontSize:`0.875rem`,color:`#8b949e`},children:e.description})]},t))})]})})]}),(0,j.jsxs)(`div`,{style:{marginBottom:24},children:[(0,j.jsx)(`h4`,{style:{fontSize:`0.8125rem`,fontWeight:600,color:`#8b949e`,textTransform:`uppercase`,letterSpacing:`0.07em`,marginBottom:8,marginTop:0},children:`Returns`}),(0,j.jsx)(`p`,{style:{fontFamily:`JetBrains Mono, monospace`,fontSize:`0.8125rem`,color:`#a5d6ff`,margin:0},children:n.returns})]}),(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`h4`,{style:{fontSize:`0.8125rem`,fontWeight:600,color:`#8b949e`,textTransform:`uppercase`,letterSpacing:`0.07em`,marginBottom:12,marginTop:0},children:`Example`}),(0,j.jsx)(N,{rust:e.rust.example,python:e.python.example})]})]})}var Aa={"state-graph":{title:`StateGraph`,desc:`Core graph builder, typed state, and field reducers.`},"handlers-config":{title:`Handlers & Config`,desc:`Handler registration, from_config_path, and the full YAML config schema.`},memory:{title:`Memory`,desc:`Checkpointers, conversation memory, and multi-turn thread execution.`},"builtin-nodes":{title:`Built-in Nodes`,desc:`Ready-to-use node types — LLMNode, RetryNode, TimeoutNode, HumanInTheLoop, and more.`},agents:{title:`Agents`,desc:`Predefined agent types: ZeroShotReAct, FewShotReAct, Conversational, and MemoryAwareAgent.`},llm:{title:`LLMs`,desc:`All 7 providers, streaming, structured output, tool calling, caching, and cost tracking.`},rag:{title:`RAG`,desc:`Retrieval-augmented generation — vector stores, embeddings, text splitters, and retrieval utilities.`},supervisor:{title:`Supervisor`,desc:`Multi-agent orchestration with sequential, parallel, or LLM-routed strategies.`},observability:{title:`Observability`,desc:`Execution tracing, graph visualization (Mermaid / DOT), and output scoring.`}};function ja(){let{topicId:e}=mt(),{language:t}=M();if(!Aa[e])return(0,j.jsx)(Rt,{to:`/docs/api/state-graph`,replace:!0});let n=Oa.filter(t=>t.topic===e),r=n.map(e=>({id:e.id,label:e.name})),{title:i,desc:a}=Aa[e];return(0,j.jsxs)(P,{anchors:r,children:[(0,j.jsxs)(`div`,{style:{display:`inline-flex`,alignItems:`center`,gap:6,background:`var(--accent-dim, rgba(206,66,43,0.12))`,border:`1px solid var(--accent)`,borderRadius:20,padding:`3px 12px`,fontSize:`0.8125rem`,color:`var(--accent)`,marginBottom:16},children:[(0,j.jsx)(`span`,{children:t===`rust`?`🦀`:`🐍`}),` `,t===`rust`?`Rust`:`Python`,` API`]}),(0,j.jsx)(`h1`,{style:{fontSize:`2rem`,fontWeight:700,color:`#e6edf3`,letterSpacing:`-0.02em`,marginBottom:8,marginTop:0},children:i}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:48,lineHeight:1.7},children:a}),n.length===0?(0,j.jsx)(`p`,{style:{color:`#484f58`},children:`No entries for this topic yet.`}):n.map(e=>(0,j.jsx)(ka,{entry:e},e.id))]})}var Ma={"core-concepts":{category:`Core Concepts`,icon:`🧠`,description:`Understand the foundation of Flowgentra`,guides:[{id:`what-is-flowgentra`,title:`What is Flowgentra?`,difficulty:`beginner`,readTime:`5 min`,description:`Introduction to Flowgentra AI and its core philosophy`,file:`what-is-flowgentra.md`},{id:`state-concepts`,title:`State Management & Reducers`,difficulty:`beginner`,readTime:`10 min`,description:`Learn about typed state, reducers, and concurrent updates`,file:`state.md`,related:[`graphs`,`nodes`]},{id:`graphs`,title:`Graphs & Node Execution`,difficulty:`beginner`,readTime:`8 min`,description:`How graphs connect nodes and execute workflows`,file:`graphs.md`,related:[`nodes`,`state-concepts`]},{id:`nodes`,title:`What are Nodes?`,difficulty:`beginner`,readTime:`7 min`,description:`Understanding node types and execution models`,file:`nodes.md`,related:[`graphs`,`advanced-nodes`]}]},"getting-started":{category:`Getting Started`,icon:`🚀`,description:`Quick setup and first steps`,guides:[{id:`installation`,title:`Installation`,difficulty:`beginner`,readTime:`5 min`,description:`Install Flowgentra for Rust and Python`,file:`getting-started/installation.md`},{id:`quickstart-python`,title:`Quick Start - Python`,difficulty:`beginner`,readTime:`10 min`,description:`Build your first agent in Python in 10 minutes`,file:`getting-started/quickstart.md`},{id:`quickstart-rust`,title:`Quick Start - Rust`,difficulty:`beginner`,readTime:`10 min`,description:`Build your first agent in Rust in 10 minutes`,file:`getting-started/quickstart-rust.md`},{id:`first-agent`,title:`Build Your First Agent`,difficulty:`beginner`,readTime:`15 min`,description:`Step-by-step guide to creating a functional agent`,file:`first-agent.md`,related:[`quickstart-python`,`agents`]}]},"llm-integration":{category:`LLM Integration`,icon:`🧠`,description:`Connect and work with language models`,guides:[{id:`llm-client`,title:`LLM Guide`,difficulty:`intermediate`,readTime:`15 min`,description:`Configure and use LLMs for 7 different providers`,file:`llm-client.md`,related:[`configuration`]},{id:`llm-providers`,title:`Supported LLM Providers`,difficulty:`beginner`,readTime:`8 min`,description:`Complete list of supported providers with config examples`,file:`llm-providers.md`,related:[`llm-client`]},{id:`prompting`,title:`Effective Prompting`,difficulty:`intermediate`,readTime:`12 min`,description:`Best practices for prompt engineering with Flowgentra`,file:`prompting.md`,related:[`best-practices`]},{id:`token-counting`,title:`Token Counting & Cost Tracking`,difficulty:`intermediate`,readTime:`8 min`,description:`Monitor token usage and estimate costs`,file:`token-counting.md`,related:[`observability`]}]},agents:{category:`Agents`,icon:`🤖`,description:`Build and orchestrate agents`,guides:[{id:`agents`,title:`Agent Patterns`,difficulty:`intermediate`,readTime:`12 min`,description:`Different agent architectures and patterns (ReAct, etc.)`,file:`agents.md`,related:[`supervisor`,`tools`]},{id:`custom-agents`,title:`Building Custom Agents`,difficulty:`advanced`,readTime:`20 min`,description:`Create agents with custom logic and workflows`,file:`custom-agents.md`,related:[`advanced-nodes`,`graphs`]},{id:`supervisor`,title:`Multi-Agent Orchestration (Supervisor)`,difficulty:`advanced`,readTime:`18 min`,description:`Coordinate multiple agents with different strategies`,file:`supervisor.md`,related:[`agents`]},{id:`multi-agent`,title:`Multi-Agent Patterns`,difficulty:`advanced`,readTime:`15 min`,description:`Advanced patterns for multi-agent systems`,file:`multi-agent.md`,related:[`supervisor`,`advanced-nodes`]}]},"tools-capabilities":{category:`Tools & Capabilities`,icon:`🛠️`,description:`Give agents tools and abilities`,guides:[{id:`tools`,title:`Tools & Function Calling`,difficulty:`intermediate`,readTime:`12 min`,description:`Register and use tools with agents`,file:`tools.md`,related:[`mcp`,`tool-registry`]},{id:`mcp`,title:`Model Context Protocol (MCP)`,difficulty:`intermediate`,readTime:`15 min`,description:`Integrate external services via MCP`,file:`mcp.md`,related:[`tools`,`configuration`]},{id:`builtin-tools`,title:`Built-in Tools`,difficulty:`beginner`,readTime:`8 min`,description:`Calculator, file operations, web requests, and more`,file:`builtin-tools.md`,related:[`tools`]}]},"memory-state":{category:`Memory & State`,icon:`💾`,description:`Manage conversation history and state persistence`,guides:[{id:`memory`,title:`Memory Systems`,difficulty:`intermediate`,readTime:`12 min`,description:`Conversation memory, checkpointing, and state persistence`,file:`memory.md`,related:[`conversation-memory`,`state-concepts`]},{id:`conversation-memory`,title:`Conversation Memory`,difficulty:`intermediate`,readTime:`10 min`,description:`Store and manage conversation history`,file:`conversation-memory.md`,related:[`memory`]},{id:`checkpointing`,title:`Checkpointing & Resumption`,difficulty:`intermediate`,readTime:`10 min`,description:`Save and resume workflow execution`,file:`checkpointing.md`,related:[`memory`,`human-in-the-loop`]}]},"rag-data":{category:`RAG & Data`,icon:`📚`,description:`Build retrieval-augmented generation systems`,guides:[{id:`rag`,title:`RAG Pipeline`,difficulty:`intermediate`,readTime:`18 min`,description:`Complete guide to retrieval-augmented generation`,file:`rag.md`,related:[`document-loaders`,`embedding`,`reranking`]},{id:`document-loaders`,title:`Document Loaders`,difficulty:`intermediate`,readTime:`10 min`,description:`Load and process documents from various formats`,file:`document-loaders.md`,related:[`rag`,`text-splitters`]},{id:`text-splitters`,title:`Text Splitting & Chunking`,difficulty:`intermediate`,readTime:`10 min`,description:`Smart techniques for splitting documents into chunks`,file:`text-splitters.md`,related:[`rag`,`document-loaders`]},{id:`embedding`,title:`Embedding & Vector Stores`,difficulty:`intermediate`,readTime:`12 min`,description:`Create and store embeddings for semantic search`,file:`embedding.md`,related:[`rag`]},{id:`reranking`,title:`Reranking & Search Quality`,difficulty:`intermediate`,readTime:`10 min`,description:`Improve search results with reranking techniques`,file:`reranking.md`,related:[`rag`,`evaluation`]}]},"advanced-features":{category:`Advanced Features`,icon:`🔧`,description:`Production and customization features`,guides:[{id:`plugins`,title:`Plugins System`,difficulty:`advanced`,readTime:`15 min`,description:`Extend Flowgentra with custom plugins`,file:`plugins.md`,related:[`middleware`]},{id:`middleware`,title:`Middleware`,difficulty:`advanced`,readTime:`12 min`,description:`Request/response interceptors and cross-cutting concerns`,file:`middleware.md`,related:[`plugins`]},{id:`advanced-nodes`,title:`Advanced Nodes`,difficulty:`advanced`,readTime:`15 min`,description:`Retry, timeout, parallelization, and conditional logic`,file:`advanced-nodes.md`,related:[`graphs`,`nodes`]},{id:`human-in-the-loop`,title:`Human-in-the-Loop`,difficulty:`advanced`,readTime:`12 min`,description:`Approval workflows and human feedback integration`,file:`human-in-the-loop.md`,related:[`checkpointing`]}]},evaluation:{category:`Evaluation & Quality`,icon:`📊`,description:`Measure and improve output quality`,guides:[{id:`evaluation`,title:`Evaluation Framework`,difficulty:`intermediate`,readTime:`18 min`,description:`Scoring, grading, and quality assessment`,file:`evaluation.md`,related:[`best-practices`]},{id:`metrics`,title:`Evaluation Metrics`,difficulty:`intermediate`,readTime:`12 min`,description:`Hit rate, MRR, NDCG, and custom metrics`,file:`metrics.md`,related:[`evaluation`]}]},"observability-monitoring":{category:`Observability & Monitoring`,icon:`📈`,description:`Monitor, trace, and debug agents`,guides:[{id:`observability`,title:`Observability & Tracing`,difficulty:`intermediate`,readTime:`12 min`,description:`Structured logging, tracing, and visualization`,file:`observability.md`,related:[`debugging`]},{id:`debugging`,title:`Debugging & Troubleshooting`,difficulty:`intermediate`,readTime:`10 min`,description:`Common issues and debugging techniques`,file:`debugging.md`,related:[`observability`]}]},configuration:{category:`Configuration`,icon:`⚙️`,description:`Configure agents and workflows`,guides:[{id:`configuration`,title:`YAML Configuration Guide`,difficulty:`intermediate`,readTime:`15 min`,description:`Complete guide to configuring agents in YAML`,file:`configuration.md`,related:[`handlers-registration`]},{id:`handlers-registration`,title:`Handler Registration`,difficulty:`intermediate`,readTime:`10 min`,description:`Register and wire handlers with auto-discovery`,file:`handlers-registration.md`,related:[`configuration`]},{id:`environment-variables`,title:`Environment Variables`,difficulty:`beginner`,readTime:`5 min`,description:`Using environment variables in config`,file:`environment-variables.md`,related:[`configuration`]}]},examples:{category:`Examples & Tutorials`,icon:`📖`,description:`Learning by example`,guides:[{id:`chatbot-example`,title:`Build a Chatbot`,difficulty:`beginner`,readTime:`15 min`,description:`Complete example of a conversational chatbot`,file:`examples/chatbot.md`,related:[`agents`,`memory`]},{id:`multi-agent-example`,title:`Multi-Agent Research System`,difficulty:`intermediate`,readTime:`20 min`,description:`Build a research agent with web search and analysis`,file:`examples/multi-agent.md`,related:[`supervisor`,`tools`,`rag`]},{id:`rag-agent-example`,title:`RAG-Based Q&A Bot`,difficulty:`intermediate`,readTime:`18 min`,description:`Document-based question answering system`,file:`examples/rag-agent.md`,related:[`rag`,`document-loaders`,`evaluation`]}]},"best-practices":{category:`Best Practices`,icon:`✨`,description:`Production-ready patterns`,guides:[{id:`best-practices`,title:`Best Practices`,difficulty:`intermediate`,readTime:`12 min`,description:`Guidelines for production-ready agents`,file:`best-practices.md`,related:[`observability`,`evaluation`]},{id:`performance`,title:`Performance Optimization`,difficulty:`advanced`,readTime:`15 min`,description:`Tips for optimizing agent performance`,file:`performance.md`,related:[`observability`]},{id:`error-handling`,title:`Error Handling`,difficulty:`intermediate`,readTime:`12 min`,description:`Robust error handling strategies`,file:`error-handling.md`,related:[`debugging`]}]},help:{category:`Help & Support`,icon:`🆘`,description:`FAQ and troubleshooting`,guides:[{id:`faq`,title:`Frequently Asked Questions`,difficulty:`beginner`,readTime:`8 min`,description:`Answers to common questions`,file:`faq.md`},{id:`troubleshooting`,title:`Troubleshooting Guide`,difficulty:`beginner`,readTime:`10 min`,description:`Common issues and solutions`,file:`troubleshooting.md`,related:[`debugging`,`faq`]},{id:`migration`,title:`Migration from LangChain`,difficulty:`intermediate`,readTime:`15 min`,description:`Guide for migrating from LangChain to Flowgentra`,file:`migration.md`,related:[`best-practices`]}]}},Na=[{title:`Beginner - Get Started with Python`,icon:`🐍`,duration:`2-3 hours`,description:`Perfect for new users starting with Python`,steps:[{title:`What is Flowgentra?`,id:`what-is-flowgentra`},{title:`Installation`,id:`installation`},{title:`Quick Start - Python`,id:`quickstart-python`},{title:`Build Your First Agent`,id:`first-agent`},{title:`State Management`,id:`state-concepts`},{title:`Agent Patterns`,id:`agents`},{title:`Tools & Function Calling`,id:`tools`},{title:`Memory Systems`,id:`memory`}]},{title:`Intermediate - Build a Production Agent`,icon:`🏗️`,duration:`4-6 hours`,description:`Build a scalable agent with memory and tools`,steps:[{title:`Graphs & Execution`,id:`graphs`},{title:`Advanced Nodes`,id:`advanced-nodes`},{title:`LLM Integration`,id:`llm-client`},{title:`Memory & Checkpointing`,id:`memory`},{title:`Configuration Guide`,id:`configuration`},{title:`Evaluation Framework`,id:`evaluation`},{title:`Observability`,id:`observability`},{title:`Best Practices`,id:`best-practices`}]},{title:`Advanced - RAG & Multi-Agent`,icon:`🚀`,duration:`6-8 hours`,description:`Master RAG systems and multi-agent coordination`,steps:[{title:`RAG Pipeline`,id:`rag`},{title:`Document Loaders`,id:`document-loaders`},{title:`Text Splitting`,id:`text-splitters`},{title:`Reranking`,id:`reranking`},{title:`Multi-Agent Orchestration`,id:`supervisor`},{title:`Human-in-the-Loop`,id:`human-in-the-loop`},{title:`Plugins System`,id:`plugins`},{title:`Performance Optimization`,id:`performance`}]},{title:`Master - Full Stack`,icon:`👑`,duration:`10+ hours`,description:`Complete mastery of Flowgentra`,progressive:!0,steps:[{title:`Core Concepts`,id:`what-is-flowgentra`},{title:`Fundamentals`,id:`installation`},{title:`Build & Deploy`,id:`agents`},{title:`Scale & Optimize`,id:`supervisor`},{title:`Monitor & Improve`,id:`observability`}]}];function Pa(){let[e,t]=(0,v.useState)(`all`),[n,r]=(0,v.useState)(null),i={beginner:`🟢 Beginner`,intermediate:`🟡 Intermediate`,advanced:`🔴 Advanced`},a=t=>e===`all`?t:t.filter(t=>t.difficulty===e);return(0,j.jsxs)(`div`,{className:`guides-container`,children:[(0,j.jsxs)(`div`,{className:`guides-hero`,children:[(0,j.jsx)(`h1`,{children:`📚 Guides & How-To's`}),(0,j.jsx)(`p`,{children:`Learn Flowgentra step by step with organized guides`})]}),(0,j.jsxs)(`section`,{className:`learning-paths`,children:[(0,j.jsx)(`h2`,{children:`🛣️ Recommended Learning Paths`}),(0,j.jsx)(`div`,{className:`paths-grid`,children:Na.map(e=>(0,j.jsxs)(`div`,{className:`learning-path-card`,children:[(0,j.jsx)(`div`,{className:`path-icon`,children:e.icon}),(0,j.jsx)(`h3`,{children:e.title}),(0,j.jsxs)(`p`,{className:`path-duration`,children:[`⏱️ `,e.duration]}),(0,j.jsx)(`p`,{children:e.description}),(0,j.jsxs)(`div`,{className:`path-steps`,children:[e.steps.slice(0,3).map(e=>(0,j.jsx)(`span`,{className:`step-bubble`,children:e.title.split(` `)[0]},e.id)),(0,j.jsxs)(`span`,{className:`step-more`,children:[`+`,e.steps.length-3]})]})]},e.title))})]}),(0,j.jsxs)(`div`,{className:`filter-section`,children:[(0,j.jsx)(`h3`,{children:`Filter by Difficulty`}),(0,j.jsx)(`div`,{className:`difficulty-filters`,children:[`all`,`beginner`,`intermediate`,`advanced`].map(n=>(0,j.jsx)(`button`,{className:`filter-btn ${e===n?`active`:``}`,onClick:()=>t(n),children:n===`all`?`All Levels`:i[n]},n))})]}),(0,j.jsx)(`section`,{className:`guides-by-category`,children:Object.entries(Ma).map(([e,t])=>{let o=a(t.guides);return o.length===0?null:(0,j.jsxs)(`div`,{className:`category-section`,children:[(0,j.jsxs)(`div`,{className:`category-header`,onClick:()=>r(n===e?null:e),children:[(0,j.jsx)(`span`,{className:`category-icon`,children:t.icon}),(0,j.jsxs)(`div`,{className:`category-info`,children:[(0,j.jsx)(`h2`,{children:t.category}),(0,j.jsx)(`p`,{children:t.description})]}),(0,j.jsx)(`span`,{className:`guide-count`,children:o.length}),(0,j.jsx)(`span`,{className:`expand-icon`,children:n===e?`▼`:`▶`})]}),n===e&&(0,j.jsx)(`div`,{className:`guides-list`,children:o.map(e=>(0,j.jsx)(`div`,{className:`guide-card`,children:(0,j.jsxs)(A,{to:`/docs/${e.category.toLowerCase().replace(/\s+/g,`-`)}/${e.id}`,className:`guide-link`,children:[(0,j.jsxs)(`div`,{className:`guide-header`,children:[(0,j.jsx)(`h3`,{children:e.title}),(0,j.jsx)(`span`,{className:`difficulty ${e.difficulty}`,children:i[e.difficulty]})]}),(0,j.jsx)(`p`,{className:`guide-description`,children:e.description}),(0,j.jsxs)(`div`,{className:`guide-meta`,children:[(0,j.jsxs)(`span`,{className:`read-time`,children:[`📖 `,e.readTime]}),e.related&&(0,j.jsxs)(`span`,{className:`related-count`,children:[`🔗 `,e.related.length,` related`]})]})]})},e.id))})]},e)})}),(0,j.jsxs)(`section`,{className:`quick-start`,children:[(0,j.jsx)(`h2`,{children:`⚡ Quick Start`}),(0,j.jsxs)(`div`,{className:`quick-links`,children:[(0,j.jsx)(A,{to:`/docs/getting-started/installation`,className:`quick-link`,children:`📦 Installation`}),(0,j.jsx)(A,{to:`/docs/quickstart-python`,className:`quick-link`,children:`🐍 Python Quick Start`}),(0,j.jsx)(A,{to:`/docs/quickstart-rust`,className:`quick-link`,children:`🦀 Rust Quick Start`}),(0,j.jsx)(A,{to:`/docs/first-agent`,className:`quick-link`,children:`🤖 Build First Agent`})]})]})]})}var Fa={fundamentals:{section:`Fundamentals`,icon:`🎯`,description:`Essential concepts everyone should know`,concepts:[{id:`what-is-flowgentra`,title:`What is Flowgentra?`,shortDesc:`Overview of Flowgentra AI framework`,concepts:[`Agentic AI framework for Rust & Python`,`Type-safe state management with reducers`,`Graph-based workflow execution`,`Multi-LLM provider support`,`Production-ready with observability`],keyTakeaways:[`✅ Type-safe agents from day one`,`✅ YAML-first configuration`,`✅ 7 LLM providers built-in`,`✅ Production observability included`],coreVideo:`https://youtu.be/flowgentra-intro`},{id:`state-management`,title:`State Management`,shortDesc:`Typed, concurrent state with automatic reducers`,keyTakeaways:[`Compile-time checked state (Rust)`,`Automatic partial updates via reducers`,`Per-field merge strategies`,`Optional, Append, Sum, Min/Max, Custom reducers`],examples:[`State grows monotonically (messages: Append)`,`Token counting accumulates (total_tokens: Sum)`,`Metadata merges (metadata: MergeMap)`,`Current step replaces (current_step: default)`]},{id:`agents`,title:`What Are Agents?`,shortDesc:`Autonomous systems that perceive, decide, and act`,keyTakeaways:[`Perceive: Process inputs via LLM and tools`,`Decide: Reason about strategy and next steps`,`Act: Execute actions (tools, decisions)`,`Reflect: Learn from outcomes (memory)`],agentPatterns:[{name:`ReAct`,desc:`Reason + Act, common baseline`},{name:`Self-Ask`,desc:`Ask clarifying questions first`},{name:`Conversational`,desc:`Multi-turn with memory`},{name:`Supervisor`,desc:`Orchestrate sub-agents`}]}]},architecture:{section:`Architecture & Design`,icon:`🏗️`,description:`Core architectural patterns`,concepts:[{id:`graphs-execution`,title:`Graphs & Node Execution`,shortDesc:`How workflows are structured and executed`,keyTakeaways:[`DAG (Directed Acyclic Graph) execution model`,`Nodes are functions/handlers`,`Edges define control flow`,`Entry and exit points define start/end`,`State flows through nodes`],examples:[`Linear pipeline: A → B → C`,`Branching: A → {B, C} → D`,`Loops: A → B → A (if enabled)`,`Conditional edges: A → (if X) B else C`]},{id:`nodes`,title:`Nodes Deep Dive`,shortDesc:`Understanding different node types`,nodeTypes:[{name:`Handler`,desc:`Custom async function`},{name:`LLMNode`,desc:`LLM invocation`},{name:`ToolNode`,desc:`Tool/function calling`},{name:`BuildIn`,desc:`Retry, Timeout, etc.`},{name:`Supervisor`,desc:`Multi-agent orchestration`},{name:`Subgraph`,desc:`Compose graphs`}],keyTakeaways:[`Each node receives state`,`Returns modified state + optional edge name`,`Can execute in parallel (if no input deps)`,`Built-in retry, timeout, fallback nodes`]},{id:`routers-edges`,title:`Routing & Edges`,shortDesc:`Controlling workflow flow`,edgeTypes:[{name:`Direct`,desc:`Named edge: "node_a" → "node_b"`},{name:`Conditional`,desc:`Runtime decision via edge condition`},{name:`Dynamic`,desc:`Node returns next node name`},{name:`Parallel`,desc:`Multiple edges from same node`}],routing:[`Node returns string → route taken`,`Node returns None → use default edge`,`END constant → terminates workflow`,`Conditional(lambda) → runtime branch decision`]}]},configuration:{section:`Configuration & Setup`,icon:`⚙️`,description:`How to configure agents`,concepts:[{id:`yaml-first`,title:`YAML-First Configuration`,shortDesc:`Define agents entirely in YAML`,keyTakeaways:[`Zero-code agent definition in YAML`,`Auto-handler discovery via decorators`,`Environment variable substitution`,`Composable YAML with imports`,`Version control friendly`],yamlSections:[`name, description`,`llm (provider, model, auth)`,`graph (nodes, edges, recursion limit)`,`memory (checkpointer, conversation)`,`rag (vector store, embeddings)`,`evaluation (metrics, thresholds)`,`observability (tracing, metrics)`,`state_schema (type definitions)`]},{id:`handlers`,title:`Handler Registration`,shortDesc:`Auto-discoverable node handlers`,keyTakeaways:[`#[register_handler] macro auto-discovers`,`@register_handler decorator in Python`,`No manual wiring needed`,`Handler name must match YAML config`,`Supports both DynState and typed state`],handlerPattern:[`fn name matches handler: name in YAML`,`Receives DynState (key-value store)`,`Returns Result<DynState>`,`Async-friendly`,`One-liner registration via macro/decorator`]},{id:`credentials-env`,title:`Credentials & Environment`,shortDesc:`Managing secrets and configuration`,keyTakeaways:["${VAR_NAME} substitution in YAML",`Never commit secrets to version control`,`.env file support`,`Runtime environment variable override`,`Credential rotation strategies`]}]},capabilities:{section:`Agent Capabilities`,icon:`💪`,description:`What agents can do`,concepts:[{id:`llm-integration`,title:`LLM Integration`,shortDesc:`7 LLM providers with unified interface`,providers:[{name:`OpenAI`,models:`GPT-4o, GPT-4-turbo, GPT-3.5`},{name:`Anthropic`,models:`Claude 3 family`},{name:`Mistral`,models:`Mistral Large, Medium, Small`},{name:`Groq`,models:`LLaMA 3, Mixtral`},{name:`Ollama`,models:`Any local model`},{name:`HuggingFace`,models:`Any HF model`},{name:`Azure`,models:`Azure OpenAI deployment`}],keyFeatures:[`Token usage tracking`,`Cost estimation`,`Fallback/retry logic`,`Response caching`,`Tool/function calling`,`Structured output (JSON)`,`Streaming support`]},{id:`tools-mcp`,title:`Tools & MCP`,shortDesc:`Give agents capabilities`,toolTypes:[{name:`Built-in`,desc:`Calculator, file ops, web requests`},{name:`Custom`,desc:`Register any async function`},{name:`MCP`,desc:`Model Context Protocol services`},{name:`Delegated`,desc:`Call other agents`}],mcpBenefits:[`Claude Desktop tools`,`Browser functions`,`Git operations`,`File system access`,`API integrations`,`Database queries`]},{id:`memory-persistence`,title:`Memory & Conversation`,shortDesc:`Multi-turn stateful interactions`,memoryTypes:[{name:`Conversation Memory`,desc:`Message history with window`},{name:`Token Buffer`,desc:`Bounded by token count`},{name:`Summary Memory`,desc:`Compress via LLM summarization`},{name:`Checkpoints`,desc:`Full state snapshots per-thread`}],keyTakeaways:[`Per-thread state isolation`,`Automatic checkpoint save/load`,`Conversation context management`,`Optional message summarization`,`Thread-safe concurrent operations`]},{id:`rag`,title:`RAG (Retrieval-Augmented Generation)`,shortDesc:`Knowledge grounding with documents`,components:[{name:`Document Loaders`,desc:`Load PDF, Markdown, HTML, JSON`},{name:`Text Splitters`,desc:`Chunk intelligently by content`},{name:`Embeddings`,desc:`Convert to vectors (OpenAI, Mistral)`},{name:`Vector Store`,desc:`Store & retrieve (Chroma, Pinecone, in-memory)`},{name:`Reranker`,desc:`Improve ranking (RRF, cross-encoder)`},{name:`Retrieval`,desc:`Semantic + hybrid search`}],workflow:[`1. Load documents from files/APIs`,`2. Split into chunks`,`3. Generate embeddings`,`4. Store in vector DB`,`5. Query-time: retrieve relevant chunks`,`6. Pass to LLM as context`,`7. Optional reranking for precision`]}]},advanced:{section:`Advanced Topics`,icon:`🚀`,description:`Production & customization`,concepts:[{id:`multi-agent`,title:`Multi-Agent Systems`,shortDesc:`Orchestrating teams of agents`,patterns:[{name:`Sequential`,desc:`Agents run one after another`},{name:`Parallel`,desc:`All agents run concurrently`},{name:`Hierarchical`,desc:`Supervisor routes to specialists`},{name:`Dynamic`,desc:`LLM decides which agent to call`}],use_cases:[`Research: Search → Analyze → Summarize`,`Code gen: Architect → Implement → Review`,`Content: Write → Edit → Publish`,`Support: Triage → Route → Escalate`]},{id:`observability`,title:`Observability & Monitoring`,shortDesc:`See what your agents are doing`,aspects:[{name:`Tracing`,desc:`Track execution flow per node`},{name:`Metrics`,desc:`Performance & resource usage`},{name:`Logging`,desc:`Structured logs for debugging`},{name:`Visualization`,desc:`Graph diagrams and flows`},{name:`Profiling`,desc:`Identify bottlenecks`}],outputs:[`Mermaid diagrams`,`JSON traces`,`Performance reports`,`Error analysis`,`Token usage tracking`]},{id:`human-in-loop`,title:`Human-in-the-Loop`,shortDesc:`Break for human feedback`,patterns:[`Approval nodes for sensitive operations`,`Collect human feedback for refinement`,`Resume from checkpoints`,`Edit state before resuming`,`Multi-turn user interaction`],use_cases:[`Financial decisions requiring approval`,`Content review before publishing`,`Clarification when uncertain`,`Feedback loops for learning`,`Escalation for complex issues`]},{id:`plugins-middleware`,title:`Plugins & Middleware`,shortDesc:`Extend and customize`,plugins:[`Custom node types`,`New vector stores`,`Custom embeddings`,`New LLM providers`,`Analytics integrations`],middleware:[`Pre-execution hooks`,`Post-execution hooks`,`State validation`,`Audit logging`,`Rate limiting`,`Error recovery`]}]}};function Ia(){let[e,t]=(0,v.useState)(null);return(0,j.jsxs)(`div`,{className:`concepts-container`,children:[(0,j.jsxs)(`div`,{className:`concepts-hero`,children:[(0,j.jsx)(`h1`,{children:`🧠 Core Concepts`}),(0,j.jsx)(`p`,{children:`Understand the foundations of Flowgentra AI`})]}),Object.entries(Fa).map(([n,r])=>(0,j.jsxs)(`section`,{className:`concept-section`,children:[(0,j.jsxs)(`div`,{className:`section-header`,children:[(0,j.jsxs)(`h2`,{children:[(0,j.jsx)(`span`,{className:`section-icon`,children:r.icon}),r.section]}),(0,j.jsx)(`p`,{className:`section-description`,children:r.description})]}),(0,j.jsx)(`div`,{className:`concepts-grid`,children:r.concepts.map(n=>(0,j.jsxs)(`div`,{className:`concept-card`,onClick:()=>t(e===n.id?null:n.id),children:[(0,j.jsxs)(`div`,{className:`concept-header`,children:[(0,j.jsx)(`h3`,{children:n.title}),(0,j.jsx)(`p`,{className:`concept-short-desc`,children:n.shortDesc})]}),e===n.id&&(0,j.jsxs)(`div`,{className:`concept-expanded`,children:[n.keyTakeaways&&(0,j.jsxs)(`div`,{className:`takeaways`,children:[(0,j.jsx)(`h4`,{children:`Key Takeaways`}),(0,j.jsx)(`ul`,{children:n.keyTakeaways.map((e,t)=>(0,j.jsx)(`li`,{children:e},t))})]}),n.agentPatterns&&(0,j.jsxs)(`div`,{className:`patterns`,children:[(0,j.jsx)(`h4`,{children:`Agent Patterns`}),(0,j.jsx)(`div`,{className:`patterns-list`,children:n.agentPatterns.map((e,t)=>(0,j.jsxs)(`div`,{className:`pattern-item`,children:[(0,j.jsxs)(`strong`,{children:[e.name,`:`]}),` `,e.desc]},t))})]}),n.nodeTypes&&(0,j.jsxs)(`div`,{className:`node-types`,children:[(0,j.jsx)(`h4`,{children:`Node Types`}),(0,j.jsx)(`div`,{className:`types-grid`,children:n.nodeTypes.map((e,t)=>(0,j.jsxs)(`div`,{className:`type-item`,children:[(0,j.jsx)(`strong`,{children:e.name}),(0,j.jsx)(`p`,{children:e.desc})]},t))})]}),n.examples&&(0,j.jsxs)(`div`,{className:`examples`,children:[(0,j.jsx)(`h4`,{children:`Examples`}),(0,j.jsx)(`ul`,{children:n.examples.map((e,t)=>(0,j.jsx)(`li`,{children:e},t))})]}),n.edgeTypes&&(0,j.jsxs)(`div`,{className:`edge-types`,children:[(0,j.jsx)(`h4`,{children:`Edge Types`}),(0,j.jsx)(`div`,{className:`types-list`,children:n.edgeTypes.map((e,t)=>(0,j.jsxs)(`div`,{className:`edge-item`,children:[(0,j.jsxs)(`strong`,{children:[e.name,`:`]}),` `,e.desc]},t))})]}),n.routing&&(0,j.jsxs)(`div`,{className:`routing`,children:[(0,j.jsx)(`h4`,{children:`Routing`}),(0,j.jsx)(`ul`,{children:n.routing.map((e,t)=>(0,j.jsx)(`li`,{children:e},t))})]}),n.handlerPattern&&(0,j.jsxs)(`div`,{className:`handler-pattern`,children:[(0,j.jsx)(`h4`,{children:`Handler Pattern`}),(0,j.jsx)(`ul`,{children:n.handlerPattern.map((e,t)=>(0,j.jsx)(`li`,{children:e},t))})]}),n.providers&&(0,j.jsxs)(`div`,{className:`providers`,children:[(0,j.jsx)(`h4`,{children:`Providers`}),(0,j.jsx)(`div`,{className:`providers-list`,children:n.providers.map((e,t)=>(0,j.jsxs)(`div`,{className:`provider-item`,children:[(0,j.jsx)(`strong`,{children:e.name}),(0,j.jsx)(`p`,{children:e.models})]},t))})]}),n.memoryTypes&&(0,j.jsxs)(`div`,{className:`memory-types`,children:[(0,j.jsx)(`h4`,{children:`Memory Types`}),(0,j.jsx)(`div`,{className:`types-list`,children:n.memoryTypes.map((e,t)=>(0,j.jsxs)(`div`,{className:`type-item`,children:[(0,j.jsxs)(`strong`,{children:[e.name,`:`]}),` `,e.desc]},t))})]}),n.components&&(0,j.jsxs)(`div`,{className:`components`,children:[(0,j.jsx)(`h4`,{children:`Components`}),(0,j.jsx)(`div`,{className:`components-list`,children:n.components.map((e,t)=>(0,j.jsxs)(`div`,{className:`component-item`,children:[(0,j.jsxs)(`strong`,{children:[e.name,`:`]}),` `,e.desc]},t))})]}),n.workflow&&(0,j.jsxs)(`div`,{className:`workflow`,children:[(0,j.jsx)(`h4`,{children:`Workflow`}),(0,j.jsx)(`ol`,{children:n.workflow.map((e,t)=>(0,j.jsx)(`li`,{children:e},t))})]}),(0,j.jsx)(`button`,{className:`learn-more-btn`,onClick:e=>{e.stopPropagation()},children:`Learn More →`})]}),(0,j.jsx)(`div`,{className:`expand-hint`,children:e===n.id?`▲ Click to collapse`:`▼ Click to expand`})]},n.id))})]},n)),(0,j.jsx)(`div`,{className:`nav-back`,children:(0,j.jsx)(A,{to:`/docs/getting-started`,children:`← Back to Getting Started`})})]})}var La=[{id:`hello-world`,title:`Hello World Agent`,description:`The simplest graph — one node that echoes the input. Use this as a blank slate for new projects.`,rust:`use flowgentra_ai::prelude::*;

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
    LLMConfig, LLMProvider, LLM, Message, create_llm
};

#[tokio::main]
async fn main() -> flowgentra_ai::core::error::Result<()> {
    let config = LLMConfig::new(
        LLMProvider::Anthropic,
        "claude-3-5-haiku-20241022".into(),
        std::env::var("ANTHROPIC_API_KEY").unwrap(),
    ).with_temperature(0.7);

    let client = create_llm(&config)?;

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
}`,python:`from flowgentra_ai.llm import LLM, LLMConfig, Message
import asyncio

async def stream_response():
    config = LLMConfig(
        provider="anthropic",
        model="claude-3-5-haiku-20241022",
        api_key="\${ANTHROPIC_API_KEY}",
        temperature=0.7,
    )
    client = LLM(config)

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

    let client = create_llm(&config)?;

    let response = client.chat_structured(vec![
        Message::system("Extract person information from the text as JSON."),
        Message::user("Alice is a 30-year-old software engineer."),
    ]).await?;

    let person: PersonInfo = serde_json::from_value(response)?;
    println!("Name: {}, Age: {}, Job: {}",
        person.name, person.age, person.occupation);
    // Name: Alice, Age: 30, Job: software engineer
    Ok(())
}`,python:`from flowgentra_ai.llm import LLM, LLMConfig, Message
from flowgentra_ai.types import ResponseFormat
import json

config = LLMConfig(
    provider="openai",
    model="gpt-4o-mini",
    api_key="\${OPENAI_API_KEY}",
    response_format=ResponseFormat.Json,  # forces JSON output
)
client = LLM(config)

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
from flowgentra_ai.llm import LLM, LLMConfig, Message
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
    client = LLM(config)

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
print(f"Quality score: {score:.2f}")`}];function Ra(){return(0,j.jsxs)(P,{anchors:La.map(e=>({id:e.id,label:e.title})),children:[(0,j.jsx)(`h1`,{style:{fontSize:`2rem`,fontWeight:700,color:`#e6edf3`,letterSpacing:`-0.02em`,marginBottom:8,marginTop:0},children:`Examples`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:48,lineHeight:1.7},children:`Real-world usage patterns. Toggle between Rust and Python using the language switcher.`}),La.map((e,t)=>(0,j.jsxs)(`section`,{id:e.id,style:{marginBottom:60,paddingBottom:60,borderBottom:t<La.length-1?`1px solid #21262d`:`none`},children:[(0,j.jsx)(`div`,{style:{display:`flex`,alignItems:`baseline`,gap:12,marginBottom:8},children:(0,j.jsxs)(`span`,{style:{fontSize:`0.75rem`,fontWeight:600,color:`var(--accent)`,background:`var(--accent-dim)`,border:`1px solid var(--accent)`,borderRadius:10,padding:`2px 10px`},children:[`Example `,t+1]})}),(0,j.jsx)(`h2`,{style:{fontSize:`1.375rem`,fontWeight:600,color:`#e6edf3`,marginBottom:8,marginTop:0},children:e.title}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,lineHeight:1.7,marginBottom:20},children:e.description}),(0,j.jsx)(N,{rust:e.rust,python:e.python})]},e.id))]})}var za=[{version:`0.1.6`,date:`2026-04-20`,tag:`latest`,changes:[{type:`fix`,text:`Python: fix publishing issue — package metadata corrected for PyPI distribution`}],rust:`# Cargo.toml
flowgentra-ai = "0.2.0"`,python:`pip install "flowgentra-ai==0.2.0"`},{version:`0.1.7`,date:`2026-04-18`,tag:null,changes:[{type:`feat`,text:`Rust: add ReactDocstore and SelfAskWithSearch predefined agents (complete the 7-agent taxonomy)`},{type:`feat`,text:`Rust: typed agent constructors — ZeroShotReAct::new(), FewShotReAct::new(), etc. as ergonomic wrappers around AgentBuilder`},{type:`breaking`,text:`Rust: AgentConfig renamed to PrebuiltAgentConfig for clarity (Python still exports it as AgentConfig)`},{type:`fix`,text:`Rust: improved formatting and display for agent config types`}],rust:`# Cargo.toml
flowgentra-ai = "0.1.7"`,python:`pip install "flowgentra-ai==0.1.7"`},{version:`0.1.6`,date:`2026-04-15`,tag:null,changes:[{type:`feat`,text:`Python: LLM class now has a direct constructor ��� LLM(provider, model, api_key=None, ...) — no need to wrap in LLMConfig first`},{type:`feat`,text:`Python: API key is auto-resolved from environment variables and .env files when api_key is omitted`},{type:`feat`,text:`Python: typed agent constructors accept LLM directly — ZeroShotReAct(name=..., llm=LLM(...), tools=[...])`},{type:`fix`,text:`Rust: fix graph compilation issue with certain node ordering configurations`},{type:`fix`,text:`Rust: fix MSSQL connection string handling in db adapters`},{type:`breaking`,text:`Python: unified API key logic — provider-specific env vars (OPENAI_API_KEY, ANTHROPIC_API_KEY, etc.) are checked automatically; per-call api_key override still works`}],rust:`# Cargo.toml
flowgentra-ai = "0.1.6"`,python:`pip install "flowgentra-ai==0.1.6"`},{version:`0.1.5`,date:`2026-04-14`,tag:null,changes:[{type:`feat`,text:`Comprehensive documentation website with 46+ pages covering all modules`},{type:`feat`,text:`Enhanced API reference with 40+ module categories for both Rust and Python`},{type:`feat`,text:`New guides: Runtime & Execution, Database Integration, Agent Builder, Predefined Agents, LLM Providers`},{type:`feat`,text:`Added Runtime module documentation covering execution model and async patterns`},{type:`docs`,text:`Reorganized documentation with clear module-to-docs mapping for all Rust and Python APIs`},{type:`docs`,text:`Updated navigation structure with 14 search categories for better discovery`},{type:`docs`,text:`Added code examples for all major APIs in both Rust and Python`}],rust:`# Cargo.toml
flowgentra-ai = "0.1.5"`,python:`pip install "flowgentra-ai==0.1.5"`},{version:`0.1.5`,date:`2025-04-05`,tag:null,changes:[{type:`fix`,text:"Python: all submodule imports now work correctly (use `from flowgentra_ai.graph import StateGraph`, not `from flowgentra import …`)"},{type:`fix`,text:"Python: `Agent.create()` now takes `model` string instead of `llm` LLM object; use `run_with_input(str)` on the returned agent"},{type:`fix`,text:"Python: `StateGraph.invoke()` accepts a plain `dict` — do not wrap with `State()`"},{type:`fix`,text:`Python: fixed 9 compile errors in PyO3 bindings (rayon, schema_version, tool extraction, GIL cloning, type mismatches)`},{type:`fix`,text:"Python: `conversation_memory.rs` extra brace syntax error resolved"},{type:`fix`,text:"Python: `LLM` constructor no longer requires a pre-built config object"},{type:`breaking`,text:'Python: `Agent.create(llm=…)` removed — pass `model="gpt-4o"` string instead'},{type:`breaking`,text:"Python: top-level `from flowgentra import StateGraph` removed — use submodule imports"},{type:`docs`,text:"Updated all code examples to use correct `flowgentra_ai.*` submodule import paths"}],rust:`# Cargo.toml
flowgentra-ai = "0.1.5"`,python:`pip install "flowgentra-ai==0.1.5"`},{version:`0.4.0`,date:`2024-12-01`,tag:null,changes:[{type:`feat`,text:"Add `add_conditional_edge` for dynamic routing based on state"},{type:`feat`,text:"Python: `@register_handler` now auto-discovered with zero config"},{type:`feat`,text:"New `Agent::from_config_path` API — define graphs in YAML"},{type:`perf`,text:`State cloning reduced by 40% via arena allocator in hot paths`},{type:`fix`,text:`Fix race condition in async node execution with shared state`}],rust:`# Cargo.toml
flowgentra = "0.4"`,python:`pip install "flowgentra==0.4.0"`},{version:`0.3.2`,date:`2024-10-15`,tag:null,changes:[{type:`fix`,text:"Python: handle `None` return values from node functions"},{type:`fix`,text:`Rust: correct borrow checker error with recursive graphs`},{type:`docs`,text:`Improve error messages for missing entry node`}],rust:`flowgentra = "0.3.2"`,python:`pip install "flowgentra==0.3.2"`},{version:`0.3.0`,date:`2024-09-01`,tag:null,changes:[{type:`feat`,text:`Initial Python bindings via PyO3`},{type:`feat`,text:`TypedDict state support in Python`},{type:`feat`,text:`Async node support in both languages`},{type:`breaking`,text:"Renamed `Graph::new` to `StateGraph::builder`"}],rust:`flowgentra = "0.3"`,python:`pip install "flowgentra==0.3.0"`}],Ba={feat:{bg:`rgba(35,134,54,0.15)`,color:`#3fb950`,label:`feat`},fix:{bg:`rgba(248,81,73,0.15)`,color:`#f85149`,label:`fix`},perf:{bg:`rgba(53,114,165,0.15)`,color:`#79c0ff`,label:`perf`},docs:{bg:`rgba(139,148,158,0.15)`,color:`#8b949e`,label:`docs`},breaking:{bg:`rgba(210,153,34,0.15)`,color:`#e3b341`,label:`breaking`}};function Va(){return(0,j.jsxs)(P,{children:[(0,j.jsx)(`h1`,{style:{fontSize:`2rem`,fontWeight:700,color:`#e6edf3`,letterSpacing:`-0.02em`,marginBottom:8,marginTop:0},children:`Changelog`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:48,lineHeight:1.7},children:`All notable changes to Flowgentra. The language switcher shows the install snippet for each version.`}),za.map((e,t)=>(0,j.jsxs)(`article`,{style:{marginBottom:52,paddingBottom:52,borderBottom:t<za.length-1?`1px solid #21262d`:`none`},children:[(0,j.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,gap:10,marginBottom:6},children:[(0,j.jsxs)(`h2`,{style:{fontFamily:`JetBrains Mono, monospace`,fontSize:`1.25rem`,color:`#e6edf3`,margin:0},children:[`v`,e.version]}),e.tag&&(0,j.jsx)(`span`,{style:{background:`rgba(35,134,54,0.15)`,color:`#3fb950`,border:`1px solid rgba(35,134,54,0.4)`,borderRadius:10,fontSize:`0.75rem`,padding:`2px 10px`,fontWeight:500},children:e.tag}),(0,j.jsx)(`span`,{style:{color:`#484f58`,fontSize:`0.875rem`,marginLeft:`auto`},children:e.date})]}),(0,j.jsx)(`ul`,{style:{listStyle:`none`,padding:0,margin:`16px 0 20px`},children:e.changes.map((t,n)=>{let r=Ba[t.type]||Ba.docs;return(0,j.jsxs)(`li`,{style:{display:`flex`,alignItems:`baseline`,gap:10,padding:`6px 0`,borderBottom:n<e.changes.length-1?`1px solid #161b22`:`none`},children:[(0,j.jsx)(`span`,{style:{background:r.bg,color:r.color,fontSize:`0.7rem`,fontWeight:600,padding:`2px 7px`,borderRadius:4,flexShrink:0,fontFamily:`JetBrains Mono, monospace`},children:r.label}),(0,j.jsx)(`span`,{style:{color:`#c9d1d9`,lineHeight:1.6,fontSize:`0.9375rem`},children:t.text})]},n)})}),(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`p`,{style:{fontSize:`0.8125rem`,color:`#8b949e`,marginBottom:8},children:`Install this version:`}),(0,j.jsx)(N,{rust:e.rust,python:e.python})]})]},e.version))]})}function Ha({type:e=`info`,title:t,children:n}){let r={info:{bg:`#0d3b66`,border:`#3a86ff`,icon:`ℹ️`,borderColor:`#3a86ff`},warning:{bg:`#6a3e06`,border:`#ffc300`,icon:`⚠️`,borderColor:`#ffc300`},tip:{bg:`#1b4332`,border:`#52b788`,icon:`💡`,borderColor:`#52b788`},danger:{bg:`#5a1e1e`,border:`#e63946`,icon:`🚨`,borderColor:`#e63946`}},i=r[e]||r.info;return(0,j.jsxs)(`div`,{style:{background:i.bg,border:`2px solid ${i.borderColor}`,borderLeft:`4px solid ${i.borderColor}`,borderRadius:8,padding:16,margin:`20px 0`,lineHeight:1.6},children:[(0,j.jsxs)(`div`,{style:{fontWeight:600,marginBottom:8,color:i.border},children:[i.icon,` `,t]}),(0,j.jsx)(`div`,{style:{fontSize:`0.95rem`,color:`#e6edf3`},children:n})]})}var Ua=[{term:`Agent`,definition:`A compiled, ready-to-run workflow. An agent is a StateGraph that has been compiled and can process input through its defined workflow.`,example:`compiled_agent = graph.compile()`},{term:`Checkpointing`,definition:`Persisting the state of a workflow to durable storage between node executions. Enables resumability after failures or human review.`,example:`Checkpoint after node execution for recovery`},{term:`Conditional Edge`,definition:`A dynamic edge in a graph that is determined at runtime by a router function based on current state.`,example:`builder.add_conditional_edges("node", router_func)`},{term:`Edge`,definition:`A directed connection between two nodes in a graph. Edges define the execution order and flow of control.`,example:`graph.add_edge("node_a", "node_b")`},{term:`Graph`,definition:`A directed acyclic graph (DAG) of nodes and edges. The core abstraction in Flowgentra for modeling agent workflows.`,example:`StateGraph(AgentState)`},{term:`Node`,definition:`A single step or function in a graph. Nodes receive state as input and return modified state as output.`,example:`async def my_node(state: AgentState) -> AgentState: ...`},{term:`Reducer`,definition:`A function that controls how concurrent state updates are merged. Ensures consistent state merging strategy.`,example:`def merge_messages(left, right) -> list: return left + right`},{term:`Routing`,definition:`The process of determining which node executes next based on current state. Can be fixed or conditional.`,example:`Conditional routing based on state.action value`},{term:`State`,definition:`Strongly-typed data that flows through a graph. Every node reads from and writes to the graph state.`,example:`class AgentState(TypedDict): query: str; response: str`},{term:`StateGraph`,definition:`The core API for building workflows. A builder pattern for constructing graphs with nodes and edges.`,example:`builder = StateGraph(YourStateType)`},{term:`Workflow`,definition:`A complete AI agent application combining graph, LLM, tools, memory, and evaluation into a functional system.`,example:`Customer support agent with RAG + tools`},{term:`Stream / Streaming`,definition:`Incrementally receiving output from a running workflow instead of waiting for complete execution.`,example:`for chunk in agent.stream(input): print(chunk)`},{term:`Tool`,definition:`An external function or API that an agent can invoke. Tools extend agent capabilities beyond pure LLM reasoning.`,example:`Web search tool, database query tool, API calls`},{term:`Tool Registry`,definition:`A typed collection of tools that an agent can invoke. Manages tool registration, discovery, and invocation.`,example:`registry.add_function(name, func, description)`},{term:`Memory`,definition:`Persistent storage of conversation history and agent state across multiple invocations.`,example:`ConversationMemory stores message history`},{term:`Conversation History`,definition:`The sequence of messages in a conversation, typically stored in memory for context in multi-turn interactions.`,example:`Messages with roles: user, assistant, system`},{term:`Parallel Nodes`,definition:`Multiple nodes that execute concurrently in a graph. Results are merged using reducers.`,example:`Multiple branches that merge into next node`},{term:`Subgraph`,definition:`A graph nested within another graph, allowing composition and reuse of workflow patterns.`,example:`Include a RAG graph as a subgraph in main agent`},{term:`LLM Provider`,definition:`An external service providing language model capabilities. Flowgentra supports 7+ providers.`,example:`OpenAI, Anthropic, Mistral, Groq, etc.`},{term:`RAG (Retrieval-Augmented Generation)`,definition:`A pattern combining document retrieval with LLM generation to ground responses in provided documents.`,example:`Retrieve relevant docs, then generate answer`},{term:`Evaluation`,definition:`Measuring the quality of agent outputs using metrics, scoring functions, or LLM-based grading.`,example:`Accuracy score, semantic similarity, LLM grader`},{term:`Middleware`,definition:`Request/response interceptors that run before/after node execution for cross-cutting concerns.`,example:`Logging, auth, rate-limiting, instrumentation`},{term:`Plugin`,definition:`An extension mechanism for adding custom behavior to the Flowgentra framework.`,example:`Custom node types, metrics collection, event hooks`},{term:`Human-in-the-Loop`,definition:`A pattern where workflows pause for human review/approval before continuing execution.`,example:`Approve sensitive actions, review summaries`},{term:`Observability`,definition:`Ability to see and understand what is happening in a running workflow through logs, traces, and metrics.`,example:`OpenTelemetry tracing, structured logging`},{term:`Retry Logic`,definition:`Automatically retrying failed node executions with configurable backoff strategies.`,example:`Exponential backoff for transient failures`},{term:`Timeout`,definition:`Maximum duration a node can execute before it is terminated.`,example:`Prevent infinite loops, set timeout limit`},{term:`Validation`,definition:`Ensuring input state conforms to expected types and constraints before processing.`,example:`Schema validation, type checking, constraints`},{term:`Configuration`,definition:`Settings for customizing graph execution, typically using YAML or environment variables.`,example:`YAML config for LLM, tools, memory backends`},{term:`Stream Token Count`,definition:`Tracking the number of tokens produced during streaming to monitor API costs.`,example:`Count tokens per chunk for cost estimation`},{term:`Compiled Graph`,definition:`Result of calling compile() on a StateGraph builder. A ready-to-run agent.`,example:`agent = graph.compile()`}];function Wa(){return(0,j.jsxs)(P,{anchors:[{id:`overview`,label:`Overview`},{id:`all-terms`,label:`All Terms`}],children:[(0,j.jsx)(`h1`,{style:{fontSize:`2rem`,fontWeight:700,color:`#e6edf3`,marginBottom:8,marginTop:0},children:`Glossary`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:32,lineHeight:1.7,fontSize:`1.0625rem`},children:`Key terminology used throughout Flowgentra documentation. Use this as a reference when you encounter unfamiliar terms.`}),(0,j.jsx)(`section`,{id:`overview`,children:(0,j.jsx)(Ha,{type:`tip`,title:`How to Use This Glossary`,children:(0,j.jsxs)(`ul`,{style:{margin:`0 0 0 20px`,paddingLeft:0},children:[(0,j.jsx)(`li`,{children:`Terms are organized alphabetically`}),(0,j.jsx)(`li`,{children:`Each term includes a clear definition`}),(0,j.jsx)(`li`,{children:`Most definitions include practical examples`}),(0,j.jsx)(`li`,{children:`Highlighted terms link to relevant documentation`})]})})}),(0,j.jsx)(`section`,{id:`all-terms`,style:{marginTop:40},children:(0,j.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr`,gap:24},children:Ua.map((e,t)=>(0,j.jsxs)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:`20px`},children:[(0,j.jsx)(`div`,{style:{fontSize:`1.1rem`,fontWeight:600,color:`#3a86ff`,marginBottom:8,fontFamily:`JetBrains Mono, monospace`},children:e.term}),(0,j.jsx)(`p`,{style:{color:`#e6edf3`,margin:`0 0 12px 0`,lineHeight:1.6},children:e.definition}),e.example&&(0,j.jsxs)(`div`,{style:{background:`#161b22`,border:`1px solid #21262d`,borderRadius:4,padding:`8px 12px`,fontSize:`0.875rem`,color:`#8b949e`,fontFamily:`JetBrains Mono, monospace`,marginTop:8},children:[(0,j.jsx)(`span`,{style:{color:`#52b788`,fontWeight:500},children:`Example:`}),` `,e.example]})]},t))})}),(0,j.jsxs)(`section`,{style:{marginTop:60,paddingTop:40,borderTop:`1px solid #21262d`},children:[(0,j.jsx)(`h2`,{style:{fontSize:`1.25rem`,fontWeight:600,color:`#e6edf3`,marginBottom:16},children:`Not seeing a term?`}),(0,j.jsxs)(`p`,{style:{color:`#8b949e`,lineHeight:1.7},children:[`If you encounter a term not in this glossary, please`,` `,(0,j.jsx)(`a`,{href:`https://github.com/oussamabenhariz/flowgentra-ai/`,style:{color:`#3a86ff`,textDecoration:`none`},children:`open an issue`}),` `,`on GitHub to request we add it.`]})]})]})}var Ga=[{id:`overview`,label:`Overview`},{id:`why-plugins`,label:`Why Use Plugins?`},{id:`plugin-types`,label:`Plugin Types`},{id:`basic-plugin`,label:`Creating a Basic Plugin`},{id:`hooks`,label:`Available Hooks`},{id:`example-metrics`,label:`Example: Metrics Plugin`},{id:`example-debug`,label:`Example: Debug Plugin`},{id:`best-practices`,label:`Best Practices`},{id:`testing`,label:`Testing Plugins`},{id:`api-reference`,label:`API Reference`},{id:`next`,label:`Next Steps`}];function Ka(){return(0,j.jsxs)(P,{anchors:Ga,children:[(0,j.jsx)(`h1`,{style:{fontSize:`2rem`,fontWeight:700,color:`#e6edf3`,marginBottom:8,marginTop:0},children:`Plugins System`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:32,lineHeight:1.7,fontSize:`1.0625rem`},children:`Extend Flowgentra's functionality without modifying core code. Plugins provide hooks into the execution lifecycle.`}),(0,j.jsxs)(`section`,{id:`overview`,style:{marginBottom:52},children:[(0,j.jsx)(`h2`,{style:qa,children:`Overview`}),(0,j.jsx)(`p`,{style:Ja,children:`The plugin system allows you to inject custom logic at key points in graph execution:`}),(0,j.jsxs)(`ul`,{style:Ya,children:[(0,j.jsx)(`li`,{children:`Before/after node execution`}),(0,j.jsx)(`li`,{children:`On state updates`}),(0,j.jsx)(`li`,{children:`On errors and exceptions`}),(0,j.jsx)(`li`,{children:`During channel transitions`}),(0,j.jsx)(`li`,{children:`Custom metrics collection`})]}),(0,j.jsx)(`p`,{style:Ja,children:`Plugins are loaded at graph initialization and participate in every execution. They're ideal for cross-cutting concerns like observability, validation, and instrumentation.`})]}),(0,j.jsxs)(`section`,{id:`why-plugins`,style:{marginBottom:52},children:[(0,j.jsx)(`h2`,{style:qa,children:`Why Use Plugins?`}),(0,j.jsxs)(Ha,{type:`tip`,title:`When to Use Plugins`,children:[(0,j.jsx)(`strong`,{children:`✓ Use plugins for:`}),` Monitoring, logging, metrics, custom validation, authentication checks, state transformation`,(0,j.jsx)(`br`,{}),(0,j.jsx)(`br`,{}),(0,j.jsx)(`strong`,{children:`✗ Don't use for:`}),` Core business logic (use nodes), route decisions (use edges), state schema definition`]}),(0,j.jsx)(`p`,{style:Ja,children:`Without plugins, you'd add instrumentation code to every node. With plugins, you write it once and reuse across all graphs.`}),(0,j.jsxs)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:20,marginTop:16},children:[(0,j.jsx)(`div`,{style:{fontWeight:600,color:`#e6edf3`,marginBottom:12},children:`Example: Metrics Without Plugins (❌ Repetitive)`}),(0,j.jsx)(N,{python:`def node_a(state):
    start = time.time()
    try:
        result = expensive_operation(state)
        metrics.record('node_a_success', 1)
        return result
    except Exception as e:
        metrics.record('node_a_error', 1)
        raise
    finally:
        metrics.record('node_a_duration', time.time() - start)

def node_b(state):
    start = time.time()
    try:
        result = another_operation(state)
        metrics.record('node_b_success', 1)
        return result
    except Exception as e:
        metrics.record('node_b_error', 1)
        raise
    finally:
        metrics.record('node_b_duration', time.time() - start)
# Repeat for every node... very repetitive!`})]}),(0,j.jsxs)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:20,marginTop:16},children:[(0,j.jsx)(`div`,{style:{fontWeight:600,color:`#e6edf3`,marginBottom:12},children:`Example: Same With Plugin (✓ Clean)`}),(0,j.jsx)(N,{python:`class MetricsPlugin:
    def on_node_start(self, node_name, state):
        self.start_time = time.time()
    
    def on_node_end(self, node_name, state, result):
        duration = time.time() - self.start_time
        metrics.record(f'{node_name}_duration', duration)
        metrics.record(f'{node_name}_success', 1)
    
    def on_node_error(self, node_name, error):
        metrics.record(f'{node_name}_error', 1)

# Register once:
graph = builder.compile(plugins=[MetricsPlugin()])
# Now ALL nodes automatically tracked!`})]})]}),(0,j.jsxs)(`section`,{id:`plugin-types`,style:{marginBottom:52},children:[(0,j.jsx)(`h2`,{style:qa,children:`Plugin Types`}),(0,j.jsxs)(`p`,{style:Ja,children:[`Flowgentra plugins extend the `,(0,j.jsx)(`code`,{style:Xa,children:`Plugin`}),` base class:`]}),(0,j.jsx)(N,{python:`from flowgentra_ai.plugins import Plugin

class MyPlugin(Plugin):
    """Base hooks available to override."""
    
    async def on_graph_start(self, graph_id, initial_state):
        """Called when graph execution begins."""
        pass
    
    async def on_node_start(self, node_name, state):
        """Called before a node executes."""
        pass
    
    async def on_node_end(self, node_name, state, output):
        """Called after node completes successfully."""
        pass
    
    async def on_node_error(self, node_name, error, state):
        """Called if node raises an exception."""
        pass
    
    async def on_channel_update(self, channel_name, value):
        """Called when a channel receives new data."""
        pass
    
    async def on_graph_end(self, graph_id, final_state, status):
        """Called when graph execution finishes."""
        pass`})]}),(0,j.jsxs)(`section`,{id:`basic-plugin`,style:{marginBottom:52},children:[(0,j.jsx)(`h2`,{style:qa,children:`Creating Your First Plugin`}),(0,j.jsx)(N,{python:`import logging
from flowgentra_ai.plugins import Plugin
from datetime import datetime

class LoggingPlugin(Plugin):
    """Logs all node transitions."""
    
    def __init__(self, logger=None):
        self.logger = logger or logging.getLogger('flowgentra')
    
    async def on_node_start(self, node_name, state):
        self.logger.info(f"[{datetime.now()}] Starting node: {node_name}")
        self.logger.debug(f"State keys: {list(state.keys())}")
    
    async def on_node_end(self, node_name, state, output):
        self.logger.info(f"[{datetime.now()}] Finished node: {node_name}")
    
    async def on_node_error(self, node_name, error, state):
        self.logger.error(f"[{datetime.now()}] Error in {node_name}: {error}")

# Register the plugin:
graph = builder.compile(plugins=[LoggingPlugin()])

# Run the graph - all transitions will be logged
result = graph.invoke(initial_state)`}),(0,j.jsxs)(Ha,{type:`info`,title:`Async Plugins`,children:[`Plugin hooks are async. Use `,(0,j.jsx)(`code`,{style:Xa,children:`await`}),` if you call async functions inside hooks.`]})]}),(0,j.jsxs)(`section`,{id:`hooks`,style:{marginBottom:52},children:[(0,j.jsx)(`h2`,{style:qa,children:`Available Hooks Reference`}),(0,j.jsx)(`div`,{style:{overflowX:`auto`,marginTop:16},children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,color:`#8b949e`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsxs)(`tr`,{style:{borderBottom:`2px solid #21262d`},children:[(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`12px`,color:`#e6edf3`,fontWeight:600},children:`Hook`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`12px`,color:`#e6edf3`,fontWeight:600},children:`When Called`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`12px`,color:`#e6edf3`,fontWeight:600},children:`Arguments`})]})}),(0,j.jsx)(`tbody`,{children:[[`on_graph_start`,`Before graph execution begins`,`graph_id, initial_state`],[`on_node_start`,`Before a node runs`,`node_name, state`],[`on_node_end`,`After node succeeds`,`node_name, state, output`],[`on_node_error`,`If node raises exception`,`node_name, error, state`],[`on_channel_update`,`When channel receives data`,`channel_name, value`],[`on_graph_end`,`After graph execution finishes`,`graph_id, final_state, status`]].map((e,t)=>(0,j.jsxs)(`tr`,{style:{borderBottom:`1px solid #21262d`},children:[(0,j.jsx)(`td`,{style:{padding:`12px`,fontFamily:`JetBrains Mono, monospace`,color:`#58a6ff`,fontWeight:500},children:e[0]}),(0,j.jsx)(`td`,{style:{padding:`12px`},children:e[1]}),(0,j.jsx)(`td`,{style:{padding:`12px`,fontFamily:`JetBrains Mono, monospace`,fontSize:`0.85rem`},children:e[2]})]},t))})]})})]}),(0,j.jsxs)(`section`,{id:`example-metrics`,style:{marginBottom:52},children:[(0,j.jsx)(`h2`,{style:qa,children:`Example: Metrics Collection Plugin`}),(0,j.jsx)(`p`,{style:Ja,children:`Collect detailed metrics about graph execution without touching node code:`}),(0,j.jsx)(N,{python:`import time
from flowgentra_ai.plugins import Plugin
from collections import defaultdict

class MetricsPlugin(Plugin):
    """Collects execution metrics for all nodes."""
    
    def __init__(self):
        self.metrics = defaultdict(list)
        self.node_start_times = {}
    
    async def on_node_start(self, node_name, state):
        self.node_start_times[node_name] = time.time()
    
    async def on_node_end(self, node_name, state, output):
        duration = time.time() - self.node_start_times.pop(node_name, time.time())
        self.metrics[f'{node_name}_duration'].append(duration)
        self.metrics[f'{node_name}_success'] = self.metrics.get(f'{node_name}_success', 0) + 1
    
    async def on_node_error(self, node_name, error, state):
        self.node_start_times.pop(node_name, None)
        self.metrics[f'{node_name}_error'] = self.metrics.get(f'{node_name}_error', 0) + 1
    
    async def on_graph_end(self, graph_id, final_state, status):
        # Print summary
        print(f"\\n=== Metrics for {graph_id} ===")
        for metric_name, values in self.metrics.items():
            if isinstance(values, list):
                avg = sum(values) / len(values)
                print(f"{metric_name}: avg={avg:.3f}s, count={len(values)}")
            else:
                print(f"{metric_name}: {values}")
    
    def get_report(self):
        """Return metrics as dict for external storage."""
        return dict(self.metrics)

# Usage:
metrics_plugin = MetricsPlugin()
graph = builder.compile(plugins=[metrics_plugin])

# Run multiple times
for i in range(5):
    graph.invoke(initial_state)

# Retrieve report
report = metrics_plugin.get_report()
print(f"Total executions: {report.get('node_a_success', 0)}")`})]}),(0,j.jsxs)(`section`,{id:`example-debug`,style:{marginBottom:52},children:[(0,j.jsx)(`h2`,{style:qa,children:`Example: Debug Plugin`}),(0,j.jsx)(N,{python:`from flowgentra_ai.plugins import Plugin

class DebugPlugin(Plugin):
    """Prints detailed debug info during execution."""
    
    def __init__(self, verbose=False):
        self.verbose = verbose
    
    async def on_node_start(self, node_name, state):
        print(f"\\n>>> Entering node: {node_name}")
        if self.verbose and isinstance(state, dict):
            for key in list(state.keys())[:5]:  # Show first 5 keys
                val = state[key]
                if isinstance(val, str):
                    preview = val[:50] + ('...' if len(val) > 50 else '')
                    print(f"    {key}: {preview!r}")
    
    async def on_node_end(self, node_name, state, output):
        print(f"<<< Exiting node: {node_name}")
        if self.verbose and isinstance(output, dict):
            changed_keys = [k for k in output.keys() if output.get(k) != state.get(k)]
            if changed_keys:
                print(f"    Changed: {changed_keys}")
    
    async def on_node_error(self, node_name, error, state):
        print(f"!!! Error in node {node_name}: {type(error).__name__}: {error}")
    
    async def on_graph_end(self, graph_id, final_state, status):
        print(f"\\n=== Graph {graph_id} completed with status: {status} ===")

# Usage:
debug = DebugPlugin(verbose=True)
graph = builder.compile(plugins=[debug])
graph.invoke(initial_state)`})]}),(0,j.jsxs)(`section`,{id:`best-practices`,style:{marginBottom:52},children:[(0,j.jsx)(`h2`,{style:qa,children:`Best Practices`}),(0,j.jsx)(Ha,{type:`warning`,title:`Performance Considerations`,children:`Plugins run on the execution path. Keep hooks fast to avoid slowing down graph execution. For expensive operations, consider async processing or event queuing.`}),(0,j.jsxs)(`div`,{style:{marginTop:20},children:[(0,j.jsxs)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:16,marginBottom:12},children:[(0,j.jsx)(`div`,{style:{fontWeight:600,color:`#52b788`,marginBottom:8},children:`✓ DO`}),(0,j.jsxs)(`ul`,{style:Ya,children:[(0,j.jsx)(`li`,{children:`Keep plugin methods lightweight`}),(0,j.jsx)(`li`,{children:`Use async for I/O operations`}),(0,j.jsx)(`li`,{children:`Store state in instance variables`}),(0,j.jsx)(`li`,{children:`Handle exceptions gracefully`}),(0,j.jsx)(`li`,{children:`Use context managers for setup/teardown`})]})]}),(0,j.jsxs)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:16},children:[(0,j.jsx)(`div`,{style:{fontWeight:600,color:`#e63946`,marginBottom:8},children:`✗ DON'T`}),(0,j.jsxs)(`ul`,{style:Ya,children:[(0,j.jsx)(`li`,{children:`Block in plugin hooks (use async)`}),(0,j.jsx)(`li`,{children:`Modify state directly (only observe)`}),(0,j.jsx)(`li`,{children:`Throw exceptions from hooks`}),(0,j.jsx)(`li`,{children:`Access private graph internals`}),(0,j.jsx)(`li`,{children:`Store unlimited data (memory leak)`})]})]})]})]}),(0,j.jsxs)(`section`,{id:`testing`,style:{marginBottom:52},children:[(0,j.jsx)(`h2`,{style:qa,children:`Testing Plugins`}),(0,j.jsx)(N,{python:`import unittest
from unittest.mock import AsyncMock
from flowgentra_ai.plugins import Plugin

class TestMetricsPlugin(unittest.TestCase):
    async def test_on_node_success(self):
        """Test metrics recorded on success."""
        plugin = MetricsPlugin()
        
        # Simulate node execution
        await plugin.on_node_start('my_node', {'x': 1})
        await plugin.on_node_end('my_node', {'x': 1}, {'x': 2})
        
        # Verify metrics recorded
        self.assertIn('my_node_success', plugin.metrics)
        self.assertEqual(plugin.metrics['my_node_success'], 1)
    
    async def test_on_node_error(self):
        """Test error counting."""
        plugin = MetricsPlugin()
        
        error = ValueError("test error")
        await plugin.on_node_start('bad_node', {})
        await plugin.on_node_error('bad_node', error, {})
        
        self.assertEqual(plugin.metrics.get('bad_node_error', 0), 1)

if __name__ == '__main__':
    unittest.main()`})]}),(0,j.jsxs)(`section`,{id:`api-reference`,style:{marginBottom:52},children:[(0,j.jsx)(`h2`,{style:qa,children:`Plugin API Reference`}),(0,j.jsx)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:20},children:(0,j.jsxs)(`div`,{style:{fontFamily:`JetBrains Mono, monospace`,fontSize:`0.9rem`,color:`#e6edf3`,lineHeight:1.8},children:[(0,j.jsx)(`div`,{style:{color:`#58a6ff`,fontWeight:600},children:`class Plugin:`}),(0,j.jsxs)(`div`,{style:{marginLeft:20},children:[(0,j.jsx)(`div`,{children:`async def on_graph_start(graph_id: str, initial_state: dict)`}),(0,j.jsx)(`div`,{children:`async def on_node_start(node_name: str, state: dict)`}),(0,j.jsx)(`div`,{children:`async def on_node_end(node_name: str, state: dict, output: dict)`}),(0,j.jsx)(`div`,{children:`async def on_node_error(node_name: str, error: Exception, state: dict)`}),(0,j.jsx)(`div`,{children:`async def on_channel_update(channel_name: str, value: Any)`}),(0,j.jsx)(`div`,{children:`async def on_graph_end(graph_id: str, final_state: dict, status: str)`})]})]})}),(0,j.jsxs)(Ha,{type:`tip`,title:`Composing Multiple Plugins`,children:[`You can register multiple plugins - they all run in order:`,(0,j.jsx)(N,{python:`graph = builder.compile(plugins=[
    MetricsPlugin(),
    LoggingPlugin(),
    DebugPlugin(),
    MyCustomPlugin(),
])`})]})]}),(0,j.jsxs)(`section`,{id:`next`,style:{borderTop:`1px solid #21262d`,paddingTop:40,marginTop:60},children:[(0,j.jsx)(`h2`,{style:qa,children:`Next Steps`}),(0,j.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(200px, 1fr))`,gap:12},children:[{href:`/docs/middleware`,label:`🔌 Middleware System`,desc:`Request/response interceptors`},{href:`/docs/observability`,label:`📊 Observability`,desc:`Tracing & structured logging`},{href:`/docs/validation`,label:`✓ Input Validation`,desc:`Schema & type checking`}].map((e,t)=>(0,j.jsxs)(`a`,{href:e.href,style:{display:`block`,background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:16,textDecoration:`none`,transition:`border-color 0.2s`},onMouseEnter:e=>e.currentTarget.style.borderColor=`#3a86ff`,onMouseLeave:e=>e.currentTarget.style.borderColor=`#21262d`,children:[(0,j.jsx)(`div`,{style:{fontWeight:600,color:`#3a86ff`,marginBottom:4},children:e.label}),(0,j.jsx)(`div`,{style:{fontSize:`0.875rem`,color:`#8b949e`},children:e.desc})]},t))})]})]})}var qa={fontSize:`1.375rem`,fontWeight:600,color:`#e6edf3`,marginBottom:16,marginTop:0},Ja={color:`#8b949e`,lineHeight:1.75,marginBottom:16},Ya={color:`#8b949e`,lineHeight:1.8,paddingLeft:20,margin:0},Xa={background:`#0d1117`,border:`1px solid #21262d`,borderRadius:4,padding:`2px 6px`,fontFamily:`JetBrains Mono, monospace`,fontSize:`0.85em`},Za=[{id:`overview`,label:`Overview`},{id:`vs-plugins`,label:`Middleware vs Plugins`},{id:`api-structure`,label:`Structure & API`},{id:`logging`,label:`Example: Logging`},{id:`rate-limit`,label:`Example: Rate Limiting`},{id:`error-handling`,label:`Example: Error Handling`},{id:`auth`,label:`Example: Authentication`},{id:`composition`,label:`Composing Middleware`},{id:`best-practices`,label:`Best Practices`},{id:`next`,label:`Next Steps`}];function Qa(){return(0,j.jsxs)(P,{anchors:Za,children:[(0,j.jsx)(`h1`,{style:{fontSize:`2rem`,fontWeight:700,color:`#e6edf3`,marginBottom:8,marginTop:0},children:`Middleware System`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:32,lineHeight:1.7,fontSize:`1.0625rem`},children:`Request/response interceptors for cross-cutting concerns. Process node inputs and outputs uniformly.`}),(0,j.jsxs)(`section`,{id:`overview`,style:{marginBottom:52},children:[(0,j.jsx)(`h2`,{style:$a,children:`Overview`}),(0,j.jsx)(`p`,{style:eo,children:`Middleware intercepts node execution to apply transformations or validations to the state. Each middleware is a chain link that can:`}),(0,j.jsxs)(`ul`,{style:to,children:[(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{children:`Before`}),` node runs: Validate, transform, or reject input`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{children:`After`}),` node completes: Transform, validate, or cache output`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{children:`On error`}),`: Handle or re-throw exceptions`]})]}),(0,j.jsxs)(`p`,{style:eo,children:[`Middleware runs `,(0,j.jsx)(`strong`,{children:`on every node`}),`, creating a uniform processing pipeline.`]})]}),(0,j.jsxs)(`section`,{id:`vs-plugins`,style:{marginBottom:52},children:[(0,j.jsx)(`h2`,{style:$a,children:`Middleware vs Plugins: When to Use Each`}),(0,j.jsx)(`div`,{style:{overflowX:`auto`,marginTop:16},children:(0,j.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,color:`#8b949e`,fontSize:`0.9rem`},children:[(0,j.jsx)(`thead`,{children:(0,j.jsxs)(`tr`,{style:{borderBottom:`2px solid #21262d`},children:[(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`12px`,color:`#e6edf3`},children:`Aspect`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`12px`,color:`#e6edf3`},children:`Middleware`}),(0,j.jsx)(`th`,{style:{textAlign:`left`,padding:`12px`,color:`#e6edf3`},children:`Plugins`})]})}),(0,j.jsx)(`tbody`,{children:[[`Purpose`,`Transform/validate input/output`,`Observe execution events`],[`Runs on`,`Every node (in chain)`,`Specific lifecycle events`],[`Can modify state`,`✓ Yes`,`✗ No (read-only)`],[`Order matters`,`✓ Yes (left-to-right)`,`✗ No order dependency`],[`Examples`,`Logging, auth, rate-limit`,`Metrics, tracing, alerts`]].map((e,t)=>(0,j.jsxs)(`tr`,{style:{borderBottom:`1px solid #21262d`},children:[(0,j.jsx)(`td`,{style:{padding:`12px`,fontWeight:500},children:e[0]}),(0,j.jsx)(`td`,{style:{padding:`12px`},children:e[1]}),(0,j.jsx)(`td`,{style:{padding:`12px`},children:e[2]})]},t))})]})}),(0,j.jsxs)(Ha,{type:`tip`,title:`Quick Decision`,children:[(0,j.jsx)(`strong`,{children:`Use Middleware if:`}),` You need to intercept/transform state before/after nodes`,(0,j.jsx)(`br`,{}),(0,j.jsx)(`br`,{}),(0,j.jsx)(`strong`,{children:`Use Plugins if:`}),` You need to observe what's happening without changing state`]})]}),(0,j.jsxs)(`section`,{id:`api-structure`,style:{marginBottom:52},children:[(0,j.jsx)(`h2`,{style:$a,children:`Middleware Structure`}),(0,j.jsx)(N,{python:`from flowgentra_ai.middleware import Middleware

class MyMiddleware(Middleware):
    """Base middleware class."""
    
    async def before_node(self, node_name: str, state: dict) -> dict:
        """
        Called before node execution.
        
        Args:
            node_name: Name of node about to run
            state: Current state dict
            
        Returns:
            Modified state (can be transformed)
            
        Raises:
            StopExecution: To halt execution
        """
        return state  # Return modified or original state
    
    async def after_node(self, node_name: str, state: dict, output: dict) -> dict:
        """
        Called after node executes successfully.
        
        Args:
            node_name: Node that just ran
            state: State before node
            output: State after node
            
        Returns:
            Modified output state
        """
        return output
    
    async def on_error(self, node_name: str, error: Exception, state: dict):
        """
        Called if node raises exception.
        
        Args:
            node_name: Node that errored
            error: The exception raised
            state: State at error time
            
        Raises:
            exception: Re-raise to continue error
        """
        raise  # Re-raise to propagate error

# Register middleware:
graph = builder.compile(middleware=[MyMiddleware()])`})]}),(0,j.jsxs)(`section`,{id:`logging`,style:{marginBottom:52},children:[(0,j.jsx)(`h2`,{style:$a,children:`Example: Structured Logging Middleware`}),(0,j.jsx)(N,{python:`import logging
import json
from datetime import datetime
from flowgentra_ai.middleware import Middleware

class LoggingMiddleware(Middleware):
    """Logs all state transitions with structured format."""
    
    def __init__(self, logger_name='flowgentra'):
        self.logger = logging.getLogger(logger_name)
    
    async def before_node(self, node_name: str, state: dict) -> dict:
        # Log what keys are available
        log_entry = {
            'event': 'node_start',
            'timestamp': datetime.now().isoformat(),
            'node': node_name,
            'state_keys': list(state.keys()),
            'state_size': len(json.dumps(state)),
        }
        self.logger.info(json.dumps(log_entry))
        return state
    
    async def after_node(self, node_name: str, state: dict, output: dict) -> dict:
        # Log what changed
        changed_keys = {
            k: output.get(k) for k in output.keys()
            if output.get(k) != state.get(k)
        }
        log_entry = {
            'event': 'node_end',
            'timestamp': datetime.now().isoformat(),
            'node': node_name,
            'changed_keys': list(changed_keys.keys()),
        }
        self.logger.info(json.dumps(log_entry))
        return output
    
    async def on_error(self, node_name: str, error: Exception, state: dict):
        log_entry = {
            'event': 'node_error',
            'timestamp': datetime.now().isoformat(),
            'node': node_name,
            'error_type': type(error).__name__,
            'error_message': str(error),
        }
        self.logger.error(json.dumps(log_entry))
        raise

# Usage:
graph = builder.compile(middleware=[LoggingMiddleware()])`})]}),(0,j.jsxs)(`section`,{id:`rate-limit`,style:{marginBottom:52},children:[(0,j.jsx)(`h2`,{style:$a,children:`Example: Rate Limiting Middleware`}),(0,j.jsx)(N,{python:`from flowgentra_ai.middleware import Middleware
from collections import defaultdict
from datetime import datetime, timedelta
import time

class RateLimitMiddleware(Middleware):
    """Enforces rate limits per node."""
    
    def __init__(self, calls_per_minute: int = 60):
        self.limit = calls_per_minute
        self.calls = defaultdict(list)  # node_name -> list of timestamps
    
    async def before_node(self, node_name: str, state: dict) -> dict:
        now = datetime.now()
        minute_ago = now - timedelta(minutes=1)
        
        # Remove old calls outside the window
        self.calls[node_name] = [
            ts for ts in self.calls[node_name]
            if ts > minute_ago
        ]
        
        # Check rate limit
        if len(self.calls[node_name]) >= self.limit:
            raise RateLimitError(
                f"Rate limit exceeded for {node_name}: "
                f"{self.limit} calls per minute"
            )
        
        # Record this call
        self.calls[node_name].append(now)
        return state
    
    async def after_node(self, node_name: str, state: dict, output: dict) -> dict:
        return output

class RateLimitError(Exception):
    pass

# Usage:
graph = builder.compile(middleware=[
    RateLimitMiddleware(calls_per_minute=100)
])`})]}),(0,j.jsxs)(`section`,{id:`error-handling`,style:{marginBottom:52},children:[(0,j.jsx)(`h2`,{style:$a,children:`Example: Error Handling Middleware`}),(0,j.jsx)(N,{python:`from flowgentra_ai.middleware import Middleware
import asyncio

class ErrorHandlingMiddleware(Middleware):
    """Catches errors, retries, then falls back if needed."""
    
    def __init__(self, max_retries: int = 3, backoff_seconds: float = 1.0):
        self.max_retries = max_retries
        self.backoff = backoff_seconds
    
    async def on_error(self, node_name: str, error: Exception, state: dict):
        # Don't retry validation errors
        if isinstance(error, ValueError):
            raise
        
        # For transient errors, could implement retry logic
        # For now just log and re-raise
        print(f"Caught error in {node_name}: {error}")
        
        # Add error to state for downstream handling
        if isinstance(state, dict):
            state['_last_error'] = {
                'node': node_name,
                'error': str(error),
                'error_type': type(error).__name__,
            }
        
        # Re-raise to propagate
        raise

# Usage:
graph = builder.compile(middleware=[
    ErrorHandlingMiddleware(max_retries=3)
])`})]}),(0,j.jsxs)(`section`,{id:`auth`,style:{marginBottom:52},children:[(0,j.jsx)(`h2`,{style:$a,children:`Example: Authentication Middleware`}),(0,j.jsx)(N,{python:`from flowgentra_ai.middleware import Middleware

class AuthMiddleware(Middleware):
    """Validates auth token before sensitive nodes."""
    
    def __init__(self, sensitive_nodes: list = None):
        self.sensitive_nodes = sensitive_nodes or [
            'delete_data', 'access_private_info', 'submit_payment'
        ]
    
    async def before_node(self, node_name: str, state: dict) -> dict:
        # Check if this is a sensitive node
        if node_name not in self.sensitive_nodes:
            return state
        
        # Verify there's an auth token
        auth_token = state.get('_auth_token')
        if not auth_token:
            raise AuthError(f"No auth token for sensitive node: {node_name}")
        
        # Verify token is valid (simplified - use real auth in production)
        if not self._verify_token(auth_token):
            raise AuthError(f"Invalid auth token")
        
        # Add verified user info to state
        state['_user'] = self._get_user_from_token(auth_token)
        return state
    
    def _verify_token(self, token: str) -> bool:
        # TODO: Implement real token verification
        return len(token) > 10
    
    def _get_user_from_token(self, token: str) -> dict:
        # TODO: Implement real token decoding
        return {'id': 'user123', 'role': 'admin'}

class AuthError(Exception):
    pass

# Usage:
graph = builder.compile(middleware=[
    AuthMiddleware(sensitive_nodes=['pay', 'delete'])
])`})]}),(0,j.jsxs)(`section`,{id:`composition`,style:{marginBottom:52},children:[(0,j.jsx)(`h2`,{style:$a,children:`Composing Middleware Chains`}),(0,j.jsxs)(Ha,{type:`info`,title:`Middleware Execution Order`,children:[`Middleware runs left-to-right on `,(0,j.jsx)(`code`,{style:no,children:`before_node`}),`, and right-to-left on `,(0,j.jsx)(`code`,{style:no,children:`after_node`}),` (like onion layers).`]}),(0,j.jsx)(N,{python:`# Middleware runs in this order:
# 1. AuthMiddleware.before_node
# 2. RateLimitMiddleware.before_node
# 3. ValidationMiddleware.before_node
# ... NODE EXECUTES ...
# 4. ValidationMiddleware.after_node
# 5. RateLimitMiddleware.after_node
# 6. AuthMiddleware.after_node

graph = builder.compile(middleware=[
    AuthMiddleware(sensitive_nodes=['pay', 'delete']),
    RateLimitMiddleware(calls_per_minute=100),
    ValidationMiddleware(),
    LoggingMiddleware(),
])

# Common pattern: Auth → Rate Limit → Validate → Log
graph = builder.compile(middleware=[
    AuthMiddleware(),
    RateLimitMiddleware(),
    ValidationMiddleware(),
    LoggingMiddleware(),
])`})]}),(0,j.jsxs)(`section`,{id:`best-practices`,style:{marginBottom:52},children:[(0,j.jsx)(`h2`,{style:$a,children:`Best Practices`}),(0,j.jsxs)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:16,marginBottom:12},children:[(0,j.jsx)(`div`,{style:{fontWeight:600,color:`#52b788`,marginBottom:8},children:`✓ DO`}),(0,j.jsxs)(`ul`,{style:to,children:[(0,j.jsx)(`li`,{children:`Keep middleware fast - they run on every node`}),(0,j.jsx)(`li`,{children:`Use async for I/O operations`}),(0,j.jsx)(`li`,{children:`Document what state keys you expect/modify`}),(0,j.jsx)(`li`,{children:`Handle missing keys gracefully`}),(0,j.jsx)(`li`,{children:`Order middleware thoughtfully (auth before rate-limit)`}),(0,j.jsx)(`li`,{children:`Use exceptions for control flow (auth failure, rate limit exceeded)`})]})]}),(0,j.jsxs)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:16},children:[(0,j.jsx)(`div`,{style:{fontWeight:600,color:`#e63946`,marginBottom:8},children:`✗ DON'T`}),(0,j.jsxs)(`ul`,{style:to,children:[(0,j.jsx)(`li`,{children:`Block on I/O (use async instead)`}),(0,j.jsx)(`li`,{children:`Store unlimited data in middleware instance`}),(0,j.jsx)(`li`,{children:`Assume state keys exist without checking`}),(0,j.jsx)(`li`,{children:`Catch all exceptions and hide them`}),(0,j.jsx)(`li`,{children:`Modify state in deeply nested ways`}),(0,j.jsx)(`li`,{children:`Use middleware for business logic (use nodes instead)`})]})]})]}),(0,j.jsxs)(`section`,{id:`next`,style:{borderTop:`1px solid #21262d`,paddingTop:40,marginTop:60},children:[(0,j.jsx)(`h2`,{style:$a,children:`Next Steps`}),(0,j.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(200px, 1fr))`,gap:12},children:[{href:`/docs/plugins`,label:`🔌 Plugins System`,desc:`Observable hooks`},{href:`/docs/error-handling`,label:`⚠️ Error Handling`,desc:`Retry & recovery`},{href:`/docs/validation`,label:`✓ Validation`,desc:`Input validation`}].map((e,t)=>(0,j.jsxs)(`a`,{href:e.href,style:{display:`block`,background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:16,textDecoration:`none`,transition:`border-color 0.2s`},onMouseEnter:e=>e.currentTarget.style.borderColor=`#3a86ff`,onMouseLeave:e=>e.currentTarget.style.borderColor=`#21262d`,children:[(0,j.jsx)(`div`,{style:{fontWeight:600,color:`#3a86ff`,marginBottom:4},children:e.label}),(0,j.jsx)(`div`,{style:{fontSize:`0.875rem`,color:`#8b949e`},children:e.desc})]},t))})]})]})}var $a={fontSize:`1.375rem`,fontWeight:600,color:`#e6edf3`,marginBottom:16,marginTop:0},eo={color:`#8b949e`,lineHeight:1.75,marginBottom:16},to={color:`#8b949e`,lineHeight:1.8,paddingLeft:20,margin:0},no={background:`#0d1117`,border:`1px solid #21262d`,borderRadius:4,padding:`2px 6px`,fontFamily:`JetBrains Mono, monospace`,fontSize:`0.85em`},ro=[{id:`overview`,label:`Overview`},{id:`types`,label:`Validation Types`},{id:`schema`,label:`Schema Validation`},{id:`custom`,label:`Custom Validators`},{id:`examples`,label:`Practical Examples`},{id:`best-practices`,label:`Best Practices`},{id:`next`,label:`Next Steps`}];function io(){return(0,j.jsxs)(P,{anchors:ro,children:[(0,j.jsx)(`h1`,{style:{fontSize:`2rem`,fontWeight:700,color:`#e6edf3`,marginBottom:8,marginTop:0},children:`Input Validation`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:32,lineHeight:1.7,fontSize:`1.0625rem`},children:`Ensure data quality and type safety. Validate state before and after node execution.`}),(0,j.jsxs)(`section`,{id:`overview`,style:{marginBottom:52},children:[(0,j.jsx)(`h2`,{style:ao,children:`Overview`}),(0,j.jsx)(`p`,{style:oo,children:`Validation ensures that data flowing through your graph meets expected standards. Flowgentra supports:`}),(0,j.jsxs)(`ul`,{style:so,children:[(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{children:`Type validation:`}),` Ensure fields match expected types`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{children:`Schema validation:`}),` Validate structure with Pydantic, JSON Schema`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{children:`Constraint validation:`}),` Check ranges, lengths, patterns`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{children:`Custom validators:`}),` Domain-specific validation logic`]})]})]}),(0,j.jsxs)(`section`,{id:`types`,style:{marginBottom:52},children:[(0,j.jsx)(`h2`,{style:ao,children:`Types of Validation`}),(0,j.jsxs)(`div`,{style:{marginTop:20},children:[(0,j.jsxs)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:16,marginBottom:16},children:[(0,j.jsx)(`div`,{style:{fontWeight:600,color:`#58a6ff`,marginBottom:8},children:`1. Type Validation (Built-in)`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,margin:0,marginBottom:12},children:`Python provides type hints, mypy for static checking:`}),(0,j.jsx)(N,{python:`from typing import TypedDict

class AgentState(TypedDict):
    user_id: int          # Must be int
    query: str            # Must be str
    confidence: float     # Must be float
    tags: list[str]       # Must be list of strings
    
    # Uses type hints for mypy and IDE autocomplete
`})]}),(0,j.jsxs)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:16,marginBottom:16},children:[(0,j.jsx)(`div`,{style:{fontWeight:600,color:`#58a6ff`,marginBottom:8},children:`2. Schema Validation (Pydantic)`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,margin:0,marginBottom:12},children:`Use Pydantic for runtime validation with constraints:`}),(0,j.jsx)(N,{python:`from pydantic import BaseModel, Field, validator

class UserMessage(BaseModel):
    user_id: int = Field(..., gt=0)  # Must be positive
    content: str = Field(..., min_length=1, max_length=1000)
    priority: str = Field('normal', regex='^(low|normal|high)$')
    
    @validator('content')
    def content_no_spam(cls, v):
        if 'viagra' in v.lower():
            raise ValueError('Spam detected')
        return v
    
# Validates at runtime:
msg = UserMessage(user_id=123, content="Hello!")  # ✓ OK
msg = UserMessage(user_id=-1, content="X")  # ✗ Raises ValidationError
`})]}),(0,j.jsxs)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:16},children:[(0,j.jsx)(`div`,{style:{fontWeight:600,color:`#58a6ff`,marginBottom:8},children:`3. Constraint Validation`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,margin:0,marginBottom:12},children:`Validate ranges, patterns, and relationships:`}),(0,j.jsx)(N,{python:`class SearchRequest(BaseModel):
    query: str = Field(..., min_length=2, max_length=100)
    page: int = Field(1, ge=1, le=1000)  # 1 to 1000
    limit: int = Field(10, ge=1, le=100)  # 1 to 100
    sort_by: str = Field('relevance', pattern='^(relevance|date|rating)$')
`})]})]})]}),(0,j.jsxs)(`section`,{id:`schema`,style:{marginBottom:52},children:[(0,j.jsx)(`h2`,{style:ao,children:`Schema Validation with Pydantic`}),(0,j.jsx)(N,{python:`from pydantic import BaseModel, Field, validator, model_validator
from typing import Optional

class SearchState(BaseModel):
    query: str = Field(..., min_length=1, max_length=500, description="Search query")
    filters: dict = Field(default_factory=dict)
    page: int = Field(1, ge=1)
    results: Optional[list] = None
    error: Optional[str] = None
    
    @validator('page')
    def valid_page(cls, v):
        if v < 1:
            raise ValueError('page must be >= 1')
        return v
    
    @model_validator(mode='after')
    def validate_state_consistency(self):
        # Can't have both results and error
        if self.results and self.error:
            raise ValueError('Cannot have both results and error')
        return self

# Use in graph:
from flowgentra_ai.graph import StateGraph, END

def search_node(state: SearchState) -> SearchState:
    # State is already validated
    results = do_search(state.query)
    return SearchState(
        query=state.query,
        filters=state.filters,
        page=state.page,
        results=results,
    )

# Create graph with Pydantic state:
builder = StateGraph(SearchState)
builder.add_node("search", search_node)
builder.set_entry_point("search")
builder.add_edge("search", END)
graph = builder.compile()

# Invoke with validation:
try:
    result = graph.invoke(SearchState(query="python", page=1))
except Exception as e:
    print(f"Validation error: {e}")
`})]}),(0,j.jsxs)(`section`,{id:`custom`,style:{marginBottom:52},children:[(0,j.jsx)(`h2`,{style:ao,children:`Custom Validators`}),(0,j.jsx)(N,{python:`from pydantic import BaseModel, field_validator
import re

class PaymentState(BaseModel):
    amount: float
    currency: str
    card_number: str
    
    @field_validator('amount')
    @classmethod
    def amount_positive(cls, v):
        if v <= 0:
            raise ValueError('Amount must be positive')
        if v > 1_000_000:
            raise ValueError('Amount exceeds limit')
        return round(v, 2)
    
    @field_validator('currency')
    @classmethod
    def valid_currency(cls, v):
        valid = ['USD', 'EUR', 'GBP', 'JPY']
        if v not in valid:
            raise ValueError(f'Currency must be one of {valid}')
        return v
    
    @field_validator('card_number')
    @classmethod
    def valid_card(cls, v):
        # Simple Luhn check
        digits = [int(d) for d in v if d.isdigit()]
        if len(digits) not in [15, 16]:
            raise ValueError('Card number must be 15-16 digits')
        return v

# Usage:
try:
    payment = PaymentState(
        amount=-100,  # ✗ Raises ValueError
        currency='USD',
        card_number='4532015112830366'
    )
except ValueError as e:
    print(f"Invalid payment: {e}")
`})]}),(0,j.jsxs)(`section`,{id:`examples`,style:{marginBottom:52},children:[(0,j.jsx)(`h2`,{style:ao,children:`Practical Examples`}),(0,j.jsxs)(`div`,{style:{marginTop:20},children:[(0,j.jsxs)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:16,marginBottom:16},children:[(0,j.jsx)(`div`,{style:{fontWeight:600,color:`#58a6ff`,marginBottom:12},children:`Example 1: Email Validation`}),(0,j.jsx)(N,{python:`from pydantic import BaseModel, EmailStr, Field

class UserSignup(BaseModel):
    email: EmailStr  # Built-in email validator
    username: str = Field(..., min_length=3, max_length=20, regex='^[a-z0-9_]+$')
    password: str = Field(..., min_length=8)
    
    @field_validator('password')
    @classmethod
    def strong_password(cls, v):
        # Must have: uppercase, lowercase, digit, special char
        if not any(c.isupper() for c in v):
            raise ValueError('Password needs uppercase')
        if not any(c.islower() for c in v):
            raise ValueError('Password needs lowercase')
        if not any(c.isdigit() for c in v):
            raise ValueError('Password needs digit')
        return v
`})]}),(0,j.jsxs)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:16,marginBottom:16},children:[(0,j.jsx)(`div`,{style:{fontWeight:600,color:`#58a6ff`,marginBottom:12},children:`Example 2: API Request Validation`}),(0,j.jsx)(N,{python:`from pydantic import BaseModel, HttpUrl, Field
from enum import Enum

class HTTPMethod(str, Enum):
    GET = "GET"
    POST = "POST"
    PUT = "PUT"
    DELETE = "DELETE"

class APIRequest(BaseModel):
    method: HTTPMethod
    url: HttpUrl  # Built-in URL validator
    headers: dict = Field(default_factory=dict)
    body: str = Field(default="", max_length=104857600)  # 100MB limit
    timeout: int = Field(30, ge=1, le=300)
    
    @field_validator('headers')
    @classmethod
    def valid_headers(cls, v):
        # Basic header validation
        for key in v.keys():
            if not all(c.isprintable() for c in key):
                raise ValueError(f'Invalid header name: {key}')
        return v
`})]}),(0,j.jsxs)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:16},children:[(0,j.jsx)(`div`,{style:{fontWeight:600,color:`#58a6ff`,marginBottom:12},children:`Example 3: Document Metadata`}),(0,j.jsx)(N,{python:`from pydantic import BaseModel, Field
from datetime import datetime
from typing import Optional

class Document(BaseModel):
    title: str = Field(..., min_length=1, max_length=500)
    content: str = Field(..., min_length=10)
    author: str
    created_at: datetime = Field(default_factory=datetime.now)
    updated_at: Optional[datetime] = None
    tags: list[str] = Field(default_factory=list, max_length=10)
    status: str = Field('draft', regex='^(draft|published|archived)$')
    version: int = Field(1, ge=1)
    
    @field_validator('tags')
    @classmethod
    def tag_length(cls, v):
        for tag in v:
            if len(tag) < 2 or len(tag) > 20:
                raise ValueError('Tags must be 2-20 chars')
        return v
`})]})]})]}),(0,j.jsxs)(`section`,{id:`best-practices`,style:{marginBottom:52},children:[(0,j.jsx)(`h2`,{style:ao,children:`Best Practices`}),(0,j.jsxs)(Ha,{type:`tip`,title:`Validation Strategy`,children:[(0,j.jsx)(`strong`,{children:`Validate early, validate often:`}),` Validate at graph entry, between nodes, and at critical boundaries.`]}),(0,j.jsxs)(`div`,{style:{marginTop:20,background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:16},children:[(0,j.jsx)(`div`,{style:{fontWeight:600,color:`#52b788`,marginBottom:12},children:`✓ Good Pattern`}),(0,j.jsx)(N,{python:`# 1. Validate at entry
class InputState(BaseModel):
    query: str = Field(..., min_length=1)

# 2. Validate node output (if it can be invalid)
def my_node(state: InputState) -> InputState:
    processed = process_query(state.query)
    # State is already valid, just update
    return InputState(query=processed)

# 3. Pydantic automatic validation at runtime
graph = builder.compile()
result = graph.invoke(InputState(query="hello"))  # ✓ Valid
result = graph.invoke(InputState(query=""))  # ✗ Raises ValidationError
`})]})]}),(0,j.jsxs)(`section`,{id:`next`,style:{borderTop:`1px solid #21262d`,paddingTop:40,marginTop:60},children:[(0,j.jsx)(`h2`,{style:ao,children:`Next Steps`}),(0,j.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(200px, 1fr))`,gap:12},children:[{href:`/docs/middleware`,label:`🔄 Middleware`,desc:`State transformation`},{href:`/docs/error-handling`,label:`⚠️ Error Handling`,desc:`Exception strategies`},{href:`/docs/glossary`,label:`📚 Glossary`,desc:`Key terminology`}].map((e,t)=>(0,j.jsxs)(`a`,{href:e.href,style:{display:`block`,background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:16,textDecoration:`none`,transition:`border-color 0.2s`},onMouseEnter:e=>e.currentTarget.style.borderColor=`#3a86ff`,onMouseLeave:e=>e.currentTarget.style.borderColor=`#21262d`,children:[(0,j.jsx)(`div`,{style:{fontWeight:600,color:`#3a86ff`,marginBottom:4},children:e.label}),(0,j.jsx)(`div`,{style:{fontSize:`0.875rem`,color:`#8b949e`},children:e.desc})]},t))})]})]})}var ao={fontSize:`1.375rem`,fontWeight:600,color:`#e6edf3`,marginBottom:16,marginTop:0},oo={color:`#8b949e`,lineHeight:1.75,marginBottom:16},so={color:`#8b949e`,lineHeight:1.8,paddingLeft:20,margin:0},co=[{id:`overview`,label:`Overview`},{id:`profiling`,label:`Profiling & Measurement`},{id:`caching`,label:`Caching Strategies`},{id:`parallelization`,label:`Parallelization`},{id:`streaming`,label:`Streaming Output`},{id:`batch`,label:`Batch Processing`},{id:`llm-optimization`,label:`LLM Optimization`},{id:`benchmarks`,label:`Benchmarks & Metrics`},{id:`next`,label:`Next Steps`}];function lo(){return(0,j.jsxs)(P,{anchors:co,children:[(0,j.jsx)(`h1`,{style:{fontSize:`2rem`,fontWeight:700,color:`#e6edf3`,marginBottom:8,marginTop:0},children:`Performance Optimization`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:32,lineHeight:1.7,fontSize:`1.0625rem`},children:`Optimize Flowgentra workflows for speed, cost, and resource efficiency. Profile, measure, and optimize systematically.`}),(0,j.jsxs)(`section`,{id:`overview`,style:{marginBottom:52},children:[(0,j.jsx)(`h2`,{style:U,children:`Overview`}),(0,j.jsx)(`p`,{style:W,children:`Performance optimization follows a systematic approach:`}),(0,j.jsxs)(`ol`,{style:uo,children:[(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{children:`Measure:`}),` Profile your workflow to find bottlenecks`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{children:`Understand:`}),` Know where time/cost is spent`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{children:`Optimize:`}),` Reduce bottleneck duration`]}),(0,j.jsxs)(`li`,{children:[(0,j.jsx)(`strong`,{children:`Verify:`}),` Measure improvement, iterate`]})]})]}),(0,j.jsxs)(`section`,{id:`profiling`,style:{marginBottom:52},children:[(0,j.jsx)(`h2`,{style:U,children:`Profiling & Measurement`}),(0,j.jsxs)(Ha,{type:`tip`,title:`Golden Rule`,children:[(0,j.jsx)(`strong`,{children:`Never optimize without measuring first.`}),` Profiling tells you where time/cost actually goes vs where you think it does.`]}),(0,j.jsx)(N,{python:`import time
import json
from datetime import datetime

class PerformanceProfiler:
    def __init__(self):
        self.events = []
    
    def record(self, node_name, duration, status='success'):
        self.events.append({
            'node': node_name,
            'duration': duration,
            'status': status,
            'timestamp': datetime.now().isoformat(),
        })
    
    def summary(self):
        total = sum(e['duration'] for e in self.events)
        by_node = {}
        for e in self.events:
            node = e['node']
            by_node[node] = by_node.get(node, 0) + e['duration']
        
        print(f"\\nTotal time: {total:.3f}s")
        print(f"\\nTime by node:")
        for node, time in sorted(by_node.items(), key=lambda x: x[1], reverse=True):
            pct = (time / total) * 100 if total > 0 else 0
            print(f"  {node}: {time:.3f}s ({pct:.1f}%)")
    
    def to_json(self):
        return json.dumps(self.events, indent=2)

# Usage:
def timed_node(node_func, state, profiler, node_name):
    start = time.time()
    try:
        result = node_func(state)
        duration = time.time() - start
        profiler.record(node_name, duration, 'success')
        return result
    except Exception as e:
        duration = time.time() - start
        profiler.record(node_name, duration, 'error')
        raise

# Profile execution:
profiler = PerformanceProfiler()
for node_ref, node_name in workflow_nodes:
    state = timed_node(node_ref, state, profiler, node_name)

profiler.summary()
`})]}),(0,j.jsxs)(`section`,{id:`caching`,style:{marginBottom:52},children:[(0,j.jsx)(`h2`,{style:U,children:`Caching Strategies`}),(0,j.jsxs)(`div`,{style:{marginTop:20},children:[(0,j.jsxs)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:16,marginBottom:16},children:[(0,j.jsx)(`div`,{style:{fontWeight:600,color:`#58a6ff`,marginBottom:12},children:`1. Memoization (Function Caching)`}),(0,j.jsx)(N,{python:`from functools import lru_cache
import hashlib

@lru_cache(maxsize=1000)
def expensive_computation(query: str) -> str:
    """Expensive operation cached by query string."""
    # This result is cached - repeated queries instant
    return llm_call(query)

def search_node(state) -> dict:
    # First call: 3 seconds
    # Repeated calls: instant
    result = expensive_computation(state['query'])
    return {**state, 'result': result}

# Advanced: custom cache key
def cache_key(embeddings_model, text):
    # Hash model + text for cache key
    key = f"{embeddings_model}:{hashlib.md5(text.encode()).hexdigest()}"
    return key

cache = {}

def get_embeddings(text, model='openai'):
    key = cache_key(model, text)
    if key in cache:
        return cache[key]
    
    embeddings = llm_embeddings(text, model=model)
    cache[key] = embeddings
    return embeddings
`})]}),(0,j.jsxs)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:16},children:[(0,j.jsx)(`div`,{style:{fontWeight:600,color:`#58a6ff`,marginBottom:12},children:`2. State Checkpointing`}),(0,j.jsx)(N,{python:`# Checkpointing avoids re-running expensive nodes on failure
from flowgentra_ai.checkpoints import InMemoryCheckpointer, SqliteCheckpointer

# Use in-memory for dev (fast but not durable)
checkpointer = InMemoryCheckpointer()

# Use SQLite for production (durable)
checkpointer = SqliteCheckpointer(db_path="./checkpoints.db")

graph = builder.compile(checkpointer=checkpointer)

# Run with checkpointing - if it fails, resume from last checkpoint
try:
    result = graph.invoke(initial_state)
except Exception as e:
    print(f"Failed, but checkpoint saved")
    # Later: resume from checkpoint
    result = graph.invoke_with_thread("session-001")
`})]})]})]}),(0,j.jsxs)(`section`,{id:`parallelization`,style:{marginBottom:52},children:[(0,j.jsx)(`h2`,{style:U,children:`Parallelization`}),(0,j.jsx)(N,{python:`from flowgentra_ai.graph import StateGraph, END

class ParallelSearchState(dict):
    query: str
    web_results: list
    doc_results: list
    image_results: list

def web_search(state: ParallelSearchState) -> ParallelSearchState:
    """Search web - 2 seconds"""
    results = search_web(state['query'])
    return {**state, 'web_results': results}

def doc_search(state: ParallelSearchState) -> ParallelSearchState:
    """Search documents - 1.5 seconds"""
    results = search_documents(state['query'])
    return {**state, 'doc_results': results}

def image_search(state: ParallelSearchState) -> ParallelSearchState:
    """Search images - 1 second"""
    results = search_images(state['query'])
    return {**state, 'image_results': results}

def merge_results(state: ParallelSearchState) -> str:
    """Route to aggregation"""
    return "aggregate"

# Setup parallel execution:
builder = StateGraph(ParallelSearchState)
builder.add_node("web", web_search)
builder.add_node("docs", doc_search)
builder.add_node("images", image_search)
builder.add_node("aggregate", merge_results)

# Entry branches to 3 parallel nodes
builder.set_entry_point("web")  # This is wrong - need better API

# Better: specify parallel start
for node in ["web", "docs", "images"]:
    builder.add_edge("START", node)

# All converge to aggregate
for node in ["web", "docs", "images"]:
    builder.add_edge(node, "aggregate")

builder.add_edge("aggregate", END)
graph = builder.compile()

# Sequential: 2 + 1.5 + 1 = 4.5 seconds
# Parallel: max(2, 1.5, 1) = 2 seconds  (55% faster!)
result = graph.invoke({"query": "python", "web_results": [], "doc_results": [], "image_results": []})
`})]}),(0,j.jsxs)(`section`,{id:`streaming`,style:{marginBottom:52},children:[(0,j.jsx)(`h2`,{style:U,children:`Streaming for Responsiveness`}),(0,j.jsx)(Ha,{type:`info`,title:`Streaming Pattern`,children:`Instead of waiting for final result, stream incremental outputs. Improves perceived performance and user experience.`}),(0,j.jsx)(N,{python:`# Non-streaming: Wait for full result (slow UX)
result = graph.invoke(state)  # Blocks for 30 seconds
print(result)

# Streaming: Get results as they arrive (fast UX)
for event in graph.stream(state):
    print(f"Result chunk: {event}")
    # User sees incremental progress
    
# Streaming in real-world agent:
def stream_response(agent, query):
    for chunk in agent.stream({"query": query}):
        if 'output' in chunk:
            yield chunk['output']  # Send to user incrementally

# Frontend receives streaming response
async def handle_request():
    async for chunk in stream_response(agent, user_query):
        await websocket.send(chunk)
`})]}),(0,j.jsxs)(`section`,{id:`batch`,style:{marginBottom:52},children:[(0,j.jsx)(`h2`,{style:U,children:`Batch Processing`}),(0,j.jsx)(N,{python:`import asyncio
from concurrent.futures import ThreadPoolExecutor

# Batch multiple queries together
queries = [
    "What is Python?",
    "What is Rust?",
    "What is Go?",
    "What is JavaScript?"
]

# Sequential (slow): 4 × 2s = 8 seconds
results = []
for query in queries:
    result = graph.invoke({"query": query, "response": ""})
    results.append(result)

# Parallel with threads (fast): ~2 seconds
def process_query(query):
    return graph.invoke({"query": query, "response": ""})

with ThreadPoolExecutor(max_workers=4) as executor:
    results = list(executor.map(process_query, queries))

# Async version (best for many requests):
async def process_async(query):
    # If graph supports async
    return await graph.ainvoke({"query": query, "response": ""})

# Run many concurrently:
tasks = [process_async(q) for q in queries * 100]  # 400 queries
results = asyncio.run(asyncio.gather(*tasks))
`})]}),(0,j.jsxs)(`section`,{id:`llm-optimization`,style:{marginBottom:52},children:[(0,j.jsx)(`h2`,{style:U,children:`LLM Optimization`}),(0,j.jsxs)(`div`,{style:{marginTop:20},children:[(0,j.jsxs)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:16,marginBottom:16},children:[(0,j.jsx)(`div`,{style:{fontWeight:600,color:`#58a6ff`,marginBottom:12},children:`1. Use Faster Models`}),(0,j.jsx)(N,{python:`# Slow (but powerful): GPT-4 - 60s, \\$0.03 per call
config = LLMConfig(provider="openai", model="gpt-4")

# Fast (lighter): GPT-4o-mini - 5s, \\$0.00015 per call  
config = LLMConfig(provider="openai", model="gpt-4o-mini")

# Pattern: Use fast model first, escalate only if needed
def smart_routing(state):
    # Try fast model
    response = llm_fast.chat([Message.user(state['query'])])
    if response.confidence < 0.5:
        # Escalate to powerful model
        response = llm_powerful.chat([Message.user(state['query'])])
    return {**state, 'response': response.content}
`})]}),(0,j.jsxs)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:16,marginBottom:16},children:[(0,j.jsx)(`div`,{style:{fontWeight:600,color:`#58a6ff`,marginBottom:12},children:`2. Prompt Optimization`}),(0,j.jsx)(N,{python:`# Bad (verbose): Many tokens, slower
prompt = "Please analyze this text and tell me if it's positive or negative sentiment"

# Good (concise): Fewer tokens, faster
prompt = "Classify sentiment: positive/negative"

# Tips:
# - Remove superfluous words
# - Use examples only if needed
# - Structure for parsing (JSON, frontmatter)
# - Use constraints to limit output
`})]}),(0,j.jsxs)(`div`,{style:{background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:16},children:[(0,j.jsx)(`div`,{style:{fontWeight:600,color:`#58a6ff`,marginBottom:12},children:`3. Context Window Optimization`}),(0,j.jsx)(N,{python:`# Too much context: Expensive and slow
context = entire_document_store  # 100MB

# Optimized: Only relevant context
from flowgentra_ai.rag import VectorStore

vs = VectorStore()
vs.add_documents(documents)
relevant = vs.search(query, top_k=5)  # Only 5 docs, not 1000

# Use in RAG:
def rag_retrieve(state):
    docs = vs.search(state['query'], top_k=5)  # Not top_k=1000
    context = "\\n".join(d.content for d in docs)
    prompt = f"Use this context to answer: {state['query']}\\n{context}"
    response = llm.chat([Message.user(prompt)])
    return {**state, 'response': response.content}
`})]})]})]}),(0,j.jsxs)(`section`,{id:`benchmarks`,style:{marginBottom:52},children:[(0,j.jsx)(`h2`,{style:U,children:`Benchmarks & Cost Tracking`}),(0,j.jsx)(N,{python:`class CostTracker:
    """Track execution costs across LLM calls."""
    
    # Pricing per token (approximate)
    PRICES = {
        'gpt-4-turbo': {'input': 0.01/1000, 'output': 0.03/1000},
        'gpt-4o-mini': {'input': 0.00015/1000, 'output': 0.00060/1000},
        'claude-3-haiku': {'input': 0.00025/1000, 'output': 0.00125/1000},
    }
    
    def __init__(self):
        self.calls = []
    
    def record_call(self, model, input_tokens, output_tokens):
        cost = self._calculate_cost(model, input_tokens, output_tokens)
        self.calls.append({
            'model': model,
            'input_tokens': input_tokens,
            'output_tokens': output_tokens,
            'cost': cost,
        })
    
    def _calculate_cost(self, model, input_t, output_t):
        prices = self.PRICES.get(model, {'input': 0, 'output': 0})
        return (input_t * prices['input']) + (output_t*prices['output'])
    
    def total_cost(self):
        return sum(c['cost'] for c in self.calls)
    
    def estimate_batch_cost(self, batch_size):
        return self.total_cost() * batch_size

# Usage:
tracker = CostTracker()
for call in llm_calls:
    tracker.record_call("gpt-4o-mini", call['input_tokens'], call['output_tokens'])

# Display costs
cost = round(tracker.total_cost(), 4)
batch_cost = round(tracker.estimate_batch_cost(1000), 2)
print(f"Cost per call: \\${cost}")
print(f"Cost per 1000 calls: \\${batch_cost}")
`})]}),(0,j.jsxs)(`section`,{id:`next`,style:{borderTop:`1px solid #21262d`,paddingTop:40,marginTop:60},children:[(0,j.jsx)(`h2`,{style:U,children:`Next Steps`}),(0,j.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(200px, 1fr))`,gap:12},children:[{href:`/docs/observability`,label:`📊 Observability`,desc:`Tracing & metrics`},{href:`/docs/best-practices`,label:`✓ Best Practices`,desc:`Production patterns`},{href:`/docs/error-handling`,label:`⚠️ Error Handling`,desc:`Recovery strategies`}].map((e,t)=>(0,j.jsxs)(`a`,{href:e.href,style:{display:`block`,background:`#0d1117`,border:`1px solid #21262d`,borderRadius:8,padding:16,textDecoration:`none`,transition:`border-color 0.2s`},onMouseEnter:e=>e.currentTarget.style.borderColor=`#3a86ff`,onMouseLeave:e=>e.currentTarget.style.borderColor=`#21262d`,children:[(0,j.jsx)(`div`,{style:{fontWeight:600,color:`#3a86ff`,marginBottom:4},children:e.label}),(0,j.jsx)(`div`,{style:{fontSize:`0.875rem`,color:`#8b949e`},children:e.desc})]},t))})]})]})}var U={fontSize:`1.375rem`,fontWeight:600,color:`#e6edf3`,marginBottom:16,marginTop:0},W={color:`#8b949e`,lineHeight:1.75,marginBottom:16},uo={color:`#8b949e`,lineHeight:1.8,paddingLeft:20,margin:0},fo=[{id:`overview`,label:`What We're Building`},{id:`setup`,label:`Project Setup`},{id:`state`,label:`Step 1: Define State`},{id:`tools`,label:`Step 2: Define Tools`},{id:`nodes`,label:`Step 3: Write Nodes`},{id:`graph`,label:`Step 4: Build the Graph`},{id:`memory`,label:`Step 5: Add Memory`},{id:`observability`,label:`Step 6: Add Observability`},{id:`error-handling`,label:`Step 7: Error Handling`},{id:`run`,label:`Step 8: Run It`},{id:`yaml`,label:`Production: YAML Config`},{id:`next`,label:`What's Next`}];function po(){return(0,j.jsxs)(P,{anchors:fo,children:[(0,j.jsxs)(`div`,{style:{marginBottom:10},children:[(0,j.jsx)(`span`,{style:So,children:`End-to-End Tutorial`}),(0,j.jsx)(`span`,{style:{...So,marginLeft:8,background:`rgba(63,185,80,0.1)`,border:`1px solid rgba(63,185,80,0.4)`,color:`#3fb950`},children:`~30 min`})]}),(0,j.jsx)(`h1`,{style:go,children:`Build a Research Assistant`}),(0,j.jsx)(`p`,{style:_o,children:`Build a production-grade AI research assistant from scratch — step by step. By the end you'll have a multi-turn agent that searches the web, synthesizes findings, remembers previous conversations, handles errors gracefully, and emits structured traces.`}),(0,j.jsxs)(`div`,{style:wo,children:[(0,j.jsx)(`div`,{style:To,children:`Architecture`}),(0,j.jsx)(`pre`,{style:Eo,children:`
  ┌─────────┐     ┌──────────┐     ┌──────────────┐     ┌──────────┐
  │  User   │────▶│ classify │────▶│ web_research  │────▶│ synthesize│
  │  input  │     │  intent  │  ┌──│  (tool call) │     │  answer  │
  └─────────┘     └──────────┘  │  └──────────────┘     └──────────┘
                       │        │         ↑ retry on failure
                       │ simple │         │
                       ▼        └─────────┘
                  ┌──────────┐
                  │  direct  │
                  │  answer  │
                  └──────────┘
        `}),(0,j.jsx)(`div`,{style:{color:`#8b949e`,fontSize:`0.8rem`,marginTop:8},children:`Intent classification → conditional routing → tool-using research node → synthesis → memory persistence`})]}),(0,j.jsxs)(mo,{id:`overview`,title:`What We're Building`,children:[(0,j.jsx)(`p`,{style:vo,children:`The finished agent will:`}),(0,j.jsxs)(`ul`,{style:yo,children:[(0,j.jsx)(`li`,{children:`Accept natural-language questions from users`}),(0,j.jsx)(`li`,{children:`Classify intent and route simple questions directly, complex ones through web research`}),(0,j.jsx)(`li`,{children:`Call a web search tool and process results with retry logic`}),(0,j.jsx)(`li`,{children:`Synthesize a clear, cited answer`}),(0,j.jsx)(`li`,{children:`Persist conversation memory across multi-turn sessions`}),(0,j.jsx)(`li`,{children:`Emit per-node execution traces you can visualize`}),(0,j.jsx)(`li`,{children:`Be configurable via YAML without changing Python code`})]}),(0,j.jsxs)(ho,{type:`info`,children:[`All code is real and runnable. You need an`,` `,(0,j.jsx)(`code`,{style:xo,children:`OPENAI_API_KEY`}),` and optionally a`,` `,(0,j.jsx)(`code`,{style:xo,children:`TAVILY_API_KEY`}),` (free tier) for web search. The examples fall back gracefully if search isn't available.`]})]}),(0,j.jsxs)(mo,{id:`setup`,title:`Project Setup`,children:[(0,j.jsx)(`p`,{style:vo,children:`Create a virtual environment and install Flowgentra:`}),(0,j.jsx)(N,{forceLang:`bash`,rust:`python -m venv .venv
source .venv/bin/activate       # Windows: .venv\\Scripts\\activate
pip install "flowgentra-ai[openai,tracing]"

# Optional: Tavily web search (free tier at tavily.com)
pip install tavily-python

# Verify
python -c "import flowgentra_ai; print(flowgentra_ai.__version__)"
# 0.2.1`}),(0,j.jsx)(`p`,{style:vo,children:`Project layout we'll build toward:`}),(0,j.jsx)(N,{forceLang:`bash`,rust:`research-assistant/
├── agent.yaml          # production config (Step 9)
├── handlers.py         # @register_handler functions
├── tools.py            # tool definitions & implementations
├── main.py             # entry point
├── checkpoints/        # auto-created for memory
└── traces/             # auto-created for observability`})]}),(0,j.jsxs)(mo,{id:`state`,title:`Step 1: Define State`,children:[(0,j.jsxs)(`p`,{style:vo,children:[`Every Flowgentra graph revolves around a `,(0,j.jsx)(`strong`,{style:bo,children:`typed state`}),` — a dictionary that flows through every node. Nodes read from it, write partial updates back, and Flowgentra merges them.`]}),(0,j.jsxs)(`p`,{style:vo,children:[`Use `,(0,j.jsx)(`code`,{style:xo,children:`Annotated[List[...], operator.add]`}),` for fields that should accumulate across nodes rather than overwrite.`]}),(0,j.jsx)(N,{python:`# state.py
from typing import TypedDict, List, Optional, Annotated
import operator

class ResearchState(TypedDict):
    # Input
    question:       str                              # user's question (never changes)
    session_id:     str                              # for multi-turn memory

    # Classification
    intent:         str                              # "research" | "simple" | "clarify"
    complexity:     int                              # 1–5 estimated complexity

    # Research phase
    search_queries: List[str]                        # generated search queries
    search_results: Annotated[List[dict], operator.add]  # accumulated from tool calls
    sources:        Annotated[List[str], operator.add]   # cited URLs

    # Output
    answer:         str                              # final answer
    confidence:     float                            # 0.0–1.0 confidence score

    # Control
    error:          Optional[str]                    # set if a node fails
    retries:        int                              # retry counter`,rust:`// state.rs  (the Rust equivalent)
use flowgentra_ai::prelude::*;

#[derive(State, Clone, Debug, Default, Serialize, Deserialize)]
pub struct ResearchState {
    pub question:       String,
    pub session_id:     String,
    pub intent:         String,
    pub complexity:     u32,

    pub search_queries: Vec<String>,
    #[reducer(Append)]
    pub search_results: Vec<serde_json::Value>,
    #[reducer(Append)]
    pub sources:        Vec<String>,

    pub answer:         String,
    pub confidence:     f32,
    pub error:          Option<String>,
    pub retries:        u32,
}`}),(0,j.jsxs)(ho,{type:`tip`,children:[`The `,(0,j.jsx)(`code`,{style:xo,children:`Annotated[List, operator.add]`}),` reducer means if two nodes both write to `,(0,j.jsx)(`code`,{style:xo,children:`search_results`}),`, the lists are concatenated — not one overwriting the other. This is essential for parallel node execution.`]})]}),(0,j.jsxs)(mo,{id:`tools`,title:`Step 2: Define Tools`,children:[(0,j.jsx)(`p`,{style:vo,children:`Tools are functions the LLM can call during reasoning. We define them with a schema (so the LLM knows what arguments to provide) and an implementation.`}),(0,j.jsx)(N,{python:`# tools.py
import os
import json
from flowgentra_ai.llm import ToolDefinition
from flowgentra_ai.tools import ToolRegistry

# ── Tool schemas (what the LLM sees) ──────────────────────────────────────────

WEB_SEARCH_SCHEMA = ToolDefinition(
    name="web_search",
    description=(
        "Search the web for current information on a topic. "
        "Returns a list of results with title, snippet, and URL. "
        "Use when the question requires up-to-date or specific factual information."
    ),
    parameters={
        "type": "object",
        "properties": {
            "query": {
                "type": "string",
                "description": "The search query. Be specific and include key terms.",
            },
            "max_results": {
                "type": "integer",
                "description": "Maximum number of results (1–10). Default: 5.",
                "default": 5,
            },
        },
        "required": ["query"],
    },
)

SUMMARIZE_SCHEMA = ToolDefinition(
    name="summarize_sources",
    description="Summarize and synthesize multiple source snippets into a coherent answer.",
    parameters={
        "type": "object",
        "properties": {
            "sources": {
                "type": "array",
                "items": {"type": "string"},
                "description": "List of source snippets to synthesize.",
            },
            "question": {
                "type": "string",
                "description": "The original question to answer.",
            },
        },
        "required": ["sources", "question"],
    },
)

# ── Tool implementations ───────────────────────────────────────────────────────

def web_search(query: str, max_results: int = 5) -> list[dict]:
    """Call Tavily search API. Falls back to mock results if not configured."""
    api_key = os.getenv("TAVILY_API_KEY")
    if not api_key:
        # Mock results for local development / testing
        return [
            {
                "title": f"Mock result for: {query}",
                "content": f"This is a mock search result for the query '{query}'. "
                           "In production, this would be real web content from Tavily.",
                "url": f"https://example.com/search?q={query.replace(' ', '+')}",
                "score": 0.85,
            }
        ]

    from tavily import TavilyClient
    client = TavilyClient(api_key=api_key)
    response = client.search(query=query, max_results=max_results)
    return [
        {
            "title":   r.get("title", ""),
            "content": r.get("content", ""),
            "url":     r.get("url", ""),
            "score":   r.get("score", 0.0),
        }
        for r in response.get("results", [])
    ]


# Register tools so the graph can call them by name
registry = ToolRegistry()
registry.register("web_search",       web_search)
registry.register("summarize_sources", lambda sources, question: " ".join(sources))`,rust:`// tools.rs
use flowgentra_ai::prelude::*;
use serde_json::json;

pub fn web_search_schema() -> ToolDefinition {
    ToolDefinition::new(
        "web_search",
        "Search the web for current information on a topic.",
        json!({
            "type": "object",
            "properties": {
                "query": {
                    "type": "string",
                    "description": "The search query."
                },
                "max_results": {
                    "type": "integer",
                    "description": "Maximum results (1–10).",
                    "default": 5
                }
            },
            "required": ["query"]
        }),
    )
}

pub async fn web_search(query: &str, max_results: usize) -> Vec<serde_json::Value> {
    // In production: call Tavily or DuckDuckGo
    vec![json!({
        "title": format!("Result for: {query}"),
        "content": format!("Mock content for {query}"),
        "url": "https://example.com",
        "score": 0.85
    })]
}`})]}),(0,j.jsxs)(mo,{id:`nodes`,title:`Step 3: Write Nodes`,children:[(0,j.jsx)(`p`,{style:vo,children:`Each node is a plain function: receives the full state dict, returns a partial update (only the fields it changed). Flowgentra merges updates automatically.`}),(0,j.jsx)(N,{python:`# nodes.py
import json
from flowgentra_ai.llm import LLM, Message
from tools import web_search, WEB_SEARCH_SCHEMA

# Shared LLM instance — reused across all nodes
llm = LLM(provider="openai", model="gpt-4o-mini", temperature=0.3)

# ─────────────────────────────────────────────────────────────────────────────
# Node 1: classify_intent
# Decides how to handle the question: research / simple / clarify
# ─────────────────────────────────────────────────────────────────────────────

def classify_intent(state: dict) -> dict:
    response = llm.chat([
        Message.system(
            "Classify the user's question. "
            "Reply with a JSON object containing:\\n"
            "  intent: 'research' | 'simple' | 'clarify'\\n"
            "  complexity: 1–5 (1=trivial, 5=requires deep research)\\n"
            "  reason: one-sentence explanation\\n"
            "\\n"
            "'research' = needs current/external information or multi-step reasoning\\n"
            "'simple' = answerable from general knowledge in one step\\n"
            "'clarify' = question is ambiguous, need to ask for more context"
        ),
        Message.user(state["question"]),
    ])

    try:
        # Extract the JSON object from the response (handles plain JSON and wrapped responses)
        text = response.content.strip()
        start, end = text.find("{"), text.rfind("}")
        parsed = json.loads(text[start:end+1] if start != -1 else text)
    except (json.JSONDecodeError, ValueError):
        parsed = {"intent": "research", "complexity": 3, "reason": "parse error fallback"}

    return {
        "intent":     parsed.get("intent", "research"),
        "complexity": int(parsed.get("complexity", 3)),
    }


# ─────────────────────────────────────────────────────────────────────────────
# Node 2: direct_answer
# For "simple" intent — answer from general knowledge, no search needed
# ─────────────────────────────────────────────────────────────────────────────

def direct_answer(state: dict) -> dict:
    response = llm.chat([
        Message.system(
            "You are a knowledgeable assistant. "
            "Answer the question clearly and concisely from your training knowledge. "
            "If you're not confident, say so."
        ),
        Message.user(state["question"]),
    ])
    return {
        "answer":     response.content,
        "confidence": 0.85,
        "sources":    [],
    }


# ─────────────────────────────────────────────────────────────────────────────
# Node 3: plan_research
# Decomposes the question into focused search queries
# ─────────────────────────────────────────────────────────────────────────────

def plan_research(state: dict) -> dict:
    response = llm.chat([
        Message.system(
            "You are a research planner. Given a complex question, generate 2–4 focused "
            "web search queries that together will gather enough information to answer it. "
            "Reply with a JSON array of query strings only. No explanation."
        ),
        Message.user(state["question"]),
    ])

    try:
        text = response.content.strip()
        start, end = text.find("["), text.rfind("]")
        queries = json.loads(text[start:end+1] if start != -1 else text)
        if not isinstance(queries, list):
            queries = [state["question"]]
    except (json.JSONDecodeError, ValueError):
        queries = [state["question"]]

    return {"search_queries": queries[:4]}


# ─────────────────────────────────────────────────────────────────────────────
# Node 4: web_research
# Executes search queries and accumulates results + sources
# Implements simple retry logic via the retries field
# ─────────────────────────────────────────────────────────────────────────────

def web_research(state: dict) -> dict:
    queries = state.get("search_queries", [state["question"]])
    all_results = []
    all_sources = []

    for query in queries:
        try:
            results = web_search(query, max_results=4)
            for r in results:
                all_results.append({
                    "query":   query,
                    "title":   r["title"],
                    "content": r["content"][:800],  # truncate long snippets
                    "url":     r["url"],
                })
                if r.get("url"):
                    all_sources.append(r["url"])
        except Exception as e:
            # Don't fail the whole node if one query fails
            all_results.append({
                "query":   query,
                "title":   "Search failed",
                "content": f"Error: {str(e)[:200]}",
                "url":     "",
            })

    if not all_results:
        return {"error": "All search queries failed", "retries": state.get("retries", 0) + 1}

    return {
        "search_results": all_results,
        "sources":        list(set(all_sources)),  # deduplicate
        "error":          None,
    }


# ─────────────────────────────────────────────────────────────────────────────
# Node 5: synthesize_answer
# Combines search results into a final, well-cited answer
# ─────────────────────────────────────────────────────────────────────────────

def synthesize_answer(state: dict) -> dict:
    results = state.get("search_results", [])
    sources = state.get("sources", [])

    # Build context from search results
    context_parts = []
    for i, r in enumerate(results[:8]):  # limit to avoid context overflow
        context_parts.append(
            f"[{i+1}] {r['title']}\\n{r['content']}\\nSource: {r.get('url', 'unknown')}"
        )
    context = "\\n\\n".join(context_parts)

    source_list = "\\n".join(f"- {s}" for s in sources[:6]) if sources else "No sources available"

    response = llm.chat([
        Message.system(
            "You are a research assistant. Using the provided search results, write a "
            "comprehensive, accurate answer to the user's question. \\n\\n"
            "Requirements:\\n"
            "- Be specific and factual\\n"
            "- Cite source numbers like [1], [2] when referencing information\\n"
            "- Acknowledge any uncertainty or conflicting information\\n"
            "- Keep the answer focused and actionable\\n"
            "- End with a 'Sources' section listing URLs used\\n\\n"
            f"Search Results:\\n{context}\\n\\n"
            f"Available Sources:\\n{source_list}"
        ),
        Message.user(state["question"]),
    ])

    # Estimate confidence based on search result quality
    avg_score = sum(r.get("score", 0.5) for r in results) / max(len(results), 1)
    confidence = min(avg_score * 0.9 + 0.1, 1.0)

    return {
        "answer":     response.content,
        "confidence": round(confidence, 2),
        "error":      None,
    }`,rust:`// nodes.rs
use flowgentra_ai::prelude::*;
use serde_json::json;

#[register_handler]
pub async fn classify_intent(mut state: DynState) -> Result<DynState> {
    let question = state.get_str("question");
    // Call LLM, parse JSON response...
    // Returns: intent ("research"|"simple"), complexity (1-5)
    state.set("intent", json!("research"));
    state.set("complexity", json!(3));
    Ok(state)
}

#[register_handler]
pub async fn plan_research(mut state: DynState) -> Result<DynState> {
    let question = state.get_str("question");
    // Call LLM to decompose into search queries
    state.set("search_queries", json!([question]));
    Ok(state)
}

#[register_handler]
pub async fn web_research(mut state: DynState) -> Result<DynState> {
    let queries: Vec<String> = state
        .get("search_queries")
        .and_then(|v| serde_json::from_value(v.clone()).ok())
        .unwrap_or_default();

    let mut results = Vec::new();
    let mut sources = Vec::new();

    for query in &queries {
        // Call web_search tool...
        results.push(json!({
            "title": "Result",
            "content": "Mock content",
            "url": "https://example.com"
        }));
        sources.push("https://example.com".to_string());
    }

    state.set("search_results", json!(results));
    state.set("sources", json!(sources));
    Ok(state)
}

#[register_handler]
pub async fn synthesize_answer(mut state: DynState) -> Result<DynState> {
    // Build context, call LLM for synthesis
    state.set("answer", json!("Synthesized answer..."));
    state.set("confidence", json!(0.85));
    Ok(state)
}`})]}),(0,j.jsxs)(mo,{id:`graph`,title:`Step 4: Build the Graph`,children:[(0,j.jsx)(`p`,{style:vo,children:`Wire nodes together, define routing logic, and compile. The router inspects state at runtime and returns the next node name — this is how conditional branching works.`}),(0,j.jsx)(N,{python:`# graph.py
from flowgentra_ai.graph import StateGraph, END
from state import ResearchState
from nodes import classify_intent, direct_answer, plan_research, web_research, synthesize_answer

# ─── Router functions ─────────────────────────────────────────────────────────

def route_by_intent(state: dict) -> str:
    """After classification, route to direct_answer or research pipeline."""
    intent = state.get("intent", "research")
    if intent == "simple":
        return "direct_answer"
    elif intent == "clarify":
        return "direct_answer"   # treat ambiguous as simple for now
    else:
        return "plan_research"   # "research" → multi-step pipeline

def check_research_success(state: dict) -> str:
    """After web_research, retry up to 2 times on failure."""
    if state.get("error") and state.get("retries", 0) < 2:
        return "web_research"    # retry loop
    return "synthesize"

# ─── Graph assembly ───────────────────────────────────────────────────────────

def build_research_graph() -> any:
    builder = StateGraph(ResearchState)

    # Add all nodes
    builder.add_node("classify",    classify_intent)
    builder.add_node("direct_answer", direct_answer)
    builder.add_node("plan_research", plan_research)
    builder.add_node("web_research",  web_research)
    builder.add_node("synthesize",    synthesize_answer)

    # Entry point
    builder.set_entry_point("classify")

    # Conditional routing after classification
    builder.add_conditional_edge("classify", route_by_intent)

    # Linear pipeline for research path
    builder.add_edge("plan_research", "web_research")

    # Conditional retry or proceed
    builder.add_conditional_edge("web_research", check_research_success)

    # Terminal edges
    builder.add_edge("direct_answer", END)
    builder.add_edge("synthesize",    END)

    return builder.compile()


# Quick sanity check — run the graph manually
if __name__ == "__main__":
    graph = build_research_graph()

    result = graph.invoke({
        "question":       "What is the current state of quantum computing?",
        "session_id":     "test-session",
        "intent":         "",
        "complexity":     0,
        "search_queries": [],
        "search_results": [],
        "sources":        [],
        "answer":         "",
        "confidence":     0.0,
        "error":          None,
        "retries":        0,
    })

    print(f"Intent:     {result['intent']}")
    print(f"Confidence: {result['confidence']:.0%}")
    print(f"Sources:    {len(result['sources'])} found")
    print()
    print(result["answer"][:500] + "...")`,rust:`// graph.rs
use flowgentra_ai::prelude::*;
use crate::state::ResearchState;

fn route_by_intent(state: &ResearchState) -> &'static str {
    match state.intent.as_str() {
        "simple" | "clarify" => "direct_answer",
        _ => "plan_research",
    }
}

fn check_research_success(state: &ResearchState) -> &'static str {
    if state.error.is_some() && state.retries < 2 {
        "web_research"  // retry
    } else {
        "synthesize"
    }
}

pub fn build_graph() -> Result<CompiledGraph<ResearchState>> {
    let graph = StateGraph::<ResearchState>::builder()
        .add_node("classify",     classify_intent)
        .add_node("direct_answer",  direct_answer)
        .add_node("plan_research",  plan_research)
        .add_node("web_research",   web_research)
        .add_node("synthesize",     synthesize_answer)
        .set_entry("classify")
        .add_conditional_edge("classify", route_by_intent)
        .add_edge("plan_research", "web_research")
        .add_conditional_edge("web_research", check_research_success)
        .add_edge("direct_answer", "__end__")
        .add_edge("synthesize", "__end__")
        .build()?;
    Ok(graph)
}`})]}),(0,j.jsxs)(mo,{id:`memory`,title:`Step 5: Add Memory`,children:[(0,j.jsx)(`p`,{style:vo,children:`Checkpointers persist graph state between turns. Each session gets its own thread ID — the agent automatically restores the previous state when the user returns.`}),(0,j.jsx)(N,{python:`# memory.py
from flowgentra_ai.memory import ConversationMemory, FileCheckpointer, AsyncMemoryCheckpointer

# Option A: File-based (survives restarts, good for development)
file_checkpointer = FileCheckpointer("./checkpoints")

# Option B: Async in-memory (lost on restart, fast for testing)
mem_checkpointer = AsyncMemoryCheckpointer()

# Conversation memory (separate from state — tracks message history)
conv_memory = ConversationMemory(
    max_messages=50,        # rolling window
    system_prompt="You are a research assistant. Be concise and cite your sources."
)

# ─────────────────────────────────────────────────────────────────────────────
# Multi-turn session example
# ─────────────────────────────────────────────────────────────────────────────

from graph import build_research_graph
from state import ResearchState

graph = build_research_graph()
THREAD_ID = "user-alice-001"    # unique per user/session

def empty_state(question: str) -> dict:
    return {
        "question":       question,
        "session_id":     THREAD_ID,
        "intent":         "",
        "complexity":     0,
        "search_queries": [],
        "search_results": [],
        "sources":        [],
        "answer":         "",
        "confidence":     0.0,
        "error":          None,
        "retries":        0,
    }

# Turn 1
state1 = empty_state("What are the main applications of large language models?")
result1 = graph.invoke(state1)
print("Turn 1:", result1["answer"][:200])

# Save checkpoint manually (or configure graph-level checkpointer)
file_checkpointer.save(THREAD_ID, result1)

# Turn 2 — loads previous state automatically if using run_with_thread
state2 = empty_state("How does fine-tuning compare to RAG for those applications?")
# The agent can reference the previous turn's context via session_id
result2 = graph.invoke(state2)
print("Turn 2:", result2["answer"][:200])

# Inspect checkpoint history
history = file_checkpointer.list_history(THREAD_ID)
print(f"Saved {len(history)} checkpoints for thread {THREAD_ID}")`}),(0,j.jsxs)(ho,{type:`tip`,children:[`For production multi-tenant deployments, use `,(0,j.jsx)(`code`,{style:xo,children:`AsyncSqliteCheckpointer`}),` or`,` `,(0,j.jsx)(`code`,{style:xo,children:`AsyncPostgresCheckpointer`}),`. They support concurrent sessions and survive server restarts.`]}),(0,j.jsx)(N,{python:`# Production checkpointers
from flowgentra_ai.memory import AsyncSqliteCheckpointer, AsyncPostgresCheckpointer

# SQLite (single-server, easy setup)
sqlite_cp = AsyncSqliteCheckpointer("./sessions.db")

# Postgres (distributed, recommended for production)
pg_cp = AsyncPostgresCheckpointer(
    host="localhost", port=5432,
    database="agent_sessions",
    user="agent", password="secret",
    table="checkpoints",
)`})]}),(0,j.jsxs)(mo,{id:`observability`,title:`Step 6: Add Observability`,children:[(0,j.jsxs)(`p`,{style:vo,children:[`Wrap the graph with `,(0,j.jsx)(`code`,{style:xo,children:`ExecutionTracer`}),` to get per-node timing, token usage, and exportable Mermaid diagrams. This is invaluable for debugging and performance optimization.`]}),(0,j.jsx)(N,{python:`# observability.py
from flowgentra_ai.observability import (
    ExecutionTracer,
    init_tracing,
    graph_to_mermaid,
    graph_to_dot,
    evaluate_output_score,
)
from graph import build_research_graph

# Enable structured logging (outputs JSON spans)
init_tracing()

graph = build_research_graph()

# ── Export graph diagram before running ────────────────────────────────────────

mermaid = graph_to_mermaid(graph)
print("=== Graph Structure ===")
print(mermaid)
# flowchart TD
#   START --> classify
#   classify -- simple/clarify --> direct_answer
#   classify -- research --> plan_research
#   plan_research --> web_research
#   web_research -- error + retries < 2 --> web_research
#   web_research -- success --> synthesize
#   direct_answer --> END
#   synthesize --> END

# Save as markdown for docs/GitHub rendering
with open("graph.md", "w") as f:
    f.write(f"\`\`\`mermaid\\n{mermaid}\\n\`\`\`")

# ── Wrap graph with tracer ─────────────────────────────────────────────────────

tracer = ExecutionTracer()
traced_graph = tracer.wrap(graph)

# Run as normal
state = {
    "question":       "What are the latest developments in Rust async ecosystem?",
    "session_id":     "obs-test",
    "intent":         "",
    "complexity":     0,
    "search_queries": [],
    "search_results": [],
    "sources":        [],
    "answer":         "",
    "confidence":     0.0,
    "error":          None,
    "retries":        0,
}
result = traced_graph.invoke(state)

# ── Inspect execution trace ────────────────────────────────────────────────────

trace = tracer.last_trace()
print("\\n=== Execution Trace ===")
print(f"Total time: {trace.total_duration_ms:.0f}ms")
print()
for span in trace.spans:
    status = "✓" if not span.error else "✗"
    print(f"  {status} {span.node:<20s} {span.duration_ms:>6.1f}ms")

# ── Token usage tracking ───────────────────────────────────────────────────────

response, usage = llm.chat_with_usage([Message.user("Hello")])
if usage:
    print(f"\\nToken usage: {usage.prompt_tokens} + {usage.completion_tokens} = {usage.total_tokens}")
    cost = usage.estimated_cost("gpt-4o-mini")
    print(f"Estimated cost: \${cost:.4f}")

# ── Output quality scoring ─────────────────────────────────────────────────────

score = evaluate_output_score(
    output=result["answer"],
    expected="Information about Rust async ecosystem developments",
)
print(f"\\nOutput quality score: {score:.2f}/1.00")`,rust:`// observability.rs
use flowgentra_ai::prelude::*;
use flowgentra_ai::core::utils::{init_tracing, graph_to_mermaid};
use flowgentra_ai::core::observability::ExecutionTracer;

#[tokio::main]
async fn main() -> Result<()> {
    init_tracing();  // Enable structured log spans

    let graph = build_graph()?;

    // Export Mermaid diagram
    let mermaid = graph_to_mermaid(&graph);
    println!("=== Graph ===\\n{mermaid}");
    std::fs::write("graph.md",
        format!("\`\`\`mermaid\\n{mermaid}\\n\`\`\`"))?;

    // Run with state
    let state = ResearchState {
        question: "What are Rust async developments?".into(),
        session_id: "obs-test".into(),
        ..Default::default()
    };

    let result = graph.invoke(state).await?;
    println!("Confidence: {:.0}%", result.confidence * 100.0);
    println!("Sources:    {}", result.sources.len());
    Ok(())
}`})]}),(0,j.jsxs)(mo,{id:`error-handling`,title:`Step 7: Error Handling`,children:[(0,j.jsx)(`p`,{style:vo,children:`Production agents must handle failures gracefully. We already have retry logic in the graph router, but here's how to make it robust with proper error propagation and fallbacks.`}),(0,j.jsx)(N,{python:`# error_handling.py — patterns for robust agent execution

from flowgentra_ai.graph import StateGraph, END
from flowgentra_ai.nodes import RetryNode, TimeoutNode

# ── Pattern 1: Retry at the node level ────────────────────────────────────────

from nodes import web_research as raw_web_research

def web_research_with_retry(state: dict) -> dict:
    """Wrap web_research with explicit retry logic in the node itself."""
    max_retries = 3
    last_error = None

    for attempt in range(max_retries):
        try:
            result = raw_web_research(state)
            if result.get("error"):
                raise RuntimeError(result["error"])
            return result
        except Exception as e:
            last_error = e
            import time
            time.sleep(2 ** attempt)   # exponential backoff: 1s, 2s, 4s

    # All retries exhausted — return error state
    return {
        "search_results": [],
        "sources":        [],
        "error":          f"Web research failed after {max_retries} attempts: {last_error}",
    }


# ── Pattern 2: Retry + Timeout via built-in nodes ─────────────────────────────

from flowgentra_ai.nodes import RetryNode, TimeoutNode

retry_node = RetryNode(max_retries=3, backoff_ms=500, backoff_multiplier=2.0)
timeout_node = TimeoutNode(timeout_ms=10_000, on_timeout="default_value")

# builder.add_node("web_research", retry_node.wrap(web_research))
# builder.add_node("web_research", timeout_node.wrap(web_research))


# ── Pattern 3: Graceful degradation in synthesize node ────────────────────────

def synthesize_answer_robust(state: dict) -> dict:
    """Answer even if search failed — use general knowledge as fallback."""
    if state.get("error") or not state.get("search_results"):
        # Degraded mode: answer from general knowledge, warn user
        response = llm.chat([
            Message.system(
                "Web search is unavailable. Answer from your training knowledge only. "
                "Add a clear disclaimer that the information may be outdated."
            ),
            Message.user(state["question"]),
        ])
        return {
            "answer":     "[Note: Web search unavailable] " + response.content,
            "confidence": 0.55,  # lower confidence for knowledge-only answers
        }

    # Normal path
    return synthesize_answer(state)


# ── Pattern 4: Circuit breaker on state ───────────────────────────────────────

def route_with_circuit_breaker(state: dict) -> str:
    """Skip research entirely if we've been failing repeatedly."""
    if state.get("retries", 0) >= 2:
        return "synthesize"    # give up on search, use what we have
    if state.get("error"):
        return "web_research"  # retry
    return "synthesize"        # success


# ── Pattern 5: Error logging middleware ───────────────────────────────────────

def error_logging_middleware(node_fn):
    """Decorator that logs node errors and re-raises them."""
    import functools, logging
    log = logging.getLogger(__name__)

    @functools.wraps(node_fn)
    def wrapper(state: dict) -> dict:
        try:
            return node_fn(state)
        except Exception as e:
            log.error(
                "Node failed",
                extra={
                    "node":       node_fn.__name__,
                    "session_id": state.get("session_id"),
                    "error":      str(e),
                },
            )
            raise

    return wrapper`})]}),(0,j.jsxs)(mo,{id:`run`,title:`Step 8: Run It`,children:[(0,j.jsxs)(`p`,{style:vo,children:[`Wire everything together in `,(0,j.jsx)(`code`,{style:xo,children:`main.py`}),`:`]}),(0,j.jsx)(N,{python:`# main.py — full entry point
import os
from flowgentra_ai.observability import ExecutionTracer, init_tracing, graph_to_mermaid
from flowgentra_ai.memory import FileCheckpointer, ConversationMemory
from graph import build_research_graph

# Initialize
os.environ.setdefault("OPENAI_API_KEY", "sk-...")
init_tracing()

# Build graph and wrap with observability
graph = build_research_graph()
tracer = ExecutionTracer()
traced = tracer.wrap(graph)
checkpointer = FileCheckpointer("./checkpoints")

# Print graph structure on startup
print(graph_to_mermaid(graph))
print()

def ask(question: str, session_id: str = "default") -> str:
    """Run one turn of the research assistant."""
    state = {
        "question":       question,
        "session_id":     session_id,
        "intent":         "",
        "complexity":     0,
        "search_queries": [],
        "search_results": [],
        "sources":        [],
        "answer":         "",
        "confidence":     0.0,
        "error":          None,
        "retries":        0,
    }

    result = traced.invoke(state)

    # Print execution summary
    trace = tracer.last_trace()
    print(f"[{result['intent'].upper()} | conf={result['confidence']:.0%} | {trace.total_duration_ms:.0f}ms]")
    if result.get("sources"):
        print(f"Sources: {', '.join(result['sources'][:3])}")

    return result["answer"]


# ── Interactive REPL ───────────────────────────────────────────────────────────
if __name__ == "__main__":
    SESSION = "interactive-001"
    print("Research Assistant ready. Type 'quit' to exit.\\n")

    while True:
        try:
            question = input("You: ").strip()
            if not question or question.lower() in ("quit", "exit", "q"):
                break
            answer = ask(question, SESSION)
            print(f"\\nAssistant: {answer}\\n{'─' * 60}\\n")
        except KeyboardInterrupt:
            break

    print("Goodbye!")`,rust:`// main.rs
mod state;
mod nodes;
mod graph;

use flowgentra_ai::prelude::*;
use flowgentra_ai::core::utils::{init_tracing, graph_to_mermaid};
use state::ResearchState;

#[tokio::main]
async fn main() -> Result<()> {
    init_tracing();

    let graph = graph::build_graph()?;

    // Print structure
    println!("{}", graph_to_mermaid(&graph));

    // One question
    let result = graph.invoke(ResearchState {
        question: "What is Rust's async/await story in 2025?".into(),
        session_id: "main-001".into(),
        ..Default::default()
    }).await?;

    println!("\\nIntent: {}", result.intent);
    println!("Confidence: {:.0}%", result.confidence * 100.0);
    println!("Sources: {}", result.sources.len());
    println!("\\nAnswer:\\n{}", result.answer);
    Ok(())
}`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginTop:16},children:`Run the interactive assistant:`}),(0,j.jsx)(N,{forceLang:`bash`,rust:`export OPENAI_API_KEY="sk-..."
export TAVILY_API_KEY="tvly-..."   # optional

python main.py

# flowchart TD
#   START --> classify
#   classify --> plan_research
#   ...

# Research Assistant ready. Type 'quit' to exit.

# You: What are the main risks of using AI in healthcare?
# [RESEARCH | conf=87% | 3241ms]
# Sources: https://pubmed.ncbi..., https://who.int/...

# Assistant: The main risks of AI in healthcare include...`})]}),(0,j.jsxs)(mo,{id:`yaml`,title:`Production: YAML Config`,children:[(0,j.jsx)(`p`,{style:vo,children:`For production, replace hardcoded Python wiring with a YAML config. This lets you swap models, change topology, and tune parameters without touching application code.`}),(0,j.jsx)(`p`,{style:{color:`#8b949e`,marginBottom:8},children:(0,j.jsx)(`strong`,{style:bo,children:`agent.yaml`})}),(0,j.jsx)(N,{forceLang:`yaml`,rust:`name: research-assistant
version: "1.0.0"
description: "Multi-turn research agent with web search"

python_handler_module: handlers   # auto-imports handlers.py

llm:
  provider: openai
  model: gpt-4o-mini
  temperature: 0.3
  api_key: \${OPENAI_API_KEY}      # env var substitution

graph:
  entry: classify
  nodes:
    - name: classify
      handler: classify_intent

    - name: direct_answer
      handler: direct_answer

    - name: plan_research
      handler: plan_research

    - name: web_research
      handler: web_research
      node_type: retry              # built-in retry wrapper
      config:
        max_retries: 3
        backoff_ms: 500
        backoff_multiplier: 2.0

    - name: synthesize
      handler: synthesize_answer

  edges:
    - from: classify
      to: direct_answer
      condition: "intent == 'simple'"
    - from: classify
      to: plan_research
      condition: "intent == 'research'"
    - from: plan_research
      to: web_research
    - from: web_research
      to: synthesize
    - from: direct_answer
      to: __end__
    - from: synthesize
      to: __end__

memory:
  checkpointer:
    type: sqlite                    # or "memory", "postgres"
    path: ./sessions.db
  conversation:
    enabled: true
    max_messages: 50
    system_prompt: "You are a research assistant."

tools:
  registry: tools.registry          # import tools.registry from tools.py

observability:
  tracing: true
  log_level: info
  export_diagram: graph.md          # Mermaid diagram written on startup`}),(0,j.jsxs)(`p`,{style:{...vo,marginTop:16},children:[(0,j.jsx)(`strong`,{style:bo,children:`handlers.py`}),` — register functions so YAML can find them:`]}),(0,j.jsx)(N,{python:`# handlers.py
from flowgentra_ai.agent import register_handler

# Import the actual node functions
from nodes import (
    classify_intent  as _classify_intent,
    direct_answer    as _direct_answer,
    plan_research    as _plan_research,
    web_research     as _web_research,
    synthesize_answer as _synthesize_answer,
)

# Register them by name — YAML handler: fields resolve to these
@register_handler("classify_intent")
def classify_intent(state):
    return _classify_intent(state)

@register_handler("direct_answer")
def direct_answer(state):
    return _direct_answer(state)

@register_handler("plan_research")
def plan_research(state):
    return _plan_research(state)

@register_handler("web_research")
def web_research(state):
    return _web_research(state)

@register_handler("synthesize_answer")
def synthesize_answer(state):
    return _synthesize_answer(state)`}),(0,j.jsxs)(`p`,{style:{...vo,marginTop:16},children:[(0,j.jsx)(`strong`,{style:bo,children:`prod_main.py`}),` — zero-wiring entry point:`]}),(0,j.jsx)(N,{python:`# prod_main.py — production entry point
from flowgentra_ai.agent import Agent

# All configuration comes from YAML
agent = Agent.from_config_path("agent.yaml")

# Multi-turn with checkpointing
result = agent.run_with_thread(
    thread_id="user-42",
    state={
        "question":       "What is the state of quantum computing in 2025?",
        "session_id":     "user-42",
        "intent":         "",
        "complexity":     0,
        "search_queries": [],
        "search_results": [],
        "sources":        [],
        "answer":         "",
        "confidence":     0.0,
        "error":          None,
        "retries":        0,
    }
)
print(result["answer"])`})]}),(0,j.jsxs)(mo,{id:`next`,title:`What's Next`,children:[(0,j.jsx)(`p`,{style:vo,children:`You've built a production-grade research assistant with classification, tool calling, retries, memory, and observability. Here's where to go from here:`}),(0,j.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(220px, 1fr))`,gap:12,marginTop:16},children:[{to:`/docs/rag`,icon:`🗃️`,label:`Add RAG`,desc:`Index private documents for private-knowledge retrieval`},{to:`/docs/supervisor`,icon:`🤖`,label:`Multi-Agent`,desc:`Add specialist agents (code, data, domain)`},{to:`/docs/human-in-the-loop`,icon:`🧑‍💻`,label:`Human-in-the-Loop`,desc:`Pause for review before publishing answers`},{to:`/docs/evaluation`,icon:`📊`,label:`Evaluation`,desc:`Measure answer quality with automated scoring`},{to:`/docs/performance`,icon:`⚡`,label:`Performance`,desc:`Caching, batching, and parallel execution`},{to:`/docs/mcp`,icon:`🔌`,label:`MCP Integration`,desc:`Connect to external tools via Model Context Protocol`}].map(e=>(0,j.jsxs)(`a`,{href:e.to,style:Co,onMouseEnter:e=>e.currentTarget.style.borderColor=`var(--accent)`,onMouseLeave:e=>e.currentTarget.style.borderColor=`#21262d`,children:[(0,j.jsx)(`div`,{style:{fontSize:`1.5rem`,marginBottom:8},children:e.icon}),(0,j.jsx)(`div`,{style:{fontWeight:600,color:`#e6edf3`,marginBottom:4},children:e.label}),(0,j.jsx)(`div`,{style:{fontSize:`0.875rem`,color:`#8b949e`},children:e.desc})]},e.to))})]})]})}function mo({id:e,title:t,children:n}){return(0,j.jsxs)(`section`,{id:e,style:{marginBottom:56},children:[(0,j.jsx)(`h2`,{style:{fontSize:`1.375rem`,fontWeight:600,color:`#e6edf3`,marginBottom:18,marginTop:0},children:t}),n]})}function ho({type:e=`info`,children:t}){let n={info:{bg:`rgba(53,114,165,0.1)`,border:`rgba(53,114,165,0.4)`,label:`Note`,color:`#58a6ff`},tip:{bg:`rgba(63,185,80,0.1)`,border:`rgba(63,185,80,0.4)`,label:`Tip`,color:`#3fb950`},warning:{bg:`rgba(210,153,34,0.1)`,border:`rgba(210,153,34,0.4)`,label:`Warning`,color:`#d29922`}},r=n[e]||n.info;return(0,j.jsxs)(`div`,{style:{background:r.bg,border:`1px solid ${r.border}`,borderRadius:8,padding:`14px 18px`,marginTop:16,marginBottom:16},children:[(0,j.jsxs)(`strong`,{style:{color:r.color,fontSize:`0.875rem`},children:[r.label,`: `]}),(0,j.jsx)(`span`,{style:{color:`#8b949e`,fontSize:`0.875rem`,lineHeight:1.65},children:t})]})}var go={fontSize:`2rem`,fontWeight:700,color:`#e6edf3`,letterSpacing:`-0.02em`,marginBottom:12,marginTop:8},_o={color:`#8b949e`,marginBottom:40,lineHeight:1.75,fontSize:`1.0625rem`,maxWidth:700},vo={color:`#8b949e`,lineHeight:1.75,marginBottom:16},yo={color:`#8b949e`,lineHeight:2,paddingLeft:20,margin:`0 0 20px`},bo={color:`#e6edf3`},xo={background:`#21262d`,border:`1px solid #30363d`,borderRadius:4,padding:`1px 6px`,fontSize:`0.85em`,fontFamily:`JetBrains Mono, monospace`,color:`#e6edf3`},So={background:`rgba(206,66,43,0.12)`,border:`1px solid rgba(206,66,43,0.4)`,borderRadius:20,padding:`3px 12px`,fontSize:`0.8rem`,color:`#CE422B`,fontWeight:600,display:`inline-block`},Co={background:`#161b22`,border:`1px solid #21262d`,borderRadius:8,padding:`16px 18px`,textDecoration:`none`,display:`block`,transition:`border-color 0.2s`},wo={background:`#0d1117`,border:`1px solid #21262d`,borderRadius:10,padding:`20px 24px`,marginBottom:40},To={fontSize:`0.75rem`,fontWeight:700,color:`var(--accent)`,letterSpacing:`0.1em`,textTransform:`uppercase`,marginBottom:12},Eo={fontFamily:`JetBrains Mono, monospace`,fontSize:`0.8rem`,color:`#8b949e`,lineHeight:1.7,margin:0,overflowX:`auto`,whiteSpace:`pre`};function Do(){return(0,j.jsx)(Xn,{children:(0,j.jsx)(On,{basename:`/flowgentra-ai-docs`,children:(0,j.jsxs)(`div`,{style:{minHeight:`100vh`,display:`flex`,flexDirection:`column`},children:[(0,j.jsx)(ir,{}),(0,j.jsx)(`div`,{style:{flex:1},children:(0,j.jsxs)(Bt,{children:[(0,j.jsx)(k,{path:`/`,element:(0,j.jsx)(fr,{})}),(0,j.jsx)(k,{path:`/docs/getting-started`,element:(0,j.jsx)(gr,{})}),(0,j.jsx)(k,{path:`/docs/quickstart-rust`,element:(0,j.jsx)(Cr,{})}),(0,j.jsx)(k,{path:`/docs/quickstart-python`,element:(0,j.jsx)(Nr,{})}),(0,j.jsx)(k,{path:`/docs/installation`,element:(0,j.jsx)(Ur,{})}),(0,j.jsx)(k,{path:`/docs/what-is-flowgentra`,element:(0,j.jsx)(Kr,{})}),(0,j.jsx)(k,{path:`/docs/state-concepts`,element:(0,j.jsx)(ti,{})}),(0,j.jsx)(k,{path:`/docs/graphs`,element:(0,j.jsx)(Yr,{})}),(0,j.jsx)(k,{path:`/docs/nodes`,element:(0,j.jsx)(Qr,{})}),(0,j.jsx)(k,{path:`/docs/runtime`,element:(0,j.jsx)(li,{})}),(0,j.jsx)(k,{path:`/docs/agents`,element:(0,j.jsx)(di,{})}),(0,j.jsx)(k,{path:`/docs/predefined-agents`,element:(0,j.jsx)(ya,{})}),(0,j.jsx)(k,{path:`/docs/llm-client`,element:(0,j.jsx)(mi,{})}),(0,j.jsx)(k,{path:`/docs/llm-providers`,element:(0,j.jsx)(xa,{})}),(0,j.jsx)(k,{path:`/docs/tools`,element:(0,j.jsx)(Oi,{})}),(0,j.jsx)(k,{path:`/docs/mcp`,element:(0,j.jsx)(ji,{})}),(0,j.jsx)(k,{path:`/docs/memory`,element:(0,j.jsx)(_i,{})}),(0,j.jsx)(k,{path:`/docs/rag`,element:(0,j.jsx)(Ci,{})}),(0,j.jsx)(k,{path:`/docs/document-loaders`,element:(0,j.jsx)(zi,{})}),(0,j.jsx)(k,{path:`/docs/supervisor`,element:(0,j.jsx)(Zi,{})}),(0,j.jsx)(k,{path:`/docs/human-in-the-loop`,element:(0,j.jsx)(bi,{})}),(0,j.jsx)(k,{path:`/docs/error-handling`,element:(0,j.jsx)(B,{})}),(0,j.jsx)(k,{path:`/docs/evaluation`,element:(0,j.jsx)(Gi,{})}),(0,j.jsx)(k,{path:`/docs/observability`,element:(0,j.jsx)(aa,{})}),(0,j.jsx)(k,{path:`/docs/advanced-nodes`,element:(0,j.jsx)(Ji,{})}),(0,j.jsx)(k,{path:`/docs/reranking`,element:(0,j.jsx)(Hi,{})}),(0,j.jsx)(k,{path:`/docs/configuration`,element:(0,j.jsx)(Ii,{})}),(0,j.jsx)(k,{path:`/docs/plugins`,element:(0,j.jsx)(Ka,{})}),(0,j.jsx)(k,{path:`/docs/middleware`,element:(0,j.jsx)(Qa,{})}),(0,j.jsx)(k,{path:`/docs/validation`,element:(0,j.jsx)(io,{})}),(0,j.jsx)(k,{path:`/docs/performance`,element:(0,j.jsx)(lo,{})}),(0,j.jsx)(k,{path:`/docs/database`,element:(0,j.jsx)(pa,{})}),(0,j.jsx)(k,{path:`/docs/api/agent-builder`,element:(0,j.jsx)(ma,{})}),(0,j.jsx)(k,{path:`/docs/tutorials/research-assistant`,element:(0,j.jsx)(po,{})}),(0,j.jsx)(k,{path:`/docs/api/:topicId`,element:(0,j.jsx)(ja,{})}),(0,j.jsx)(k,{path:`/docs/guides`,element:(0,j.jsx)(Pa,{guidesData:Ma})}),(0,j.jsx)(k,{path:`/docs/concepts`,element:(0,j.jsx)(Ia,{conceptsData:Fa})}),(0,j.jsx)(k,{path:`/docs/examples`,element:(0,j.jsx)(Ra,{})}),(0,j.jsx)(k,{path:`/docs/best-practices`,element:(0,j.jsx)(Ca,{})}),(0,j.jsx)(k,{path:`/docs/glossary`,element:(0,j.jsx)(Wa,{})}),(0,j.jsx)(k,{path:`/docs/faq`,element:(0,j.jsx)(Ea,{})}),(0,j.jsx)(k,{path:`/docs/changelog`,element:(0,j.jsx)(Va,{})}),(0,j.jsx)(k,{path:`/docs/api-reference`,element:(0,j.jsx)(Rt,{to:`/docs/api/state-graph`,replace:!0})}),(0,j.jsx)(k,{path:`/docs`,element:(0,j.jsx)(Rt,{to:`/docs/getting-started`,replace:!0})}),(0,j.jsx)(k,{path:`*`,element:(0,j.jsx)(Rt,{to:`/`,replace:!0})})]})})]})})})}(0,y.createRoot)(document.getElementById(`root`)).render((0,j.jsx)(v.StrictMode,{children:(0,j.jsx)(Do,{})}));export{s as n,S as t};
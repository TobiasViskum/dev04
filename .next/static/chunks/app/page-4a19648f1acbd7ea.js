(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2666:function(e,t,r){Promise.resolve().then(r.t.bind(r,2115,23)),Promise.resolve().then(r.bind(r,5617)),Promise.resolve().then(r.bind(r,1489)),Promise.resolve().then(r.bind(r,6053)),Promise.resolve().then(r.t.bind(r,2011,23)),Promise.resolve().then(r.bind(r,5738)),Promise.resolve().then(r.t.bind(r,8645,23)),Promise.resolve().then(r.bind(r,268))},7554:function(e,t,r){"use strict";r.d(t,{uy:function(){return n.default},yC:function(){return i.default}}),r(5617);var n=r(1489),i=r(6053)},268:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var n=r(3955),i=r(3030),o=r.n(i),a=r(7554),s=r(6394),l=r.n(s),c=r(2310);let u={useFirstRender:function(e){let t=e.updateHeader;return(0,c.useEffect)(()=>{if("undefined"==typeof document)return;let e=getComputedStyle(document.documentElement),r=document.getElementById("profileIcon"),n=!1;window.addEventListener("scroll",()=>{if(!r)return;let i=Number(e.getPropertyValue("--navbar-height").replace("px","")),o=r.getBoundingClientRect().top;o<=i&&!1==n?(n=!0,t(!0)):o>i&&!0==n&&(n=!1,t(!1))})},[])}};function d(){let[e,t]=(0,c.useState)(!1);return u.useFirstRender({updateHeader:function(e){t(e)}}),(0,n.jsx)("header",{className:o().header+" "+(e?o().headerActive:""),children:(0,n.jsxs)("nav",{className:o().navbar,children:[(0,n.jsx)("div",{}),(0,n.jsx)("p",{className:o().title,children:"Home"}),(0,n.jsx)("div",{className:o().settingsHolder,children:(0,n.jsx)(l(),{src:a.uy,alt:"settings",className:o().settingsIcon})})]})})}},5738:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var n=r(3955),i=r(6151),o=r.n(i),a=r(7554),s=r(2310);function l(){let e=(0,s.useRef)(null);function t(t){let r=document.getElementById("searchSection"),n=document.documentElement;if(r){if(t)n.scrollTo(0,8),r.style.setProperty("--searching-template-rows","0.01fr 1fr"),r.style.setProperty("--searching-opacity","0");else{var i;r.style.setProperty("--searching-template-rows","1fr 1fr"),r.style.setProperty("--searching-opacity","1"),null===(i=e.current)||void 0===i||i.blur()}}}return(0,s.useEffect)(()=>{function r(){var r;t(!1),null==e||null===(r=e.current)||void 0===r||r.blur()}window.addEventListener("touchmove",r),window.addEventListener("touchstart",r)},[]),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:o().container,id:"searchbar",children:[(0,n.jsx)("div",{className:o().searchIconHolder,children:(0,n.jsx)("img",{src:a.yC.src,alt:"search icon",className:o().searchIcon})}),(0,n.jsx)("div",{className:o().border}),(0,n.jsx)("input",{ref:e,spellCheck:!1,placeholder:"Search...",className:o().searchBar,onFocus:()=>t(!0),onBlur:()=>t(!1)})]})})}},2011:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return b}});let n=r(6927),i=r(5909),o=i._(r(2310)),a=n._(r(9619)),s=r(9080),l=r(9600),c=r(5934);r(4169);let u=n._(r(8697)),d={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function f(e){return void 0!==e.default}function p(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function h(e,t,r,n,i,o,a){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===r&&o(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,i=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}})}function m(e){let[t,r]=o.version.split("."),n=parseInt(t,10),i=parseInt(r,10);return n>18||18===n&&i>=3?{fetchPriority:e}:{fetchpriority:e}}let g=(0,o.forwardRef)((e,t)=>{let{imgAttributes:r,heightInt:n,widthInt:i,qualityInt:a,className:s,imgStyle:l,blurStyle:c,isLazy:u,fetchPriority:d,fill:f,placeholder:p,loading:g,srcString:_,config:b,unoptimized:v,loader:A,onLoadRef:y,onLoadingCompleteRef:E,setBlurComplete:w,setShowAltText:S,onLoad:P,onError:C,...x}=e;return g=u?"lazy":g,o.default.createElement("img",{...x,...m(d),loading:g,width:i,height:n,decoding:"async","data-nimg":f?"fill":"1",className:s,style:{...l,...c},...r,ref:(0,o.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(C&&(e.src=e.src),e.complete&&h(e,_,p,y,E,w,v))},[_,p,y,E,w,C,v,t]),onLoad:e=>{let t=e.currentTarget;h(t,_,p,y,E,w,v)},onError:e=>{S(!0),"blur"===p&&w(!0),C&&C(e)}})}),_=(0,o.forwardRef)((e,t)=>{var r;let n,i,{src:h,sizes:_,unoptimized:b=!1,priority:v=!1,loading:A,className:y,quality:E,width:w,height:S,fill:P,style:C,onLoad:x,onLoadingComplete:j,placeholder:O="empty",blurDataURL:I,fetchPriority:M,layout:R,objectFit:k,objectPosition:U,lazyBoundary:B,lazyRoot:H,...N}=e,D=(0,o.useContext)(c.ImageConfigContext),F=(0,o.useMemo)(()=>{let e=d||D||l.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[D]),z=N.loader||u.default;delete N.loader;let V="__next_img_default"in z;if(V){if("custom"===F.loader)throw Error('Image with src "'+h+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=z;z=t=>{let{config:r,...n}=t;return e(n)}}if(R){"fill"===R&&(P=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[R];e&&(C={...C,...e});let t={responsive:"100vw",fill:"100vw"}[R];t&&!_&&(_=t)}let L="",T=p(w),G=p(S);if("object"==typeof(r=h)&&(f(r)||void 0!==r.src)){let e=f(h)?h.default:h;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(n=e.blurWidth,i=e.blurHeight,I=I||e.blurDataURL,L=e.src,!P){if(T||G){if(T&&!G){let t=T/e.width;G=Math.round(e.height*t)}else if(!T&&G){let t=G/e.height;T=Math.round(e.width*t)}}else T=e.width,G=e.height}}let Q=!v&&("lazy"===A||void 0===A);(!(h="string"==typeof h?h:L)||h.startsWith("data:")||h.startsWith("blob:"))&&(b=!0,Q=!1),F.unoptimized&&(b=!0),V&&h.endsWith(".svg")&&!F.dangerouslyAllowSVG&&(b=!0),v&&(M="high");let[W,Y]=(0,o.useState)(!1),[J,K]=(0,o.useState)(!1),q=p(E),X=Object.assign(P?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:k,objectPosition:U}:{},J?{}:{color:"transparent"},C),$="blur"===O&&I&&!W?{backgroundSize:X.objectFit||"cover",backgroundPosition:X.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'+(0,s.getImageBlurSvg)({widthInt:T,heightInt:G,blurWidth:n,blurHeight:i,blurDataURL:I,objectFit:X.objectFit})+'")'}:{},Z=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:o,sizes:a,loader:s}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let o=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:o,kind:"x"}}(t,i,a),u=l.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:l.map((e,n)=>s({config:t,src:r,quality:o,width:e})+" "+("w"===c?e:n+1)+c).join(", "),src:s({config:t,src:r,quality:o,width:l[u]})}}({config:F,src:h,unoptimized:b,width:T,quality:q,sizes:_,loader:z}),ee=h,et=(0,o.useRef)(x);(0,o.useEffect)(()=>{et.current=x},[x]);let er=(0,o.useRef)(j);(0,o.useEffect)(()=>{er.current=j},[j]);let en={isLazy:Q,imgAttributes:Z,heightInt:G,widthInt:T,qualityInt:q,className:y,imgStyle:X,blurStyle:$,loading:A,config:F,fetchPriority:M,fill:P,unoptimized:b,placeholder:O,loader:z,srcString:ee,onLoadRef:et,onLoadingCompleteRef:er,setBlurComplete:Y,setShowAltText:K,...N};return o.default.createElement(o.default.Fragment,null,o.default.createElement(g,{...en,ref:t}),v?o.default.createElement(a.default,null,o.default.createElement("link",{key:"__nimg-"+Z.src+Z.srcSet+Z.sizes,rel:"preload",as:"image",href:Z.srcSet?void 0:Z.src,imageSrcSet:Z.srcSet,imageSizes:Z.sizes,crossOrigin:N.crossOrigin,...m(M)})):null)}),b=_;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4920:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return o}});let n=r(6927),i=n._(r(2310)),o=i.default.createContext({})},5224:function(e,t){"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},9619:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{defaultHead:function(){return u},default:function(){return h}});let n=r(6927),i=r(5909),o=i._(r(2310)),a=n._(r(2776)),s=r(4920),l=r(508),c=r(5224);function u(e){void 0===e&&(e=!1);let t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(4169);let f=["name","httpEquiv","charSet","itemProp"];function p(e,t){let{inAmpMode:r}=t;return e.reduce(d,[]).reverse().concat(u(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return i=>{let o=!0,a=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){a=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=f.length;e<t;e++){let t=f[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?o=!1:r.add(t);else{let e=i.props[t],r=n[t]||new Set;("name"!==t||!a)&&r.has(e)?o=!1:(r.add(e),n[t]=r)}}}}return o}}()).reverse().map((e,t)=>{let n=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,o.default.cloneElement(e,t)}return o.default.cloneElement(e,{key:n})})}let h=function(e){let{children:t}=e,r=(0,o.useContext)(s.AmpStateContext),n=(0,o.useContext)(l.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:n,inAmpMode:(0,c.isInAmpMode)(r)},t)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9080:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:o,objectFit:a}=e,s=n||t,l=i||r,c=o.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return s&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "+s+" "+l+"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"+(n&&i?"1":"20")+"'/%3E"+c+"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"+o+"'/%3E%3C/svg%3E":"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='"+("contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' x='0' y='0' height='100%25' width='100%25' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},5934:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return a}});let n=r(6927),i=n._(r(2310)),o=r(9600),a=i.default.createContext(o.imageConfigDefault)},9600:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return n}});let r=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},8697:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:i}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},2776:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}});let n=r(5909),i=n._(r(2310)),o=i.useLayoutEffect,a=i.useEffect;function s(e){let{headManager:t,reduceComponentsToState:r}=e;function n(){if(t&&t.mountedInstances){let n=i.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(n,e))}}return o(()=>{var r;return null==t||null==(r=t.mountedInstances)||r.add(e.children),()=>{var r;null==t||null==(r=t.mountedInstances)||r.delete(e.children)}}),o(()=>(t&&(t._pendingUpdate=n),()=>{t&&(t._pendingUpdate=n)})),a(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},4169:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},3030:function(e){e.exports={header:"Header_header__oka2D",navbar:"Header_navbar__n62Gf",settingsHolder:"Header_settingsHolder___1chm",settingsIcon:"Header_settingsIcon__stPY2",headerActive:"Header_headerActive__vrC5s",intersector:"Header_intersector__wCl6f"}},8645:function(e){e.exports={main:"Main_main__u8hg_"}},6151:function(e){e.exports={container:"SearchBar_container__YjLHQ",searchIconHolder:"SearchBar_searchIconHolder__P6Vb1",border:"SearchBar_border__H_kEU",searchIcon:"SearchBar_searchIcon__DGN_N",searchBar:"SearchBar_searchBar__Vka7J"}},2115:function(e){e.exports={searchSection:"SearchSection_searchSection__tJhw_",upperRow:"SearchSection_upperRow__UVnB1",profileHolder:"SearchSection_profileHolder__mO3Gv",profileIcon:"SearchSection_profileIcon__HIi6D",title:"SearchSection_title__aPcGE",lowerRow:"SearchSection_lowerRow__Yrq3z"}},5617:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/profileTobias.56bde7f5.png",height:246,width:244,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABBklEQVR42g3Mu07CUBwH4F//HA6SWrmEFCHhEi8LDDqIGu3iru/gZHwkH0RdnL3MJpgYQwyDFUm1hbbp7fQc2b982t3DfV0vFC6SpXeVCXHS67ZUf6unaVS29VprwJTE28J3m5/vE3x7EcbjD21/2JO1htleW5+cszSTTREF0rWn4OAkshJenl9RMxswu/1r5vuBSkNBrlAoUo6vmYMgBw2piMqmPGV/Sx8bnKPNy4hTicUKVjjh6HAEo9UBs237MalXLUMvSeE61NRL6HSr8tjaWw27RFGs3czmIYI4BeOA8zvHzuiA9IpBoTf9oTNr+9bQmB1HCUUqUzkUwih5YmXz0nEKg3+/nnKkPQVrugAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},6053:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/search.f6c519d6.png",height:512,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAV0lEQVR42mMAgX9MQMz1jw/EgnFt/035N/mfOwME/GP/N+MfB5Ce8o8fpqLnn+A/5n+T//FCuP7/Dv/r/TfjnxNEQ+K///+CQcbCDD3+LxXCBGIIQGYCAOe6LXptdS1iAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},1489:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/settings.0ba832d2.png",height:512,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAUVBMVEUEdP4Ec/4EdP4Ec/4EdP4Fc/4Ec/4EdP4Ec/4FdP4Ec/4Ec/4Ec/4Ec/4EdP4Fc/4Ec/4EdP4Ec/4FdP4Ec/4Fc/4EdP4FdP4EdP4Fc/4Ec/6O3LfsAAAAF3RSTlMAACkpKioqKyzCwsPE7u/v8Pn5+/v8/h0GiB4AAAA/SURBVHjaLcbJAYAgEATB8UbAC1ZpyD9QP9SrpMVnC27QegHldvIkeEqU1QYN0/v1xJIgsWs7K3CM0hyy+Uk/m60ER2KC+/8AAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},3009:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(2310),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,o={},c=null,u=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,n)&&!l.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:i,type:e,key:c,ref:u,props:o,_owner:s.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},3955:function(e,t,r){"use strict";e.exports=r(3009)},6394:function(e,t,r){e.exports=r(2011)}},function(e){e.O(0,[875,474,744],function(){return e(e.s=2666)}),_N_E=e.O()}]);
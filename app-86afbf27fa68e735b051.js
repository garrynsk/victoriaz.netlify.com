webpackJsonp([0xd2a57dc1d883],{216:function(n,e,t){"use strict";function o(n,e,t){var o=r.map(function(t){if(t.plugin[n]){var o=t.plugin[n](e,t.options);return o}});return o=o.filter(function(n){return"undefined"!=typeof n}),o.length>0?o:t?[t]:[]}function a(n,e,t){return r.reduce(function(t,o){return o.plugin[n]?t.then(function(){return o.plugin[n](e,o.options)}):t},Promise.resolve())}e.__esModule=!0,e.apiRunner=o,e.apiRunnerAsync=a;var r=[{plugin:t(740),options:{plugins:[]}},{plugin:t(741),options:{plugins:[]}},{plugin:t(737),options:{plugins:[]}},{plugin:t(738),options:{plugins:[],trackingId:"UA-116706361-1",head:!0,anonymize:!0,respectDNT:!0}},{plugin:t(746),options:{plugins:[]}}]},544:function(n,e,t){"use strict";e.components={"component---node-modules-gatsby-plugin-offline-app-shell-js":t(713),"component---src-pages-404-tsx":t(715),"component---src-pages-about-tsx":t(716),"component---src-pages-index-tsx":t(717),"component---src-pages-repositories-tsx":t(718),"component---src-pages-tags-tsx":t(719),"component---src-templates-post-tsx":t(720),"component---src-templates-tags-tsx":t(721)},e.json={"layout-index.json":t(722),"offline-plugin-app-shell-fallback.json":t(729),"404.json":t(723),"about.json":t(725),"index.json":t(726),"repositories.json":t(730),"tags.json":t(731),"404-html.json":t(724),"non-blocking-queue.json":t(728),"monads.json":t(727),"tags-non-blocking.json":t(733),"tags-queue.json":t(734),"tags-scala.json":t(735),"tags-monads.json":t(732)},e.layouts={"layout---index":t(714)}},545:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}function a(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function r(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function u(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}e.__esModule=!0;var i=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},s=t(1),c=o(s),l=t(2),f=o(l),p=t(344),d=o(p),h=t(159),m=o(h),g=t(216),y=t(1248),v=o(y),x=function(n){var e=n.children;return c.default.createElement("div",null,e())},R=function(n){function e(t){a(this,e);var o=r(this,n.call(this)),u=t.location;return d.default.getPage(u.pathname)||(u=i({},u,{pathname:"/404.html"})),o.state={location:u,pageResources:d.default.getResourcesForPathname(u.pathname)},o}return u(e,n),e.prototype.componentWillReceiveProps=function(n){var e=this;if(this.state.location.pathname!==n.location.pathname){var t=d.default.getResourcesForPathname(n.location.pathname);if(t)this.setState({location:n.location,pageResources:t});else{var o=n.location;d.default.getPage(o.pathname)||(o=i({},o,{pathname:"/404.html"})),d.default.getResourcesForPathname(o.pathname,function(n){e.setState({location:o,pageResources:n})})}}},e.prototype.componentDidMount=function(){var n=this;m.default.on("onPostLoadPageResources",function(e){d.default.getPage(n.state.location.pathname)&&e.page.path===d.default.getPage(n.state.location.pathname).path&&n.setState({pageResources:e.pageResources})})},e.prototype.shouldComponentUpdate=function(n,e){return!e.pageResources||(!(this.state.pageResources||!e.pageResources)||(this.state.pageResources.component!==e.pageResources.component||(this.state.pageResources.json!==e.pageResources.json||(!(this.state.location.key===e.location.key||!e.pageResources.page||!e.pageResources.page.matchPath&&!e.pageResources.page.path)||(0,v.default)(this,n,e)))))},e.prototype.render=function(){var n=(0,g.apiRunner)("replaceComponentRenderer",{props:i({},this.props,{pageResources:this.state.pageResources}),loader:p.publicLoader}),e=n[0];return this.props.page?this.state.pageResources?e||(0,s.createElement)(this.state.pageResources.component,i({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?e||(0,s.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:x,i({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},e}(c.default.Component);R.propTypes={page:f.default.bool,layout:f.default.bool,location:f.default.object},e.default=R,n.exports=e.default},159:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var a=t(1019),r=o(a),u=(0,r.default)();n.exports=u},546:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var a=t(212),r=t(345),u=o(r),i={};n.exports=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){var o=decodeURIComponent(t),r=(0,u.default)(o,e);if(r.split("#").length>1&&(r=r.split("#").slice(0,-1).join("")),r.split("?").length>1&&(r=r.split("?").slice(0,-1).join("")),i[r])return i[r];var s=void 0;return n.some(function(n){if(n.matchPath){if((0,a.matchPath)(r,{path:n.path})||(0,a.matchPath)(r,{path:n.matchPath}))return s=n,i[r]=n,!0}else{if((0,a.matchPath)(r,{path:n.path,exact:!0}))return s=n,i[r]=n,!0;if((0,a.matchPath)(r,{path:n.path+"index.html"}))return s=n,i[r]=n,!0}return!1}),s}}},547:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var a=t(250),r=o(a),u=t(216),i=(0,u.apiRunner)("replaceHistory"),s=i[0],c=s||(0,r.default)();n.exports=c},724:function(n,e,t){t(20),n.exports=function(n){return t.e(0xa2868bfb69fc,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(755)})})}},723:function(n,e,t){t(20),n.exports=function(n){return t.e(0xe70826b53c04,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(756)})})}},725:function(n,e,t){t(20),n.exports=function(n){return t.e(0xf927f8900006,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(757)})})}},726:function(n,e,t){t(20),n.exports=function(n){return t.e(0x81b8806e4260,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(758)})})}},722:function(n,e,t){t(20),n.exports=function(n){return t.e(60335399758886,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(253)})})}},727:function(n,e,t){t(20),n.exports=function(n){return t.e(0x9af0bcf2a133,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(759)})})}},728:function(n,e,t){t(20),n.exports=function(n){return t.e(0xd0992fe20d81,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(760)})})}},729:function(n,e,t){t(20),n.exports=function(n){return t.e(0xbf4c176e203a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(761)})})}},730:function(n,e,t){t(20),n.exports=function(n){return t.e(0xbcfb691abfa3,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(762)})})}},732:function(n,e,t){t(20),n.exports=function(n){return t.e(0xb3a4940bce48,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(763)})})}},733:function(n,e,t){t(20),n.exports=function(n){return t.e(0xbee3ace58922,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(764)})})}},734:function(n,e,t){t(20),n.exports=function(n){return t.e(79465324930463,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(765)})})}},735:function(n,e,t){t(20),n.exports=function(n){return t.e(0xe18631963e2f,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(766)})})}},731:function(n,e,t){t(20),n.exports=function(n){return t.e(55702396619907,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(767)})})}},714:function(n,e,t){t(20),n.exports=function(n){return t.e(22676092666560,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(548)})})}},344:function(n,e,t){(function(n){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0,e.publicLoader=void 0;var a=t(1),r=(o(a),t(546)),u=o(r),i=t(159),s=o(i),c=t(345),l=o(c),f=void 0,p={},d={},h={},m={},g={},y=[],v=[],x={},R="",w=[],b={},_=function(n){return n&&n.default||n},P=void 0,C=!0,N=[],k={},j={},E=5;P=t(549)({getNextQueuedResources:function(){return w.slice(-1)[0]},createResourceDownload:function(n){S(n,function(){w=w.filter(function(e){return e!==n}),P.onResourcedFinished(n)})}}),s.default.on("onPreLoadPageResources",function(n){P.onPreLoadPageResources(n)}),s.default.on("onPostLoadPageResources",function(n){P.onPostLoadPageResources(n)});var O=function(n,e){return b[n]>b[e]?1:b[n]<b[e]?-1:0},L=function(n,e){return x[n]>x[e]?1:x[n]<x[e]?-1:0},S=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(m[e])n.nextTick(function(){t(null,m[e])});else{var o=void 0;o="component---"===e.slice(0,12)?d.components[e]:"layout---"===e.slice(0,9)?d.layouts[e]:d.json[e],o(function(n,o){m[e]=o,N.push({resource:e,succeeded:!n}),j[e]||(j[e]=n),N=N.slice(-E),t(n,o)})}},T=function(e,t){g[e]?n.nextTick(function(){t(null,g[e])}):j[e]?n.nextTick(function(){t(j[e])}):S(e,function(n,o){if(n)t(n);else{var a=_(o());g[e]=a,t(n,a)}})},A=function(){var n=navigator.onLine;if("boolean"==typeof n)return n;var e=N.find(function(n){return n.succeeded});return!!e},D=function(n,e){console.log(e),k[n]||(k[n]=e),A()&&window.location.pathname.replace(/\/$/g,"")!==n.replace(/\/$/g,"")&&(window.location.pathname=n)},U=1,M={empty:function(){v=[],x={},b={},w=[],y=[],R=""},addPagesArray:function(n){y=n,f=(0,u.default)(n,R)},addDevRequires:function(n){p=n},addProdRequires:function(n){d=n},dequeue:function(){return v.pop()},enqueue:function(n){var e=(0,l.default)(n,R);if(!y.some(function(n){return n.path===e}))return!1;var t=1/U;U+=1,x[e]?x[e]+=1:x[e]=1,M.has(e)||v.unshift(e),v.sort(L);var o=f(e);return o.jsonName&&(b[o.jsonName]?b[o.jsonName]+=1+t:b[o.jsonName]=1+t,w.indexOf(o.jsonName)!==-1||m[o.jsonName]||w.unshift(o.jsonName)),o.componentChunkName&&(b[o.componentChunkName]?b[o.componentChunkName]+=1+t:b[o.componentChunkName]=1+t,w.indexOf(o.componentChunkName)!==-1||m[o.jsonName]||w.unshift(o.componentChunkName)),w.sort(O),P.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:w,resourcesCount:b}},getPages:function(){return{pathArray:v,pathCount:x}},getPage:function(n){return f(n)},has:function(n){return v.some(function(e){return e===n})},getResourcesForPathname:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};C&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(f(e)||navigator.serviceWorker.getRegistrations().then(function(n){if(n.length){for(var e=n,t=Array.isArray(e),o=0,e=t?e:e[Symbol.iterator]();;){var a;if(t){if(o>=e.length)break;a=e[o++]}else{if(o=e.next(),o.done)break;a=o.value}var r=a;r.unregister()}window.location.reload()}})),C=!1;if(k[e])return D(e,'Previously detected load failure for "'+e+'"'),t();var o=f(e);if(!o)return D(e,"A page wasn't found for \""+e+'"'),t();if(e=o.path,h[e])return n.nextTick(function(){t(h[e]),s.default.emit("onPostLoadPageResources",{page:o,pageResources:h[e]})}),h[e];s.default.emit("onPreLoadPageResources",{path:e});var a=void 0,r=void 0,u=void 0,i=function(){if(a&&r&&(!o.layoutComponentChunkName||u)){h[e]={component:a,json:r,layout:u,page:o};var n={component:a,json:r,layout:u,page:o};t(n),s.default.emit("onPostLoadPageResources",{page:o,pageResources:n})}};return T(o.componentChunkName,function(n,e){n&&D(o.path,"Loading the component for "+o.path+" failed"),a=e,i()}),T(o.jsonName,function(n,e){n&&D(o.path,"Loading the JSON for "+o.path+" failed"),r=e,i()}),void(o.layoutComponentChunkName&&T(o.layout,function(n,e){n&&D(o.path,"Loading the Layout for "+o.path+" failed"),u=e,i()}))},peek:function(n){return v.slice(-1)[0]},length:function(){return v.length},indexOf:function(n){return v.length-v.indexOf(n)-1}};e.publicLoader={getResourcesForPathname:M.getResourcesForPathname};e.default=M}).call(e,t(46))},768:function(n,e){n.exports=[{componentChunkName:"component---node-modules-gatsby-plugin-offline-app-shell-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-tsx",jsonName:"offline-plugin-app-shell-fallback.json",path:"/offline-plugin-app-shell-fallback/"},{componentChunkName:"component---src-pages-404-tsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-tsx",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-about-tsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-tsx",jsonName:"about.json",path:"/about/"},{componentChunkName:"component---src-pages-index-tsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-tsx",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-repositories-tsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-tsx",jsonName:"repositories.json",path:"/repositories/"},{componentChunkName:"component---src-pages-tags-tsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-tsx",jsonName:"tags.json",path:"/tags/"},{componentChunkName:"component---src-pages-404-tsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-tsx",jsonName:"404-html.json",path:"/404.html"},{componentChunkName:"component---src-templates-post-tsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-tsx",jsonName:"non-blocking-queue.json",path:"/non-blocking-queue"},{componentChunkName:"component---src-templates-post-tsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-tsx",jsonName:"monads.json",path:"/monads"},{componentChunkName:"component---src-templates-tags-tsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-tsx",jsonName:"tags-non-blocking.json",path:"/tags/non-blocking/"},{componentChunkName:"component---src-templates-tags-tsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-tsx",jsonName:"tags-queue.json",path:"/tags/queue/"},{componentChunkName:"component---src-templates-tags-tsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-tsx",jsonName:"tags-scala.json",path:"/tags/scala/"},{componentChunkName:"component---src-templates-tags-tsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-tsx",jsonName:"tags-monads.json",path:"/tags/monads/"}]},549:function(n,e){"use strict";n.exports=function(n){var e=n.getNextQueuedResources,t=n.createResourceDownload,o=[],a=[],r=function(){var n=e();n&&(a.push(n),t(n))},u=function(n){switch(n.type){case"RESOURCE_FINISHED":a=a.filter(function(e){return e!==n.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(n.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(e){return e!==n.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===a.length&&0===o.length&&r()},0)};return{onResourcedFinished:function(n){u({type:"RESOURCE_FINISHED",payload:n})},onPreLoadPageResources:function(n){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:n})},onPostLoadPageResources:function(n){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:n})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:a}},empty:function(){o=[],a=[]}}}},0:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var a=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},r=t(216),u=t(1),i=o(u),s=t(38),c=o(s),l=t(212),f=t(745),p=t(690),d=o(p),h=t(252),m=t(547),g=o(m),y=t(159),v=o(y),x=t(768),R=o(x),w=t(769),b=o(w),_=t(545),P=o(_),C=t(544),N=o(C),k=t(344),j=o(k);t(583),window.___history=g.default,window.___emitter=v.default,j.default.addPagesArray(R.default),j.default.addProdRequires(N.default),window.asyncRequires=N.default,window.___loader=j.default,window.matchPath=l.matchPath;var E=b.default.reduce(function(n,e){return n[e.fromPath]=e,n},{}),O=function(n){var e=E[n];return null!=e&&(g.default.replace(e.toPath),!0)};O(window.location.pathname),(0,r.apiRunnerAsync)("onClientEntry").then(function(){function n(n){window.___history&&s!==!1||(window.___history=n,s=!0,n.listen(function(n,e){O(n.pathname)||setTimeout(function(){(0,r.apiRunner)("onRouteUpdate",{location:n,action:e})},0)}))}function e(n,e){var t=e.location.pathname,o=(0,r.apiRunner)("shouldUpdateScroll",{prevRouterProps:n,pathname:t});if(o.length>0)return o[0];if(n){var a=n.location.pathname;if(a===t)return!1}return!0}(0,r.apiRunner)("registerServiceWorker").length>0&&t(550);var o=function(n){function e(n){n.page.path===j.default.getPage(o).path&&(v.default.off("onPostLoadPageResources",e),clearTimeout(u),window.___history.push(t))}var t=(0,h.createLocation)(n,null,null,g.default.location),o=t.pathname,a=E[o];a&&(o=a.toPath);var r=window.location;if(r.pathname!==t.pathname||r.search!==t.search||r.hash!==t.hash){var u=setTimeout(function(){v.default.off("onPostLoadPageResources",e),v.default.emit("onDelayedLoadPageResources",{pathname:o}),window.___history.push(t)},1e3);j.default.getResourcesForPathname(o)?(clearTimeout(u),window.___history.push(t)):v.default.on("onPostLoadPageResources",e)}};window.___navigateTo=o,(0,r.apiRunner)("onRouteUpdate",{location:g.default.location,action:g.default.action});var s=!1,p=(0,r.apiRunner)("replaceRouterComponent",{history:g.default})[0],m=function(n){var e=n.children;return i.default.createElement(l.Router,{history:g.default},e)},y=(0,l.withRouter)(P.default);j.default.getResourcesForPathname(window.location.pathname,function(){var t=function(){return(0,u.createElement)(p?p:m,null,(0,u.createElement)(f.ScrollContext,{shouldUpdateScroll:e},(0,u.createElement)(y,{layout:!0,children:function(e){return(0,u.createElement)(l.Route,{render:function(t){n(t.history);var o=e?e:t;return j.default.getPage(o.location.pathname)?(0,u.createElement)(P.default,a({page:!0},o)):(0,u.createElement)(P.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},o=(0,r.apiRunner)("wrapRootComponent",{Root:t},t)[0];(0,d.default)(function(){return c.default.render(i.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,r.apiRunner)("onInitialClientRender")})})})})},769:function(n,e){n.exports=[]},550:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var a=t(159),r=o(a),u="/";"serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(n){n.addEventListener("updatefound",function(){var e=n.installing;console.log("installingWorker",e),e.addEventListener("statechange",function(){switch(e.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),r.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(n){console.error("Error during service worker registration:",n)})},345:function(n,e){"use strict";e.__esModule=!0,e.default=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return n.substr(0,e.length)===e?n.slice(e.length):n},n.exports=e.default},690:function(n,e,t){!function(e,t){n.exports=t()}("domready",function(){var n,e=[],t=document,o=t.documentElement.doScroll,a="DOMContentLoaded",r=(o?/^loaded|^c/:/^loaded|^i|^c/).test(t.readyState);return r||t.addEventListener(a,n=function(){for(t.removeEventListener(a,n),r=1;n=e.shift();)n()}),function(n){r?setTimeout(n,0):e.push(n)}})},20:function(n,e,t){"use strict";function o(){function n(n){var e=o.lastChild;return"SCRIPT"!==e.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",e)):void(e.onload=e.onerror=function(){e.onload=e.onerror=null,setTimeout(n,0)})}var e,o=document.querySelector("head"),a=t.e,r=t.s;t.e=function(o,u){var i=!1,s=!0,c=function(n){u&&(u(t,n),u=null)};return!r&&e&&e[o]?void c(!0):(a(o,function(){i||(i=!0,s?setTimeout(function(){c()}):c())}),void(i||(s=!1,n(function(){i||(i=!0,r?r[o]=void 0:(e||(e={}),e[o]=!0),c(!0))}))))}}o()},736:function(n,e,t){"use strict";var o=t(93);n.exports=function(n,e){n.addEventListener("click",function(n){if(0!==n.button||n.altKey||n.ctrlKey||n.metaKey||n.shiftKey||n.defaultPrevented)return!0;for(var t=null,a=n.target;a.parentNode;a=a.parentNode)if("A"===a.nodeName){t=a;break}if(!t)return!0;if(t.target&&"_self"!==t.target.toLowerCase())return!0;if(t.pathname===window.location.pathname&&""!==t.hash)return!0;if(""===t.pathname)return!0;if(t.pathname.search(/^.*\.((?!htm)[a-z0-9]{1,5})$/i)!==-1)return!0;var r=document.createElement("a");r.href=t.href;var u=document.createElement("a");if(u.href=window.location.href,r.host!==u.host)return!0;var i=new RegExp("^"+u.host+(0,o.withPrefix)("/"));return!i.test(""+r.host+r.pathname)||(n.preventDefault(),e(t.getAttribute("href")),!1)})}},737:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var a=t(93),r=t(736),u=o(r);e.onClientEntry=function(){(0,u.default)(window,function(n){(0,a.navigateTo)(n)})}},738:function(n,e,t){"use strict";e.onRouteUpdate=function(n){var e=n.location;"function"==typeof ga&&(window.ga("set","page",e?e.pathname+e.search+e.hash:void 0),window.ga("send","pageview"))}},713:function(n,e,t){t(20),n.exports=function(n){return t.e(99219681209289,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(739)})})}},740:function(n,e){"use strict";e.registerServiceWorker=function(){return!0}},741:function(n,e){"use strict";e.onRouteUpdate=function(n){n.location;"undefined"!=typeof twttr&&window.twttr.widgets&&"function"==typeof window.twttr.widgets.load&&window.twttr.widgets.load()}},746:function(n,e,t){"use strict";var o=function(n){setTimeout(function(){var e=window.decodeURI(window.location.hash.replace("#",""));if(""!==e){var t=document.getElementById(e);if(t){var o=t.offsetTop;window.scrollTo(0,o-n)}}},10)};e.onClientEntry=function(n,e){var t=0;e.offsetY&&(t=e.offsetY)},e.onRouteUpdate=function(n,e){var t=0;e.offsetY&&(t=e.offsetY),o(t)}},1019:function(n,e){function t(n){return n=n||Object.create(null),{on:function(e,t){(n[e]||(n[e]=[])).push(t)},off:function(e,t){n[e]&&n[e].splice(n[e].indexOf(t)>>>0,1)},emit:function(e,t){(n[e]||[]).slice().map(function(n){n(t)}),(n["*"]||[]).slice().map(function(n){n(e,t)})}}}n.exports=t},1248:function(n,e){"use strict";function t(n,e){for(var t in n)if(!(t in e))return!0;for(var o in e)if(n[o]!==e[o])return!0;return!1}e.__esModule=!0,e.default=function(n,e,o){return t(n.props,e)||t(n.state,o)},n.exports=e.default},715:function(n,e,t){t(20),n.exports=function(n){return t.e(0xa25129398ba8,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(563)})})}},716:function(n,e,t){t(20),n.exports=function(n){return t.e(0x8682650a63cd,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(564)})})}},717:function(n,e,t){t(20),n.exports=function(n){return t.e(0xc956abe28b23,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(565)})})}},718:function(n,e,t){t(20),n.exports=function(n){return t.e(0xa697b2ee5736,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(566)})})}},719:function(n,e,t){t(20),n.exports=function(n){return t.e(88133074308889,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(567)})})}},720:function(n,e,t){t(20),n.exports=function(n){return t.e(30862416422887,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(569)})})}},721:function(n,e,t){t(20),n.exports=function(n){return t.e(0xf45758681e52,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(570)})})}}});
//# sourceMappingURL=app-86afbf27fa68e735b051.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[449,73],{532:function(e,t,n){"use strict";var a=n(3),r=n(8),o=n(0),c=n.n(o),l=n(25),i=n(16),u=n(23),s=n(531),h=n(529),d=n(24),m=n(533),f=n(695),b=n(696),p=n(540),O=n(7),j=n(528),g=null,v=["1.x","2.x","3.x","4.x","6.x"];function E(e){var t=e.hit,n=e.children;return c.a.createElement(h.a,{to:t.url},n)}function k(e){var t=e.state,n=e.onClose,a=Object(m.a)().generateSearchPageLink;return c.a.createElement(h.a,{to:a(t.query),onClick:n},"See all ",t.context.nbHits," results")}function C(e){var t,h,m,O,C=e.contextualSearch,w=Object(r.a)(e,["contextualSearch"]),x=Object(i.default)().siteMetadata,S=Object(p.a)(),P=null!==(t=null===(h=w.searchParameters)||void 0===h?void 0:h.facetFilters)&&void 0!==t?t:[],F=C?[].concat(S,P):P,y=(m=window.location.href,(O=v.findIndex((function(e){return m.includes(e)})))>=0?v[O]:"5.x");F=[].concat(F,["version:"+y]);var N=Object.assign({},w.searchParameters,{facetFilters:F}),R=Object(s.b)().withBaseUrl,T=Object(u.useHistory)(),A=Object(o.useRef)(null),I=Object(o.useRef)(null),M=Object(o.useState)(!1),B=M[0],U=M[1],L=Object(o.useState)(null),D=L[0],H=L[1],J=Object(o.useCallback)((function(){return g?Promise.resolve():Promise.all([n.e(450).then(n.bind(null,539)),Promise.all([n.e(0),n.e(451)]).then(n.bind(null,538)),n.e(0).then(n.t.bind(null,60,7))]).then((function(e){var t=e[0].DocSearchModal;g=t}))}),[]),V=Object(o.useCallback)((function(){J().then((function(){A.current=document.createElement("div"),document.body.insertBefore(A.current,document.body.firstChild),U(!0)}))}),[J,U]),Y=Object(o.useCallback)((function(){U(!1),A.current.remove()}),[U]),_=Object(o.useCallback)((function(e){J().then((function(){U(!0),H(e.key)}))}),[J,U,H]),q=Object(o.useRef)({navigate:function(e){var t=e.itemUrl;T.push(t)}}).current,Q=Object(o.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:R(""+t.pathname+t.hash)})}))})).current,W=Object(o.useMemo)((function(){return function(e){return c.a.createElement(k,Object(a.a)({},e,{onClose:Y}))}}),[Y]),z=Object(o.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",x.docusaurusVersion),e}),[x.docusaurusVersion]);Object(f.a)({isOpen:B,onOpen:V,onClose:Y,onInput:_,searchButtonRef:I});var G=Object(j.b)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return c.a.createElement(c.a.Fragment,null,c.a.createElement(d.a,null,c.a.createElement("link",{rel:"preconnect",href:"https://"+w.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),c.a.createElement(b.a,{onTouchStart:J,onFocus:J,onMouseOver:J,onClick:V,ref:I,translations:{buttonText:G,buttonAriaLabel:G}}),B&&Object(l.createPortal)(c.a.createElement(g,Object(a.a)({onClose:Y,initialScrollY:window.scrollY,initialQuery:D,navigator:q,transformItems:Q,hitComponent:E,resultsFooterComponent:W,transformSearchClient:z},w,{searchParameters:N})),A.current))}t.a=function(){if(!O.a.canUseDOM)return null;var e=Object(i.default)().siteConfig;return c.a.createElement(C,e.themeConfig.algolia)}},592:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(536),c=n(528);t.default=function(){return r.a.createElement(o.a,{title:"Page Not Found"},r.a.createElement("main",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},r.a.createElement(c.a,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),r.a.createElement("p",null,r.a.createElement(c.a,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),r.a.createElement("p",null,r.a.createElement(c.a,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);
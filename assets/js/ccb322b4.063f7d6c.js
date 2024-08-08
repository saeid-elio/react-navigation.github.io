"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[27493],{71189:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var r=t(85893),o=t(11151),a=t(74866),i=t(85162);const s={id:"server-rendering",title:"Server rendering",sidebar_label:"Server rendering"},l=void 0,c={id:"server-rendering",title:"Server rendering",description:"This guide will cover how to server render your React Native app using React Native for Web and React Navigation. We'll cover the following cases:",source:"@site/versioned_docs/version-7.x/server-rendering.md",sourceDirName:".",slug:"/server-rendering",permalink:"/docs/7.x/server-rendering",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-7.x/server-rendering.md",tags:[],version:"7.x",frontMatter:{id:"server-rendering",title:"Server rendering",sidebar_label:"Server rendering"},sidebar:"docs",previous:{title:"Web support",permalink:"/docs/7.x/web-support"},next:{title:"Screen tracking",permalink:"/docs/7.x/screen-tracking"}},d={},u=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Rendering the app",id:"rendering-the-app",level:2},{value:"Handling 404 or other status codes",id:"handling-404-or-other-status-codes",level:2},{value:"Summary",id:"summary",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"This guide will cover how to server render your React Native app using React Native for Web and React Navigation. We'll cover the following cases:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Rendering the correct layout depending on the request URL"}),"\n",(0,r.jsx)(n.li,{children:"Setting appropriate page metadata based on the focused screen"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"::: warning"}),"\n",(0,r.jsx)(n.p,{children:"Server rendering support is currently limited. It's not possible to provide a seamless SSR experience due to a lack of APIs such as media queries. In addition, many third-party libraries often don't work well with server rendering."}),"\n",(0,r.jsx)(n.p,{children:":::"}),"\n",(0,r.jsx)(n.h2,{id:"pre-requisites",children:"Pre-requisites"}),"\n",(0,r.jsx)(n.p,{children:"Before you follow the guide, make sure that your app already renders fine on server. To do that, you will need to ensure the following:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["All of the dependencies that you use are ",(0,r.jsx)(n.a,{href:"https://github.com/react-native-community/bob",children:"compiled before publishing"})," to npm, so that you don't get syntax errors on Node."]}),"\n",(0,r.jsxs)(n.li,{children:["Node is configured to be able to ",(0,r.jsx)(n.code,{children:"require"})," asset files such as images and fonts. You can try ",(0,r.jsx)(n.a,{href:"https://github.com/catamphetamine/webpack-isomorphic-tools",children:"webpack-isomorphic-tools"})," to do that."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"react-native"})," is aliased to ",(0,r.jsx)(n.code,{children:"react-native-web"}),". You can do it with ",(0,r.jsx)(n.a,{href:"https://github.com/tleunen/babel-plugin-module-resolver",children:"babel-plugin-module-resolver"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"rendering-the-app",children:"Rendering the app"}),"\n",(0,r.jsxs)(n.p,{children:["First, let's take a look at an example of how you'd do ",(0,r.jsx)(n.a,{href:"http://necolas.github.io/react-native-web/docs/?path=/docs/guides-server-side--page",children:"server rendering with React Native Web"})," without involving React Navigation:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'import { AppRegistry } from \'react-native-web\';\nimport ReactDOMServer from \'react-dom/server\';\nimport App from \'./src/App\';\n\nconst { element, getStyleElement } = AppRegistry.getApplication(\'App\');\n\nconst html = ReactDOMServer.renderToString(element);\nconst css = ReactDOMServer.renderToStaticMarkup(getStyleElement());\n\nconst document = `\n  <!DOCTYPE html>\n  <html style="height: 100%">\n  <meta charset="utf-8">\n  <meta httpEquiv="X-UA-Compatible" content="IE=edge">\n  <meta\n    name="viewport"\n    content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1.00001, viewport-fit=cover"\n  >\n  ${css}\n  <body style="min-height: 100%">\n  <div id="root" style="display: flex; min-height: 100vh">\n  ${html}\n  </div>\n`;\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Here, ",(0,r.jsx)(n.code,{children:"./src/App"})," is the file where you have ",(0,r.jsx)(n.code,{children:"AppRegistry.registerComponent('App', () => App)"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["If you're using React Navigation in your app, this will render the screens rendered by your home page. However, if you have ",(0,r.jsx)(n.a,{href:"/docs/7.x/configuring-links",children:"configured links"})," in your app, you'd want to render the correct screens for the request URL on server so that it matches what'll be rendered on the client."]}),"\n",(0,r.jsxs)(n.p,{children:["We can use the ",(0,r.jsx)(n.a,{href:"/docs/7.x/server-container",children:(0,r.jsx)(n.code,{children:"ServerContainer"})})," to do that by passing this info in the ",(0,r.jsx)(n.code,{children:"location"})," prop. For example, with Koa, you can use the ",(0,r.jsx)(n.code,{children:"path"})," and ",(0,r.jsx)(n.code,{children:"search"})," properties from the context argument:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'app.use(async (ctx) => {\n  const location = new URL(ctx.url, \'https://example.org/\');\n\n  const { element, getStyleElement } = AppRegistry.getApplication(\'App\');\n\n  const html = ReactDOMServer.renderToString(\n    <ServerContainer location={location}>{element}</ServerContainer>\n  );\n\n  const css = ReactDOMServer.renderToStaticMarkup(getStyleElement());\n\n  const document = `\n    <!DOCTYPE html>\n    <html style="height: 100%">\n    <meta charset="utf-8">\n    <meta httpEquiv="X-UA-Compatible" content="IE=edge">\n    <meta\n      name="viewport"\n      content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1.00001, viewport-fit=cover"\n    >\n    ${css}\n    <body style="min-height: 100%">\n    <div id="root" style="display: flex; min-height: 100vh">\n    ${html}\n    </div>\n`;\n\n  ctx.body = document;\n});\n'})}),"\n",(0,r.jsxs)(n.p,{children:["You may also want to set the correct document title and descriptions for search engines, open graph etc. To do that, you can pass a ",(0,r.jsx)(n.code,{children:"ref"})," to the container which will give you the current screen's options."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'app.use(async (ctx) => {\n  const location = new URL(ctx.url, \'https://example.org/\');\n\n  const { element, getStyleElement } = AppRegistry.getApplication(\'App\');\n\n  const ref = React.createRef<ServerContainerRef>();\n\n  const html = ReactDOMServer.renderToString(\n    <ServerContainer\n      ref={ref}\n      location={location}\n    >\n      {element}\n    </ServerContainer>\n  );\n\n  const css = ReactDOMServer.renderToStaticMarkup(getStyleElement());\n\n  const options = ref.current?.getCurrentOptions();\n\n  const document = `\n    <!DOCTYPE html>\n    <html style="height: 100%">\n    <meta charset="utf-8">\n    <meta httpEquiv="X-UA-Compatible" content="IE=edge">\n    <meta\n      name="viewport"\n      content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1.00001, viewport-fit=cover"\n    >\n    ${css}\n    <title>${options.title}</title>\n    <body style="min-height: 100%">\n    <div id="root" style="display: flex; min-height: 100vh">\n    ${html}\n    </div>\n`;\n\n  ctx.body = document;\n});\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Make sure that you have specified a ",(0,r.jsx)(n.code,{children:"title"})," option for your screens:"]}),"\n",(0,r.jsxs)(a.Z,{groupId:"config",queryString:"config",children:[(0,r.jsx)(i.Z,{value:"static",label:"Static",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const Stack = createNativeStackNavigator({\n  screens: {\n    Home: {\n      screen: HomeScreen,\n      options: {\n        // highlight-next-line\n        title: 'My App',\n      },\n    },\n    Profile: {\n      screen: ProfileScreen,\n      options: ({ route }) => ({\n        // highlight-next-line\n        title: `${route.params.name}'s Profile`,\n      }),\n    },\n  },\n});\n"})})}),(0,r.jsx)(i.Z,{value:"dynamic",label:"Dynamic",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'<Stack.Navigator>\n  <Stack.Screen\n    name="Home"\n    component={HomeScreen}\n    options={{\n      // highlight-next-line\n      title: \'My App\',\n    }}\n  />\n  <Stack.Screen\n    name="Profile"\n    component={ProfileScreen}\n    options={({ route }) => ({\n      // highlight-next-line\n      title: `${route.params.name}\'s Profile`,\n    })}\n  />\n</Stack.Navigator>\n'})})})]}),"\n",(0,r.jsx)(n.h2,{id:"handling-404-or-other-status-codes",children:"Handling 404 or other status codes"}),"\n",(0,r.jsxs)(n.p,{children:["When ",(0,r.jsx)(n.a,{href:"/docs/7.x/configuring-links#handling-unmatched-routes-or-404",children:"rendering a screen for an invalid URL"}),", we should also return a ",(0,r.jsx)(n.code,{children:"404"})," status code from the server."]}),"\n",(0,r.jsx)(n.p,{children:"First, we need to create a context where we'll attach the status code. To do this, place the following code in a separate file that we will be importing on both the server and client:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import * as React from 'react';\n\nconst StatusCodeContext = React.createContext();\n\nexport default StatusCodeContext;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Then, we need to use the context in our ",(0,r.jsx)(n.code,{children:"NotFound"})," screen. Here, we add a ",(0,r.jsx)(n.code,{children:"code"})," property with the value of ",(0,r.jsx)(n.code,{children:"404"})," to signal that the screen was not found:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"function NotFound() {\n  const status = React.useContext(StatusCodeContext);\n\n  if (status) {\n    staus.code = 404;\n  }\n\n  return (\n    <View>\n      <Text>Oops! This URL doesn't exist.</Text>\n    </View>\n  );\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"You could also attach additional information in this object if you need to."}),"\n",(0,r.jsxs)(n.p,{children:["Next, we need to create a status object to pass in the context on our server. By default, we'll set the ",(0,r.jsx)(n.code,{children:"code"})," to ",(0,r.jsx)(n.code,{children:"200"}),". Then pass the object in ",(0,r.jsx)(n.code,{children:"StatusCodeContext.Provider"})," which should wrap the element with ",(0,r.jsx)(n.code,{children:"ServerContainer"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"// Create a status object\nconst status = { code: 200 };\n\nconst html = ReactDOMServer.renderToString(\n  // Pass the status object via context\n  <StatusCodeContext.Provider value={status}>\n    <ServerContainer ref={ref} location={location}>\n      {element}\n    </ServerContainer>\n  </StatusCodeContext.Provider>\n);\n\n// After rendering, get the status code and use it for server's response\nctx.status = status.code;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["After we render the app with ",(0,r.jsx)(n.code,{children:"ReactDOMServer.renderToString"}),", the ",(0,r.jsx)(n.code,{children:"code"})," property of the ",(0,r.jsx)(n.code,{children:"status"})," object will be updated to be ",(0,r.jsx)(n.code,{children:"404"})," if the ",(0,r.jsx)(n.code,{children:"NotFound"})," screen was rendered."]}),"\n",(0,r.jsxs)(n.p,{children:["You can follow a similar approach for other status codes too, for example, ",(0,r.jsx)(n.code,{children:"401"})," for unauthorized etc."]}),"\n",(0,r.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Use the ",(0,r.jsx)(n.code,{children:"location"})," prop on ",(0,r.jsx)(n.code,{children:"ServerContainer"})," to render correct screens based on the incoming request."]}),"\n",(0,r.jsxs)(n.li,{children:["Attach a ",(0,r.jsx)(n.code,{children:"ref"})," to the ",(0,r.jsx)(n.code,{children:"ServerContainer"})," get options for the current screen."]}),"\n",(0,r.jsx)(n.li,{children:"Use context to attach more information such as status code."}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>i});t(67294);var r=t(86010);const o={tabItem:"tabItem_Ymn6"};var a=t(85893);function i(e){let{children:n,hidden:t,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>w});var r=t(67294),o=t(86010),a=t(12466),i=t(16550),s=t(20469),l=t(91980),c=t(67392),d=t(50012);function u(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=null!=n?n:function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:o}}=e;return{value:n,label:t,attributes:r,default:o}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const o=(0,i.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,l._X)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(o.location.search);n.set(a,e),o.replace({...o.location,search:n.toString()})}),[a,o])]}function v(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,a=h(e),[i,l]=(0,r.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const o=null!=(n=r.find((e=>e.default)))?n:r[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:a}))),[c,u]=m({queryString:t,groupId:o}),[v,g]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[o,a]=(0,d.Nk)(t);return[o,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:o}),x=(()=>{const e=null!=c?c:v;return p({value:e,tabValues:a})?e:null})();(0,s.Z)((()=>{x&&l(x)}),[x]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error("Can't select invalid tab value="+e);l(e),u(e),g(e)}),[u,g,a]),tabValues:a}}var g=t(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(85893);function b(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),o=s[t].value;o!==r&&(c(n),i(o))},u=e=>{var n;let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var r;const n=l.indexOf(e.currentTarget)+1;t=null!=(r=l[n])?r:l[0];break}case"ArrowLeft":{var o;const n=l.indexOf(e.currentTarget)-1;t=null!=(o=l[n])?o:l[l.length-1];break}}null==(n=t)||n.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...a,className:(0,o.Z)("tabs__item",x.tabItem,null==a?void 0:a.className,{"tabs__item--active":r===n}),children:null!=t?t:n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:o}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function y(e){const n=v(e);return(0,f.jsxs)("div",{className:(0,o.Z)("tabs-container",x.tabList),children:[(0,f.jsx)(b,{...e,...n}),(0,f.jsx)(j,{...e,...n})]})}function w(e){const n=(0,g.Z)();return(0,f.jsx)(y,{...e,children:u(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>i});var r=t(67294);const o={},a=r.createContext(o);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);
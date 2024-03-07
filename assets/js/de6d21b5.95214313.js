"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[96641],{86196:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=t(85893),o=t(11151),r=t(74866),i=t(85162);const s={id:"modal",title:"Opening a modal",sidebar_label:"Opening a modal"},l=void 0,c={id:"modal",title:"Opening a modal",description:"Modal shown on screen",source:"@site/versioned_docs/version-7.x/modal.md",sourceDirName:".",slug:"/modal",permalink:"/docs/7.x/modal",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-7.x/modal.md",tags:[],version:"7.x",frontMatter:{id:"modal",title:"Opening a modal",sidebar_label:"Opening a modal"},sidebar:"docs",previous:{title:"Different status bar configuration based on route",permalink:"/docs/7.x/status-bar"},next:{title:"Multiple drawers",permalink:"/docs/7.x/multiple-drawers"}},u={},d=[{value:"Creating a stack with modal screens",id:"creating-a-stack-with-modal-screens",level:2},{value:"Summary",id:"summary",level:2},{value:"Best practices",id:"best-practices",level:2}];function h(e){const n={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Modal shown on screen",src:t(8682).Z+"",width:"320",height:"569"})}),"\n",(0,a.jsx)(n.p,{children:"A modal displays content that temporarily blocks interactions with the main view."}),"\n",(0,a.jsx)(n.p,{children:"A modal is like a popup \u2014 it usually has a different transition animation, and is intended to focus on one particular interaction or piece of content."}),"\n",(0,a.jsx)(n.h2,{id:"creating-a-stack-with-modal-screens",children:"Creating a stack with modal screens"}),"\n",(0,a.jsxs)(r.Z,{groupId:"config",queryString:"config",children:[(0,a.jsx)(i.Z,{value:"static",label:"Static",default:!0,children:(0,a.jsx)(n.pre,{"data-name":"Modal","data-snack":"true","data-version":"7",children:(0,a.jsx)(n.code,{className:"language-js",metastring:'name="Modal" snack version=7',children:"import * as React from 'react';\nimport { View, Text, Button } from 'react-native';\nimport {\n  createStaticNavigation,\n  useNavigation,\n} from '@react-navigation/native';\nimport { createStackNavigator } from '@react-navigation/stack';\n\n// codeblock-focus-start\nfunction HomeScreen() {\n  const navigation = useNavigation();\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text style={{ fontSize: 30 }}>This is the home screen!</Text>\n      <Button\n        onPress={() => navigation.navigate('MyModal')}\n        title=\"Open Modal\"\n      />\n    </View>\n  );\n}\n\nfunction ModalScreen() {\n  const navigation = useNavigation();\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text style={{ fontSize: 30 }}>This is a modal!</Text>\n      <Button onPress={() => navigation.goBack()} title=\"Dismiss\" />\n    </View>\n  );\n}\n\nfunction DetailsScreen() {\n  return (\n    <View>\n      <Text>Details</Text>\n    </View>\n  );\n}\n\nconst HomeStack = createStackNavigator({\n  screens: {\n    Home: {\n      screen: HomeScreen,\n      options: {\n        headerShown: false,\n      },\n    },\n    Details: {\n      screen: DetailsScreen,\n      options: {\n        headerShown: false,\n      },\n    },\n  },\n});\n\nconst RootStack = createStackNavigator({\n  screens: {},\n  groups: {\n    Home: {\n      screens: {\n        App: {\n          screen: HomeStack,\n          options: { title: 'My App' },\n        },\n      },\n    },\n    // highlight-start\n    Modal: {\n      screenOptions: {\n        presentation: 'modal',\n      },\n      screens: {\n        MyModal: ModalScreen,\n      },\n    },\n    // highlight-end\n  },\n});\n\nconst Navigation = createStaticNavigation(RootStack);\n\nexport default function App() {\n  return <Navigation />;\n}\n// codeblock-focus-end\n"})})}),(0,a.jsxs)(i.Z,{value:"dynamic",label:"Dynamic",children:[(0,a.jsx)(n.pre,{"data-name":"Modal","data-snack":"true","data-version":"7",children:(0,a.jsx)(n.code,{className:"language-js",metastring:'name="Modal" snack version=7',children:"import * as React from 'react';\nimport { View, Text, Button } from 'react-native';\nimport { NavigationContainer, useNavigation } from '@react-navigation/native';\nimport { createStackNavigator } from '@react-navigation/stack';\n\n// codeblock-focus-start\nfunction HomeScreen() {\n  const navigation = useNavigation();\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text style={{ fontSize: 30 }}>This is the home screen!</Text>\n      <Button\n        onPress={() => navigation.navigate('MyModal')}\n        title=\"Open Modal\"\n      />\n    </View>\n  );\n}\n\nfunction ModalScreen() {\n  const navigation = useNavigation();\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text style={{ fontSize: 30 }}>This is a modal!</Text>\n      <Button onPress={() => navigation.goBack()} title=\"Dismiss\" />\n    </View>\n  );\n}\n\nfunction DetailsScreen() {\n  return (\n    <View>\n      <Text>Details</Text>\n    </View>\n  );\n}\n\nconst RootStack = createStackNavigator();\n\nfunction App() {\n  return (\n    <NavigationContainer>\n      <RootStack.Navigator>\n        <RootStack.Group>\n          <RootStack.Screen name=\"Home\" component={HomeScreen} />\n          <RootStack.Screen name=\"Details\" component={DetailsScreen} />\n        </RootStack.Group>\n        // highlight-start\n        <RootStack.Group screenOptions={{ presentation: 'modal' }}>\n          <RootStack.Screen name=\"MyModal\" component={ModalScreen} />\n        </RootStack.Group>\n        // highlight-end\n      </RootStack.Navigator>\n    </NavigationContainer>\n  );\n}\n// codeblock-focus-end\n\nexport default App;\n"})}),(0,a.jsx)("div",{style:{display:"flex",margin:"16px 0"},children:(0,a.jsx)("video",{playsInline:!0,autoPlay:!0,muted:!0,loop:!0,style:{maxWidth:"280px"},children:(0,a.jsx)("source",{src:"/assets/modal/modal.mp4"})})})]})]}),"\n",(0,a.jsxs)(n.p,{children:["Here, we are creating 2 groups of screens using the ",(0,a.jsx)(n.code,{children:"RootStack.Group"})," component. The first group is for our regular screens, and the second group is for our modal screens. For the modal group, we have specified ",(0,a.jsx)(n.code,{children:"presentation: 'modal'"})," in ",(0,a.jsx)(n.code,{children:"screenOptions"}),". This will apply this option to all the screens inside the group. This option will change the animation for the screens to animate from bottom-to-top rather than right to left. The ",(0,a.jsx)(n.code,{children:"presentation"})," option for stack navigator can be either ",(0,a.jsx)(n.code,{children:"card"})," (default) or ",(0,a.jsx)(n.code,{children:"modal"}),". The ",(0,a.jsx)(n.code,{children:"modal"})," behavior slides the screen in from the bottom and allows the user to swipe down from the top to dismiss it on iOS."]}),"\n",(0,a.jsxs)(n.p,{children:["Instead of specifying this option for a group, it's also possible to specify it for a single screen using the ",(0,a.jsx)(n.code,{children:"options"})," prop on ",(0,a.jsx)(n.code,{children:"RootStack.Screen"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["To change the type of transition on a stack navigator you can use the ",(0,a.jsx)(n.code,{children:"presentation"})," option."]}),"\n",(0,a.jsxs)(n.li,{children:["When ",(0,a.jsx)(n.code,{children:"presentation"})," is set to ",(0,a.jsx)(n.code,{children:"modal"}),", the screens behave like a modal, i.e. they have a bottom to top transition and may show part of the previous screen in the background."]}),"\n",(0,a.jsxs)(n.li,{children:["Setting ",(0,a.jsx)(n.code,{children:"presentation: 'modal'"})," on a group makes all the screens in the group modals, so to use non-modal transitions on other screens, we add another group with the default configuration."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"best-practices",children:"Best practices"}),"\n",(0,a.jsx)(n.p,{children:"Since modals are intended to be on top of other content, there are a couple of things to keep in mind when using modals:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Avoid nesting them inside other navigators like tab or drawer. Modal screens should be defined as part of the root stack."}),"\n",(0,a.jsx)(n.li,{children:"Modal screens should be the last in the stack - avoid pushing regular screens on top of modals."}),"\n",(0,a.jsx)(n.li,{children:"The first screen in a stack appears as a regular screen even if configured as a modal, since there is no screen before it to show behind. So always make sure that modal screens are pushed on top of a regular screen or another modal screen."}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>i});t(67294);var a=t(86010);const o={tabItem:"tabItem_Ymn6"};var r=t(85893);function i(e){let{children:n,hidden:t,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>y});var a=t(67294),o=t(86010),r=t(12466),i=t(16550),s=t(20469),l=t(91980),c=t(67392),u=t(50012);function d(e){var n,t;return null!=(n=null==(t=a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=null!=n?n:function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:o}}=e;return{value:n,label:t,attributes:a,default:o}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const o=(0,i.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,l._X)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(o.location.search);n.set(r,e),o.replace({...o.location,search:n.toString()})}),[r,o])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,r=h(e),[i,l]=(0,a.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const o=null!=(n=a.find((e=>e.default)))?n:a[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:r}))),[c,d]=p({queryString:t,groupId:o}),[f,g]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[o,r]=(0,u.Nk)(t);return[o,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:o}),v=(()=>{const e=null!=c?c:f;return m({value:e,tabValues:r})?e:null})();(0,s.Z)((()=>{v&&l(v)}),[v]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error("Can't select invalid tab value="+e);l(e),d(e),g(e)}),[d,g,r]),tabValues:r}}var g=t(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(85893);function x(e){let{className:n,block:t,selectedValue:a,selectValue:i,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),o=s[t].value;o!==a&&(c(n),i(o))},d=e=>{var n;let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{var a;const n=l.indexOf(e.currentTarget)+1;t=null!=(a=l[n])?a:l[0];break}case"ArrowLeft":{var o;const n=l.indexOf(e.currentTarget)-1;t=null!=(o=l[n])?o:l[l.length-1];break}}null==(n=t)||n.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...r,className:(0,o.Z)("tabs__item",v.tabItem,null==r?void 0:r.className,{"tabs__item--active":a===n}),children:null!=t?t:n},n)}))})}function k(e){let{lazy:n,children:t,selectedValue:o}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function w(e){const n=f(e);return(0,b.jsxs)("div",{className:(0,o.Z)("tabs-container",v.tabList),children:[(0,b.jsx)(x,{...e,...n}),(0,b.jsx)(k,{...e,...n})]})}function y(e){const n=(0,g.Z)();return(0,b.jsx)(w,{...e,children:d(e.children)},String(n))}},8682:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/modal-demo-c21e394139257ff16390d46aa6ba5bc2.gif"},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>i});var a=t(67294);const o={},r=a.createContext(o);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);
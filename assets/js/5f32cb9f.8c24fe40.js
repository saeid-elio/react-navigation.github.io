"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[8596],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,v=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(v,i(i({ref:t},c),{},{components:n})):a.createElement(v,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(87462),r=n(67294),o=n(72389),i=n(79443);var l=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(99558),u=n(86010),c="tabItem_1uMI";function p(e){var t,n,a,o=e.lazy,i=e.block,p=e.defaultValue,d=e.values,m=e.groupId,v=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"string"==typeof e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=d?d:h.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),f=(0,s.lx)(g,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===p?p:null!=(t=null!=p?p:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=h[0])?void 0:a.props.value;if(null!==k&&!g.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=l(),b=y.tabGroupChoices,N=y.setTabGroupChoices,w=(0,r.useState)(k),x=w[0],C=w[1],j=[],T=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var O=b[m];null!=O&&O!==x&&g.some((function(e){return e.value===O}))&&C(O)}var I=function(e){var t=e.currentTarget,n=j.indexOf(t),a=g[n].value;a!==x&&(T(t),C(a),null!=m&&N(m,a))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=j.indexOf(e.currentTarget)+1;n=j[a]||j[0];break;case"ArrowLeft":var r=j.indexOf(e.currentTarget)-1;n=j[r]||j[j.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":i},v)},g.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,className:(0,u.Z)("tabs__item",c,{"tabs__item--active":x===t}),key:t,ref:function(e){return j.push(e)},onKeyDown:E,onFocus:I,onClick:I},null!=n?n:t)}))),o?(0,r.cloneElement)(h.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function d(e){var t=(0,o.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},79443:function(e,t,n){var a=(0,n(67294).createContext)(void 0);t.Z=a},19301:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return v}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=n(55064),l=n(58215),s=["components"],u={id:"getting-started",title:"Getting started",sidebar_label:"Getting started"},c=void 0,p={unversionedId:"getting-started",id:"version-6.x/getting-started",isDocsHomePage:!1,title:"Getting started",description:"What follows within the Fundamentals section of this documentation is a tour of the most important aspects of React Navigation. It should cover enough for you to know how to build your typical small mobile application, and give you the background that you need to dive deeper into the more advanced parts of React Navigation.",source:"@site/versioned_docs/version-6.x/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/docs/getting-started",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/getting-started.md",tags:[],version:"6.x",frontMatter:{id:"getting-started",title:"Getting started",sidebar_label:"Getting started"},sidebar:"version-6.x/docs",next:{title:"Hello React Navigation",permalink:"/docs/hello-react-navigation"}},d=[{value:"Pre-requisites",id:"pre-requisites",children:[],level:2},{value:"Minimum requirements",id:"minimum-requirements",children:[],level:2},{value:"Installation",id:"installation",children:[{value:"Installing dependencies into an Expo managed project",id:"installing-dependencies-into-an-expo-managed-project",children:[],level:3},{value:"Installing dependencies into a bare React Native project",id:"installing-dependencies-into-a-bare-react-native-project",children:[],level:3}],level:2},{value:"Wrapping your app in <code>NavigationContainer</code>",id:"wrapping-your-app-in-navigationcontainer",children:[],level:2}],m={toc:d};function v(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"What follows within the ",(0,o.kt)("em",{parentName:"p"},"Fundamentals")," section of this documentation is a tour of the most important aspects of React Navigation. It should cover enough for you to know how to build your typical small mobile application, and give you the background that you need to dive deeper into the more advanced parts of React Navigation."),(0,o.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,o.kt)("p",null,"If you're already familiar with JavaScript, React and React Native, then you'll be able to get moving with React Navigation quickly! If not, we highly recommend you to gain some basic knowledge first, then come back here when you're done."),(0,o.kt)("p",null,"Here are some resources to help you out:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"http://reactnativeexpress.com/"},"React Native Express")," (Sections 1 to 4)"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/hello-world.html"},"Main Concepts of React")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/hooks-intro.html"},"React Hooks")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/context.html"},"React Context")," (Advanced)")),(0,o.kt)("h2",{id:"minimum-requirements"},"Minimum requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"react-native")," >= 0.63.0"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"expo")," >= 41 (if you use ",(0,o.kt)("a",{parentName:"li",href:"https://expo.io"},"Expo"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"typescript")," >= 4.1.0 (if you use ",(0,o.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org"},"TypeScript"),")")),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Install the required packages in your React Native project:"),(0,o.kt)(i.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @react-navigation/native\n"))),(0,o.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @react-navigation/native\n")))),(0,o.kt)("p",null,"React Navigation is made up of some core utilities and those are then used by navigators to create the navigation structure in your app. Don't worry too much about this for now, it'll become clear soon enough! To frontload the installation work, let's also install and configure dependencies used by most navigators, then we can move forward with starting to write some code."),(0,o.kt)("p",null,"The libraries we will install now are ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-screens"},(0,o.kt)("inlineCode",{parentName:"a"},"react-native-screens"))," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/th3rdwave/react-native-safe-area-context"},(0,o.kt)("inlineCode",{parentName:"a"},"react-native-safe-area-context")),". If you already have these libraries installed and at the latest version, you are done here! Otherwise, read on."),(0,o.kt)("h3",{id:"installing-dependencies-into-an-expo-managed-project"},"Installing dependencies into an Expo managed project"),(0,o.kt)("p",null,"In your project directory, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx expo install react-native-screens react-native-safe-area-context\n")),(0,o.kt)("p",null,"This will install versions of these libraries that are compatible."),(0,o.kt)("p",null,"You can now continue to ",(0,o.kt)("a",{parentName:"p",href:"/docs/hello-react-navigation"},'"Hello React Navigation"')," to start writing some code."),(0,o.kt)("h3",{id:"installing-dependencies-into-a-bare-react-native-project"},"Installing dependencies into a bare React Native project"),(0,o.kt)("p",null,"In your project directory, run:"),(0,o.kt)(i.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react-native-screens react-native-safe-area-context\n"))),(0,o.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-native-screens react-native-safe-area-context\n")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: You might get warnings related to peer dependencies after installation. They are usually caused by incorrect version ranges specified in some packages. You can safely ignore most warnings as long as your app builds.")),(0,o.kt)("p",null,"From React Native 0.60 and higher, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/react-native-community/cli/blob/master/docs/autolinking.md"},"linking is automatic"),". So you ",(0,o.kt)("strong",{parentName:"p"},"don't need to run")," ",(0,o.kt)("inlineCode",{parentName:"p"},"react-native link"),"."),(0,o.kt)("p",null,"If you're on a Mac and developing for iOS, you need to install the pods (via ",(0,o.kt)("a",{parentName:"p",href:"https://cocoapods.org/"},"Cocoapods"),") to complete the linking."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx pod-install ios\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"react-native-screens")," package requires one additional configuration step to properly\nwork on Android devices. Edit ",(0,o.kt)("inlineCode",{parentName:"p"},"MainActivity.java")," file which is located in ",(0,o.kt)("inlineCode",{parentName:"p"},"android/app/src/main/java/<your package name>/MainActivity.java"),"."),(0,o.kt)("p",null,"Add the following code to the body of ",(0,o.kt)("inlineCode",{parentName:"p"},"MainActivity")," class:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"@Override\nprotected void onCreate(Bundle savedInstanceState) {\n  super.onCreate(null);\n}\n")),(0,o.kt)("p",null,"and make sure to add an import statement at the top of this file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"import android.os.Bundle;\n")),(0,o.kt)("p",null,"This change is required to avoid crashes related to View state being not persisted consistently across Activity restarts."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: When you use a navigator (such as stack navigator), you'll need to follow the installation instructions of that navigator for any additional dependencies. If you're getting an error \"Unable to resolve module\", you need to install that module in your project.")),(0,o.kt)("h2",{id:"wrapping-your-app-in-navigationcontainer"},"Wrapping your app in ",(0,o.kt)("inlineCode",{parentName:"h2"},"NavigationContainer")),(0,o.kt)("p",null,"Now, we need to wrap the whole app in ",(0,o.kt)("inlineCode",{parentName:"p"},"NavigationContainer"),". Usually you'd do this in your entry file, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"index.js")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"App.js"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { NavigationContainer } from '@react-navigation/native';\n\nexport default function App() {\n  return (\n    <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>\n  );\n}\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: In a typical React Native app, the ",(0,o.kt)("inlineCode",{parentName:"p"},"NavigationContainer")," should be only used once in your app at the root. You shouldn't nest multiple ",(0,o.kt)("inlineCode",{parentName:"p"},"NavigationContainer"),"s unless you have a specific use case for them.")),(0,o.kt)("p",null,"Now you are ready to build and run your app on the device/simulator."),(0,o.kt)("p",null,"Continue to ",(0,o.kt)("a",{parentName:"p",href:"/docs/hello-react-navigation"},'"Hello React Navigation"')," to start writing some code."))}v.isMDXComponent=!0}}]);
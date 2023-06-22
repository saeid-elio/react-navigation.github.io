"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[60691],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return v}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(n),f=a,v=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(v,i(i({ref:t},c),{},{components:n})):r.createElement(v,i({ref:t},c))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[p]="string"==typeof e?e:a,i[1]=u;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(67294),a=n(86010),o={tabItem:"tabItem_Ymn6"};function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:n},t)}},74866:function(e,t,n){n.d(t,{Z:function(){return k}});var r=n(83117),a=n(67294),o=n(86010),i=n(12466),u=n(16550),l=n(91980),s=n(67392),c=n(50012);function p(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function v(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,o=(0,u.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,l._X)(i),(0,a.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function m(e){var t,n,r,o,i=e.defaultValue,u=e.queryString,l=void 0!==u&&u,s=e.groupId,p=d(e),m=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:p})})),g=m[0],b=m[1],h=v({queryString:l,groupId:s}),w=h[0],y=h[1],k=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),n=(0,c.Nk)(t),r=n[0],o=n[1],[r,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),x=k[0],T=k[1],D=function(){var e=null!=w?w:x;return f({value:e,tabValues:p})?e:null}();return(0,a.useLayoutEffect)((function(){D&&b(D)}),[D]),{selectedValue:g,selectValue:(0,a.useCallback)((function(e){if(!f({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);b(e),y(e),T(e)}),[y,T,p]),tabValues:p}}var g=n(72389),b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){var t=e.className,n=e.block,u=e.selectedValue,l=e.selectValue,s=e.tabValues,c=[],p=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=c.indexOf(t),r=s[n].value;r!==u&&(p(t),l(r))},f=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,a=c.indexOf(e.currentTarget)+1;n=null!=(r=c[a])?r:c[0];break;case"ArrowLeft":var o,i=c.indexOf(e.currentTarget)-1;n=null!=(o=c[i])?o:c[c.length-1]}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},s.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:function(e){return c.push(e)},onKeyDown:f,onClick:d},i,{className:(0,o.Z)("tabs__item",b.tabItem,null==i?void 0:i.className,{"tabs__item--active":u===t})}),null!=n?n:t)})))}function w(e){var t=e.lazy,n=e.children,r=e.selectedValue;if(n=Array.isArray(n)?n:[n],t){var o=n.find((function(e){return e.props.value===r}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function y(e){var t=m(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},a.createElement(h,(0,r.Z)({},e,t)),a.createElement(w,(0,r.Z)({},e,t)))}function k(e){var t=(0,g.Z)();return a.createElement(y,(0,r.Z)({key:String(t)},e))}},60108:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return v},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return p}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=(n(74866),n(85162),["components"]),u={id:"drawer-based-navigation",title:"Drawer navigation",sidebar_label:"Drawer navigation"},l=void 0,s={unversionedId:"drawer-based-navigation",id:"version-3.x/drawer-based-navigation",title:"Drawer navigation",description:"The drawer navigator allows you to present a navigation menu to your users. It can be customized out of the box, or you can completely control with a custom component.",source:"@site/versioned_docs/version-3.x/drawer-based-navigation.md",sourceDirName:".",slug:"/drawer-based-navigation",permalink:"/docs/3.x/drawer-based-navigation",draft:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-3.x/drawer-based-navigation.md",tags:[],version:"3.x",frontMatter:{id:"drawer-based-navigation",title:"Drawer navigation",sidebar_label:"Drawer navigation"},sidebar:"version-3.x-docs",previous:{title:"Tab navigation",permalink:"/docs/3.x/tab-based-navigation"},next:{title:"Authentication flows",permalink:"/docs/3.x/auth-flow"}},c={},p=[],d={toc:p},f="wrapper";function v(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)(f,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The drawer navigator allows you to present a navigation menu to your users. It can be customized out of the box, or you can completely control with a custom component."),(0,o.kt)("p",null,"This guide covers ",(0,o.kt)("a",{parentName:"p",href:"/docs/3.x/drawer-navigator"},"createDrawerNavigator"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"class HomeScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n        <TouchableOpacity onPress={this.props.navigation.openDrawer}>\n          <Text>Open Drawer</Text>\n        </TouchableOpacity>\n        <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Home</Text>\n      </View>\n    );\n  }\n}\n\nclass SettingsScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n        <TouchableOpacity onPress={this.props.navigation.openDrawer}>\n          <Text>Open Drawer</Text>\n        </TouchableOpacity>\n        <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Settings</Text>\n      </View>\n    );\n  }\n}\n\nconst DrawerNavigator = createDrawerNavigator(\n  {\n    Home: HomeScreen,\n    Settings: SettingsScreen,\n  },\n  {\n    hideStatusBar: true,\n    drawerBackgroundColor: 'rgba(255,255,255,.9)',\n    overlayColor: '#6b52ae',\n    contentOptions: {\n      activeTintColor: '#fff',\n      activeBackgroundColor: '#6b52ae',\n    },\n  }\n);\n\nexport default createAppContainer(DrawerNavigator);\n")),(0,o.kt)("a",{href:"https://snack.expo.io/@react-navigation/basic-drawer-v3",target:"blank",class:"run-code-button"},"\u2192 Run this code"),(0,o.kt)("p",null,"To open and close drawer, use the following helpers to open and close the drawer:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"this.props.navigation.openDrawer();\nthis.props.navigation.closeDrawer();\n")),(0,o.kt)("p",null,"If you would like to toggle the drawer you call the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"this.props.navigation.toggleDrawer();\n")),(0,o.kt)("p",null,"Each of these functions, behind the scenes, are simply dispatching actions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"this.props.navigation.dispatch(DrawerActions.openDrawer());\nthis.props.navigation.dispatch(DrawerActions.closeDrawer());\nthis.props.navigation.dispatch(DrawerActions.toggleDrawer());\n")),(0,o.kt)("p",null,"If you would like to determine if drawer is open or closed, you can do the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const parent = this.props.navigation.dangerouslyGetParent();\nconst isDrawerOpen = parent && parent.state && parent.state.isDrawerOpen;\n")),(0,o.kt)("p",null,"Additionally, you can automatically hide the status bar by passing the DrawerLayout prop of ",(0,o.kt)("inlineCode",{parentName:"p"},"hideStatusBar: true"),"."))}v.isMDXComponent=!0}}]);
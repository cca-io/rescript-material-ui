"use strict";(self.webpackChunkrescript_material_ui_documentation=self.webpackChunkrescript_material_ui_documentation||[]).push([[426],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),f=s(r),m=o,d=f["".concat(u,".").concat(m)]||f[m]||p[m]||i;return r?n.createElement(d,c(c({ref:t},l),{},{components:r})):n.createElement(d,c({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var s=2;s<i;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5535:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return l},default:function(){return f}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),c=["components"],a={title:"Icons"},u=void 0,s={unversionedId:"project-structure/icons",id:"project-structure/icons",isDocsHomePage:!1,title:"Icons",description:"The MaterialUi icons do not have separate bindings. There is a good reason",source:"@site/docs/project-structure/icons.md",sourceDirName:"project-structure",slug:"/project-structure/icons",permalink:"/docs/project-structure/icons",tags:[],version:"current",frontMatter:{title:"Icons"},sidebar:"docs",previous:{title:"Theming",permalink:"/docs/project-structure/theming"},next:{title:"Introduction",permalink:"/docs/styles-ppx/introduction"}},l=[],p={toc:l};function f(e){var t=e.components,r=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The MaterialUi icons ",(0,i.kt)("strong",{parentName:"p"},"do not")," have separate bindings. There is a good reason\nfor this: Bindings result in thousands of files (or one extremely large one),\nwhich take a good while to recompile (easily upwards of one minute, this is\nunacceptable performance for a ReScript project)."),(0,i.kt)("p",null,"It is therefore recommended to bind to the icons you need manually. See the\nfollowing example for how this could look like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rescript"},'module SupervisedUserCircleOutlined = {\n    @react.component @module("@material-ui/icons/SupervisedUserCircle")\n    external make: (\n        ~color: string=?,\n        ~className: string=?,\n        ~fontSize: string=?,\n    ) => React.element = "default"\n}\n\n@react.component\nlet make = () => {\n    <SupervisedUserCircleOutlined color={MaterialUi.Colors.red.c400} fontSize="26px" />\n}\n')))}f.isMDXComponent=!0}}]);
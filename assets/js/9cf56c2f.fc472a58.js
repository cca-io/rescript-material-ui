"use strict";(self.webpackChunkrescript_material_ui_documentation=self.webpackChunkrescript_material_ui_documentation||[]).push([[355],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),m=p(r),f=o,d=m["".concat(c,".").concat(f)]||m[f]||s[f]||i;return r?n.createElement(d,a(a({ref:t},l),{},{components:r})):n.createElement(d,a({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7412:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return m}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],u={title:"Number Type"},c=void 0,p={unversionedId:"project-structure/number-type",id:"project-structure/number-type",isDocsHomePage:!1,title:"Number Type",description:"The bindings will provide both float and int types as numbers. Generally the",source:"@site/docs/project-structure/number-type.md",sourceDirName:"project-structure",slug:"/project-structure/number-type",permalink:"/docs/project-structure/number-type",tags:[],version:"current",frontMatter:{title:"Number Type"},sidebar:"docs",previous:{title:"Any Type",permalink:"/docs/project-structure/any-type"},next:{title:"Module - Colors",permalink:"/docs/project-structure/module-colors"}},l=[],s={toc:l};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The bindings will provide both ",(0,i.kt)("inlineCode",{parentName:"p"},"float")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"int")," types as numbers. Generally the\nthe type of ",(0,i.kt)("inlineCode",{parentName:"p"},"MaterialUi.Types.Number.t")," will be re-used whereever possible (The\n",(0,i.kt)("inlineCode",{parentName:"p"},"Number")," module is also accessible via ",(0,i.kt)("inlineCode",{parentName:"p"},"MaterialUi.Number"),")."),(0,i.kt)("p",null,"An example of this would be:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rescript"},"@react.component\nlet make = () => {\n  open MaterialUi\n\n  <AppBar elevation=Number.int(3) />\n}\n")),(0,i.kt)("p",null,"In some cases where you would expect this type, the bindings might require\nanother one that originates inside the component. This is the case when a number\nis part of a broader union type."),(0,i.kt)("p",null,"An example of this would be:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rescript"},"@react.component\nlet make = () => {\n  <MaterialUi.Backdrop\n    _open=true\n    timeout=MaterialUi.Backdrop.Timeout.int(3000)\n  />\n}\n")))}m.isMDXComponent=!0}}]);
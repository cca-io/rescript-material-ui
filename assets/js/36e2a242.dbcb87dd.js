"use strict";(self.webpackChunkrescript_material_ui_documentation=self.webpackChunkrescript_material_ui_documentation||[]).push([[183],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,y=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(y,a(a({ref:t},l),{},{components:n})):r.createElement(y,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9310:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={title:"Introduction"},c=void 0,p={unversionedId:"styles-ppx/introduction",id:"styles-ppx/introduction",isDocsHomePage:!1,title:"Introduction",description:"What is a PPX?",source:"@site/docs/styles-ppx/introduction.md",sourceDirName:"styles-ppx",slug:"/styles-ppx/introduction",permalink:"/docs/styles-ppx/introduction",tags:[],version:"current",frontMatter:{title:"Introduction"},sidebar:"docs",previous:{title:"Icons",permalink:"/docs/project-structure/icons"},next:{title:"Installation",permalink:"/docs/styles-ppx/installation"}},l=[{value:"What is a PPX?",id:"what-is-a-ppx",children:[]},{value:"Why do we need one for rescript-material-ui?",id:"why-do-we-need-one-for-rescript-material-ui",children:[]}],u={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"what-is-a-ppx"},"What is a PPX?"),(0,i.kt)("p",null,"PPX stands for ",(0,i.kt)("strong",{parentName:"p"},"Pre Processor eXtension"),". There is a fairly detailed article\nby ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/dylanirlbeck"},"@dylanirlbeck")," that I'd recommed if you're\ninterested in the nuts and bolts of these extensions:\n",(0,i.kt)("a",{parentName:"p",href:"https://dev.to/dylanirlbeck/intro-to-ppxs-for-reason-newcomers-2829"},"Link to the article"),"."),(0,i.kt)("h2",{id:"why-do-we-need-one-for-rescript-material-ui"},"Why do we need one for rescript-material-ui?"),(0,i.kt)("p",null,"When you create some\n",(0,i.kt)("a",{parentName:"p",href:"https://material-ui.com/guides/typescript/#usage-of-withstyles"},"styles in MaterialUi"),",\nyou pass an object to the ",(0,i.kt)("inlineCode",{parentName:"p"},"withStyles")," function that returns another object with\nthe same keys that contains the class names as values."),(0,i.kt)("p",null,"While this is easily representable in Typescript for example, there is no\nstraight forward way to do this in ",(0,i.kt)("inlineCode",{parentName:"p"},"ReScript"),". This is where the PPX comes in."),(0,i.kt)("p",null,"You pass an object in and it automatically generates all needed types and\nfunction applications for you. This keeps the tedious and quite verbose work\nfrom you while staying completely type safe when accessing the generated class\nnames."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/styles-ppx/usage"},"Usage")," for more details."))}d.isMDXComponent=!0}}]);
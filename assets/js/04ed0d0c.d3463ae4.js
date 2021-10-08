"use strict";(self.webpackChunkrescript_material_ui_documentation=self.webpackChunkrescript_material_ui_documentation||[]).push([[30],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,y=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5100:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={title:"Usage"},l=void 0,c={unversionedId:"styles-ppx/usage",id:"styles-ppx/usage",isDocsHomePage:!1,title:"Usage",description:"The extension is used by defining a module and passing %makeStyles() as the",source:"@site/docs/styles-ppx/usage.md",sourceDirName:"styles-ppx",slug:"/styles-ppx/usage",permalink:"/docs/styles-ppx/usage",tags:[],version:"current",frontMatter:{title:"Usage"},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/styles-ppx/installation"},next:{title:"Introduction",permalink:"/docs/lab/introduction"}},u=[{value:"Simple usage",id:"simple-usage",children:[]},{value:"Working with a theme",id:"working-with-a-theme",children:[]}],p={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The extension is used by defining a module and passing ",(0,i.kt)("inlineCode",{parentName:"p"},"%makeStyles()")," as the\nmodule body. Think of ",(0,i.kt)("inlineCode",{parentName:"p"},"%makeStyles()")," as a function, that accepts either"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a record with all fields of type ",(0,i.kt)("inlineCode",{parentName:"li"},"ReactDOM.Style.t")),(0,i.kt)("li",{parentName:"ul"},"a function with a theme argument that returns above record")),(0,i.kt)("p",null,"The resulting module contains a function called ",(0,i.kt)("inlineCode",{parentName:"p"},"useStyles()")," which you can use\nas a hook inside of your ",(0,i.kt)("inlineCode",{parentName:"p"},"React")," component. That hook will return all record\nkeys with class names as their values."),(0,i.kt)("h2",{id:"simple-usage"},"Simple usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rescript"},'module Styles = %makeStyles({\n  root: ReactDOM.Style.make(~padding="20px", ()),\n  inner: ReactDOM.Style.make(~lineHeight="1.3em", ()),\n})\n\n@react.component\nlet make = () => {\n  let classes = Styles.useStyles()\n\n  <div className=classes.root>\n    <div className=classes.inner>\n      {"Content"->React.string}\n    </div>\n  </div>\n}\n')),(0,i.kt)("h2",{id:"working-with-a-theme"},"Working with a theme"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rescript"},'module Styles = %makeStyles(\n  theme => {\n    root: ReactDOM.Style.make(~padding=`${theme.spacing(3)->string_of_int}px`, ()),\n    inner: ReactDOM.Style.make(~color=theme.palette.primary.main, ()),\n  }\n)\n\n@react.component\nlet make = () => {\n  let classes = Styles.useStyles()\n\n  <div className=classes.root>\n    <div className=classes.inner>\n      {"Content"->React.string}\n    </div>\n  </div>\n}\n')))}m.isMDXComponent=!0}}]);
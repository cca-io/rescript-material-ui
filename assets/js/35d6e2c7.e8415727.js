"use strict";(self.webpackChunkrescript_material_ui_documentation=self.webpackChunkrescript_material_ui_documentation||[]).push([[930],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=l(n),f=o,d=m["".concat(c,".").concat(f)]||m[f]||s[f]||a;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5158:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],u={title:"Module - Box"},c=void 0,l={unversionedId:"project-structure/module-box",id:"project-structure/module-box",isDocsHomePage:!1,title:"Module - Box",description:"The MaterialUi.Box module contains a manual binding to the",source:"@site/docs/project-structure/module-box.md",sourceDirName:"project-structure",slug:"/project-structure/module-box",permalink:"/docs/project-structure/module-box",tags:[],version:"current",frontMatter:{title:"Module - Box"},sidebar:"docs",previous:{title:"Module - Core",permalink:"/docs/project-structure/module-core"},next:{title:"Theming",permalink:"/docs/project-structure/theming"}},p=[],s={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"MaterialUi.Box")," module contains a manual binding to the\n",(0,a.kt)("a",{parentName:"p",href:"https://material-ui.com/components/box/#box"},"box component"),"."),(0,a.kt)("p",null,"The bindings are not complete and therefore do not offer the full functionality\nthat the original does. Feel free to\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cca-io/rescript-material-ui/issues"},"open an issue")," if you're\nmissing a vital use case with this component."),(0,a.kt)("p",null,"It makes heavy use of several mixed unions. Please refer to\n",(0,a.kt)("a",{parentName:"p",href:"/docs/project-structure/union-values#rules-for-mixed-unions"},"this section"),", to see how they are\nused."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rescript"},'@react.component\nlet make = () => {\n    open MaterialUi\n\n    <Box\n      component={Box.Component.string("span")}\n      style={ReactDOM.Style.make(~boxSizing="border-box", ())}\n      p={Box.Value.breakpointObj(\n        Box.BreakpointObj.make(~sm=Box.Value.int(2), ~md=Box.Value.int(5), ()),\n      )}\n      m={Box.Value.array({\n        open Box.Value\n        [int(2), int(5)]\n      })}\n      borderTop={Box.Value.int(1)}\n      borderColor={Box.Value.paletteColor(Box.PaletteColor.error_main)}\n      color={Box.Value.paletteColor(Box.PaletteColor.text_secondary)}\n      bgcolor={Box.Value.paletteColor(Box.PaletteColor.background_paper)}\n      fontSize={Box.Value.string("30px")}\n    >\n      {"Testbox"->React.string}\n  </Box>\n}\n')))}m.isMDXComponent=!0}}]);
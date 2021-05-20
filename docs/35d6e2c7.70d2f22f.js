(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{64:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(6),a=(n(0),n(85)),i={title:"Module - Box"},c={unversionedId:"project-structure/module-box",id:"project-structure/module-box",isDocsHomePage:!1,title:"Module - Box",description:"The MaterialUi_Box module (also accessible via MaterialUi.Box) contains a",source:"@site/docs/project-structure/module-box.md",permalink:"/rescript-material-ui/docs/project-structure/module-box",sidebar:"docs",previous:{title:"Module - Core",permalink:"/rescript-material-ui/docs/project-structure/module-core"},next:{title:"Theming",permalink:"/rescript-material-ui/docs/project-structure/theming"}},l=[],u={rightToc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"MaterialUi_Box")," module (also accessible via ",Object(a.b)("inlineCode",{parentName:"p"},"MaterialUi.Box"),") contains a\nmanual binding to the\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://material-ui.com/components/box/#box"}),"box component"),";"),Object(a.b)("p",null,"The bindings are not complete and therefore do not offer the full functionality\nthat the original does. Feel free to\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/jsiebern/bs-material-ui/issues"}),"open an issue")," if you're\nmissing a vital use case with this component."),Object(a.b)("p",null,"It makes heavy use of several mixed unions. Please refer to\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/rescript-material-ui/docs/project-structure/union-values#rules-for-mixed-unions"}),"this section"),", to see how they are\nused."),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-reason"}),'@react.component\nlet make = () => {\n    open MaterialUi;\n\n    <Box\n      component={Box.Component.string("span")}\n      style={ReactDOMRe.Style.make(~boxSizing="border-box", ())}\n      p={Box.Value.breakpointObj(\n        Box.BreakpointObj.make(~sm=Box.Value.int(2), ~md=Box.Value.int(5), ()),\n      )}\n      m={Box.Value.array({\n        open Box.Value;\n        [int(2), int(5)]\n      })}\n      borderTop={Box.Value.int(1)}\n      borderColor={Box.Value.paletteColor(Box.PaletteColor.error_main)}\n      color={Box.Value.paletteColor(Box.PaletteColor.text_secondary)}\n      bgcolor={Box.Value.paletteColor(Box.PaletteColor.background_paper)}\n      fontSize={Box.Value.string("30px")}\n    >\n      {"Testbox"->React.string}\n  </Box>\n};\n')))}p.isMDXComponent=!0},85:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,d=s["".concat(i,".").concat(m)]||s[m]||b[m]||a;return n?o.a.createElement(d,c(c({ref:t},u),{},{components:n})):o.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);
"use strict";(self.webpackChunkrescript_material_ui_documentation=self.webpackChunkrescript_material_ui_documentation||[]).push([[840],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2065:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"Theming"},s=void 0,c={unversionedId:"project-structure/theming",id:"project-structure/theming",isDocsHomePage:!1,title:"Theming",description:"classes prop",source:"@site/docs/project-structure/theming.md",sourceDirName:"project-structure",slug:"/project-structure/theming",permalink:"/docs/project-structure/theming",tags:[],version:"current",frontMatter:{title:"Theming"},sidebar:"docs",previous:{title:"Module - Box",permalink:"/docs/project-structure/module-box"},next:{title:"Icons",permalink:"/docs/project-structure/icons"}},p=[{value:"<code>classes</code> prop",id:"classes-prop",children:[]},{value:"On themes in general",id:"on-themes-in-general",children:[]},{value:"Constructing a theme",id:"constructing-a-theme",children:[]},{value:"Reading from a theme",id:"reading-from-a-theme",children:[]},{value:"Theme Provider",id:"theme-provider",children:[]}],m={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"classes-prop"},(0,i.kt)("inlineCode",{parentName:"h2"},"classes")," prop"),(0,i.kt)("p",null,"Overriding styles locally is usually done via the ",(0,i.kt)("inlineCode",{parentName:"p"},"classes")," prop that exists on\nvirtually every component. Likewise, each component of the bindings has this\nprop and an according generator function for it. It is accessible via\n",(0,i.kt)("inlineCode",{parentName:"p"},"MaterialUi.Component.Classes.make"),"."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rescript"},'open MaterialUi\nlet classes = Styles.useStyles()\n<Paper\n  classes={Paper.Classes.make(\n    ~root=classes.root,\n    ~rounded=classes.rounded,\n    (),\n  )}>\n  <Typography> {"Some Content"->React.string} </Typography>\n</Paper>\n')),(0,i.kt)("h2",{id:"on-themes-in-general"},"On themes in general"),(0,i.kt)("p",null,"The automated generation of the theme object differs a bit from the components.\nThe theme is extracted from it's typescript definitions, which are quite\ncomplex. This means that the extraction process is a bit error prone\n(unfortunately a lot more than I'd like). This means that it is possible for the\ntheme functions / object to change from release to release in a seemingly random\nfashion, until I can resolve this situation in a reliable way (Not a trivial\nproblem to solve unfortunately)."),(0,i.kt)("p",null,"Theming is split into two modules:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MaterialUi.Theme")," (reading)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MaterialUi.ThemeOptions")," (constructing)")),(0,i.kt)("p",null,"Theme definitions are likely to undergo breaking changes in future versions."),(0,i.kt)("h2",{id:"constructing-a-theme"},"Constructing a theme"),(0,i.kt)("p",null,"You can construct a theme object by calling ",(0,i.kt)("inlineCode",{parentName:"p"},"MaterialUi.ThemeOptions.make"),". You\nwould usually pass it to the ",(0,i.kt)("inlineCode",{parentName:"p"},"createMuiTheme")," function, which has a binding for\nconvenience at : ",(0,i.kt)("inlineCode",{parentName:"p"},"MaterialUi.Theme.create"),"."),(0,i.kt)("p",null,"The following is an example of constructing a theme object:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rescript"},'let theme =\n  MaterialUi.Theme.create({\n    open MaterialUi.ThemeOptions\n    make(\n    ~overrides=\n        Overrides.make(\n        ~muiButton=\n            ButtonClassKey.make(\n            ~outlined=\n                ReactDOM.Style.make(\n                ~fontSize="12px",\n                ~fontWeight="300",\n                ~color="gray",\n                (),\n                ),\n            (),\n            ),\n        (),\n        ),\n    (),\n    )\n  })\n')),(0,i.kt)("p",null,"You might have noticed that ",(0,i.kt)("inlineCode",{parentName:"p"},"ButtonClassKey")," is not a straight forward and easy\nto guess sub module name. This is due to how the type information is presented\nby typescript. When in doubt, just open the ",(0,i.kt)("inlineCode",{parentName:"p"},"MaterialUi.ThemeOptions.re")," module\nand follow the module names."),(0,i.kt)("h2",{id:"reading-from-a-theme"},"Reading from a theme"),(0,i.kt)("p",null,"Reading from a theme object has become a lot more straight forward in the latest\nReScript versions (as records are now equivalent to JavaScript objects)."),(0,i.kt)("p",null,"All (sub-)types are in a flat hierarchy inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"MaterialUi.Theme")," module.\nAccessing them is very straight forward and corresponds to the original\nMaterialUi Shape."),(0,i.kt)("p",null,"Here are 2 examples of accessing fields in the theme object:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rescript"},'@react.component\nlet make = () => {\n  let theme = MaterialUi.Core.useTheme()\n\n  <div style={ReactDOM.Style.make(~color=theme.palette.primary.main, ())}>\n    {"Some main colored text"->React.string}\n  </div>\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rescript"},'module Styles = %makeStyles(\n  theme => {\n    toolbarIcon: ReactDOM.Style.combine(\n      ReactDOM.Style.make(\n        ~padding="0 8px",\n        (),\n      ),\n      theme.mixins.toolbar,\n    ),\n    appBar: ReactDOM.Style.make(\n      ~zIndex=(theme.zIndex.drawer +. 1.0)->int_of_float->string_of_int,\n      ~transition=MaterialUi.ThemeHelpers.transitionCreate(\n        ~theme,\n        ~affectWidth=true,\n        ~affectMargin=true,\n        ~easing=theme.transitions.easing.sharp,\n        ~duration=theme.transitions.duration.leavingScreen,\n        (),\n      ),\n      (),\n    ),\n  }\n)\n')),(0,i.kt)("p",null,"(The above example makes mention of the user contributed\n",(0,i.kt)("inlineCode",{parentName:"p"},"MaterialUi.ThemeHelpers")," module. Please refer to the source code for more\ninformation.)"),(0,i.kt)("h2",{id:"theme-provider"},"Theme Provider"),(0,i.kt)("p",null,"For providing a theme at root level or further down the tree, you should use the\n",(0,i.kt)("inlineCode",{parentName:"p"},"MaterialUi.ThemeProvider")," component."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rescript"},'let theme = MaterialUi.Theme.create(MaterialUi.ThemeOptions.make())\n\n@react.component\nlet make = () => {\n  <div className="app root">\n    <MaterialUi.ThemeProvider theme>\n      <div />\n    </MaterialUi.ThemeProvider>\n  </div>\n}\n')))}u.isMDXComponent=!0}}]);
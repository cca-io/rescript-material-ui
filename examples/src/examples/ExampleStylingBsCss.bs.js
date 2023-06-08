// Generated by ReScript, PLEASE EDIT WITH CARE

import * as CssJs from "bs-css-emotion/src/CssJs.bs.js";
import * as Styles from "@mui/styles";
import * as Material from "@mui/material";
import * as JsxRuntime from "react/jsx-runtime";

var categoryButton = CssJs.style([
      CssJs.textTransform("none"),
      CssJs.justifyContent("flexStart")
    ]);

var Styles$1 = {
  categoryButton: categoryButton
};

function ExampleStylingBsCss(props) {
  return JsxRuntime.jsx(Styles.StylesProvider, {
              injectFirst: true,
              children: JsxRuntime.jsx((function (prim) {
                      return Material.Button(prim);
                    }), {
                    onClick: (function (prim) {
                        
                      }),
                    children: "Hello, BS-CSS & MUI!",
                    classes: {
                      root: categoryButton
                    },
                    color: "primary"
                  })
            });
}

var make = ExampleStylingBsCss;

export {
  Styles$1 as Styles,
  make ,
}
/* categoryButton Not a pure module */
// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Styles from "@mui/styles";
import * as Material from "@mui/material";
import * as JsxRuntime from "react/jsx-runtime";

function ExampleStylingTailwind(props) {
  return JsxRuntime.jsx(Styles.StylesProvider, {
              injectFirst: true,
              children: JsxRuntime.jsx((function (prim) {
                      return Material.Button(prim);
                    }), {
                    onClick: (function (prim) {
                        
                      }),
                    children: "Hello, Tailwind & MUI!",
                    classes: {
                      root: "normal-case justify-start"
                    },
                    color: "primary"
                  })
            });
}

var make = ExampleStylingTailwind;

export {
  make ,
}
/* @mui/styles Not a pure module */
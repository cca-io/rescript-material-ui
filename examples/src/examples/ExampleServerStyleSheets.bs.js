// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as ExampleBox from "./ExampleBox.bs.js";
import * as Styles from "@mui/styles";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as Material from "@mui/material";
import * as Server from "react-dom/server";
import * as JsxRuntime from "react/jsx-runtime";

var useStyles = Styles.makeStyles({
      code: {
        fontFamily: "SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace",
        marginTop: "15px"
      }
    });

function ExampleServerStyleSheets(props) {
  var classes = useStyles(undefined);
  var match = React.useMemo((function () {
          var sheets = new Styles.ServerStyleSheets();
          var html = Server.renderToString(sheets.collect(JsxRuntime.jsx(ExampleBox.make, {})));
          var css = sheets.toString();
          return [
                  html,
                  css
                ];
        }), []);
  return JsxRuntime.jsxs("div", {
              children: [
                JsxRuntime.jsx((function (prim) {
                        return Material.Typography(prim);
                      }), {
                      children: "ServerSide render of <ExampleBox />",
                      variant: "h5"
                    }),
                JsxRuntime.jsx(Material.TextField, {
                      className: classes.code,
                      defaultValue: Caml_option.some(match[0]),
                      fullWidth: true,
                      label: "HTML",
                      multiline: true,
                      rows: 5,
                      variant: "outlined"
                    }),
                JsxRuntime.jsx(Material.TextField, {
                      className: classes.code,
                      defaultValue: Caml_option.some(match[1]),
                      fullWidth: true,
                      label: "CSS",
                      multiline: true,
                      rows: 5,
                      variant: "outlined"
                    })
              ]
            });
}

var make = ExampleServerStyleSheets;

export {
  useStyles ,
  make ,
}
/* useStyles Not a pure module */
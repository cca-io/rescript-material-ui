// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as Grid$Mui from "rescript-material-ui/src/Grid.bs.js";
import * as Caml_format from "rescript/lib/es6/caml_format.js";
import * as Core from "@material-ui/core";
import * as Styles from "@material-ui/styles";
import VolumeUp from "@material-ui/icons/VolumeUp";

var useStyles = Styles.makeStyles({
      root: {
        width: "250px"
      },
      input: {
        width: "250px"
      }
    });

var VolumeUpIcon = {};

function ExampleSlider(Props) {
  var classes = useStyles();
  var match = React.useReducer((function (param, v) {
          return v;
        }), 0);
  var setValue = match[1];
  var value = match[0];
  return React.createElement("div", {
              className: classes.root
            }, React.createElement(Core.Typography, {
                  children: "Volume",
                  gutterBottom: true
                }), React.createElement(Core.Grid, {
                  alignItems: "center",
                  children: null,
                  container: true,
                  spacing: 2
                }, React.createElement(Core.Grid, {
                      children: React.createElement(VolumeUp, {}),
                      item: true
                    }), React.createElement(Core.Grid, {
                      children: React.createElement(Core.Slider, {
                            "aria-labelledby": "input-slider",
                            onChange: (function (param, v) {
                                Curry._1(setValue, v);
                              }),
                            value: value
                          }),
                      item: true,
                      xs: Grid$Mui.Xs.$$true
                    }), React.createElement(Core.Grid, {
                      children: React.createElement(Core.Input, {
                            className: classes.input,
                            onBlur: (function (param) {
                                if (value < 0) {
                                  return Curry._1(setValue, 0);
                                } else if (value > 100) {
                                  return Curry._1(setValue, 100);
                                } else {
                                  return ;
                                }
                              }),
                            inputProps: {
                              step: 10,
                              min: 0,
                              max: 100,
                              type: "number",
                              "aria-labelledby": "input-slider"
                            },
                            margin: "dense",
                            onChange: (function (e) {
                                Curry._1(setValue, Caml_format.int_of_string(e.target.value));
                              }),
                            value: value
                          }),
                      item: true
                    })));
}

var make = ExampleSlider;

export {
  useStyles ,
  VolumeUpIcon ,
  make ,
}
/* useStyles Not a pure module */

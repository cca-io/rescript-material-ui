// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Belt_Array from "rescript/lib/es6/belt_Array.js";
import * as Styles from "@mui/styles";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as Material from "@mui/material";
import * as JsxRuntime from "react/jsx-runtime";

function getSpacing(theme, num) {
  return String(theme.spacing(num)) + "px";
}

var useStyles = Styles.makeStyles(function (theme) {
      return {
              root: {
                width: "90%"
              },
              button: {
                marginTop: getSpacing(theme, 1),
                marginRight: getSpacing(theme, 1)
              },
              actionsContainer: {
                marginBottom: getSpacing(theme, 2)
              },
              resetContainer: {
                padding: getSpacing(theme, 3)
              }
            };
    });

function getSteps() {
  return [
          "Select campaign settings",
          "Create an ad group",
          "Create an ad"
        ];
}

function getStepContent(step) {
  var stepContent = [
    "For each ad campaign that you create, you can control how much\n              you're willing to spend on clicks and conversions, which networks\n              and geographical locations you want your ads to show on, and more.",
    "An ad group contains one or more ads which target a shared set of keywords.",
    "Try out different ad text to see what brings in the most customers,\n              and learn how to enhance your ads using features like ad extensions.\n              If you run into any problems with your ads, find out how to tell if\n              they're running and how to resolve approval issues."
  ];
  var content = Belt_Array.get(stepContent, step);
  if (content !== undefined) {
    return content;
  } else {
    return "Unknown Step";
  }
}

function ExampleStepper(props) {
  var classes = useStyles(undefined);
  var match = React.useReducer((function (param, step) {
          return step;
        }), 0);
  var setActiveStep = match[1];
  var activeStep = match[0];
  var steps = [
    "Select campaign settings",
    "Create an ad group",
    "Create an ad"
  ];
  var handleNext = function (param) {
    setActiveStep(activeStep + 1 | 0);
  };
  var handleBack = function (param) {
    setActiveStep(activeStep - 1 | 0);
  };
  var handleReset = function (param) {
    setActiveStep(0);
  };
  return JsxRuntime.jsxs("div", {
              children: [
                JsxRuntime.jsx((function (prim) {
                        return Material.Stepper(prim);
                      }), {
                      activeStep: activeStep,
                      children: Caml_option.some(Belt_Array.mapWithIndex(steps, (function (index, label) {
                                  return JsxRuntime.jsxs((function (prim) {
                                                return Material.Step(prim);
                                              }), {
                                              children: [
                                                JsxRuntime.jsx((function (prim) {
                                                        return Material.StepLabel(prim);
                                                      }), {
                                                      children: Caml_option.some(label)
                                                    }),
                                                JsxRuntime.jsxs((function (prim) {
                                                        return Material.StepContent(prim);
                                                      }), {
                                                      children: [
                                                        JsxRuntime.jsx((function (prim) {
                                                                return Material.Typography(prim);
                                                              }), {
                                                              children: Caml_option.some(getStepContent(index))
                                                            }),
                                                        JsxRuntime.jsx("div", {
                                                              children: JsxRuntime.jsxs("div", {
                                                                    children: [
                                                                      JsxRuntime.jsx((function (prim) {
                                                                              return Material.Button(prim);
                                                                            }), {
                                                                            className: classes.button,
                                                                            onClick: handleBack,
                                                                            children: "Back",
                                                                            disabled: activeStep === 0
                                                                          }),
                                                                      JsxRuntime.jsx((function (prim) {
                                                                              return Material.Button(prim);
                                                                            }), {
                                                                            className: classes.button,
                                                                            onClick: handleNext,
                                                                            children: Caml_option.some(activeStep === (steps.length - 1 | 0) ? "Finish" : "Next"),
                                                                            color: "primary",
                                                                            variant: "contained"
                                                                          })
                                                                    ]
                                                                  }),
                                                              className: classes.actionsContainer
                                                            })
                                                      ]
                                                    })
                                              ]
                                            }, label);
                                }))),
                      orientation: "vertical"
                    }),
                activeStep === steps.length ? JsxRuntime.jsxs((function (prim) {
                          return Material.Paper(prim);
                        }), {
                        className: classes.resetContainer,
                        children: [
                          JsxRuntime.jsx((function (prim) {
                                  return Material.Typography(prim);
                                }), {
                                children: "All steps completed - you're finished"
                              }),
                          JsxRuntime.jsx((function (prim) {
                                  return Material.Button(prim);
                                }), {
                                className: classes.button,
                                onClick: handleReset,
                                children: "Reset",
                                color: "secondary"
                              })
                        ],
                        elevation: 0,
                        square: true
                      }) : null
              ],
              className: classes.root
            });
}

var make = ExampleStepper;

export {
  getSpacing ,
  useStyles ,
  getSteps ,
  getStepContent ,
  make ,
}
/* useStyles Not a pure module */
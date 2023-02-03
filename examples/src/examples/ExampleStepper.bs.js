// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as Belt_Array from "rescript/lib/es6/belt_Array.js";
import * as Core from "@material-ui/core";
import * as Styles from "@material-ui/styles";

function getSpacing(theme, num) {
  return String(Curry._1(theme.spacing, num)) + "px";
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

function getSteps(param) {
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

function ExampleStepper(Props) {
  var classes = useStyles();
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
    Curry._1(setActiveStep, activeStep + 1 | 0);
  };
  var handleBack = function (param) {
    Curry._1(setActiveStep, activeStep - 1 | 0);
  };
  var handleReset = function (param) {
    Curry._1(setActiveStep, 0);
  };
  return React.createElement("div", {
              className: classes.root
            }, React.createElement(Core.Stepper, {
                  activeStep: activeStep,
                  children: Belt_Array.mapWithIndex(steps, (function (index, label) {
                          return React.createElement(Core.Step, {
                                      children: null,
                                      key: label
                                    }, React.createElement(Core.StepLabel, {
                                          children: label
                                        }), React.createElement(Core.StepContent, {
                                          children: null
                                        }, React.createElement(Core.Typography, {
                                              children: getStepContent(index)
                                            }), React.createElement("div", {
                                              className: classes.actionsContainer
                                            }, React.createElement("div", undefined, React.createElement(Core.Button, {
                                                      onClick: handleBack,
                                                      children: "Back",
                                                      className: classes.button,
                                                      disabled: activeStep === 0
                                                    }), React.createElement(Core.Button, {
                                                      onClick: handleNext,
                                                      children: activeStep === (steps.length - 1 | 0) ? "Finish" : "Next",
                                                      className: classes.button,
                                                      color: "primary",
                                                      variant: "contained"
                                                    })))));
                        })),
                  orientation: "vertical"
                }), activeStep === steps.length ? React.createElement(Core.Paper, {
                    children: null,
                    className: classes.resetContainer,
                    elevation: 0,
                    square: true
                  }, React.createElement(Core.Typography, {
                        children: "All steps completed - you're finished"
                      }), React.createElement(Core.Button, {
                        onClick: handleReset,
                        children: "Reset",
                        className: classes.button,
                        color: "secondary"
                      })) : null);
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

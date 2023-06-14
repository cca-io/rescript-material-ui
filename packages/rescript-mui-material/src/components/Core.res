module Breakpoint = {
  type theme = Theme.t
  type breakpoint
  type t
  type breakpointDefinition = [#xs | #sm | #md | #lg | #xl | #int(int)]
  type breakpointDirection = [
    | #up(breakpointDefinition)
    | #down(breakpointDefinition)
  ]

  module UNSAFE_INTERNAL = {
    type breakpointFunc = breakpoint => string
    external jsonToBreakpointFunc: Js.Json.t => breakpointFunc = "%identity"
    external stringToBreakpoint: string => breakpoint = "%identity"
    external intToBreakpoint: int => breakpoint = "%identity"
    external stringToBreakpointResult: string => t = "%identity"
  }

  let getAsString = (theme: theme, breakpoint: breakpointDirection) => {
    let bpGet = switch breakpoint {
    | #up(_) => v => v.Theme.up
    | #down(_) => v => v.Theme.down
    }
    let bpValue = switch breakpoint {
    | #up(#xs)
    | #down(#xs) =>
      "xs"->UNSAFE_INTERNAL.stringToBreakpoint
    | #up(#sm)
    | #down(#sm) =>
      "sm"->UNSAFE_INTERNAL.stringToBreakpoint
    | #up(#md)
    | #down(#md) =>
      "md"->UNSAFE_INTERNAL.stringToBreakpoint
    | #up(#lg)
    | #down(#lg) =>
      "lg"->UNSAFE_INTERNAL.stringToBreakpoint
    | #up(#xl)
    | #down(#xl) =>
      "xl"->UNSAFE_INTERNAL.stringToBreakpoint
    | #up(#int(x))
    | #down(#int(x)) =>
      x->UNSAFE_INTERNAL.intToBreakpoint
    }
    let breakpointFunc =
      theme.breakpoints->bpGet->Any.unsafeGetValue->UNSAFE_INTERNAL.jsonToBreakpointFunc

    breakpointFunc(bpValue)
  }

  let get = (theme: theme, breakpoint: breakpointDirection) =>
    theme->getAsString(breakpoint)->UNSAFE_INTERNAL.stringToBreakpointResult
}

@module("@mui/styles")
external useTheme: unit => Theme.t = "useTheme"

@module("@mui/material")
external useMediaQueryString: string => bool = "useMediaQuery"

@module("@mui/material")
external useMediaQuery: Breakpoint.t => bool = "useMediaQuery"

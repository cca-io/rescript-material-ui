type t_size = {
  lg: float,
  md: float,
  sm: float,
  xl: float,
  xs: float,
}

type t_breakpoints = {
  keys: array<string>,
  values: t_size,
  up: Breakpoint.t => string,
  down: Breakpoint.t => string,
  between: (Breakpoint.t, Breakpoint.t) => string,
  only: Breakpoint.t => string,
  not: Breakpoint.t => string,
  unit: option<string>,
}

type t_mixins = {
  toolbar: JsxDOMStyle.t,
  gutters: string,
}

type t_color = {
  \"50": string,
  \"100": string,
  \"200": string,
  \"300": string,
  \"400": string,
  \"500": string,
  \"600": string,
  \"700": string,
  \"800": string,
  \"900": string,
  \"A100": string,
  \"A200": string,
  \"A400": string,
  \"A700": string,
}
@deprecated("use t_color")
type color = t_color

type colorWithVariants = {
  ...t_color,
  contrastText: string,
  dark: string,
  light: string,
  main: string,
}

type t_action = {
  activatedOpacity: float,
  active: string,
  disabled: string,
  disabledBackground: string,
  disabledOpacity: float,
  focus: string,
  focusOpacity: float,
  hover: string,
  hoverOpacity: float,
  selected: string,
  selectedOpacity: float,
}

type t_background = {default: string, paper: string}

type t_commonColors = {black: string, white: string}

type t_text = {
  disabled: string,
  hint: string,
  primary: string,
  secondary: string,
}

type t_tonalOffset = {dark: float, light: float}

type t_palette = {
  mode: string,
  action: t_action,
  background: t_background,
  common: t_commonColors,
  contrastThreshold: float,
  divider: string,
  error: colorWithVariants,
  grey: t_color,
  info: colorWithVariants,
  primary: colorWithVariants,
  secondary: colorWithVariants,
  success: colorWithVariants,
  text: t_text,
  tonalOffset: t_tonalOffset,
  \"type": string,
  warning: colorWithVariants,
}

type t_shape = {borderRadius: float}

type t_duration = {
  complex: float,
  enteringScreen: float,
  leavingScreen: float,
  short: float,
  shorter: float,
  shortest: float,
  standard: float,
}

type t_easing = {
  easeIn: string,
  easeInOut: string,
  easeOut: string,
  sharp: string,
}

type t_transitions = {
  // create, getAutoHeightDuration ?
  duration: t_duration,
  easing: t_easing,
}

type t_zIndex = {
  mobileStepper: int,
  speedDial: int,
  appBar: int,
  drawer: int,
  modal: int,
  snackbar: int,
  tooltip: int,
  fab: int,
}

type t_fontStyle = {
  fontFamily: string,
  fontSize: int,
  fontWeightLight: string,
  fontWeightRegular: string,
  fontWeightMedium: string,
  fontWeightBold: string,
  htmlFontSize: int,
}

type t_typography = {
  ...t_fontStyle,
  pxToRem: float => string,
  h1: JsxDOMStyle.t,
  h2: JsxDOMStyle.t,
  h3: JsxDOMStyle.t,
  h4: JsxDOMStyle.t,
  h5: JsxDOMStyle.t,
  h6: JsxDOMStyle.t,
  subtitle1: JsxDOMStyle.t,
  subtitle2: JsxDOMStyle.t,
  body1: JsxDOMStyle.t,
  body2: JsxDOMStyle.t,
  caption: JsxDOMStyle.t,
  button: JsxDOMStyle.t,
  overline: JsxDOMStyle.t,
}

type t_theme = {
  breakpoints: t_breakpoints,
  components: Overrides.t,
  direction: string,
  palette: t_palette,
  shadows: array<string>,
  shape: t_shape,
  spacing: int => int,
  transitions: t_transitions,
  typography: t_typography,
  mixins: t_mixins,
  zIndex: t_zIndex,
  cssVariables?: bool,
}

type t = t_theme

external fromOptions: ThemeOptions.t => t = "%identity"

@module("@mui/material/styles") external create: ThemeOptions.t => t = "createTheme"

type t_sizeOptions = {
  lg?: float,
  md?: float,
  sm?: float,
  xl?: float,
  xs?: float,
}

type t_breakpointOptions = {
  keys?: array<string>,
  values?: t_sizeOptions,
  up?: Breakpoint.t => string,
  down?: Breakpoint.t => string,
  between?: (Breakpoint.t, Breakpoint.t) => string,
  only?: Breakpoint.t => string,
  not?: Breakpoint.t => string,
  unit?: string,
}

type t_mixinsOptions = {
  gutters?: string,
  toolbar?: JsxDOMStyle.t,
}

type t_colorOptions = {
  \"50"?: string,
  \"100"?: string,
  \"200"?: string,
  \"300"?: string,
  \"400"?: string,
  \"500"?: string,
  \"600"?: string,
  \"700"?: string,
  \"800"?: string,
  \"900"?: string,
  \"A100"?: string,
  \"A200"?: string,
  \"A400"?: string,
  \"A700"?: string,
}

type colorWithVariantsOptions = {
  ...t_colorOptions,
  contrastText?: string,
  dark?: string,
  light?: string,
  main?: string,
}

type t_actionOptions = {
  activatedOpacity?: float,
  active?: string,
  disabled?: string,
  disabledBackground?: string,
  disabledOpacity?: float,
  focus?: string,
  focusOpacity?: float,
  hover?: string,
  hoverOpacity?: float,
  selected?: string,
  selectedOpacity?: float,
}

type t_backgroundOptions = {default?: string, paper?: string}

type t_commonColorsOptions = {black?: string, white?: string}

type t_textOptions = {
  disabled?: string,
  hint?: string,
  primary?: string,
  secondary?: string,
}

type t_tonalOffset = {dark?: float, light?: float}

type t_paletteOptions = {
  action?: t_actionOptions,
  augmentColor?: unit => string,
  background?: t_backgroundOptions,
  common?: t_commonColorsOptions,
  contrastThreshold?: float,
  divider?: string,
  error?: colorWithVariantsOptions,
  getContrastText?: unit => string,
  grey?: t_colorOptions,
  info?: colorWithVariantsOptions,
  mode?: string,
  primary?: colorWithVariantsOptions,
  secondary?: colorWithVariantsOptions,
  success?: colorWithVariantsOptions,
  text?: t_textOptions,
  tonalOffset?: t_tonalOffset,
  @as("type") type_?: string,
  warning?: colorWithVariantsOptions,
}

type t_shapeOptions = {borderRadius?: float}

type t_durationOptions = {
  complex?: float,
  enteringScreen?: float,
  leavingScreen?: float,
  short?: float,
  shorter?: float,
  shortest?: float,
  standard?: float,
}

type t_easingOptions = {
  easeIn?: string,
  easeInOut?: string,
  easeOut?: string,
  sharp?: string,
}

type transitionCreateOptions = {
  duration?: string,
  easing?: string,
  delay?: string,
}

type transitionsOptions = {
  create?: (array<string>, transitionCreateOptions) => string,
  getAutoHeightDuration?: float => Transition.duration,
  easing?: t_easingOptions,
  duration?: t_durationOptions,
}

type zIndex = {
  appBar?: int,
  drawer?: int,
  mobileStepper?: int,
  modal?: int,
  snackbar?: int,
  speedDial?: int,
  tooltip?: int,
}

type t_fontStyleOptions = {
  allVariants?: JsxDOMStyle.t,
  fontFamily?: string,
  fontSize?: int,
  fontWeightLight?: string,
  fontWeightRegular?: string,
  fontWeightMedium?: string,
  fontWeightBold?: string,
  htmlFontSize?: int,
}

type t_typographyOptions = {
  ...t_fontStyleOptions,
  h1?: JsxDOMStyle.t,
  h2?: JsxDOMStyle.t,
  h3?: JsxDOMStyle.t,
  h4?: JsxDOMStyle.t,
  h5?: JsxDOMStyle.t,
  h6?: JsxDOMStyle.t,
  subtitle1?: JsxDOMStyle.t,
  subtitle2?: JsxDOMStyle.t,
  body1?: JsxDOMStyle.t,
  body2?: JsxDOMStyle.t,
  button?: JsxDOMStyle.t,
  caption?: JsxDOMStyle.t,
  overline?: JsxDOMStyle.t,
}

type t = {
  breakpoints?: t_breakpointOptions,
  direction?: string,
  mixins?: t_mixinsOptions,
  components?: Overrides.t,
  palette?: t_paletteOptions,
  shadows?: array<string>,
  shape?: t_shapeOptions,
  spacing?: int => int,
  transitions?: transitionsOptions,
  typography?: t_typographyOptions,
  unstable_strictMode?: bool,
  zIndex?: zIndex,
}

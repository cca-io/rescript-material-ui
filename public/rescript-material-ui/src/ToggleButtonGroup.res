type color_enum = [#standard | #primary | #secondary | #error | #info | #success | #warning]

module Color = {
  type t
  external enum: color_enum => t = "%identity"
  external string: string => t = "%identity"
}

type orientation = [#horizontal | #vertical]

type size_enum = [#small | #medium | #large]

module Size = {
  type t
  external enum: size_enum => t = "%identity"
  external string: string => t = "%identity"
}

module Sx_arrayOf = {
  type t
  external sx_arrayOf_func: Any.t => t = "%identity"
  external obj: {..} => t = "%identity"
  external bool: bool => t = "%identity"
}

module Sx = {
  type t
  external arrayOf: array<Sx_arrayOf.t> => t = "%identity"
  external sx_func: Any.t => t = "%identity"
  external obj: {..} => t = "%identity"
}

@react.component @module("@mui/material")
external make: (
  ~children: React.element=?,
  ~className: string=?,
  ~color: Color.t=?,
  ~disabled: bool=?,
  ~exclusive: bool=?,
  ~fullWidth: bool=?,
  ~onChange: (ReactEvent.Form.t, Any.t) => unit=?,
  ~orientation: orientation=?,
  ~size: Size.t=?,
  ~sx: Sx.t=?,
  ~value: Any.t=?,
  ~id: string=?,
  ~style: ReactDOM.Style.t=?,
  ~key: string=?,
  ~ref: ReactDOM.domRef=?,
) => React.element = "ToggleButtonGroup"

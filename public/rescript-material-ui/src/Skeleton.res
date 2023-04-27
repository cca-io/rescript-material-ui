module Animation: {
  type t
  let pulse: t
  let wave: t
  let \"false": t
} = {
  @unboxed
  type rec t = Any('a): t

  let pulse = Any("pulse")
  let wave = Any("wave")
  let \"false" = Any(false)
}

module Height = {
  type t
  external int: int => t = "%identity"
  external float: float => t = "%identity"
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

type variant_enum = [#circular | #rectangular | #rounded | #text]

module Variant = {
  type t
  external enum: variant_enum => t = "%identity"
  external string: string => t = "%identity"
}

module Width = {
  type t
  external int: int => t = "%identity"
  external float: float => t = "%identity"
  external string: string => t = "%identity"
}

@react.component @module("@mui/material")
external make: (
  ~animation: Animation.t=?,
  ~children: React.element=?,
  ~className: string=?,
  ~component: React.element=?,
  ~height: Height.t=?,
  ~style: ReactDOM.Style.t=?,
  ~sx: Sx.t=?,
  ~variant: Variant.t=?,
  ~width: Width.t=?,
  ~id: string=?,
  ~key: string=?,
  ~ref: ReactDOM.domRef=?,
) => React.element = "Skeleton"

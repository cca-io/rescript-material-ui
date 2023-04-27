module Classes = {
  type t = {"root": option<string>, "disabled": option<string>, "focusVisible": option<string>}
  @obj
  external make: (~root: string=?, ~disabled: string=?, ~focusVisible: string=?, unit) => t = ""
}

module Component = {
  type t
  external string: string => t = "%identity"
  external callback: (unit => React.element) => t = "%identity"
  external element: React.element => t = "%identity"
}

module TabIndex = {
  type t
  external int: int => t = "%identity"
  external float: float => t = "%identity"
  external string: string => t = "%identity"
}

type type_enum = [#button | #reset | #submit]

module Type = {
  type t
  external enum: type_enum => t = "%identity"
  external string: string => t = "%identity"
}

type rel = [
  | #alternate
  | #author
  | #bookmark
  | #"external"
  | #help
  | #license
  | #next
  | #nofollow
  | #noreferrer
  | #noopener
  | #prev
  | #search
  | #tag
]

@react.component @module("@material-ui/core")
external make: (
  ~centerRipple: bool=?,
  ~children: React.element=?,
  ~classes: Classes.t=?,
  ~className: string=?,
  ~component: Component.t=?,
  ~disabled: bool=?,
  ~disableRipple: bool=?,
  ~disableTouchRipple: bool=?,
  ~focusRipple: bool=?,
  ~focusVisibleClassName: string=?,
  ~href: string=?,
  ~onBlur: ReactEvent.Focus.t => unit=?,
  ~onClick: ReactEvent.Mouse.t => unit=?,
  ~onDragLeave: ReactEvent.Mouse.t => unit=?,
  ~onFocus: ReactEvent.Focus.t => unit=?,
  ~onFocusVisible: Any.t=?,
  ~onKeyDown: ReactEvent.Keyboard.t => unit=?,
  ~onKeyUp: ReactEvent.Keyboard.t => unit=?,
  ~onMouseDown: ReactEvent.Mouse.t => unit=?,
  ~onMouseLeave: ReactEvent.Mouse.t => unit=?,
  ~onMouseUp: ReactEvent.Mouse.t => unit=?,
  ~onTouchEnd: ReactEvent.Touch.t => unit=?,
  ~onTouchMove: ReactEvent.Touch.t => unit=?,
  ~onTouchStart: ReactEvent.Touch.t => unit=?,
  ~tabIndex: TabIndex.t=?,
  ~\"TouchRippleProps": {..}=?,
  ~\"type": Type.t=?,
  ~id: string=?,
  ~style: ReactDOM.Style.t=?,
  ~target: string=?,
  ~rel: rel=?,
  ~key: string=?,
  ~ref: ReactDOM.domRef=?,
) => React.element = "ButtonBase"
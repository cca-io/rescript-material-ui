module BackdropComponent: {
  type t
  let string: string => t
  let backdropComponent_func: MaterialUi_Types.any => t
  let element: React.element => t
} = {
  @unboxed
  type rec t = Any('a): t
  let string = (v: string) => Any(v)
  let backdropComponent_func = (v: MaterialUi_Types.any) => Any(v)
  let element = (v: React.element) => Any(v)
}

module Container: {
  type t
  let custom: Dom.element => t
  let element: React.element => t
  let container_func: MaterialUi_Types.any => t
} = {
  @unboxed
  type rec t = Any('a): t
  let custom = (v: Dom.element) => Any(v)
  let element = (v: React.element) => Any(v)
  let container_func = (v: MaterialUi_Types.any) => Any(v)
}

@react.component @module("@material-ui/core")
external make: (
  ~\"BackdropComponent": BackdropComponent.t=?,
  ~\"BackdropProps": {..}=?,
  ~children: 'children=?,
  ~closeAfterTransition: bool=?,
  ~container: Container.t=?,
  ~disableAutoFocus: bool=?,
  ~disableBackdropClick: bool=?,
  ~disableEnforceFocus: bool=?,
  ~disableEscapeKeyDown: bool=?,
  ~disablePortal: bool=?,
  ~disableRestoreFocus: bool=?,
  ~disableScrollLock: bool=?,
  ~hideBackdrop: bool=?,
  ~keepMounted: bool=?,
  ~manager: {..}=?,
  ~onBackdropClick: ReactEvent.Mouse.t => unit=?,
  ~onClose: (ReactEvent.Synthetic.t, string) => unit=?,
  ~onEscapeKeyDown: ReactEvent.Keyboard.t => unit=?,
  ~onRendered: ReactEvent.Synthetic.t => unit=?,
  ~\"open": bool,
  ~id: string=?,
  ~style: ReactDOM.Style.t=?,
  ~key: string=?,
  ~ref: ReactDOM.domRef=?,
) => React.element = "Modal"
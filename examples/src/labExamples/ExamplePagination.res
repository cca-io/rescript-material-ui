open MuiLab

@react.component
let make = () => {
  <div>
    <Pagination count={Mui.Number.int(10)} />
    <Pagination count={Mui.Number.int(10)} color=#primary />
    <Pagination count={Mui.Number.int(10)} color=#secondary />
    <Pagination count={Mui.Number.int(10)} disabled=true />
  </div>
}
module App = {
  open Mui

  @react.component
  let make = () => <>
    <NewImplementation />
    <br />
    <br />
    <NewImplementationTheme />
    <br />
    <br />
    <center>
      <Typography variant=#h4> {React.string("PPX Result")} </Typography>
    </center>
    <br />
    <br />
    <NewImplementationPpx />
    <br />
    <br />
    <NewImplementationThemePpx />
  </>
}

switch ReactDOM.querySelector("#app") {
| Some(domElement) => ReactDOM.Client.createRoot(domElement)->ReactDOM.Client.Root.render(<App />)
| None => ()
}

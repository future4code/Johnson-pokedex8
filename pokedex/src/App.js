import React from "react";
import GlobalStates from "./GlobalComponents/GlobalStates";
import Router from "./Route/router";



function App() {
  return (
    <GlobalStates>
      <Router/>
  </GlobalStates>
  );
}

export default App;

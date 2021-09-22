import React from "react";
import axios from "axios";
import { ErrorPage } from "./Pages/Error";
import { HomePage } from "./Pages/Home";
import {BrowserRouter, Switch, Route} from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path={"/"}>
        <HomePage/>
{/*       </Route>
      <Route path={"/pokedex"}>
        <Pokedex/>
      <Route path={"/Error"}>
        <ErrorPage/>
      </Route> */}
      </Route>
    </Switch>
    </BrowserRouter>
  
  );
}

export default App;

import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import PokemonDetails from "../Pages/PokeDetails";
import { HomePage } from "../Pages/Home";
import { ErrorPage } from "../Pages/Error";
import { Pokedex } from "../Pages/Pokedex";

const Router = () => {

    return(
        <BrowserRouter>
    <Switch>
      <Route exact path={"/"}>
        <HomePage/>
      </Route>
      <Route exact path={"/pokemonDetails"}>
        <PokemonDetails/>
      </Route>
      <Route exact path={"/pokedex"}>
        <Pokedex/>
      <Route>
        <ErrorPage/>
      </Route>
      </Route>
    </Switch>
    </BrowserRouter>
    )
    
}

export default Router;
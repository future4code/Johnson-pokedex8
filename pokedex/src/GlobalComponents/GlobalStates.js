import React, { useState, useEffect } from "react";
import { BASE_URL } from "../API/api";
import GlobalComponents from "./GlobalComponent";
import axios from "axios";

const GlobalStates = (props) => {
    const [pokemons, setPokemons] = useState([]);
    const [pokemonInformation, setPokemonInformation] = useState([])

    useEffect(() => {
        getPokemons()
    }, [])

    useEffect(() => {
        let pokemonsDetails = [];
        pokemons.forEach((poke) => {
            axios.get(`${BASE_URL}/pokemon/${poke.name}`).then((response) => {
                pokemonsDetails.push(response.data)
                if (pokemonsDetails.length === 20) {
                    let orderedList = pokemonsDetails.sort((a, b) => {
                        return a.id - b.id
                    })
                    setPokemonInformation(orderedList)
                }
            }).catch((error) => {
                console.log(error.message)
            })
        })
    }, [pokemons])

    const getPokemons = () => {
        axios.get(`${BASE_URL}/pokemon?/limit=20}`).then((response) => {
            setPokemons(response.data.results);
        }).catch((error) => {
            console.log(error)
        })
    }

    const data = {
        pokemonInformation,

    }


    return (
        <GlobalComponents.Provider value={data}>
            {props.children}
        </GlobalComponents.Provider>
    )

}

export default GlobalStates;
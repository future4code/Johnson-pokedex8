import React, { useContext , useEffect, useState} from "react";
import GlobalComponents from "../GlobalComponents/GlobalComponent";
import { useHistory, useParams} from "react-router";
import { BASE_URL } from "../API/api";
import axios from "axios"


const PokemonDetails = () => {

    const [pokemon, setPokemons] = useState()
    console.log(pokemon)
    const history = useHistory()
    const pathParams = useParams()
    console.log(pathParams)
    const goBack = () => {
        history.goBack()
    }

    useEffect(() => {
            getPokemon()
    }, [])

    const getPokemon = () =>{ axios.get(`${BASE_URL}/pokemon/${pathParams}`)
    .then((response)=>{
        setPokemons(response.data)
    }).catch((err)=>{
        console.log(err.message);
    })
}

    const { pokemonInformation } = useContext(GlobalComponents)


    return(
        <div>
            <p>PokemonDetails</p>
            <p>{pathParams.name}</p>
            <button onClick={goBack}>Voltar</button>
        </div>
    )
}

export default PokemonDetails;


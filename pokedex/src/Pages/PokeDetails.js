import React from "react";
import { useHistory } from "react-router";


const PokemonDetails = () => {
    const history = useHistory()
    const goBack = () => {
        history.goBack()
    }

    return(
        <div>
            <p>PokemonDetails</p>
            <button onClick={goBack}>Voltar</button>
        </div>
    )
}

export default PokemonDetails;
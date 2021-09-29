import React, { useContext } from "react";
import GlobalComponents from "../GlobalComponents/GlobalComponent";
import styled from "styled-components";
import { useHistory } from "react-router";

const ImagePokemon = styled.img `
    width: 20px,
`

const TelaPokemons = styled.div `
    display: grid; 
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;


`
const PokemonCard = styled.div `
    display: flex;
    flex-direction: column; 
    background-color: gray;


`

export const HomePage = () => {
    const { pokemonInformation } = useContext(GlobalComponents)
    console.log(pokemonInformation)
    
    const history = useHistory()
    const changeToPokedex = () => {
        history.push("/pokemonDetails")

    }
    return (
        <TelaPokemons>
        { pokemonInformation && pokemonInformation.map((pokemons) => {
            return(
                <PokemonCard>
                   
                    <div>
                   <ImagePokemon src={pokemons.sprites.front_default} />
                   <p>{pokemons.name}</p>
                   </div>
                   <div>
                   <button>Adicionar a Pokedex</button>
                   <button onClick={changeToPokedex}>Ver Detalhes</button>
                   </div>
                    
                   
                
                </PokemonCard>
            )
        })} 
        </TelaPokemons>
    );
}
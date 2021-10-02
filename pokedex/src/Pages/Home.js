import React, { useContext } from "react";
import GlobalComponents from "../GlobalComponents/GlobalComponent";
import styled from "styled-components";
import { useHistory, useParams } from "react-router";

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
    console.log("information",pokemonInformation)
    
    let {name} = useParams()


    const history = useHistory()
    const changeToDetails = (name) => {
        history.push(`/pokemonDetails/${name}`)
        console.log(name)


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
                   <button onClick={() => changeToDetails(pokemons.name)}>Ver Detalhes</button>
                   </div>
                    
                   
                
                </PokemonCard>
            )
        })} 
        </TelaPokemons>
    );
}
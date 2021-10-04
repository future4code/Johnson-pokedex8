import React, { useContext } from "react";
import GlobalComponents from "../GlobalComponents/GlobalComponent";
import styled from "styled-components";
import { useHistory, useParams } from "react-router";
import styles, {FooterContainer, CardDiv, HeaderCard, BackButton, HeaderContainer, PokeName, DetailsBox,Container, DetailsContainer, ImagePokemon, AddButton, DetailsButton } from "./styles";

const TelaPokemons = styled.div `
    display: grid; 
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;


`
const PokemonCard = styled.div `
    display: flex;
    flex-direction: column; 
    background-color: whitesmoke;
    box-shadow: 1px 5px 10px #1e2d59;

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
    const changeToPokedex = (name) => {
        history.push(`/pokedex`)
        

    }
 
    return (
    <Container>    
        <HeaderContainer>
            <h3>Lista de Pokemons</h3>
            <BackButton onClick={() => changeToPokedex()}>Ir para Pokedex</BackButton>
        </HeaderContainer>
        
        <TelaPokemons>
        { pokemonInformation && pokemonInformation.map((pokemons) => {
            
            return(
            
                <PokemonCard>
                <CardDiv>
                <h3>{pokemons.name}</h3>
                </CardDiv>
                
                   
                <CardDiv>
                   <ImagePokemon src={pokemons.sprites.front_default} />
                </CardDiv>

                <CardDiv>
                   <AddButton>Adicionar a Pokedex</AddButton>
                   <DetailsButton onClick={() => changeToDetails(pokemons.name)}>Ver Detalhes</DetailsButton>
                </CardDiv>
                    
                </PokemonCard>
            )
        })} 
        </TelaPokemons>
        <FooterContainer>
                <AddButton>Home</AddButton>
                <p>Desenvolvido por: Isis Pedroni, Leonardo Mosso, Luana Ferreira e Luis Vieira</p>
        </FooterContainer>
    </Container> 
    );

}
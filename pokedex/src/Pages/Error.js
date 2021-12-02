import React, { useContext } from "react";
import GlobalComponents from "../GlobalComponents/GlobalComponent";
import styled from "styled-components";
import { useHistory, useParams } from "react-router";
import styles, {CardDiv, HeaderCard, BackButton, HeaderContainer, PokeName, DetailsBox,Container, DetailsContainer, ImagePokemon, AddButton, DetailsButton, FooterContainer } from "./styles";

export const ErrorPage = () => {
    return (
        
        <Container>
            <HeaderContainer>
            <h3>PokeDex</h3>
            <BackButton>Lista de Pokemons</BackButton>
            </HeaderContainer>

            <CardDiv>
            <iframe 
                src="https://giphy.com/embed/aYpmlCXgX9dc09dbpl"
                width="480"
                height="480"
                frameBorder="0"
                class="giphy-embed"
                allowFullScreen
            ></iframe>
           
            </CardDiv>
            <FooterContainer>
                <AddButton>Voltar</AddButton>
                <p>Desenvolvido por: Isis Pedroni, Leonardo Mosso, Luana Ferreira e Luis Vieira</p>
        </FooterContainer>
        </Container>
      );
    }
import React from "react";
import {useHistory} from "react-router-dom";
import { HomePage } from "../../Pages/Home";
import { HeaderContainer, LeftHeaderButton, RightHeaderButton } from "./styled";


const Header = ({ leftButtonFunction, title, showRightButton }) => {
    const history = useHistory();
  
    const leftButtonTitle = () => {
      switch (title) {
        case "Lista de Pokémons":
          return "Ir para Pokedex";
        case "Pokédex":
          return "Voltar para lista de pokemons";
        default:
          return "Voltar";
      }
    };
  
    return (
      <HeaderContainer>
        <LeftHeaderButton onClick={leftButtonFunction}>
          {leftButtonTitle()}
        </LeftHeaderButton>
        <h1>{title}</h1>
        {showRightButton && (
          <RightHeaderButton onClick={() => HomePage(history)}>
            Ir para pokedex
          </RightHeaderButton>
        )}
      </HeaderContainer>
    );
  };
  
  export default Header;
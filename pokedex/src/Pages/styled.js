import styled from "styled-components";


export const HeaderContainer = styled.header`
  height: 8vh;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: relative;
`;

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

import styled from "styled-components";


export const HeaderContainer = styled.header`
  height: 8vh;
  background: #d9042b;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #f2cb05;
  border-color: #1e2d59;
  position: static;
  padding: 10px;
  margin-bottom: 10px;
  box-shadow: 4px 2px 8px #0C1226;
`;
export const HeaderCard = styled.div`
    margin: 10px;
   
`
export const ImagePokemon = styled.img `
    width: 180px;

`
export const ImagePokemonDetails = styled.img `
    width: 200px;
    box-shadow: 4px 4px 8px #0C1226;
    margin: 5px;

`

export const TelaPokemons = styled.div `
    display: grid; 
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;


`
export const PokemonCard = styled.div `
    display: flex;
    flex-direction: column; 
    background-color: gray;


`
export const PokeName = styled.div `
    color: #1e2d59;
    font-family: Arial, Helvetica, sans-serif;
    padding: 10px;
    font-size: 36px;


`;

export const BackButton = styled.button `
    color: #f2cb05;
    border-radius: 5px;
    width: 10vw;
    background-color: #1e2d59 ;
`;

export const AddButton = styled.button `
    color: #f2cb05;
    border-radius: 5px;
    width: 10vw;
    height: 5vh;
    background-color: #d9042b ;
`;

export const DetailsButton = styled.button `
 color: #f2cb05;
    border-radius: 5px;
    width: 10vw;
    height: 5vh;
    background-color: #1e2d59 ;
`;

export const Container = styled.div `
    display: flex-flexbox; 
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    border-color: #1e2d59 ;
    padding: 5px;
    box-shadow: 4px 8px 8px #0C1226;
    
`

export const DetailsContainer = styled.div `
    display: flex-box; 
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    border-color: black;
    background-color: white;
    padding: 5px;
    margin: 10px;

`
export const DetailsBox = styled.div `
    display: flex-flexbox; 
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    border-color: black;
    background-color: snow;
    padding: 5px;
    margin: 10px;
    box-shadow: 4px 8px 8px gray;

    `

export const CardDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding-bottom: 5px;
`
export const FooterContainer = styled.footer`
  height: 8vh;
  background: #1e2d59;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #f2cb05;
  border-color: #1e2d59;
  position: static;
  padding: 10px;
  margin-bottom: 10px;
  box-shadow: 4px 2px 8px #0C1226;
`;
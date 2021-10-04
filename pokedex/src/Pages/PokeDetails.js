import React, { useContext , useEffect, useState} from "react";
import GlobalComponents from "../GlobalComponents/GlobalComponent";
import { useHistory, useParams} from "react-router";
import { BASE_URL } from "../API/api";
import axios from "axios";
import styles, {AddButton, FooterContainer, BackButton, HeaderContainer, ImagePokemon, PokeName, DetailsBox,Container, DetailsContainer, ImagePokemonDetails } from "./styles";


const PokemonDetails = () => {

    const [pokemon, setPokemons] = useState()
    const [selectedPokemon, setSelectedPokemon] = useState()
    console.log(pokemon)
    const history = useHistory()
    const pathParams = useParams()
    console.log(pathParams)
    const goBack = () => {
        history.goBack()
    }

    useEffect(() => {
        getPokemon()
        let current 
        if(pokemon){
            current = pokemonInformation.find((item) => {
                return item.name === pathParams.name
                
            }
            
            )
            setSelectedPokemon(current)
        } 
        if (!pokemon) {
                axios
                  .get(`${BASE_URL}/pokemon/${pathParams.name}`)
                  .then((res) => setSelectedPokemon(res.data))
                  .catch((err) => console.log(err.response.message));}

           
    },[])

    console.log("informacoes", {selectedPokemon})

    // useEffect(() => {
    //         let current = [];
    //         // getPokemon()
    //         if(pokemon) {
    //             current = pokemonInformation.find((item) => {
    //                 return item.name === pathParams.name 
    //             })
    //         }

    //         setSelectedPokemon(current)

            

           
                
    // }, [selectedPokemon, pokemon])

    

   
    
    

    const getPokemon = () =>{ axios.get(`${BASE_URL}/pokemon/${pathParams.name}`)
    .then((response)=>{
        setPokemons(response.data)
        

        
    }).catch((err)=>{
        console.log(err.message);
    })

   
}



    const { pokemonInformation } = useContext(GlobalComponents)
    


    return(


    <div>
            <HeaderContainer>
            <h3>PokemonDetails</h3>
            <BackButton onClick={goBack}>Voltar</BackButton>
            </HeaderContainer>

            {selectedPokemon && (
                <Container>

            <DetailsContainer>   
                <PokeName>{pathParams.name}</PokeName>
                <ImagePokemonDetails src={selectedPokemon.sprites.front_default} />
                <ImagePokemonDetails src={selectedPokemon.sprites.back_default} />
            </DetailsContainer>            
            
            <DetailsBox>
                    <h3> Habilidades: </h3>
                <p>{selectedPokemon.abilities[0].ability.name}</p>
                <p>{selectedPokemon.abilities[1].ability.name}</p>

            </DetailsBox>

            <DetailsBox>
                    <h3> Principais Ataques: </h3>
                <p>{selectedPokemon.moves[0].move.name}</p>
                <p>{selectedPokemon.moves[1].move.name}</p>
                <p>{selectedPokemon.moves[2].move.name}</p>
                <p>{selectedPokemon.moves[3].move.name}</p>
                <p>{selectedPokemon.moves[4].move.name}</p>

            </DetailsBox>

            <DetailsBox>
                    <h3> Poderes: </h3>
                <p>{selectedPokemon.stats[0].stat.name}: {selectedPokemon.stats[0].base_stat} </p>
                <p>{selectedPokemon.stats[1].stat.name}: {selectedPokemon.stats[1].base_stat} </p>
                <p>{selectedPokemon.stats[2].stat.name}: {selectedPokemon.stats[2].base_stat} </p>
                <p>{selectedPokemon.stats[3].stat.name}: {selectedPokemon.stats[3].base_stat} </p>
                <p>{selectedPokemon.stats[4].stat.name}: {selectedPokemon.stats[4].base_stat} </p>
                <p>{selectedPokemon.stats[5].stat.name}: {selectedPokemon.stats[5].base_stat} </p>

            </DetailsBox>
            <FooterContainer>
                <AddButton onClick={goBack}>Voltar</AddButton>
                <p>Desenvolvido por: Isis Pedroni, Leonardo Mosso, Luana Ferreira e Luis Vieira</p>
            </FooterContainer>
        </Container>
            )}
           
    </div>    
        
        
        
    )
}

export default PokemonDetails;


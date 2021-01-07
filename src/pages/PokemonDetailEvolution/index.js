import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import CardDetailEvolution from '../../components/CardDetailEvolution';
import CardNavbar from '../../components/CardNavbar';
import CardDetailHero from '../../components/CardDetailHero';

const PokemonDetailEvolution = () => {
    const { pokemonName } = useParams()
    const [pokemon, setPokemon] = useState(null)
    
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
        .then(res => setPokemon(res.data))
    }, [pokemonName])

    if (!pokemon) return null

    return (
        <div id={pokemon?.types[0]?.type?.name ? pokemon.types[0].type.name : `unknown`}>
            <CardDetailHero pokemon={pokemon} />
            <div className="py-3" id="NavbarPokemonDetail">
                <CardNavbar pokemonName={pokemonName.toLowerCase()} />
                <CardDetailEvolution pokemon={pokemon} />
            </div>
            
        </div>
    )
}

export default PokemonDetailEvolution

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import CardDetailBaseStats from '../../components/CardDetailBaseStats';
import CardNavbar from '../../components/cardNavbar';
import CardDetailHero from '../../components/cardDetailHero';

const PokemonDetailBaseStats = () => {
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
                <CardDetailBaseStats pokemon={pokemon} />
            </div>
            
        </div>
    )
}

export default PokemonDetailBaseStats

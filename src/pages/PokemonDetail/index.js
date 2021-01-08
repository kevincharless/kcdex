import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import CardDetailHero from '../../components/CardDetailHero';
import CardDetail from '../../components/CardDetail';
import { useSelector } from 'react-redux';

const PokemonDetail = () => {
    const prevPath = useSelector(state => state.pokemons.prevPath)
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
                <CardDetail pokemon={pokemon} pokemonName={pokemonName} prevPath={prevPath} />
            </div>
        </div>
    )
}

export default PokemonDetail

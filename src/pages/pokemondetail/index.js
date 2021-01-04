import React, { useEffect, useState } from 'react';
import {
    Col,
    Navbar,
    Row
} from 'reactstrap';
import { useParams } from 'react-router-dom';

import { ReactComponent as LogoPokemon } from '../../assets/images/logopokemon.svg'
import CardDetail from '../../components/cardDetail';
import axios from 'axios';

import shilotte from '../../assets/images/shilotte.svg'

const PokemonDetail = () => {
    const { pokemonName } = useParams()
    const [pokemon, setPokemon] = useState(null)
    
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
        .then(res => setPokemon(res.data))
    }, [pokemonName])

    if (!pokemon) return null

    return (
        <div id={pokemon?.types[0]?.type?.name ? pokemon.types[0].type.name : `unknown`}>
            <Row className="p-4 pb-4" id="PokemonDetailNav">
                <Row className="me-auto d-flex justify-content-between" id="header">
                    <Col>
                        <span className="d-block text-white fs-1 fw-bold lh-1 mb-3" id="PokemonDetailName">
                            {`${pokemon?.name?.charAt(0).toUpperCase() + pokemon?.name?.substr(1).toLowerCase()}`}
                        </span>
                        <span className="w-50">
                            {pokemon.types.map(pokemonType =>
                                <span className="d-block px-2 mt-2 fs-6 text-center w-25" id="PokemonTypes" key={pokemonType.slot}>
                                    {pokemonType.type.name}
                                </span>
                            )}
                            {!pokemon.types[0] ? (
                                <span className="d-block px-2 mt-2 text-center w-25" id="PokemonTypes">
                                    type unknown
                                </span>
                            ) : (
                                null
                            )}
                        </span>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <img id="PokemonDetail" src={pokemon.sprites.front_default || shilotte} alt="Pokemon" />
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <span className="d-block text-white fs-1 fw-bold lh-1">
                            {`# ${pokemon.id}`}
                        </span>
                        <LogoPokemon id="LogoPokemonDetail"/>
                    </Col>
                </Row>
            </Row>
            <Navbar className="d-flex align-items-end justify-content-center p-3" id="NavbarPokemonDetail" expand="md">
                <CardDetail />
            </Navbar>
            
        </div>
    )
}

export default PokemonDetail

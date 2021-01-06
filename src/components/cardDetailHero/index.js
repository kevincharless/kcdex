import React, { useEffect, useState } from 'react';
import {
    Col,
    Row
} from 'reactstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { ReactComponent as LogoPokemon } from '../../assets/images/logopokemon.svg'
import shilotte from '../../assets/images/shilotte.svg'

const CardDetailHero = (props) => {

    if (!props.pokemon) return null

    return (
        <div >
            <Row className="p-4 pb-4" id="PokemonDetailNav">
                <Row className="me-auto d-flex justify-content-between" id="header">
                    <Col>
                        <span className="d-block text-white fs-1 fw-bold lh-1 mb-3" id="PokemonDetailName">
                            {`${props.pokemon?.name?.charAt(0).toUpperCase() + props.pokemon?.name?.substr(1).toLowerCase()}`}
                        </span>
                        <span className="w-50">
                            {props.pokemon.types.map(pokemonType =>
                                <span className="d-block px-2 mt-2 fs-6 text-center w-25" id="PokemonTypes" key={pokemonType.slot}>
                                    {pokemonType.type.name}
                                </span>
                            )}
                            {!props.pokemon.types[0] ? (
                                <span className="d-block px-2 mt-2 text-center w-25" id="PokemonTypes">
                                    type unknown
                                </span>
                            ) : (
                                null
                            )}
                        </span>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <img id="PokemonDetail" src={props.pokemon.sprites.front_default || shilotte} alt="Pokemon" />
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <span className="d-block text-white fs-1 fw-bold lh-1">
                            {`# ${props.pokemon.id}`}
                        </span>
                        <LogoPokemon id="LogoPokemonDetail"/>
                    </Col>
                </Row>
            </Row>
        </div>
    )
}

export default CardDetailHero

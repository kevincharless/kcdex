import React from 'react'
import {
    Col,
    Row
} from 'reactstrap';

import electric from '../../assets/images/electric.svg'
import grass from '../../assets/images/grass.svg'

const Card = (props) => {
    return (
        <>
            <div id={props.type} className="type my-2">
                <Row>
                    <span className="d-flex justify-content-end fw-bold" id="PokemonId">{`#${props.pokemon.id}`}</span>
                </Row>
                <Row>
                    <span className="fw-bold" id="PokemonName">{props.pokemon.name}</span>
                </Row>
                <Row className="d-flex align-items-end">
                    <Col id="ColPokemonTypes">
                        {props.pokemon.types.map(pokemonType =>
                            <span className="d-block px-2 mt-2 text-center" id="PokemonTypes" key={pokemonType.slot}>
                                {pokemonType.type.name}
                            </span>
                        )}
                    </Col>

                    <Col>
                        <span><img id="Pokemon" src={props.pokemon.sprites.front_default} alt="Pokemon" /></span>
                    </Col>
                </Row>
                <img id="PokemonTypeCardIcon" src={electric} alt="Pokemon Type Icon" />
            </div>
        </>
    )
}

export default Card

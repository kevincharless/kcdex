import React, { useEffect, useState } from 'react'
import {
    Col,
    Container,
    Row
} from 'reactstrap';
import axios from 'axios';

const CardDetailAbout = (props) => {
    const [pokemonSpecies, setPokemonSpecies] = useState()

    useEffect(() => {
        axios.get(props.pokemon.species.url)
        .then(res => setPokemonSpecies(res.data))
    }, [])
    
    if(!props.pokemon) return null

    return (
        <Container className="py-5">
            <Row>
                <Col xs="6"><h3 className="fw-bold">Pokémon Data</h3></Col>
                <Col xs="6"><h3 className="fw-bold">Training</h3></Col>
            </Row>
            <Row>
                <Col className="fs-5" xs="6" md="3">
                    <span className="d-block">Color</span>
                    <span className="d-block">Height</span>
                    <span className="d-block">Weight</span>
                    <span className="d-block">Status</span>
                    <span className="d-block">Abilities</span>
                </Col>
                <Col className="fs-5" xs="6" md="3">
                    <span className="d-block">{`${pokemonSpecies?.color?.name.charAt(0).toUpperCase() + pokemonSpecies?.color?.name.slice(1)}`}</span>
                    <span className="d-block">{`${props.pokemon.height/10} m`}</span>
                    <span className="d-block">{`${props.pokemon.weight/10} kg`}</span>
                    <span className="d-block">
                        {pokemonSpecies?.is_baby ? (
                            "Baby Pokemon"
                        ) : (
                            pokemonSpecies?.is_legendary ? (
                                "Legendary Pokemon"
                            ) : (
                                pokemonSpecies?.is_mythical ? (
                                    "Mythical Pokemon"
                                ) : (
                                    "Regular Pokemon"
                                )
                            )
                        )}
                    </span>
                    {props.pokemon.abilities.map((ability, index) =>
                        ability.is_hidden ? (
                            <span className="d-block" key={index}>{`${ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1).replace(/-/g, ' ')} (hidden ability)`}</span>
                        ) : (
                            <span className="d-block" key={index}>{ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1).replace(/-/g, ' ')}</span>
                        )
                    )}
    
                </Col>
                <Col className="fs-5" xs="6" md="3">
                    <span className="d-block">Catch Rate</span>
                    <span className="d-block">Base Friendship</span>
                    <span className="d-block">Base Exp.</span>
                    <span className="d-block">Growth Rate</span>

                    <br />

                    <h3 className="fw-bold">Breeding</h3>
                    <span className="d-block">Egg Cycle</span>
                    <span className="d-block">Egg Groups</span>
                </Col>
                <Col className="fs-5" xs="6" md="3">
                    <span className="d-block">{pokemonSpecies?.capture_rate}</span>
                    <span className="d-block">{pokemonSpecies?.base_happiness}</span>
                    <span className="d-block">{props.pokemon.base_experience}</span>
                    <span className="d-block">{pokemonSpecies?.growth_rate.name}</span>

                    <br />
                    <h3 className="fw-bold invisible">Breeding</h3>
                    <span className="d-block">{pokemonSpecies?.hatch_counter}</span>
                    {pokemonSpecies?.egg_groups.map((eggGroup, index) => 
                        <span className="d-block" key={index}>{eggGroup.name.charAt(0).toUpperCase() + eggGroup.name.slice(1)}</span>
                    )}
                </Col>
            </Row>
        </Container>
    )
}

export default CardDetailAbout

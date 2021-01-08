import React from 'react'
import {
    Col,
    Container,
    Row
} from 'reactstrap';
import _ from 'lodash'

import { formatDashString } from '../../util/formatDashString';
import { refactorObject } from '../../util/refactorObject';

const CardDetailAbout = (props) => {
    if(!props.pokemon) return null
    if(!props.pokemonName) return null
    if(!props.pokemonSpecies) return null
    if(!props.pokemonEvolutinChain) return null

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
                    <span className="d-block">{`${formatDashString(props.pokemonSpecies.color.name)}`}</span>
                    <span className="d-block">{`${props.pokemon.height/10} m`}</span>
                    <span className="d-block">{`${props.pokemon.weight/10} kg`}</span>
                    <span className="d-block">
                        {props.pokemonSpecies?.is_baby ? (
                            "Baby Pokemon"
                        ) : (
                            props.pokemonSpecies?.is_legendary ? (
                                "Legendary Pokemon"
                            ) : (
                                props.pokemonSpecies?.is_mythical ? (
                                    "Mythical Pokemon"
                                ) : (
                                    "Regular Pokemon"
                                )
                            )
                        )}
                    </span>
                    {props.pokemon.abilities.map((ability, index) =>
                        ability.is_hidden ? (
                            <span className="d-block" key={index}>{`${formatDashString(ability.ability.name)} (hidden ability)`}</span>
                        ) : (
                            <span className="d-block" key={index}>{formatDashString(ability.ability.name)}</span>
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
                    <span className="d-block">{props.pokemonSpecies?.capture_rate}</span>
                    <span className="d-block">{props.pokemonSpecies?.base_happiness}</span>
                    <span className="d-block">{props.pokemon.base_experience}</span>
                    <span className="d-block">{props.pokemonSpecies?.growth_rate.name}</span>

                    <br />
                    <h3 className="fw-bold invisible">Breeding</h3>
                    <span className="d-block">{props.pokemonSpecies.hatch_counter}</span>
                    {props.pokemonSpecies.egg_groups.map((eggGroup, index) => 
                        <span className="d-block" key={index}>{formatDashString(eggGroup.name)}</span>
                    )}
                </Col>
            </Row>
            <Row>
                <Col xs="6"><h3 className="fw-bold mt-3">Pokémon Evolution Requirements</h3></Col>
            </Row>
            <Row>
                <Col className="fs-5" xs="12">
                    {props.pokemonEvolutinChain?.chain?.species?.name !== props.pokemonName ? (
                        props.pokemonEvolutinChain?.chain?.evolves_to.map((pokemon, index) =>
                            props.pokemonName.includes(pokemon.evolves_to[0]?.species?.name) ? (
                                pokemon.evolves_to[0].evolution_details.map(evolve => {
                                    return _.toPairsIn(refactorObject(evolve)).map((pokemonEvolveDetail, index) => {
                                        return (
                                            <Row key={index}>
                                                <Col xs="3">
                                                    <p className="my-0">{formatDashString(pokemonEvolveDetail[0])}</p>
                                                </Col>
                                                <Col xs="3">
                                                    {typeof pokemonEvolveDetail[1] === "object" ? formatDashString(pokemonEvolveDetail[1].name) : formatDashString(pokemonEvolveDetail[1].toString())}
                                                </Col>
                                            </Row>
                                        )
                                    })
                                })
                                
                            ) : (
                                null
                            )
                            
                        )
                    ) : (
                        <h6 style={{ color: "rgba(0, 0, 0, 0.5)" }}>This Pokemon doesn't have any Evolution Requirements</h6>
                    )}
                    
                </Col>
                <Col className="fs-5" xs="12">
                    
                </Col>
                <Col className="fs-5" xs="12">
                    {props.pokemonName.includes("gmax") ? (
                        <Row>
                            <Col xs="3">
                                <p className="my-0">Button</p>
                                <p className="my-0">Trigger</p>
                            </Col>
                            <Col xs="3">
                                <p className="my-0">Gigantamax button</p>
                                <p className="my-0">Button</p>
                            </Col>
                        </Row>
                        ) : (
                            props.pokemonIsMega?.is_mega ? (
                                <Row>
                                    <Col xs="3">
                                        <p className="my-0">Item</p>
                                        <p className="my-0">Trigger</p>
                                    </Col>
                                    <Col xs="3">
                                        <p className="my-0">Mega Stone</p>
                                        <p className="my-0">Use item</p>
                                    </Col>
                                </Row>
                                ) : (
                                    props.pokemonEvolutinChain?.chain?.evolves_to.map((pokemon, index) =>
                                        props.pokemonName.includes(pokemon.species.name) ? (
                                            pokemon.evolution_details.map(evolve => {
                                                return _.toPairsIn(refactorObject(evolve)).map((pokemonEvolveDetail, index) => {
                                                    return (
                                                        <Row key={index}>
                                                            <Col xs="3">
                                                                <p className="my-0">{formatDashString(pokemonEvolveDetail[0])}</p>
                                                            </Col>
                                                            <Col xs="3">
                                                                {typeof pokemonEvolveDetail[1] === "object" ? formatDashString(pokemonEvolveDetail[1].name) : formatDashString(pokemonEvolveDetail[1].toString())}
                                                            </Col>
                                                        </Row>
                                                        )
                                                    })
                                                })
                                            ) : (
                                                null
                                            )
                                        )
                                )
                        )}
                </Col>
            </Row>
        </Container>
    )
}

export default CardDetailAbout

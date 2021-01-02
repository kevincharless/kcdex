import React from 'react'
import {
    Col,
    Row
} from 'reactstrap';

import normal from '../../assets/images/normal.svg'
import fire from '../../assets/images/fire.svg'
import fighting from '../../assets/images/fighting.svg'
import water from '../../assets/images/water.svg'
import flying from '../../assets/images/flying.svg'
import grass from '../../assets/images/grass.svg'
import poison from '../../assets/images/poison.svg'
import electric from '../../assets/images/electric.svg'
import ground from '../../assets/images/ground.svg'
import psychic from '../../assets/images/psychic.svg'
import rock from '../../assets/images/rock.svg'
import ice from '../../assets/images/ice.svg'
import bug from '../../assets/images/bug.svg'
import dragon from '../../assets/images/dragon.svg'
import ghost from '../../assets/images/ghost.svg'
import dark from '../../assets/images/dark.svg'
import steel from '../../assets/images/steel.svg'
import fairy from '../../assets/images/fairy.svg'
import unknown from '../../assets/images/unknown.svg'

const Card = (props) => {
    let iconType;
    switch (props.type) {
        case 'normal':
            iconType = normal
            break
        case 'fire':
            iconType = fire
            break
        case 'fighting':
            iconType = fighting
                break
        case 'water':
            iconType = water
            break
        case 'flying':
            iconType = flying
            break
        case 'grass':
            iconType = grass
            break
        case 'poison':
            iconType = poison
            break
        case 'electric':
            iconType = electric
            break
        case 'ground':
            iconType = ground
                break
        case 'psychic':
            iconType = psychic
            break
        case 'rock':
            iconType = rock
            break
        case 'ice':
            iconType = ice
            break
        case 'bug':
            iconType = bug
            break
        case 'dragon':
            iconType = dragon
            break
        case 'ghost':
            iconType = ghost
                break
        case 'dark':
            iconType = dark
            break
        case 'steel':
            iconType = steel
            break
        case 'fairy':
            iconType = fairy
            break
        default:
            iconType = unknown
            break
    }
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
                <img id="PokemonTypeCardIcon" src={iconType} alt="Pokemon Type Icon" />
            </div>
        </>
    )
}

export default Card

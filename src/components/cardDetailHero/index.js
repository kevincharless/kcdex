import React, { useEffect, useState } from 'react';
import {
    Col,
    Row
} from 'reactstrap';

import { ReactComponent as LogoPokemon } from '../../assets/images/logopokemon.svg'

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

import shilotte from '../../assets/images/shilotte.svg'

const CardDetailHero = (props) => {
    const [iconType, setIconType] = useState(null)

    useEffect(() => {
        if (props.pokemon) {
            switch (props.pokemon?.types[0]?.type?.name) {
                case 'normal':
                    setIconType(normal)
                    break
                case 'fire':
                    setIconType(fire)
                    break
                case 'fighting':
                    setIconType(fighting)
                        break
                case 'water':
                    setIconType(water)
                    break
                case 'flying':
                    setIconType(flying)
                    break
                case 'grass':
                    setIconType(grass)
                    break
                case 'poison':
                    setIconType(poison)
                    break
                case 'electric':
                    setIconType(electric)
                    break
                case 'ground':
                    setIconType(ground)
                        break
                case 'psychic':
                    setIconType(psychic)
                    break
                case 'rock':
                    setIconType(rock)
                    break
                case 'ice':
                    setIconType(ice)
                    break
                case 'bug':
                    setIconType(bug)
                    break
                case 'dragon':
                    setIconType(dragon)
                    break
                case 'ghost':
                    setIconType(ghost)
                        break
                case 'dark':
                    setIconType(dark)
                    break
                case 'steel':
                    setIconType(steel)
                    break
                case 'fairy':
                    setIconType(fairy)
                    break
                default:
                    setIconType(unknown)
                    break
            }
        }
        
    }, [props.pokemon])

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
                    <img id="PokemonDetailTypeIcon" src={iconType} alt="Pokemon Type Icon" />
                </Row>
                
            </Row>
        </div>
    )
}

export default CardDetailHero

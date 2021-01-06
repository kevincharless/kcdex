import React, { useEffect, useState } from 'react'
import {
    Col,
    Row,
    Card as Cardrs, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import axios from '../../axios';

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

const Card = (props) => {
    const [pokemon, setPokemon] = useState(null)
    const [iconType, setIconType] = useState(null)

    useEffect(() => {
        let isMount = true
        axios.get(props.url)
        .then(res => isMount && setPokemon(res.data))

        return () => isMount = false
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (pokemon) {
            switch (pokemon?.types[0]?.type?.name) {
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
        
    }, [pokemon])

    if (!pokemon) return null
    
    return (
        <div>
            <Cardrs className="type my-2 pt-2" id={pokemon?.types[0]?.type?.name ? pokemon.types[0].type.name : `unknown`}>
                <CardBody className="p-3">
                    <CardSubtitle id="PokemonId" tag="h6" className="d-flex justify-content-end fw-bold">{`#${pokemon.id}`}</CardSubtitle>
                    <CardTitle id="PokemonName" className="mb-0 fw-bold" tag="h6">
                        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.substr(1).toLowerCase()}
                    </CardTitle>
                    <Row>
                        <Col xsm="5" className="d-flex align-items-end pe-0">
                            <CardText>
                                {pokemon.types.map(pokemonType =>
                                    <span className="d-block px-3 mt-2 text-center" id="PokemonTypes" key={pokemonType.slot}>
                                        {pokemonType.type.name}
                                    </span>
                                )}
                                {!pokemon.types[0] ? (
                                    <span className="d-block px-3 mt-2 text-center" id="PokemonTypes">
                                        type unknown
                                    </span>
                                ) : (
                                    null
                                )}
                            </CardText>
                        </Col>
                        <Col xsm="7" className="d-flex justify-content-end ps-0">
                            <CardImg id="Pokemon" className="w-100" src={pokemon.sprites.front_default || shilotte} alt="Pokemon" />
                            <CardImg className="w-100" id="PokemonTypeCardIcon" src={iconType} alt="Pokemon Type Icon" />
                        </Col>
                    </Row>
                </CardBody>
            </Cardrs>
        </div>
    )
}

export default Card

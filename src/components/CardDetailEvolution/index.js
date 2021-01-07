import React, { useEffect, useState } from 'react'
import {
    Col,
    Container,
    Row
} from 'reactstrap';
import axios from 'axios';

import Card from '../Card';
import LoadingPage from '../../pages/Loading';

const CardDetailEvolution = (props) => {
    const [pokemonSpecies, setPokemonSpecies] = useState()
    const [pokemonEvolutinChain, setPokemonEvolutionChain] = useState()
    const [evolveFromSpecies, setEvolveFromSpecies] = useState()
    const [evolveSpecies, setEvolveSpecies] = useState([])
    const [evolveToSpecies, setEvolveToSpecies] = useState()

    useEffect(() => {
        axios.get(props.pokemon.species.url)
            .then(res => setPokemonSpecies(res.data))
    }, [props.pokemon])

    useEffect(() => {
        if(pokemonSpecies) {
            axios.get(pokemonSpecies?.evolution_chain.url)
                .then(res => setPokemonEvolutionChain(res.data))
        }
    }, [pokemonSpecies])

    useEffect(() => {
        if(pokemonEvolutinChain) {
            axios.get(pokemonEvolutinChain?.chain.species.url)
                .then(res => setEvolveFromSpecies(res.data))
        }
    }, [pokemonEvolutinChain])

    useEffect(() => {
        pokemonEvolutinChain?.chain.evolves_to.map(pokemon => 
            axios.get(pokemon.species.url)
                .then(res => setEvolveSpecies(prevPokemons => [...prevPokemons, {
                    id: prevPokemons.length,
                    value: res.data
                }]))
        )
    }, [pokemonEvolutinChain])

    useEffect(() => {
        pokemonEvolutinChain?.chain.evolves_to.map(pokemon => 
            pokemon.evolves_to.map(pokemonEvolvesTo => 
                axios.get(pokemonEvolvesTo.species.url)
                    .then(res => setEvolveToSpecies(res.data))
            )
        )
    }, [pokemonEvolutinChain, evolveFromSpecies])
    
    if(!pokemonSpecies) return <LoadingPage />
    if(!pokemonEvolutinChain) return <LoadingPage />
    if(!evolveFromSpecies) return <LoadingPage />
    if(!evolveSpecies) return <LoadingPage />

    return (
        <Container className="py-5">
            <Row>
                <Col xs="12"><h3 className="fw-bold">Evolution Chart</h3></Col>
            </Row>
            <Row>
                <Col className="fs-5" xs="6" md="2" style={{ color: "rgba(0, 0, 0, 0.5)" }}>
                    <Card url={evolveFromSpecies.varieties[0].pokemon.url} />
                </Col>
                <Col className="fs-5" xs="6" md="2">
                    {evolveSpecies.map((pokemonEvolve, index) => 
                        <Card url={pokemonEvolve.value.varieties[0].pokemon.url} key={index} />
                    )}
                </Col>
                <Col className="fs-5" xs="6" md="2">
                    {evolveToSpecies ? (
                        <Card url={evolveToSpecies.varieties[0].pokemon.url} />
                    ) : (
                        null
                    )}
                </Col>
            </Row>
            <Row>
                <Col xs="12"><h3 className="fw-bold">Pokemon Varieties</h3></Col>
            </Row>
            <Row>
                {pokemonSpecies.varieties ? (
                    pokemonSpecies.varieties.map((variety, index) => 
                        !variety.is_default ? (
                            <Col xs="6" md="2" key={index}>
                                <Card url={variety.pokemon.url} />
                            </Col>
                        ) : (
                            null
                        )
                    )
                ) : (
                    <h6 style={{ color: "rgba(0, 0, 0, 0.5)" }}>This Pokemon doesn't have a variety</h6>
                )}
            </Row>
        </Container>
    )
}

export default CardDetailEvolution

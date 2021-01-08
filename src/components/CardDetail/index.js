import React, { useEffect, useState } from 'react';
import { Container, TabContent, TabPane, Nav, NavItem, NavLink, Row } from 'reactstrap';
import classnames from 'classnames';
import axios from 'axios';

import CardDetailAbout from '../CardDetailAbout';
import CardDetailBaseStats from '../CardDetailBaseStats';
import CardDetailEvolution  from '../CardDetailEvolution';
import CardDetailMoves from '../CardDetailMoves';

const CardDetail = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const [pokemonSpecies, setPokemonSpecies] = useState()
    const [pokemonIsMega, setPokemonIsMega] = useState()
    const [pokemonEvolutinChain, setPokemonEvolutionChain] = useState()
    const [evolveFromSpecies, setEvolveFromSpecies] = useState()
    const [evolveSpecies, setEvolveSpecies] = useState([])
    const [evolveToSpecies, setEvolveToSpecies] = useState()
    const [pokemonMoveDetail, setPokemonMoveDetail] = useState()
    const [pokemonMoveDetailTM, setPokemonMoveDetailTM] = useState()

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

    useEffect(() => {
        if(props.prevPath?.includes("moves")) {
            setActiveTab('4')
        } else if(props.prevPath?.includes("forms")) {
            setActiveTab('3')
        } else if(props.prevPath.includes("stats")) {
            setActiveTab('2')
        } else {
            setActiveTab('1')
        }
    }, [props.prevPath])

    useEffect(() => {
        axios.get(props.pokemon.species.url)
        .then(res => setPokemonSpecies(res.data))
    }, [props.pokemon.species.url])

    useEffect(() => {
        axios.get(props.pokemon.forms[0].url)
        .then(res => setPokemonIsMega(res.data))
    }, [props.pokemon.forms])

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
        pokemonEvolutinChain?.chain.evolves_to.forEach(pokemon => 
            axios.get(pokemon.species.url)
                .then(res => setEvolveSpecies(prevPokemons => [...prevPokemons, {
                    id: prevPokemons.length,
                    value: res.data
                }]))
        )
        return setEvolveSpecies([])
    }, [pokemonEvolutinChain])

    useEffect(() => {
        pokemonEvolutinChain?.chain.evolves_to.forEach(pokemon => 
            pokemon.evolves_to.forEach(pokemonEvolvesTo => 
                axios.get(pokemonEvolvesTo.species.url)
                    .then(res => setEvolveToSpecies(res.data))
            )
        )
    }, [pokemonEvolutinChain, evolveFromSpecies])

    useEffect(() => {
        props.pokemon.moves.map((move, index) => 
            move.version_group_details[0].move_learn_method.name === "level-up" ? (
                axios.get(move.move.url).then(res => setPokemonMoveDetail(
                    prevPokemonMoveDetail => [...prevPokemonMoveDetail, res.data
                ]))
            ) : (
                null
            ))
            return setPokemonMoveDetail([])
    }, [props.pokemon.moves])
    
    useEffect(() => {
        props.pokemon.moves.map((move, index) => 
            move.version_group_details[0].move_learn_method.name === "machine" ? (
                axios.get(move.move.url).then(res => setPokemonMoveDetailTM(
                    prevPokemonMoveDetailTM => [...prevPokemonMoveDetailTM, res.data
                ]))
            ) : (
                null
            ))
            return setPokemonMoveDetailTM([])
    }, [props.pokemon.moves])

    if(!props.pokemon) return null

    return (
        <Container>
            <Nav id="PokemonNavbar" className="d-flex justify-content-center fs-5 fw-bold" expand="sm">
                <NavItem id="Text" className="text-center mx-3">
                    <NavLink
                        id="PokemonNavbar"
                        className={`text-center ${classnames({ active: activeTab === '1' })}`}
                        onClick={() => { toggle('1'); }}
                    >
                        About
                    </NavLink>
                    {activeTab === '1' ? (
                            <div id="PokemonNavbarDiv" className="my-3"></div>
                        ) : (
                            null
                    )}
                </NavItem>
                <NavItem id="Text" className="text-center mx-3">
                    <NavLink
                        id="PokemonNavbar"
                        className={`text-center ${classnames({ active: activeTab === '2' })}`}
                        onClick={() => { toggle('2'); }}
                    >
                        Base Stats
                    </NavLink>
                    {activeTab === '2' ? (
                            <div id="PokemonNavbarDiv" className="my-3"></div>
                        ) : (
                            null
                    )}
                </NavItem>
                <NavItem id="Text" className="text-center mx-3">
                    <NavLink
                        id="PokemonNavbar"
                        className={`text-center ${classnames({ active: activeTab === '3' })}`}
                        onClick={() => { toggle('3'); }}
                    >
                        Evolution
                    </NavLink>
                    {activeTab === '3' ? (
                            <div id="PokemonNavbarDiv" className="my-3"></div>
                        ) : (
                            null
                    )}
                </NavItem>
                <NavItem id="Text" className="text-center mx-3"> 
                    <NavLink
                        id="PokemonNavbar"
                        className={`text-center ${classnames({ active: activeTab === '4' })}`}
                        onClick={() => { toggle('4'); }}
                    >
                        Moves
                    </NavLink>
                    {activeTab === '4' ? (
                            <div id="PokemonNavbarDiv" className="my-3"></div>
                        ) : (
                            null
                    )}
                </NavItem>
            </Nav>

            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Row>
                        <CardDetailAbout
                            pokemon={props.pokemon}
                            pokemonName={props.pokemonName}
                            pokemonSpecies={pokemonSpecies}
                            pokemonEvolutinChain={pokemonEvolutinChain}
                            pokemonIsMega={pokemonIsMega}
                        />
                    </Row>
                </TabPane>

                <TabPane tabId="2">
                    <Row>
                        <CardDetailBaseStats pokemon={props.pokemon} />
                    </Row>
                </TabPane>

                <TabPane tabId="3">
                    <Row>
                        <CardDetailEvolution
                            pokemonSpecies={pokemonSpecies}
                            evolveFromSpecies={evolveFromSpecies}
                            evolveSpecies={evolveSpecies}
                            evolveToSpecies={evolveToSpecies}
                        />
                    </Row>
                </TabPane>

                <TabPane tabId="4">
                    <Row>
                        <CardDetailMoves pokemon={props.pokemon} pokemonMoveDetail={pokemonMoveDetail} pokemonMoveDetailTM={pokemonMoveDetailTM} />
                    </Row>
                </TabPane>
            </TabContent>
        </Container>
    )
}

export default CardDetail

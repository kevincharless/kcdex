import React, { useEffect } from 'react';
import {
    Container,
    Col,
    Row
} from 'reactstrap'
import Card from '../../components/card';
import Navbar from '../../components/NavBar/index';

import PropTypes from 'prop-types';
import { connect, useDispatch, useSelector } from 'react-redux';
import { fetchPokemons, fetchPokemonDetail } from '../../redux/actions'

const Home = () => {
    const dispatch = useDispatch()
    const pokemons = useSelector(state => state.pokemons)

    useEffect(() => {
        dispatch(fetchPokemons())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if(pokemons.isLoading === false) {
            pokemons.pokemonLists.map((pokemon, index) => 
                dispatch(fetchPokemonDetail(index + 1))
            )
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pokemons.isLoading])

    return (
        <>
            <Navbar 
                title="Pokémon"
                backgroundColor="#FF6961"
            />
            <Container className="pt-3">
                <Row>
                    <h1 className="fw-bold">Pokédex</h1>
                </Row>
                
                <Row>
                    {pokemons.pokemons.map((pokemon, index) => 
                        <Col md="2" key={index}><Card pokemon={pokemon} type={pokemon.types[0].type.name} /></Col>
                    )}
                </Row>
            </Container>
        </>
    )
}

Home.propTypes = {
    fetchPokemons: PropTypes.func.isRequired,
    fetchPokemonDetail: PropTypes.func.isRequired,
    pokemons: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    pokemons: state.pokemons.pokemons
})

const mapDispatchToProp = dispatch => ({
    fetchPokemons: () => dispatch(fetchPokemons()),
    fetchPokemonDetail: () => dispatch(fetchPokemonDetail())
})

export default connect(mapStateToProps, mapDispatchToProp)(Home)

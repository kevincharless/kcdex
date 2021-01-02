import React, { useEffect, useState } from 'react';
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

const Moves = () => {
    const dispatch = useDispatch()
    const pokemons = useSelector(state => state.pokemons)
    const [pokemonFilter, setPokemonFilter] = useState([])
    const [filterKeyword, setFilterKeywords] = useState("")
    
    useEffect(() => {
        dispatch(fetchPokemons())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if(pokemons.isLoading === true) {
            pokemons.pokemonLists.map((pokemon, index) => 
                dispatch(fetchPokemonDetail(index + 1))
            )
            
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pokemons.isLoading])

    useEffect(() => {
        setPokemonFilter(pokemons.pokemons.filter(pokemon => {
            return pokemon.name.toLowerCase().includes( filterKeyword.toLowerCase() )
        }))
    }, [filterKeyword, pokemons])

    
    const handleFilter = (value) => {
        setFilterKeywords(value)
    }

    return (
        <>
            <Navbar 
                title="Form"
                backgroundColor="#89CFF0"
                handleFilter={handleFilter}
            />
            <Container className="pt-3">
                <Row>
                    <h1 className="fw-bold">Forms</h1>
                </Row>
                
                <Row>
                    {pokemonFilter.map((pokemon, index) => 
                        <Col md="2" key={index}><Card pokemon={pokemon} type={pokemon.types[0].type.name} /></Col>
                    )}
                </Row>
            </Container>
        </>
    )
}

Moves.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProp)(Moves)

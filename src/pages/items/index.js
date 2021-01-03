import React, { useEffect } from 'react';
import {
    Container,
    Col,
    Row
} from 'reactstrap'
import Card from '../../components/card';
import LoadingPage from '../loading';
import Navbar from '../../components/NavBar/index';

import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemons } from '../../redux/actions'

const Items = () => {
    const dispatch = useDispatch()
    const pokemons = useSelector(state => state.pokemons.pokemonLists)
    // const [pokemonFilter, setPokemonFilter] = useState([])
    // const [filterKeyword, setFilterKeywords] = useState("")
    
    useEffect(() => {
        if(pokemons.length === 0) {
            dispatch(fetchPokemons())
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // useEffect(() => {
    //     setPokemonFilter(pokemons.pokemons.filter(pokemon => {
    //         return pokemon.name.toLowerCase().includes( filterKeyword.toLowerCase() )
    //     }))
    // }, [filterKeyword, pokemons])

    
    const handleFilter = (value) => {
        // setFilterKeywords(value)
    }
    

    return (
        <>
            {pokemons.isLoading ? (
                <LoadingPage />
                ) : (
                <>
                    <Navbar 
                        title="Item"
                        backgroundColor="#FDDD5C"
                    />
                    <Container className="pt-3">
                        <Row>
                            <h1 className="fw-bold">Items</h1>
                        </Row>
                        
                        <Row>
                            {pokemons.map((pokemon, index) => 
                                <Col md="2" key={index}><Card pokemons={pokemons} url={pokemon.url} /></Col>
                            )}
                        </Row>
                    </Container>
                </>
                )
            }
        </>
    )
}

Items.propTypes = {
    fetchPokemons: PropTypes.func.isRequired,
    fetchPokemonDetail: PropTypes.func.isRequired,
    pokemons: PropTypes.array.isRequired,
}

export default Items

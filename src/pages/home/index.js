import React, { useEffect, useState, useRef, useMemo } from 'react';
import {
    Container,
    Col,
    Row,
} from 'reactstrap'
import ReactPaginate from 'react-paginate';

import Card from '../../components/card';
import LoadingPage from '../loading';
import Navbar from '../../components/NavBar/index';

import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemons } from '../../redux/actions'

const Home = () => {
    const componentRef = useRef(true)
    const dispatch = useDispatch()
    
    const pokemons = useSelector(state => state.pokemons)
    const [offset, setOffset] = useState(0)
    const [pokemonFilter, setPokemonFilter] = useState([])
    const [filterKeyword, setFilterKeywords] = useState("")

    const currentPokemons = useMemo(() => pokemons?.pokemonLists?.results?.slice(offset, offset+30), [pokemons, offset])
    const currentPokemonsFilter = useMemo(() => pokemonFilter?.slice(offset, offset+30), [offset, pokemonFilter])
    const pokemonCounts = pokemons.pokemonLists.count
    
    useEffect(() => {
        dispatch(fetchPokemons())
        return () => {
            componentRef.current = false
        }
    }, [dispatch]) // eslint-disable-next-line react-hooks/exhaustive-deps
    
    const handleFilter = (value) => {
        if (componentRef.current) {
            setFilterKeywords(value)
            setPokemonFilter(pokemons?.pokemonLists?.results?.filter(pokemon => {
                return pokemon.name.toLowerCase().includes( filterKeyword.toLowerCase() )
            }))
        }
    }

    const handlePageClick = (currentPage) => {
        let selectedPage = currentPage.selected
        if (componentRef.current)
            setOffset(selectedPage*30)
    }

    return (
        <>
            {pokemons.isLoading ? (
                <LoadingPage />
                ) : (
                <>
                    <Navbar 
                        title="Pokémon"
                        backgroundColor="#FF6961"
                        handleFilter={handleFilter}
                    />
                    <Container className="pt-3">
                        <Row>
                            <h1 className="fw-bold">Pokédex</h1>
                        </Row>
                        <Row>
                            {filterKeyword ? (
                                currentPokemonsFilter.map((pokemon) => 
                                <Col md="2" key={pokemon.url}><Card pokemons={pokemons.pokemonLists.results} url={pokemon.url} /></Col>
                            )) : (
                                currentPokemons.map((pokemon) => 
                                <Col md="2" key={pokemon.url}><Card pokemons={pokemons.pokemonLists.results} url={pokemon.url} /></Col>
                            ))}
                        </Row>
                        <Row>
                            <ReactPaginate
                                previousLabel={'previous'}
                                nextLabel={'next'}
                                breakLabel={'...'}
                                breakClassName={"page-item disabled"}
                                breakLinkClassName={"page-link"}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={5}
                                pageCount={pokemonCounts/30}
                                onPageChange={handlePageClick}
                                containerClassName={"pagination"}
                                pageClassName={"page-item"}
                                pageLinkClassName={"page-link"}
                                previousClassName={"page-item"}
                                previousLinkClassName={"page-link"}
                                nextClassName={"page-item"}
                                nextLinkClassName={"page-link"}
                                activeClassName={'active'}
                            />
                        </Row>
                        <h1>{offset}</h1>
                    </Container>
                </>
                )
            }
        </>
    )
}

Home.propTypes = {
    fetchPokemons: PropTypes.func.isRequired
}

export default Home

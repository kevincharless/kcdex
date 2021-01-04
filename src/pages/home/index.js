import React, { useEffect, useState, useMemo } from 'react';
import {
    Container,
    Col,
    Row,
} from 'reactstrap'
import ReactPaginate from 'react-paginate';

import Card from '../../components/card';
import LoadingPage from '../loading';
import Navbar from '../../components/NavBar/index';

import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemons } from '../../redux/actions'
import { Link } from 'react-router-dom';

const Home = () => {
    const dispatch = useDispatch()

    const pokemons = useSelector(state => state.pokemons)
    const [offset, setOffset] = useState(0)
    const [pokemonFilter, setPokemonFilter] = useState([])
    const [keyword, setKeywords] = useState("")

    const pokemonCounts = pokemons.pokemonLists.count
    const pokemonLists = pokemons.pokemonLists.results

    const currentPokemons = useMemo(() => pokemonLists?.slice(offset, offset+30), [pokemonLists, offset])
    const currentPokemonsFilter = useMemo(() => pokemonFilter?.slice(offset, offset+30), [offset, pokemonFilter])
    
    useEffect(() => {
        dispatch(fetchPokemons())
        
    }, []) // eslint-disable-next-line react-hooks/exhaustive-deps

    useEffect(() => {
        setPokemonFilter(pokemonLists?.filter(pokemon => {
            return pokemon.name.toUpperCase().includes( keyword.toUpperCase() )
        }))
    }, [keyword])

    const handlePageClick = (currentPage) => {
        let selectedPage = currentPage.selected
        setOffset(selectedPage*30)
    }

    const handleOnChange = e => {
        setKeywords(e.target.value)
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
                        handleOnChange={handleOnChange}
                    />
                    <Container className="pt-3">
                        <Row>
                            <h1 className="fw-bold">Pokédex</h1>
                        </Row>
                        <Row>
                            {keyword ? (
                                currentPokemonsFilter?.map((pokemon) => 
                                <Col md="2" key={pokemon.url}>
                                    <Link to={`/pokemon/${pokemon.name}`} style={{ textDecoration: "none" }}>
                                        <Card pokemons={pokemonLists} url={pokemon.url} />
                                    </Link>
                                </Col>
                            )) : (
                                currentPokemons?.map((pokemon) => 
                                <Col md="2" key={pokemon.url}>
                                    <Link to={`/pokemon/${pokemon.name}`} style={{ textDecoration: "none" }}>
                                        <Card pokemons={pokemonLists} url={pokemon.url} />
                                    </Link>
                                </Col>
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
                                pageCount={keyword ? pokemonFilter?.length/30 : pokemonCounts/30}
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

export default Home

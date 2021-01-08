import React, { useEffect, useState, useMemo } from 'react';
import {
    Container,
    Col,
    Row,
} from 'reactstrap'
import ReactPaginate from 'react-paginate';

import Card from '../../components/Card';
import LoadingPage from '../Loading';
import Navbar from '../../components/NavBar';

import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemons, prevPath } from '../../redux/actions'
import { Link } from 'react-router-dom';

const Stats = () => {
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
        dispatch(prevPath(window.location.href))
    }, [dispatch]) // eslint-disable-next-line react-hooks/exhaustive-deps

    useEffect(() => {
        setPokemonFilter(pokemonLists?.filter(pokemon => {
            return pokemon.name.toUpperCase().includes( keyword.toUpperCase() )
        }))
    }, [pokemonLists, keyword])

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
                        title="Stats"
                        backgroundColor="#FDDD5C"
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
                                        <Card url={pokemon.url} />
                                    </Link>
                                </Col>
                            )) : (
                                currentPokemons?.map((pokemon) => 
                                <Col md="2" key={pokemon.url}>
                                    <Link to={`/pokemon/${pokemon.name}`} style={{ textDecoration: "none" }}>
                                        <Card url={pokemon.url} />
                                    </Link>
                                </Col>
                            ))}
                        </Row>
                        <Row className="py-4">
                            <ReactPaginate
                                previousLabel={'previous'}
                                nextLabel={'next'}
                                breakLabel={'...'}
                                breakClassName={"page-item disabled"}
                                breakLinkClassName={"page-link"}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={2}
                                pageCount={keyword ? pokemonFilter?.length/30 : pokemonCounts/30}
                                onPageChange={handlePageClick}
                                containerClassName={"pagination d-flex justify-content-center"}
                                pageClassName={"page-item"}
                                pageLinkClassName={"page-link"}
                                previousClassName={"page-item"}
                                previousLinkClassName={"page-link"}
                                nextClassName={"page-item"}
                                nextLinkClassName={"page-link"}
                                activeClassName={'active'}
                                style={{ width: "0" }}
                            />
                        </Row>
                    </Container>
                </>
                )
            }
        </>
    )
}

export default Stats

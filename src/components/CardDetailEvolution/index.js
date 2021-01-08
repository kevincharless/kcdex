import React from 'react'
import {
    Col,
    Container,
    Row
} from 'reactstrap';
import { Link } from 'react-router-dom';

import Card from '../Card';
import LoadingPage from '../../pages/Loading';

const CardDetailEvolution = (props) => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    if(!props.pokemonSpecies) return <LoadingPage />
    if(!props.evolveFromSpecies) return <LoadingPage />
    if(!props.evolveSpecies) return <LoadingPage />


    return (
        <Container className="py-5">
            <Row>
                <Col xs="12"><h3 className="fw-bold">Evolution Chart</h3></Col>
            </Row>
            <Row>
                <Col className="fs-5" xs="6" md="2" style={{ color: "rgba(0, 0, 0, 0.5)" }}>
                    <Link onClick={scrollToTop} to={`/pokemon/${props.evolveFromSpecies.name}/`} style={{ textDecoration: "none" }}>
                        <Card url={props.evolveFromSpecies.varieties[0].pokemon.url} />
                    </Link>
                </Col>
                <Col className="fs-5" xs="6" md="2">
                    {props.evolveSpecies.map((pokemonEvolve, index) => 
                        <Link  to={`/pokemon/${pokemonEvolve.value.name}/`} style={{ textDecoration: "none" }} key={index}>
                            <Card url={pokemonEvolve.value.varieties[0].pokemon.url} />
                        </Link>
                    )}
                </Col>
                
                <Col className="fs-5" xs="6" md="2">
                    {props.evolveToSpecies ? (
                        <Link to={`/pokemon/${props.evolveToSpecies.name}/`} style={{ textDecoration: "none" }}>
                            <Card url={props.evolveToSpecies.varieties[0].pokemon.url} />
                        </Link>
                    ) : (
                        null
                    )}
                </Col>
            </Row>
            <Row>
                <Col xs="12"><h3 className="fw-bold pt-4">Pokemon Varieties</h3></Col>
            </Row>
            <Row>
                {props.pokemonSpecies.varieties[1] ? (
                    props.pokemonSpecies.varieties.map((variety, index) => 
                        variety.is_default === false ? (
                            <Col xs="6" md="2" key={index}>
                                <Link onClick={scrollToTop} to={`/pokemon/${variety.pokemon.name}/`} style={{ textDecoration: "none" }}>
                                    <Card url={variety.pokemon.url} />
                                </Link>
                            </Col>
                        ) : (
                            null
                        ))
                    ) : (
                    <h6 style={{ color: "rgba(0, 0, 0, 0.5)" }}>This Pokemon doesn't have any variety</h6>
                )}
            </Row>
        </Container>
    )
}

export default CardDetailEvolution

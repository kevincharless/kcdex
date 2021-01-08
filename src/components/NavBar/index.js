import React from 'react';
import {
    Button,
    Col,
    Navbar,
    NavbarText,
    Row
} from 'reactstrap';
import { Link } from 'react-router-dom';

import { ReactComponent as LogoPokemon } from '../../assets/images/logopokemon.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const NavBar = (props) => {

    return (
        <>
            <Navbar className="p-5 pb-4 align-items-end" id="Nav" expand="md" style={{ backgroundColor: `${props.backgroundColor}`}}>
                <div className="me-auto" id="header">
                    <span className="d-block text-white fs-3 fw-bold lh-1" href="/">
                        What {props.title}
                    </span>
                    <span className="d-block text-white fs-3 fw-bold lh-1" href="/">
                        are you looking for ?
                    </span>
                </div>
                {props.handleOnChange ? (
                    <NavbarText>
                        <div className="form-group has-search">
                            <FontAwesomeIcon className="form-control-feedback" icon={faSearch} />
                            <input type="text" className="form-control" onChange={props.handleOnChange} placeholder={`Search ${props.title}`} />
                        </div>
                    </NavbarText>
                    ) : (
                        null
                    )
                }
                
                <LogoPokemon id="LogoPokemon"/>
            </Navbar>
            <div id="NavBackground"></div>
            <Navbar className=" d-flex align-items-end justify-content-center" id="Navbar" expand="md">
                <Row className="w-100">
                    <Col className="d-flex justify-content-center py-3">
                        <Link to="/">
                            <Button className="border-0" id="ButtonPokedex">Pokedex
                                <LogoPokemon id="LogoPokemon" />
                            </Button>
                        </Link>
                    </Col>
                    <Col className="d-flex justify-content-center py-3">
                        <Link to="/moves">
                            <Button className="border-0" id="ButtonMoves">Moves
                                <LogoPokemon id="LogoPokemon" />
                            </Button>
                        </Link>
                    </Col>
                    <Col className="d-flex justify-content-center py-3">
                        <Link to="/forms">
                            <Button className="border-0" id="ButtonForms">Forms
                                <LogoPokemon id="LogoPokemon" />
                            </Button>
                        </Link>
                    </Col>
                    <Col className="d-flex justify-content-center py-3">
                        <Link to="/stats">
                            <Button className="border-0" id="ButtonItems">Stats
                                <LogoPokemon id="LogoPokemon" />
                            </Button>
                        </Link>
                    </Col>
                    <Col className="d-flex justify-content-center py-3">
                        <Link to="/typecharts">
                            <Button className="border-0" id="ButtonType">Type Charts
                                <LogoPokemon id="LogoPokemon" />
                            </Button>
                        </Link>
                    </Col>
                </Row>
            </Navbar>
        </>
    );
}

export default NavBar

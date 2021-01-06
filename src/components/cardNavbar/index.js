import React from 'react'
import {
    Navbar,
    Nav,
    NavItem,
} from 'reactstrap';
import { NavLink, useLocation  } from 'react-router-dom';

const CardNavbar = (props) => {
    const location = useLocation();
    return (
        <div>
            <Navbar className="d-flex justify-content-center fs-5 fw-bold" expand="md">
                <Nav navbar id="PokemonNavbar">
                    <NavItem className="mx-5">
                        <NavLink id="PokemonNavbar" className="mx-5" to={`/pokemon/${props.pokemonName}`} exact>About</NavLink>
                        {location.pathname == `/pokemon/${props.pokemonName}` ? (
                            <div id="PokemonNavbarDiv" className="my-3"></div>
                        ) : (
                            null
                        )}
                    </NavItem>
                    <NavItem className="mx-5">
                        <NavLink id="PokemonNavbar" className="mx-5" to={`/pokemon/${props.pokemonName}/basestats/`}>Base Stats</NavLink>
                        {location.pathname == `/pokemon/${props.pokemonName}/basestats/` ? (
                            <div id="PokemonNavbarDiv" className="my-3"></div>
                        ) : (
                            null
                        )}
                    </NavItem>
                    <NavItem className="mx-5">
                        <NavLink id="PokemonNavbar" className="mx-5" to={`/pokemon/${props.pokemonName}/evolution/`}>Evolution</NavLink>
                        {location.pathname == `/pokemon/${props.pokemonName}/evolution/` ? (
                            <div id="PokemonNavbarDiv" className="my-3"></div>
                        ) : (
                            null
                        )}
                    </NavItem>
                    <NavItem className="mx-5">
                        <NavLink id="PokemonNavbar" className="mx-5" to={`/pokemon/${props.pokemonName}/moves/`}>Moves</NavLink>
                        {location.pathname == `/pokemon/${props.pokemonName}/moves/` ? (
                            <div id="PokemonNavbarDiv" className="my-3"></div>
                        ) : (
                            null
                        )}
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}

export default CardNavbar

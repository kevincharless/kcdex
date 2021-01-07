import React from 'react';
import LoadingPage from '../Loading';
import Navbar from '../../components/NavBar/index';

import { useSelector } from 'react-redux';

const TypeCharts = () => {
    const pokemons = useSelector(state => state.pokemons)

    return (
        <>
            {pokemons.isLoading ? (
                <LoadingPage />
                ) : (
                <Navbar 
                    title="Type"
                    backgroundColor="#A890F0"
                />
                )
            }
        </>
    )
}

export default TypeCharts

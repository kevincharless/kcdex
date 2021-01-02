import axios from '../../axios';
import { FETCH_POKEMONS, FETCH_POKEMONDETAIL } from './types';

export const fetchPokemons = () => dispatch => {
    axios.get('/pokemon')
        .then(res => {
            dispatch({
                type: FETCH_POKEMONS,
                payload: res.data.results,
                isLoading: true
            })
        })
        .catch(err => {
            console.log(err)
        })
}

export const fetchPokemonDetail = (index) => (dispatch) => {
    axios.get(`/pokemon/${index}`)
        .then(res => {
            dispatch({
                type: FETCH_POKEMONDETAIL,
                payload: res.data,
                isLoading: false
            })
        })
        .catch(err => {
            console.log(err)
        })
}
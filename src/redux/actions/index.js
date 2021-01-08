import axios from '../../axios';
import { FETCH_POKEMONS, FETCH_LOADING, FETCH_LOADED, PREV_PATH } from './types';

export const fetchLoading = () => ({type: FETCH_LOADING})
export const fetchLoaded = () => ({type: FETCH_LOADED})

export const fetchPokemons = () => dispatch => {
    dispatch(fetchLoading());
    axios.get('/pokemon/?offset=0&limit=1118')
        .then(res => {
            dispatch({
                type: FETCH_POKEMONS,
                payload: res.data,
            })
            dispatch(fetchLoaded())
        })
        .catch(err => {
            console.log(err)
        })
}

export const prevPath =(path) => dispatch =>{
    dispatch({
        type: PREV_PATH,
        payload: path
    })
}
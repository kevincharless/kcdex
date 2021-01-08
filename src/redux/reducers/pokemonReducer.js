import { FETCH_POKEMONS, FETCH_LOADING, FETCH_LOADED, PREV_PATH } from '../actions/types';

const initialState = {
    pokemonLists:[],
    isLoading: true,
    isMount: true,
    prevPath: ""

}

export default function pokemonReducer(state = initialState, action) {

    switch (action.type) {
        case FETCH_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_LOADED:
            return {
                ...state,
                isLoading: false
            }
        case FETCH_POKEMONS:
            return {
                ...state,
                pokemonLists: action.payload,
            }
        case PREV_PATH:
            return {
                ...state,
                prevPath: action.payload
            }
        default: 
            return state
    }
}
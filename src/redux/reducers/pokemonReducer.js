import { FETCH_POKEMONS, FETCH_POKEMONDETAIL, FETCH_LOADING, FETCH_LOADED } from '../actions/types';

const initialState = {
    pokemonLists:[],
    isLoading: true

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
        case FETCH_POKEMONDETAIL:
            return {
                ...state,
                pokemons: [...state.pokemons, action.payload],
            }
        default: 
            return state
    }
}
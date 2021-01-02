import { FETCH_POKEMONS, FETCH_POKEMONDETAIL } from '../actions/types';

const initialState = {
    pokemonLists:[],
    pokemons: [],
    isLoading: false

}

export default function pokemonReducer(state = initialState, action) {

    switch (action.type) {
        case FETCH_POKEMONS:
            return {
                ...state,
                pokemonLists: action.payload,
                isLoading: action.isLoading
            }
        case FETCH_POKEMONDETAIL:
            return {
                ...state,
                pokemons: [...state.pokemons, action.payload],
                isLoading: action.isLoading
            }
        default: 
            return state
    }
}
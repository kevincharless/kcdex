import { FETCH_POKEMONS, FETCH_POKEMONDETAIL } from '../actions/types';

const initialState = {
    pokemonLists:[],
    pokemons: [],
    isLoading: true

}

export default function pokemonReducer(state = initialState, action) {

    switch (action.type) {
        case FETCH_POKEMONS:
            return {
                ...state,
                pokemonLists: action.payload,
                isLoading: false
            }
        case FETCH_POKEMONDETAIL:
            return {
                ...state,
                pokemons: [...state.pokemons, action.payload]
            }
        default: 
            return state
    }
}
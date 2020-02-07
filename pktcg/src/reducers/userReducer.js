import { FETCH_DATA, UPDATE_POKEMON, SET_ERROR } from '../actions'

export const initialState = {
    cards: [{
        imageUrl: '',
        name: '',
        nationalPokedexNumber: 0

    }],
    isFetchingData: false,
    error: ''
};

export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DATA:
            return {
                ...state,
                isFetchingData: true,
                cards: [{
                    imageUrl: '',
                    name: '',
                    nationalPokedexNumber: 0
                }]
            };
        case UPDATE_POKEMON:
            return {
                ...state,
                cards: action.payload,
                isFetchingData: false
                };
        case SET_ERROR : 
            return {
                ...state,
                isFetchingData: false,
                error: action.payload
            };
        default:
            return state;
    }
};
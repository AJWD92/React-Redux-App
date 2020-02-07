import Axios from 'axios';

export const UPDATE_POKEMON = 'UPDATE_POKEMON';
export const FETCH_DATA = 'FETCH_DATA';
export const SET_ERROR = 'SET_ERROR'

export const fetchData = () => dispatch => {
    dispatch({ type: FETCH_DATA });
    Axios
    .get('https://api.pokemontcg.io/v1/cards')
    .then(res => {
        const pokemon = res.data.cards.filter(card => card.name.toLowerCase().includes(card.name.toLowerCase()));
        console.log('this is the response from the api', res);
        dispatch({ type: UPDATE_POKEMON, payload: pokemon})
    })
    .catch(err => {
        console.error('error fetching data from api. err: ', err);
        dispatch({ type: SET_ERROR, payload: 'error fetching data from api'})
    });
};
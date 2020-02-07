import React from 'react';
import { connect } from 'react-redux';

import { fetchData } from '../actions';

const PokemonList = props => {
    return(
        <>
        {props.error ? (
            <div className='error'>{props.error}</div>
        ) : (
            props.cards.map(card => <div className='pokeCard'>
                <img src={card.imageUrl} alt='some pokemon' />
                <h1>{card.name}</h1>
                <p>{card.nationalPokedexNumber}</p>
                </div>)
        )}
        </>
    );
};

const mapStateToProps = state => {
    return {
        cards: state.cards,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    { fetchData }
)(PokemonList);
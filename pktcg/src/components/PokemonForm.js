import React from 'react';
import { connect } from 'react-redux';

import { fetchData } from '../actions';

const PokemonForm = props => {

    const handleFetchData = e => {
        e.preventDefault();
        props.fetchData()
    };

    return(
        <>
        {props.isFetchingData ? (
            <div>**Getting PokeMon out of PokeBall now**</div>
        ) : (  
                <button onClick={handleFetchData}>get PokeMon</button>
        )}
        </>
    );
};

const mapStateToProps = state => {
    return {
        isFetchingData: state.isFetchingData
    };
};

export default connect(
    mapStateToProps,
    { fetchData }
)(PokemonForm);
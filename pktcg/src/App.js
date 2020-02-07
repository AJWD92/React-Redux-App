import React from 'react';

import PokemonForm from './components/PokemonForm';
import PokemonList from './components/PokemonList';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { userReducer as reducer } from './reducers/userReducer';

import './App.css';

const store = createStore(reducer, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <PokemonForm />
     <PokemonList />
    </div>
    </Provider>
  );
}



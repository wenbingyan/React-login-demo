import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware } from 'redux';
import App from './App';
import { reducer, ADD, MINUS,ASYNC  } from './index.redux';
import thunk from 'redux-thunk'

const store = createStore(reducer,applyMiddleware(thunk))

function render(){
  ReactDOM.render(<App store = {store} ADD={ADD} ASYNC={ASYNC} MINUS={MINUS} />, document.getElementById('root'));
}
render()

store.subscribe(render)
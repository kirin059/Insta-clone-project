import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import Data from './Data';

let myInfo = {
  myId: 'myInstaId05',
  myName: '새봄',
  myImage: 'https://images.unsplash.com/photo-1615390993826-e9e3238aef51?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1246&q=80'
}

let feed = Data;

function reducer(state = myInfo, action) {
  return state
}

function reducer2(state = feed, action) {
  return state;
}

const store = createStore(combineReducers({reducer, reducer2}));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();

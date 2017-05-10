import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import thunk from 'redux-thunk' 
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './App';
import './index.css';
import rootReducer from './reducers/index'

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
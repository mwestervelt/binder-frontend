import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
import thunk from 'redux-thunk'

import { createStore, applyMiddleware } from 'redux'
import reducer from './redux/reducer'

import { Provider } from 'react-redux'

// const reduxTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(reducer, applyMiddleware(thunk))


ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
     <App />
     </Provider>
   </BrowserRouter>
   , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

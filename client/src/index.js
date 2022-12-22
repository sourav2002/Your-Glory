import React from 'react';
import ReactDOM from 'react-dom/client';
import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit'

import { reducers } from './reducers';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';

const store = configureStore({reducer : reducers}, compose(applyMiddleware(thunk)));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>
);


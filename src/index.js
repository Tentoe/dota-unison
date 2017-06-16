import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { multiClientMiddleware } from 'redux-axios-middleware';
import thunk from 'redux-thunk';

import App from './App';
import reducer from './reducers';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import './db';

// test
const { remote } = window.require('electron');
const axios = remote.require('axios');

const clients = {
  steam: {
    client: axios.create({ baseURL: 'https://api.steampowered.com' }),
  },
  openDota: {
    client: axios.create({ baseURL: 'https://api.opendota.com' }),
  },
};

const middleware = applyMiddleware(thunk, multiClientMiddleware(clients), logger);

const store = createStore(
  reducer,
  middleware,
);

render(
  <Provider store={store}><App /></Provider>, // eslint-disable-line react/jsx-filename-extension
  document.getElementById('root'),
);


registerServiceWorker();

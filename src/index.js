import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import reducer from './reducers';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = createStore(reducer);

render(
  <Provider store={store}><App /></Provider>, // eslint-disable-line react/jsx-filename-extension
  document.getElementById('root'),
);


registerServiceWorker();

/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import App from './App';
import reducer from './reducers';

jest.mock('./flags');
jest.mock('./actions/readServerLog');


const middleware = applyMiddleware(thunk);

const store = createStore(reducer, middleware);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><App /></Provider>, div);
});

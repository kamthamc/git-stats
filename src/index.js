import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Store from './Store';
import App from './App';

const store = Store();

const mountNode = document.getElementById("app");

ReactDOM.render((
  <Provider store={store}>
    <App />
    <GlobalStyle />
  </Provider>
), mountNode);
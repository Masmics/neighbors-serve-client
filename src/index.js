import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './components/App';

// added provider in advance for more components to come

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

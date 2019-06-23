import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store';

// added provider in advance for more components to come

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

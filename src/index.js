import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store/configureStore';
import Root from './components/Root';
import { loadCatalogs } from './actions/catalogActions';

const store = configureStore();
store.dispatch(loadCatalogs());

ReactDOM.render(
  <BrowserRouter>
    <Root store={store} />
  </BrowserRouter>,
  document.getElementById('root')
);

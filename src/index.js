import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import Root from './components/Root';
import {loadCatalogs} from './actions/catalogActions';

const store = configureStore();
store.dispatch(loadCatalogs());

ReactDOM.render(<Root store={store} />, document.getElementById('root'));

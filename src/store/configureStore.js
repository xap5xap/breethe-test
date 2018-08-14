import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import rootReducer from '../reducers';

const configureStore = initialState => {
  return createStore(rootReducer, initialState, applyMiddleware(thunk, reduxImmutableStateInvariant()));
};

export default configureStore;

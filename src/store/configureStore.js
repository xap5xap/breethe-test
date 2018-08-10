import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const configureStore = initialState => {
  const middlewares = [thunk];

  return createStore(rootReducer, initialState, compose(applyMiddleware(...middlewares)));
};

export default configureStore;

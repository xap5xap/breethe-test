import { combineReducers } from 'redux';
import catalog from './catalogReducer';
import apiStatus from './apiStatusReducer';
import auth from './authReducer';

const rootReducer = combineReducers({
  catalog,
  apiStatus,
  auth
});

export default rootReducer;

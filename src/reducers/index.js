import { combineReducers } from 'redux';
import catalog from './catalogReducer';
import apiStatus from './apiStatusReducer';

const rootReducer = combineReducers({
  catalog,
  apiStatus
});

export default rootReducer;

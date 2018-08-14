import initialState from './initialState';
import { BEGIN_API_CALL, API_CALL_ERROR, END_API_CALL } from '../actions/actionTypes';

export default function apiStatusReducer(state = initialState.apiStatus, action) {
  let newState;
  switch (action.type) {
    case BEGIN_API_CALL:
      newState = Object.assign({}, state);
      newState.fetching = true;
      return newState;

    case END_API_CALL:
      newState = Object.assign({}, state);
      newState.fetching = false;
      return newState;

    case API_CALL_ERROR:
      newState = Object.assign({}, state);
      newState.fetching = false;
      newState.errorMessage = action.errorMessage;
      return newState;

    default:
      return state;
  }
}

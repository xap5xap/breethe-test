import initialState from './initialState';
import { LOGIN_BEGIN, LOGIN_SUCESS } from '../actions/actionTypes';

export default function authReducer(state = initialState.auth, action) {
  let newState;
  switch (action.type) {
    case LOGIN_BEGIN:
      newState = Object.assign({}, state);
      newState.isLogin = true;
      return newState;

    case LOGIN_SUCESS:
    console.log('Login reduceer', action)
      newState = Object.assign({}, state);
      newState.isLogin = false;
      newState.token = action.token;
      return newState;

    default:
      return state;
  }
}

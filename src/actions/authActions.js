import { authenticate } from '../api/Breethe';
import * as types from './actionTypes';

export function loginBegin() {
  return { type: types.LOGIN_BEGIN };
}

export function loginSuccess(token) {
  return { type: types.LOGIN_SUCESS, token };
}

export function loginError(error) {
  return { type: types.LOGIN_ERROR, error };
}

export function login(email, password) {
  return dispatch => {
    dispatch(loginBegin());
    return authenticate(email, password)
      .then(token => {
        dispatch(loginSuccess(token));
      })
      .catch(error => {
        dispatch(loginError(error));
      });
  };
}

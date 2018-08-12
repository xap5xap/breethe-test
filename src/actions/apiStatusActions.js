import * as types from './actionTypes';

export function beginApiCall() {
  return { type: types.BEGIN_API_CALL};
}

export function endApiCall() {
  return { type: types.END_API_CALL};
}

export function apiCallError(errorMessage) {
  return { type: types.API_CALL_ERROR, errorMessage };
}

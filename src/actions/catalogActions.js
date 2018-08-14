import { getCatalogs } from '../api/Breethe';
import * as types from './actionTypes';
import { beginApiCall, endApiCall, apiCallError } from './apiStatusActions';

export function loadCatalogsSuccess(catalog) {
  return { type: types.GET_CATALOG_SUCESS, catalog };
}

export function loadCatalogs() {
  return dispatch => {
    dispatch(beginApiCall());
    return getCatalogs()
      .then(projects => {
        dispatch(loadCatalogsSuccess(projects));
        dispatch(endApiCall());
      })
      .catch(error => {
        dispatch(apiCallError(error.message));
      });
  };
}

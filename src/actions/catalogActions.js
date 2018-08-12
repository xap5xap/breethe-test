import { getCatalogs } from '../api/Breethe';
import * as types from './actionTypes';
import { beginApiCall } from './apiStatusActions';

export function loadCatalogsSuccess(catalog) {
  return { type: types.GET_CATALOG_SUCESS, catalog };
}

export function loadCatalogs() {
  console.log('CatalogActions.js - loadCatalogs');
//   getCatalogs();
  return dispatch => {
    dispatch(beginApiCall());
    return getCatalogs()
      .then(projects => {
        console.log('CatalogActions.js - loadCatalogs');
        dispatch(loadCatalogsSuccess(projects));
      })
      .catch(error => {
        throw error;
      });
  };
}

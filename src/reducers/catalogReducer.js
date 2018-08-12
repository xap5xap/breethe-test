import initialState from './initialState';
import { GET_CATALOG_SUCESS } from '../actions/actionTypes';

export default function catalogReducer(state = initialState.catalog, action) {

  let newState;
  switch (action.type) {
    case GET_CATALOG_SUCESS:
      newState = Object.assign({}, state);
      newState.authors = action.catalog.authors;
      newState.contents = action.catalog.contents;
      newState.medias = action.catalog.medias;
      return newState;

    default:
      return state;
  }
}

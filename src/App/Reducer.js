import { combineReducers } from 'redux';
import {
  APP_FILTER_BY_RATING,
  APP_FILTER_GENRE_TOGGLED,
} from './Actions';
import movies from '../Movies/Reducer';
import genres from '../GenreSelect/Reducer';

/**
 * App reducer
 */
export function app(state = {}, action) {
  let index;
  let newFilteredGenres;

  switch (action.type) {
    case APP_FILTER_BY_RATING:
      return {
        ...state,
        rating: action.payload,
      };
    case APP_FILTER_GENRE_TOGGLED:
      index = state.filteredGenres.indexOf(action.payload);

      newFilteredGenres = [...state.filteredGenres];

      if (index === -1) {
        newFilteredGenres.push(action.payload);
      } else {
        newFilteredGenres.splice(index, 1);
      }

      return {
        ...state,
        filteredGenres: newFilteredGenres,
      };
    default:
      return state;
  }
}

/**
 * @type {Reducer<any> | Reducer<any, AnyAction>}
 */
export const rootReducer = combineReducers({
  app,
  movies,
  genres,
});

import { app } from './Reducer';
import { APP_FILTER_BY_RATING, APP_FILTER_GENRE_TOGGLED } from './Actions';
import PreloadedState from './PreloadedState';

describe('App/Reducer', () => {
  it('should return the initial state', () => {
    expect(app(PreloadedState, {})).toEqual(PreloadedState);
  });

  it('APP_FILTER_BY_RATING should set the rating', () => {
    const newState = app(PreloadedState.app, {
      type: APP_FILTER_BY_RATING,
      payload: 10,
    });

    expect(newState).toEqual({
      filteredGenres: [],
      rating: 10,
    });
  });

  it('APP_FILTER_GENRE_TOGGLED should remove a filter', () => {
    const newState = app(PreloadedState.app, {
      type: APP_FILTER_GENRE_TOGGLED,
      payload: 101,
    });

    expect(newState).toEqual({
      filteredGenres: [101],
      rating: 3,
    });
  });

  it('APP_FILTER_GENRE_TOGGLED should add a filter', () => {
    PreloadedState.app.filteredGenres.push(101);

    const newState = app(PreloadedState.app, {
      type: APP_FILTER_GENRE_TOGGLED,
      payload: 101,
    });

    expect(newState).toEqual({
      filteredGenres: [],
      rating: 3,
    });
  });
});

import genres from './Reducer';
import { REQUEST_GENRES, RECEIVE_GENRES, RECEIVE_GENRES_FAIL } from './Actions';
import PreloadedState from '../App/PreloadedState';

describe('GenreSelect/Reducer', () => {
  it('should return the initial state', () => {
    expect(genres(PreloadedState, {})).toEqual(PreloadedState);
  });

  it('REQUEST_GENRES should set isFetching', () => {
    const newState = genres(PreloadedState.genres, {
      type: REQUEST_GENRES,
    });

    expect(newState).toEqual({
      isFetching: true,
      data: [],
      error: false,
    });
  });

  it('RECEIVE_GENRES should set data', () => {
    const data = { value: [100] };
    const newState = genres(PreloadedState.genres, {
      type: RECEIVE_GENRES,
      payload: data,
    });

    expect(newState).toEqual({
      isFetching: false,
      data,
      error: false,
    });
  });

  it('RECEIVE_GENRES_FAIL should set error', () => {
    const error = new Error();
    const newState = genres(PreloadedState.genres, {
      type: RECEIVE_GENRES_FAIL,
      payload: error,
    });

    expect(newState).toEqual({
      isFetching: false,
      data: [],
      error,
    });
  });
});

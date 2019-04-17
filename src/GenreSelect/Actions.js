export const REQUEST_GENRES = 'REQUEST_GENRES';
export const RECEIVE_GENRES = 'RECEIVE_GENRES';
export const RECEIVE_GENRES_FAIL = 'RECEIVE_GENRES_FAIL';

export function requestGenres() {
  return {
    type: REQUEST_GENRES,
  };
}

export function receiveGenres(data) {
  return {
    type: RECEIVE_GENRES,
    payload: data,
  };
}

export function receiveGenresFail(error) {
  return {
    type: RECEIVE_GENRES_FAIL,
    payload: error,
  };
}

/**
 * Async Action Creator for genres
 * @description updates the state with the genres data
 * @returns {Function}
 */
export function getGenres() {
  return (dispatch) => {
    dispatch(requestGenres());

    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_API_KEY}`, {
      method: 'GET',
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        dispatch(receiveGenres(data.genres));
      })
      .catch((error) => {
        dispatch(receiveGenresFail(error));
      });
  };
}

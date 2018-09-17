export const REQUEST_MOVIES = "REQUEST_MOVIES";
export const RECEIVE_MOVIES = "RECEIVE_MOVIES";
export const RECEIVE_MOVIES_FAIL = "RECEIVE_MOVIES_FAIL";


export function requestMovies() {
    return {
        type: REQUEST_MOVIES
    }
}

export function receiveMovies(data) {
    return {
        type: RECEIVE_MOVIES,
        payload: data
    }
}

export function receiveMoviesFail(error) {
    return {
        type: RECEIVE_MOVIES_FAIL,
        payload: error
    }
}

/**
 * Async Action Creator for movies
 * @description updates the state with the movies data
 * @returns {Function}
 */
export function getMovies() {
    return (dispatch) => {
        dispatch(requestMovies());

        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_API_KEY}`, {
            method: 'GET'
        })
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json()
            })
            .then((data) => {
                dispatch(receiveMovies(data.results));
            })
            .catch((error) => {
                dispatch(receiveMoviesFail(error));
            });
    }
}
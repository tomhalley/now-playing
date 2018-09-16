/**
 * Used to set the Redux initial state
 * @type {{app: {filteredGenres: Array, rating: number}, movies: {isFetching: boolean, data: Array, error: boolean}, genres: {isFetching: boolean, data: Array, error: boolean}}}
 */
export const PreloadedState = {
    app: {
        filteredGenres: [],
        rating: 3
    },
    movies: {
        isFetching: false,
        data: [],
        error: false
    },
    genres: {
        isFetching: false,
        data: [],
        error: false
    },
};
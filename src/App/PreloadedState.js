/**
 * Used to set the Redux initial state
 */
const PreloadedState = {
  app: {
    filteredGenres: [],
    rating: 3,
  },
  movies: {
    isFetching: false,
    data: [],
    error: false,
  },
  genres: {
    isFetching: false,
    data: [],
    error: false,
  },
};

export default PreloadedState;

import {
  RECEIVE_MOVIES,
  RECEIVE_MOVIES_FAIL,
  REQUEST_MOVIES,
} from './Actions';

const movies = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_MOVIES:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_MOVIES:
      return {
        ...state,
        isFetching: false,
        data: action.payload.map(movieData => ({
          title: movieData.title,
          genres: [...movieData.genre_ids],
          rating: movieData.vote_average,
          image_url: movieData.poster_path,
          popularity: movieData.popularity,
        })),
        error: false,
      };
    case RECEIVE_MOVIES_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default movies;

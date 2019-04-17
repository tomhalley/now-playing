import { connect } from 'react-redux';
import MoviesComponent from './Component';
import { getMovies } from './Actions';

const mapStateToProp = state => ({
  app: state.app,
  movies: state.movies,
  genres: {
    data: state.genres.data,
  },
});

const mapDispatchToProps = dispatch => ({
  onComponentWillMount: () => {
    dispatch(getMovies());
  },
});

export default connect(mapStateToProp, mapDispatchToProps)(MoviesComponent);

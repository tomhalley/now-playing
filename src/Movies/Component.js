import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography/Typography';
import MovieComponent from '../Movie/Component';
import { MoviesWrapper } from './Styled';

class MoviesComponent extends React.PureComponent {
  componentWillMount() {
    const { onComponentWillMount } = this.props;
    onComponentWillMount();
  }

  getFilteredMovies = () => {
    const {
      movies: {
        data: movieData,
      },
      app: {
        rating,
        filteredGenres,
      },
    } = this.props;

    /**
     * This was an interesting problem, but thankfully .every short circuits the search
     * as soon as it finds an element which doesn't match
     */
    return movieData
      .filter(movie => movie.rating >= rating)
      .filter(movie => filteredGenres.length === 0
        || filteredGenres.every(filteredGenre => movie.genres.indexOf(filteredGenre) !== -1));
  };

  render() {
    const {
      movies: {
        data: movieData,
      },
      genres: {
        data: genreData,
      },
    } = this.props;

    return (
      <MoviesWrapper>
        <Typography>
          {this.getFilteredMovies().length}
          {' '}
          results
        </Typography>
        {[...movieData]
          .sort((a, b) => b.popularity - a.popularity)
          .map(movie => (
            <MovieComponent
              key={`movie-${movie.id}`}
              title={movie.title}
              imageUrl={movie.image_url}
              visible={this.getFilteredMovies().indexOf(movie) !== -1}
              genres={genreData.filter(genre => movie.genres.indexOf(genre.id) !== -1)
                .map(genre => genre.name)
              }
            />
          ))}
      </MoviesWrapper>
    );
  }
}

MoviesComponent.propTypes = {
  movies: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  }).isRequired,
  app: PropTypes.shape({
    filteredGenres: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
  genres: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  }).isRequired,
  onComponentWillMount: PropTypes.func,
};

MoviesComponent.defaultProps = {
  onComponentWillMount: () => {},
};

export default MoviesComponent;

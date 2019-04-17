import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography/Typography';

import {
  MovieCard,
  MovieCardContent,
  MovieCardMedia,
  MovieCardMediaImg,
} from './Styled';

/**
 * Movie Component
 * @description renders a single Movie
 */
const MovieComponent = ({
  title, genres, visible, imageUrl,
}) => (
  <MovieCard visible={visible ? 1 : 0}>
    <MovieCardContent>
      <Typography variant="headline">{title}</Typography>
      <Typography variant="subheading" color="textSecondary">
        {genres.join(', ')}
      </Typography>
    </MovieCardContent>
    <MovieCardMedia
      title={title}
      src="#"
    >
      <MovieCardMediaImg src={`https://image.tmdb.org/t/p/w342/${imageUrl}`} />
    </MovieCardMedia>
  </MovieCard>
);

MovieComponent.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.shape({}).isRequired),
  visible: PropTypes.bool.isRequired,
};

MovieComponent.defaultProps = {
  genres: [],
};

export default MovieComponent;

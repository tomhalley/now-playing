import React from 'react';
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography/Typography";

import {
    MovieCard,
    MovieCardContent,
    MovieCardMedia,
    MovieCardMediaImg
} from "./Styled";

/**
 * Movie Component
 * @description renders a single Movie
 */
export class MovieComponent extends React.PureComponent {
    render() {
        return (
            <MovieCard visible={this.props.visible ? 1 : 0}>
                <MovieCardContent>
                    <Typography variant="headline">{this.props.title}</Typography>
                    <Typography variant="subheading" color="textSecondary">
                        {this.props.genres.join(', ')}
                    </Typography>
                </MovieCardContent>
                <MovieCardMedia
                    title={this.props.title}
                    src="#"
                >
                    <MovieCardMediaImg src={`https://image.tmdb.org/t/p/w342/${this.props.imageUrl}`} />
                </MovieCardMedia>
            </MovieCard>
        )
    }
}

MovieComponent.defaultProps = {
    genres: []
};

MovieComponent.propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    genres: PropTypes.array,
    visible: PropTypes.bool.isRequired
};
import React from 'react';
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography/Typography";
import {MovieCard, MovieCardContent, MovieCardMedia} from "./Styled";

export class MovieComponent extends React.Component {
    render() {
        return (
            <MovieCard>
                <MovieCardContent>
                    <Typography variant="headline">{this.props.title}</Typography>
                    <Typography variant="subheading" color="textSecondary">
                        {this.props.genres.join(', ')}
                    </Typography>
                </MovieCardContent>
                <MovieCardMedia
                    image={`https://image.tmdb.org/t/p/w342/${this.props.imageUrl}`}
                    title="Live from space album cover"
                />
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
    genres: PropTypes.array
};
import React from 'react';
import PropTypes from 'prop-types';

import {MovieComponent} from "../Movie/Component";
import Typography from "@material-ui/core/Typography/Typography";
import {MoviesWrapper} from "./Styled";

/**
 * Movies Component
 * @description used to render and filter a list of movies
 */
export class MoviesComponent extends React.PureComponent {
    componentWillMount() {
        if (this.props.onComponentWillMount !== undefined) {
            this.props.onComponentWillMount();
        }
    }

    getFilteredMovies = () => {
        return this.props.movies.data
            .filter(movie => {
                return movie.rating >= this.props.app.rating;
            })
            .filter(movie => {
                return this.props.app.filteredGenres.length === 0 ||
                    this.props.app.filteredGenres.every(filteredGenre => {
                        return movie.genres.indexOf(filteredGenre) !== -1;
                    });
            })
    };

    render() {
        return (
            <MoviesWrapper>
                <Typography>{this.getFilteredMovies().length} results</Typography>
                {[...this.props.movies.data]
                    .sort((a, b) => b.popularity - a.popularity)
                    .map((movie, index) => (
                    <MovieComponent
                        key={`movie-${index}`}
                        title={movie.title}
                        imageUrl={movie.image_url}
                        visible={this.getFilteredMovies().indexOf(movie) !== -1}
                        genres={
                            this.props.genres.data
                                .filter(genre => movie.genres.indexOf(genre.id) !== -1)
                                .map(genre => genre.name)
                        }
                    />
                ))}
            </MoviesWrapper>
        )
    }
}

MoviesComponent.propTypes = {
    onComponentWillMount: PropTypes.func
};

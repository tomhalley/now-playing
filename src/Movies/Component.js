import React from 'react';
import PropTypes from 'prop-types';
import {MovieComponent} from "../Movie/Component";

export class MoviesComponent extends React.PureComponent {
    componentWillMount() {
        if (this.props.onComponentWillMount !== undefined) {
            this.props.onComponentWillMount();
        }
    }

    render() {
        return (
            <React.Fragment>
            {this.props.movies.data
                .filter(movie => {
                    return movie.rating >= this.props.app.rating;
                })
                .filter(movie => {
                    return this.props.app.filteredGenres.length === 0 ||
                        this.props.app.filteredGenres.every(filteredGenre => {
                            return movie.genres.indexOf(filteredGenre) !== -1;
                        });
                })
                .map((movie, index) => (
                <MovieComponent
                    key={`movie-${index}`}
                    title={movie.title}
                    imageUrl={movie.image_url}
                    genres={
                        this.props.genres.data
                            .filter(genre => movie.genres.indexOf(genre.id) !== -1)
                            .map(genre => genre.name)
                    }
                />
            ))}
            </React.Fragment>
        )
    }
}

MoviesComponent.propTypes = {
    onComponentWillMount: PropTypes.func
};

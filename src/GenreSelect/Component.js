import React from 'react';
import PropTypes from 'prop-types';

import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Select from "@material-ui/core/Select/Select";
import Input from "@material-ui/core/Input/Input";
import {
    GenreSelectChip,
    GenreSelectChipWrapper,
    GenreSelectFormControl,
    GenreSelectMenuItem,
    GenreSelectWrapper
} from "./Styled";

export class GenreSelectComponent extends React.PureComponent {
    componentWillMount() {
        if (this.props.onComponentWillMount !== undefined) {
            this.props.onComponentWillMount();
        }
    }

    handleChange = (event, value) => {
        this.props.onGenreSelected(value.props.value);
    };

    render() {
        let filteredGenres = this.props.genres.data.filter(genre => {
            return this.props.app.filteredGenres.indexOf(genre.id) !== -1;
        });

        return (
            <GenreSelectWrapper>
                <GenreSelectFormControl>
                    <InputLabel htmlFor="select-multiple-chip">Genres</InputLabel>
                    <Select
                        multiple
                        value={filteredGenres.map(genre => genre.name)}
                        onChange={this.handleChange}
                        input={<Input id="select-multiple-chip" />}
                        renderValue={selected => (
                            <GenreSelectChipWrapper>
                                {selected.map(genre => (
                                    <GenreSelectChip
                                        key={`selected-genre-${genre}`}
                                        label={genre}
                                    />
                                ))}
                            </GenreSelectChipWrapper>
                        )}
                    >
                        {this.props.genres.data.map(genre => (
                            <GenreSelectMenuItem
                                key={`genre-${genre.name}`}
                                value={genre.id}
                                selected={filteredGenres.indexOf(genre.name) !== -1}
                            >
                                {genre.name}
                            </GenreSelectMenuItem>
                        ))}
                    </Select>
                </GenreSelectFormControl>
            </GenreSelectWrapper>
        )
    }
}

GenreSelectComponent.propTypes = {
    onComponentWillMount: PropTypes.func,
    onGenreSelected: PropTypes.func.isRequired
};
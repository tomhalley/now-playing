import React from 'react';
import PropTypes from 'prop-types';

import InputLabel from '@material-ui/core/InputLabel/InputLabel';
import Select from '@material-ui/core/Select/Select';
import Input from '@material-ui/core/Input/Input';
import {
  GenreSelectChip,
  GenreSelectChipWrapper,
  GenreSelectFormControl,
  GenreSelectMenuItem,
  GenreSelectWrapper,
} from './Styled';

class GenreSelectComponent extends React.PureComponent {
  componentWillMount() {
    const { onComponentWillMount } = this.props;
    onComponentWillMount();
  }

    handleChange = (event, value) => {
      const { onGenreSelected } = this.props;
      onGenreSelected(value.props.value);
    };

    render() {
      const {
        app: {
          filteredGenres,
        },
        genres: {
          data,
        },
      } = this.props;

      const genres = data.filter(genre => filteredGenres.indexOf(genre.id) !== -1);

      return (
        <GenreSelectWrapper>
          <GenreSelectFormControl>
            <InputLabel htmlFor="select-multiple-chip">Genres</InputLabel>
            <Select
              multiple
              value={genres.map(genre => genre.name)}
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
              {data.map(genre => (
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
      );
    }
}

GenreSelectComponent.propTypes = {
  app: PropTypes.shape({
    filteredGenres: PropTypes.array.isRequired,
  }).isRequired,
  genres: PropTypes.shape({
    data: PropTypes.array.isRequired,
  }).isRequired,
  onComponentWillMount: PropTypes.func,
  onGenreSelected: PropTypes.func.isRequired,
};

GenreSelectComponent.defaultProps = {
  onComponentWillMount: () => {},
};

export default GenreSelectComponent;

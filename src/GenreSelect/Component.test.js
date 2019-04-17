import React from 'react';
import ReactDOM from 'react-dom';
import GenreSelectComponent from './Component';

describe('GenreSelect/Component', () => {
  it('renders without crashing', () => {
    const div = window.document.createElement('div');
    ReactDOM.render(
      <GenreSelectComponent
        onGenreSelected={() => {}}
        onComponentWillMount={() => {}}
        app={{
          filteredGenres: [],
        }}
        genres={{
          isFetching: false,
          data: [],
          error: false,
        }}
      />,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});

import React from 'react';
import ReactDOM from 'react-dom';
import MovieComponent from './Component';

describe('Movie/Component', () => {
  it('renders without crashing', () => {
    const div = window.document.createElement('div');
    ReactDOM.render(
      <MovieComponent
        imageUrl="test.jpg"
        title="test movie"
        visible
      />,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});

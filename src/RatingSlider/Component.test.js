import React from 'react';
import ReactDOM from 'react-dom';
import RatingSliderComponent from './Component';

describe('RatingSlider/Component', () => {
  it('renders without crashing', () => {
    const div = window.document.createElement('div');
    ReactDOM.render(
      <RatingSliderComponent
        onRatingChanged={() => {}}
        app={{
          rating: 3,
        }}
      />,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});

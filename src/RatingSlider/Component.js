import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography/Typography';

import {
  RatingSlider,
  RatingSliderWrapper,
} from './Styled';

/**
 * Rating slider component
 * @description renders a slider from the input values and fires a callback on value change
 */
class RatingSliderComponent extends React.Component {
  constructor(props) {
    super(props);

    const {
      app: {
        rating,
      },
    } = props;

    this.state = {
      rating,
    };
  }

    handleChange = (event, value) => {
      this.setState({ rating: value });
    };

    /**
     * We don't fire the prop callback with the new value until the user has finished dragging,
     * to save on re-rendering
     */
    handleDragEnd = () => {
      const { onRatingChanged } = this.props;
      const { rating } = this.state;

      onRatingChanged(rating);
    };

    render() {
      const { rating } = this.state;

      return (
        <RatingSliderWrapper>
          <Typography id="label">
            {rating.toFixed(1)}
/10
          </Typography>
          <RatingSlider
            value={rating}
            min={0}
            max={10}
            step={0.5}
            onChange={this.handleChange}
            onDragEnd={this.handleDragEnd}
          />
        </RatingSliderWrapper>
      );
    }
}

RatingSliderComponent.propTypes = {
  app: PropTypes.shape({
    rating: PropTypes.number.isRequired,
  }).isRequired,
  onRatingChanged: PropTypes.func.isRequired,
};

export default RatingSliderComponent;

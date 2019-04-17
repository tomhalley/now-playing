import { connect } from 'react-redux';
import RatingSliderComponent from './Component';
import { filterByRating } from '../App/Actions';

const mapStateToProp = state => ({
  app: {
    rating: state.app.rating,
  },
});

const mapDispatchToProps = dispatch => ({
  onRatingChanged: (value) => {
    dispatch(filterByRating(value));
  },
});

export default connect(mapStateToProp, mapDispatchToProps)(RatingSliderComponent);

import React from 'react';
import PropTypes from 'prop-types';

import MoviesContainer from '../Movies/Container';
import GenreSelectContainer from '../GenreSelect/Container';
import { AppMain, FormFields } from './Styled';
import RatingSliderContainer from '../RatingSlider/Container';

/**
 * App Component
 * @description The main component that will be injected into our root div
 */
class AppComponent extends React.Component {
  componentWillMount() {
    const {
      onComponentWillMount,
    } = this.props;

    onComponentWillMount();
  }

  render() {
    return (
      <AppMain>
        <FormFields>
          <RatingSliderContainer />
          <GenreSelectContainer />
        </FormFields>
        <MoviesContainer />
      </AppMain>
    );
  }
}

AppComponent.propTypes = {
  onComponentWillMount: PropTypes.func,
};

AppComponent.defaultProps = {
  onComponentWillMount: () => {},
};

export default AppComponent;

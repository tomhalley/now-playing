import React from 'react';
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography/Typography";

import {
    RatingSlider,
    RatingSliderWrapper
} from "./Styled";

/**
 * Rating slider component
 * @description renders a slider from the input values and fires a callback on value change
 */
export class RatingSliderComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rating: props.app.rating
        };
    }

    handleChange = (event, value) => {
        this.setState({rating: value});
    };

    /**
     * We don't fire the prop callback with the new value until the user has finished dragging,
     * to save on re-rendering
     */
    handleDragEnd = () => {
        this.props.onRatingChanged(this.state.rating);
    };

    render() {
        return (
            <RatingSliderWrapper>
                <Typography id="label">{this.state.rating.toFixed(1)}/10</Typography>
                <RatingSlider
                    value={this.state.rating}
                    min={0}
                    max={10}
                    step={0.5}
                    onChange={this.handleChange}
                    onDragEnd={this.handleDragEnd}
                />
            </RatingSliderWrapper>
        )
    }
}

RatingSliderComponent.propTypes = {
    onRatingChanged: PropTypes.func.isRequired
};
import React from 'react';
import PropTypes from 'prop-types';
import {RatingSlider, RatinSliderWrapper} from "./Styled";
import Typography from "@material-ui/core/Typography/Typography";

export class RatingSliderComponent extends React.Component {
    handleChange = (event, value) => {
        this.props.onRatingChanged(value);
    };

    render() {
        return (
            <RatinSliderWrapper>
                <Typography id="label">{this.props.app.rating.toFixed(1)}/10</Typography>
                <RatingSlider
                    value={this.props.app.rating}
                    min={0}
                    max={10}
                    step={0.5}
                    onChange={this.handleChange}
                />
            </RatinSliderWrapper>
        )
    }
}

RatingSliderComponent.propTypes = {
    onRatingChanged: PropTypes.func.isRequired
};
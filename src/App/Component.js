import React from 'react';

import MoviesContainer from '../Movies/Container';
import GenreSelectContainer from "../GenreSelect/Container";
import {AppMain, FormFields} from "./Styled";
import RatingSliderContainer from "../RatingSlider/Container";

export class AppComponent extends React.Component {
    componentWillMount() {
        if (this.props.onComponentWillMount !== undefined) {
           this.props.onComponentWillMount();
        }
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

import React from 'react';

import MoviesContainer from '../Movies/Container';
import GenreSelectContainer from "../GenreSelect/Container";
import {AppMain, FormFields} from "./Styled";
import RatingSliderContainer from "../RatingSlider/Container";

/**
 * App Component
 * @description The main component that will be injected into our root div
 */
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

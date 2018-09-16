import React from 'react';
import ReactDOM from 'react-dom';
import {MovieComponent, MoviesComponent} from './Component';

describe('Movies/Component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <MoviesComponent
                onComponentWillMount={() => {}}
                app={{
                    filteredGenres: [],
                    rating: 3
                }}
                movies={{
                    isFetching: false,
                    data: [],
                    error: false
                }}
                genres={{
                    isFetching: false,
                    data: [],
                    error: false
                }}
            />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });
});


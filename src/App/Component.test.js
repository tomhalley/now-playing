import React from 'react';
import ReactDOM from 'react-dom';
import {AppComponent} from "./Component";
import {Provider} from "react-redux";
import AppStore from "./Store";

describe('App/Component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <Provider store={AppStore}>
                <AppComponent />
            </Provider>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });
});


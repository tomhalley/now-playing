import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {AppComponent} from './App/Component';
import {Provider} from "react-redux";
import AppStore from "./App/Store";

ReactDOM.render(
    <Provider store={AppStore}>
        <AppComponent />
    </Provider>,
    document.getElementById('root')
);

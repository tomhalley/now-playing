import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './App/Container';
import {Provider} from "react-redux";
import AppStore from "./App/Store";

ReactDOM.render(
    <Provider store={AppStore}>
        <AppContainer />
    </Provider>,
    document.getElementById('root')
);

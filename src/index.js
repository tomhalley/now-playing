import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import AppComponent from './App/Component';
import AppStore from './App/Store';

ReactDOM.render(
  <Provider store={AppStore}>
    <AppComponent />
  </Provider>,
  window.document.getElementById('root'),
);

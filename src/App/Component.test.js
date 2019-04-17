import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppComponent from './Component';
import AppStore from './Store';

describe('App/Component', () => {
  it('renders without crashing', () => {
    const div = window.document.createElement('div');
    ReactDOM.render(
      <Provider store={AppStore}>
        <AppComponent />
      </Provider>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});

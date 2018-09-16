import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './Reducer';
import {PreloadedState} from './PreloadedState';
// import whyDidYouUpdate from 'why-did-you-update';

const loggerMiddleware = createLogger();

const middleware = [
    thunkMiddleware
];

if (process.env.NODE_ENV === 'development') {
    middleware.push(loggerMiddleware);
    // whyDidYouUpdate(React)
}

const AppStore = createStore(
    rootReducer,
    PreloadedState,
    applyMiddleware(...middleware)
);

export default AppStore;
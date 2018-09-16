import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './Reducer';
import {PreloadedState} from './PreloadedState';

const loggerMiddleware = createLogger();

const middleware = [
    thunkMiddleware
];

if (process.env.NODE_ENV === 'development') {
    middleware.push(loggerMiddleware);
}

const AppStore = createStore(
    rootReducer,
    PreloadedState,
    applyMiddleware(...middleware)
);

export default AppStore;
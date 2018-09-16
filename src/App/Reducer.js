import {combineReducers} from 'redux'
import {
    APP_FILTER_BY_RATING,
    APP_FILTER_GENRE_TOGGLED,
} from "./Actions";
import {movies} from '../Movies/Reducer';
import {genres} from "../GenreSelect/Reducer";

function app(state = {}, action) {
    switch (action.type) {
        case APP_FILTER_BY_RATING:
            return {
                ...state,
                rating: action.payload
            };
        case APP_FILTER_GENRE_TOGGLED:
            let index = state.filteredGenres.indexOf(action.payload);

            let newFilteredGenres = [...state.filteredGenres];

            if (index === -1) {
                newFilteredGenres.push(action.payload);
            } else {
                newFilteredGenres.splice(index, 1);
            }

            return {
                ...state,
                filteredGenres: newFilteredGenres
            };
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    app,
    movies,
    genres
});

export default rootReducer
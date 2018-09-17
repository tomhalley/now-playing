import {
    RECEIVE_GENRES,
    RECEIVE_GENRES_FAIL,
    REQUEST_GENRES
} from "./Actions";

/**
 * Genres reducer
 * @param state
 * @param action
 * @returns {*}
 */
export function genres(state = {}, action) {
    switch (action.type) {
        case REQUEST_GENRES:
            return {
                ...state,
                isFetching: true
            };
        case RECEIVE_GENRES:
            return {
                ...state,
                isFetching: false,
                data: action.payload,
                error: false
            };
        case RECEIVE_GENRES_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        default:
            return state;
    }
}
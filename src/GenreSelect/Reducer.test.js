import {genres} from './Reducer';
import {} from "./Actions";
import {PreloadedState} from "../App/PreloadedState";
import {REQUEST_GENRES} from "./Actions";
import {RECEIVE_GENRES} from "./Actions";
import {RECEIVE_GENRES_FAIL} from "./Actions";

describe('GenreSelect/Reducer', () => {
    it('should return the initial state', () => {
        expect(genres(PreloadedState, {})).toEqual(PreloadedState)
    });

    it('REQUEST_GENRES should set isFetching', () => {
        let newState = genres(PreloadedState.genres, {
            type: REQUEST_GENRES
        });

        expect(newState).toEqual({
            isFetching: true,
            data: [],
            error: false
        });
    });

    it('RECEIVE_GENRES should set data', () => {
        const data = {value: [100]};
        let newState = genres(PreloadedState.genres, {
            type: RECEIVE_GENRES,
            payload: data
        });

        expect(newState).toEqual({
            isFetching: false,
            data: data,
            error: false
        });
    });

    it('RECEIVE_GENRES_FAIL should set error', () => {
        const error = new Error();
        let newState = genres(PreloadedState.genres, {
            type: RECEIVE_GENRES_FAIL,
            payload: error
        });

        expect(newState).toEqual({
            isFetching: false,
            data: [],
            error: error
        });
    });
});
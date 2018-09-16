import React from 'react';
import {
    REQUEST_GENRES,
    RECEIVE_GENRES,
    RECEIVE_GENRES_FAIL,
    requestGenres,
    receiveGenres,
    receiveGenresFail,
} from "./Actions";

describe('GenreSelect/Actions', () => {
    describe('requestGenres', () => {
        it('returns the correct object', () => {
            const expectedAction = {
                type: REQUEST_GENRES
            };
            expect(requestGenres()).toEqual(expectedAction)
        });
    });

    describe('receiveGenres', () => {
        it('returns the correct object', () => {
            const data = {value: 1};
            const expectedAction = {
                type: RECEIVE_GENRES,
                payload: data
            };
            expect(receiveGenres(data)).toEqual(expectedAction)
        });
    });

    describe('receiveGenresFail', () => {
        it('returns the correct object', () => {
            const error = new Error();
            const expectedAction = {
                type: RECEIVE_GENRES_FAIL,
                payload: error
            };
            expect(receiveGenresFail(error)).toEqual(expectedAction)
        });
    });
});


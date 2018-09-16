import React from 'react';
import {
    RECEIVE_MOVIES,
    RECEIVE_MOVIES_FAIL,
    receiveMovies,
    receiveMoviesFail,
    REQUEST_MOVIES,
    requestMovies
} from "./Actions";


describe('Movies/Actions', () => {
    describe('requestMovies', () => {
        it('returns the correct object', () => {
            const expectedAction = {
                type: REQUEST_MOVIES
            };
            expect(requestMovies()).toEqual(expectedAction)
        });
    });

    describe('receiveMovies', () => {
        it('returns the correct object', () => {
            const data = {value: 1};
            const expectedAction = {
                type: RECEIVE_MOVIES,
                payload: data
            };
            expect(receiveMovies(data)).toEqual(expectedAction)
        });
    });

    describe('receiveMoviesFail', () => {
        it('returns the correct object', () => {
            const error = new Error();
            const expectedAction = {
                type: RECEIVE_MOVIES_FAIL,
                payload: error
            };
            expect(receiveMoviesFail(error)).toEqual(expectedAction)
        });
    });
});


import React from 'react';
import {
    APP_FILTER_BY_RATING,
    APP_FILTER_CLEAR,
    APP_FILTER_GENRE_TOGGLED, clearFilters,
    filterByRating,
    toggleGenreFiltered
} from "./Actions";

describe('App/Actions', () => {
    describe('filterByRating', () => {
        it('returns the correct object', () => {
            const rating = 5;
            const expectedAction = {
                type: APP_FILTER_BY_RATING,
                payload: rating
            };
            expect(filterByRating(rating)).toEqual(expectedAction)
        });
    });

    describe('toggleGenreFiltered', () => {
        it('returns the correct object', () => {
            const genreId = 15;
            const expectedAction = {
                type: APP_FILTER_GENRE_TOGGLED,
                payload: genreId
            };
            expect(toggleGenreFiltered(genreId)).toEqual(expectedAction)
        });
    });
});


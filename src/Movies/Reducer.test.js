import {movies} from './Reducer';
import {PreloadedState} from "../App/PreloadedState";
import {RECEIVE_MOVIES, RECEIVE_MOVIES_FAIL, REQUEST_MOVIES} from "./Actions";

describe('Movies/Reducer', () => {
    it('should return the initial state', () => {
        expect(movies(PreloadedState, {})).toEqual(PreloadedState)
    });

    it('REQUEST_MOVIES should set isFetching', () => {
        let newState = movies(PreloadedState.movies, {
            type: REQUEST_MOVIES
        });

        expect(newState).toEqual({
            isFetching: true,
            data: [],
            error: false
        });
    });

    it('RECEIVE_MOVIES should set data', () => {
        const data = {
            adult: false,
            backdrop_path: "/fgsHxz21B27hOOqQBiw9L6yWcM7.jpg",
            genre_ids: [27, 9648, 53],
            id: 439079,
            original_language: "en",
            original_title: "The Nun",
            overview: "When a young nun at a cloistered abbey in Romania takes her own life, a priest with a haunted past and a novitiate on the threshold of her final vows are sent by the Vatican to investigate. Together they uncover the order’s unholy secret. Risking not only their lives but their faith and their very souls, they confront a malevolent force in the form of the same demonic nun that first terrorized audiences in “The Conjuring 2,” as the abbey becomes a horrific battleground between the living and the damned.",
            popularity: 250.681,
            poster_path: "/sFC1ElvoKGdHJIWRpNB3xWJ9lJA.jpg",
            release_date: "2018-09-05",
            title: "The Nun",
            video: false,
            vote_average: 6.1,
            vote_count: 325
        };

        let newState = movies(PreloadedState.movies, {
            type: RECEIVE_MOVIES,
            payload: [data]
        });

        expect(newState).toEqual({
            isFetching: false,
            data: [{
                title: data.title,
                genres: [...data.genre_ids],
                rating: data.vote_average,
                image_url: data.poster_path,
                popularity: data.popularity
            }],
            error: false
        });
    });

    it('RECEIVE_MOVIES_FAIL should set error', () => {
        const error = new Error();
        let newState = movies(PreloadedState.movies, {
            type: RECEIVE_MOVIES_FAIL,
            payload: error
        });

        expect(newState).toEqual({
            isFetching: false,
            data: [],
            error: error
        });
    });
});
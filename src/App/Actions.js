export const APP_FILTER_BY_RATING = "APP_FILTER_BY_RATING";
export const APP_FILTER_GENRE_TOGGLED = "APP_FILTER_GENRE_TOGGLED";

export function filterByRating(rating) {
    return {
        type: APP_FILTER_BY_RATING,
        payload: rating
    }
}

export function toggleGenreFiltered(genreId) {
    return {
        type: APP_FILTER_GENRE_TOGGLED,
        payload: genreId
    }
}
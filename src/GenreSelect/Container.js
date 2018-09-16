import {connect} from 'react-redux';
import {GenreSelectComponent} from "./Component";
import {getGenres} from "./Actions";
import {toggleGenreFiltered} from "../App/Actions";

const mapStateToProp = (state) => {
    return {
        app: {
            filteredGenres: state.app.filteredGenres
        },
        genres: state.genres
    }
};

const mapDispatchToProps = (dispatch) => ({
    onComponentWillMount: () => {
        dispatch(getGenres());
    },
    onGenreSelected: (genreId) => {
        dispatch(toggleGenreFiltered(genreId));
    }
});

export default connect(mapStateToProp, mapDispatchToProps)(GenreSelectComponent);
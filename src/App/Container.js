import {connect} from 'react-redux';
import AppComponent from "./Component";

const mapDispatchToProps = (dispatch) => ({
    onComponentWillMount: () => {

    }
});

export default connect(null, mapDispatchToProps)(AppComponent);
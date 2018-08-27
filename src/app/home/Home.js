import { connect } from 'react-redux';

import { authOperations } from 'reducers/auth';
import HomeComponent from './HomeComponent';

const mapStateToProps = (state) => {
    return {
        ...state.auth,
    };
};

const mapDispatchToProps = (dispatch) => {
    const getCurrentUser = token => {
        dispatch(authOperations.getCurrentUser(token));
    };

    return { getCurrentUser };
};

const Home = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeComponent);

export default Home;
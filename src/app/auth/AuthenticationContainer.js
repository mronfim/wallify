import { connect } from 'react-redux';

import Authentication from './Authentication';
import { authOperations } from './duck';

const mapStateToProps = (state) => {
    return {
        ...state.auth,
    };
};

const mapDispatchToProps = (dispatch) => {
    const getAuthentication = ({ email, password }) => {
        dispatch(authOperations.getAuthentication({ email, password }));
    };

    const signUp = ({ email, password, password_confirmation }) => {
        dispatch(authOperations.signUp({ email, password, password_confirmation }));
    }

    return { getAuthentication, signUp };
}

const AuthenticationContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Authentication);

export default AuthenticationContainer;
import { connect } from 'react-redux';

import AuthenticationComponent from './AuthenticationComponent';
import { authOperations } from 'reducers/auth';
import { push } from 'connected-react-router';

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
    };

    const linkTo = link => {
        push(link);
    };

    return { getAuthentication, signUp, linkTo };
};

const Authentication = connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthenticationComponent);

export default Authentication;
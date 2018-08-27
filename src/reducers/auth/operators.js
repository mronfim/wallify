import { Creators } from './actions';
import { push } from 'connected-react-router';
import axios from 'config/axios.config.js';

const receiveAuthenticationAction = Creators.receiveAuthentication;
const requestAuthenticationAction = Creators.requestAuthentication;
const authenticationErrorAction = Creators.authenticationError;
const requestCurrentUserAction = Creators.requestCurrentUser;
const receiveCurrentUserAction = Creators.receiveCurrentUser;
const logOutAction = Creators.logOut;


const getAuthentication = ({email, password}) => {
    return dispatch => {
        dispatch(requestAuthenticationAction());
        return axios.post('sign_in', {
            email,
            password
        })
        .then(response => {
            dispatch(receiveAuthenticationAction(response.data));
            dispatch(getCurrentUser(response.data.jwt));
            dispatch(push('/'));
        })
        .catch(error => {
            dispatch(authenticationErrorAction({
                status: error.response.status,
                statusText: error.response.statusText,
                msg: 'Incorrect email or password',
            }))
        });
    }
};

const signUp = ({ email, password, password_confirmation }) => {
    return dispatch => {
        dispatch(requestAuthenticationAction());
        return axios.post('sign_up', {
            user: {
                email,
                password,
                password_confirmation
            }
        })
        .then(response => {
            dispatch(receiveAuthenticationAction(response.data));
            dispatch(getCurrentUser(response.data.jwt));
            dispatch(push('/'));
        })
        .catch(error => {
            dispatch(authenticationErrorAction({
                status: error.response.status,
                statusText: error.response.statusText,
                msg: 'Error',
            }))
        });
    }
};

const getCurrentUser = token => {
    return dispatch => {
        dispatch(requestCurrentUserAction());
        return axios.get('me', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then(response => {
            dispatch(receiveCurrentUserAction(response.data));
        });
    }
}

const logOut = () => dispatch => { dispatch(logOutAction()) };

export default {
    getAuthentication,
    signUp,
    getCurrentUser,
    logOut,
};
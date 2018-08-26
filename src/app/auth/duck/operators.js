import { Creators } from './actions';
import axios from 'config/axios.config.js';

const receiveAuthenticationAction = Creators.receiveAuthentication;
const requestAuthenticationAction = Creators.requestAuthentication;
// for now just delete the user token
const logOut = Creators.logOut;


const getAuthentication = ({email, password}) => {
    return dispatch => {
        dispatch(requestAuthenticationAction());
        return axios.post('sign_in', {
            email,
            password
        })
        .then(response => {
            dispatch(receiveAuthenticationAction(response.data));
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
        });
    }
};

export default {
    getAuthentication,
    signUp,
    logOut,
}
import types from './types'

const INITIAL_STATE = {
    isAuthenticated: false,
    showSpinner: false,
    token: null,
    user: null,
    error: null,
};

const authReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case types.LOG_OUT: {
            return {
                ...state,
                isAuthenticated: false,
                token: null,
                user: null,
                error: null,
            }
        }

        case types.REQUEST_AUTHENTICATION: {
            return {
                ...state,
                isAuthenticated: false,
                showSpinner: true,
                token: null,
                user: null,
                error: null,
            }
        }

        case types.RECEIVE_AUTHENTICATION: {
            return {
                ...state,
                isAuthenticated: true,
                showSpinner: false,
                token: action.data.jwt,
                error: null,
            }
        }

        case types.REQUEST_CURRENT_USER: {
            return {
                ...state
            }
        }

        case types.RECEIVE_CURRENT_USER: {
            return {
                ...state,
                user: action.data,
            }
        }

        case types.AUTHENTICATION_ERROR: {
            return {
                ...state,
                isAuthenticated: false,
                showSpinner: false,
                user: null,
                error: action.error,
            }
        }

        default: return state;
    }
}

export default authReducer;
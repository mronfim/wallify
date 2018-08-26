import types from './types'

const INITIAL_STATE = {
    isAuthenticated: false,
    showSpinner: false,
    user: null,
};

const authReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case types.LOG_OUT: {
            return {
                ...state,
                isAuthenticated: false,
                user: null,
            }
        }

        case types.REQUEST_AUTHENTICATION: {
            return {
                ...state,
                isAuthenticated: false,
                showSpinner: true,
                user: null,
            }
        }

        case types.RECEIVE_AUTHENTICATION: {
            return {
                ...state,
                isAuthenticated: true,
                showSpinner: false,
                user: action.user,
            }
        }

        default: return state;
    }
}

export default authReducer;
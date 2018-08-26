import { combineReducers } from 'redux';
import authReducer from './app/auth/duck/reducers';

const rootReducer = combineReducers({
    auth: authReducer
});

export default rootReducer;
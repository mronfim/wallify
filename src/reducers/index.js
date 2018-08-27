import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import createHistory from 'history/createBrowserHistory'
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import authReducer from './auth/reducers';

export const history = createHistory();

const initialState = {};
const enhancers = [];
const middleware = [thunk, routerMiddleware(history)];

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2,
    whitelist: ['auth'],
};

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension());
    }

    middleware.push(logger);
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
);

const rootReducer = combineReducers({
    auth: authReducer
});

const pReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
    connectRouter(history)(pReducer),
    initialState,
    composedEnhancers
);

export const persistor = persistStore(store);

export default store;
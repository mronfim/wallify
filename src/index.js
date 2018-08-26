import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
    createStore,
    applyMiddleware,
} from 'redux';

import App from './app/App';
import rootReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

import 'semantic-ui-css/semantic.min.css';
import './index.css';

const middleware = applyMiddleware(thunk, logger);
const store = createStore(rootReducer, composeWithDevTools(middleware));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();

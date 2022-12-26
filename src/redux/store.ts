import {applyMiddleware, combineReducers} from 'redux';
import { legacy_createStore as createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';


import {appReducer} from './reducers/index';
import rootSaga from "../saga";

const reducers = combineReducers({
    appData: appReducer,
});

let store;

const initStore = (initialStore: any): void => {
    store = initialStore;
};

const bindMiddleware = (middleware: any) => {
    return applyMiddleware(...middleware);
};

const sagaMiddleware = createSagaMiddleware();

export const makeStore = () => {
    const { persistStore, persistReducer } = require('redux-persist');
    const storage = require('redux-persist/lib/storage').default;

    const persistConfig = {
        key: 'react.js',
        whitelist: [''],
        storage,
    };

    const persistedReducer = persistReducer(persistConfig, reducers);

    const store = createStore(persistedReducer, bindMiddleware([sagaMiddleware]));
    // @ts-ignore
    store[`__persistor`] = persistStore(store);
    sagaMiddleware.run(rootSaga);
    initStore(store);
    return store;
};


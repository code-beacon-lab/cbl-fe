import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import reducer from './rootReducer';
import logger from 'redux-logger';

const middleware = [ ...getDefaultMiddleware(), logger ];

const store = configureStore({
        reducer,        // 합친 리듀서들을 보냄
        middleware,     // Logger
});

export type AppDispatch = typeof store.dispatch
export default store;
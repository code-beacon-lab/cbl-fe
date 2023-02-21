// Redux 최상단 파일
import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import reducers from './rootReducer';
import logger from 'redux-logger';

const middleware = [ ...getDefaultMiddleware(), logger ];

const store = configureStore({
        reducer: reducers,        // 합친 리듀서들을 보냄
        middleware,     // Logger
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store

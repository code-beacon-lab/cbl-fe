// Redux 최상단 파일
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './rootReducer';
import logger from 'redux-logger';

const middleware = [ logger ];

const store = configureStore({
        reducer: rootReducer,        // 합친 리듀서들을 보냄
        middleware,     // Logger
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store

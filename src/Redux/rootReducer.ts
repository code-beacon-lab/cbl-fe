// Slices 디렉터리에 만들어둔 리듀서들을 합치는 역할을 한다.
import {combineReducers} from "@reduxjs/toolkit";
import usersReducer from './Slices/users';
import boardReducer from "./Slices/boardSlice";
// 만들어 놓은 리듀서들을 합친다.

const rootReducer = combineReducers({
    users: usersReducer,
    boards: boardReducer
})


// React에서 사용할 수 있도록 타입을 만들어 export 해준다.
export type ReducerType = ReturnType<typeof rootReducer>;
export default rootReducer;

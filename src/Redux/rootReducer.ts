// Slices 디렉터리에 만들어둔 리듀서들을 합치는 역할을 한다.
import {combineReducers} from "@reduxjs/toolkit";
import users from './Slices/users';

// 만들어 놓은 리듀서들을 합친다.
const reducer = combineReducers({
    users
});

// React에서 사용할 수 있도록 타입을 만들어 export 해준다.
export type ReducerType = ReturnType<typeof reducer>;
export default reducer;
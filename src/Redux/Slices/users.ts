import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface User {
    id: number;
    name: string;
}

let tempId = 3;

// slice 안에 들어갈 내용들은 매우 심플하고 직관적이다.
// name, initialState, reducers.
export const users = createSlice({
    name: 'users',
    initialState: [
        { id: 1, name: 'User1' },
        { id: 2, name: 'User2' },
    ] as User[], // 필수로 타입 지정 안해도 되지만, 확실히 하기로 한다.
    reducers: {

        // Redux Toolkit에서의 action 사용 방법 (타입지정 필수)
        addUser(state, action: PayloadAction<User>) {
            action.payload.id = tempId++;
            // 업데이트 되는 State 를 return 해준다.
            return [...state, action.payload]; // 배열, 오브젝트형 불변성을 지켜야해서 복사본 문법 사용 [...state, ]
        }
    }
});

// 액션과 리듀서를 export
export const { addUser } = users.actions;
export default users.reducer;
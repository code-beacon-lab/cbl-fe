import React, {FormEvent, useState} from 'react';
import './App.css';
import AppRouter from "./router/AppRouter"; // root router 파일 (아직 분리전)
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from './Redux/rootReducer';
import { User, addUser } from './Redux/Slices/users';

function App() {

    const users = useSelector<ReducerType, User[]>(state=> state.users);
    const dispatch = useDispatch();

    const [ name, setName ] = useState('');

    const handleChangeName = (e: any) => {
        setName(e.target.value);
    }

    const handleAddUser = (e:FormEvent) => {
        e.preventDefault();
        dispatch(addUser({ name } as User));
        setName('');
    }

    return (
        <>

            <form onSubmit={handleAddUser}>
                <input type='text' value={name} onChange={handleChangeName} />
                <button type='submit'>Add User</button>
            </form>

            {users.map(user=> (
                <div key={user.id}>{user.name}</div>
            ))}
            <AppRouter/>
        </>

    )
}

export default App;
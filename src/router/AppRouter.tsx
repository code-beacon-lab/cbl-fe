import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Main from '../components/main/Main';
import BoardList from '../components/board/BoardList';
import Login from '../components/login/Login';
import Study from '../components/study/Study';
import Community from '../components/community/Community';

const AppRouter = () => {
    const styles = {
        spaceTop: {
            marginTop: "60px"
        }
    };

    return (
        <>
            <BrowserRouter>
                <div style={styles.spaceTop}></div>
                <Routes>
                    <Route path={"/"} element={<Main/>} />
                    <Route path={"/login"} element={<Login/>} />
                    <Route path={"/study"} element={<Study/>} />
                    <Route path={"/community"} element={<Community/>} />
                    <Route path={"/board"} element={<BoardList/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRouter;
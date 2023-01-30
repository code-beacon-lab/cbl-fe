import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../components/Main";
import Board from "../components/Board";
import Login from "../components/Login";
import TestForm from "../components/TestForm";
import Community from "../components/Community";

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
                    <Route path={"/board"} element={<Board/>} />
                    <Route path={"/login"} element={<Login/>} />
                    <Route path={"/study"} element={<TestForm/>} />
                    <Route path={"/community"} element={<Community/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRouter;
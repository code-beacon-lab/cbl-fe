import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "../components/Navigation";
import Main from "../components/Main";
import Board from "../components/Board";
import Login from "../components/Login";

const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Navigation />
                <Routes>
                    <Route path={"/"} element={<Main/>} />
                    <Route path={"/board"} element={<Board/>} />
                    <Route path={"/login"} element={<Login/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRouter;
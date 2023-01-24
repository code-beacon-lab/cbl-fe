import React, {useState, useEffect} from "react";
import { BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Navigation from "../components/Navigation";
import Main from "../components/main";
import Board from "../components/board";
import Login from "../components/login";

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
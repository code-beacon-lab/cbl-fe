import React from 'react';
import './App.css';
import AppRouter from "./router/AppRouter";
import Navigation from "./components/Navigation";

function App() {

    return (
        <>
            <Navigation />
            <AppRouter/>
        </>

    )
}

export default App;
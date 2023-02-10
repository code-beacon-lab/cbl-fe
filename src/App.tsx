import React from 'react';
import './App.css';
import AppRouter from "./router/AppRouter";
import Navigation from "./components/Navigation";

function App() {

    return (
        <div className={"App"} style={{width:'900px', margin:'0 auto'}}>
            <Navigation />
            <AppRouter />
        </div>

    )
}

export default App;
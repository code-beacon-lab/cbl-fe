import React from 'react';
import Navigation from './components/Navigation';
import AppRouter from './router/AppRouter';
import './App.css';

function App() {
    return (
        <div className={"App"} style={{width:'900px', margin:'0 auto'}}>
            <Navigation />
            <AppRouter />
        </div>
    )
}

export default App;
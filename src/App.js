// src/App.js
import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Home />
                <About />
                <Projects />
            </main>
        </div>
    );
}

export default App;

import './globals.css';
import React from 'react'
import { useState } from 'react';

import Header from "./components/Header.tsx";
import Layout from "./components/Layout.tsx";


export const App: React.FC = () => {
    const [gameStarted, setGameStarted] = useState(false);
    
    function startGame() {
    setGameStarted(prev => prev = !prev)
    }
    
    console.log(gameStarted)

    return (
        <div className='App'>
            <main>
                <Header />
                <Layout startGame={startGame} gameStarted={gameStarted} />
            </main>
        </div>
    )
}

export default App;
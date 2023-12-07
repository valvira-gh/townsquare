import './globals.css';
import React from 'react'

import Header from "./components/Header.tsx";
import Layout from "./components/Layout.tsx";


export const App: React.FC = () => {
    // code

    return (
        <div className='App'>
            <main>
                <Header />
                <Layout />
            </main>
        </div>
    )
}

export default App;
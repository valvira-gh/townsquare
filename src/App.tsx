import './styles.css';
import React from 'react'

import Header from "./components/Header.tsx";

export const App: React.FC = () => {
    // code

    return (
        <div className='App'>
            <main>
                <Header />
            </main>
        </div>
    )
}

export default App;
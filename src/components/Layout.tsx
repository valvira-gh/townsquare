import React, { useState } from "react";
import LoadingAnimation from "../animations/LoadingAnimation";
import './layout.css';

interface LayoutProps {
  startGame: () => void;
  gameStarted: boolean;
}

const Layout: React.FC<LayoutProps>= ({ startGame, gameStarted }) => {
  


  return (
    <div className="window">
      <div>
        {gameStarted ? null : (
          <>
            <LoadingAnimation />
            <button onClick={startGame}>Start Game</button>
          </>
        )}
       
        
         </div>
      </div>
    )
}

export default Layout;
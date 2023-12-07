import React from "react";
import LoadingAnimation from "../animations/LoadingAnimation";
import './layout.css';

const Layout: React.FC = () => {
    // code

  return (
    <div className="window">
        <div>
            <LoadingAnimation />
         </div>
      </div>
    )
}

export default Layout;
import React, { useState, useEffect } from "react";
import "./layout.css";

const Layout: React.FC = (): JSX.Element => {
  const [loadingText, setLoadingText] = useState("Loading");

  useEffect(() => {}, [1000]);

  return (
    <div className={"window"}>
      {/*LOADING*/}
      <h2 className="loading-text">{loadingText}</h2>
    </div>
  );
};

export default Layout;

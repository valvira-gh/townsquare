import React, { useState, useEffect } from "react";
import "./layout.css";

interface LayoutTypes {
  date: Date;
  loadingText: null | string;
  setLoadingText: React.Dispatch<string>;
}

const Layout: React.FC<LayoutTypes> = () => {
  const [loadingText, setLoadingText] = useState("Loading");
  const [date, setDate] = useState<number>(0);
  useEffect(() => {
    const date = new Date();
  }, []);

  return (
    <div className={"window"}>
      {/*LOADING*/}
      <h2 className="loading-text">{loadingText}</h2>
    </div>
  );
};

export default Layout;

import React from "react";
// import { Link } from "react-router-dom";
import "./MainContent.css";
import Frompage from "./Formpage";
// import Fontawesome from "@fortawesome/free-solid-svg-icons";
const MainContent = () => {
  return (
    <div>
      <div className="container">
        <div className="leftside">
          <div id="welcome">
            Welcome to our website
            <hr />
          </div>

          <div className="picture"></div>
        </div>
        <div className="rightside" align="bottom">
          <Frompage />
        </div>
      </div>
    </div>
  );
};

export default MainContent;

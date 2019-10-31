import React from "react";
import "./Navbar.css";

const Navbar = props => (
  <div className="NavHeader">
    {/* <div className="navTitle">Title</div> */}
    <div className="scores">
      Score: {props.score} Highscore: {props.topScore}
    </div>
  </div>
);

export default Navbar;
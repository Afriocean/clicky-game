import React from "react";
import "./Title.css";

function Title(props) {
  return (
  <div className="TitleHeader">
    <h1 className="Title">{props.children}</h1>
    <h2>Click on an image to earn points, but don't click on an image more than once!</h2>
  </div>
  );
}
export default Title;
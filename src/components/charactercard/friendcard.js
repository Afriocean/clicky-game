import React from "react";
import "./Friendcard.css";

function Friendcard(props) {
  return (
    <div className="card" onClick={() => props.clickCounter(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default Friendcard;
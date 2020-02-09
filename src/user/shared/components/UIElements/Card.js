import React from "react";
import "./Card.css";
// import Card from "react-bulma-components/lib/components/card";
//will default to previous styling for now to fix Card error
const Card = props => {
  return (
    <div className={`card ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};

export default Card;

//generic card template- can be used for profile card, group card, event card... wherever you need to render a card.
//card properties can be tailored to specific need later

import React from "react";

import "./Card.css";

const Card = props => {
  return (
    <div className={`card ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};

export default Card;

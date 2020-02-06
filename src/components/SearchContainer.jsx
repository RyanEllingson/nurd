import React from "react";
import EventCard from "./EventCard";
import events from "../events";

function SearchContainer(props) {
  return (
    <div>
      <EventCard
        imageURL={events[0].imageURL}
        name={events[0].name}
        img={events[0].imgURL}
        userName={events[0].userName}
        subtitle={events[0].subtitle}
        email={events[0].email}
      />
    </div>
  );
}
export default SearchContainer;

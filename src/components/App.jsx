import React from "react";
import EventCard from "./EventCard";
import events from "../events";
import SearchPage from "./SearchPage";
import "./styles.css";
import routes from "../routes/apiRoutes";

function App() {
  const games = routes.getBoardGame("catan");
    

  return (
    <div>
      <SearchPage />

      <div class="columns is-multiline"> </div>

      <EventCard
        imageURL={events[0].imageURL}
        name={events[0].name}
        img={events[0].imgURL}
        userName={events[0].userName}
        subtitle={events[0].subtitle}
        email={events[0].email}
      />
      <EventCard
        imageURL={events[1].imageURL}
        name={events[1].name}
        img={events[1].imgURL}
        userName={events[1].userName}
        subtitle={events[1].subtitle}
        email={events[1].email}
      />
      <EventCard
        imageURL={events[2].imageURL}
        name={events[2].name}
        img={events[2].imgURL}
        userName={events[2].userName}
        subtitle={events[2].subtitle}
        email={events[2].email}
      />
      <EventCard
        imageURL={events[0].imageURL}
        name={events[0].name}
        img={events[0].imgURL}
        userName={events[0].userName}
        subtitle={events[0].subtitle}
        email={events[0].email}
      />
      <EventCard
        imageURL={events[1].imageURL}
        name={events[1].name}
        img={events[1].imgURL}
        userName={events[1].userName}
        subtitle={events[1].subtitle}
        email={events[1].email}
      />
      <EventCard
        imageURL={events[2].imageURL}
        name={events[2].name}
        img={events[2].imgURL}
        userName={events[2].userName}
        subtitle={events[2].subtitle}
        email={events[2].email}
      />
      <EventCard
        imageURL={events[0].imageURL}
        name={events[0].name}
        img={events[0].imgURL}
        userName={events[0].userName}
        subtitle={events[0].subtitle}
        email={events[0].email}
      />
      <EventCard
        imageURL={events[1].imageURL}
        name={events[1].name}
        img={events[1].imgURL}
        userName={events[1].userName}
        subtitle={events[1].subtitle}
        email={events[1].email}
      />
      <EventCard
        imageURL={events[2].imageURL}
        name={events[2].name}
        img={events[2].imgURL}
        userName={events[2].userName}
        subtitle={events[2].subtitle}
        email={events[2].email}
      />
    </div>
  );
}

export default App;

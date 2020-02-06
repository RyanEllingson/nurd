import React from "react";
import EventCard from "./EventCard";
import events from "../events";
import SearchPage from "./SearchPage";
import SearchContainer from "./SearchContainer";
import "./styles.css";
import routes from "../routes/apiRoutes";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const games = routes.getBoardGame("catan");
  return (
    <div>
      <SearchPage />
      <SearchContainer />
      <SearchContainer />
      <SearchContainer />
      <SearchContainer />
      <SearchContainer />
      <SearchContainer />
    </div>
  );
}

export default App;

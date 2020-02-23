import React, { useState } from "react";
import Route from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App"; 


import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import CharacterCard from "./components/CharacterCard";
import CharacterList from "./components/CharacterList";
import EpisodeCard from "./components/EpisodeCard";
import EpisodeList from "./components/EpisodeList";
import LocationCard from "./components/LocationCard";
import LocationList from "./components/LocationList";
import Welcome from "./components/WelcomePage";

export default function Apple() {
  const [characters, setCharacters] = useState({});
  const [locations, setLocations] = useState({});
  const [episodes, setEpisodes] = useState({});

  return (
    <main>
      <Header />
      <TabNav />
      {/* // Start Routing */}
      <Route exact path="/" component={Welcome} />
      {/* // Characters */}
      <Route
        exact
        path="/character-list"
        render={props => <CharacterList {...props} characters={characters} />}
      />

      <Route
        exact
        path="/location-list"
        render={props => <LocationList {...props} location={locations} />}
      />
      <Route
        exact
        path="/location-list/:id"
        render={props => <LocationCard {...props} location={locations} />}
      />
   
      <Route
        exact
        path="/episode-list"
        render={props => <EpisodeList {...props} episodes={episodes} />}
      />
      <Route
        exact
        path="/episode-list/:id"
        render={props => <EpisodeCard {...props} episodes={episodes} />}
      />
    </main>
  );
}

ReactDOM.render(
  <Router>
</Router>
);



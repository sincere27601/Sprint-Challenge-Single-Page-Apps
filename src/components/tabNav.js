import React from "react";
import { NavLink } from "react-router-dom";

// Local
import Welcome from "./WelcomePage";
import LocationList from "./LocationList";
import CharacterList from "./CharacterList";
import EpisodeList from "./EpisodeList";
import SearchForm from "./SearchForm";
import "../scss/TabNav.scss";

// Material UI
import Icon from "@material-ui/core/Icon";

export default function TabNav() {
};

return (
    <div className="container">
        <nav className="TabNav">
            <NavLink exact className="TabLink" to="/">
                <Icon className="TabIcon">home</Icon> Home Page
        </NavLink>
            <NavLink exact className="TabLink" to="/character-list">
                <Icon className="TabIcon">group</Icon>
                Characters
        </NavLink>
            <NavLink exact className="TabLink" to="/location-list">
                <Icon className="TabIcon">map</Icon>
                Locations
        </NavLink>
            <NavLink exact className="TabLink" to="/episode-list">
                <Icon className="TabIcon">movie</Icon>
                Episodes
        </NavLink>
        </nav>
        <div className="SearchArea">
            <SearchForm />
        </div>
    </div>
);
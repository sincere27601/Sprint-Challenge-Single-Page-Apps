import React, { useState } from "react";
import Axios from "axios";
import CharacterCard from "./CharacterCard";
import EpisodeCard from "./EpisodeCard";
import LocationCard from "./LocationCard";

// Material UI
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles({
  list: {
    width: "auto",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "center"
  },
  form: {
    width: "500px"
  }
});

export default function SearchForm(props) {
  // TODO: Add stateful logic for query/form data
  const classes = useStyles();

  const [drawer, setDrawer] = useState({ right: false });
  const [category, setCategory] = useState("character");
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState([]);

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawer({ ...drawer, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={() => {
        toggleDrawer(side, false);
      }}
      onKeyDown={() => {
        toggleDrawer(side, false);
      }}
    >
      <div className="response" styles={classes.list}>
        {/* TODO: This works once, but if you change the category to search again, it will fail. Must find a better thing to conditionally tie this JSX to. */}
        {category == "character" &&
          response.map((response, index) => {
            return (
              <CharacterCard key={index} {...props} character={response} />
            );
          })}
        {category == "location" &&
          response.map((response, index) => {
            return <LocationCard key={index} {...props} location={response} />;
          })}
        {category == "episode" &&
          response.map((response, index) => {
            return <EpisodeCard key={index} {...props} episode={response} />;
          })}
      </div>
    </div>
  );

  const queryAPI = e => {
    e.preventDefault();
    Axios.get(`https://rickandmortyapi.com/api/${category}/?name=${query}`)
      .then(res => {
        setResponse(res.data.results);
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <section className="search-form">
        <form onSubmit={e => queryAPI(e)}>
          <Select
            className="category"
            name="category"
            placeholder="Select Category"
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            <MenuItem value="character">Character</MenuItem>
            <MenuItem value="location">Location</MenuItem>
            <MenuItem values="episode">Episode</MenuItem>
          </Select>
          <TextField
            className="query"
            onChange={e => setQuery(e.target.value)}
            placeholder="name"
            value={query}
            name="query"
          />
          <Button
            type="submit"
            className="informationFAB"
            onClick={toggleDrawer("right", true)}
          >
            <Icon>search</Icon>
          </Button>
        </form>
      </section>
      <Drawer
        anchor="right"
        open={drawer.right}
        onClose={toggleDrawer("right", false)}
      >
        {sideList("right")}
      </Drawer>
    </>
  );
}







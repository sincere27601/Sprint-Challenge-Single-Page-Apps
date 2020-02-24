import React, { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import Axios from "axios";
import Icon from "@material-ui/core/Icon";

import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Setup dynamic refreshing later using page 2 nav (See Starwars Project)
    setLoading(true);
    Axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then(res => {
        setCharacters(res.data.results);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, [page]);

  //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

  const pageUp = () => {
    return page < 25 ? setPage(page + 1) : null;
  };
  const pageDown = () => {
    return page > 1 ? setPage(page - 1) : null;
  };

  return (
    <section className="character-list grid-view">
      <button className="ButtonDown" onClick={pageDown}>
        <Icon>keyboard_arrow_left</Icon>
      </button>
      <div className="CardHolder">
        {characters.map((character, index) => {
          return <CharacterCard key={index} character={character} />;
        })}
      </div>
      <button className="ButtonUp" onClick={pageUp}>
        <Icon>keyboard_arrow_right</Icon>
      </button>
    </section>
  );
}
import React, { useEffect, useState, page, pageDown, pageUp, setLoading, setCharacters, setPage, characters } from "react";
import { Link, Route } from "react-router-dom";
import Axios from "axios";
import Icon from "@material-ui/core/Icon";
import CharacterCard from "./CharacterCard";


  export default function CharacterList() {
  
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  
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

useEffect(() => {

  Axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
  .then(res => {
    setCharacters(res.data.results);
    setLoading(false);
  })
  .catch(err => {
    console.log(err);
    setLoading(false);
  })
 
}, [page]);




    <button className="ButtonUp" onClick={pageUp}>
      <Icon>keyboard_arrow_right</Icon>
    </button>
  </section>
);
  }

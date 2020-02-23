import React, { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import Axios from "axios";
import Icon from "@material-ui/core/Icon";

import EpisodeCard from "./EpisodeCard";

export default function EpisodesList() {
    // TODO: Add useState to track data from useEffect
    const [episodes, setEpisodes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(() => {
        // TODO: Add AJAX/API Request here - must run in `useEffect`
        // Setup dynamic refreshing later using page 2 nav (See Starwars Project)
        setLoading(true);
        Axios.get(`https://rickandmortyapi.com/api/episode/?page=${page}`)
            .then(res => {
                setEpisodes(res.data.results);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            });
    }, [page]);
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    const pageUp = () => {
        return page < 2 ? setPage(page + 1) : null;
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
                {episodes.map((episode, index) => {
                    return <EpisodeCard key={index} episode={episode} />;
                })}
            </div>
            <button className="ButtonUp" onClick={pageUp}>
                <Icon>keyboard_arrow_right</Icon>
            </button>
        </section>
    );
}
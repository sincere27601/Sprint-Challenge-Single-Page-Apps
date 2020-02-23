import React, { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import Axios from "axios";
import Icon from "@material-ui/core/Icon";

import LocationCard from "./LocationCard";

export default function LocationList() {
    const [locations, setLocations] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(() => {
        // Setup dynamic refreshing later using page 2 nav (See Starwars Project)
        setLoading(true);
        Axios.get(`https://rickandmortyapi.com/api/location/?page=${page}`)
            .then(res => {
                setLocations(res.data.results);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            });
    }, [page]);

    const pageUp = () => {
        return page < 4 ? setPage(page + 1) : null;
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
                {locations.map((location, index) => {
                    return <LocationCard key={index} location={location} />;
                })}
            </div>
            <button className="ButtonUp" onClick={pageUp}>
                <Icon>keyboard_arrow_right</Icon>
            </button>
        </section>
    );
}

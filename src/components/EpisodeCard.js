import React from "react";
import styled from "styled-components";

//STYLE
const WrapperDiv = styled.div`
  width: 400px;
  margin-bottom: 50px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: red;
  text-align: center;
`;

export default function EpisodeCard(props) {
    // image={image}
    const episodeData = props.episodeData;
    return (
        <>
            {episodeData.map(episode => {
                return (
                    <WrapperDiv className="episodeWrapper">
                        <h1>{episode.name}</h1>
                        <h2>{episode.air_date}</h2>
                        <h3>{episode.episode}</h3>
                    </WrapperDiv>
                );
            })}
        </>
    );
}
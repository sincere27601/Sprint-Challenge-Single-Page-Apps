import React from "react";


const style = {
  layout: {
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    borderRadius: "50%"
  }
};


export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <section className="welcome-page" style={style.layout}></section>
  
          <header style={style.layout}>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
          style={style.image}
        />
      </header>
      </section>
    

  )};

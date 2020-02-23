import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import AppRouter from "./components/AppRouter.js";
import SearchForm from "./components/SearchForm.js"
import React from "react";


export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <AppRouter />
      <SearchForm />
      {/* <CharacterList/> */}
      {/* <LocationsList/> */}
      {/* <EpisodesList/> */}
    </main>
  );
}
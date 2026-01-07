import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import MovieCard from "./components/MovieCard";
import axios from "axios";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout.jsx";


function App() {
  const [searchedMovieList, setSearchedMovieList] = useState ([]);


  return (
    <div className="App">

      <Header
        searchedMovieList={searchedMovieList}
        setSearchedMovieList={setSearchedMovieList}
      />

      <main className="main-content">
        <div className="cards-container">
          {searchedMovieList.map((movie) => (

            <MovieCard
              key={movie.id}
              movie={movie} />
          ))}

        </div>
      </main>

    </div>
  )
}

export default App

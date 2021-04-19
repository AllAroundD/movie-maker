import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Movies from "./containers/Movies";
import AddMovie from "./components/AddMovie";

const filterMovies = (movies, query) => {
  if (!query) {
    return movies;
  }
  return movies.filter((movie) => {
    const movieName = movie.name.toLowerCase();
    console.log("movieName", movieName);
    return movieName.includes(query.toLowerCase());
  });
};

const App = () => {
  const [movies, setMovies] = useState([]);
  const { search } = window.location;
  const query = new URLSearchParams(search).get("search");
  const [searchQuery, setSearchQuery] = useState(query || "");
  const filteredMovies = filterMovies(movies, searchQuery);

  console.log("search", search);
  console.log("query", query);
  console.log("searchQuery", searchQuery);
  console.log("filteredMovies", filteredMovies);
  return (
    <div>
      <Header />
      <Movies movies={filteredMovies} />
      <AddMovie />
      <Footer />
    </div>
  );
};

export default App;

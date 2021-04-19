import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { ADD_MOVIE, ALL_MOVIES } from "../queries/queries";

const AddMovie = () => {
  const [movie, setMovie] = useState({
    name: "",
    genre: "",
    year: "",
  });
  const [
    addMovie,
    { loading: mutationLoading, error: mutationError },
  ] = useMutation(ADD_MOVIE);

  const handleChange = (e) =>
    setMovie({ ...movie, [e.target.name]: e.target.value });

  const submitMovie = (e) => {
    e.preventDefault();
    addMovie({
      variables: { name: movie.name, genre: movie.genre, year: movie.year },
      refetchQueries: [{ query: ALL_MOVIES }],
    });
    // console.log("data", data);
  };

  return (
    <div className="addMovie" id="form">
      <form onSubmit={submitMovie}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="genre">Genre</label>
        <input
          type="text"
          name="genre"
          id="genre"
          required
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="year">Year</label>
        <input
          type="text"
          name="year"
          id="year"
          placeholder="(optional)"
          onChange={(e) => handleChange(e)}
        />
        <button type="submit">Add Movie</button>
      </form>
      {mutationLoading && <p>Loading...</p>}
      {mutationError && <p>Error: {mutationError} Please try again</p>}
    </div>
  );
};

export default AddMovie;

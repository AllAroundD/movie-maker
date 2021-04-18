import React from "react";

const AddMovie = () => {
  return (
    <div className="addMovie">
      <form onSubmit={() => alert("Movie added!")}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" required />
        <label htmlFor="genre">Genre</label>
        <input type="text" name="genre" id="genre" required />
        <label htmlFor="year">Year</label>
        <input type="text" name="year" id="year" placeholder="(optional)" />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default AddMovie;

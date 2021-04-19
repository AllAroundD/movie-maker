import React from "react";

const Movie = ({ name, genre, year, image }) => {
  return (
    <div className="card">
      <div className="container">
        <img
          src="https://www.the-rampage.org/wp-content/uploads/2019/06/268x0w.png"
          alt="movie"
          width="100%"
          height="230px"
        />
        <h3>{name}</h3>
        <h4>
          {genre} - {year}
        </h4>
      </div>
    </div>
  );
};

export default Movie;

import React, { useState } from "react";
import Movie from "../components/Movie";
import { gql, useQuery } from "@apollo/client";
import { ALL_MOVIES } from "../queries/queries";

const Movies = ({ movies }) => {
  // const [movies, setMovies] = useState([
  // {
  //   id: 1,
  //   name: "John Wick Parabellum",
  //   genre: "Action",
  //   year: 2019,
  //   image:
  //     "https://www.the-rampage.org/wp-content/uploads/2019/06/268x0w.png",
  // },
  // {
  //   id: 2,
  //   name: "John Wick Parabellum",
  //   genre: "Action",
  //   year: 2019,
  //   image:
  //     "https://www.the-rampage.org/wp-content/uploads/2019/06/268x0w.png",
  // },
  // {
  //   id: 3,
  //   name: "John Wick Parabellum",
  //   genre: "Action",
  //   year: 2019,
  //   image:
  //     "https://www.the-rampage.org/wp-content/uploads/2019/06/268x0w.png",
  // },
  // {
  //   id: 4,
  //   name: "John Wick Parabellum",
  //   genre: "Action",
  //   year: 2019,
  //   image:
  //     "https://www.the-rampage.org/wp-content/uploads/2019/06/268x0w.png",
  // },
  // {
  //   id: 5,
  //   name: "John Wick Parabellum",
  //   genre: "Action",
  //   year: 2019,
  //   image:
  //     "https://www.the-rampage.org/wp-content/uploads/2019/06/268x0w.png",
  // },
  // {
  //   id: 6,
  //   name: "John Wick Parabellum",
  //   genre: "Action",
  //   year: 2019,
  //   image:
  //     "https://www.the-rampage.org/wp-content/uploads/2019/06/268x0w.png",
  // },
  // {
  //   id: 7,
  //   name: "John Wick Parabellum",
  //   genre: "Action",
  //   year: 2019,
  //   image:
  //     "https://www.the-rampage.org/wp-content/uploads/2019/06/268x0w.png",
  // },
  // {
  //   id: 8,
  //   name: "John Wick Parabellum",
  //   genre: "Action",
  //   year: 2019,
  //   image:
  //     "https://www.the-rampage.org/wp-content/uploads/2019/06/268x0w.png",
  // },
  // ]);
  const { loading, error, data } = useQuery(ALL_MOVIES);

  // console.log(data);
  if (error) return <h2 className="message">{JSON.stringify(error)}</h2>;
  if (loading) return <h2 className="message">Loading ...</h2>;
  if (data.movies.length === 0)
    return <h2 className="message">Please add movies of your choice.</h2>;
  // setMovies(data.movies);
  return (
    <div className="movies">
      {data.movies.map((movie, i) => {
        return (
          <Movie
            key={i}
            name={movie.name}
            genre={movie.genre}
            year={movie.year}
          />
        );
      })}
    </div>
  );
};

export default Movies;

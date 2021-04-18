import React, { useState } from "react";
import Movie from "../components/Movie";
import { gql, useQuery } from "@apollo/client";

const allMovies = gql`
  {
    movies {
      name
      genre
      year
    }
  }
`;

const Movies = (props) => {
  const [movies, setMovies] = useState([
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
  ]);
  const { loading, error, data } = useQuery(allMovies);

  console.log(data);
  if (error) return <p>{JSON.stringify(error)}</p>;
  if (loading) return <p>Loading ...</p>;
  // setMovies(data.movies);
  return (
    <div className="movies">
      {data.movies.map((movie) => {
        return (
          <Movie
            key={movie.id}
            name={movie.name}
            genre={movie.genre}
            year={movie.year}
            image={movie.image}
          />
        );
      })}
    </div>
  );
};

export default Movies;

import { gql } from "@apollo/client";

export const ALL_MOVIES = gql`
  {
    movies {
      name
      genre
      year
    }
  }
`;

export const ADD_MOVIE = gql`
  mutation AddMovie($name: String!, $genre: String!, $year: String!) {
    addMovie(name: $name, genre: $genre, year: $year) {
      name
      genre
      year
    }
  }
`;

import React from "react";
import movies from "../data";
import Movie from "./Movie";
import ReviewList from "./ReviewList";

function MovieList({movieData, setMovieData}) {
  return (
    <div className="movies_container">
      {movies &&
        movies.map((movie) => <Movie movieData={movieData} setMovieData={setMovieData} movie={movie} key={movie.title} />)}
    </div>
  );
}

export default MovieList;

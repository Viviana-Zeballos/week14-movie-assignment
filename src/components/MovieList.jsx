import React from "react";
import Movie from "./Movie";

function MovieList({ movieData, setMovieData }) {
  return (
    <div className="movies_container">
      {movieData.movies &&
      // Maps through each movie in the movies array
        movieData.movies.map((movie) => (
          <Movie
            key={movie.id || movie.title}
            movie={movie}
            movieData={movieData}
            setMovieData={setMovieData}
          />
        ))}
    </div>
  );
}

export default MovieList;

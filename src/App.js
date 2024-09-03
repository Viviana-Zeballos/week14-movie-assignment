import React, { useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import movies from './data';

function App() {
  // Initializes reviews state based on movie IDs
  const initialReviews = movies.reduce((acc, movie) => {
    acc[movie.id] = movie.reviews || [];
    return acc;
  }, {});

  const [movieData, setMovieData] = useState({
    movies: movies,
    reviews: initialReviews,
  });

  return (
    <div className="App">
      <MovieList movieData={movieData} setMovieData={setMovieData} />
    </div>
  );
}

export default App;

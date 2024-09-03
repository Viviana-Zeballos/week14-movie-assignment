import React from 'react';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

function Movie({ movie, movieData, setMovieData }) {
  // Here I destructured the movie details from the 'movie' prop
  const { id, title, img_url, rating, synopsis } = movie;

  // Filters reviews specific to this movie based on its id
  const filteredReviews = movieData.reviews[id] || [];

  return (
    <div className='movie-card'>
      <div className='movie-photo'>
        <img src={img_url} alt={title} height={250} width={200} />
        <h2>{title}</h2>
        <p>{rating}</p>
      </div>
      <div>
        <p>{synopsis}</p>
        {/* Includes the ReviewForm component to add new reviews */}
        <ReviewForm setMovieData={setMovieData} movieId={id} />
        {/* Includes the ReviewList component to display existing reviews */}
        <ReviewList reviews={filteredReviews} />
      </div>
    </div>
  );
}

export default Movie;

import React from 'react';
import ReviewForm from './ReviewForm';

function Review({ review, setMovieData }) {
  return (
    <div>
      <h4>{review.user}</h4>
      <p>{review.text}</p>
      <ReviewForm setMovieData={setMovieData} />
      <p>Form should appear below this text</p> {/* Test message */}
    </div>
  );
}

export default Review;
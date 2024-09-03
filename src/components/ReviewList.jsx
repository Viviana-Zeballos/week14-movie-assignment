import React from 'react';

function ReviewList({ reviews }) {
  return (
    <div>
      <h3>Reviews</h3>
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        reviews.map((review, index) => (
          <div className='reviews-list' key={index}>
            <h4>{review.user}</h4>
            <p>{review.review}</p>
            <p>Rating: {review.stars}</p> 
          </div>
        ))
      )}
    </div>
  );
}

export default ReviewList;
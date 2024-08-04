import React from 'react'
import Review from './Review'

function ReviewList({reviews, movieData, setMovieData}) {
  console.log(movieData);
  console.log(reviews);
  return (
    <div>
      <h3>Reviews</h3>
      {
        reviews.map(review=>(<Review key={review.text} review={review}/>))
      }
    </div>
  )
}

export default ReviewList
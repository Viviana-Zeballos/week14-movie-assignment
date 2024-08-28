import React from 'react'
import Review from './Review'

function ReviewList({ movieData, setMovieData}) {
  console.log(movieData);
  
  return (
    <div>
      <h3>Reviews</h3>
      {movieData && movieData.reviews.map(review=>(<Review key={review.text} review={review}/>))
      }
    </div>
  )
}

export default ReviewList
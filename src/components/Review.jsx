import React from 'react'
import ReviewForm from './ReviewForm'

function Review({reviews, setMovieData}) {
  return (
    <div>
      <ReviewForm setMovieData={setMovieData} />
    </div>
  )
}

export default Review
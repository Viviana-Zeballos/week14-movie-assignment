import React from 'react'
import ReviewForm from './ReviewForm'

function Review({review}) {
  return (
    <div>
      <h5>{review.user}</h5>
      <p>{review.text}</p>
      <ReviewForm />
    </div>
  )
}

export default Review
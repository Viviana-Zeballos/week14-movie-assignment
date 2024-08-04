import React from 'react'
import ReviewForm from './ReviewForm'

function Review({review}) {
  return (
    <div>
      <p>{review.text}</p>
      <h5>{review.user}</h5>
      <ReviewForm />
    </div>
  )
}

export default Review
import React, { useState } from "react";
import Stars from "./Stars";

function ReviewForm({ setMovieData, movieId }) {
  const [user, setUser] = useState("");
  const [review, setReview] = useState("");
  const [stars, setStars] = useState("");

  // Here we handle form submission
  const onSubmit = (event) => {
    event.preventDefault();

    // Creates a new review object
    const newReview = {
      user,
      review,
      stars,
    };

       // Updates the movieData state with the new review
    setMovieData((prevData) => {
      // Adds the new review to the existing reviews for this movie
      const newReviews = {
        ...prevData.reviews,
        [movieId]: [...(prevData.reviews[movieId] || []), newReview],
      };

      // Returns the updated state with new reviews
      return {
        ...prevData,
        reviews: newReviews,
      };
    });

    setUser("");
    setReview("");
    setStars("");
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="user">User</label><br />
      <input
        id="user"
        type="text"
        placeholder="Enter name"
        value={user}
        onChange={(e) => setUser(e.target.value)} // Updates the state on input change
      /><br /><br />
      <label htmlFor="textarea">Review</label><br />
      <textarea
        id="textarea"
        placeholder="Write your review here"
        rows="10"
        cols="30"
        value={review}
        onChange={(e) => setReview(e.target.value)}
      /><br />
      {/* Stars component for rating selection */}
      <Stars rating={stars} onRatingChange={setStars} /><br />
      <input id="button" type="submit" value="Submit" /> <br /> <br />
    </form> 
  );
}

export default ReviewForm;

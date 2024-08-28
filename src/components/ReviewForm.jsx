import React, { useState } from "react";
import Stars from "./Stars";

function ReviewForm( {setMovieData} ) {
  const [user, setUser] = useState("");
  const [review, setReview] = useState("");
  const [stars, setStars] = useState("");
  const [userData, setuserData] = useState([]);

  const onSubmit = (event) => {
    event.preventDefault()

    let newReview = {
      user: user,
      review: review,
      stars: stars,
    }
    // userData.push(newReview)

    console.log(userData);
    
    const userData1 = [...userData, newReview]
    console.log(userData1);
    setuserData(userData1);
    setMovieData(...[userData1]);
  }
  return (
    <form onSubmit={onSubmit}>
 <label htmlFor="user">User</label> <br />
      <input
        id="user"
        type="text"
        placeholder="Enter name"
        onChange={(e) => setUser(e.target.value)}
      /> <br /> <br />
      <label htmlFor="textarea">Review</label> <br />
      <textarea
        id="textarea"
        placeholder="Write your review here"
        rows="10"
        cols="30"
        onChange={(e) => setReview(e.target.value)}
      /> <br />
      <Stars rating={stars} onRatingChange={setStars} /> <br />
      <input id="button" type="submit" value="Submit" />
    </form>
  );
}

export default ReviewForm;
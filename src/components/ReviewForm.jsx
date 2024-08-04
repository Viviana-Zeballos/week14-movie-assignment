import React, { useState } from "react";
import Stars from "./Stars";

function ReviewForm() {
  const [user, setUser] = useState("");
  const [review, setReview] = useState("");
  const [stars, setStars] =useState("");

  const userData = [];
  const onSubmit = (event) => {
    event.preventDefault()

    let newReview = {
      user: user,
      review: review,
      stars: stars,
    }
    userData.push(newReview)
    console.log(userData);
  }
  return (
    <form onSubmit={onSubmit}>
      <label id="label" >User</label> <br />
      <input id="user" type="text" placeholder="Enter name" onChange={(e) => setUser(e.target.value)}/> <br /> <br />
      <label id="label">Review</label> <br />
      <textarea type="text" placeholder="Write your review here" rows="10" columns="10" id="textarea" onChange={(e) => setReview(e.target.value)}/> <br />
      <Stars /> <br />
      <input id="button" type="submit" value="Submit" />
    </form>
  );
}

export default ReviewForm;
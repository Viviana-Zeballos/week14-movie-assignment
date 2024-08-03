import React, { useState } from "react";

function ReviewForm() {
  const [user, setUser] = useState("");
  const [review, setReview] = useState("");

  const userData = [];
  const onSubmit = (event) => {
    event.preventDefault()

    let newReview = {
      user: user,
      review: review
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
      <input id="button" type="submit" value="Submit" />
    </form>
  );
}

export default ReviewForm;
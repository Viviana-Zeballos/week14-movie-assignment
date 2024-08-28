import React from 'react';
import '../App.css';

function Stars({ rating, onRatingChange }) {
  function showStars() {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <img
          key={i}
          src="./star.png"
          alt={`Star ${i}`}
          className={rating >= i ? 'yellow' : ''}
          onClick={() => onRatingChange(i)}
          style={{
            width: '24px',
            height: '24px',
            cursor: 'pointer',
            filter: rating >= i ? 'brightness(1.5)' : 'none', // Inline style for testing
          }}
        />
      );
    }
    return stars;
  }

  return <div>{showStars()}</div>;
}

export default Stars;
import { useState } from 'react'

function Stars() {
  const [count, setCount] = useState (0)

  function showStars(){
    const stars = [];
    for (let i = 1; i <= 5; i++ ) {
      if (count >= i) {
        stars.push(<img src="./star.png" alt="" className='yellow' onClick={()=>setCount(i)}/>)
      } else {
        stars.push(<img src="./star.png" alt="" onClick={()=>setCount(i)}/>)
      }
    }
    return stars;
  }
  const ratingChanged = (newRating) => {
    setCount(newRating)
    console.log(newRating);
  };
  return (
    <div>
      <span className='star'>
        {showStars()}
      </span>
    </div>
  )
}

export default Stars
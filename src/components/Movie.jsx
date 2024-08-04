import React from 'react';
import Stars from './Stars';
import ReviewList from './ReviewList';


function Movie({ movie, movieData, setMovieData }) {

    let { title, img_url, rating, synopsis, reviews } = movie


    console.log(img_url)

    return (
        <div className='movie-card'>
            <div className='movie-photo'>
                <img src={img_url} alt={title} height={250} width={200}></img>
                <h2>{title}</h2>
                <p>{rating}</p>
            </div>
            <div>
                <p>{synopsis}</p>
              <p><ReviewList movieData={movieData} setMovieData={setMovieData} reviews={reviews}/></p>
            </div>
            <div> 
            </div>
        </div>
    )
}
export default Movie; 
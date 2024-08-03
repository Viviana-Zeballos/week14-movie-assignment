import { useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import data from './data';


function App() {
console.log(data);
const [movieData, setMovieData] = useState(data)
  return (
    <div className="App">
      <MovieList movieData={movieData} setMovieData={setMovieData}/>
    
    </div>
  );
}

export default App;
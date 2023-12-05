import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get('/api/movies')
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <h1 className='title'>Frontend + Backend = FullStack</h1>
      <p>Movies : {movies.length}</p>

      {movies.map((movie) => (
        <div key={movie.id}>
          <h3>{movie.name}</h3>
          <p className='genre'>{movie.genre}</p>
        </div>
      ))}
    </>
  );
}

export default App;

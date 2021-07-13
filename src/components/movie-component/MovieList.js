import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../redux/movie/movie.actions";
import {useHistory} from 'react-router-dom';


const MovieList = () => {
  const dispatch = useDispatch();

  let history = useHistory();

  useEffect(() => {
    dispatch(getMovies());
    // eslint-disable-next-line
  }, []);

  const movies = useSelector((state) => state.movieReducer.movies);
  console.log(movies);
  movies.map( (movie) => {
    console.log(movie.image);
  })
  console.log(movies.image);

  return (
    <div>
      <header>
      <button onClick={()=> {history.push('movies/post')}}>Post movie</button>
      </header>
      {movies.map( (movie) => (
        <section key = {movie.id}>
          <h3>{movie.title}</h3>
          <img src={movie.image} alt="movie"/>
          <p>{movie.description}</p>
        </section>
      ))}
    </div>
    
  );
};

export default MovieList;

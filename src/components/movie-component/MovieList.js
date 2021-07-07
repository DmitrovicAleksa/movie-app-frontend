import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../redux/movie/movie.actions";

const MovieList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
    // eslint-disable-next-line
  }, []);

  const movies = useSelector((state) => state.movieReducer.movies);

  return (
    <article>
       
    </article>
  );
};

export default MovieList;

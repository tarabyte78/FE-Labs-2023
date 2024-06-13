import React from 'react';
import MovieItem from './MovieItem';

function MovieList({ movies, deleteMovie, selectMovie }) {
  return (
    <ul>
      {movies.map((movie) => (
        <MovieItem 
          key={movie.id} 
          movie={movie} 
          deleteMovie={deleteMovie} 
          selectMovie={selectMovie}
        />
      ))}
    </ul>
  );
}

export default MovieList;

import React from 'react';

function MovieItem({ movie, deleteMovie, selectMovie }) {
  return (
    <li>
      <h2>{movie.title}</h2>
      <p>Genre: {movie.genre}</p>
      <p>Director: {movie.director}</p>
      <p>Release Year: {movie.releaseYear}</p>
      <p>Rating: {movie.rating}</p>
      <p>Popular: {movie.isPopular ? 'Yes' : 'No'}</p>
      <button onClick={() => selectMovie(movie)}>Edit</button>
      <button onClick={() => deleteMovie(movie.id)}>Delete</button>
    </li>
  );
}

export default MovieItem;

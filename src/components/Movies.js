import React from 'react';
import { movies } from '../data';

const NewMovie = ({title, time, genres, idx}) => {
  return (
    <div key={idx}>
      <h2>Title: {title}</h2>
      <p>Time: {time} minutes</p>
      <p>Genres:</p>
      <ul>{genres.map(g => <li>{g}</li>)}</ul>
    </div>
  )
}

const Movies = () => {
  let movieData = movies
  return (
    <div>
      <h1>Movies Page</h1>
      { movieData.map(NewMovie) }
    </div>
  );
};

export default Movies;

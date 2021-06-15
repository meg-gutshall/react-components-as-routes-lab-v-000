import React from 'react';
import { directors } from '../data';

const NewDirector = ({name, movies, idx}) => {
  return (
    <div key={idx}>
      <h2>Name: {name}</h2>
      <p>Movies:</p>
      <ul>{movies.map(m => <li>{m}</li>)}</ul>
    </div>
  )
}

const Directors = () => {
  let directorData = directors
  return (
    <div>
      <h1>Directors Page</h1>
      { directorData.map(NewDirector) }
    </div>
  );
}

export default Directors

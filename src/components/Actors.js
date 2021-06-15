import React from 'react';
import { actors } from '../data';

const NewActor = ({name, movies, idx}) => {
  return (
    <div key={idx}>
      <h2>Name: {name}</h2>
      <p>Movies:</p>
      <ul>{movies.map(m => <li>{m}</li>)}</ul>
    </div>
  )
}

const Actors = () => {
  let actorData = actors
  return (
    <div>
      <h1>Actors Page</h1>
      { actorData.map(NewActor) }
    </div>
  );
}

export default Actors

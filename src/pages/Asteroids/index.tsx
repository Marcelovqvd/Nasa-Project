import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

interface AsteroidsList {
  name: string;
  id: string;
  links: {
    self: string;
  };
}

const AsteroidsList: React.FC = () => {
  const [asteroidsList, setAsteroidsList] = useState<AsteroidsList[]>([]);

  useEffect(() => {
    api.get('/neo/rest/v1/neo/browse?api_key=ZpR70Yw9ZalOz6lHZEELjIhd4nFfv2q2g77IudBl').then(response => {
      setAsteroidsList(response.data.near_earth_objects);
    })
  }, [])

  return (
    <>
      <h1>Asteroids</h1>
      <ul>
        {console.log(asteroidsList)}
        {asteroidsList.map(asteroid => (
          <li key={asteroid.name}>Name: {asteroid.name}
            <Link to={`${asteroid.id}`}>link</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default AsteroidsList;

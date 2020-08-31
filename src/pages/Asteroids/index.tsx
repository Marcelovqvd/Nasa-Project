import React, { useState, useEffect } from 'react';

import { Container, Title, List, SeeMore } from './style';

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
    api
      .get(
        '/neo/rest/v1/neo/browse?api_key=ZpR70Yw9ZalOz6lHZEELjIhd4nFfv2q2g77IudBl',
      )
      .then(response => {
        setAsteroidsList(response.data.near_earth_objects);
      });
  }, []);
  return (
    <Container>
      <Title>Asteroids</Title>
      <List>
        {asteroidsList.map(asteroid => (
          <li key={asteroid.id}>
            {' '}
            <strong>Name: {asteroid.name}</strong>
            <SeeMore to={`asteroid/${asteroid.id}`}>See more</SeeMore>
          </li>
        ))}
      </List>
    </Container>
  );
};

export default AsteroidsList;

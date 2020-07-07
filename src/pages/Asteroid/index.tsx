import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { Container, Title, List, Error } from './style';

interface AsteroidData {
  asteroidData: {};
  id: string;
  name: string;
  absolute_magnitude_h: string;
  estimated_diameter: {
    kilometers: {
      estimated_diameter_max: number;
      estimated_diameter_min: number;
    };
  };
  is_potentially_hazardous_asteroid: boolean;
  is_sentry_object: boolean;
  nasa_jpl_url: string;
  orbital_data: {
    first_observation_date: string;
  };
}

const AsteroidData: React.FC = () => {
  const [asteroidData, setAsteroidData] = useState<AsteroidData | null>(null);
  let asteroidId = window.location.pathname;
  let asteroidID = asteroidId.slice(10, 17);

  useEffect(() => {
    axios
      .get(
        `http://www.neowsapp.com/rest/v1/neo/${asteroidID}?api_key=ZpR70Yw9ZalOz6lHZEELjIhd4nFfv2q2g77IudBl`,
      )
      .then(response => {
        setAsteroidData(response.data);
      });
  }, []);

  return (
    <Container>
      <Title>Asteroid Data</Title>
      <List>
        <li>
          <li>
            <strong>Name: </strong>
            {asteroidData?.name ? asteroidData?.name : 'Asteroid Not Found'}
          </li>
          <li>
            <strong>Magnitude: </strong>
            {asteroidData?.absolute_magnitude_h}
          </li>
          <ul>
            <strong>Estimated diameters:</strong>
            <li>
              <span>max:</span>{' '}
              {
                asteroidData?.estimated_diameter.kilometers
                  .estimated_diameter_max
              }{' '}
              <span>Kilometers</span>
            </li>
            <li>
              <span>min:</span>{' '}
              {
                asteroidData?.estimated_diameter.kilometers
                  .estimated_diameter_min
              }{' '}
              <span>Kilometers</span>
            </li>
          </ul>
          <li>
            {asteroidData?.is_potentially_hazardous_asteroid ? (
              <strong>Potentially Hazardous</strong>
            ) : (
              <strong>Not potentailly Hazardous</strong>
            )}
          </li>
          <li>
            {asteroidData?.is_sentry_object ? (
              <strong>Is sentry Object</strong>
            ) : (
              <strong>Not sentry Object</strong>
            )}
          </li>
          <li>
            <strong>First observation date:</strong>{' '}
            {asteroidData?.orbital_data.first_observation_date}
          </li>
          <li>
            <a href={`${asteroidData?.nasa_jpl_url}`}>
              See on Nasa Solar System Dynamics
            </a>
          </li>
        </li>
      </List>
    </Container>
  );
};

export default AsteroidData;

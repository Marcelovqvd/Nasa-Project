import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
import { request } from 'https';

interface AsteroidData {
  name: string,
  absolute_magnitude_h: string,
  estimated_diameter: {
    kilometers: {
      estimated_diameter_max: number,
      estimated_diameter_min: number,
    }
  },
  is_potentially_hazardous_asteroid: boolean,
  is_sentry_object: boolean,
  nasa_jpl_url: string,
}

const AsteroidData: React.FC = () => {
  const [asteroidData, setAsteroidData] = useState<AsteroidData | null>(null);
  const id = window.location.pathname;
  console.log('->', id)

  useEffect(() => {
    axios.get(`http://www.neowsapp.com/rest/v1/neo${id}?api_key=ZpR70Yw9ZalOz6lHZEELjIhd4nFfv2q2g77IudBl`).then(response => {
      setAsteroidData(response.data);
    })
  }, [])

  return (
    <>
      {/* {console.log(asteroidData)} */}
      <h1>Asteroid Data</h1>
        <p>Name:{asteroidData?.name}</p>
        <p>Magnitude: {asteroidData?.absolute_magnitude_h}</p>
        <ul>
          <li>Estimated diameters:
            <p>max: {asteroidData?.estimated_diameter.kilometers.estimated_diameter_max} Kilometers</p>
            <p>min: {asteroidData?.estimated_diameter.kilometers.estimated_diameter_min} Kilometers</p>
            <p>
              {asteroidData?.is_potentially_hazardous_asteroid
              ?
              'Potentially Hazardous'
              :
              'Not potentailly Hazardous'
              }
            </p>
            <p>
              {
              asteroidData?.is_sentry_object
              ?
              'Is sentry Object'
              :
              'Not sentry Object'
              }
            </p>
            <p>
              <a href={`${asteroidData?.nasa_jpl_url}`}>
                See it on Nasa Solar System Dynamics
              </a>
            </p>

          </li>
        </ul>
    </>
  );
}

export default AsteroidData;

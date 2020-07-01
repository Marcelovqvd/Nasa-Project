import React, { useState, useEffect } from 'react';

import api from '../../services/api';

interface PictureOfDay {
  title: string,
  url: string,
  explanation: string,
  hdurl: string,
}

const PictureOfDay: React.FC = () => {
  const [pictureOfDay, setPictureOfDay] = useState<PictureOfDay | null>(null);

  useEffect(() => {
    api.get('/planetary/apod?api_key=ZpR70Yw9ZalOz6lHZEELjIhd4nFfv2q2g77IudBl').then(response => {
      setPictureOfDay(response.data);
    })
  }, [])

  return (
    <>
      <h1>Picture of the day</h1>
      {pictureOfDay && (
        <>
          <p>{pictureOfDay.title}</p>
          <a>Link: {pictureOfDay.url}</a>
          <p>Explanation: {pictureOfDay.explanation}</p>
          <img src="https://api.nasa.gov/planetary/apod/static/default_apod_image.jpg" alt="image"/>
        </>
      )}
    </>
  );
}

export default PictureOfDay;

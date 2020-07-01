import React, { useState, useEffect } from 'react';

import api from '../../services/api';

interface PictureOfDay {
  title: string,
  url: string,
  explanation: string,
  hdurl: string,
  frameborder: string,
  date: string,
  copyright: string,
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
          <p>{pictureOfDay.date}</p>
          <p>Explanation: {pictureOfDay.explanation}</p>
          <iframe
          width="960"
          height="540"
          src={pictureOfDay.url}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
          <p>&copy; {pictureOfDay.copyright}</p>
        </>
      )}
    </>
  );
}

export default PictureOfDay;

import React, { useState, useEffect } from 'react';

import { Container, Title, Explanation} from './style';

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
    <Container>
      <Title>Picture of the day</Title>
      {pictureOfDay && (
        <>
          <strong>{pictureOfDay.title}</strong>
          <span>{pictureOfDay.date}</span>
          <Explanation>{pictureOfDay.explanation}</Explanation>
          <img src={pictureOfDay.url} alt=""/>
          <a href={pictureOfDay.url}>Click for high definition</a>
          <p>&copy; {pictureOfDay.copyright}</p>
        </>
      )}
    </Container>
  );
}

export default PictureOfDay;

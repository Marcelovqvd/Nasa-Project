import React from 'react';
import { Title, Pod } from './style';

const Home: React.FC = () => {
  return (
    <>
      <Title>Welcome to the Nasa Project</Title>
      <Pod to="pictureOfDay">Picture of the Day</Pod>
    </>
  );
}

export default Home;

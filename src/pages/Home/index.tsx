import React from 'react';
import { Title, Pod } from './style';

const Home: React.FC = () => {
  return (
    <>
      <Title>Welcome to the Nasa Project</Title>
      <Pod to="/pictureofday">Picture of the Day</Pod>
      <Pod to="/asteroids">Asteroids - NeoWs</Pod>
      <Pod to="/asteroidslistbydate">Asteroids based on their closest approach date to Earth.</Pod>
    </>
  );
}

export default Home;

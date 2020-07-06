import React from 'react';
import { Container, Title, Pod } from './style';

const Home: React.FC = () => {
  return (
    <Container>
      <Title>Welcome to the Nasa Project</Title>
      <Pod to="/pictureofday">Picture of the Day</Pod>
      <Pod to="/asteroids">Asteroids</Pod>
    </Container>
  );
}

export default Home;

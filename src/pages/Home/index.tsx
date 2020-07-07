
import React from 'react';
import { Container, Title, PicOfDay } from './style';

const Home: React.FC = () => {
  return (
    <Container>
      <Title>Welcome to the Nasa Project</Title>
      <PicOfDay to="/pictureofday">See the picture of the Day</PicOfDay>
      <p>Are you interested in learning about asteroids?</p>
      <PicOfDay to="/asteroids">Click here for more</PicOfDay>
    </Container>
  );
}

export default Home;

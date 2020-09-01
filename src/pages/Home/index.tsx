import React from 'react';
import { Container, ContainerContent, Title, PODLink } from './style';

const Home: React.FC = () => {
  return (
    <Container>
      <Title>Welcome to the Nasa Project</Title>
      <ContainerContent>
        <strong>Go further and see our picture of the day</strong>
        <PODLink to="/pictureofday">Picture of the Day</PODLink>
      </ContainerContent>
      <ContainerContent>
        <strong>Are you interested in learning about asteroids?</strong>
        <PODLink to="/asteroids">Asteroids</PODLink>
      </ContainerContent>
    </Container>
  );
};

export default Home;

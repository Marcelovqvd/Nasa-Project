import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import { Title, Logo } from './style';

const Home: React.FC = () => {
  return (
    <>
      <Logo>
        <img src={logoImg} alt="nasa" />
      </Logo>
      <Title>Home</Title>
      <Link to="pictureOfDay">Picture of the Day</Link>
    </>
  );
}

export default Home;

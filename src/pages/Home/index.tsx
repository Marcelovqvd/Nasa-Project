import React from 'react';

import logoImg from '../../assets/logo.svg';
import { Title, Logo } from './style';

const Home: React.FC = () => {
  return (
    <>
      <Logo>
        <img src={logoImg} alt="nasa" />
      </Logo>
      <Title>Home</Title>
    </>
  );
}

export default Home;

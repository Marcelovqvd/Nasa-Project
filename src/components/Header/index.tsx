import React from 'react';
import logoImg from '../../assets/logo.svg';
import { Container, Logo } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Logo to="/">
        <img src={logoImg} alt="nasa" />
        <h1>Nasa Project</h1>
      </Logo>
    </Container>
  );
};

export default Header;

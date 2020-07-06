import React from 'react';
import logoImg from '../../assets/logo.svg';
import { Logo } from './style';

const Header: React.FC = () => {
  return (
      <Logo to="/">
          <img src={logoImg} alt="nasa" />
          <h1>Nasa Project</h1>
      </Logo>
  );
}

export default Header;

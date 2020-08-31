import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background-color: #000;
  width: 100vw;
  padding: 40px 20px;
`;

export const Logo = styled(Link)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  h1 {
    font-size: 38px;
    font-weight: bold;
    color: #ffffff;
  }
`;

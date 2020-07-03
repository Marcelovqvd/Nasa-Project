import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  margin-top: 80px;
`;

export const Pod = styled(Link)`
display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50 0;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  h1 {
    font-size: 38px;
    font-weight: bold;
    color: #3a3a3a;
  }
`;

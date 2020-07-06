import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  margin: 50px 0;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 15px;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 48px;
  color: #3a3a3a;
  margin: 80px 0 10px 0;
`;

export const Pod = styled(Link)`
  font-size: 34px;
  padding: 15px;
  border-radius: 10px;
  margin: 50px 0;
  background-color: #3a3a3a;
  color: #f5f5f5;
  text-decoration: none;
  transition: opacity 0.2s;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 15px;

  &:hover {
    opacity: 0.7;
  }

  h1 {
    font-size: 38px;
    font-weight: bold;
    color: #3a3a3a;
  }
`;

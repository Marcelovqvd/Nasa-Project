import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 32px;
    font-weight: bold;
    margin-top: 80px;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 48px;
  color: #3a3a3a;
  margin: 80px 0 10px 0;
`;

export const PicOfDay = styled(Link)`
  font-size: 34px;
  width: 500px;
  margin: 50px 0;
  padding: 5px;
  border-radius: 10px;
  background-color: #3a3a3a;
  color: #f5f5f5;
  text-align: center;
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

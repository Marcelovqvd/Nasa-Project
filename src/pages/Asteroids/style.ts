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

export const Error = styled.span`
  display: block;
  color: #3a3a3a;
`;

export const Title = styled.h1`
  text-transform: uppercase;
  text-align: center;
  font-size: 48px;
  color: #3a3a3a;
  margin: 80px 0 10px 0;
`;

export const List = styled.ul`
  list-style: none;
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 20px 0;
    border-radius: 10px;
    padding: 10px;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 15px;
    strong {
      font-size: 16px;
    }
  }
`;

export const SeeMore = styled(Link)`
  font-size: 16px;
  padding: 5px;
  border-radius: 10px;
  margin: 20px 0;
  background-color: #3a3a3a;
  color: #f5f5f5;
  text-decoration: none;
  transition: opacity 0.2s;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 15px;
  &:hover {
    opacity: 0.7;
  }
`;

import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 960px;
`;

export const ContainerContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  strong {
    margin: 10px 0 10px 0;
    max-width: 450px;
    color: #14213d;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
  }
`;

export const Title = styled.h1`
  margin: 120px 0 40px 0;
  text-align: center;
  color: #14213d;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;
`;

export const PODLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 200px;
  background: #fca311;
  height: 56px;
  border-radius: 10px;
  border: 0;
  color: #000000;
  width: 100%;
  font-weight: bold;
  margin-top: 16px;
  transition: background-color 0.2s;
  text-decoration: none;

  &:hover {
    opacity: 0.7;
  }
`;

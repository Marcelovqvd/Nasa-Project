import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  margin: 50px 0;

  a {
    font-size: 26px;
    padding: 15px;
    border-radius: 10px;
    margin: 50px 0 10px 0;
    background-color: #3a3a3a;
    color: #f5f5f5;
    text-decoration: none;
    transition: opacity 0.2s;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 15px;

    &:hover {
      opacity: 0.7;
    }
  }

  p {
    font-size: 20px;
    margin: 40px 0 20px 0;
  }

  strong {
    font-size: 24px;
    margin: 40px 0 20px 0;
  }

  span {
    font-size: 20px;
  }
`;

export const Title = styled.h1`
  text-transform: uppercase;
  text-align: center;
  font-size: 48px;
  color: #3a3a3a;
  margin: 80px 0 10px 0;
`;

export const Explanation = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  font-size: 20px;
  line-height: 32px;
  max-width: 960px;
`;


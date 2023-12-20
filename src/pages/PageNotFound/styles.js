import styled from 'styled-components';

export const Button = styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  text-transform: uppercase;
  text-decoration: none;
  background: #8e1f28;
  color: white;
  transition: 0.4s;
  border: 2px solid white;
  border-radius: 5px;
  transition: all 0.5s;
  &:hover {
    background: #8e1f28;
    color: white;
    cursor: pointer;
    box-shadow: 0 0 11px rgba(33,33,33,.2);
    transition: all 0.5s;
  }
`;

export const PageError = styled.div`
  text-align: center;
  margin-top: 200px;
`;

export const NumberHeading = styled.h2`
  font-size: 62px;
  color: #b4b2b2;
`;

export const PageNotFoundPara = styled.p`
  font-size: 22px;
  color: #b4b2b2;
`;

import React from 'react';
import styled from 'styled-components';
import img from '../assets/recital4.png';

const HeaderFront = styled.header`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: center;
  height: min-content;
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  & * {
    z-index: 1;
  }
`;
const HeaderTitle = styled.h1`
  font-family: 'Cosmos-logic';
  font-size: 10rem;
  color: orange;
  font-weight: bold;
  @media (max-width: 790px) {
    font-size: 6rem;
  }
  @media (max-width: 650px) {
    font-size: 4rem;
  }
`;

const Header = ({ titulo }) => {
  return (
    <HeaderFront>
      <HeaderTitle>{titulo}</HeaderTitle>
    </HeaderFront>
  );
};

export default Header;

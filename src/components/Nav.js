import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import imagen from '../assets/icoAzulBlack.png';

const NavBar = styled.nav`
  width: 100%;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 10px 0; */
`;

const NavBarUl = styled.ul`
  display: flex;
  list-style: none;
  cursor: pointer;
`;
const NavBarLi = styled.ul`
  opacity: 0.7;
  color: white;
  text-decoration: none;
  font-size: 2rem;
  padding: 10px;
  &:hover {
    opacity: 1;
  }
  /* margin-right: 15px; */
  @media (max-width: 790px) {
    font-size: 2rem;
  }
  @media (max-width: 650px) {
    font-size: 1rem;
  }
`;
const NavImg = styled.img`
  width: 50px;
`;

const Nav = () => {
  return (
    <NavBar>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <NavImg src={imagen} alt="lala" />
      </Link>
      <NavBarUl>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <NavBarLi>HOME</NavBarLi>
        </Link>
        <Link to="/musica" style={{ textDecoration: 'none' }}>
          <NavBarLi>MUSICA</NavBarLi>
        </Link>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <NavBarLi>SHOWS</NavBarLi>
        </Link>
        <Link to="/contacto" style={{ textDecoration: 'none' }}>
          <NavBarLi>CONTACTO</NavBarLi>
        </Link>
      </NavBarUl>
    </NavBar>
  );
};

export default Nav;

// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
const NavLink = styled(Link)`
  color: #fff;
  margin: 0.5rem;
  font-size: 1.2rem;

  &:hover {
    color: #3498db; /* Blue color on hover */
  }
`;

const Navbar = () => (
  <Nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/projects">Projects</NavLink>
    <NavLink to="/contact">Contact</NavLink>
  </Nav>
);

export default Navbar;

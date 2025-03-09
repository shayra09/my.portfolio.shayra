import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiMenu, FiX } from "react-icons/fi";

const GlobalStyle = styled.div`
  overflow-x: hidden; /* Prevents horizontal scroll */
`;

const Nav = styled.nav`
  background: ${({ isScrolled }) =>
    isScrolled ? "rgba(0, 0, 0, 0.9)" : "linear-gradient(135deg, #000000, #2c003e)"};
  backdrop-filter: blur(10px);
  height: 70px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  position: fixed;
  width: 100%;
  max-width: 100%;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease-in-out;
  box-sizing: border-box; /* Prevents navbar from exceeding width */

  ${({ isScrolled }) => isScrolled && `box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);`}
`;

const Logo = styled.h1`
  color: purple;
  font-size: 1.8rem;
  font-weight: bold;
  cursor: pointer;
  margin-left:50px;
  font-style:italic;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 25px;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    top: 0;
    right: ${({ open }) => (open ? "0" : "-100%")};
    width: 100vw; /* Makes sure the menu is the full width of the screen */
    height: 100vh;
    background: rgba(10, 10, 30, 0.95);
    backdrop-filter: blur(10px);
    padding: 80px 20px;
    overflow-y: auto; /* Prevents overflow issues */
    transition: right 0.3s ease-in-out;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  padding: 12px;
  position: relative;
  transition: color 0.3s ease-in-out;

  &.active {
    color: #ff0099;
  }

  &:hover {
    color: #ff0099;
  }

  &:hover::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 100%;
    height: 2px;
    background: #ff0099;
    transition: width 0.3s ease-in-out;
  }
`;

const MenuIcon = styled.div`
  display: none;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Overlay = styled.div `
display: ${({ open }) => (open ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  transition: opacity 0.3s ease-in-out;
`;


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <GlobalStyle>
      <Nav isScrolled={isScrolled}>
        <Logo>Shayra</Logo>

        <MenuIcon onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </MenuIcon>

        <NavLinks open={menuOpen}>
          <StyledNavLink to="/" onClick={() => setMenuOpen(false)}>Home</StyledNavLink>
          <StyledNavLink to="/about" onClick={() => setMenuOpen(false)}>About</StyledNavLink>
          <StyledNavLink to="/projects" onClick={() => setMenuOpen(false)}>Projects</StyledNavLink>
          <StyledNavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</StyledNavLink>
        </NavLinks>
      </Nav>

     
    </GlobalStyle>
  );
};

export default Navbar;

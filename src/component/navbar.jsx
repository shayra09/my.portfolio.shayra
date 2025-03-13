import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiMenu, FiX } from "react-icons/fi";

const Nav = styled.nav`
  background: ${({ isScrolled }) =>
    isScrolled ? "rgba(0, 0, 0, 0.9)" : "linear-gradient(135deg, #000000, #2c003e)"};
  backdrop-filter: blur(10px);
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1105;
  transition: all 0.3s ease-in-out;
`;

const LogoText = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  z-index: 1106;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${({ open }) => (open ? "0" : "-100%")};
    width: 75vw;
    height: 100vh;
    background: rgba(10, 10, 30, 0.95);
    backdrop-filter: blur(10px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: right 0.3s ease-in-out;
    padding: 20px;
    overflow-y: auto;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  padding: 15px;
  transition: color 0.3s ease-in-out;

  &.active {
    color: #ff0099;
  }

  &:hover {
    color: #ff0099;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    width: 100%;
    text-align: center;
  }
`;

const MenuIcon = styled.div`
  display: none;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
  z-index: 1108;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Overlay = styled.div`
  display: ${({ open }) => (open ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1104;
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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      <Nav isScrolled={isScrolled}>
        <LogoText onClick={() => setMenuOpen(false)}>Shayra</LogoText>

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

      <Overlay open={menuOpen} onClick={() => setMenuOpen(false)} aria-hidden="true" />
    </>
  );
};

export default Navbar;
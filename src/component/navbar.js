import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiMenu, FiX, FiUser } from "react-icons/fi"; // ✅ Imported user icon

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

const Logo = styled.h1`
  color: purple;
  font-size: 1.8rem;
  font-weight: bold;
  cursor: pointer;
  font-style: italic;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 15px;
  z-index: 1106;

 

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${({ open }) => (open ? "0" : "-100%")};
    width: 100vw;
    height: 100vh;
  
    background: rgba(10, 10, 30, 0.95);
    backdrop-filter: blur(10px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-y: auto;
    transition: right 0.3s ease-in-out;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  padding: 10px;
  position: relative;
  transition: color 0.3s ease-in-out;
  z-index: 1107;
  display: flex;
  align-items: center;
  margin-right:30px;

  &.active {
    color: #ff0099;
  }

  &:hover {
    color: #ff0099;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
    padding: 10px;
    width: 100%;
    justify-content: center;
  }
`;
{/*}
const ContactIcon = styled(FiUser)`
  font-size: 1.4rem;
 margin-right:500px;
`;
*/}
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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      <Nav isScrolled={isScrolled}>
        <Logo onClick={() => setMenuOpen(false)}>Shayra</Logo>

        <MenuIcon onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </MenuIcon>

        <NavLinks open={menuOpen}>
          <StyledNavLink to="/" onClick={() => setTimeout(() => setMenuOpen(false), 300)}>Home</StyledNavLink>
          <StyledNavLink to="/about" onClick={() => setTimeout(() => setMenuOpen(false), 300)}>About</StyledNavLink>
          <StyledNavLink to="/projects" onClick={() => setTimeout(() => setMenuOpen(false), 300)}>Projects</StyledNavLink>

          {/* Contact Menu Item with Icon */}
          <StyledNavLink to="/contact" onClick={() => setTimeout(() => setMenuOpen(false), 300)}>
            Contact {/*</ContactIcon*/}
          </StyledNavLink>
        </NavLinks>
      </Nav>

      {/* Clickable overlay to close menu */}
      <Overlay open={menuOpen} onClick={() => setMenuOpen(false)} />
    </>
  );
};

export default Navbar;

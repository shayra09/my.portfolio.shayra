import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import img1 from './images/profile.png';

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const Container = styled.div`
  background: radial-gradient(circle, rgba(36,36,36,1) 10%, rgba(0,0,0,1) 80%);
  background-size: cover;
  animation: ${gradientAnimation} 12s ease infinite;
  color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: left;
  padding: 40px;
  position: relative;
  gap: 30px;
  overflow: hidden;

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
    padding: 20px;
  }
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 20px;
  color: #ff5733;
  text-shadow: 0px 0px 25px rgba(255, 87, 51, 1), 0px 0px 50px rgba(255, 87, 51, 0.8);
  letter-spacing: 2px;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Content = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 1024px) {
    align-items: center;
    text-align: center;
  }
`;

const ImageSection = styled.div`
margin-top:70px;
  width: 320px;
  height: 320px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0px 0px 30px rgba(255, 87, 51, 0.8);
  transition: 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 5px solid rgba(255, 87, 51, 0.8);

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 40px rgba(255, 87, 51, 1);
  }

  @media (max-width: 1024px) {
    width: 250px;
    height: 250px;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%);
`;

const Subtitle = styled(motion.p)`
  font-size: 1.6rem;
  max-width: 800px;
  line-height: 1.8;
  color: #d1d1d1;
  margin-bottom: 40px;
  text-align: left;
  padding: 0 20px;

  @media (max-width: 1024px) {
    text-align: center;
    padding: 0;
  }

  small {
    font-size: 1.3rem;
    display: block;
    opacity: 0.9;
  }
`;

const Button = styled(motion(Link))`
  margin-top: 30px;
  padding: 16px 45px;
  background: linear-gradient(90deg, rgba(255, 87, 51, 0.6), rgba(255, 200, 100, 0.6));
  color: #fff;
  font-size: 1.3rem;
  font-weight: bold;
  text-decoration: none;
  border-radius: 35px;
  transition: 0.3s ease;
  backdrop-filter: blur(10px);
  box-shadow: 0px 0px 25px rgba(255, 87, 51, 0.8);

  &:hover {
    background: rgba(255, 87, 51, 1);
    transform: scale(1.1);
    box-shadow: 0px 0px 35px rgba(255, 87, 51, 1);
  }
`;

const Footer = styled.footer`
  width: 100%;
  background: linear-gradient(90deg, rgba(36,36,36,1), rgba(0,0,0,1));
  padding: 20px 0;
  text-align: center;
  font-size: 1rem;
  color: #bbb;
  position: relative;
  bottom: 0;
  margin-top: auto;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 10px;

  a {
    color: #ff5733;
    font-size: 1.5rem;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #e64a2e;
    }
  }
`;

const Home = () => {
  return (
    <>
      <Container>
        <ImageSection>
          <ProfileImage src={img1} alt="Profile" />
        </ImageSection>
        <Content>
          <Title initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            Hey.. I'm Shayra
          </Title>
          <Subtitle initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.3 }}>
            <small>A passionate Software Engineer & Web Developer...</small>
          </Subtitle>
          <Button to="/projects">View My Work</Button>
        </Content>
      </Container>

      <Footer>
        <FooterLinks>
          <a href="https://www.linkedin.com/in/shayra-ansari-44b9a533b/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/shayra" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="mailto:shayra690@gmail.com">
            <FaEnvelope />
          </a>
        </FooterLinks>
        © {new Date().getFullYear()} Shayra690@gmail.com | Built by 
        <a href="https://github.com/shayra09" target="_blank" rel="noopener noreferrer"> Shayra</a>
      </Footer>
    </>
  );
};

export default Home;

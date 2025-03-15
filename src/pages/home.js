import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import img1 from './images/profile2.png';

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

const ImageSection = styled.div`
margin-right:50px;
  margin-top: 30px;
  width: 320px;
  height: 320px;
  border-radius: 0%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 30px black;
   transition: 0.3s ease;
  

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 30px rgba(0, 173, 180, 1);
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

const Title = styled(motion.h1)`
  font-size: 4rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 20px;
  color: #00adb4;
  text-shadow: 0px 0px 25px rgba(0, 173, 180, 1), 0px 0px 50px rgba(0, 173, 180, 0.8);
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
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
  background: linear-gradient(90deg, rgba(0, 173, 180, 0.6), rgba(255, 200, 100, 0.6));
  color: #fff;
  font-size: 1.3rem;
  font-weight: bold;
  text-decoration: none;
  border-radius: 35px;
  transition: 0.3s ease;
  backdrop-filter: blur(10px);
  box-shadow: 0px 0px 25px rgba(0, 173, 180, 0.8);

  &:hover {
    background: rgba(0, 173, 180, 1);
    transform: scale(1.1);
    box-shadow: 0px 0px 35px rgba(0, 173, 180, 1);
  }
`;

const Home = () => {
  return (
    <Container>
      <ImageSection>
        <ProfileImage src={img1} alt="Profile2" />
      </ImageSection>
      <Content>
        <Title>Hey.. I'm Shayra</Title>
        <Subtitle>
          <small>A passionate Software Engineer & Web Developer...</small>
        </Subtitle>
        <Button to="/projects">View My Work</Button>
      </Content>
    </Container>
  );
};

export default Home;

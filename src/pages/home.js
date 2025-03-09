import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

// Subtle Animated Gradient Background
const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const Container = styled.div`
  background: linear-gradient(-45deg, #000000, #0a0a0a, #141414);
  background-size: 300% 300%;
  animation: ${gradientAnimation} 12s ease infinite;
  color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
`;

// Neon Orange Glow Effect on Title
const Title = styled(motion.h1)`
  font-size: 4rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 20px;
  color: #ff5733; /* Neon Orange */
  text-shadow: 0px 0px 15px rgba(255, 87, 51, 0.8), 
               0px 0px 30px rgba(255, 87, 51, 0.6);
`;

// Subtitle with Light Gray Tone
const Subtitle = styled(motion.p)`
  font-size: 1.4rem;
  max-width: 700px;
  line-height: 1.7;
  color: #d1d1d1;
`;

// Glassmorphic Neon Button with Orange Glow
const Button = styled(motion.a)`
  margin-top: 30px;
  padding: 14px 40px;
  background: rgba(255, 87, 51, 0.2);
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  border-radius: 30px;
  transition: 0.3s ease;
  backdrop-filter: blur(10px);
  box-shadow: 0px 0px 15px rgba(255, 87, 51, 0.6),
              0px 0px 30px rgba(255, 87, 51, 0.4);

  &:hover {
    background: rgba(255, 87, 51, 0.4);
    box-shadow: 0px 0px 25px rgba(255, 87, 51, 0.9),
                0px 0px 50px rgba(255, 87, 51, 0.7);
    transform: scale(1.05);
  }
`;

const Home = () => {
  return (
    <Container>
      <Title
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        hey.. i'm Shayra
      </Title>
      <Subtitle
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
       <small>A passionate Software Engineer & Web Developer... </small> 
       
      </Subtitle>
      <Button
        href="/projects"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        View My Work
      </Button>
    </Container>
  );
};

export default Home;

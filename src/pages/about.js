import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 50px 20px;
  max-width: 800px;
  margin: auto;

  @media (max-width: 600px) {
    padding: 40px 15px;
  }
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 15px;

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
  max-width: 600px;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

const Highlight = styled.span`
  color: #ff5733;
  font-weight: bold;
`;

const Button = styled(motion.button)`
  margin-top: 20px;
  padding: 12px 20px;
  background-color: #ff5733;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  
  &:hover {
    background-color: #e64a2e;
  }
`;

const variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const About = () => {
  return (
    <Container>
      <Heading as={motion.h2} variants={variants} initial="hidden" animate="visible">
        About Me
      </Heading>
      <Description as={motion.p} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
        Hi, I'm <Highlight>Shayra</Highlight>, a passionate <Highlight>Software Engineer</Highlight> and <Highlight>Web Developer</Highlight>. 
        I specialize in building <Highlight>dynamic</Highlight> and <Highlight>responsive web applications</Highlight>, creating seamless 
        user experiences.
      </Description>
      <Button
        as={motion.button}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="View My Projects"
        onClick={() => window.location.href = '/projects'}
      >
        View My Projects
      </Button>
    </Container>
  );
};

export default About;

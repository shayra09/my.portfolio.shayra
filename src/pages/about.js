import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

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
  padding-top: 70px;
  font-size: 2.5rem;
  color: #00adb4;
  margin-bottom: 15px;

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #d1d1d1;
  line-height: 1.6;
  max-width: 600px;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

const Highlight = styled.span`
  color: #00adb4;
  font-weight: bold;
`;

const Button = styled(motion.button)`
  margin-top: 20px;
  padding: 12px 20px;
  background-color: #00adb4;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #008c9e;
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
    color: #00adb4;
    font-size: 1.5rem;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #008c9e;
    }
  }
`;

const variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const About = () => {
  return (
    <>
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

      <Footer>
        <FooterLinks>
          <a href="https://www.linkedin.com/in/shayra-ansari-44b9a533b/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/shayra09" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="mailto:shayra690@gmail.com">
            <FaEnvelope />
          </a>
        </FooterLinks>
        © {new Date().getFullYear()} Shayra | Built by 
        <a href="https://github.com/shayra09" target="_blank" rel="noopener noreferrer"> Shayra</a>
      </Footer>
    </>
  );
};

export default About;
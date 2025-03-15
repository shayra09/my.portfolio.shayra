import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Container = styled.section`
  max-width: 800px;
  margin: auto;
  padding: 40px 20px;
  text-align: center;

  @media (max-width: 600px) {
    padding: 30px 15px;
  }
`;

const Heading = styled.h2`
  padding-top: 70px;
  font-size: 2.5rem;
  color: #00adb4;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

const ProjectList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ProjectItem = styled(motion.li)`
  background: #222831;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 173, 180, 0.2);
  text-align: left;
  transition: transform 0.3s;

  h3 {
    margin-bottom: 10px;
    color: #00adb4;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 173, 180, 0.3);
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

const projects = [
  { title: 'NEWS PORTAL', description: 'I have been completed my NEWS POERTAL website using technology Python with Django wih SQlite Database. Including Templates that is(Video news, FAQ, Our News, About, Contact us, Login).' },
  { title: 'ONLINE SHOPPING', description: 'I have been completed my ONLINE SHOPPING website using technology Python with Django wih SQlite Database. Including Templates that is(Product, FAQ, Add TO Cart, About, Order History, Register, Login).' },
  // Add more projects as needed
];

const Projects = () => (
  <>
    <Container>
      <Heading as={motion.h2} initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        My Projects
      </Heading>
      <ProjectList>
        {projects.map((project, index) => (
          <ProjectItem key={index} initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: index * 0.2 }}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </ProjectItem>
        ))}
      </ProjectList>
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

export default Projects;

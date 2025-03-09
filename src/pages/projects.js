import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

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
  font-size: 2.5rem;
  color: #333;
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
  background:#233942;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
  transition: transform 0.3s;

  h3 {
    margin-bottom: 10px;
    color: #ff5733;
  }

  &:hover {
    transform: translateY(-5px);
  }
`;

const projects = [
  { title: 'Project 1', description: 'Description of Project 1.' },
  { title: 'Project 2', description: 'Description of Project 2.' },
  // Add more projects as needed
];

const Projects = () => (
  <Container>
    <Heading as={motion.h2} initial={{ opacity: 0, y: -20 }}
     animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} >
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
);

export default Projects;

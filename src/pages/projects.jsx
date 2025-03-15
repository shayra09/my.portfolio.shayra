import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFilePdf } from 'react-icons/fa';

const Container = styled.section`
  max-width: 900px;
  margin: auto;
  padding: 40px 20px;
  text-align: center;
`;

const Heading = styled(motion.h2)`
padding-top:70px;
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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const ProjectItem = styled(motion.li)`
  background: #233942;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
  transition: transform 0.3s;
  position: relative;

  h3 {
    margin-bottom: 10px;
    color: #ff5733;
  }

  p {
    color: #fff;
    margin-bottom: 15px;
  }

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Button = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #ff5733;
  color: white;
  padding: 8px 12px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: bold;
  transition: background 0.3s;

  &:hover {
    background: #e74c3c;
  }
`;

const projects = [
  {
    title: 'NEWS PORTAL',
    description: '',
    image: 'https://via.placeholder.com/300x200', // Replace with real image
    github: 'https://github.com/yourusername/project1',
    liveDemo: 'https://yourliveproject1.com',
    file: '/path-to-project1.pdf', // Replace with actual file path
  },
  {
    title: 'Project 2',
    description: 'Description of Project 2.',
    image: 'https://via.placeholder.com/300x200',
    github: 'https://github.com/yourusername/project2',
    liveDemo: 'https://yourliveproject2.com',
    file: '/path-to-project2.pdf',
  },
];

const Projects = () => (
  <Container>
    <Heading
      as={motion.h2}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      My Projects
    </Heading>
    <ProjectList>
      {projects.map((project, index) => (
        <ProjectItem
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <ProjectImage src={project.image} alt={project.title} />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <ButtonContainer>
            <Button href={project.github} target="_blank">
              <FaGithub /> GitHub
            </Button>
            <Button href={project.liveDemo} target="_blank">
              <FaExternalLinkAlt /> Live Demo
            </Button>
            <Button href={project.file} target="_blank">
              <FaFilePdf /> View File
            </Button>
          </ButtonContainer>
        </ProjectItem>
      ))}
    </ProjectList>
  </Container>
);

export default Projects;

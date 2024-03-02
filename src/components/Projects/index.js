import React, { useState } from 'react';
import styled from 'styled-components';
import ProjectCard from '../Cards/ProjectCard';
import { projects } from '../../data/constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  margin-top: 20px; /* Adjust margin to bring it closer to the Experience container */
`;

const Wrapper = styled.div`
  max-width: 110px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: -500px;
`;

const Title = styled.div`
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.text_primary};
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    font-size: 32px;
    margin-top: 32px;
  }
`;

const Description = styled.div`
  font-size: 18px;
  width: 600px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
    width: 90%;
  }
`;

const ToggleGroup = styled.div`
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  border-radius: 12px;
  font-weight: 500;
  margin: 22px 0;

  @media (max-width: 768px){
    font-size: 14px;
  }
`;

const ToggleButton = styled.div`
  padding: 8px 18px;
  cursor: pointer;
  border-radius: 6px;

  ${({ active, theme }) => active && `
    background-color: ${theme.primary + '20'};
  `}

  &:hover {
    background-color: ${({ theme }) => theme.primary + '20'};
  }

  @media (max-width: 768px){
    padding: 6px 8px;
    border-radius: 4px;
  }
`;

const Divider = styled.div`
  width: 1.5px;
  background-color: ${({ theme }) => theme.primary};
`;

const Projects = () => {
  const [toggle, setToggle] = useState("all");

  const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  `;

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
      </Wrapper>
      <Description>
        I have worked on a wide range of projects. From web-based apps to AI models. Here are some of my projects.
      </Description>
      <ToggleGroup>
        <ToggleButton active={toggle === 'all'} onClick={() => setToggle("all")} value="all">ALL</ToggleButton>
        <Divider/>
        <ToggleButton active={toggle === 'web app'} onClick={() => setToggle("web app")} value="web app">WEB-APPS</ToggleButton>
        <Divider/>
        <ToggleButton active={toggle === 'android app'} onClick={() => setToggle("android app")} value="android app">ANDROID APPS</ToggleButton>
        <Divider/>
        <ToggleButton active={toggle === 'machine learning'} onClick={() => setToggle("machine learning")} value="machine learning">MACHINE LEARNING</ToggleButton>
      </ToggleGroup>
      <CardContainer>
        {projects
          .filter((item) => toggle === 'all' || item.category === toggle)
          .map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
      </CardContainer>
    </Container>
  );
};

export default Projects;

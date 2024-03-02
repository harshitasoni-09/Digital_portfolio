import React from 'react';
import styled from "styled-components";
import { skills } from "../../data/constants";

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
height: 1800px;
`;

const Wrapper = styled.div`
max-width: 110px;
position: relative;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
width: 100%;
`;

const Title = styled.div`
font-size: 42px;
font-weight: 600;
text-align: center;
margin-top: 12px;
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

  @media (max-width: 768px) {
    font-size: 16px;
    width: 90%; 
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  justify-content: center;
  gap: 30px;
  width: 800px;
`;

const Skill = styled.div`
  flex-basis: calc(50% - 30px); 
  height: 510px; 
  background-color: ${({ theme }) => theme.card};
  border: 0.1px solid #854ce6;
  border-radius: 16px;
  padding: 18px 36px;
  box-sizing: border-box; 
  transition: all 0.3s ease-in-out;
&:hover {
  box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
  transform: translateY(-5px);
}

  @media (max-width: 768px) {
    flex-basis: calc(100% - 30px); /* Full width on smaller screens */
  }
`;


const SkillTitle = styled.div`
font-size: 28px;
font-weight: 600;
color: ${({ theme }) => theme.text_secondary};
margin-bottom: 12px;
text-align: center;
`;

const SkillList = styled.div`
font-size: 28px;
font-weight: 600;
color: ${({ theme }) => theme.text_secondary};
margin-bottom: 20px;
text-align: center;
`;

const SkillItem = styled.div`
display: flex;
align-items: center;
gap: 8px;
justify-content: center;
font-size: 16px;
color: ${({ theme }) => theme.text_primary + 80};
padding: 12px 16px;
font-weight: 400;

@media (max-width: 768px){
  font-size: 14px;
  padding: 8px 12px;
}

@media (max-width: 500px){
  font-size: 14px;
  padding: 6px 12px;
}
`;

const SkillImage = styled.img`
  width: 24px;
  height: 20px;
`;


const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Description>
           Here are some of my skills I've been working on for the past 2 years.
        </Description>
         <SkillsContainer>
           {skills.map((item) => (
            <Skill>
              <SkillTitle>{item.title}</SkillTitle>
               <SkillList>
                {
                  item.skills.map((skill) => (
                    <SkillItem> 
                     <SkillImage src={skill.image} /> 
                       {skill.name}
                    </SkillItem>
                  ))
                }
              </SkillList> 
            </Skill>
           ))}
        </SkillsContainer> 
      </Wrapper>
    </Container>
  ); 
}

export default Skills;

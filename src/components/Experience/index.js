import React from 'react';
import styled from "styled-components";
import { experiences } from "../../data/constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  margin-bottom: 500px;
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 20px;
`;

const Timeline = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 20px;
  max-width: 1000px;
  width: 100%;
`;

const TimelineItem = styled.div`
  background-color: ${({ theme }) => theme.card};
  border-radius: 8px;
  padding: 20px;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Document = styled.img`
  display: none;
  height: 70px;
  width: fit-content;
  background-color: #000;
  border-radius: 10px;

  &:hover{
    cursor: pointer;
    opacity: 0.8;
  }
`;

const TimelineContent = styled.div`
  background-color: ${({ theme }) => theme.card};
  border-radius: 8px;
  padding: 20px;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
    transform: translateY(-5px);
  }

  &:hover ${Document} {
    display: flex;
  }

  @media (max-width: 768px) {
    padding: 10px;
    gap: 8px;
    width: 300px;
  }
`;

const Date = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 10px;
`;

const Role = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 5px;
`;

const Company = styled.div`
  font-size: 16px;
  font-weight: 500;
  color:yellow;
  margin-bottom: 10px;
`;

const Description = styled.div`
  font-size: 18px;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
`;

const SkillEX = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  margin-top: 10px;
`;

const Skill = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Image = styled.img`
  height: 50px;
  width: 80px;
  border-radius: 10px;
  background-color: #000;
  margin-top: 4px;

  @media (max-width: 768px) {
    height: 40px;
  }
`;

const IframeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  margin-top: 10px;
  border-radius: 10px;
  overflow: hidden;
`;

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`;

const Experience = () => {
  return (
    <Container id="experience">
      <Title>Experience</Title>
      <Description>
        Here are some of my experiences I've had in the past.
      </Description>
      <Timeline>
        {experiences.map(experience => (
          <TimelineItem key={experience.id}>
            <TimelineContent>
              <Image src={experience.img} alt="Company Logo" />
              <Date>{experience.date}</Date>
              <Role>{experience.role}</Role>
              <Company>{experience.company}</Company>
              <Description>{experience.desc}
                <>
                  <br/>
                  <SkillEX>
                    <b>Skills:</b>
                    <ItemWrapper>
                      {experience.skills.map((skill, index) => (
                        <Skill key={index}>· {skill} </Skill>
                      ))}
                    </ItemWrapper>
                  </SkillEX>
                </>
              </Description>
              {experience.doc && (
                <IframeContainer>
                  <Iframe src={experience.doc.replace('/view', '/preview')}></Iframe>
                </IframeContainer>
              )}
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Container>
  );
}

export default Experience;

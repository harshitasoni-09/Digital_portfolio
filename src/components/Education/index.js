import React from 'react';
import styled from "styled-components";
import { education } from "../../data/constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  margin-bottom: 200px; 
  margin-top: 100px;
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

const Timeline = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TimelineItem = styled.div`
background-color: ${({ theme }) => theme.card};
padding: 20px;
border-radius: 10px;
box-shadow: 0 0 12px 4px rgba(0,0,0,0.4);
margin: 20px;
height: 380px;
width: 800px;
overflow: hidden;
`;

const TimelineContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-left: 20px;
`;

const Date = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
`;

const School = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const Grade = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
`;

const DescriptionText = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 10px;
`;

const Education = () => {
  return (
    <Container id="education">
    <Title>Education</Title>
    <Description>
        My education has been a journey of self-discovery and growth. My educational details are as follows.
      </Description>
    <Timeline>
      {education.map(education => (
        <TimelineItem key={education.id}>
          <Image src={education.img} alt="School Logo" />
          <TimelineContent>
          <Date>{education.date}</Date>
              <School>{education.school}</School>
              <Grade>{education.grade}</Grade>
              <DescriptionText>{education.desc}</DescriptionText>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  </Container>
  )
}

export default Education

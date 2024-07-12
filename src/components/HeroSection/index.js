import React from 'react';
import styled from "styled-components";
import { Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";
import HeroImg from "../../images/myresumepic.jpg";

const HeroContainer = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 80px 30px;

  @media screen and (max-width: 960px) {
    padding: 66px 16px;
  }

  @media screen and (max-width: 640px) {
    padding: 32px 16px;
  }

  z-index: 1;
  clip-path: polygon(0 0,100% 0, 100% 100%, 70% 95%, 0 100%);
`;

const HeroInnerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  max-width: 1100px;
  padding: 0 20px;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    align-items: center;
  }
`;

const HeroLeftContainer = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;

  @media screen and (max-width: 960px) {
    align-items: center;
    text-align: center;
  }
`;

const Title = styled.div`
  font-size: 50px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  line-height: 60px;
  margin-bottom: 10px;

  @media screen and (max-width: 640px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

const TextLoop = styled.div`
  font-size: 32px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  line-height: 50px;
  display: flex;
  align-items: center;
  gap: 12px;

  @media screen and (max-width: 640px) {
    font-size: 24px;
    line-height: 30px;
  }
`;

const Span = styled.span`
  color: ${({ theme }) => theme.primary};
`;

const SubTitle = styled.div`
  font-size: 20px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 30px;
  margin-bottom: 20px;
  max-width: 600px;

  @media screen and (max-width: 960px) {
    text-align: center;
  }

  @media screen and (max-width: 640px) {
    font-size: 16px;
    line-height: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
    line-height: 20px;
  }

  @media screen and (max-width: 360px) {
    font-size: 12px;
    line-height: 18px;
  }
`;

const ResumeButton = styled.a`
  text-decoration: none;
  width: fit-content;
  padding: 16px 32px;
  margin-top: 20px;
  color: ${({ theme }) => theme.white};
  border-radius: 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  transition: all 0.2s ease-in-out !important;
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1), hsla(294, 100%, 50%, 1));
  box-shadow: 20px 20px 60px #1F2634, -20px -20px 60px #1F2634;
  
  &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow: 20px 20px 60px #1F2634;
    filter: brightness(1);
  }

  @media (max-width: 640px) {
    padding: 12px 24px;
    font-size: 18px;
  }

  @media (max-width: 480px) {
    padding: 10px 20px;
    font-size: 16px;
  }

  @media (max-width: 360px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;

const HeroRightContainer = styled.div`
  width: 100%;
  max-width: 250px;
  margin-top: 20px;

  @media (max-width: 640px) {
    max-width: 200px;
  }

  @media (max-width: 480px) {
    max-width: 150px;
  }

  @media (max-width: 360px) {
    max-width: 100px;
  }
`;

const Image = styled.img`
  width: 140%;
  height: 100%;
  border-radius: 50%;
  max-width: 200%;
  object-fit: cover;
  object-position: center;
  border: 2px solid ${({ theme }) => theme.primary};

  @media (max-width: 640px) {
    width: 120%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }

  @media (max-width: 360px) {
    width: 80%;
  }
`;


const Hero = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroInnerContainer>
          <HeroLeftContainer>
            <Title>
              Hi, I am <br />
              {Bio.name}
            </Title>
            <TextLoop>
              I am a&nbsp;
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles.map(role => role + ' '), // Add space after each role
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <ResumeButton href="https://drive.google.com/file/d/1PVOx0hu5VfFGJaKH0M3bdMm-YyscOAob/view?usp=sharing" target="_blank">View Resume</ResumeButton>
          </HeroLeftContainer>
          <HeroRightContainer>
            <Image src={HeroImg} alt="Hero" />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
}

export default Hero;
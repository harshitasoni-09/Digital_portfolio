import React from 'react';
import styled, { useTheme } from 'styled-components';
import { DiCssdeck } from "react-icons/di";
import { FaBars } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

const Nav = styled.div`
    background-color: ${({ theme }) => theme.card_light};
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    @media screen and (max-width: 900px) {
        transition: 0.8s all ease;
    }
`;

const NavItems = styled.div`
    display: flex;
    align-items: center;
    gap: 32px;
    list-style: none;
`;

const Mobicon = styled.div`
    display: none;
    @media screen and (max-width: 900px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 50%);
        font-size: 1.5rem;
        cursor: pointer;
        color: ${({ theme}) => theme.text_primary};
    }
`;

const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 24px;
    max-width: 1200px;
`;

const NavLogo = styled.div`
    cursor: pointer;
    padding: 0 6px;
    text-decoration: none;
    align-items: center;
    height: 100%;
`;

const StyledScrollLink = styled(ScrollLink)`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
`;

const GithubButton = styled.button`
    background-color: transparent;
    color: ${({ theme }) => theme.primary};
    border: 1.8px solid ${({ theme }) => theme.primary};
    border-radius: 20px;
    padding: 10px 20px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    height: 100%;
    &:hover {
        background-color: ${({ theme }) => theme.primary};
        color: ${({ theme }) => theme.white};
    }
    @media screen and (max-width: 960px){
        font-size: 0.8rem;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`;

const Mobmenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    position: absolute;
    top: 80px;
    right: 0;
    width: 100%;
    padding: 12px 40px 24px 40px;
    background: ${({ theme }) => theme.card_light};
    transition: all 0.3s ease-in-out;
    border-radius: 0 0 20px 20px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
    opacity: ${({ open }) => (open ? "1" : "0")};
    z-index: ${({ open }) => (open ? "1" : "-1")};
`;

const MobmenuLinks = styled(ScrollLink)`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
`;

const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
  
    return (
        <Nav>
            <NavContainer>
                <NavLogo>
                    <DiCssdeck size="3rem" /> <span>Portfolio</span>
                </NavLogo>
                <NavItems>
                    <StyledScrollLink
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                    >
                        About
                    </StyledScrollLink>
                    <StyledScrollLink
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                    >
                        Skills
                    </StyledScrollLink>
                    <StyledScrollLink
                        to="experience"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                    >
                        Experience
                    </StyledScrollLink>
                    <StyledScrollLink
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                    >
                        Projects
                    </StyledScrollLink>
                    <StyledScrollLink
                        to="education"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                    >
                        Education
                    </StyledScrollLink>
                </NavItems>
                <ButtonContainer>
                    <GithubButton onClick={() => window.open("https://github.com/harshitasoni-09", "_blank")}>
                        GitHub Profile
                    </GithubButton>
                </ButtonContainer>
                <Mobicon>
                    <FaBars
                        onClick={() => {
                            setOpen(!open);
                        }}
                    />
                </Mobicon>
            </NavContainer>
            {open && (
                <Mobmenu open={open}>
                    <MobmenuLinks
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        onClick={() => {
                            setOpen(!open);
                        }}  
                    >
                        About
                    </MobmenuLinks>
                    <MobmenuLinks
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        onClick={() => {
                            setOpen(!open);
                        }}  
                    >
                        Skills
                    </MobmenuLinks>
                    <MobmenuLinks
                        to="experience"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        onClick={() => {
                            setOpen(!open);
                        }}  
                    >
                        Experience
                    </MobmenuLinks>
                    <MobmenuLinks
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        onClick={() => {
                            setOpen(!open);
                        }}  
                    >
                        Projects
                    </MobmenuLinks>
                    <MobmenuLinks
                        to="education"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        onClick={() => {
                            setOpen(!open);
                        }}  
                    >
                        Education
                    </MobmenuLinks>
                    <GithubButton
                        style={{
                            padding: "10px 16px",
                            background: `${theme.primary}`,
                            color: "white",
                            width: "max-content",
                        }}
                        href="https://github.com/harshitasoni-09"
                        target="_blank"
                    >
                        GitHub Profile
                    </GithubButton>
                </Mobmenu>
            )}
        </Nav>
    );
};

export default Navbar;

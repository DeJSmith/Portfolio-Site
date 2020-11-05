import styled, { css } from "styled-components";
import { FaBars } from "react-icons/fa";
import ProfileImage from "../../assets/ProfileImage.jpg";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import theme from "../../theme/theme";
import { Link } from "react-scroll";


export const Slider = styled.div`
  height: 100%;
  margin: auto;
  position: fixed;
  width: 80px;
  background-color: transparent;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & .menu-icon {
    color: ${theme.colorPrimary};
    height: auto;
    width: 1.5rem;
    transition: all 0.2s ease-in-out;
  }

  &:hover {
    & .nav {
      transform: translateX(0);
    }
    & .menu-icon {
      transform: scale(0);
      cursor: pointer;
    }
  }
`

export const NavBar = styled.nav`
  //background: ${theme.colorPrimary};
  font-size: 0.8rem;
  position: absolute;
  height: 100vh;
  width: 5rem;
  min-width: 5rem;
  z-index: 10;
  
  transition: all .2s ease-in-out;
  transform: translateX(-150px)
  //box-shadow: 5px 5px 40px rgba(255, 150, 180, 0.4);
  //box-shadow: 5px 5px 40px rgba(0, 0, 0, 0.4);
`;

export const NavLink = styled(Link)`
  color: ${theme.colorTertiary};
  font-size: inherit;
  text-decoration: none;
  display: flex;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-align: left;
 

  & .text {
    transition: all 0.2s ease-in-out;
    width: 0;
    text-align: center;
    transform: scaleX(0)
  }

  & .icon {
    transition: all 0.4s ease-in-out;
    margin-right: 0.5rem;
    color: ${theme.colorPrimary};
    width: 2rem;
    height: auto;
  }


  &.active {
    & .icon {
      transform: scale(0);
      width: 0;
    }

    & .text {
      width: auto;
      transform: scaleX(1);
      padding: 1rem;
    }
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: white;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-100%, 75%);
    font-size: 1rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  padding: 5rem 0rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;

  & div {
    height: 3rem;
  }

  & div:hover a{
    & .icon {
      width: 0 !important;
     
    }
    & .text{
      transform: scaleX(1);
      padding: 1rem;
      width: auto;
    }
  }
`;

export const Avatar = styled.div`
  margin: 1rem 1rem;
  width: 8rem;
  height: 10em;
  border-radius: 5px;
  background-image: url(${ProfileImage});
  object-fit: cover;
`;

const IconStyles = css`
  color: white;
  width: 2.5rem;
  height: auto;
  cursor: pointer;
  margin: 0;
  padding: 0;

  &:hover {
    color: ${theme.colorSecondary};
    transition: all ease-in-out 0.5s;
  }
`;

export const LinkedInIcon = styled(FaLinkedin)`
  ${IconStyles}
`;

export const GitIcon = styled(FaGithubSquare)`
  ${IconStyles}
`;

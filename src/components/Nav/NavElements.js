import styled, { css } from "styled-components";
import { FaBars } from "react-icons/fa";
import ProfileImage from "../../assets/ProfileImage.jpg";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import theme from "../../theme/theme";
import { Link } from "react-scroll";
import { icons } from "react-icons/lib";

export const NavBar = styled.nav`
  background: ${theme.colorPrimary};
  font-size: 0.8rem;
  position: fixed;
  height: 100vh;
  width: 5rem;
  min-width: 5rem;
  z-index: 10;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  //box-shadow: 5px 5px 40px rgba(255, 150, 180, 0.4);
  box-shadow: 5px 5px 40px rgba(0, 0, 0, 0.4);
`;

export const NavLink = styled(Link)`
  color: white;
  font-size: inherit;
  text-decoration: none;
  display: flex;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-align: left;
  padding: 1rem 0rem;

  & .text {
    display: none;
    transition: all 0.2s ease-in-out;
  }

  & .icon {
    transition: all 0.2s ease-in-out;
    margin-right: 0.5rem;
    color: ${theme.colorSecondary};
    width: 2rem;
    height: auto;
  }

  &:after {
    background: none repeat scroll 0 0 transparent;
    content: "";
    margin-top: 1.8rem;
    display: block;
    height: 1px;
    left: 10%;
    position: absolute;
    background: ${theme.colorSecondary};
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }

  &.active {
    text-shadow: 0px -2px 0px rgba(0, 0, 0, 1), 0 0 5px rgba(255, 255, 255, 0.8),
      0 -4px 15px rgba(255, 255, 255, 0.5);

    &:after {
      width: 80%;
    }

    & .icon {
      display: none;
    }

    & .text {
      display: block;
    }
  }

  &:hover {
    text-shadow: 0px -2px 0px rgba(0, 0, 0, 1), 0 0 5px rgba(255, 255, 255, 0.8),
      0 -4px 15px rgba(255, 255, 255, 0.5);

    & .text {
      display: block;
    }

    & .icon {
      display: none;
    }

    &:after {
      width: 80%;
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

  @media screen and (max-width: 768px) {
    display: none;
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

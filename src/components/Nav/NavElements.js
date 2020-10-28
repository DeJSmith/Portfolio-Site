import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import ProfileImage from "../../assets/ProfileImage.jpg";
import { FaGithub } from "react-icons/fa";

export const NavBar = styled.nav`
  color: black;
  background: #363852;
  font-size: 1rem;
  position: fixed;
  height: 100vh;
  width: 10rem;
  z-index: 10;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  box-shadow: 5px 5px 40px rgba(255, 150, 180, 0.4);
`;

export const NavLink = styled.a`
  color: white;
  font-size: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:after {
    background: none repeat scroll 0 0 transparent;
    content: "";
    margin-top: 1.5rem;
    display: block;
    height: 1px;
    left: 10%;
    position: absolute;
    background: #f72585;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }

  &.active {
    color: #4cc9f0;
  }

  &:hover {
    text-shadow: 0px -2px 0px rgba(0, 0, 0, 1), 0 0 5px rgba(255, 255, 255, 0.8),
      0 -4px 15px rgba(255, 255, 255, 0.5);

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

export const GitIcon = styled(FaGithub)`
  color: white;
  width: 3rem;
  height: auto;
  border-radius: 50%;
  cursor: pointer;
  margin: 0;
  padding: 0;

  &:hover {
    color: #f72585;
    transform: scale(1.2);
    transition: all ease-in-out 0.5s;
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.8),
      0 0px 15px rgba(255, 255, 255, 0.5);
  }
`;

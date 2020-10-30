import styled from "styled-components";
import theme from "../theme/theme";

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 80%;
  height: max-content;
  margin: 0rem auto;

  @media only screen and (max-width: 1500px) {
    max-width: 80%;
  }

  @media only screen and (max-width: 1280px) {
    max-width: 80%;
  }

  @media only screen and (max-width: 1024px) {
    max-width: 80%;
  }

  @media only screen and (max-width: 768px) {
    max-width: calc(768px * 0.8);
  }

  @media only screen and (max-width: 640px) {
    max-width: calc(640px * 0.8);
  }
`;

export const OpaqueBg = styled.div`
  //background: #22223b;
  background: #fff;
  background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);
  width: calc(100vw - 12rem);
  height: max-content;
  min-height: 100vh;
  overflow: hidden;
  position: absolute;
  z-index: -99;
  top: 0;
  right: 0;

  & .circles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }

  & .circles li {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    animation: animate 40s linear infinite;
    bottom: -150px;
  }

  & .circles li:nth-child(1) {
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
    background: rgba(254, 228, 64, 0.2);
  }

  & .circles li:nth-child(2) {
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
    background: rgba(96, 206, 241, 0.2);
  }

  & .circles li:nth-child(3) {
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
    background: rgba(254, 228, 64, 0.2);
  }

  & .circles li:nth-child(4) {
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
    background: rgba(247, 37, 133, 0.2);
  }

  & .circles li:nth-child(5) {
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
    background: rgba(96, 206, 241, 0.2);
  }

  & .circles li:nth-child(6) {
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
    background: rgba(254, 228, 64, 0.2);
  }

  & .circles li:nth-child(7) {
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
    background: rgba(247, 37, 133, 0.2);
  }

  & .circles li:nth-child(8) {
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 10s;
    animation-duration: 45s;
    background: rgba(96, 206, 241, 0.2);
  }

  & .circles li:nth-child(9) {
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
    background: rgba(254, 228, 64, 0.2);
  }

  & .circles li:nth-child(10) {
    left: 85%;
    width: 35px;
    height: 35px;
    animation-delay: 0s;
    animation-duration: 23s;
    background: rgba(247, 37, 133, 0.2);
  }

  & .circles li:nth-child(11) {
    left: 95%;
    width: 50px;
    height: 50px;
    animation-delay: 0s;
    animation-duration: 9s;
    background: rgba(254, 228, 64, 0.2);
  }

  & .circles li:nth-child(12) {
    left: 90%;
    width: 20px;
    height: 20px;
    animation-delay: 1s;
    animation-duration: 17;
    background: rgba(247, 37, 133, 0.2);
  }

  & .circles li:nth-child(13) {
    left: 10%;
    width: 10px;
    height: 10px;
    animation-delay: 9s;
    animation-duration: 44s;
    background: rgba(96, 206, 241, 0.2);
  }

  & .circles li:nth-child(14) {
    left: 60%;
    width: 90px;
    height: 90px;
    animation-delay: 10s;
    animation-duration: 30s;
    background: rgba(247, 37, 133, 0.2);
  }

  & .circles li:nth-child(15) {
    left: 5%;
    width: 80px;
    height: 80px;
    animation-delay: 3s;
    animation-duration: 12s;
    background: rgba(96, 206, 241, 0.2);
  }

  & .circles li:nth-child(16) {
    left: 66%;
    width: 35px;
    height: 35px;
    animation-delay: 2s;
    animation-duration: 21s;
    background: rgba(247, 37, 133, 0.2);
  }

  & .circles li:nth-child(17) {
    left: 87%;
    width: 50px;
    height: 50px;
    animation-delay: 0s;
    animation-duration: 13s;
    background: rgba(254, 228, 64, 0.2);
  }

  & .circles li:nth-child(18) {
    left: 55%;
    width: 20px;
    height: 20px;
    animation-delay: 5s;
    animation-duration: 17s;
    background: rgba(247, 37, 133, 0.2);
  }

  & .circles li:nth-child(19) {
    left: 71%;
    width: 10px;
    height: 10px;
    animation-delay: 11s;
    animation-duration: 28s;
    background: rgba(96, 206, 241, 0.2);
  }

  & .circles li:nth-child(20) {
    left: 31%;
    width: 90px;
    height: 90px;
    animation-delay: 13s;
    animation-duration: 32s;
    background: rgba(247, 37, 133, 0.2);
  }

  & .circles li:nth-child(21) {
    left: 22%;
    width: 80px;
    height: 80px;
    animation-delay: 1s;
    animation-duration: 15s;
    background: rgba(96, 206, 241, 0.2);
  }

  & .circles li:nth-child(22) {
    left: 34%;
    width: 80px;
    height: 80px;
    animation-delay: 3s;
    background: rgba(254, 228, 64, 0.2);
  }

  & .circles li:nth-child(23) {
    left: 18%;
    width: 20px;
    height: 20px;
    animation-delay: 5s;
    animation-duration: 9s;
    background: rgba(96, 206, 241, 0.2);
  }

  & .circles li:nth-child(24) {
    left: 12%;
    width: 20px;
    height: 20px;
    animation-delay: 9s;
    background: rgba(254, 228, 64, 0.2);
  }

  & .circles li:nth-child(25) {
    left: 62%;
    width: 60px;
    height: 60px;
    animation-delay: 2s;
    animation-duration: 16s;
    background: rgba(247, 37, 133, 0.2);
  }

  & .circles li:nth-child(26) {
    left: 40%;
    width: 20px;
    height: 20px;
    animation-delay: 7s;
    background: rgba(96, 206, 241, 0.2);
  }

  @keyframes animate {
    0% {
      transform: translateY(0) rotate(0deg);
      border-radius: 0;
      opacity: 1;
    }

    100% {
      transform: translateY(-500vh) rotate(720deg);
      border-radius: 50%;
      opacity: 0;
    }
  }
`;

export const TerminalIcon = styled.div`
  color: white;
  padding-right: 0.5rem;
  opacity: 1;
  animation-name: fadeInOpacity;
  animation-timing-function: ease-in;
  animation-duration: 1s;
  text-shadow: 0px -2px 0px rgba(0, 0, 0, 1), 0 0 5px rgba(255, 255, 255, 0.8),
    0 -4px 15px rgba(255, 255, 255, 0.5);

  @keyframes fadeInOpacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const TerminalText = styled.div`
  color: white;
  animation: type 2s steps(20, end) 2s, blink 0.8s ease infinite;
  animation-iteration-count: infinite;
  overflow: hidden;
  margin: 0;
  white-space: nowrap;
  border-right: 2px solid #f72585;
  width: 0%;

  @keyframes type {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
      text-shadow: 0px -2px 0px rgba(0, 0, 0, 1),
        0 0 5px rgba(255, 255, 255, 0.8), 0 -4px 15px rgba(255, 255, 255, 0.5);
    }
  }

  @keyframes blink {
    0% {
      border-color: transparent;
    }
    100% {
      border-color: #f72585;
    }
  }
`;

export const ButtonOutline = styled.button`
  border-radius: 5px;
  background: none;
  border: 2px solid;
  font: inherit;
  line-height: 1;
  margin: 0.5rem;
  padding: 1rem 2rem;
  border: solid 2px ${theme.colorTertiary};
  transition: all 0.3s ease;
  width: 10rem;
  color: ${theme.colorSecondary};

  &:hover {
    box-shadow: inset 10rem 0 0 0 ${theme.colorSecondary};
    border-color: ${theme.colorSecondary};
    color: #fff;
    cursor: pointer;
  }
`;

export const FloatingImg = styled.div`
  width: min-content;
  height: min-content;
  margin: auto;

  & > img {
    object-fit: cover;
    width: 350px;
    height: 400px;
    opacity: 1;
    box-sizing: border-box;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
    transform: translatey(0px);
    animation: float 4s ease-in-out infinite;
  }

  @keyframes float {
    0% {
      box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
      transform: translatey(0px);
    }
    50% {
      box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);
      transform: translatey(-20px);
    }
    100% {
      box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
      transform: translatey(0px);
    }
  }
`;

export const SectionTitle = styled.h1`
  color: ${theme.colorSecondary};
  font-size: 3rem;
  text-align: left;
`;

export const FlexSection = styled.section`
  max-height: 200vh;
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
`;

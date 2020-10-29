import styled from "styled-components";
import theme from "../../theme/theme";

export const CardStack = styled.div`
  height: max-content;
  margin-bottom: 3rem;
  width: 100%;
  display: flex;

  & div:not(:first-child) {
    margin-left: -30px;
  }
`;

export const Card = styled.div`
  display: flex;
  height: 26rem;
  width: 18rem;
  background-color: ${theme.colorTertiary};
  border-radius: 10px;
  box-shadow: -1rem 0 1rem rgba(0, 0, 0, 0.4);
  transition: 0.4s ease-out;
  position: relative;
  left: 0px;
  color: white;

  @media only screen and (max-width: 1450px) {
    width: 15rem;
    height: 20rem;
  }

  @media only screen and (max-width: 1280px) {
    width: 10rem;
    height: 15rem;
  }

  &:hover {
    transform: translateY(-20px);
    transition: 0.4s ease-out;
    cursor: pointer;
  }

  &:hover ~ div {
    position: relative;
    left: 50px;
    transition: 0.4s ease-out;
  }
`;

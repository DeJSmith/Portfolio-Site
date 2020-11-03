import styled from "styled-components";
import theme from "../../theme/theme";

export const Shroud = styled.div`
  background-color: #fff;
  position: absolute;
  width: 0;
  height: min-content;
  animation: 3s ease-in-out swipe;
  border-left: 2px solid ${theme.colorSecondary};
  overflow: hidden;
  margin: 0rem auto;
  white-space: nowrap;

  @keyframes swipe {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
      border-left: none;
    }
  }
`;

export const Liflex = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

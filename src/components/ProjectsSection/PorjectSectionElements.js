import styled from "styled-components";

export const ProjectGrid = styled.div`
  width: 100%;
  height: max-content;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  column-gap: 4rem;
  row-gap: 4rem;

  @media only screen and (max-width: 1500px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 1050px) {
    grid-template-columns: 1fr;
  }
`;

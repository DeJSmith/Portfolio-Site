import styled from "styled-components";
import theme from "../../theme/theme";

export const ProjectGrid = styled.div`
  width: 100%;
  height: max-content;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  column-gap: 4rem;
  row-gap: 4rem;

  ${theme.media.md} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${theme.media.sm} {
    grid-template-columns: auto;
  }



`;

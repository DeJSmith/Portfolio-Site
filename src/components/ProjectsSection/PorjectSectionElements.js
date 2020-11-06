import styled from "styled-components";
import theme from "../../theme/theme";

export const ProjectGrid = styled.div`
  width: 100%;
  height: max-content;
  display: grid;
  grid-template-columns:repeat(2, 1fr);
  grid-template-rows: auto;
  column-gap: 4rem;
  row-gap: 4rem;

  ${theme.media.xl} {
    grid-template-columns: 100%;
  }

  ${theme.media.sm} {
    grid-template-columns: auto;
  }



`;

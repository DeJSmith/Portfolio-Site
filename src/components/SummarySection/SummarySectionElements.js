import styled from "styled-components";
import theme from "../../theme/theme";



export const Liflex = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  column-gap: 3rem;

  ${theme.media.lg}{
    flex-direction: column;
    row-gap: 2rem;
  }
`

export const SkillsWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(5,1fr);
  padding: 2rem 4rem;
  margin-top: 2rem;
  list-style: none;
  row-gap: 2rem;
  column-gap: 2rem;

  ${theme.media.md}{
    grid-template-columns: repeat(3, 1fr); 
  }

  ${theme.media.sm}{
    grid-template-columns: repeat(2, 1fr);
  }
`
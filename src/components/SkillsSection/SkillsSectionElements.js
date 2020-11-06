import styled from 'styled-components';
import theme from '../../theme/theme';

export const EducationWrapper = styled.div`
    margin: auto;
    display: grid;
    grid-template-columns: 2fr 4fr;
    column-gap: 2rem;

    ${theme.media.md} {
        grid-template-columns: auto;
        grid-template-rows: auto;
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

export const Liflex = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const CourseGrid = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  column-gap: 4rem;
  row-gap: 4rem;

  ${theme.media.lg} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${theme.media.md} {
    grid-template-columns: repeat(1, 1fr);
  }

  ${theme.media.sm} {
    grid-template-columns: auto;
  }
`
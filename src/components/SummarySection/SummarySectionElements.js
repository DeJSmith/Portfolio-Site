import styled from "styled-components";
import theme from "../../theme/theme";


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


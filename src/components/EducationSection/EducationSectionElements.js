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
import styled from 'styled-components';
import theme from '../../theme/theme';

export const Frame = styled.iframe`
    width: 1200px;
    min-height: auto;
    height: 950px;
    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
 

   ${theme.media.xl}{
        transform: scale(0.7);
        margin-left: -10rem;
        
   }

   ${theme.media.md}{
        transform: scale(0.5);
   }

`
import styled from 'styled-components';
import theme from '../../theme/theme';


export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: 4rem;
    z-index: 99;
    margin: auto;

    ${theme.media.lg}{
        font-size: 3rem;
    }

    ${theme.media.md} {
        font-size: 2.5rem;
    }

    ${theme.media.sm}{
        font-size:2rem;
    }
`

export const HeroImg = styled.img`
    color: ${theme.colorSecondary};
    height: auto;
    width: 50rem;
    opacity: 0.8;
    margin: auto;

    ${theme.media.lg} {
        width: 40rem;
    }

    ${theme.media.md} {
        width: 30rem;
    }

    ${theme.media.md}{
        width: 24rem;
        padding: 2rem;
        margin: 0;
    }
`

export const Quoute = styled.div`
    color: ${theme.colorPrimary};
    text-align: center;
    font-size: 1.5rem;
    margin: auto;

    ${theme.media.lg} {
        font-size: 1rem;
    }
`


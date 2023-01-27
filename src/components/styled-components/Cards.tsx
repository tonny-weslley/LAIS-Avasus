import styled from 'styled-components'; 

export const CursosCard = styled.div`

    background-color: var(--color-bg);
    padding: 2rem;
    border-radius: 2rem;
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    @media (min-width: 768px) {
        flex-direction: row;
    }

`;

export const CardFigure = styled.figure`

    width: 8vw;
    height: 8vw;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 2rem;
    }

`;
import styled from 'styled-components'; 

export const CursosCard = styled.div`

    background-color: var(--color-bg);
    padding: 2rem;
    border-radius: 1rem;
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

    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 0.5rem;
    }

`;

export const CardInfo = styled.div`
    display: flex;
    margin: 2vh;
    justify-content: space-around;
    width: 60%;

`;

export const CardInfoItem = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;
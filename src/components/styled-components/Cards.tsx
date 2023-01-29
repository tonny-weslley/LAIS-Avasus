import styled from 'styled-components'; 

export const CursosCard = styled.div`

    background-color: var(--color-bg);
    padding: 2rem;
    border-radius: 1rem;
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 2fr 6fr 4fr 4fr 3fr;
        padding: 0.8rem 1rem;
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

    @media(min-width: 768px) {
        img{
            width: 6rem;
            height: 6rem;
            border-radius: 1rem;
        }
    }

`;

export const CardStatus = styled.div`
    display: flex;
    margin: 2vh;
    justify-content: space-around;
    width: 60%;
    @media (min-width: 768px) {
        width: auto;
    }

`;

export const CardStatusItem = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (min-width: 768px) {
        flex-direction: row;
        
        p{
            margin: 0 0.6rem;
        }

    }

`;

export const CardInfo = styled.div`

    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;




`;
import styled from 'styled-components';

export const Button = styled.button`
    background-color: var(--color-grey);
    color: var(--color-white);
    border: none;
    outline: none;
    padding: 0.5rem 1.5rem;
    border-radius: 2rem;
    font-size: 0.9rem;
    font-weight: 500;
    margin: 0.5rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: var(--color-primary-hover);
    }

`;

export const ButtonVariant = styled(Button)`
    background-color: var(--color-white);
    color: var(--color-grey);
    border: 1px solid var(--color-grey);
    &:hover {
        background-color: var(--color-primary-hover);
        color: var(--color-white);
        border: 1px solid var(--color-primary-hover);
    }
`;

export const ButtonDrawer = styled(Button)`
    border-radius: 4px;
    width: 90%;
    height: 3rem;
    margin: 1vh auto;
`;

export const ButtonDrawerVariant = styled(ButtonVariant)`
    border-radius: 4px;
    width: 90%;
    height: 3rem;
    margin: 1vh auto;
`;


export const ButtonExit = styled(Button)`
    margin: 2vh 2vw 0 auto;
    background-color: var(--color-white);
    color: var(--color-primary-hover);
    border: 1px solid var(--color-primary-hover);
    border-radius: 5px;
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
    svg {
        color: var(--color-primary-hover);
    }
    &:hover {
        background-color: var(--color-primary-hover);
        color: var(--color-white);
        border: 1px solid var(--color-primary-hover);
        svg {
            color: var(--color-white);
        }
    }
`;

export const ButtonModulo = styled(Button)`

    width: 80%;
    padding: 1.4vh;
    margin-top: 3vh;
    font-weight: bold;
    @media (min-width: 768px) {
        
        padding: 1vh;
        margin: 0px 0px 0px 1vw;
    
    }


`;


export const ButtonVerMais = styled(Button)`
    font-weight: bold;
    font-size: 1.2rem;
    margin-top: 3vh;
    border-radius: 15px;
    padding: 1vh 8vw;
`;


export const NavigationButton = styled.button`
    background-color: var(--color-white);
    color: var(--color-grey);
    border: 1px solid var(--color-grey);
    border-radius: 5px;
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
    margin: 0 1vw;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: var(--color-primary-hover);
        color: var(--color-white);
    }
`;

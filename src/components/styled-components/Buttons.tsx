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
    width: 100%;
    height: 3rem;
    margin: 1vh auto;
`;

export const ButtonDrawerVariant = styled(ButtonVariant)`
    width: 100%;
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
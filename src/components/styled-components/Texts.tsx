import styled from "styled-components";

export const Title = styled.h1`
    color: var(--color-primary-hover);
    font-size: 1.5rem;
    font-weight: 600;
    margin: auto;
    width: fit-content;
`;

export const Subtitle = styled.h2`
    color: var(--color-primary);
    font-size: 1.25rem;
    font-weight: 500;
    margin: auto;
    width: fit-content;
`;

export const Text = styled.p`

    color: var(--color-primary);
    font-size: 1rem;
    font-weight: 400;
    margin: auto;
    width: fit-content;

`;

export const TextVariant = styled(Text)`
    color: var(--color-primary-hover);
    
`;
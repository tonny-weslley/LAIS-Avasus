import styled from "styled-components";

export const Title = styled.h1`
  color: var(--color-primary-hover);
  font-size: 1.4rem;
  font-weight: bold;
  margin: auto;
  width: fit-content;
`;

export const TitleStart = styled(Title)`

  margin: 0;

`;

export const Title2 = styled(Title)`
  color: var(--color-primary);
  margin: 0;
  width: 100%;
  font-weight: normal;

`;

export const Title3 = styled(Title)`
  color: var(--color-white);
  margin: 0;

`;

export const TitleAlternative = styled(Title)`
  font-size: 1.3rem;
  color: var(--color-white);
`;

export const TitleAlternative2 = styled(Title)`
  font-size: 1.4rem;
`;


export const Subtitle = styled.h2`
  margin: 1rem auto;
  color: var(--color-primary);
  font-size: 1rem;
  font-weight: bold;
  width: fit-content;
  @media (min-width: 768px) {
    font-size: 1rem;
    margin: 0px 2vw;
  }
`;

export const AlternativeSubtitle = styled(Subtitle)`
  color: var(--color-white);
  font-size: 1rem;
  font-weight: normal;
  margin: 1.5vh 0;

`;

export const AlternativeSubtitle2 = styled(AlternativeSubtitle)`
  color: var(--color-primary);
  font-weight: bold;
`;


export const Text = styled.p`
  color: var(--color-primary);
  font-size: 1rem;
  margin: auto;
  width: fit-content;
`;

export const TextEnd = styled(Text)`
  margin: 0 0 1rem auto;
  
`;

export const Text2 = styled(Text)`
  margin-top: 1rem;
`;

export const Text3 = styled(Text)`
  font-size: 0.9rem;
  font-weight: bold;

`;

export const TextVariant = styled(Text)`
  color: var(--color-primary-hover);
  font-size: 0.8rem;
  font-weight: bold;
  @media (min-width: 768px) {
    margin: 1vh 2vw;
  }
`;

export const TextVariant3 = styled(TextVariant)`
  margin: 1vh 0;

`

export const TextVariant2 = styled(TextVariant)`
  color: var(--color-grey);
  font-weight: normal;
`;

export const TextMargin = styled(Text)`
  margin: 0 1vh;
  font-weight: bold;
`;




export const LinkText = styled.a`
  color: var(--color-primary);
  font-size: 0.8rem;
  font-weight: bold;
  text-decoration: none;
  margin: 1vh 0 0 auto;
  font-size: 1rem;
  &:hover {
    color: var(--color-primary-hover);
    text-decoration: underline;
    cursor: pointer;
  }
`;

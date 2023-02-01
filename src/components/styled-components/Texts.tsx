import styled from "styled-components";

export const Title = styled.h1`
  color: var(--color-primary-hover);
  font-size: 1.5rem;
  font-weight: 600;
  margin: auto;
  width: fit-content;
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

export const Text = styled.p`
  color: var(--color-primary);
  font-size: 1rem;
  font-weight: 400;
  margin: auto;
  width: fit-content;
`;

export const TextVariant = styled.p`
  color: var(--color-primary-hover);
  font-size: 0.8rem;
  font-weight: bold;
  @media (min-width: 768px) {
    margin: 1vh 2vw;
  }
`;

export const TextVariant2 = styled(Text)`
  color: var(--color-grey);
  font-size: 0.8rem;
`;

export const TileAlternative = styled(Title)`
  font-size: 1.3rem;
  color: var(--color-white);
`;

export const AlternativeSubtitle = styled(Subtitle)`
  font-size: 1.5rem;
`;

export const LinkText = styled.a`
  color: var(--color-primary);
  font-size: 0.8rem;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    color: var(--color-primary-hover);
    text-decoration: underline;
    cursor: pointer;
  }
`;

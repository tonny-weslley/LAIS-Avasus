import styled from "styled-components";

export const Section = styled.section`
  margin-top: 4rem;
  width: 100%;
`;

export const Modulos = styled.section`
  margin: 5vh auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const CenterSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const FooterSection = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 2rem 0;
  padding-top: 2rem;
`;

export const FooterImage = styled.figure`
  margin: 3vh auto;
`;

export const RealizacaoSection = styled.section`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: var(--color-primary-hover);
  
`;

export const RealizacaoSectionItem = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70%;
    margin: 4vh auto 0px auto;
    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-around;
  }

`;

export const FooterInfo = styled.div`
    background-color: var(--color-bg-dark);

`;

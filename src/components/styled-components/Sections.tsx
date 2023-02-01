import styled from "styled-components";

interface Props {
  onPress: any;
  src: any;
  width: string;
  height: string;
}


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

export const ModulosSection = styled(Modulos)`
  justify-content: start;
  align-items: start;

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
  margin-top: 6vh;
`;

export const FooterImage = styled.figure`
  margin: 3vh auto;
`;

export const RealizacaoSection = styled.section`
  padding: 1rem 0;
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
  margin: 3vh auto 0 auto;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const FooterInfo = styled.div`
  width: 100%;
  background-color: var(--color-bg-dark);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2vh 0;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const FooterCopy = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  padding: 2vh 0;
  background-color: var(--color-bg-light);
  p {
    color: var(--color-white);
  }
`;

export const LaisBrand = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 35%;
  margin: 0 auto;
  text-align: center;
  img {
    display: none;
    @media (min-width: 768px) {
      display: block;
      width: 10vw;
    }
  }
  p {
    color: var(--color-white);
    font-size: 0.8rem;
    margin: 1vh auto;
  }
`;

export const FooterNav = styled.nav`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    width: fit-content;
    margin: 0 auto;
    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      li {
        text-align: start;
        list-style: none;
        margin: 1vh 0;
        a {
          color: var(--color-white);
          text-decoration: none;
          &:hover {
            text-decoration: underline;
            cursor: pointer;
          }
        }
      }
    }
  }
`;

export const FooterSocial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2vh 0 0 0;
  @media (min-width: 768px) {
    margin: 0;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2vh 0;
  svg {
    font-size: 2rem;
    margin: 0 1vw;
    color: var(--color-white);
  }
`;


export const CursosSection = styled.section`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 5vh auto;
  flex-wrap: wrap;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: start;
    align-items: start;
  }

`;

export const CursoTituloSection = styled.section<{ src: string }>`
  background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${({src}) => src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 25vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


`;

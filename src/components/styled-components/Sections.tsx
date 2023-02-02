import styled from "styled-components";

export const Section = styled.section`
  margin-top: 3rem;
  width: 100%;
`;

export const Modulos = styled.section`
  margin: 5vh auto;
  width: 60%;
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
  @media (min-width: 1400px) {
    flex-direction: row;
    justify-content: start;
    align-items: start;
  }
`;

export const CursoTituloSection = styled.section<{ src: string }>`
  background-image: linear-gradient(#000000b7, #000000b7),
    url(${({ src }) => src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 20vh;
  display: flex;
  margin: 0 auto 2vh auto;
  flex-direction: column;
  justify-content: center;
`;

export const HeaderCurso = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: fit-content;
`;

export const InlineDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 4vh auto;
  width: 100%;
`;

export const InlineDivItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const DescricaoDiv = styled.div`
  margin: 3vh 0;
`;

export const ObjetivoDiv = styled.div`
  margin: 3vh 0;
`;

export const CreditoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 3vh auto;
  width: 100%;
  flex-wrap: wrap;
  img {
    width: 10vw;
  }
  svg {
    width: 40%;
  }
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ParceirosSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 5vh 0;
  flex-wrap: wrap;
  @media (min-width: 1400px) {
    flex-direction: row;
    justify-content: start;
    align-items: start;
  }
`;

export const PaginationSection = styled.section`
  
  display: none;

  @media (min-width: 768px) {
  
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    margin: 0 auto;
  
  }
`;

export const FakeCarouselDiv = styled.div<{ src: string }>`
  display: none;
  background-image: linear-gradient(#ececec75, #ececec75),
    url(${({ src }) => src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60vh;
    margin: 0 auto;
    flex-wrap: wrap;
  }
`;


export const PaginationInline = styled.div`

  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  padding: 0 2vw;
  @media (min-width: 768px) {
    display: none;
  }


`;
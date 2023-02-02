import styled from "styled-components";

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

    p {
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

export const ParceirosCard = styled.div`
  background-color: var(--color-bg);
  padding: 2rem;
  width: 80%;
  margin: 1rem auto;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 4rem;
  }
`;

export const ParceirosCardItem = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 1rem 0;
  h2 {
    margin: 0px auto 1rem auto;
  }
  p {
    margin: 0px auto 1rem auto;
  }
  @media(min-width: 768px) {
    margin: 0;
  }
`;

export const CardRating = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1rem 0;
    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-around;
        margin: 0;
    }
`;

export const CursoCardPainel = styled.div`

  margin: 1rem auto;
  display: flex;
  flex-direction: column; 
  width: 100%;
  @media (min-width: 1400px) {
    width: 30%;
  }
`;

export const ParceirosCardPainel = styled.div`

  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 40vh
  justify-content: space-between; 
  figure{
    img{
      
      width: 100%;
      border-radius: 0.2rem;
    }
  }
  hr{
    margin: 1rem 0;
    border: 1px solid var(--color-primary-light);
    border-radius: 1rem;
  }

  @media (min-width: 1400px) {
    width: 30%;
    img{
      height: 15vh;
    }
  }

`;


export const CardFigurePainel = styled.figure`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  img {
    width: 80%;
    height: 80%;
  }

`

export const CardStatusItemPainel = styled.div`

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;

`;

export const TransparenciaCard = styled.div`

  background-color: var(--color-bg);
  padding: 0.5rem;
  border-radius: 1rem;
  margin: 3vh 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.75);


`;

export const TransparenciaCardHeader = styled.div`


`;

export const DadosGeraisCardItems = styled.div`

  margin: 1vh 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }



`;

export const DadosGeraisCardItem = styled.div`
  margin: 2vh auto;
  width: 12vw;
  img{
    margin: 0 1vw;
  }

`
export const DadosGeraisCardItemHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 1rem auto;
`;

export const DadosGeraisCardItemBody = styled.div`

`;

export const InlineMenuInicio = styled.div`

  display: flex;
  width: 100%;
  margin: 2vh 0;
  @media (min-width: 768px) {
    display: none;
  }

`;

export const InlineMenuModulo = styled(InlineMenuInicio)`

  display: flex;
  width: 100%;
  margin: 2vh 0;
  @media (min-width: 1400px) {
    display: none;
  }

`;